import React from 'react';

const Products = () => {
  return (
    <div className="h-screen border-solid border-2 border-black">
      <div className="h-full flex flex-col items-center gap-4">
        <h1>Conoce nuestros productos</h1>
        <div className="w-full h-4/5 grid grid-cols-4 place-items-center">
          <div className="w-4/5 h-4/5  border-2 border-black">prod</div>
          <div className="w-4/5 h-4/5  border-2 border-black">prod</div>
          <div className="w-4/5 h-4/5  border-2 border-black">prod</div>
          <div className="w-4/5 h-4/5  border-2 border-black">prod</div>
          <div className="w-4/5 h-4/5  border-2 border-black">prod</div>
          <div className="w-4/5 h-4/5  border-2 border-black">prod</div>
        </div>
      </div>
    </div>
  );
};

export default Products;
