import React, { Component } from 'react';
// import BlueWeb from '../images/blue-web';

class Hero extends Component {

  render() {

    const {
      image,
      heroText
    } = this.props

    return (
      <div className={`hero-img ${image}`}>
        {/* <p className="hero-text">{this.props.heroText}</p>     <p>{heroText}</p>
 */}
        <div className="hero-text">
          <h2>The first property management system accessible as both a traveler and a hotel administrator. Connect directly to your hotel of choice!</h2>
        </div>
      </div>
    );
  }
}

export default Hero;
