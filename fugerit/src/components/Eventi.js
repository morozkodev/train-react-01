import React from 'react';

class Eventi extends React.Component {

    handleClick( e ) {
        console.log( e );
        console.log( 'click' );
        e.preventDefault(); // impedisce l'evento di default (in questo caso il link sul click)
    }

    render() {
        return (
            <div>
                <a href="#" onClick={this.handleClick}>prova a cliccare</a>
            </div>
        );
    }

}

export default Eventi;