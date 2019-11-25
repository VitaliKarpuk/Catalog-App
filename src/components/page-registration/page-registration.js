import React, { Component } from 'react'
import { withAuth } from '@okta/okta-react';
export default withAuth(class PageRegistration extends Component {
    state = {
        authenticated: null,
        currentUserName: '',
        currentUserEmale: ''
    }
  checkAuthentication = async() => {
    const authenticated = await this.props.auth.isAuthenticated();
    if (authenticated !== this.state.authenticated) {
      this.setState({ authenticated });
    }
  }
  componentDidMount(){
    const idToken = JSON.parse(localStorage.getItem('okta-token-storage'))
    this.setState({
        currentUserEmale: idToken.idToken.claims.email,
        currentUserName: idToken.idToken.claims.name
    })
    this.checkAuthentication();
    
}


  async componentDidUpdate() {
    this.checkAuthentication();
  }

  login = async() => {
    this.props.auth.login('/');
  }

  logout = async() => {
    this.props.auth.logout('/');
  }

  render() {
    const { currentUserEmale, currentUserName } = this.state
        if (this.state.authenticated === null) return null;
    const mainContent = this.state.authenticated ? (
        <div >
        <button className = 'btn btn-light btn-lg' onClick = {this.logout}>Logout</button>
        </div>
    ):(
        <div className = 'lead'> 
        <button className = 'btn btn-light btn-lg' onClick = {this.login}>Login</button>
        </div>
    )
    return (
        <div>
            <h1>Welcome {currentUserName}</h1>
            <p>Email: {currentUserEmale}</p>
            {mainContent}
        </div>
    );
  }
}
);
