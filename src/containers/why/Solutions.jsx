import React, { Component } from 'react';
import Paragraph from 'grommet/components/Paragraph';
import Heading from 'grommet/components/Heading';
import colors from '../../styles/colors';

class Solutions extends Component {

  render() {
    return (
      <div
      className="solutions"
      >
        {/* 2.2 */}
        <h2>Solutions</h2>
        <p className='paragraph-gray'>
          BookLocal will design a platform that incorporates the best features of the current system while omitting middlemen.
        </p>
        {this.props.children}
      </div>
    );
  }

}

export default Solutions;
