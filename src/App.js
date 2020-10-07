import React, { Component } from 'react';
import Menu from './Menu';
import CharacterBox from './CharacterBox';
import Profile from './Profile';
import Skill from './Skill';
import Creative from './Creative';
import Contact from './Contact';
import License from './License';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			pages: new Map([
				["profile", {component: <Profile />, classesTitleForMenu: "slotIn"}],
				["skill", {component: <Skill />, classesTitleForMenu: "invisible"}],
				["creative", {component: <Creative />, classesTitleForMenu: "invisible"}],
				["contact", {component: <Contact />, classesTitleForMenu: "invisible"}]
			]),
			previousPage: "profile",
			currentPage: "profile",
			rotate: false
		};

		this.setClassesForAnimationMenu = this.setClassesForAnimationMenu.bind(this);
		this.finishAnimationOfTitle = this.finishAnimationOfTitle.bind(this);
		this.changeState = this.changeState.bind(this);
		this.switchingPage = this.switchingPage.bind(this);
	}

	setClassesForAnimationMenu(myPreviousPage, myCurrentPage, myPage){
		let resultat = ( myPage === myCurrentPage ? 
			( myPage === myPreviousPage ? "slotIn" : "slotIn" ) :
			( myPage === myPreviousPage ? "slotOut" : "invisible" ));
		return resultat;
	}

	finishAnimationOfTitle(myPreviousPage, myNextPage, myPages){
		myPreviousPage !== myNextPage && ( setTimeout((() => {
			myPages.get(myPreviousPage).classesTitleForMenu = "invisible";
			this.setState({ pages: myPages })
		} ), 500)); 
		setTimeout((() => { this.setState({ rotate: false }) } ), 2000); 
	}

	changeState(mypreviousPage, myCurrentPage, myPages, myRotate){
		this.setState({
			previousPage: mypreviousPage,
			currentPage: myCurrentPage,
			pages :  myPages,
			rotate: myRotate
		});
	}


	switchingPage(event) {
		event.preventDefault();
		let myPreviousPage = this.state.currentPage;
		let myNextPage = event.target.value;
		let myPages = new Map([ 
			["profile", {
				component: <Profile />, 
				classesTitleForMenu: this.setClassesForAnimationMenu(myPreviousPage, myNextPage, "profile") 
			}],	
			["skill", {
				component: <Skill />, 
				classesTitleForMenu: this.setClassesForAnimationMenu(myPreviousPage, myNextPage, "skill") 
			}], 
			["creative", {
				component: <Creative />, 
				classesTitleForMenu: this.setClassesForAnimationMenu(myPreviousPage, myNextPage, "creative") 
			}], 
			["contact", {
				component: <Contact />, 
				classesTitleForMenu: this.setClassesForAnimationMenu(myPreviousPage, myNextPage, "contact") 
		}]  ]);

		this.changeState(myPreviousPage, myNextPage, myPages, true);
		this.finishAnimationOfTitle(myPreviousPage, myNextPage, myPages);
	}

	render() {
		return (
			<div id="conteneur-page">
				<div className="row">
					<div className="col-2 bloc"></div>
            <div className="col-8 colonne">
						<Menu switching={this.switchingPage}
              myPages={this.state.pages}
              rotation={this.state.rotate}
              currentPage={this.state.currentPage} />
						
						<div className="col-12 deroulant">
							{ (this.state.pages).get(this.state.currentPage).component }
							{ this.state.currentPage !== "contact" &&
							<CharacterBox pageActuelle={this.state.currentPage} /> }
						</div>
					</div>
					
				</div>
				<License />
			</div>
		);
	}
}

export default App;
