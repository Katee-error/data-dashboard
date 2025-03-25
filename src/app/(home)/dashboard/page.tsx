import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';



export default function Dashboard() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid size={8}>
          <Paper>size=8</Paper>
        </Grid>
        <Grid size={4}>
        <Paper>size=8</Paper>
        </Grid>
        <Grid size={4}>
        <Paper>size=8</Paper>
        </Grid>
        <Grid size={8}>
        <Paper>size=8</Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

