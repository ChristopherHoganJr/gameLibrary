import React, {useEffect, useState} from 'react'
import styled from 'styled-components'

function UpcomingGames() {

  // Date functions
  let d = new Date()
  let month = d.getMonth() + 1
  let thisYear = d.getFullYear()
  let nextMonth = d.getMonth('') + 2
  if (nextMonth > 12) {
    nextMonth = nextMonth - 12
  }

  function FormatMonth (monthdate) {
    if (monthdate < 10) {
      return String('0'+monthdate)
    }
  }

  month = FormatMonth(month)
  nextMonth = FormatMonth(nextMonth)
  

  const [upcomingGames, setUpcomingGames] = useState([])

  useEffect(() => {
    getUpcomingGames()
  }, [])

  const getUpcomingGames = async () => {
 
    const api = await fetch(`https://api.rawg.io/api/games?key=479b3035f2d34a5484ff6b3047d66367&dates=${thisYear}-${month}-01,${thisYear}-${nextMonth}-01&page_size=15`)

    const upcomingGamesList = await api.json()

    setUpcomingGames(upcomingGamesList.results)
  }



  return (
    <div>
      <h2>Upcoming Releases</h2>
      <div>
        {upcomingGames.map((upcomingGame) => {
          return (
            <div key={upcomingGame.id}>
              <h3>{upcomingGame.name}</h3>
            </div>
          )
        })}
      </div>
    </div>
  )
}

const UpcomingGame = styled.div`

`

export default UpcomingGames