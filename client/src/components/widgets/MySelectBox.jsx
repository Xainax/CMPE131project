import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function MySelectBox({ fullName, fullLabel, fullValue, hC, options }) {
  return (
    <div style={{ marginBottom: '25px' }}>
      <FormControl fullWidth>
        <InputLabel id={fullName}>{fullLabel}</InputLabel>
        <Select
          name={fullName}
          labelId={fullName}
          id={fullName}
          value={fullValue || 0}
          label={fullLabel}
          onChange={hC}
        >
          {options.map((record, index) => {
            return (
              <MenuItem key={fullName + index} value={index}>
                {record}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </div>
  );
}

export default MySelectBox;
