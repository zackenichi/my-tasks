import React from 'react';
import { Grid, IconButton, Tooltip } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';

const TaskButtons = ({ edit, handleDelete, handleAddBelow }) => {
  return (
    <Grid container spacing={1} textAlign="right">
      {!edit && (
        <Grid item xs>
          <Tooltip title="Add next task">
            <IconButton onClick={handleAddBelow}>
              <AddIcon />
            </IconButton>
          </Tooltip>
        </Grid>
      )}
      <Grid item xs>
        <Tooltip title="Delete task">
          <IconButton onClick={handleDelete}>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      </Grid>
    </Grid>
  );
};

export default TaskButtons;
