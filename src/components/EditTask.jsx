import { TextField } from '@mui/material';
import React from 'react';

const EditTask = ({ taskInput, handleTaskInput, handleSaveTaskInput }) => {
  return (
    <TextField
      autoComplete="off"
      error={!taskInput}
      fullWidth
      defaultValue={taskInput}
      onChange={handleTaskInput}
      placeholder="Enter task..."
      onKeyPress={(e) => {
        if (e.key === 'Enter') {
          handleSaveTaskInput();
        }
      }}
    />
  );
};

export default EditTask;
