"use client";

import React, { useEffect, useRef, useState } from "react";
import { API_URL } from "../app/constants";
import styles from "../styles/movie-credit.module.css";

interface actor {
  adult: boolean;
  gender: number;
  id: number;
  name: string;
  profile_path: string;
}

export default function MovieCredit({ id }: { id: string }) {
  const [credits, setCredits] = useState<actor[]>();
  const getData = async () => {
    const response = await fetch(`${API_URL}/${id}/credits`);
    const json = await response.json();
    setCredits(json);
  };

  const carouselRef = useRef(null);

  useEffect(() => {
    getData();
  }, []);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -300, // 왼쪽으로 100px 스크롤 이동
        behavior: "smooth", // 부드러운 스크롤
      });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: 300, // 오른쪽으로 100px 스크롤 이동
        behavior: "smooth", // 부드러운 스크롤
      });
    }
  };

  return (
    <div className={styles.container}>
      <button className={styles.left} onClick={scrollLeft}>
        &larr;
      </button>
      <div ref={carouselRef} className={styles.items}>
        {credits &&
          credits.map((actor: actor) => (
            <div key={actor.id} className={styles.item}>
              <img src={actor.profile_path} />
              <p>{actor.name}</p>
            </div>
          ))}
      </div>
      <button className={styles.right} onClick={scrollRight}>
        &rarr;
      </button>
    </div>
  );
}
