import React, { Component, PropTypes } from 'react';
import {Toolbar, BackButton } from 'react-onsenui';

class InternalPageToolbar extends Component {
    render() {
        return (
            <Toolbar>
                <div className='left'>
                    <BackButton onClick={() => this.props.navigator.popPage()}>Back</BackButton>
                </div>
                <div className="center">{this.props.title}</div>
            </Toolbar>
        );
    }
}

InternalPageToolbar.propTypes = {
    title: PropTypes.string.isRequired,
    navigator: PropTypes.object.isRequired
};

export default InternalPageToolbar;
