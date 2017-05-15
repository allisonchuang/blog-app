import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { signinUser, goTo } from '../actions';

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
  }

  onEmailChange(event) {
    this.setState({ email: event.target.value });
  }
  onPasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  render() {
    return (
      <div className="signin-page">
        <div className="new-signin">
          <div className="signin-title">Sign In</div>
          <input className="signin" placeholder="Email" value={this.state.email} onChange={this.onEmailChange} />
          <input className="signin" placeholder="Password" value={this.state.password} onChange={this.onPasswordChange} />
          <div className="signin-buttons">
            <button type="signin"
              onClick={() => {
                this.props.signin(
                { email: this.state.email, password: this.state.password },
                this.props.history);
                this.setState({
                  email: '',
                  password: '',
                });
              }}
            >Sign In</button>
            <button type="signin" onClick={() => { this.props.goTo('/signup', this.props.history); }}>Want a new account? Sign up here</button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => (
  {
    error: state.auth.message,
  }
);

const mapDispatchToProps = dispatch => (
  {
    signin: ({ email, password }, history) => dispatch(signinUser({ email, password }, history)),
    goTo: (path, history) => dispatch(goTo(path, history)),
  }
);


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignIn));
