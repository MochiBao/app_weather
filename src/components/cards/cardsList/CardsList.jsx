import s from './CardsList.module.css'
import React from 'react'
import CardsItem from '../cardsItem/CardsItem';
export const CardsList = ({ data, delCard, isChartedVisible, setIsChartedVisible, plusFiveFetchData, isFiveDaysVisible, setIsFiveDaysVisible }) => {
  console.log(data);
  return (
    <ul className={s.clist}>
      {data.map (({id, main, wind:{speed}, name, sys:{country}, visibility, weather}) => {
        return (
        <CardsItem key={id} name={name} main={main} speed={speed} country={country} visibility={visibility} weather={weather} delCard={delCard} isChartedVisible={isChartedVisible} setIsChartedVisible={setIsChartedVisible} plusFiveFetchData={plusFiveFetchData} isFiveDaysVisible={isFiveDaysVisible} setIsFiveDaysVisible={setIsFiveDaysVisible}/>
         )
      })}
    </ul>
  );
};