import React from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';

function MyDatePicker({ fullName, fullLabel, fullValue, hV }) {
  return (
    <div style={{ marginBottom: '25px' }}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          name={fullName}
          label={fullLabel}
          value={fullValue}
          onChange={(newValue) => {
            hV(fullName, newValue);
          }}
          renderInput={(params) => <TextField fullWidth {...params} />}
        />
      </LocalizationProvider>
    </div>
  );
}

export default MyDatePicker;
