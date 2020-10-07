import React, { Component } from 'react';

class Profile extends Component {
    render() {
        return (
            <div className="col-6 col-s-12 aside-left" >
                <h2>Hello, I'm Anne-Gaëlle </h2>
                <p> An french IT student, amateur artist in my off-hours. </p>
                <div className="stats">
                    <div>
                        <h3>Basics informations</h3>
                        <ul>
                            <li><span>Location : </span><div className="white"> Pau, FRANCE. </div></li>
                            <li><span>Formation : </span><div className="white">EISTI (French computer engineering school) </div></li>
                            <li><span>Age : </span><div className="white">22 years old</div></li>
                            <li><span>Passions : </span><div className="white">videos games, Japanese culture and more</div></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Profile;