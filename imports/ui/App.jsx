import React, { Component } from 'react';

import { Navigator } from 'react-onsenui';
import MainPage from './MainPage.jsx'

// App component - represents the whole app
class App extends Component {
    renderPage(route, navigator){
        return <route.component key={route.key} navigator={navigator} {...route.props} />
    }

    render() {
        return (
            <Navigator
                renderPage={this.renderPage}
                initialRoute={{component: MainPage, key: 'MAIN_PAGE'}}
            />
        );
    }
}

export default App;
