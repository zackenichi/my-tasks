import { Button } from '@mui/material';
import React from 'react';

const AddNewTask = ({ tasks, setTasks }) => {
  const handleAddNewTask = () => {
    const emptyTask = {
      taskName: '',
      done: false,
    };

    setTasks([...tasks, emptyTask]);
  };

  return (
    <Button
      onClick={handleAddNewTask}
      disableElevation
      variant="contained"
      sx={{ textTransform: 'none' }}
    >
      Add new...
    </Button>
  );
};

export default AddNewTask;
