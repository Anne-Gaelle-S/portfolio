import React, { Component } from 'react';
import miku from './assets/miku.png';
import aiko from './assets/aiko.gif';
import { listDrawing } from './Data';

class Skill extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listDrawing: listDrawing
        };
    }

    render() {
        const myDrawings = (this.state.listDrawing).map((elmt) =>
            <li key={elmt[0]}>
                <button onClick={() => window.open(elmt[2])} >
                    <strong>{elmt[0]}</strong>
                    <img alt={elmt[0]} src={elmt[1]} />
                </button>
            </li>
        );

        return (
            <div className="col-6 col-s-12 aside-left" >
                <h2>Drawing</h2>
                <p> From my childhood I really enjoy sketching and drawing. <br />
                    I made all elements and backgrounds of this website with Krita (open source painting program).
                    </p>
                <ul className="gallery">
                    {myDrawings}
                </ul>

                <h2>3D modeling</h2>
                <p>Short time ago I started to learn myself 3D modeling with Blender (open source program).
                    I started by a 3D model of Hatsune Miku (a virtual singer from Vocaloid).
                    It tooks me 2 months.
                    At the moment she can't move but I am learning how to animate my model.
                    </p>
                <img src={miku} alt="Hatsune Miku 3D modeling"></img>

                <h2>And more !</h2>
                <p>
                    I also made video editing and some animations. <br />
                    I was chairwoman of a video and photo association for two years.
                    </p>
                <iframe title="Souvenirs" width="100%" height="300px" src="https://www.youtube.com/embed/dL5mE4WDHRg" frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                <img src={aiko} alt="Aiko gif"></img>

            </div>
        );
    }
}

export default Skill;