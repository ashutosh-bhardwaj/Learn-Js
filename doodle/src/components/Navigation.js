import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import { ListItem } from 'material-ui/List';
import * as routes from '../contants/routes';

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  handleToggle = () => this.setState({ open: !this.state.open });

  handleClose = () => this.setState({ open: false });

  render() {
    return (
      <div>
        <AppBar title="Doodle" onLeftIconButtonClick={this.handleToggle} />
        <Drawer open={this.state.open}>
          <ListItem onClick={this.handleClose}>
            <Link style={styles.link} to={routes.SIGN_UP}>
              Sign up
            </Link>
          </ListItem>
          <ListItem onClick={this.handleClose}>
            <Link style={styles.link} to={routes.SIGN_IN}>
              Sign in
            </Link>
          </ListItem>
          <ListItem onClick={this.handleClose}>
            <Link style={styles.link} to={routes.SIGN_OUT}>
              Sign out
            </Link>
          </ListItem>
          <ListItem onClick={this.handleClose}>
            <Link style={styles.link} to={routes.LANDING}>
              Landing
            </Link>
          </ListItem>
          <ListItem onClick={this.handleClose}>
            <Link style={styles.link} to={routes.HOME}>
              Home
            </Link>
          </ListItem>
          <ListItem onClick={this.handleClose}>
            <Link style={styles.link} to={routes.ME}>
              account
            </Link>
          </ListItem>
        </Drawer>
      </div>
    );
  }
}

export default Navigation;

const styles = {
  link: {
    textDecoration: 'none',
    color: '#222',
  },
};
