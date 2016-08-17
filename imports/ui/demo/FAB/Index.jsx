import React, { Component, PropTypes } from 'react';
import { Page, Fab, Icon } from 'react-onsenui';
import InternalPageToolbar from '../components/InternalPageToolbar.jsx';
import ons from 'onsenui';

class demoFABIndex extends Component {
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

    handleClick() {
        ons.notification.alert('You clicked the button!');
    };
    
    render() {
        return (
            <Page
                renderToolbar={() => this.renderToolbar()}
                renderFixed={() => this.renderFixed()}
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
