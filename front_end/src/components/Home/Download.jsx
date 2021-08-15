import React from "react";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ShopIcon from "@material-ui/icons/Shop";
import Fab from "@material-ui/core/Fab";
function Download() {
  return (
    <div className="blog-download">
      <h1 className="download-main-heading">Know more about us</h1>
      <div className="blog">
        <h2 className="blog-heading">
          To know more about us and about our institute, download the app.
        </h2>
        <a href="https://play.google.com/store/apps/details?id=co.classplus.kacd">
          <Fab variant="extended" className="download-button">
            <img src="/images/blog.png" className="button-icon" />
            Blog
          </Fab>
        </a>
      </div>
      <div className="download">
        <h2 className="download-heading">
          To know more about us and about our institute, download the app.
        </h2>
        <a href="https://play.google.com/store/apps/details?id=co.classplus.kacd">
          <Fab variant="extended" color="inherit">
            <img src="/images/playstore.png" className="button-icon"></img>
            Play Store
          </Fab>
        </a>
      </div>
    </div>
  );
}
export default Download;
