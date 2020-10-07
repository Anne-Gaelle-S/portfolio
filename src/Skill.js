import React, { Component } from 'react';

class Skill extends Component {
    render() {
        return (
            <div className="col-6 col-s-12 aside-left" >
                <div className="stats">
                    <h2>My formation</h2>
                    <div>
                        <h3>Langages (%) : </h3>
                        <ul>
                            <li><span>C : </span><div>70</div></li>
                            <li><span>C++ : </span><div>80</div></li>
                            <li><span>Javacript : </span><div>80</div></li>
                            <li><span>Scala : </span><div>65</div></li>
                            <li><span>Java, JEE : </span><div>70</div></li>
                            <li><span>Python : </span><div className="white">40</div></li>
                            <li><span>C# : </span><div className="white">55</div></li>
                            <li><span>Prolog : </span><div className="white">30</div></li>
                            <li><span>XML : </span><div>80</div></li>
                            <li><span>Latex : </span><div>75</div></li>
                            <li><span>Ocaml : </span><div className="white">60</div></li>
                            <li><span>Pascal : </span><div className="white">60</div></li>
                        </ul>
                    </div>
                    <div>
                        <h3>Web (%) : </h3>
                        <ul>
                            <li><span>HTML5 : </span><div>90</div></li>
                            <li><span>CSS : </span><div>90</div></li>
                            <li><span>ReactJS : </span><div>75</div></li>
                            <li><span>Angular : </span><div>65</div></li>
                            <li><span>Ionic : </span><div>70</div></li>
                            <li><span>NodeJS : </span><div>70</div></li>
                            <li><span>Semantic UI : </span><div>65</div></li>
                            <li><span>Materialize : </span><div>80</div></li>
                            <li><span>Bootstrap : </span><div>65</div></li>
                            <li><span>jQuery : </span><div>65</div></li>
                        </ul>
                    </div>
                    <div>
                        <h3>Others (%) : </h3>
                        <ul>
                            <li><span>MongoDB : </span><div className="white">60</div></li>
                            <li><span>JSON : </span><div>90</div></li>
                            <li><span>Shell Linux : </span><div>80</div></li>
                            <li><span>GitHub : </span><div>70</div></li>
                            <li><span>Agile method : </span><div className="white">50</div></li>
                            <li><span>Graph theory : </span><div>65</div></li>
                            <li><span>Machine Learning : </span><div>70</div></li>
                        </ul>
                    </div>

                    <h2>My hobbies</h2>
                    <div>
                        <h3>Adobe (%) : </h3>
                        <ul>
                            <li><span>Photoshop : </span><div>80</div></li>
                            <li><span>Illustrator : </span><div>65</div></li>
                            <li><span>Premiere Pro : </span><div>80</div></li>
                            <li><span>In Design : </span><div className="white">60</div></li>
                        </ul>
                    </div>
                    <div>
                        <h3>Digital painting (%) : </h3>
                        <ul>
                            <li><span>Clip Studio Paint : </span><div>75</div></li>
                            <li><span>Krita : </span><div className="white">65</div></li>
                            <li><span>Gimp : </span><div className="white">60</div></li>
                        </ul>
                        <h3>3D (%) : </h3>
                        <ul>
                            <li><span>Blender : </span><div>65</div></li>
                            <li><span>Unity 2018 : </span><div className="white">40</div></li>
                        </ul>
                        <h3>Others (%) : </h3>
                        <ul>
                            <li><span>Heroku : </span><div>65</div></li>
                            <li><span>Processing : </span><div className="white">40</div></li>
                        </ul>
                    </div>
                </div>
            </div>

        );
    }
}

export default Skill;