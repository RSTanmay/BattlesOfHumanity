export interface Battle {
  id: number;
  name: string;
  year: number;
  displayYear: string;
  image: string;

  armies: {
    sideA: string;
    sideB: string;
  };

  winner: string;

  deaths: string;

  history: string;
}