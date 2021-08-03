/* eslint-disable @next/next/no-img-element */
import React from 'react';

import styles from '../../styles/components/Cards/MainCard.module.css';
import PlayButton from '../../assets/svgs/playButton.svg';
import Bookmark from '../../assets/svgs/bookmark.svg';
import { CardState } from '../../store/slices/mainCardSlice';

interface MainCardProps {
  card: CardState;
}

const MainCard = (props: MainCardProps) => {
  const { background, poster, time, title, subtitle } = props.card;

  return (
    <div className={styles.cardWrapper}>
      <div className={styles.card}>
        <div className={styles.card__backgroundImgWrapper}>
          <img alt="background image" src={background} />
        </div>
        <div className={styles.card__buttonCaption}>
          <div className={styles.card__buttonWraper}>
            <PlayButton />
          </div>
          <div className={styles.card__caption}>
            <div className={styles.card__caption__top}>
              <span className={styles.card__caption__top__text}>{title}</span>
              <span className={styles.card__caption__top__time}>{time}</span>
            </div>
            <span className={styles.card__caption__bottom}>{subtitle}</span>
          </div>
        </div>
      </div>
      <div className={styles.card__posterImgWrapper}>
        <img
          className={styles.card__posterImg}
          alt="poster image"
          src={poster}
        />
        <Bookmark className={styles.card__bookmark} />
      </div>
    </div>
  );
};

export default MainCard;
