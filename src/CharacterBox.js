import React, { Component } from 'react';
import character from './assets/krysthalia.png';
import characterSkill from './assets/krysthalia-skill.png';
import characterCreative from './assets/krysthalia-creative.png'; 

class CharacterBox extends Component {
    render() {
        let page = this.props.pageActuelle;
        return (
            <div className="col-6 col-s-12 aside-right colonne ">
                <h3 className="">KRYSTHALIA <br /> aka Anne-Gaëlle </h3>
                <div className="row col-12 characterBox">
                    <div className="avatar">
                        <img 
                            src={ page === "skill" ? characterSkill :
                                  page === "creative" ? characterCreative : character 
                            } alt="My character"></img>
                    </div>
                    <div>
                        <div className="stuff"><span>No item yet...</span></div>
                        <div className="stuff"><span>No item yet...</span></div>
                        <div className="stuff"><span>No item yet...</span></div>
                        <div className="stuff"><span>No item yet...</span></div>
                        <div className="stuff"><span>No item yet...</span></div>
                        <div className="stuff"><span>No item yet...</span></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CharacterBox;