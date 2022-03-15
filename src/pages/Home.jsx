import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

// Components
import TopRatedGames from '../components/TopRatedGames';
import UpcomingGames from '../components/UpcomingGames';

function Home() {

   return (
    <div>
      <StyledHeader>
        <h1>Video Game Library</h1>
        <h2>Using the RAWG API</h2>
        <a href="https://rawg.io/">Visit Here</a>
      </StyledHeader>
      <TopRatedGames />
      <UpcomingGames />
    </div>
  ) 
}

const StyledHeader = styled.header`
  width: 100%;
  min-height: 200px;
  height: 20vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(#0fce65, #000000);

  h1 {
    padding-top: 2rem;
  }

  a {
    text-decoration: none;
    color: white;
    text-transform: uppercase;
    padding: 1.5rem 0rem;
  }
`

export default Home;
