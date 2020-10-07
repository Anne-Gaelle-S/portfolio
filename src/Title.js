import React, { Component } from 'react';

class Title extends Component {
    render() {
        const pages = this.props.mesPages;
        return (
            <div className="header">
                <div className="oldMachine"></div>
                <h1 className={ pages.get("profile").classes } >PROFILE</h1>
                <h1 className={ pages.get("skill").classes }>SKILL</h1>
                <h1 className={ pages.get("creative").classes }>CREATIVE</h1>
                <h1 className={ pages.get("contact").classes }>CONTACT</h1>
            </div>
        );
    }
}

export default Title;