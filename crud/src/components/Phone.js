import React from "react";
import { connect } from "react-redux";
import {
  Card,
  CardActions,
  CardMedia,
  CardTitle,
  CardText
} from "material-ui/Card";
import RaisedButton from "material-ui/RaisedButton";
import { removeItem } from "../actions";
import * as routes from "../constants/routes";

class Phone extends React.Component {
  handleClickOnDelete = () => {
    this.props.removeItem(this.props.id);
    this.props.history.push(routes.HOME);
  };

  handleClickOnEdit = () => {
    this.props.history.push(routes.EDIT + "/" + this.props.id);
  };

  render() {
    const { model, price } = this.props;
    return (
      <Card>
        <CardMedia>
          <img
            src={require("../images/iphone.jpg")}
            alt="iphone"
            style={{ height: "100%" }}
          />
        </CardMedia>
        <CardTitle title={model} />
        <CardText>$ {price}</CardText>
        <CardActions>
          <RaisedButton
            label="Edit"
            backgroundColor="#2ecc71"
            labelColor="#fff"
            onClick={this.handleClickOnEdit}
          />
          <RaisedButton
            label="Delete"
            backgroundColor="#c0392b"
            labelColor="#fff"
            onClick={this.handleClickOnDelete}
          />
        </CardActions>
      </Card>
    );
  }
}

export default connect(null, { removeItem })(Phone);
