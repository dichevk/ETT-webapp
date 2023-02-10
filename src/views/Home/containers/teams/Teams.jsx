
import React, { useEffect, useState } from 'react';
import './teams.css';

import { Teamslider, Memberslider } from '../../../../components/export';

import { Fade } from "react-awesome-reveal";

const Teams = ({requestService}) => {

  const [teams, setTeams] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    requestService.getTeams().then((teams) => {
      console.log(teams);
      setTeams(teams.data);
    })
    .catch((error) => {
      setError(error)
    });
  }, [requestService]);


  return (
    <div className='ett__teams section__padding'>
        <div className="ett__teams-heading section__margin">
          <Fade direction='down' duration={3000} cascade triggerOnce>
            <div className="triangle-right"></div>
            <h1>THE TEAMS</h1>
          </Fade>
        </div>

        <Fade direction='down' duration={2000} cascade triggerOnce>
          <div className="ett__teams-slider">
            <Teamslider teams={teams} baseURL={requestService.http.baseURL}/>
          </div>
        </Fade>
    </div>
  )
}

export default Teams;