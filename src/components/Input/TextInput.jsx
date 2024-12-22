// src/components/TextInput.js
import React, { useState } from 'react';

const TextInput = () => {
  const [value, setValue] = useState('');

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Type something..."
      />
      <p>Typed Value: {value}</p>
    </div>
  );
};

export default TextInput;
