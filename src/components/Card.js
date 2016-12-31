import React from 'react';

const styles = {
  divStyle: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: "space-around"
  }
};

export const Card = ({ children }) => {
  const { divStyle } = styles;
  return (
    <div style={divStyle}>
      {children}
    </div>
  );
};
