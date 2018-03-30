import React, { Component } from "react";
import { connect } from "react-redux";
import { List, ListItem } from "material-ui/List";

import PhoneIphone from "material-ui/svg-icons/hardware/phone-iphone";
import Star from "material-ui/svg-icons/toggle/star";
import Flower from "material-ui/svg-icons/maps/local-florist";

import * as routes from "../constants/routes";

class Home extends Component {
  handleDelete = event => console.log(event.value, "Delete Pressed");

  render() {
    const phones = this.props.phones;
    return (
      <div>
        {phones.length === 0 ? (
          <EmptyList />
        ) : (
          <List>
            {phones.map(phone => (
              <ListItem
                key={phone.id}
                primaryText={phone.model}
                leftIcon={<PhoneIphone />}
                rightIcon={<Star />}
                secondaryText={`$ ${phone.price} ${phone.status}`}
                onClick={() =>
                  this.props.history.push(routes.DETAIL + "/" + phone.id)
                }
              />
            ))}
          </List>
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ phones }) => ({ phones });

export default connect(mapStateToProps, null)(Home);

const EmptyList = () => (
  <div style={styles.container}>
    <h1 style={styles.title}>Sorry!</h1>
    <h5 style={styles.subTitle}>There are no iphones right now!</h5>
    <span style={styles.hintText}> Try adding some </span>
    <Flower color="green" />
  </div>
);

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
