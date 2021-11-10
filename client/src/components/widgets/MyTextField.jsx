import React from 'react';
import TextField from '@mui/material/TextField';

function MyTextField({ fullName, fullLabel, fullValue, hC, fullHelperText }) {
  return (
    <div style={{ marginBottom: '25px' }}>
      <TextField
        fullWidth
        name={fullName}
        label={fullLabel}
        value={fullValue}
        helperText={fullHelperText}
        onChange={hC}
      />
    </div>
  );
}

export default MyTextField;
