import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import UserGithub from './UserGithub/UserGithub';

export default class Main extends Component {
  render() {
    return (
      <UserGithub source="https://api.github.com/users/vvv" />
    );
  }
}
