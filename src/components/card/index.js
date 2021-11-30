import React from "react";
import propTypes from 'prop-types';
import './styles.css';
import plural from "plural-ru";

const Card = ({code, title, price, counter, basket}) => {
    console.log('item',code, title, price)
    if (counter !== 0) {
        return (
            <div className="card-info">
                <div className="modal-items">
                    <div className='code'>{code}</div>
                    <div className='title'>
                        {title}
                    </div>
                    <div className="price">{price.toString(10).replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ')} ₽</div>
                    <div className='counter'>
                        {counter} шт
                    </div>
                </div>

            </div>

        )
    }
    return null
};
export default React.memo(Card);