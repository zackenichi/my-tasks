import {
  Modal,
  Box,
  Grid,
  Typography,
  IconButton,
  Tooltip,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import React from 'react';

const About = ({ openAbout, handleCloseAbout }) => {
  return (
    <Modal open={openAbout} onClose={handleCloseAbout}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%,-50%)',
          width: { md: 500, xs: '80%' },
          bgcolor: 'background.paper',
          borderRadius: '8px',
          boxShadow: '24',
          p: 4,
        }}
      >
        <Grid container spacing={1}>
          <Grid item md={6} xs={8}>
            <Typography sx={{ fontWeight: 'bold', fontSize: '24px' }}>
              About
            </Typography>
          </Grid>
          <Grid item md={6} xs={4} textAlign="right">
            <Tooltip title="Close">
              <IconButton onClick={handleCloseAbout}>
                <CloseIcon />
              </IconButton>
            </Tooltip>
          </Grid>
          <Grid item xs={12}>
            <Typography>
              This project shows a simple task list that has smarter features.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography>
              You can add a new task by clicking on add new.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography>
              Press enter or click outside of the textfield to save new task.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography>
              You can add a new task below a task by clicking on add next.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography>No task is created if task name is empty.</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography>
              Delete a task by clicking on the trash icon.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography>
              Made with love by{' '}
              <a
                href="https://github.com/zackenichi/"
                target="_blank"
                rel="noreferrer"
              >
                ZacKenichi
              </a>
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Modal>
  );
};

export default About;
