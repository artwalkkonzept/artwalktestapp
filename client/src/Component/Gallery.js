import React, { Component } from 'react';
import logo from '../content/ArtWalk_Logo final_ww.png';
export default class Header extends Component {
  render() {
    return (
      <div className="row">
        <div className="logo">
          <img alt="" src={logo} width="270" />
        </div>
      </div>
    );
  }
} 