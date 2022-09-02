import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import PropTypes from 'prop-types';

const Redirect = (props) => {
 
  let navigate = useNavigate()
  useEffect(() => {
    navigate(props.to)
  })
  return null
}

Redirect.propTypes = {
  to: PropTypes.string.isRequired
}

export default Redirect;