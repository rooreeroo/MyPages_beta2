import React, {useCallback, useState} from "react";
import propTypes from 'prop-types';
import plural from 'plural-ru';
import './styles.css';

function Item({item, onSelect, onAddItem}){
  console.log('Item',item, item.title, item.counter);

  const [counter, setCounter] = useState(0);

  const callbacks = {
    onClick: useCallback(() => {
      // onSelect(item.code);
      // if (!item.selected){
        setCounter(counter + 1);
      // }
    }, [item, onSelect, counter, setCounter])
  };

  return (
    <div className={'Item'  + (item.selected ? ' Item_selected' : '')} onClick={callbacks.onClick}>
      <div className='Item__number'>{item.code}</div>
      <div className='Item__title'>
        {item.title}
        {counter ? ` | Выделялся ${counter} ${plural(counter, 'раз', 'раза', 'раз')}` : null}
      </div>
        <div className="price">{item.price.toString(10).replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ')} ₽</div>
      <div className='Item__actions'>
        <button onClick={() => onAddItem(item.code)}>
          Добавить
        </button>
      </div>
    </div>
  )
}

Item.propTypes = {
  item: propTypes.object.isRequired,
  onSelect: propTypes.func.isRequired,
  onAddItem: propTypes.func.isRequired
}

Item.defaultProps = {
  onSelect: () => {},
  onAddItem: () => {}
}

export default React.memo(Item);