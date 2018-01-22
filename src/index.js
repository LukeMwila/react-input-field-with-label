import React, { Component } from 'react'
import PropTypes from 'prop-types'

const InputField = (props) => {
    return(
        <div>
          <span className={props.labelStyling}>{ props.label }</span><br />
          <input
            className={props.inputFieldStyling}
            onChange={ props.getFieldInput !== undefined ? props.getFieldInput : null }
            placeholder={props.placeholder}
            />
        </div>
    )
}

InputField.propTypes = {
  label: PropTypes.string,
  getFieldInput: PropTypes.func,
  placeholder: PropTypes.string,
  inputFieldStyling: PropTypes.string,
  labelStyling: PropTypes.string
}

export default InputField
