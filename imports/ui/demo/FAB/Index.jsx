import React, { Component, PropTypes } from 'react';
import { Page, Fab, Icon, Dialog, AlertDialog } from 'react-onsenui';
import InternalPageToolbar from '../components/InternalPageToolbar.jsx';
import ons from 'onsenui';

class demoFABIndex extends Component {
    constructor(props) {
        super(props);

        this.renderToolbar = this.renderToolbar.bind(this);
        this.handleClick = this.handleClick.bind(this);
    };

    renderToolbar() {
        return (
            <InternalPageToolbar title="Floating Action Button" navigator={this.props.navigator} />
        );
    };

    renderFixed() {
        return (
            <Fab ripple
                style={{backgroundColor: ons.platform.isIOS() ? '#4282cc' : null}}
                onClick={this.handleClick}
                position='bottom right'>
                <Icon icon='md-face' />
            </Fab>
        );
    };

    // TODO: FAB click event not working now...
    handleClick() {
        // this log not print
        console.log("handleClick clicked");
        ons.notification.alert('You clicked the button!');
    };
    
    render() {
        return (
            <Page
                renderToolbar={this.renderToolbar}
                renderFixed={this.renderFixed}
            >
                Some Content
            </Page>
        );
    }
}

demoFABIndex.propTypes = {
    navigator: PropTypes.object
};

export default demoFABIndex;
