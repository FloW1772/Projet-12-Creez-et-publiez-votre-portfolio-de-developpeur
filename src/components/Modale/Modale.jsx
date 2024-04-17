import React, { forwardRef, useImperativeHandle, useState } from 'react';
import './modale.scss';

const Modale = forwardRef((props, ref) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modaleContent, setModaleContent] = useState(null);

  const openModale = () => {
    setModaleContent(<div>{props.children}</div>);
    setIsOpen(true);
  };

  const closeModale = () => {
    setIsOpen(false);
  };

  useImperativeHandle(ref, () => ({
    openModale,
    closeModale
  }));

  return (
    <div className={`modale ${isOpen ? 'open' : ''}`}>
      <div className="modale-content">
        <span className="close" onClick={closeModale}>&times;</span>
        {modaleContent}
      </div>
    </div>
  );
});

export default Modale;