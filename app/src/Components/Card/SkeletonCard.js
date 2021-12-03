import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import React from 'react';
import s from  './Card.module.css'

const SkeletonCard = () => {
  return (
      <div className={s.card}>
          <Skeleton className={s.img}/>
          <Skeleton className={s.smallInfo} count={4}/>
    </div>
  );
}

export const SkeletonLoader = () => {
  return (
    <div className={s.wrapper}>
      <SkeletonCard/>
      <SkeletonCard/>
      <SkeletonCard/>
      <SkeletonCard/>
    </div>
  )
}


