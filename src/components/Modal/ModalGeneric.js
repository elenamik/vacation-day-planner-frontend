import React from 'react';

function ModalGeneric () {
  // this will take options of types, and render contents based on this (react-router)
  return (
    <div className='surface'>
      <div className='box-for-options'>
      this is where you will be able to change things

        <div className='exit-button'>
      x
        </div>
      </div>

    </div>
  );
}

export default ModalGeneric;
