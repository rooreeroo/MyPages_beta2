import React, {useCallback, useState} from 'react';
import Controls from "./components/controls";
import List from "./components/list";
import Layout from "./components/layout";
import Basket from "./components/basket";
import plural from 'plural-ru';
import './style.css'

/**
 * Приложение
 * @param store {Store} Состояние с действиями
 */
function App({store}) {
  console.log('App');
  const [modalActive, setModalActive] = useState(false);
  const callbacks = {
    onCreateItem: useCallback(() => store.createItem(), [store]),
    onSelectItem: useCallback((code) => store.selectItem(code), [store]),
    onDeleteItem: useCallback((code) => store.deleteItem(code), [store]),
    onAddItem: useCallback((code) => store.onAddItem(code), [store])
  }

  return (
    <Layout head={<h1>Приложение на чистом JS</h1>}>
      <div className='Controls'>В корзине:
        <div className="card"> {
          store.state.basket.counter === 0 ?
              'пусто' :
              (store.state.basket.counter + ' ' + plural(store.state.basket.counter, 'товар', 'товара', 'товаров') + ' / ' + store.state.basket.price.toString(10).replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ') + ' ₽ ')
        }
        </div>
        <button onClick={() => setModalActive(true)}> Показать</button>
      </div>
      {/*<Controls onCreate={callbacks.onCreateItem}/>*/}
      <List items={store.getState().items}
            // onSelectItem={callbacks.onSelectItem}
            // onDeleteItem={callbacks.onDeleteItem}
            onAddItem={callbacks.onAddItem}/>
      <Basket
          active={modalActive}
          setActive={setModalActive}
          items={store.getState().items}
          basket={store.getState().basket}
      />
    </Layout>

  );
}

export default App;