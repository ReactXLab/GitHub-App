import React, { Component } from 'react';
import PropTypes from 'prop-types';
import $ from "jquery";

class UserGithub extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      githubtUrl: '',
      avatarUrl: '',
    };
  }
  componentDidMount() {
    $.get(this.props.source, (result) => {
      console.log(result);
      const data = result;
      if (data) {
        this.setState({
          username: data.name,
          githubtUrl: data.html_url,
          avatarUrl: data.avatar_url
        });
      }
    });
  }
  render() {
    return (
      <div>
        <h3>{this.state.username}</h3>
        <img src={this.state.avatarUrl} alt="img" />
        <a href={this.state.githubtUrl}>Github Link</a>.
      </div>
    );
  }
}
UserGithub.propTypes = {
  source: PropTypes.string
};
UserGithub.defaultProps = {
  source: 'https://api.github.com/users/andy6804tw'
};

export default UserGithub;
