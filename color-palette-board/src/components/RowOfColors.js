import React from 'react';

const RowOfColors = ({midColor, midColorRGBArray, midColorRGB, handleClick, title}) => {

  var slotStyle = {
    "height": "38px",
    "width":"38px",
    "backgroundColor":"rgb(49,131,200)",
    "border": "1px solid rgb(222,229,234, .2)",
    "borderRadius": "4px",
    "margin":"8px",
    "display": "inline-block",
    "boxShadow": "inset 0px 1px 3px rgb(33,41,52, .3)",
  }
  var rowStyle = {
    "width": "100%",
    "display": "inline-grid",
    "gridTemplateColumns": "100px 1fr 1fr 1fr 1fr 1fr 1fr 1fr",
    "alignItems": "center",
  }
  var headerStyle = {
    "display":"inline-block",
    "fontSize": "15px",
    "color": "rgb(109,114,121)"
  }

  let colors = midColorRGBArray;
  let midColorArray = midColor + "Colors";

  return (
    <div style={rowStyle}>
      {{title} ? <p style={headerStyle}>{title}</p> : null}
      <div style={{...slotStyle,...{"backgroundColor":`rgb(${colors[0].r},${colors[0].g},${colors[0].b})`}}}></div>
      <div style={{...slotStyle,...{"backgroundColor":`rgb(${colors[1].r},${colors[1].g},${colors[1].b})`}}}></div>
      <div style={{...slotStyle,...{"backgroundColor":`rgb(${colors[2].r},${colors[2].g},${colors[2].b})`}}}></div>
      <div onClick={() => handleClick(midColor, midColorArray, midColorRGB)} style={{...slotStyle,...{"backgroundColor":`rgb(${midColorRGB.r},${midColorRGB.g},${midColorRGB.b})`, "cursor":"pointer"}}}></div>
      <div style={{...slotStyle,...{"backgroundColor":`rgb(${colors[3].r},${colors[3].g},${colors[3].b})`}}}></div>
      <div style={{...slotStyle,...{"backgroundColor":`rgb(${colors[4].r},${colors[4].g},${colors[4].b})`}}}></div>
      <div style={{...slotStyle,...{"backgroundColor":`rgb(${colors[5].r},${colors[5].g},${colors[5].b})`}}}></div>
    </div>
  );
}

export default RowOfColors;
