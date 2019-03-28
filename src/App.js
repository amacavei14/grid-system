import React, { Component } from 'react';
import { Container, Row, Col } from 'react-awesome-styled-grid'
import logo from './logo.svg';
import './App.scss';
import { ThemeProvider } from 'styled-components'
import { Input } from './Input'

function calc(px) {
  return px / 10;
}

const customConf = {
    mediaQuery: 'only screen',
    columns: {
      xs: 4,
      sm: 8,
      md: 8,
      lg: 12,
      xl: 12,
    },
    gutterWidth: {
      xs: calc(32),
      sm: calc(32),
      md: calc(32),
      lg: calc(32),
      xl: 1.5,
    },
    paddingWidth: {
      xs: calc(32),
      sm: calc(32),
      md: calc(32),
      lg: calc(32),
      xl: 1.5,
    },
    container: {
      xs: 'full', // 'full' = max-width: 100%
      sm: 'full', // 'full' = max-width: 100%
      md: 'full', // 'full' = max-width: 100%
      lg: 'full', // max-width: 1440px
      xl: 'full', // max-width: 1440px
    },
    breakpoints: {
      xs: 1,
      sm: 48, // 768px
      md: 64, // 1024px
      lg: 90, // 1440px
      xl: 120, // 1920px
    },
  }

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <ThemeProvider theme={{ awesomegrid: customConf }}>
           <Container>
            <Row>
              <Col xs={1} md={1} lg={1}><Input></Input></Col>
              <Col xs={1} md={1} lg={1}><Input></Input></Col>
              <Col xs={1} md={1} lg={1}><Input></Input></Col>
              <Col xs={1} md={1} lg={1}><Input></Input></Col>
              <Col xs={1} md={1} lg={1}><Input></Input></Col>
              <Col xs={1} md={1} lg={1}><Input></Input></Col>
              <Col xs={1} md={1} lg={1}><Input></Input></Col>
              <Col xs={1} md={1} lg={1}><Input></Input></Col>
              <Col xs={1} md={1} lg={1}><Input></Input></Col>
              <Col xs={1} md={1} lg={1}><Input></Input></Col>
              <Col xs={1} md={1} lg={1}><Input></Input></Col>
              <Col xs={1} md={1} lg={1}><Input></Input></Col>
            </Row>
          </Container>
          </ThemeProvider>
        </header>
      </div>
    );
  }
}

export default App;
