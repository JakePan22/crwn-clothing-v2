import { FormGroup, Input, FormInputLabel } from "./form-input.styles"

const FormInput = ({ label, ...otherProps }) => {
  return (
    <FormGroup>
      <Input {...otherProps} />
      {label && (
        <FormInputLabel
          className={`${
            otherProps.value.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </FormInputLabel>
      )}
    </FormGroup>
  )
}

export default FormInput

// TODO, continue this
