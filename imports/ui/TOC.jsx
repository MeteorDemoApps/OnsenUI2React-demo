// TOC = Table of Content
import React, { PropTypes } from 'react';
import { List, ListItem, ListHeader } from 'react-onsenui';
import { Random } from 'meteor/random';

import NotImplementYet from './demo/components/NotImplementYet.jsx';
import demoButtonIndex from './demo/Button/Index.jsx';
import demoCarouselIndex from './demo/Carousel/Index.jsx';
import demoDialogIndex from './demo/Dialog/Index.jsx';
import demoFABIndex from './demo/FAB/Index.jsx';
import demoIconIndex from './demo/Icon/Index.jsx';
import demoInputIndex from './demo/Input/Index.jsx';

import demoListIndex from './demo/List/Index.jsx';

const TableOfContent = ({navigator}) => {
  const TOC = [
    {_id: Random.id(), text: "Button", component: demoButtonIndex},
    {_id: Random.id(), text: "Carousel", component: demoCarouselIndex},
    {_id: Random.id(), text: "Dialog", component: demoDialogIndex},
    {_id: Random.id(), text: "Floating Action Button", component: demoFABIndex},
    {_id: Random.id(), text: "Grid", component: NotImplementYet},
    {_id: Random.id(), text: "Icon", component: demoIconIndex},
    {_id: Random.id(), text: "Input", component: demoInputIndex},
    {_id: Random.id(), text: "Lazy List (or Infinite Scrolling)", component: NotImplementYet},
    {_id: Random.id(), text: "List", component: demoListIndex},
    {_id: Random.id(), text: "Modal", component: NotImplementYet},
    {_id: Random.id(), text: "Navigator", component: NotImplementYet},
    {_id: Random.id(), text: "Page", component: NotImplementYet},
    {_id: Random.id(), text: "Popover", component: NotImplementYet},
    {_id: Random.id(), text: "Progress", component: NotImplementYet},
    {_id: Random.id(), text: "Pull Hook", component: NotImplementYet},
    {_id: Random.id(), text: "Ripple", component: NotImplementYet},
    {_id: Random.id(), text: "Speed Dial", component: NotImplementYet},
    {_id: Random.id(), text: "Splitter", component: NotImplementYet},
    {_id: Random.id(), text: "Tabbar", component: NotImplementYet},
    {_id: Random.id(), text: "Toolbar", component: NotImplementYet}
  ];
  const itemClickHandler = index => {

    navigator.pushPage({
      component: TOC[index].component,
      key: 'DEMO_INDEX_' + index
    });
  };

  const renderRow = (item, index) => {
    return (
      <ListItem key={item._id} modifier="longdivider" tappable >
        <div className="center" onClick={() => itemClickHandler(index)} >
          <div
              style={{
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
                width: 'calc(100vw - 110px)'
              }}
          >
            {item.text}
          </div>
        </div>
      </ListItem>
    );
  };

  return (
    <List
      dataSource={TOC}
      renderRow={renderRow}
      renderHeader={() => <ListHeader>Demo Items</ListHeader>}
    />
  );
};

TableOfContent.propTypes = {
  navigator: PropTypes.object
};

export default TableOfContent;
