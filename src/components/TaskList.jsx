import React from 'react';
import { Grid } from '@mui/material';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, setTasks }) => {
  return (
    <Grid container spacing={2}>
      {tasks.map((task, index) => {
        return (
          <Grid item xs={12} key={`task-${index.toString()}`}>
            <TaskItem
              index={index}
              taskData={task}
              taskList={tasks}
              setTasks={setTasks}
            />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default TaskList;
