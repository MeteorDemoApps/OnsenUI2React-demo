import React, { Component, PropTypes } from 'react';
import { Page } from 'react-onsenui';
import InternalPageToolbar from '../components/InternalPageToolbar.jsx';

class NotImplementYet extends Component {
    constructor(props) {
        super(props);

        this.renderToolbar = this.renderToolbar.bind(this);
    };

    renderToolbar() {
        return (
            <InternalPageToolbar title="Not Implement Yet" navigator={this.props.navigator} />
        );
    };

    render() {
        return (
            <Page renderToolbar={this.renderToolbar}>
                Not Implement Yet
            </Page>
        );
    };
}

NotImplementYet.propTypes = {
    navigator: PropTypes.object
};

export default NotImplementYet;
