import React from 'react';

class Interruttore extends React.Component {

    constructor( props ) {
        super( props );
        this.state = { tipo: 'init' };
        this.testClick = this.testClick.bind( this );
    }

    testClick( e ) {
        console.log( e );
        this.setState( { tipo: 'test '+e.timeStamp } );
    }

    render() {
        return (
            <div>
                <p>Tipo evento: {this.state.tipo}</p>
                <button onClick={this.testClick}>Botton</button>
            </div>
        );
    }

}

export default Interruttore;