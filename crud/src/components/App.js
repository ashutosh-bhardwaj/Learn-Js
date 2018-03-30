import React, { Component } from "react";
import { connect } from "react-redux";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import AppBar from "material-ui/AppBar";
import AddCircle from "material-ui/svg-icons/content/add-circle";

import * as routes from "../constants/routes";
import Home from "./Home";
import Add from "./Add";
import Phone from "./Phone";
import Edit from "./Edit";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { add: false };
  }

  handleToggleAdd = () => this.setState({ add: !this.state.add });

  render() {
    const { phones } = this.props;
    let phone = {};
    return (
      <Router>
        <MuiThemeProvider>
          <div>
            <AppBar
              title="iPhone Seller"
              showMenuIconButton={false}
              iconElementRight={<AddCircle style={{ color: "#fff" }} />}
              iconStyleRight={{ padding: "10px" }}
              onRightIconButtonClick={this.handleToggleAdd}
            />
            {this.state.add && <Redirect to={routes.ADD} />}
            <Route exact path={routes.HOME} component={Home} />
            <Route
              path={routes.EDIT_ID}
              render={({ history, match }) => {
                phone = phones
                  .filter(phone => phone.id === match.params.id * 1)
                  .pop();

                return (
                  <Edit
                    history={history}
                    id={match.params.id * 1}
                    phone={phone}
                  />
                );
              }}
            />
            <Route
              path={routes.ADD}
              render={({ history }) => <Add history={history} action="ADD" />}
            />
            <Route
              path={routes.DETAIL_ID}
              render={({ match, history }) => {
                phone = phones
                  .filter(phone => phone.id === match.params.id * 1)
                  .pop();
                return (
                  <div>
                    {phone ? (
                      <Phone
                        match={match}
                        history={history}
                        id={phone.id}
                        model={phone.model}
                        price={phone.price}
                      />
                    ) : (
                      <div style={styles.container}>
                        <h1 style={styles.title}>Sorry! No Details Found!</h1>
                      </div>
                    )}
                  </div>
                );
              }}
            />
          </div>
        </MuiThemeProvider>
      </Router>
    );
  }
}

const mapStateToProps = ({ phones }) => ({
  phones
});

export default connect(mapStateToProps, null)(App);

const styles = {
  container: {
    width: "50%",
    margin: "0 auto",
    textAlign: "center"
  },
  title: {
    color: "orange",
    fontSize: "40px"
  },
  subTitle: {
    color: "grey",
    fontSize: "24px"
  },
  hintText: {
    color: "skyblue",
    fontSize: "18px",
    marginRight: "20px"
  }
};
