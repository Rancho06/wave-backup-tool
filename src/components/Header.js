import React from 'react';

const styles = {
  divStyle: {
    textAlign: 'center',
    paddingLeft: '20px',
    paddingRight: '20px',
    paddingTop: '20px',
    paddingBottom: '20px'
  }
};

export const Header = ({ children }) => {
  const { divStyle } = styles;
  return (
    <div style={divStyle}>
      <h1>{children}</h1>
    </div>
  );
};
