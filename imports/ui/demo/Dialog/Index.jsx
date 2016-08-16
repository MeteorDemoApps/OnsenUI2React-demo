import React, { Component, PropTypes } from 'react';
import { Page, List, ListItem, Dialog, AlertDialog, Button } from 'react-onsenui';
import InternalPageToolbar from '../components/InternalPageToolbar.jsx';
import ons from 'onsenui';

class demoDialogIndex extends Component {
    constructor(props) {
        super(props);

        this.renderToolbar = this.renderToolbar.bind(this);
        this.showDialog = this.showDialog.bind(this);
        this.hideDialog = this.hideDialog.bind(this);
        this.showAlertDialog = this.showAlertDialog.bind(this);
        this.hideAlertDialog = this.hideAlertDialog.bind(this);

        this.state = {
            dialogShown: false,
            alertDialogShown: false,
            items: [
                {
                    title: 'Dialog',
                    fn: this.showDialog
                },
                {
                    title: 'Alert dialog',
                    fn: this.showAlertDialog
                },
                {
                    title: 'Alert notification',
                    fn: () => ons.notification.alert('An error has occurred!')
                },
                {
                    title: 'Confirmation',
                    fn: () => ons.notification.confirm('Are you ready?')
                },
                {
                    title: 'Prompt',
                    fn: () => ons.notification.prompt('What\'s your name?')
                }
            ]
        };
    };

    showDialog() {
        this.setState({dialogShown: true});
    };

    hideDialog() {
        this.setState({dialogShown: false});
    };

    showAlertDialog() {
        this.setState({alertDialogShown: true});
    };

    hideAlertDialog() {
        this.setState({alertDialogShown: false});
    };

    renderToolbar() {
        return (
            <InternalPageToolbar title="Dialog" navigator={this.props.navigator} />
        );
    };

    renderRow(row) {
        return (
            <ListItem key={row.title} tappable onClick={row.fn}>
                {row.title}
            </ListItem>
        );
    };

    render() {
        return (
            <Page renderToolbar={this.renderToolbar}>
                <List dataSource={this.state.items} renderRow={this.renderRow} />

                <Dialog
                    isOpen={this.state.dialogShown}
                    isCancelable={true}
                    onCancel={this.hideDialog}>
                    <div style={{textAlign: 'center', margin: '20px'}}>
                        <p style={{opacity: 0.5}}>This is a dialog!</p>
                        <p>
                            <Button onClick={this.hideDialog}>Close</Button>
                        </p>
                    </div>
                </Dialog>

                <AlertDialog
                    isOpen={this.state.alertDialogShown}
                    isCancelable={false}>
                    <div className='alert-dialog-title'>Warning!</div>
                    <div className='alert-dialog-content'>
                        An error has occurred!
                    </div>
                    <div className='alert-dialog-footer'>
                        <button onClick={this.hideAlertDialog} className='alert-dialog-button'>
                            Cancel
                        </button>
                        <button onClick={this.hideAlertDialog} className='alert-dialog-button'>
                            Ok
                        </button>
                    </div>
                </AlertDialog>
            </Page>
        );
    };
}

demoDialogIndex.propTypes = {
    navigator: PropTypes.object
};

export default demoDialogIndex;
