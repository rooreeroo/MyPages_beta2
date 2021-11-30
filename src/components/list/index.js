import React from "react";
import propTypes from 'prop-types';
import Item from "../item";
import './styles.css';

function List({items, onSelectItem, onAddItem}){
  console.log('List', items);
  return (
    <div className='List'>{items.map(item =>
      <div className='List__item' key={item.code}>
        <Item item={item} onSelect={onSelectItem} onAddItem={onAddItem}/>
      </div>
    )}
    </div>
  )
}

List.propTypes = {
  items: propTypes.arrayOf(propTypes.object).isRequired,
  onSelectItem: propTypes.func,
  onAddItem: propTypes.func
}

List.defaultProps = {
  items: [],
  onAddItem: () => {},
  onSelectItem: () => {}
}

export default React.memo(List);