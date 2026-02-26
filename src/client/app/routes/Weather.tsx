import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import {
  Box,
  Button,
  Paper,
  Typography,
  CircularProgress,
  Alert,
} from '@mui/material';

type WeatherResponse = {
  city: string;
  temperature: number | null;
  unit: string;
  time?: string;
  source?: string;
};

const fetchWeather = async (): Promise<WeatherResponse> => {
  const res = await axios.get('/api/weather');
  if (res.status !== 200) {
    throw new Error(`Weather request failed: ${res.status}`);
  }
  return res.data;
};

const Weather = () => {
  const { data, isPending, error, refetch, isFetching } = useQuery({
    queryKey: ['weather', 'minsk'],
    queryFn: fetchWeather,
    staleTime: 5_000,
  });

  if (isPending)
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight={120}
      >
        <CircularProgress />
        <Typography ml={2}>Loading weather…</Typography>
      </Box>
    );

  if (error) {
    return (
      <Paper sx={{ p: 3, maxWidth: 400, mx: 'auto', mt: 4 }}>
        <Alert severity="error" sx={{ mb: 2 }}>
          Failed to load weather.
        </Alert>
        <Button
          variant="contained"
          color="primary"
          onClick={() => refetch()}
          disabled={isFetching}
        >
          Retry
        </Button>
      </Paper>
    );
  }

  const temperature =
    typeof data?.temperature === 'number' ? data.temperature : null;

  return (
    <Paper sx={{ p: 3, maxWidth: 400, mx: 'auto', mt: 4 }}>
      <Typography variant="h5" gutterBottom>
        Weather
      </Typography>
      <Typography>
        Current temperature in <b>{data.city}</b>:{' '}
        <b>
          {temperature === null ? 'N/A' : temperature}
          {data.unit}
        </b>
      </Typography>
      {data.time ? (
        <Typography color="text.secondary">Time: {data.time}</Typography>
      ) : null}
      {data.source ? (
        <Typography color="text.secondary">Source: {data.source}</Typography>
      ) : null}
      <Box mt={2}>
        <Button
          variant="outlined"
          onClick={() => refetch()}
          disabled={isFetching}
        >
          {isFetching ? 'Refreshing…' : 'Refresh'}
        </Button>
      </Box>
    </Paper>
  );
};

export default Weather;
