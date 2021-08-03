import React from 'react';

import MainCard from '../components/Cards/MainCard';
import { useAppSelector, useAppDispatch } from '../store/hook';

export default function Test() {
  const { cards } = useAppSelector((state) => state.mainCard);
  console.log(cards);
  return (
    <div>
      {cards.map((card, i) => (
        <MainCard key={i} card={card} />
      ))}
    </div>
  );
}
