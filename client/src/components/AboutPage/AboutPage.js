import React from 'react';
import Header from '../Header/Header';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import me from '../../img/me.JPG';
import 'bootstrap/dist/css/bootstrap.min.css';
import './about.css'

function AboutPage() {
  return (
    <div className="About">
      <Header></Header>
      <NavBar></NavBar>
      <Container>
        <Row>
          <Col><img className="photo" src={me} alt="A Photo of Me"></img></Col>
          <Col>
            <div>
              <p>My name is Emily and I love to cook and code.</p>
              <p>I was diagnosed with celiac disease in 2019, and have since been forced to adapt my cooking to accomodate my new allergy. Luckily there are lots of resources all across the internet, but a little less lucky, so many of them are centered around healthy living. To be blunt, I love desserts. I love fried things. Where are all the gluten free junk food recipes? In all seriousness, I know they exist, but the pickings are slim. This website is an attempt to break that trend and offer up recipes that you may miss or new recipes you'd love to try.</p>
              <p>All the recipes have been perfected by myself, and I hope you'll give them a try.</p>
              <p>With all that said, I did mention I like to code as well. This website was designed and developed by me. If you experience any technical difficulties or issues, please reach out using the help link at the bottom of the page.</p>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </div>
  );
}

export default AboutPage;

