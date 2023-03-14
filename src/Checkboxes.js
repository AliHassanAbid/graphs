
import React, { useState } from 'react';

const CheckboxExample = () => {
  const [checkboxValues, setCheckboxValues] = useState({
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
    checkbox4: false,
    checkbox5: false
  });

  const handleChange = (e) => {
    const { name, checked } = e.target;
    setCheckboxValues({
      ...checkboxValues,
      [name]: checked
    });

    // Automatically select checkbox2 and checkbox3 when checkbox4 is selected
    if (name === 'checkbox4' && checked) {
      setCheckboxValues({
        ...checkboxValues,
        checkbox2: true,
        checkbox3: true,
        checkbox4:true
      });
    }
  };

  return (
    <div>
      <input
        type="checkbox"
        name="checkbox1"
        checked={checkboxValues.checkbox1}
        onChange={handleChange}
      />
      <label>Checkbox 1</label>
      <br />
      <input
        type="checkbox"
        name="checkbox2"
        checked={checkboxValues.checkbox2}
        onChange={handleChange}
      />
      <label>Checkbox 2</label>
      <br />
      <input
        type="checkbox"
        name="checkbox3"
        checked={checkboxValues.checkbox3}
        onChange={handleChange}
      />
      <label>Checkbox 3</label>
      <br />
      <input
        type="checkbox"
        name="checkbox4"
        checked={checkboxValues.checkbox4}
        onChange={handleChange}
      />
      <label>Checkbox 4</label>
      <br />
      <input
        type="checkbox"
        name="checkbox5"
        checked={checkboxValues.checkbox5}
        onChange={handleChange}
      />
      <label>Checkbox 5</label>
    </div>
  );
};

export default CheckboxExample;