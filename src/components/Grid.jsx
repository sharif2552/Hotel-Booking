import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import RecipeReviewCard from './Card'
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function FullWidthGrid() {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={6} md={8}>
          <Item><RecipeReviewCard /></Item>
        </Grid>
        <Grid item xs={6} md={4}>
          <Item><RecipeReviewCard /></Item>
        </Grid>
        <Grid item xs={6} md={4}>
          <Item><RecipeReviewCard /></Item>
        </Grid>
        <Grid item xs={6} md={8}>
          <Item><RecipeReviewCard /></Item>
        </Grid>
      </Grid>
    </Box>
  );
}