import React from 'react';
import LI from '../components/LI'
import Checkbox from '../components/Checkbox'

const Item = ({id, props, name, checked, onChange}) => {
  return (
    <LI>
      <Checkbox
        type="checkbox"
        data-name={name}
        id={`dir-${id}`}
        value={name}
        onChange={onChange}
        checked={checked}
      />
      <label htmlFor={`dir-${id}`}>
        {name}
      </label>
    </LI>
  )
}

export default Item


