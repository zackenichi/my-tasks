import { Grid, Typography } from '@mui/material';
import React from 'react';

const ListStats = ({ tasks }) => {
  const taskCount = tasks.length;

  const done = tasks.filter((task) => task.done).length;
  const todo = taskCount - done;

  return (
    <Grid container spacing={2} textAlign="center">
      <Grid item md={2} xs={6}>
        <Typography fontWeight="bold">Task count:</Typography>
      </Grid>
      <Grid item md={2} xs={6}>
        <Typography>{taskCount}</Typography>
      </Grid>
      <Grid item md={2} xs={6}>
        <Typography fontWeight="bold">Completed:</Typography>
      </Grid>
      <Grid item md={2} xs={6}>
        <Typography>{done}</Typography>
      </Grid>
      <Grid item md={2} xs={6}>
        <Typography fontWeight="bold">In progress:</Typography>
      </Grid>
      <Grid item md={2} xs={6}>
        <Typography>{todo}</Typography>
      </Grid>
    </Grid>
  );
};

export default ListStats;
