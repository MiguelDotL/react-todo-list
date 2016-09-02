import React from 'react'     //  var React = require('react');
import { render } from 'react-dom'  //  var render = require('react-dom').render;
import App from '../components/App'


render(
  <App/>,                           // define the encompasing component,

  document.getElementById("app")    // DOM element to mount to
)
