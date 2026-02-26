import { useQuery } from '@tanstack/react-query';

type WeatherResponse = {
  city: string;
  temperature: number | null;
  unit: string;
  time?: string;
  source?: string;
};

const fetchWeather = async (): Promise<WeatherResponse> => {
  const res = await fetch('/api/weather');
  if (!res.ok) {
    throw new Error(`Weather request failed: ${res.status}`);
  }
  return res.json();
};

const Weather = () => {
  const { data, isPending, error, refetch, isFetching } = useQuery({
    queryKey: ['weather', 'minsk'],
    queryFn: fetchWeather,
    staleTime: 30_000,
  });

  if (isPending) return <div>Loading weather…</div>;

  if (error) {
    return (
      <div>
        <div>Failed to load weather.</div>
        <button onClick={() => refetch()} disabled={isFetching}>
          Retry
        </button>
      </div>
    );
  }

  const temperature =
    typeof data?.temperature === 'number' ? data.temperature : null;

  return (
    <div>
      <h2>Weather</h2>
      <div>
        Current temperature in <b>{data.city}</b>:{' '}
        <b>
          {temperature === null ? 'N/A' : temperature}
          {data.unit}
        </b>
      </div>
      {data.time ? <div>Time: {data.time}</div> : null}
      {data.source ? <div>Source: {data.source}</div> : null}
      <button onClick={() => refetch()} disabled={isFetching}>
        Refresh
      </button>
    </div>
  );
};

export default Weather;
