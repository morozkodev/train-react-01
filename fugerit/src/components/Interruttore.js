import React from 'react';

class Interruttore extends React.Component {

    constructor( props ) {
        super( props );
        this.state = { tipo: 'init', tempo: new Date() };
        this.testClick = this.testClick.bind( this );
    }

    testClick( e ) {
        console.log( e );
        this.setState( { tipo: 'test ', tempo: new Date() } );
    }

    render() {
        return (
            <div>
                <p>Tipo evento: {this.state.tipo} : {this.state.tempo.toLocaleTimeString()}</p>
                <button onClick={this.testClick}>Botton</button>
            </div>
        );
    }

}

export default Interruttore;