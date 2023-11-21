import React from 'react';

const Categories = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center  border-solid border-2 border-black">
      <div className="w-4/6 h-4/6 grid grid-cols-2 gap-4">
        <div className="border-solid border-2 border-black">category01</div>
        <div className="border-solid border-2 border-black">category02</div>
      </div>
    </div>
  );
};

export default Categories;
