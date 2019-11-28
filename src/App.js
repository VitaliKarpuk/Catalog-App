import React from 'react';
import { Security, SecureRoute, ImplicitCallback } from '@okta/okta-react';
import { Header } from './components/header/header'
import Content  from './components/content/content'
import './App.css';
import { Route } from 'react-router-dom'
import Catalog from './components/catalog/catalog'
import { AboutUs } from './components/about-us/about_us'
import { Services } from './components/services/services'
import { Contact } from './components/contact/contact'
import  PageRegistration  from './components/page-registration/page-registration'
import Login from './components/auth/Login'

export const App = () => {
  function onAuthRequired({ history }) {
    history.push('/login');
  }
  return (
    <>
    <Security
          issuer="https://dev-329898.okta.com/oauth2/default"
          client_id="0oa1xk7f0272QnTqH357"
          redirect_uri={window.location.origin + '/implicit/callback'}
          onAuthRequired={onAuthRequired}
        >
      <Header />

 */}
      <div>
      <Route
          path="/login"
          render={() => (
            <Login baseUrl="https://dev-329898.okta.com" />
          )}
      />
      </div>
      <Route path="/implicit/callback" component={ImplicitCallback} />
    </Security>
    </>
  )
}


