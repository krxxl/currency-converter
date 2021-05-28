import React from 'react';
import Select from 'react-select';
import {customStyles} from 'constants/stylesForSelect';

const SelectBox = ({field, form, disabled, options, width, getValue = option => option.value, getLabel = option => option.label, onChange = () => null, ...otherProps}) => {
  const {value} = field;
  return (
    <Select
      value={value}
      onChange={(value) => {
        form.setFieldValue(field.name, value);
        onChange(value);
      }}
      className='select'
      styles={customStyles(width)}
      getValue={getValue}
      getLabel={getLabel}
      options={options}
      isSearchable={false}
      menuPlacement={'auto'}
      isDisabled={disabled}
      {...otherProps}
    />
  );
};

export default SelectBox;