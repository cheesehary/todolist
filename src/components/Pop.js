import React from 'react';

export default ({msg, onClose}) => (
  <div>
    <div className="pop middle">
      <p className="pop-msg">{msg}</p>
      <button className="pop-btn" onClick={onClose}>OK</button>
    </div>
    <div className="mask"></div>
  </div>
);