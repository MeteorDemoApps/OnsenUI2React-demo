import React, { Component, PropTypes } from 'react';
import { Page, List, ListHeader, ListItem, Button, Input } from 'react-onsenui';
import InternalPageToolbar from '../components/InternalPageToolbar.jsx';
import ons from 'onsenui';

class demoInputIndex extends Component {
    constructor(props) {
        super(props);

        this.renderToolbar = this.renderToolbar.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleVegetableChange = this.handleVegetableChange.bind(this);
        this.renderRadioRow = this.renderRadioRow.bind(this);

        this.state = {
            username: '',
            password: '',
            vegetables: [
                'Tomato',
                'Cucumber',
                'Onion',
                'Eggplant',
                'Cabbage'
            ],
            selectedVegetable: 'Onion'
        };
    };

    renderToolbar() {
        return (
            <InternalPageToolbar title="Input" navigator={this.props.navigator} />
        );
    };

    renderRow(row) {
        return (
            <ListItem key={row.title} tappable onClick={row.fn}>
                {row.title}
            </ListItem>
        );
    };

    handleClick() {
        if (this.state.username === 'bob' && this.state.password === 'secret') {
            ons.notification.alert('You are now signed in!');
        }
        else {
            ons.notification.alert('Username or password incorrect!');
        }
    };

    handleUsernameChange(e) {
        this.setState({username: e.target.value});
    };

    handlePasswordChange(e) {
        this.setState({password: e.target.value});
    };

    handleVegetableChange(vegetable) {
        this.setState({selectedVegetable: vegetable});
    };

    renderCheckboxRow(row) {
        return (
            <ListItem key={row} tappable>
                <label className='left'>
                    <Input
                        inputId={`checkbox-${row}`}
                        type='checkbox'
                    />
                </label>
                <label htmlFor={`checkbox-${row}`} className='center'>
                    {row}
                </label>
            </ListItem>
        )
    };

    renderRadioRow(row) {
        return (
            <ListItem key={row} tappable>
                <label className='left'>
                    <Input
                        inputId={`radio-${row}`}
                        checked={row === this.state.selectedVegetable}
                        onChange={this.handleVegetableChange.bind(this, row)}
                        type='radio'
                    />
                </label>
                <label htmlFor={`radio-${row}`} className='center'>
                    {row}
                </label>
            </ListItem>
        )
    };

    render() {
        return (
            <Page renderToolbar={this.renderToolbar}>
                <section style={{textAlign: 'center'}}>
                    <p>
                        <Input
                            value={this.state.username}
                            onChange={this.handleUsernameChange}
                            modifier='underbar'
                            float
                            placeholder='Username' />
                    </p>
                    <p>
                        <Input
                            value={this.state.password}
                            onChange={this.handlePasswordChange}
                            modifier='underbar'
                            type='password'
                            float
                            placeholder='Password' />
                    </p>
                    <p>
                        <Button onClick={this.handleClick}>Sign in</Button>
                    </p>
                </section>

                <List
                    dataSource={this.state.vegetables}
                    renderHeader={() => <ListHeader>Radio buttons</ListHeader>}
                    renderRow={this.renderRadioRow}
                />

                <List
                    dataSource={this.state.vegetables}
                    renderHeader={() => <ListHeader>Checkboxes</ListHeader>}
                    renderRow={this.renderCheckboxRow}
                />
            </Page>
        );
    };
}

demoInputIndex.propTypes = {
    navigator: PropTypes.object
};

export default demoInputIndex;
