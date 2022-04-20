import React from 'react';
import styled from 'styled-components';
import { Movie } from '../types';

type Props = {
  movies: Movie[];
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  column-gap: 20px;
  row-gap: 20px;
  margin: 20px 0;
`;

const Year = styled.div`
  position: absolute;
  right: 0;
  top: 5px;
  background: rgb(225 29 72);
  color: white;
  font-size: 14px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  padding: 3px 5px 3px 10px;
  font-weight: bold;
`;

const Title = styled.div`
  position: absolute;
  left: 0;
  bottom: -100%;
  background: rgb(37 99 235);
  color: white;
  font-size: 14px;
  padding: 5px 2px;
  text-align: center;
  font-weight: bold;
  width: 100%;
  box-sizing: border-box;
  transition: all 0.2s;
  opacity: 0;
`;

const MovieWrapper = styled.div`
  display: block;
  position: relative;
  width: 100%;
  height: 230px;
  background-position: center center;
  background-size: cover;
  overflow: hidden;
  border-radius: 10px;
  filter: drop-shadow(0 10px 10px rgba(0, 0, 0, 0.15));
  transition: all 0.2s;
  border: 1px solid rgba(0, 0, 0, 0.3);

  &:hover {
    transform: scale(1.1);
    filter: drop-shadow(0 10px 20px rgba(0, 0, 0, 0.25));
    border: 1px solid rgba(0, 0, 0, 0.8);
    ${Title} {
      bottom: 0;
      opacity: 1;
    }
  }
`;

export default function SearchResult({ movies }: Props) {
  return (
    <Wrapper>
      {movies.map((movie) => (
        <MovieWrapper
          key={movie.id}
          style={{ backgroundImage: `url(${movie.poster})` }}
        >
          <Year>{movie.year}</Year>
          <Title>{movie.title}</Title>
        </MovieWrapper>
      ))}
    </Wrapper>
  );
}
