import React from 'react';
import Blockchain from './components/Blockchain';
import Subtitle from './components/Subtitle';
import BlockchainInfo from './components/BlockchainInfo';


import Container from 'react-bootstrap/Container';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';


import 'bootstrap/dist/css/bootstrap.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import './App.css';


class App extends React.Component {
  render() {
    return (
      <Container fluid className="d-flex flex-column justify-content-center no-pad">
        <header>
          <h1 className="text-center">Blockchain <i className="fas fa-cube text-info rotate"></i></h1>
        </header>
        <Subtitle />
        <Blockchain />
        <BlockchainInfo />

        <footer className="text-center">
          <ButtonGroup className="mt-3">
            <Button variant="secondary" disabled><i className="far fa-heart"></i></Button>
            <Button href="https://github.com/phoebeli23/blockchain" target="_blank"><i className="fab fa-github"></i></Button>
            <Button variant="info" href="https://www.linkedin.com/in/phoebeli503/" target="_blank"><i className="fab fa-linkedin"></i></Button>
          </ButtonGroup>
        </footer>
      </Container>
    );
  }
}

export default App;
