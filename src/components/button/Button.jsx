

const Button = ({text, handleButton,disabledState }) => {
  return (
    <button disabled={disabledState} onClick={handleButton}>{text}</button>
  )
}

export default Button