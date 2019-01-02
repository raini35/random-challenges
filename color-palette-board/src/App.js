import React, { Component } from 'react';
import RowOfColors from './components/RowOfColors';
import ChatRoom from './components/ChatComponent/ChatRoom';
import { SketchPicker } from 'react-color';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayColorPicker : false,
      currentColor: '',
      currentColorArray: '',
      currentColorRGB: {},
      primary: {
        r: 49,
        g: 131,
        b: 200,
        a: 1,
      },
      neutral: {
        r: 129,
        g: 143,
        b: 151,
        a: 1,
      },
      accent1: {
        r: 60,
        g: 174,
        b: 163,
        a: 1,
      },
      accent2: {
        r: 56,
        g: 193,
        b: 113,
        a: 1,
      },
      accent3: {
        r: 242,
        g: 202,
        b: 100,
        a: 1,
      },
      accent4: {
        r: 220,
        g: 48,
        b: 48,
        a: 1,
      },
      primaryColors: [
        {r: 19, g: 52, b: 80},
        {r: 29, g: 78, b: 120},
        {r: 44, g: 117, b: 180},
        {r: 152, g: 193, b: 227},
        {r: 213, g: 230, b: 244},
        {r: 244, g: 248, b: 252},
      ],
      neutralColors: [
        {r: 51, g: 57, b: 60},
        {r: 90, g: 100, b: 105},
        {r: 116, g: 128, b: 135},
        {r: 192, g: 199, b: 203},
        {r: 229, g: 232, b: 234},
        {r: 248, g: 249, b: 249},
      ],
      accent1Colors: [
        {r: 24, g: 69, b: 65},
        {r: 36, g: 104, b: 97},
        {r: 54, g: 156, b: 146},
        {r: 157, g: 214, b: 209},
        {r: 216, g: 238, b: 236},
        {r: 245, g: 250, b: 250},
      ],
      accent2Colors: [
        {r: 22, g: 77, b: 45},
        {r: 33, g: 115, b: 67},
        {r: 50, g: 173, b: 101},
        {r: 155, g: 224, b: 184},
        {r: 215, g: 242, b: 226},
        {r: 245, g: 251, b: 247},
      ],
      accent3Colors: [
        {r: 96, g: 80, b: 40},
        {r: 145, g: 121, b: 60},
        {r: 217, g: 181, b: 90},
        {r: 248, g: 228, b: 177},
        {r: 252, g: 244, b: 224},
        {r: 254, g: 252, b: 247},
      ],
      accent4Colors: [
        {r: 88, g: 19, b: 19},
        {r: 132, g: 28, b: 28},
        {r: 198, g: 43, b: 43},
        {r: 237, g: 151, b: 151},
        {r: 248, g: 213, b: 213},
        {r: 253, g: 244, b: 244},
      ]
    }
  }

  colorLuminance = (rgb, darkOrLight,lum) => {
    let r = parseInt(rgb.r), g = parseInt(rgb.g), b = parseInt(rgb.b);
    let newR = 0, newG = 0, newB = 0;
    if(darkOrLight === "light") {
      let diffR = Math.abs((r - 255) * lum);
      let diffG = Math.abs((g - 255) * lum);
      let diffB = Math.abs((b - 255) * lum);
      newR = r + diffR;
      newG = g + diffG;
      newB = b + diffB;
    } else {
      newR = r * lum;
      newG = g * lum;
      newB = b * lum;
    }
    return {r:Math.floor(newR), g:Math.floor(newG), b:Math.floor(newB)};
  }
  handleClick = (currentColor, currentColorArray, currentColorRGB) => {
    this.setState({
      displayColorPicker: !this.state.displayColorPicker,
      currentColor,
      currentColorRGB,
      currentColorArray
    })
  };
  handleClose = () => {
    this.setState({ displayColorPicker: false })
  };
  handleChange = (color) => {
    let colors = [
      this.colorLuminance(color.rgb, "dark",.4),
      this.colorLuminance(color.rgb, "dark",.7),
      this.colorLuminance(color.rgb, "dark",.9),
      this.colorLuminance(color.rgb, "light",.5),
      this.colorLuminance(color.rgb, "light",.8),
      this.colorLuminance(color.rgb, "light",.95),
    ]
    this.setState({ [this.state.currentColor]: color.rgb,
                    [this.state.currentColorArray]: colors,
                    currentColorRGB:color.rgb}, () => {
                      console.log(colors)
                    });
  };

  render() {
    let a4 = this.state.accent4;
    let a4Cols = this.state.accent4Colors;
    let nCols = this.state.neutralColors;
    let a3 = this.state.accent3;
    let a3Cols = this.state.accent3Colors;
    let a2 = this.state.accent2;
    let a2Cols = this.state.accent2Colors;
    let font = "'Nunito'"

    var containerStyle = {
      "width":"880px",
      "display":"grid",
      "gridTemplateColumns":"1fr 600px",
      "gridTemplateRows":"1fr 1fr 1fr 1fr",
    }
    var boxStyle = {
      "fontFamily": "'Roboto', sans-serif",
      "height": "410px",
      "width": "520px",
      "marginLeft": "30px",
      "marginRight": "30px"
    }
    var divideStyle = {
      "backgroundColor":"rgb(232,235,239)",
      "height":"2px",
      "width":"100%",
      "marginTop":"10px",
      "marginBottom": "10px"
    }
    var popoverStyle = {
      "marginTop":"10px",
    }
    var coverStyle = {
        "position": 'fixed',
        "top": '10px',
        "right": '0px',
        "bottom": '0px',
        "left": '0px',
    }
    var deactivateContainerStyle = {
      "height": "212px",
      "width": "477px",
      "borderTop":`5px solid rgb(${a4Cols[2].r},${a4Cols[2].g},${a4Cols[2].b})`,
      "fontFamily": `${font}, sans-serif`,
      "boxShadow": "5px 5px 30px rgb(33,41,52, .3)",
    }
    var deactivateStyle = {
      "width":"100%",
      "height":"100%",
      "display":"inline-grid",
      "gridTemplateRows": "71% 29%",
      "gridTemplateColumns":"14% 86%",
      "gridTemplateAreas": '"warningSign message""button button"'
    }
    var deactivateSymbolStyle = {
      "height": "19px",
      "width": "19px",
      "borderRadius":"50%",
      "backgroundColor":"white",
      "border":`3px solid rgb(${a4.r},${a4.g},${a4.b})`,
      "boxShadow": `0 0 0 6px rgb(${a4Cols[5].r},${a4Cols[5].g},${a4Cols[5].b})`,
      "display":"inline-grid",
      "placeItems":"center",
      "marginTop":"28px",
    }

    var warningSymbolStyle = {
      "height": "19px",
      "width": "19px",
      "borderRadius":"50%",
      "backgroundColor":"white",
      "border":`3px solid rgb(${a3.r},${a3.g},${a3.b})`,
      "boxShadow": `0 0 0 6px rgb(${a3Cols[4].r},${a3Cols[4].g},${a3Cols[4].b})`,
      "display":"inline-grid",
      "placeItems":"center",
      "justifySelf":"end",
      "marginRight":"20px"
    }

    var warningContainerStyle = {
      "height": "65px",
      "width": "473px",
      "border":`3px solid rgb(${a3Cols[3].r},${a3Cols[3].g},${a3Cols[3].b})`,
      "fontFamily": `${font}, sans-serif`,
      "boxShadow": "5px 5px 30px rgb(33,41,52, .3)",
      "backgroundColor": `rgb(${a3Cols[5].r},${a3Cols[5].g},${a3Cols[5].b})`,
      "borderRadius": "5px",
    }
    var warningStyle = {
      "width":"100%",
      "height":"100%",
      "display":"inline-grid",
      "gridTemplateRows": "1fr",
      "gridTemplateColumns":"14% 86%",
      "gridTemplateAreas": '"exclamation warningMessage"',
      "alignItems":"center",
    }

    var stockPillContainerStyle = {
      "height": "63px",
      "width": "407px",
      "fontFamily": `${font}, sans-serif`,
      "boxShadow": "5px 5px 30px rgb(33,41,52, .3)",
      "borderRadius": "5px",
    }
    var stockPillStyle = {
      "width":"100%",
      "height":"100%",
      "display":"inline-grid",
      "gridTemplateRows": "1fr",
      "gridTemplateColumns":"53% 19% 28%",
      "alignItems":"center",
      "borderRadius":"inherit"
    }
    return (
      <div style={containerStyle}>
        <div style={boxStyle}>
          <div style={divideStyle}></div>
          <RowOfColors
            midColor="primary" midColorRGB={this.state.primary}
            midColorRGBArray={this.state.primaryColors}
            handleClick={this.handleClick} title="Primary"/>

          <div style={divideStyle}></div>
          <RowOfColors
            midColor="neutral" midColorRGB={this.state.neutral}
            midColorRGBArray={this.state.neutralColors}
            handleClick={this.handleClick} title="Neutral"/>

          <div style={divideStyle}></div>
          <RowOfColors
            midColor="accent1" midColorRGB={this.state.accent1} midColorRGBArray={this.state.accent1Colors} handleClick={this.handleClick} title="Accents"/>

          <RowOfColors
            midColor="accent2" midColorRGB={this.state.accent2}
            midColorRGBArray={this.state.accent2Colors}
            handleClick={this.handleClick} title={null}/>

          <RowOfColors
            midColor="accent3" midColorRGB={this.state.accent3}
            midColorRGBArray={this.state.accent3Colors}
            handleClick={this.handleClick} title={null}/>

          <RowOfColors
            midColor="accent4" midColorRGB={this.state.accent4}
            midColorRGBArray={this.state.accent4Colors}
            handleClick={this.handleClick} title={null}/>
        </div>
        <div>
          {this.state.displayColorPicker ?
            <div style={popoverStyle}>
              <div style={coverStyle} onClick={ this.handleClose }></div>
              <SketchPicker color={this.state.currentColorRGB} onChange={this.handleChange}/>
            </div> : null}
        </div>
        <ChatRoom
          primary={this.state.primary}
          neutral={this.state.neutral}
          accent1={this.state.accent1}
          accent2={this.state.accent2}
          accent3={this.state.accent3}
          accent4={this.state.accent4}
          primaryColors={this.state.primaryColors}
          neutralColors={this.state.neutralColors}
          accent1Colors={this.state.accent1Colors}
          accent2Colors={this.state.accent2Colors}
          accent3Colors={this.state.accent3Colors}
          accent4Colors={this.state.accent4Colors} />
          <div>
            <div style={deactivateContainerStyle}>
              <div style={deactivateStyle}>

                <div style={{"display":"inline-grid","justifyItems":"center","gridArea":"warningSign"}}>
                  <div style={deactivateSymbolStyle}>
                    <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                     width="12px" height="12px" viewBox="0 0 512.000000 512.000000"
                     preserveAspectRatio="xMidYMid meet">
                    <metadata>
                    Created by potrace 1.15, written by Peter Selinger 2001-2017
                    </metadata>
                    <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                    fill={`rgb(${a4.r},${a4.g},${a4.b})`} stroke="none">
                    <path d="M1936 4863 c2 -21 18 -211 34 -423 16 -212 66 -843 110 -1404 44
                    -560 80 -1029 80 -1042 l0 -24 425 0 c398 0 425 1 425 18 0 9 50 663 110 1451
                    61 789 110 1441 110 1448 0 11 -123 13 -649 13 l-649 0 4 -37z"/>
                    <path d="M2515 1339 c-206 -25 -379 -174 -439 -378 -9 -32 -16 -91 -16 -141 0
                    -396 405 -647 758 -469 310 155 387 561 155 819 -115 128 -284 191 -458 169z"/>
                    </g>
                    </svg>
                  </div>
                </div>
                <div style={{"gridArea":"message"}}>
                  <div style={{"marginRight":"50px"}}>
                    <p style={{"fontWeight":"700","fontSize":"16px", "marginTop":"28px", "marginBottom":"0", "color":`rgb(${nCols[0].r}, ${nCols[0].g}, ${nCols[0].b})`}}>Deactivate account</p>
                    <p style={{"marginTop":"10px", "fontSize":"15px", "color":`rgb(${nCols[1].r}, ${nCols[1].g}, ${nCols[1].b})`}}>Are you sure you want to deactivate your account? By doing this you will lose all of your saved data and will not be able to retrieve it.</p>
                  </div>
                </div>
                <div style={{"display":"inline-grid","gridArea":"button", "backgroundColor":`rgb(${nCols[5].r}, ${nCols[5].g}, ${nCols[5].b})`,"width":"100%", "justifyItems":"end","alignItems":"center"}}>
                  <div>
                    <div style={{"display":"inline-block","fontSize":"13px","fontWeight":"800", "color":`rgb(${nCols[1].r}, ${nCols[1].g}, ${nCols[1].b},0.7)`,"marginRight":"20px"}}>Cancel</div>
                    <div style={{"width":"120px","height":"35px","backgroundColor": `rgb(${a4Cols[4].r},${a4Cols[4].g},${a4Cols[4].b}, .5)`,"borderRadius":"8px","fontSize":"14px","fontWeight":"800", "color":`rgb(${a4.r},${a4.g},${a4.b})`,"display":"inline-grid","placeItems":"center","marginRight":"25px"}}><p style={{"margin":"0"}}>Deactivate</p></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div style={warningContainerStyle}>
              <div style={warningStyle}>
                <div style={warningSymbolStyle}>
                  <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                   width="12px" height="12px" viewBox="0 0 512.000000 512.000000"
                   preserveAspectRatio="xMidYMid meet">
                  <metadata>
                  Created by potrace 1.15, written by Peter Selinger 2001-2017
                  </metadata>
                  <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                  fill={`rgb(${a3.r},${a3.g},${a3.b})`} stroke="none">
                  <path d="M1936 4863 c2 -21 18 -211 34 -423 16 -212 66 -843 110 -1404 44
                  -560 80 -1029 80 -1042 l0 -24 425 0 c398 0 425 1 425 18 0 9 50 663 110 1451
                  61 789 110 1441 110 1448 0 11 -123 13 -649 13 l-649 0 4 -37z"/>
                  <path d="M2515 1339 c-206 -25 -379 -174 -439 -378 -9 -32 -16 -91 -16 -141 0
                  -396 405 -647 758 -469 310 155 387 561 155 819 -115 128 -284 191 -458 169z"/>
                  </g>
                  </svg>
                </div>
                <div >
                  <div style={{"color":`rgb(${a3Cols[0].r},${a3Cols[0].g},${a3Cols[0].b})`}}>
                    <p style={{"fontWeight":"800","fontSize":"15px", "margin":"0"}}>Warning!</p>
                    <p style={{"fontSize":"13px", "margin":"0"}}>You must be an administrator to access this page.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div style={stockPillContainerStyle}>
              <div style={stockPillStyle}>
                <div style={{ "display":"inline-grid","width":"100%","height":"100%","borderTopLeftRadius":"inherit","borderBottomLeftRadius":"inherit", "alignItems":"center"}}>
                  <p style={{"margin":"0", "marginLeft":"20px", "fontWeight":"800", "alignSelf":"end", "color":`rgb(${nCols[0].r}, ${nCols[0].g}, ${nCols[0].b})`}}>DOW J</p>
                  <p style={{"margin":"0", "marginLeft":"20px", "fontWeight":"700", "fontSize":"13px", "alignSelf":"start", "color": `rgb(${nCols[2].r}, ${nCols[2].g}, ${nCols[2].b})`}}>Dow Jones Inustrial Average</p>
                </div>
                <div></div>
                <div style={{ "display":"inline-grid","width":"100%","height":"100%","borderTopRightRadius":"inherit","borderBottomRightRadius":"inherit", "alignItems":"center", "justifyItems":"end"}}>
                  <p style={{"margin":"0", "marginRight":"20px", "fontWeight":"800", "alignSelf":"end", "color": `rgb(${nCols[0].r}, ${nCols[0].g}, ${nCols[0].b})`}}>25,416.70</p>
                  <div style={{"width":"67px","height":"20px","backgroundColor":`rgb(${a2Cols[4].r}, ${a2Cols[4].g}, ${a2Cols[4].b})`,"margin":"0", "marginRight":"20px", "fontWeight":"900", "fontSize":"12px", "alignSelf":"start", "display":"inline-grid","placeItems": "center", "borderRadius":"10px"}}><p style={{"margin":"0", "color":`rgb(${a2Cols[1].r}, ${a2Cols[1].g}, ${a2Cols[1].b})`}}>+ 190.87</p></div>
                </div>
              </div>
            </div>
          </div>

          <div>App Dash</div>
      </div>
    );
  }
}

export default App;
