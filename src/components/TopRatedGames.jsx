import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

function TopRatedGames() {


  const [popularGame, setPopularGame] = useState([])

  useEffect(() => {
    getPopular()
  }, [])


  const getPopular = async () => {

    const api = await fetch(`https://api.rawg.io/api/games?key=479b3035f2d34a5484ff6b3047d66367&metacritic=95,100&page_size=6`)
    
    const data = await api.json()

    setPopularGame(data.results)
  }


  return (
    <div>
        <StyledTRG>
            <h2>-- Top Rated Games --</h2>
        </StyledTRG>
        <StyledCardContainer>

        {popularGame.map((game) => {
          let backgroundURL = game.short_screenshots[1].image
          console.log(backgroundURL)
          return (
            <StyledCard style={{backgroundImage:`url(${backgroundURL})`}} key={game.id}>
              <h3>{game.name}</h3>
              <GradientOverlay/>
            </StyledCard>
            )
          })}

      </StyledCardContainer>
    </div>
  )
}

const StyledTRG = styled.div`
    width: 100%;
    text-align: center;
    background: rgb(0,0,0);
    h2 {
        color: white;
        padding: 0.5rem 0rem;
        font-size: 1rem;
    }
`

const StyledCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-auto-flow: dense;
  
`;

const StyledCard = styled.div`
  position: relative;
  background: blue;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h3 {
    color: white;
    text-shadow: 2px 2px black;
    font-size: 1rem;
    z-index: 10;
    padding: 1rem 0;
  }
`

const GradientOverlay = styled.div`
  position: absolute;
  z-index: 3;
  height: 100%;
  width: 100%;
  background: linear-gradient(rgba(0,0,0,1), rgba(0,0,0,0), rgba(0,0,0,0.8));
`

export default TopRatedGames