import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';

export default class ResolutionSingle extends Component {

    toggleChecked(){
        console.log(this)
        Meteor.call('toggleResolution', this.props.resolution)
    }

    deleteResolution(){
        console.log(this)
        Meteor.call('deleteResolution', this.props.resolution)
    }
    render() {

        const resolutionClass = this.props.resolution.complete ? "checked" : ""
        const status = this.props.resolution.complete ? <span className="completed">Completed</span> : ""

        return(
            <li className={resolutionClass}>
                <input type="checkbox"
                    readOnly={true}
                    checked={this.props.resolution.complete}
                    onClick={this.toggleChecked.bind(this)}
                />
                <a href={`/resolution/${this.props.resolution._id}`}>{this.props.resolution.text}</a>
                {status}
                <button className="btn-cancel"
                onClick={this.deleteResolution.bind(this)}>
                &times;
                </button>                
            </li>
        )
    }
}