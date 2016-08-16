import React, { PropTypes } from 'react';
import { Page, Toolbar, BackButton } from 'react-onsenui';

const ItemDetailPage = ({item, navigator}) => {
  const renderToolbar = () => {
    return (
      <Toolbar>
        <div className='left'>
          <BackButton onClick={() => navigator.popPage()}>List</BackButton>
        </div>
        <div className="center">Item Details</div>
      </Toolbar>
    );
  };

  return (
    <Page 
      renderToolbar={renderToolbar}
    >
      <div style={{margin: '20px auto', display: 'table'}}>
        {item.text}
      </div>
    </Page>
  );
};

ItemDetailPage.propTypes = {
  item: PropTypes.object.isRequired,
  navigator: PropTypes.object.isRequired
};

export default ItemDetailPage;
