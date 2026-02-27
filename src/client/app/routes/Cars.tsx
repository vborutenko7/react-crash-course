import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Paper,
  Stack,
  Typography,
} from '@mui/material';
import { Link as RouterLink } from 'react-router';

type Car = {
  id: string;
  make: string;
  model: string;
  year: number;
  color?: string;
};

type CarsResponse = {
  cars: Car[];
};

const fetchCars = async (): Promise<CarsResponse> => {
  const res = await axios.get('/api/cars');
  if (res.status !== 200) {
    throw new Error(`Cars request failed: ${res.status}`);
  }
  return res.data;
};

const Cars = () => {
  const { data, isPending, error, refetch, isFetching } = useQuery({
    queryKey: ['cars'],
    queryFn: fetchCars,
    staleTime: 5_000,
  });

  return (
    <Paper sx={{ p: 3, maxWidth: 700, mx: 'auto', mt: 4 }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography variant="h5">Cars</Typography>
        <Button component={RouterLink} to="/cars/add" variant="contained">
          Add car
        </Button>
      </Stack>

      <Box mt={2}>
        {isPending ? (
          <Box display="flex" alignItems="center" minHeight={80}>
            <CircularProgress size={22} />
            <Typography ml={2}>Loading cars…</Typography>
          </Box>
        ) : error ? (
          <>
            <Alert severity="error" sx={{ mb: 2 }}>
              Failed to load cars.
            </Alert>
            <Button onClick={() => refetch()} disabled={isFetching}>
              Retry
            </Button>
          </>
        ) : (
          <Stack spacing={1}>
            {(data?.cars ?? []).map((car) => (
              <Paper key={car.id} variant="outlined" sx={{ p: 2 }}>
                <Typography>
                  <b>
                    {car.make} {car.model}
                  </b>{' '}
                  ({car.year})
                </Typography>
                {car.color ? (
                  <Typography color="text.secondary">
                    Color: {car.color}
                  </Typography>
                ) : null}
              </Paper>
            ))}
          </Stack>
        )}
      </Box>
    </Paper>
  );
};

export default Cars;
