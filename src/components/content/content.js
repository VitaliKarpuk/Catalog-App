import React, { Component } from 'react'
import { Sliders } from './slider/slider'
import { ContentInfo } from './content-info/content-info'
import { Footer } from '../footer/footer'
import './style.css'




export default class Content extends Component {


  render() {

    return (
      <div className = 'content'>
      <Sliders />
      <ContentInfo />
      <Footer />
        </div>
    );
  }
};