import { Grid, IconButton, Tooltip, Typography } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import React from 'react';

const AppTitle = ({ setOpenAbout }) => {
  return (
    <Grid container spacing={2} alignItems="center">
      <Grid item xs={10}>
        <Typography
          variant="h1"
          sx={{ fontSize: '40px', fontWeight: 'bold', textAlign: 'center' }}
        >
          My smart task list
        </Typography>
      </Grid>
      <Grid item xs={2} textAlign="left">
        <Tooltip title="About">
          <IconButton onClick={() => setOpenAbout(true)}>
            <InfoIcon />
          </IconButton>
        </Tooltip>
      </Grid>
    </Grid>
  );
};

export default AppTitle;
