import React, { Component } from 'react';

class Skill extends Component {
    constructor(props) {
        super(props);
        /* this.state = { value: '' }; */
        
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        alert('Thank you for your message !');
        event.preventDefault();
    }

    render() {
        return (
            <div className="col-12 deroulant">

                <div className="col-6 col-s-12 aside-left coord">
                    <h2>Schall Anne-Gaëlle</h2>
                    <p>ang.schall@gmail.com</p>
                    <p>64 000 Pau, FRANCE</p>
                    <p><a target="_blank" rel="noopener noreferrer" 
                          href="https://www.linkedin.com/in/ang-schall/">My Linkedin</a></p>
                    <p><a target="_blank" rel="noopener noreferrer" 
                          href="https://www.deviantart.com/krysthalia">My Devianart</a></p>
                </div>
                <div className="col-6 col-s-12 aside-right" >
                    <h3>Let's get in touch !</h3>
                    <form onSubmit={this.handleSubmit} className="contact">
                        <span className="row">
                            <label className="col-4" htmlFor="name">Your name : </label>
                            <input className="col-8" type="text" id="name" name="user_name" />
                        </span>
                        <span className="row">
                            <label className="col-4" htmlFor="mail">Your e-mail : </label>
                            <input className="col-8" type="email" id="mail" name="user_mail" />
                        </span>
                        <span className="row">
                            <label className="col-4" htmlFor="msg">Your message : </label>
                            <textarea className="col-8" id="msg" name="user_message"  ></textarea>
                        </span>
                        <span>
                        <input type="submit" value="SEND" className="col-11"></input>
                        </span>
                    </form>

                </div>
            </div>

        );
    }
}

export default Skill;