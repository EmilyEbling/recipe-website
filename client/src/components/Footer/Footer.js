import React, { Component } from 'react';
import './footer.css';

class Footer extends Component {

  render() {
    return (
      <div className="Footer">
        <div>
          <a className="helpLink" href="#">Help</a>
          <p className="copyright">&copy;2020 Emily Ebling</p>
        </div>
      </div>
    )
  }
}

export default Footer;