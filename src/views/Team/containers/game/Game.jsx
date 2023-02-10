
import React, { useState, useEffect } from 'react'
import { csgo } from './import';
import { Memberslider, Teamslider } from '../../../../components/export';
import './game.css';

import { Fade, Zoom } from "react-awesome-reveal";


const Game = ({requestService}) => {

  const [teams, setTeams] = useState([]);
  const [error, setError] = useState('');
  const [selectedGame, setSelectedGame] = useState('0');
  const [h1, seth1] = useState("select a team");
  const [image, setImage] = useState();

  useEffect(() => {
    requestService.getTeams().then((teams) => {
      console.log(teams);
      setTeams(teams.data);
    })
    .catch((error) => {
      setError(error)
    });
  }, [requestService]);

  useEffect(() => {
    console.log(selectedGame);
    const game = teams.find((team) => team.id === parseInt(selectedGame));
    if (game) {
      seth1(game.attributes.name);
      setImage(game.attributes.image.data.attributes.url);
    }
  }, [selectedGame])

  return (
    <div className='ett__teams section__padding'>
      <div className="ett__teams-list">
        <div className="ett__teams-list_heading section__margin">
          <Fade direction='down' duration={2000} cascade triggerOnce>
            <div className="triangle-right"></div>
            <h1>THE TEAMS</h1>
          </Fade>
        </div>
        
        <Fade direction='down' duration={2000} cascade triggerOnce>
          <div className="ett__teams-list_slider">
            <Teamslider teams={teams} baseURL={requestService.http.baseURL} setSelectedGame={setSelectedGame}/>
          </div>
        </Fade>
      </div>

      <div className="ett__teams-game section__margin">
        <div className="ett__teams-game_heading">
          <Fade direction='down' duration={2000} cascade triggerOnce>
            <div className="triangle-right"></div>
            <h1>{h1}</h1>
            <img src={image}/>
          </Fade>
        </div>
        
        {/* <Fade direction='down' duration={2000} cascade triggerOnce> 
          <div className="ett__teams-game_details section__margin">
            
              <img src={csgo} alt="csgo" />
              <div className="ett__teams-game_details_text">
                <h5>{gameTitle}</h5>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p> 
              </div>
            
          </div>
        </Fade> */}
      </div>

      {/* <div className='ett__teams-member section__padding'>
        <Fade direction='down' duration={2000} cascade triggerOnce> 
          <div className="ett__teams-member_slider">
            <Memberslider />
          </div>
        </Fade>
      </div>  */}
    </div>
  )
}

export default Game;