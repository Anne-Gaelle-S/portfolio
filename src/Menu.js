import React, { Component } from 'react';

class Menu extends Component {
    render() {
        const changePage = this.props.switching;
        const pages = this.props.myPages;
        const rotation = this.props.rotation;
        const page = this.props.currentPage;
        return (
            <div className="menu">
                <button onClick={changePage} value="profile" id="profile"
                        className={ "m-profile white" + (page==="profile" ? " gear-2-v2 rotationMenu" : " gear-2") } ></button>
                <button onClick={changePage} value="skill" id="skill"
                        className={ "m-skill" + (page==="skill" ? " gear-1-v2 white rotationMenu" : " gear-1")  }></button>
                <button onClick={changePage} value="creative" id="creative"
                        className={ "m-creative white" + (page==="creative" ? " gear-4-v2 rotationMenu" : " gear-4") }></button>
                <button onClick={changePage} value="contact" id="contact"
                        className={ "m-contact" + (page==="contact" ? " gear-3-v2 white rotationMenu" : " gear-3") } ></button>

                <div className="header">
                    <div className="oldMachine">
                        <div className={ rotation ? "mechanism-0-1 r-rotation" : "mechanism-0-1"}></div>
                        <div className={ rotation ? "mechanism-0 rotation" : "mechanism-0"}></div>
                        <div className={ rotation ? "mechanism-1 rotation" : "mechanism-1"}></div>
                        <div className={ rotation ? "mechanism-2 r-rotation" : "mechanism-2"}></div>
                        <div className={ rotation ? "mechanism-3 r-rotation" : "mechanism-3"}></div>
                    </div>
                    
                    <h1 className={ pages.get("profile").classesTitleForMenu } >PROFILE</h1>
                    <h1 className={ pages.get("skill").classesTitleForMenu }>SKILL</h1>
                    <h1 className={ pages.get("creative").classesTitleForMenu }>CREATIVE</h1>
                    <h1 className={ pages.get("contact").classesTitleForMenu }>CONTACT</h1>
                    
                </div>
            </div>
        );
    }
}

export default Menu;