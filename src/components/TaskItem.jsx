import { ClickAwayListener, Grid } from '@mui/material';
import React from 'react';
import EditTask from './EditTask';
import TaskButtons from './TaskButtons';
import ViewTask from './ViewTask';

const TaskItem = ({ index, taskData, taskList, setTasks }) => {
  const { taskName, done } = taskData;

  const [showControls, setShowControls] = React.useState(false);
  const [edit, setEdit] = React.useState(false);
  const [taskInput, setTaskInput] = React.useState('');

  React.useEffect(() => {
    let mounted = true;

    if (mounted) {
      setTaskInput(taskName);
    }

    return () => {
      mounted = false;
    };
  }, [taskName]);

  React.useEffect(() => {
    //   if empty open edit by default
    if (!taskName) {
      //   console.log('opening edit mode');
      setEdit(true);
    }
  }, [taskName, taskInput]);

  const handleTaskInput = (event) => {
    setTaskInput(event.target.value);
  };

  const handleDelete = () => {
    const listCopy = [...taskList];
    listCopy.splice(index, 1);
    setTasks(listCopy);
    // close edit screen to force a re render
    setEdit(false);
  };

  //   returns true if text contains only spaces
  const onlySpaces = (txt) => {
    return txt.trim().length === 0;
  };

  const handleSaveTaskInput = () => {
    if (edit) {
      // only save if task changed
      //   console.log('taskName', taskName !== '' ? taskName : 'No task');
      //   console.log('taskInput', taskInput !== '' ? taskInput : 'No input');

      if (taskInput && !onlySpaces(taskInput)) {
        const listCopy = [...taskList];

        listCopy[index].taskName = taskInput;

        setTasks(listCopy);

        // if input is empty, delete item from list
      } else {
        // console.log('deleting item');

        handleDelete();
      }

      setEdit(false);
    }
  };

  const handleAddBelow = () => {
    const indexAfter = index + 1;

    const newTask = {
      taskName: '',
      done: false,
    };

    const listCopy = [...taskList];
    //   add new task after current index
    listCopy.splice(indexAfter, 0, newTask);

    setTasks(listCopy);
  };

  return (
    <ClickAwayListener onClickAway={handleSaveTaskInput}>
      <Grid
        container
        spacing={2}
        alignItems="center"
        onMouseEnter={() => setShowControls(true)}
        onMouseLeave={() => setShowControls(false)}
      >
        <Grid item xs={10}>
          {edit ? (
            <EditTask
              taskInput={taskInput}
              handleTaskInput={handleTaskInput}
              handleSaveTaskInput={handleSaveTaskInput}
            />
          ) : (
            <ViewTask
              index={index}
              taskName={taskName}
              done={done}
              taskList={taskList}
              setTasks={setTasks}
              setEdit={setEdit}
            />
          )}
        </Grid>
        {showControls && (
          <Grid item xs={2}>
            <TaskButtons
              edit={edit}
              handleDelete={handleDelete}
              handleAddBelow={handleAddBelow}
            />
          </Grid>
        )}
      </Grid>
    </ClickAwayListener>
  );
};

export default TaskItem;
