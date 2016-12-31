import React, { Component } from 'react';

const styles = {
  divStyle: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "space-around"
  },
  labelStyle: {
    fontSize: "1.3em"
  },
  inputStyle: {
    fontSize: "1.1em",
    width: "300px",
    height: "30px"
  }
};

export const LineInput = ({ name, label, placeholder, value, onChange }) => {
  const { divStyle, labelStyle, inputStyle } = styles;
  return (
    <div style={divStyle}>
      <label style={labelStyle} htmlFor={name}>{label}</label>
      <input style={inputStyle} type="text" placeholder={placeholder} name={name} value={value} onChange={onChange} />
    </div>
  );
}
