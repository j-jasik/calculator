import { Container } from "react-bootstrap";

export default function Display(){
  const styles = {
    displayContainer: {
      backgroundColor: 'lightgray',
      border: '3px solid black',
      height: '50px',
      fontSize: '40px',
      textAlign: 'right',
      paddingBottom: '60px'
    }
  }

  return (
    <Container style={styles.displayContainer}>
      0 
    </Container>
  )
}