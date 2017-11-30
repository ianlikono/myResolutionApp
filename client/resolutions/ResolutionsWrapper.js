import React from 'react';
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import ReactCssTransitionGroup from 'react-addons-css-transition-group';

import ResolutionsForm from './ResolutionsForm';
import ResolutionSingle from './ResolutionSingle';

Resolutions = new Mongo.Collection("resolutions")

export default class ResolutionsWrapper extends TrackerReact(React.Component) {
    constructor(){
        super()
        this.state = {
            subscription: {
                resolutions: Meteor.subscribe("userResolutions")
            }
        }
    }

    componentWillUnmount(){
        this.state.subscription.resolutions.stop()
    }

    resolutions(){
        return Resolutions.find().fetch()
    }

  
    render() {
        
        console.log(this.resolutions())
        return (
            <ReactCssTransitionGroup
            component="div"
            transitionName="route"
            transitionEnterTimeout={600}
            transitionAppearTimeout={600}
            transitionLeaveTimeout={400}
            transitionAppear={true}
            >                      
                <h1>My Resolutions - {Session.get('test')}</h1>
                <ResolutionsForm />
                <ReactCssTransitionGroup
                component="ul"
                className="resolutions"
                transitionName="resolutionLoad"
                transitionEnterTimeout={600}
                transitionLeaveTimeout={400}
                >
                    {this.resolutions().map((resolution) => {
                        return <ResolutionSingle key={resolution._id} resolution={resolution} />
                        
                    })}
                    </ReactCssTransitionGroup>
                </ReactCssTransitionGroup>                  
        
        )
    }
}
