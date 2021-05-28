import React from 'react';
import InputUI from 'components/UI/Form/Input';
import PropTypes from 'prop-types';

const Input = ({field, form, meta, icon, onChange = () => null, fieldClassName = '', ...otherProps}) => {
  return <InputUI
      {...field}
      onChange={(e) => {
        if (form.errors[field.name]) {
          form.setFieldError(field.name, '');
        }
        field.onChange(e);
        onChange(e, form)
      }}
      {...otherProps}
      readOnly={form.isSubmitting}
      error={form.errors[field.name]}
    />
};

Input.propType = {
  field: PropTypes.shape({
    name: PropTypes.string,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
  }).isRequired,
  icon: PropTypes.string,
  fieldClassName: PropTypes.string,
  form: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
};

export default Input;
