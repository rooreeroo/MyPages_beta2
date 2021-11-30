import React from "react";
import propTypes from 'prop-types';
import './styles.css';
import Card from "../card";

const Basket = ({active, setActive, items, basket}) => {
    console.log('items',items)
    return (
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div className={active ? "modal__content active" : "modal__content"} onClick={e => e.stopPropagation()}>
                <div className="modal__content-header">
                    <div className="modal__content-card">
                        <h1>Корзина</h1>
                        <button className="btn-close" onClick={() => setActive(false)}>Закрыть</button>
                    </div>
                </div>
                <div className='List-items-card'>{items.map(item =>
                    <div className='List__item-card' key={item.code}>
                        <Card code={item.code}
                        title={item.title}
                        price={item.price}
                        counter={item.counter}
                        basket={basket}/>
                    </div>
                )}
                </div>
                <div className="card-full-price">
                    <div className="full">Итого</div>
                    <div className="full-price">{basket.price.toString(10).replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ') + ' ₽ '} </div>
                    <div className="full-counter">{basket.counter + ' ' + 'шт'}</div>
                </div>
            </div>
        </div>
    );
};

Basket.propTypes = {
    item: propTypes.object.isRequired,
    onSelect: propTypes.func.isRequired,
    onAddItem: propTypes.func.isRequired
}

Basket.defaultProps = {
    onSelect: () => {},
    onAddItem: () => {}
}
export default React.memo(Basket);