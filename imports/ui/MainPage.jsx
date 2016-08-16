import React, { PropTypes } from 'react';
import { Page, Toolbar } from 'react-onsenui';
import TableOfContent from './TOC.jsx';

const MainPage = ({navigator}) => {
  const renderToolbar = () => {
    return (
      <Toolbar>
        <div className="center">OnsenUI 2 React Demo</div>
      </Toolbar>
    );
  };

  return (
    <Page 
      renderToolbar={renderToolbar}
    >
      <TableOfContent navigator={navigator}/>
    </Page>
  );
};

MainPage.propTypes = {
  navigator: PropTypes.object
};

export default MainPage;
