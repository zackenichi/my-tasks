import { Grid } from '@mui/material';
import React, { useState } from 'react';
import About from './About';
import AddNewTask from './AddNewTask';
import AppTitle from './AppTitle';
import ListStats from './ListStats';
import TaskList from './TaskList';

const TaskManager = () => {
  const [tasks, setTasks] = useState([]);
  const [openAbout, setOpenAbout] = useState(false);

  //   sample data

  //   React.useEffect(() => {
  //     let mounted = true;

  //     if (mounted) {
  //       setTasks([
  //         {
  //           taskName: 'Check Email',
  //           done: false,
  //         },
  //         {
  //           taskName: 'Check JIRA',
  //           done: false,
  //         },
  //         {
  //           taskName: 'Turn on computer',
  //           done: true,
  //         },
  //         // for testing add new - default edit to true
  //         // {
  //         //   taskName: '',
  //         //   done: false,
  //         // },
  //       ]);
  //     }

  //     return () => {
  //       mounted = false;
  //     };
  //   }, []);

  const handleCloseAbout = () => {
    setOpenAbout(false);
  };

  return (
    <>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <AppTitle setOpenAbout={setOpenAbout} />
        </Grid>
        <Grid item xs={12}>
          <ListStats tasks={tasks} />
        </Grid>
        <Grid item xs={12}>
          <TaskList tasks={tasks} setTasks={setTasks} />
        </Grid>
        <Grid item xs={12}>
          <AddNewTask tasks={tasks} setTasks={setTasks} />
        </Grid>
        <About openAbout={openAbout} handleCloseAbout={handleCloseAbout} />
      </Grid>
    </>
  );
};

export default TaskManager;
