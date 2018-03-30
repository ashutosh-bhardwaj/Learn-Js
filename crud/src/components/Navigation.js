import React from "react";
import { Link } from "react-router-dom";
import AppBar from "material-ui/AppBar";
import Drawer from "material-ui/Drawer";
import { ListItem } from "material-ui/List";
import * as routes from "../constants/routes";

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  handleToggle = () => this.setState({ open: !this.state.open });

  render() {
    return (
      <div>
        <AppBar
          title="iPhone Seller"
          onLeftIconButtonClick={this.handleToggle}
        />
        <Drawer
          open={this.state.open}
          onRequestChange={open => this.setState({ open })}
        >
          <ListItem onClick={this.handleToggle}>
            {" "}
            <Link to={routes.HOME}> Home </Link>{" "}
          </ListItem>
        </Drawer>
      </div>
    );
  }
}

export default Navigation;
