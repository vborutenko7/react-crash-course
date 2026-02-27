export type Car = {
  id: string;
  make: string;
  model: string;
  year: number;
  color?: string;
};

export class CarsService {
  async getCars(): Promise<{ cars: Car[] }> {
    // Static list for now
    return {
      cars: [
        {
          id: '1',
          make: 'Toyota',
          model: 'Corolla',
          year: 2018,
          color: 'Blue',
        },
        {
          id: '2',
          make: 'Tesla',
          model: 'Model 3',
          year: 2022,
          color: 'White',
        },
        { id: '3', make: 'Ford', model: 'Mustang', year: 1969, color: 'Red' },
      ],
    };
  }
}

export const carsService = new CarsService();
