import React, { Component } from 'react';

class ChatRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.refs.messages.scrollTop = this.refs.messages.scrollHeight;
  }

  render() {
    let font = "'Nunito'"
    let p = this.props.primary;
    let n = this.props.neutral;
    let a1 = this.props.accent1;
    let a2 = this.props.accent2;
    let a3 = this.props.accent3;
    let a4 = this.props.accent4;
    // `rgb(${pCols[2].r},${pCols[2].g},${pCols[2].b})`
    let pCols = this.props.primaryColors;
    // `rgb(${nCols[2].r},${nCols[2].g},${nCols[2].b})`
    let nCols = this.props.neutralColors;
    // `rgb(${a1Cols[2].r},${a1Cols[2].g},${a1Cols[2].b})`
    let a1Cols = this.props.accent1Colors;
    // `rgb(${a2Cols[2].r},${a2Cols[2].g},${a2Cols[2].b})`
    let a2Cols = this.props.accent2Colors;
    // `rgb(${a3Cols[2].r},${a3Cols[2].g},${a3Cols[2].b})`
    let a3Cols = this.props.accent3Colors;
    // `rgb(${a4Cols[2].r},${a4Cols[2].g},${a4Cols[2].b})`
    let a4Cols = this.props.accent4Colors;

    var arrowDownStyle= {
      "cursor":"pointer",
      "display": "inline-block",
      "width": "4px",
      "height": "4px",
      "background": "transparent",
      "borderTop": `2px solid rgb(${nCols[4].r},${nCols[4].g},${nCols[4].b})`,
      "borderLeft": `2px solid rgb(${nCols[4].r},${nCols[4].g},${nCols[4].b})`,
      "textDecoration": "none",
      "color": "transparent",
      "transform": "rotate(-135deg)",
      "right": "175px",
      "borderWidth": "1px",
      "marginBottom": "3px",
      "marginLeft": "4px",
    }
    var availabilityDotStyle = {
      "height": "6px",
      "width": "6px",
      "backgroundColor": `rgb(${a2Cols[3].r},${a2Cols[3].g},${a2Cols[3].b})`,
      "borderRadius": "50%",
      "display":"inline-block",
      "marginRight":"10px",
      "justifySelf": "end"
    }
    var channelNameStyle = {
      "height":"100%",
      "borderTopRightRadius":"inherit",
      "borderBottom": `2px solid rgba(${nCols[4].r},${nCols[4].g},${nCols[4].b},0.5)`,
      "display":"inline-grid",
      "gridTemplateColumns":"75% 25%",
      "boxShadow": `2px 2px 10px rgba(${nCols[4].r},${nCols[4].g},${nCols[4].b},0.5)`,
      "alignItems": "center",
      "gridArea": "channelName",
      "zIndex":"1"
    }
    var channelsStyle = {
      "borderBottomLeftRadius":"inherit",
      "height":"100%",
      "width":"100%"
    }
    var chatInputContainerStyle = {
      "display": "inline-grid",
      "height":"100%",
      "width":"100%",
      "borderBottomRightRadius":"inherit",
      "placeItems": "center",
      "gridArea":"mainChatInput",
    }
    var chatInputStyle ={
      "width": "93%",
      "height": "51%",
      "backgroundColor": `rgb(${nCols[4].r},${nCols[4].g},${nCols[4].b})`,
      "borderRadius": "7px",
      "display":"inline-grid",
      "alignItems":"center",
      "gridTemplateColumns":"85% 15%",
    }
    var chatSettingsStyle = {
      "height":"100%",
      "width":"100%",
      "borderTopLeftRadius":"inherit",
      "display":"inline-grid",
      "alignItems": "center"
    }
    var containerStyle = {
      "margin": "20px",
      "width": "609px",
      "height": "386px",
      "gridTemplateColumns":"30% 70%",
      "gridTemplateRows":"12% 73% 15%",
      "gridTemplateAreas":'"sideBar channelName" "sideBar mainMessages" "sideBar mainChatInput"',
      "display": "grid",
      "borderRadius":"10px",
      "boxShadow": "5px 5px 40px rgb(33,41,52, .3)",
      "fontFamily": `${font}, sans-serif`,
      "color": `rgb(${nCols[0].r},${nCols[0].g},${nCols[0].b})`
    }
    var mailOptionsStyle = {
      "width":"100%",
      "height":"100%",
      "display":"inline-grid",
      "alignItems":"center"
    }
    var messageContainerStyle = {
      "margin":"5px 37px 5px 16px", "display":"inline-grid","gridTemplateColumns":"13% 87%","gridTemplateRows":"22px 1fr", "gridTemplateAreas":'"userPhoto userName" "userPhoto messages"'
    }
    var messagesStyle = {
      "width":"100%",
      "height":"100%",
      "overflow":"auto",
      "midHeight":"300px",
      "gridArea": "mainMessages"
    }
    var notificationBellStyle = {
      "height":"20px",
      "fill":"white"
    }
    var notificationDotStyle = {
      "height": "6px",
      "width": "6px",
      "backgroundColor": `rgb(${a4.r},${a4.g},${a4.b})`,
      "border":"2px solid white",
      "borderRadius": "50%",
      "display":"inline-block",
      "position": 'absolute',
      "marginLeft":"10px",
      "marginTop":"0px",
      "zIndex": '2',
    }
    var sideBarStyle = {
      "backgroundColor": `rgb(${pCols[2].r},${pCols[2].g},${pCols[2].b})`,
      "borderTopLeftRadius":"inherit",
      "borderBottomLeftRadius":"inherit",
      "display":"inline-grid",
      "gridTemplateRows": "16% 18% 66%",
      "alignItems": "center",
      "gridArea":"sideBar"
    }
    var userPhotoStyle = {
      "marginTop":"2px",
      "height": "33px",
      "width": "33px",
      "backgroundColor": `rgb(${a2Cols[3].r},${a2Cols[3].g},${a2Cols[3].b})`,
      "borderRadius": "50%",
      "display":"inline-block",
      "gridArea":"userPhoto",
      "justifySelf":"startl"
    }
    var timeStampStyle = {
      "fontSize":"9px",
      "color": `rgb(${nCols[1].r},${nCols[1].g},${nCols[1].b})`,
      "marginLeft": "5px"
    }

    return (
      <div style={containerStyle}>
        <div style={sideBarStyle}>

          <div style={chatSettingsStyle}>
            <div style={{"display":"inline-grid","gridTemplateRows":"1fr 1fr","gridTemplateColumns":"70% 30%",
            "gridTemplateAreas":
    '"chatGroupSettings notifications" "availabilityStatus notifications"', "height":"60%","width":"100%", "justifyItems":"center"}}>
              <div>
                <p style={{"color": `rgb(${nCols[5].r},${nCols[5].g},${nCols[5].b})`, "fontWeight":"800", "fontSize":"14px", "margin": "0", "display":"inlline-block","marginLeft":"10px","cursor":"pointer"}}>Bowen Group <span style={arrowDownStyle}></span></p>
              </div>

              <div style={{"gridArea":"notifications","alignSelf":"center","justifySelf":"end", "cursor":"pointer"}}>
                <div style={notificationDotStyle}></div>
                <svg style={{"marginRight":"10px"}} version="1.0" xmlns="http://www.w3.org/2000/svg"
                 width="18px" height="18px" viewBox="0 0 124.000000 155.000000"
                 preserveAspectRatio="xMidYMid meet">
                <metadata>
                Created by potrace 1.15, written by Peter Selinger 2001-2017
                </metadata>
                <g transform="translate(0.000000,155.000000) scale(0.100000,-0.100000)"
                fill={`rgb(${pCols[4].r},${pCols[4].g},${pCols[4].b})`} stroke="none">
                <path d="M560 1477 c-31 -24 -50 -62 -50 -100 0 -27 -5 -39 -17 -43 -116 -39
                -224 -122 -280 -215 -55 -91 -63 -145 -63 -404 l0 -231 -75 -74 c-67 -66 -75
                -79 -75 -112 l0 -38 620 0 620 0 0 38 c0 33 -8 46 -75 112 l-75 74 0 231 c0
                259 -8 313 -63 404 -56 93 -164 176 -279 215 -13 4 -18 16 -18 43 0 38 -19 76
                -50 100 -20 16 -100 16 -120 0z m192 -309 c70 -32 124 -86 157 -157 26 -55 26
                -59 29 -323 l3 -268 -321 0 -321 0 3 273 c3 264 4 273 27 317 35 66 60 97 103
                127 98 67 215 79 320 31z"/>
                <path d="M474 169 c14 -70 73 -119 146 -119 73 0 129 46 145 118 l7 32 -152 0
                -152 0 6 -31z"/>
                </g>
                </svg>

              </div>

              <div style={{"width":"100%","display":"inline-grid","gridTemplateColumns":"30% 70%","alignItems":"center"}}>
                <span style={availabilityDotStyle}></span>
                <p style={{"color": `rgb(${nCols[5].r},${nCols[5].g},${nCols[5].b})`,"fontSize":"11px","fontWeight":"300","margin":"0"}}>Daniel Bowen</p>
              </div>
            </div>
          </div>

          <div style={mailOptionsStyle}>
            <div style={{"height":"80%", "display":"inline-grid", "gridTemplateRows":"1fr 1fr","alignSelf":"start","marginTop":"4px"}}>
              <div style={{"width":"100%","alignItems":"center","display":"inline-grid", "gridTemplateColumns":"20% 80%"}}>
                <svg style={{"justifySelf":"end", "marginRight":"4px"}} version="1.0" xmlns="http://www.w3.org/2000/svg"
                 width="22px" height="22px" viewBox="0 0 512.000000 512.000000"
                 preserveAspectRatio="xMidYMid meet">
                  <metadata>
                  Created by potrace 1.15, written by Peter Selinger 2001-2017
                  </metadata>
                  <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                  fill={`rgb(${pCols[4].r},${pCols[4].g},${pCols[4].b})`} stroke="none">
                  <path d="M994 4126 l-34 -34 0 -1532 0 -1532 34 -34 34 -34 1532 0 1532 0 34
                  34 34 34 0 1532 0 1532 -34 34 -34 34 -1532 0 -1532 0 -34 -34z m2916 -1006
                  l0 -790 -254 0 c-139 0 -269 -3 -287 -6 -28 -5 -79 -52 -272 -245 l-239 -239
                  -303 0 -303 0 -222 229 c-160 165 -233 234 -261 245 -32 13 -87 16 -304 16
                  l-265 0 0 790 0 790 1355 0 1355 0 0 -790z m-2010 -1274 c204 -204 240 -236
                  275 -243 52 -11 718 -11 770 0 35 7 71 39 275 243 l236 234 227 0 227 0 0
                  -440 0 -440 -1355 0 -1355 0 0 440 0 440 232 0 232 0 236 -234z"/>
                  <path d="M1554 3486 c-30 -30 -34 -40 -34 -86 0 -46 4 -56 34 -86 l34 -34 972
                  0 972 0 34 34 c30 30 34 40 34 86 0 46 -4 56 -34 86 l-34 34 -972 0 -972 0
                  -34 -34z"/>
                  <path d="M1554 2926 c-30 -30 -34 -40 -34 -86 0 -46 4 -56 34 -86 l34 -34 972
                  0 972 0 34 34 c30 30 34 40 34 86 0 46 -4 56 -34 86 l-34 34 -972 0 -972 0
                  -34 -34z"/>
                  </g>
                </svg>
                <p style={{"color": `rgb(${nCols[5].r},${nCols[5].g},${nCols[5].b})`, "fontWeight":"600", "fontSize":"11px", "margin": "0", "display":"inline-block","marginLeft":"5px","cursor":"pointer"}}>Inbox</p>
              </div>
              <div style={{"width":"100%","alignItems":"center","display":"inline-grid", "gridTemplateColumns":"20% 80%"}}>
                <svg style={{"justifySelf":"end","marginRight":"6px"}} version="1.0" xmlns="http://www.w3.org/2000/svg"
                 width="17px" height="17px" viewBox="0 0 225.000000 225.000000"
                 preserveAspectRatio="xMidYMid meet">
                  <metadata>
                  Created by potrace 1.15, written by Peter Selinger 2001-2017
                  </metadata>
                  <g transform="translate(0.000000,225.000000) scale(0.100000,-0.100000)"
                  fill={`rgb(${pCols[4].r},${pCols[4].g},${pCols[4].b})`} stroke="none">
                  <path d="M1078 2171 c-15 -12 -85 -141 -177 -325 -121 -245 -156 -307 -174
                  -310 -31 -7 -262 -42 -471 -71 -223 -32 -245 -42 -246 -115 0 -33 16 -51 250
                  -282 144 -142 250 -254 250 -265 0 -10 -14 -97 -30 -193 -78 -451 -82 -481
                  -62 -514 15 -25 25 -32 58 -34 35 -3 71 13 265 113 123 65 247 129 274 144 28
                  15 65 33 82 40 37 15 10 27 431 -193 236 -123 274 -131 308 -64 14 27 11 53
                  -43 374 l-58 345 253 247 c241 235 253 249 252 284 0 65 -29 81 -181 103 -176
                  25 -511 75 -536 80 -17 4 -54 69 -174 311 -91 182 -163 313 -177 325 -31 24
                  -63 24 -94 0z m170 -513 c62 -127 125 -243 140 -257 25 -25 44 -29 292 -65
                  146 -22 268 -42 272 -45 4 -4 -82 -96 -192 -206 -185 -184 -200 -202 -200
                  -235 0 -19 19 -146 41 -283 23 -136 39 -250 36 -253 -3 -4 -100 43 -214 102
                  -233 123 -277 144 -298 144 -21 0 -65 -21 -298 -144 -114 -59 -211 -106 -214
                  -102 -4 4 1 53 11 109 33 189 66 402 66 432 0 27 -28 58 -200 230 -110 110
                  -196 202 -192 206 4 3 126 23 272 45 247 36 267 40 292 65 14 14 77 130 140
                  257 62 127 118 231 123 231 6 0 61 -104 123 -231z"/>
                  </g>
                </svg>
                <p style={{"color": `rgb(${nCols[5].r},${nCols[5].g},${nCols[5].b})`, "fontWeight":"600", "fontSize":"11px", "margin": "0", "display":"inline-block","marginLeft":"5px","cursor":"pointer"}}>Starred</p>
              </div>
            </div>
          </div>

          <div style={channelsStyle}>
            <div style={{"width":"100%","height":"100%","display":"inline-grid", "gridTemplateRows":"1fr 1fr 1fr 1fr 1fr 1fr 1fr 22%"}}>
              <div style={{"display":"inline-grid"}}>
                <p style={{"color": `rgb(${nCols[5].r},${nCols[5].g},${nCols[5].b})`, "fontWeight":"800", "fontSize":"9px", "margin": "0", "display":"inline-block","marginLeft":"15px", "letterSpacing": "1px","alignSelf":"center"}}>CHANNELS</p>
              </div>
              <div style={{"backgroundColor":`rgb(${pCols[1].r},${pCols[1].g},${pCols[1].b})`, "display":"inline-grid"}}>
                <p style={{"color": `rgb(${nCols[5].r},${nCols[5].g},${nCols[5].b})`, "fontWeight":"600", "fontSize":"12px", "margin": "0", "display":"inline-block","marginLeft":"15px","cursor":"pointer","alignSelf":"center"}}>Design</p>
              </div>
              <div style={{"display":"inline-grid"}}>
                <p style={{"color": `rgb(${nCols[5].r},${nCols[5].g},${nCols[5].b})`, "fontWeight":"600", "fontSize":"12px", "margin": "0", "display":"inline-block","marginLeft":"15px","cursor":"pointer","alignSelf":"center"}}>Engineering</p>
              </div>
              <div style={{"display":"inline-grid"}}>
                <p style={{"color": `rgb(${nCols[5].r},${nCols[5].g},${nCols[5].b})`, "fontWeight":"600", "fontSize":"12px", "margin": "0", "display":"inline-block","marginLeft":"15px","cursor":"pointer","alignSelf":"center"}}>Marketing</p>
              </div>
              <div style={{"display":"inline-grid"}}>
                <p style={{"color": `rgb(${nCols[5].r},${nCols[5].g},${nCols[5].b})`, "fontWeight":"600", "fontSize":"12px", "margin": "0", "display":"inline-block","marginLeft":"15px","cursor":"pointer","alignSelf":"center"}}>Support</p>
              </div>
              <div style={{"display":"inline-grid"}}>
                <p style={{"color": `rgb(${nCols[5].r},${nCols[5].g},${nCols[5].b})`, "fontWeight":"600", "fontSize":"12px", "margin": "0", "display":"inline-block","marginLeft":"15px","cursor":"pointer","alignSelf":"center"}}>Sales</p>
              </div>
              <div style={{"display":"inline-grid", "gridTemplateColumns":"17% 83%", "alignItems":"center","cursor":"pointer"}}>
                <svg style={{"marginLeft":"12px"}}version="1.0" xmlns="http://www.w3.org/2000/svg"
                 width="15px" height="15px" viewBox="0 0 512.000000 512.000000"
                 preserveAspectRatio="xMidYMid meet">
                  <metadata>
                  Created by potrace 1.15, written by Peter Selinger 2001-2017
                  </metadata>
                  <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                  fill={`rgb(${pCols[4].r},${pCols[4].g},${pCols[4].b})`} stroke="none">
                  <path d="M2239 4027 c-38 -29 -39 -42 -39 -581 l0 -526 -531 0 c-327 0 -537
                  -4 -549 -10 -35 -19 -40 -64 -40 -350 0 -286 5 -331 40 -350 12 -6 222 -10
                  549 -10 l531 0 0 -526 c0 -539 1 -552 39 -581 12 -9 98 -12 327 -13 292 0 313
                  1 335 19 l24 19 3 541 3 541 528 0 c291 0 537 3 546 6 41 16 45 50 45 354 0
                  304 -4 338 -45 354 -9 3 -255 6 -546 6 l-528 0 -3 541 -3 541 -24 19 c-22 18
                  -43 19 -335 19 -229 -1 -315 -4 -327 -13z"/>
                  </g>
                </svg>
                <p style={{"color": `rgb(${nCols[5].r},${nCols[5].g},${nCols[5].b})`, "fontWeight":"600", "fontSize":"12px", "margin": "0", "display":"inline-block","marginLeft":"5px","cursor":"pointer","alignSelf":"center"}}>New Channel</p>
              </div>
              <div style={{"width":"100%"}}>
                <div style={{"marginTop":"11px","width":"100%","display":"inline-grid", "gridTemplateColumns":"17% 83%", "alignItems":"center","cursor":"pointer"}}>
                  <svg style={{"justifySelf":"end","marginRight":"2px"}} version="1.0" xmlns="http://www.w3.org/2000/svg"
                   width="16px" height="16px" viewBox="0 0 248.000000 203.000000"
                   preserveAspectRatio="xMidYMid meet">
                  <metadata>
                  Created by potrace 1.15, written by Peter Selinger 2001-2017
                  </metadata>
                  <g transform="translate(0.000000,203.000000) scale(0.100000,-0.100000)"
                  fill={`rgb(${pCols[4].r},${pCols[4].g},${pCols[4].b})`} stroke="none">
                  <path d="M63 2015 c-53 -23 -63 -56 -63 -210 0 -195 21 -225 160 -225 l70 0 0
                  -755 0 -755 29 -32 29 -33 952 0 952 0 29 33 29 32 0 755 0 755 70 0 c138 0
                  160 30 160 220 0 155 -11 193 -64 215 -51 22 -2304 22 -2353 0z m2307 -210 l0
                  -115 -1130 0 -1130 0 0 115 0 115 1130 0 1130 0 0 -115z m-230 -960 l0 -735
                  -900 0 -900 0 0 735 0 735 900 0 900 0 0 -735z"/>
                  <path d="M828 1321 c-33 -29 -33 -31 -36 -130 l-4 -101 35 -35 35 -35 381 0
                  381 0 32 29 33 29 0 107 0 107 -33 29 -32 29 -380 0 -380 0 -32 -29z m752
                  -136 l0 -55 -340 0 -340 0 0 55 0 55 340 0 340 0 0 -55z"/>
                  </g>
                  </svg>
                  <p style={{"color": `rgb(${nCols[5].r},${nCols[5].g},${nCols[5].b})`, "fontWeight":"700", "fontSize":"12px", "margin": "0", "display":"inline-block","marginLeft":"5px","cursor":"pointer","alignSelf":"center"}}>Archived Channels</p>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div style={channelNameStyle}>
          <p style={{"fontWeight":"800", "fontSize":"17px", "margin": "0", "marginLeft":"17px"}}>Design</p>
          <div style={{"display":"inline-grid","alignItems":"center", "gridTemplateRows":"1fr","gridTemplateColumns":"1fr 1fr 1fr"}}>
            <svg style={{"justifySelf":"end","marginRight":"5px"}}version="1.0" xmlns="http://www.w3.org/2000/svg"
             width="25px" height="25px" viewBox="0 0 512.000000 512.000000"
             preserveAspectRatio="xMidYMid meet">
            <metadata>
            Created by potrace 1.15, written by Peter Selinger 2001-2017
            </metadata>
            <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
            fill={`rgb(${nCols[3].r},${nCols[3].g},${nCols[3].b})`} stroke="none">
            <path d="M2077 4144 c-562 -102 -1003 -546 -1101 -1109 -21 -118 -21 -352 0
            -470 74 -421 341 -784 721 -978 204 -104 388 -147 629 -147 268 0 487 62 728
            207 l58 36 462 -461 c317 -317 473 -466 498 -477 84 -34 192 -11 255 56 61 65
            81 166 48 247 -11 25 -160 181 -477 498 l-461 462 36 58 c145 241 207 460 207
            728 0 241 -43 425 -147 629 -194 380 -557 647 -978 721 -112 20 -369 19 -478
            0z m508 -344 c382 -104 669 -412 749 -802 21 -101 21 -295 0 -396 -86 -417
            -399 -730 -816 -816 -101 -21 -295 -21 -396 0 -322 66 -583 267 -727 559 -84
            169 -100 244 -100 455 0 211 16 286 100 455 143 289 408 494 725 561 102 21
            363 12 465 -16z"/>
            </g>
            </svg>
            <svg style={{"justifySelf":"end", "marginRight":"10px"}} version="1.0" xmlns="http://www.w3.org/2000/svg"
             width="17px" height="17px" viewBox="0 0 225.000000 225.000000"
             preserveAspectRatio="xMidYMid meet">
            <metadata>
            Created by potrace 1.15, written by Peter Selinger 2001-2017
            </metadata>
            <g transform="translate(0.000000,225.000000) scale(0.100000,-0.100000)"
            fill={`rgb(${nCols[3].r},${nCols[3].g},${nCols[3].b})`} stroke="none">
            <path d="M795 1961 c-57 -36 -783 -774 -790 -804 -17 -69 -15 -72 399 -486
            l394 -394 56 -5 c54 -4 57 -3 96 36 22 22 40 50 41 63 2 45 -3 73 -17 93 -7
            11 -127 134 -265 273 l-252 253 829 0 c515 0 842 4 865 10 19 5 48 24 65 41
            24 25 29 39 29 79 0 57 -24 96 -76 122 -32 17 -94 18 -874 18 l-840 0 268 268
            267 268 0 51 c0 36 -6 58 -21 77 -44 56 -119 72 -174 37z"/>
            </g>
            </svg>

            <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
             width="17px" height="17px" viewBox="0 0 225.000000 225.000000"
             preserveAspectRatio="xMidYMid meet">
            <metadata>
            Created by potrace 1.15, written by Peter Selinger 2001-2017
            </metadata>
            <g transform="translate(0.000000,225.000000) scale(0.100000,-0.100000)"
            fill={`rgb(${nCols[3].r},${nCols[3].g},${nCols[3].b})`} stroke="none">
            <path d="M1324 1961 c-47 -29 -64 -59 -64 -115 l0 -50 267 -268 268 -268 -840
            0 c-780 0 -842 -1 -874 -18 -52 -26 -76 -65 -76 -122 0 -40 5 -54 29 -79 17
            -17 46 -36 65 -41 23 -6 350 -10 865 -10 l829 0 -252 -253 c-138 -139 -258
            -262 -265 -273 -14 -20 -19 -48 -17 -93 1 -13 19 -41 41 -63 39 -39 42 -40 96
            -36 l56 5 394 394 c414 414 416 417 399 486 -7 31 -750 784 -797 809 -37 19
            -87 18 -124 -5z"/>
            </g>
            </svg>
          </div>
        </div>
        <div style={messagesStyle} ref="messages">
          <div style={{"display":"inline-grid","width":"100%","backgroundColor":"white"}}>
            <div style={messageContainerStyle}>
              <span style={userPhotoStyle}></span>
              <div style={{"gridArea":"userName"}}>
                <p style={{"color": `rgb(${nCols[0].r},${nCols[0].g},${nCols[0].b})`, "fontWeight":"800", "fontSize":"13px", "margin": "0", "display":"inline-block"}}>Tiffany Myers </p>
                <span style={timeStampStyle}>12:53 PM</span>
              </div>
              <p style={{"width":"100%","color": `rgb(${nCols[0].r},${nCols[0].g},${nCols[0].b})`, "fontWeight":"600", "fontSize":"11px", "margin": "0", "gridArea":"messages"}}><span style={{"color":"#2E8BC5","fontWeight":"700"}}>@channel</span> great job today people! can't wait to get feedback from users.</p>
            </div>
          </div>

          <div style={{"display":"inline-grid","width":"100%","backgroundColor":"white"}}>
            <div style={messageContainerStyle}>
              <span style={userPhotoStyle}></span>
              <div style={{"gridArea":"userName"}}>
                <p style={{"color": `rgb(${nCols[0].r},${nCols[0].g},${nCols[0].b})`, "fontWeight":"800", "fontSize":"13px", "margin": "0", "display":"inline-block"}}>Tiffany Myers </p>
                <span style={timeStampStyle}>12:53 PM</span>
              </div>
              <p style={{"width":"100%","color": `rgb(${nCols[0].r},${nCols[0].g},${nCols[0].b})`, "fontWeight":"600", "fontSize":"11px", "margin": "0", "gridArea":"messages"}}><span style={{"color":"#2E8BC5","fontWeight":"700"}}>@channel</span> great job today people! can't wait to get feedback from users.</p>
            </div>
          </div>

          <div style={{"display":"inline-grid","width":"100%","backgroundColor":"white"}}>
            <div style={messageContainerStyle}>
              <span style={userPhotoStyle}></span>
              <div style={{"gridArea":"userName"}}>
                <p style={{"color": `rgb(${nCols[0].r},${nCols[0].g},${nCols[0].b})`, "fontWeight":"800", "fontSize":"13px", "margin": "0", "display":"inline-block"}}>Tiffany Myers </p>
                <span style={timeStampStyle}>12:53 PM</span>
              </div>
              <p style={{"width":"100%","color": `rgb(${nCols[0].r},${nCols[0].g},${nCols[0].b})`, "fontWeight":"600", "fontSize":"11px", "margin": "0", "gridArea":"messages"}}><span style={{"color":"#2E8BC5","fontWeight":"700"}}>@sarahporter</span> thanks so much for today. the photos look great. are they the finalized versions?</p>
            </div>
          </div>

          <div style={{"display":"inline-grid","width":"100%","backgroundColor":"white"}}>
            <div style={messageContainerStyle}>
              <span style={userPhotoStyle}></span>
              <div style={{"gridArea":"userName"}}>
                <p style={{"color": `rgb(${nCols[0].r},${nCols[0].g},${nCols[0].b})`, "fontWeight":"800", "fontSize":"13px", "margin": "0", "display":"inline-block"}}>Sarah Porter </p>
                <span style={timeStampStyle}>12:48 PM</span>
              </div>
              <p style={{"width":"100%","color": `rgb(${nCols[0].r},${nCols[0].g},${nCols[0].b})`, "fontWeight":"600", "fontSize":"11px", "margin": "0", "gridArea":"messages"}}>No problem! They are a bit messy at the moment. I'm just going to tidy them up a bit. I'll upload them shortly.</p>
            </div>
          </div>

          <div style={{"display":"inline-grid","width":"100%","backgroundColor":"white"}}>
            <div style={messageContainerStyle}>
              <span style={userPhotoStyle}></span>
              <div style={{"gridArea":"userName"}}>
                <p style={{"color": `rgb(${nCols[0].r},${nCols[0].g},${nCols[0].b})`, "fontWeight":"800", "fontSize":"13px", "margin": "0", "display":"inline-block"}}>Samantha Ramos </p>
                <span style={timeStampStyle}>12:52 PM</span>
              </div>
              <p style={{"width":"100%","color": `rgb(${nCols[0].r},${nCols[0].g},${nCols[0].b})`, "fontWeight":"600", "fontSize":"11px", "margin": "0", "gridArea":"messages"}}>Did anyone take a photo of the drawings we made on the whiteboard? I'd like made a high fidelity version of that concept.</p>
            </div>
          </div>

          <div style={{"display":"inline-grid","width":"100%","backgroundColor":"white"}}>
            <div style={messageContainerStyle}>
              <span style={userPhotoStyle}></span>
              <div style={{"gridArea":"userName"}}>
                <p style={{"color": `rgb(${nCols[0].r},${nCols[0].g},${nCols[0].b})`, "fontWeight":"800", "fontSize":"13px", "margin": "0", "display":"inline-block"}}>Tiffany Myers </p>
                <span style={timeStampStyle}>12:53 PM</span>
              </div>
              <p style={{"width":"100%","color": `rgb(${nCols[0].r},${nCols[0].g},${nCols[0].b})`, "fontWeight":"600", "fontSize":"11px", "margin": "0", "gridArea":"messages"}}><span style={{"color":"#2E8BC5","fontWeight":"700"}}>@samantharamos</span> yep! I put a few photos in the shared folder. Let me know if you have any questions :)</p>
            </div>
          </div>

        </div>
        <div style={chatInputContainerStyle}>
          <div style={chatInputStyle}>
            <p style={{"color":`rgb(${nCols[2].r},${nCols[2].g},${nCols[2].b})`,"fontSize":"13px","fontWeight":"600","margin":"0","marginLeft":"10px"}}>Type your message</p>
            <div style={{"display":"inline-grid","gridTemplateColumns":"1fr 1fr", "alignItems":"center"}}>
              <svg style={{"justifySelf":"end"}}version="1.0" xmlns="http://www.w3.org/2000/svg"
               width="17px" height="17px" viewBox="0 0 512.000000 512.000000"
               preserveAspectRatio="xMidYMid meet">
                <metadata>
                Created by potrace 1.15, written by Peter Selinger 2001-2017
                </metadata>
                <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                fill={`rgb(${nCols[2].r},${nCols[2].g},${nCols[2].b})`} stroke="none">
                <path d="M2331 5040 c-309 -30 -650 -130 -911 -267 -118 -62 -265 -156 -385
                -246 -104 -78 -354 -329 -433 -434 -271 -359 -432 -739 -498 -1178 -25 -167
                -25 -513 0 -680 23 -150 83 -391 131 -521 81 -218 234 -491 382 -677 80 -101
                252 -277 356 -363 199 -167 489 -334 732 -422 139 -50 355 -105 510 -128 168
                -25 514 -25 680 0 439 66 819 227 1178 498 106 79 356 329 435 435 156 207
                288 443 367 657 48 130 108 371 131 521 25 167 25 513 0 680 -24 155 -78 371
                -128 510 -88 244 -262 544 -427 738 -86 102 -262 274 -358 350 -186 148 -459
                301 -677 382 -131 48 -372 109 -516 130 -137 19 -437 27 -569 15z m447 -311
                c503 -54 952 -269 1307 -624 411 -410 635 -951 635 -1530 0 -757 -393 -1456
                -1040 -1851 -687 -419 -1563 -419 -2250 0 -297 181 -558 445 -733 738 -323
                543 -395 1196 -198 1796 210 639 734 1163 1373 1373 127 42 313 83 443 97 114
                13 349 14 463 1z"/>
                <path d="M1545 3027 c-90 -30 -153 -83 -196 -167 -20 -37 -24 -60 -24 -130 0
                -73 4 -92 27 -135 59 -111 155 -170 278 -170 123 1 216 59 270 169 98 198 -33
                425 -253 441 -37 3 -78 0 -102 -8z"/>
                <path d="M3415 3031 c-94 -24 -164 -81 -205 -165 -79 -159 -14 -339 150 -418
                64 -32 176 -31 245 0 63 29 119 83 153 147 23 43 27 62 27 135 0 73 -4 92 -27
                135 -34 64 -90 118 -152 146 -53 23 -143 33 -191 20z"/>
                <path d="M1775 1950 c-4 -6 -1 -36 6 -68 51 -247 307 -462 629 -528 364 -73
                824 189 895 512 9 40 14 78 10 84 -9 14 -1531 14 -1540 0z"/>
                </g>
              </svg>
              <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
               width="28px" height="28px" viewBox="0 0 460.000000 276.000000"
               preserveAspectRatio="xMidYMid meet">
              <metadata>
              Created by potrace 1.15, written by Peter Selinger 2001-2017
              </metadata>
              <g transform="translate(0.000000,276.000000) scale(0.100000,-0.100000)"
              fill={`rgb(${nCols[2].r},${nCols[2].g},${nCols[2].b})`} stroke="none">
              <path d="M2135 2700 c-278 -42 -489 -130 -690 -286 -291 -226 -478 -555 -515
              -908 -46 -435 74 -790 365 -1081 208 -208 437 -317 769 -366 346 -51 732 0
              1046 137 128 56 347 184 365 215 4 6 -87 144 -110 168 -2 2 -21 -10 -42 -26
              -101 -79 -301 -182 -453 -233 -172 -57 -282 -74 -495 -74 -259 0 -427 33 -611
              119 -124 58 -204 114 -300 209 -131 131 -216 278 -266 456 -21 77 -23 106 -23
              295 0 184 3 221 23 301 101 412 371 701 767 823 170 52 267 65 490 64 226 0
              322 -15 484 -76 402 -151 594 -499 526 -949 -17 -117 -44 -202 -86 -277 -100
              -177 -231 -278 -373 -288 -124 -8 -180 40 -178 151 1 83 -7 55 237 861 40 131
              49 120 -92 123 -109 2 -123 1 -131 -15 -5 -10 -24 -71 -42 -137 l-34 -119 -19
              58 c-34 106 -98 178 -207 232 -52 27 -62 28 -190 28 -126 -1 -139 -3 -195 -29
              -173 -80 -324 -233 -419 -422 -119 -240 -124 -565 -11 -744 66 -104 156 -176
              259 -205 72 -21 236 -16 304 9 127 47 226 125 290 229 l37 61 7 -61 c11 -103
              69 -186 158 -226 71 -32 238 -36 330 -8 293 89 537 397 591 745 18 115 6 395
              -21 486 -53 179 -138 318 -275 448 -184 175 -411 274 -725 316 -151 21 -391
              19 -545 -4z m398 -802 c48 -27 113 -108 127 -158 24 -86 8 -246 -41 -393 -98
              -292 -222 -435 -394 -453 -84 -9 -138 8 -195 62 -72 68 -95 137 -94 284 0 88
              6 133 23 194 73 252 225 445 386 487 49 13 144 1 188 -23z"/>
              </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default ChatRoom;
