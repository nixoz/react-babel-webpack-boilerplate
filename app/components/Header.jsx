import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="header">
        <Link to="/">Home</Link>, <Link to="users">users</Link>
      </div>
    );
  }
}
