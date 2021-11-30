import React from "react";
import propTypes from 'prop-types';
import './styles.css';

function Controls({props}){
  console.log(props);
  return <div className='Controls'>
    <button onClick={props}> Добавить</button>
  </div>
}

Controls.propTypes = {
  onCreate: propTypes.func.isRequired
}

Controls.defaultProps = {
  onCreate: () => {}
}

export default React.memo(Controls);