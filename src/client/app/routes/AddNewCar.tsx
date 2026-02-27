import { Paper, Typography } from '@mui/material';

const AddNewCar = () => {
  return (
    <Paper sx={{ p: 3, maxWidth: 700, mx: 'auto', mt: 4 }}>
      <Typography variant="h5" gutterBottom>
        Add car
      </Typography>
      <Typography color="text.secondary">
        TODO: implement add-car form.
      </Typography>
    </Paper>
  );
};

export default AddNewCar;
