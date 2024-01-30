import React, { useState } from 'react';

const CustomDropdown = ({ options, onSelect, selectedValue }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (value) => {
    onSelect(value);
    setIsOpen(false);
  };

  return (
    <div className="custom-dropdown">
      <div className="custom-dropdown-selected" onClick={() => setIsOpen(!isOpen)}>
        {selectedValue || 'Select an option'}
      </div>
      {isOpen && (
        <ul className="custom-dropdown-menu">
          {options.map(option => (
            <li key={option.value} onClick={() => handleSelect(option.value)}>
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomDropdown;