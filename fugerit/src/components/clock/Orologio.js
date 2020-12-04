import React from 'react';

class Orologio extends React.Component {

    constructor( props ) {
        super( props );
        this.state = { date: new Date() };
    }

    componentDidMount() {
        console.log( 'component mount' );
        this.timerID = setInterval( 
            () => this.tick(), 
            1000
         );
    }

    componentDidUpdate() {
        console.log( 'component aggiornato '+this.state.date );
    }

    componentWillUnmount() {
        console.log( 'componente rimosso' );
        clearInterval( this.timerID ); 
    }

    tick() {
        this.setState( { date: new Date() } );
    }

    render() {
        return (
            <div>
                <h2>Sono le <span>{this.state.date.toLocaleTimeString()}</span></h2>
            </div>
        );
    }

}


export default Orologio;