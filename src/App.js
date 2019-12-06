import React from 'react';
import { Header } from './components/header/header'
import Content  from './components/content/content'
import './App.css';
import { Route } from 'react-router-dom'
import Catalog from './components/catalog/catalog'
import { AboutUs } from './components/about-us/about_us'
import { Services } from './components/services/services'
import { Contact } from './components/contact/contact'
import Basket  from './components/header/basket/basket'
import PageRegistration from './components/page-registration/page-registration'

export const App = () => {
  return (
    <>

      <Header />
      <Route exact path = '/' component = { Content } />
      <Route exact path = '/catalog' component = { Catalog } />
      <Route path = '/services' component = { Services } />
      <Route path = '/about' component = { AboutUs } />
      <Route path = '/contact' component = { Contact } />
      <Route path = '/basket' component = { PageRegistration } />
      <Route path = '/profile' component = {PageRegistration} />
    </>
  )
}


