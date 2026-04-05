import './GameSection.css'
import React, {useState, useEffect} from 'react'
import football from '../images/football.png';
import gamepad from '../images/gamepad.png';
import cs from '../images/cs.png'
import lol from '../images/lol.png'
import ow from '../images/ow.png'
import {Link} from "react-router-dom";

function GameSection() {

    const [game, setGame] = useState('ow')
    const [items, setItems] = useState([])
    const [team1, setTeam1] = useState([])
    const [team2, setTeam2] = useState([])

    useEffect(() => {
        fetch(`https://api.pandascore.co/${game}/matches/upcoming?page[size]=1&token=iS6mbTn2Yxfo5H-CFtUSOmNiRrvL7fwAEZhC0Ca2aGgIA9a3ZNc`)
            .then(res => res.json())
            .then(
                res => {
                    if (typeof res[0].opponents[0] != 'undefined') {
                        setTeam1(oldTeam1 => [...oldTeam1, res[0].opponents[0].opponent.image_url])
                    } else {
                        setTeam1(oldTeam1 => [...oldTeam1, 'TBD'])
                    }
                    if (typeof res[0].opponents[1] != 'undefined') {
                        setTeam2(oldTeam2 => [...oldTeam2, res[0].opponents[1].opponent.image_url])
                    } else {
                        setTeam2(oldTeam2 => [...oldTeam2, 'TBD'])
                    }
                    setItems(oldItems => [...oldItems, res[0].name])
                })
    }, [game])

    return (
        <div className="gameSection">
            <div className="navigation">
                <div className="navNickname">Profile</div>
                <div className="Logo"><Link to={"/"}>E&SPORT</Link></div>
                <div className="gamepad"><Link to="/game-section"><img className="displayImg" src={gamepad}
                                                                       alt="games"/></Link>
                </div>
                <div className="football"><Link to="/league"><img className="displayImg" src={football}
                                                                  alt="sports"/></Link>
                </div>
            </div>
            <div className="title"><h1>Browse through upcoming esports matches here!</h1></div>
            <div className="page">
                <div className="gameSelection">
                    <div className="gameButton" onClick={() => {
                        setTeam1([])
                        setTeam2([])
                        setItems([])
                        setGame('csgo')
                    }}><img className="displayImg" src={cs} alt='CSGO'/>
                        <div className="text">CS:GO</div>
                    </div>
                    <div className="gameButton" onClick={() => {
                        setTeam1([])
                        setTeam2([])
                        setItems([])
                        setGame('lol')
                    }}><img className="displayImg" src={lol} alt='LoL'/>
                        <div className="text">LoL</div>
                    </div>
                    <div className="gameButton" onClick={() => {
                        setTeam1([])
                        setTeam2([])
                        setItems([])
                        setGame('ow')
                    }}><img className="displayImg" src={ow} alt='Overwatch'/>
                        <div className="text">Overwatch</div>
                    </div>
                </div>
                <h1>Upcoming matches:</h1>
                <div className="matches">
                    {items.map((item, idx) => <div className="match" key={idx}>
                        <img alt='' src={team1[0]}/>{item}<img alt='' src={team2[0]}/>
                    </div>)}
                </div>
            </div>
        </div>
    );
}

export default GameSection;
