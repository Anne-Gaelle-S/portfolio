import React, { Component } from 'react';

class License extends Component {
    render() {
        var noborder = {
            borderWidth: 0,
            height: 20
        };
        return (
            <footer className="footer col-12 col-s-12 conteneur">
                <span>
                    <a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/3.0/fr/">
                        <img alt="Licence Creative Commons" style={noborder} src="https://i.creativecommons.org/l/by-nc-nd/3.0/fr/88x31.png" />
                    </a>
                    Ce(tte) œuvre est mise à disposition selon les termes de la
                </span>
                <div>
                    <a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/3.0/fr/">
                        Licence Creative Commons Attribution - Pas d’Utilisation Commerciale - Pas de Modification 3.0 France
                    </a>.
                </div>
            </footer>
        );
    }
}

export default License;
