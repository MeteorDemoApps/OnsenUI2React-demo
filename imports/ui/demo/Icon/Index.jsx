import React, { Component, PropTypes } from 'react';
import { Page } from 'react-onsenui';
import InternalPageToolbar from '../components/InternalPageToolbar.jsx';

class demoIconIndex extends Component {
    constructor(props) {
        super(props);

        this.renderToolbar = this.renderToolbar.bind(this);
    };

    renderToolbar() {
        return (
            <InternalPageToolbar title="demoIconIndex" navigator={this.props.navigator} />
        );
    };

    render() {
        return (
            <Page renderToolbar={this.renderToolbar}>
                demoIconIndex
            </Page>
        );
    };
}

demoIconIndex.propTypes = {
    navigator: PropTypes.object
};

export default demoIconIndex;


// import React, { Component, PropTypes } from 'react';
// import { Page, Toolbar, ToolbarButton, BackButton, Icon, Button, Fab } from 'react-onsenui';
// import ons from 'onsenui';
//
// class demoIconIndex extends Component {
//     constructor(props) {
//         super(props);
//
//         this.renderToolbar = this.renderToolbar.bind(this);
//     };
//
//     renderToolbar() {
//         return (
//             <Toolbar>
//                 <div className='left'>
//                     <BackButton onClick={() => this.props.navigator.popPage()}>Back</BackButton>
//                 </div>
//                 <div className='center'>Icon</div>
//                 <div className='right'>
//                     <ToolbarButton>
//                         <Icon icon="ion-navicon, material:md-menu"></Icon>
//                     </ToolbarButton>
//                 </div>
//             </Toolbar>
//         );
//     };
//
//     render() {
//         return (
//             <Page renderToolbar={this.renderToolbar}>
//                 <section style={{fontSize: '26px', margin: '16px'}}>
//                     <p>
//                         <Icon icon='md-delete' />
//                     </p>
//                     <p>
//                         <Icon style={{color: 'red'}} spin icon='md-spinner' />
//                     </p>
//                     <p>
//                         <Button>
//                             Edit <Icon icon='md-edit' />
//                         </Button>
//                     </p>
//                 </section>
//
//                 <Fab
//                     style={{backgroundColor: ons.platform.isIOS() ? '#4282cc' : null}}
//                     position='bottom right'>
//                     <Icon icon='md-face' />
//                 </Fab>
//             </Page>
//         );
//     };
// }
//
// demoIconIndex.propTypes = {
//     navigator: PropTypes.object
// };
//
// export default demoIconIndex;
