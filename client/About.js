import React, { Component } from 'react';
import ReactCssTransitionGroup from 'react-addons-css-transition-group';

export default class About extends Component {

    setVar(){
        Session.set('Meteor.loginButtons.dropdownVisible', true)
    }
    render(){
        return(
            <ReactCssTransitionGroup
            component="div"
            transitionName="route"
            transitionEnterTimeout={600}
            transitionAppearTimeout={600}
            transitionLeaveTimeout={400}
            transitionAppear={true}
            >                
            <h1>About Us</h1>
            <p>Chambray readymade freegan cred cardigan swag iceland brooklyn flexitarian knausgaard cronut meditation art party edison bulb. Messenger bag lumbersexual umami hot chicken, freegan pork belly disrupt cray vinyl food truck. Squid affogato celiac succulents, pinterest mustache portland small batch. Try-hard portland authentic kale chips. Copper mug man braid shoreditch microdosing franzen listicle cray sustainable you probably haven't heard of them. Swag food truck hammock pug shabby chic man braid plaid 8-bit VHS 3 wolf moon salvia yr.</p>
            <button onClick={this.setVar}>Sign Up</button>
            </ReactCssTransitionGroup>

        )
    }
}