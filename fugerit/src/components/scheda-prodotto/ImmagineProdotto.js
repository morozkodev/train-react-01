import React from 'react';

class ImmagineProdotto extends React.Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
            <div><img src={this.props.src} alt={this.props.alt}/></div>
        );
    }

}

export default ImmagineProdotto;