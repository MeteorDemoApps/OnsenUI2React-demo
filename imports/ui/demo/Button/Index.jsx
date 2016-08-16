import React, { Component, PropTypes } from 'react';
import { Page, Toolbar, BackButton, ToolbarButton, Icon, Button, Fab } from 'react-onsenui';
import ons from 'onsenui';

class demoButtonIndex extends Component {
    constructor(props) {
        super(props);
        this.renderToolbar = this.renderToolbar.bind(this);
    };

    handleClick() {
        ons.notification.alert('Hello world!');
    };

    renderToolbar() {
        return (
            <Toolbar>
                <div className='left'>
                    <BackButton onClick={() => this.props.navigator.popPage()}>Back</BackButton>
                </div>
                <div className='center'>Buttons</div>
                <div className='right'>
                    <ToolbarButton>
                        <Icon icon="ion-navicon, material:md-menu"></Icon>
                    </ToolbarButton>
                </div>
            </Toolbar>
        );
    };

    render() {
        return (
            <Page renderToolbar={this.renderToolbar}>

                <section style={{margin: '16px'}}>
                    <Button style={{margin: '6px'}} onClick={this.handleClick}>Normal</Button>
                    <Button style={{margin: '6px'}} modifier='quiet'>Quiet</Button>
                    <Button style={{margin: '6px'}} modifier='outline'>Outline</Button>
                    <Button style={{margin: '6px'}} modifier='cta'>Call to action</Button>
                    <Button style={{margin: '6px'}} modifier='large'>Large</Button>
                </section>

                <Fab position='bottom right'>
                    +
                </Fab>
            </Page>
        );
    }

}

demoButtonIndex.propTypes = {
    navigator: PropTypes.object
};

export default demoButtonIndex;
