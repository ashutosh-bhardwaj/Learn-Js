import React from "react";
import { connect } from "react-redux";

import Add from "./Add";

const Edit = ({ history, id, phone }) => (
  <Add
    history={history}
    action="UPDATE"
    id={id}
    model={phone.model}
    price={phone.price}
    status={phone.status}
  />
);

const mapStateToProps = state => ({
  phones: state.phones
});

export default connect(mapStateToProps, null)(Edit);
