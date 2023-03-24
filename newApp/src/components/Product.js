import React from 'react';
import PropTypes from 'prop-types';

function Product({id, onRemove, name, price}){

  const remove = () => {
    onRemove(id);
  };

  return (
    <div className="product">
      <div className="body">
        <h1 className="title">{name}</h1>
        <div className="price">{`${price} $`}</div>
      </div>
      <button onClick={remove} type="button">Remove</button>
    </div>
  );
}

Product.propTypes = {
  id: PropTypes.number,
  onRemove: PropTypes.func,
  name: PropTypes.string,
  price: PropTypes.string,
};

export default Product;

