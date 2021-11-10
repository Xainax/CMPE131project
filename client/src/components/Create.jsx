import React from 'react';
import MyDatePicker from './widgets/MyDatePicker';
import MyTextField from './widgets/MyTextField';
import MySelectBox from './widgets/MySelectBox';
import Paper from '@mui/material/Paper';

const Create = () => {
  const [state, setState] = React.useState({});

  const handleValue = (name, value) => {
    setState((st) => {
      return { ...st, [name]: value };
    });
  };
  const handleChange = (e) => {
    setState((st) => {
      return { ...st, [e.target.name]: e.target.value };
    });
  };
  console.log('state is ', state);
  return (
    <div>
      <div>
        <MyTextField
          fullName='courseName'
          fullLabel='Course Name'
          fullValue={state.courseName || ''}
          fullHelperText='Enter Course Name'
          hC={handleChange}
        />
      </div>
      <div>
        <MyDatePicker
          fullName='fromDate'
          fullLabel='From Date'
          fullValue={state.fromDate || ''}
          hV={handleValue}
        />
      </div>
      <div>
        <MyDatePicker
          fullName='toDate'
          fullLabel='To Date'
          fullValue={state.toDate || ''}
          hV={handleValue}
        />
      </div>
      <Paper elevation={3} style={{ padding: '15px', marginBottom: '25px' }}>
        <h3>Days</h3>
        <MySelectBox
          options={[
            'Sunday',
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
          ]}
          fullName='day'
          fullLabel='Day'
          fullValue={state.day || ''}
          hC={handleChange}
        />
      </Paper>
    </div>
  );
};

export default Create;
