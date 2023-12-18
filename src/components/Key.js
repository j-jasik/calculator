import { Button } from "react-bootstrap";

export default function Key({label, variant='secondary'}){
  const styles = {
    buttonUniform: {
      height: '100px',
      width: '100px'
    }
  }

  return (
    <Button style={styles.buttonUniform} variant={variant}>{label}</Button>
  )
}