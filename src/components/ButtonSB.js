import PropTypes from "prop-types"

function ButtonSB({ label, backgroundColor = "red", size = "md", color = 'black', border = '2px solid black', handleClick }) {
  let scale = 1
  if (size === "sm") scale = 0.75
  if (size === "lg") scale = 1.5
  const style = {
    backgroundColor,
    padding: `${scale * 0.5}rem ${scale * 1}rem`,
    border,
    color,
  }
  return (
    <button onClick={handleClick} style={style}>
      {label}
    </button>
  )
}

ButtonSB.propTypes = {
  label: PropTypes.string,
  backgroundColor: PropTypes.string,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  color: PropTypes.string,
  border: PropTypes.string,
  handleClick: PropTypes.func,
}

export default ButtonSB