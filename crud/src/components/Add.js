import React, { Component } from "react";
import { connect } from "react-redux";
import { addItem, updateItem } from "../actions";
import Paper from "material-ui/Paper";
import TextField from "material-ui/TextField";
import SelectField from "material-ui/SelectField";
import MenuItem from "material-ui/MenuItem";
import { RadioButton, RadioButtonGroup } from "material-ui/RadioButton";
import RaisedButton from "material-ui/RaisedButton";

import * as routes from "../constants/routes";

class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      model: this.props.model || "Iphone x",
      status: this.props.status || "old",
      price: this.props.price,
      action: this.props.action,
      id: this.props.id
    };
  }

  handleChange = (event, index, value) => this.setState({ model: value });
  handleRadioChange = (event, value) => this.setState({ status: value });
  handlePriceChange = (event, value) => this.setState({ price: value });

  handleSubmit = () => {
    const { action, model, status, price, id } = this.state;
    const payload = {
      model,
      price,
      status
    };

    if (action === "ADD") {
      this.props.addItem(payload);
    } else if (action === "UPDATE") {
      this.props.updateItem(id, payload);
    }
    this.props.history.push(routes.HOME);
  };

  render() {
    return (
      <Paper zDepth={2} style={{ padding: "20px" }}>
        <SelectField
          floatingLabelText="Models"
          value={this.state.model}
          onChange={this.handleChange}
        >
          <MenuItem value="Iphone 7" primaryText="Iphone 7" />
          <MenuItem value="Iphone 7s" primaryText="Iphone 7s" />
          <MenuItem value="Iphone 8" primaryText="Iphone 8" />
          <MenuItem value="Iphone 8s" primaryText="Iphone 8s" />
          <MenuItem value="Iphone x" primaryText="Iphone X" />
        </SelectField>
        <br />
        <br />
        <br />
        <RadioButtonGroup
          name="old-new"
          onChange={this.handleRadioChange}
          defaultSelected="old"
        >
          <RadioButton
            value="brand new"
            label="New"
            style={styles.radioButton}
          />
          <RadioButton value="old" label="Old" style={styles.radioButton} />
        </RadioButtonGroup>
        <TextField
          floatingLabelText="price"
          hintText="$"
          value={this.state.price}
          onChange={this.handlePriceChange}
        />
        <br />
        {this.state.action === "ADD" ? (
          <RaisedButton label="Add" primary onClick={this.handleSubmit} />
        ) : (
          <RaisedButton label="Save" primary onClick={this.handleSubmit} />
        )}
      </Paper>
    );
  }
}
export default connect(null, { addItem, updateItem })(Add);

const styles = {
  radioButton: {
    marginBottom: 16
  }
};
