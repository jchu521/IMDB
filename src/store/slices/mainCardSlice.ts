import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

export interface CardState {
  background: string;
  poster: string;
  title: string;
  subtitle: string;
  time: string;
}

export interface MainCardState {
  cards: Array<CardState>;
}

const initialState: MainCardState = {
  cards: [
    {
      background:
        'https://m.media-amazon.com/images/M/MV5BNjFjNDUxYjEtZWQ4MC00ZGVjLWI2N2ItYmQzMTFkZmIxOWI5XkEyXkFqcGdeQWFybm8@._V1_QL40_QL75_UX500_CR0,0,500,281_.jpg',
      poster:
        'https://m.media-amazon.com/images/M/MV5BZWI5M2UyZWMtZWNkNC00ZmY5LWEzYzktMDRiZTc1NjJjNzA1XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_QL75_UX140_CR0,0,140,207_.jpg',
      title: "Adam Driver and Lady Gaga in 'House of Gucci'",
      subtitle: 'Watch the Trailer',
      time: '2:04',
    },
  ],
};

export const mainCardSlice = createSlice({
  name: 'mainCard',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {},
});

export const {} = mainCardSlice.actions;

export default mainCardSlice.reducer;
