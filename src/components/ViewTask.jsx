import { Checkbox, Grid, Typography } from '@mui/material';
import React from 'react';

const ViewTask = ({ index, taskName, done, taskList, setTasks, setEdit }) => {
  const handleChangeStatus = (event) => {
    const listCopy = [...taskList];

    listCopy[index].done = event.target.checked;

    setTasks(listCopy);
  };

  return (
    <Grid container spacing={1} alignItems="center">
      <Grid item md={1} xs={2} justifyItems="center">
        <Checkbox checked={done} onChange={handleChangeStatus} />
      </Grid>
      <Grid item xs>
        <Typography
          onClick={() => setEdit(true)}
          sx={{
            fontSize: '18px',
            textDecoration: done ? 'line-through' : 'none',
            cursor: 'pointer',
          }}
        >
          {taskName}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default ViewTask;
