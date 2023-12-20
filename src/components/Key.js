import { Button } from "react-bootstrap";

export default function Key({label, variant='secondary', isZero=false}){
  let buttonWidth = "80px";
  if(isZero){
    buttonWidth = "180px"
  }

  const styles = {
    buttonUniform: {
      height: '80px',
      width: buttonWidth
    }
  }

  return (
    <Button style={styles.buttonUniform} variant={variant}>{label}</Button>
  )
}