import React from 'react';
import Header from '../Header/Header';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';

function Coffee() {
    return (
        <div className="Coffee">
            <Header></Header>
            <NavBar></NavBar>
            <script data-name="BMC-Widget" src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js" data-id="emeb" data-description="Support me on Buy me a coffee!" data-message="Thank you for visiting. You can now buy me a coffee!" data-color="#ff813f" data-position="Right" data-x_margin="18" data-y_margin="18"></script>
            <Footer></Footer>
        </div>
    );
}

export default Coffee;

