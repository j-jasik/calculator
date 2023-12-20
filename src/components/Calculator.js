// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

import { Container, Row, Col } from 'react-bootstrap'

import Display from "./Display"
import Keyboard from "./Keyboard"

export default function Calculator(){
  const styles = {
    calcContainer: {
      marginTop: "50px",
      width: "422px",
      alignItmes: 'center'
    }
  }

  return (
    <Container style={styles.calcContainer}>
      <Row>
        <Col>
          <Row>
            <Display />
          </Row>
          <Row>
            <Keyboard />
          </Row>
        </Col>
      </Row>
    </Container>
  )
}