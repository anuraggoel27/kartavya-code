import React from "react";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ShopIcon from "@material-ui/icons/Shop";
import Fab from "@material-ui/core/Fab";
function Download(){
    return (<div className="blog-download">
    <h1 className="download-main-heading">Know more about us</h1>
    <div className="blog">
      <h2 className="blog-heading">
        To know more about us and about our institute, download the app.
      </h2>
      <a href="https://play.google.com/store/apps/details?id=co.classplus.kacd">
        {/* <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEyLjA2OSA1MTIuMDY5IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIuMDY5IDUxMi4wNjk7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwYXRoIHN0eWxlPSJmaWxsOiNGRkMxMDc7IiBkPSJNNDQ4LjA2OSwxOTIuMDM3Yy0xMS4wOTMsMC0yMS4zMzMtMy41NjMtMjEuMzMzLTI5LjMzM3YtMjQNCglDNDI0LjA0Niw2MC45NCwzNTkuOTI1LTAuNTQxLDI4Mi4xMTcsMC4wMzdIMTMyLjc4NEM1OC41NjIsMC45My0wLjg4Miw2MS44MjMsMC4wMTEsMTM2LjA0NGMwLjAxMSwwLjg4NywwLjAzLDEuNzczLDAuMDU4LDIuNjU5DQoJVjM3My4zN2MtMi4zNjIsNzQuMTg5LDU1Ljg2NiwxMzYuMjQ3LDEzMC4wNTYsMTM4LjYwOGMwLjg4NiwwLjAyOCwxLjc3MywwLjA0OCwyLjY1OSwwLjA1OEgzNTUuNDQNCgljODkuMzAxLDAsMTU2LjYyOS02Mi40ODUsMTU2LjYyOS0xNDUuMzIzVjI1Ni4wMzdDNTEyLjA2OSwyMDguMTg2LDQ5NS45MiwxOTIuMDM3LDQ0OC4wNjksMTkyLjAzN3ogTTE2MC4wNjksMTI4LjAzN2gxMDYuNjY3DQoJYzE3LjY3MywwLDMyLDE0LjMyNywzMiwzMnMtMTQuMzI3LDMyLTMyLDMySDE2MC4wNjljLTE3LjY3MywwLTMyLTE0LjMyNy0zMi0zMlMxNDIuMzk2LDEyOC4wMzcsMTYwLjA2OSwxMjguMDM3eiBNMzUyLjA2OSwzODQuMDM3DQoJaC0xOTJjLTE3LjY3MywwLTMyLTE0LjMyNy0zMi0zMnMxNC4zMjctMzIsMzItMzJoMTkyYzE3LjY3MywwLDMyLDE0LjMyNywzMiwzMlMzNjkuNzQyLDM4NC4wMzcsMzUyLjA2OSwzODQuMDM3eiIvPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo=" /> */}
        <Fab variant="extended" className="download-button">
          <img src="/images/blog.png" className="button-icon" />
          Blog
        </Fab>
        {/* <Button size="large" className="download-button" variant="outlined">
          download
        </Button> */}
      </a>
    </div>
    <div className="download">
    
      <h2 className="download-heading">
        To know more about us and about our institute, download the app.
      </h2>
      <a href="https://play.google.com/store/apps/details?id=co.classplus.kacd">
        <Fab variant="extended" color="inherit" >
          <img src="/images/playstore.png" className="button-icon"></img>
          Play Store
        </Fab>
        {/* <Button
        size="large"
        className="download-button"
        variant="outlined"
        color="default"
      >
        download
      </Button> */}
      </a>
    </div>
  </div>);
}
export default Download