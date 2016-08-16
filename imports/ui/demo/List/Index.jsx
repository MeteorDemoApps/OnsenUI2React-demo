import React, { PropTypes } from 'react';
import { Page, List, ListItem, ListHeader } from 'react-onsenui';
import { Random } from 'meteor/random';
import InternalPageToolbar from '../components/InternalPageToolbar.jsx';

const demoListIndex = ({navigator}) => {
  const renderToolbar = () => {
    return (
        <InternalPageToolbar title="List" navigator={navigator} />
    );
  };

  const items = [
    {_id: Random.id(), text: "Button"},
    {_id: Random.id(), text: "Carousel"},
    {_id: Random.id(), text: "Dialog"},
    {_id: Random.id(), text: "Floating Action Button"},
    {_id: Random.id(), text: "Grid"},
    {_id: Random.id(), text: "Icon"},
    {_id: Random.id(), text: "Input"},
    {_id: Random.id(), text: "Lazy List (or Infinite Scrolling)"},
    {_id: Random.id(), text: "List"},
    {_id: Random.id(), text: "Modal"},
    {_id: Random.id(), text: "Navigator"},
    {_id: Random.id(), text: "Page"},
    {_id: Random.id(), text: "Popover"},
    {_id: Random.id(), text: "Progress"},
    {_id: Random.id(), text: "Pull Hook"},
    {_id: Random.id(), text: "Ripple"},
    {_id: Random.id(), text: "Speed Dial"},
    {_id: Random.id(), text: "Splitter"},
    {_id: Random.id(), text: "Tabbar"},
    {_id: Random.id(), text: "Toolbar"}
  ];
  
  const renderRow = (item, index) => {
    const x = 40 + Math.round(5 * (Math.random() - 0.5)),
        y = 40 + Math.round(5 * (Math.random() - 0.5));

    const names = ['Max', 'Chloe', 'Bella', 'Oliver', 'Tiger', 'Lucy', 'Shadow', 'Angel'];
    const name = names[Math.floor(names.length * Math.random())];

    return (
        <ListItem key={index}>
          <div className='left'>
            <img src={`http://placekitten.com/g/${x}/${y}`} className='list__item__thumbnail' />
          </div>
          <div className='center'>
            {name}
          </div>
        </ListItem>
    );
  };

  return (
    <Page renderToolbar={renderToolbar} >
      <List
          dataSource={items}
          renderRow={renderRow}
          renderHeader={() => <ListHeader>Cute cats</ListHeader>}
      />
    </Page>
  );
};

demoListIndex.propTypes = {
  navigator: PropTypes.object
};

export default demoListIndex;
