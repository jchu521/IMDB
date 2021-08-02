/* eslint-disable @next/next/no-img-element */
import React from 'react';

import styles from '../../styles/components/Cards/MainCard.module.css';

const MainCard = () => {
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.card}>
        <div className={styles.card__backgroundImgWrapper}>
          <img
            alt="background image"
            src="https://m.media-amazon.com/images/M/MV5BNjFjNDUxYjEtZWQ4MC00ZGVjLWI2N2ItYmQzMTFkZmIxOWI5XkEyXkFqcGdeQWFybm8@._V1_QL40_QL75_UX500_CR0,0,500,281_.jpg"
          />
        </div>
        <div className={styles.card__buttonCaption}>
          <div className={styles.card__buttonWraper}>
            <svg
              width="65"
              height="65"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              role="presentation"
            >
              <path d="M10.803 15.932l4.688-3.513a.498.498 0 0 0 0-.803l-4.688-3.514a.502.502 0 0 0-.803.402v7.026c0 .412.472.653.803.402z"></path>
              <path d="M12 24C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12zm0-1c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11z"></path>
            </svg>
          </div>
          <div className={styles.card__caption}>
            <div className={styles.card__caption__top}>
              <span className={styles.card__caption__top__text}>
                Adam Driver and Lady Gaga in &quot;House of Gucci&quot;
              </span>
              <span className={styles.card__caption__top__time}>2:04</span>
            </div>
            <span className={styles.card__caption__bottom}>
              Watch the Trailer
            </span>
          </div>
        </div>
      </div>
      <div className={styles.card__posterImgWrapper}>
        <img
          className={styles.card__posterImg}
          alt="poster image"
          src="https://m.media-amazon.com/images/M/MV5BZWI5M2UyZWMtZWNkNC00ZmY5LWEzYzktMDRiZTc1NjJjNzA1XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_QL75_UX140_CR0,0,140,207_.jpg"
        />
        <svg
          className={styles.card__bookmark}
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="currentColor"
          role="presentation"
        >
          <path fill="none" d="M0 0h24v24H0V0z"></path>
          <path d="M18 13h-5v5c0 .55-.45 1-1 1s-1-.45-1-1v-5H6c-.55 0-1-.45-1-1s.45-1 1-1h5V6c0-.55.45-1 1-1s1 .45 1 1v5h5c.55 0 1 .45 1 1s-.45 1-1 1z"></path>
        </svg>
      </div>
    </div>
  );
};

export default MainCard;
