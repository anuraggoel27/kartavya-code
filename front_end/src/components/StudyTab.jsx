import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import storage from "../firebase";
import { useAuth0 } from "@auth0/auth0-react";
import { Redirect } from "react-router";
import { useHistory } from "react-router-dom";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={4}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function SimpleTabs() {
  const [exec, setExec] = useState(false);
  const [class12Data, setClass12Data] = useState([]);
  const [class11Data, setClass11Data] = useState([]);
  const [class10Data, setClass10Data] = useState([]);
  const [class9Data, setClass9Data] = useState([]);
  const [class12Name, setClass12Name] = useState([]);
  const [class11Name, setClass11Name] = useState([]);
  const [class10Name, setClass10Name] = useState([]);
  const [class9Name, setClass9Name] = useState([]);
  const { isAuthenticated } = useAuth0();
  const history = useHistory();
  useEffect(() => {
    if (!exec) {
      listClass12Item();
      listClass11Item();
      listClass10Item();
      listClass9Item();
      setExec(true);
    }
  });
  const listClass12Item = () => {
    storage
      .ref()
      .child("Class-12/")
      .listAll()
      .then((res) => {
        res.items.forEach((item) => {
          setClass12Name((arr) => [...arr, item.name]);
          item.getDownloadURL().then((url) => {
            setClass12Data((arr) => [...arr, url]);
          });
        });
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  const listClass11Item = () => {
    storage
      .ref()
      .child("Class-11/")
      .listAll()
      .then((res) => {
        res.items.forEach((item) => {
          setClass11Name((arr) => [...arr, item.name]);
          item.getDownloadURL().then((url) => {
            setClass11Data((arr) => [...arr, url]);
          });
        });
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  const listClass10Item = () => {
    storage
      .ref()
      .child("Class-10/")
      .listAll()
      .then((res) => {
        res.items.forEach((item) => {
          setClass10Name((arr) => [...arr, item.name]);
          item.getDownloadURL().then((url) => {
            setClass10Data((arr) => [...arr, url]);
          });
        });
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  const listClass9Item = () => {
    storage
      .ref()
      .child("Class-9/")
      .listAll()
      .then((res) => {
        res.items.forEach((item) => {
          setClass9Name((arr) => [...arr, item.name]);
          item.getDownloadURL().then((url) => {
            setClass9Data((arr) => [...arr, url]);
          });
        });
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="tabs">
      <div className={classes.root}>
        <AppBar position="static">
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
          >
            <Tab label="Class 12" {...a11yProps(0)} />
            <Tab label="Class 11" {...a11yProps(1)} />
            <Tab label="Class 10" {...a11yProps(2)} />
            <Tab label="Class 9" {...a11yProps(3)} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          <div className="study-material-tab">
            <div className="name-study-material-1">
              {class12Name.map((val, index) => (
                <h6 className="names" key={index}>{val.split(".")[0]}</h6>
              ))}
            </div>
            <div className="link-study-material">
              {class12Data.map((val, index) => (
                <div key={index} className="study-link">
                  <a className="links-download" href={val} target="_blank">
                    Download
                  </a>
                </div>
              ))}
            </div>
            <div className="delete-study-material">
              {isAuthenticated &&
                class12Name.map((val, index) => (
                  <div key={index} className="link-delete-button">
                    <button
                      className="delete-button btn-primary"
                      onClick={() => {
                        var desertRef = storage.ref("Class-12").child(val);
                        desertRef
                          .delete()
                          .then(function () {
                            alert(
                              "The file has been deleted. Please refresh to see the changes."
                            );
                          })
                          .catch(function (error) {});
                      }}
                    >
                      Delete
                    </button>
                  </div>
                ))}
            </div>
          </div>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <div className="study-material-tab">
            <div className="name-study-material-2">
              {class11Name.map((val, index) => (
                <h6 className="names" key={index}>{val.split(".")[0]}</h6>
              ))}
            </div>
            <div className="link-study-material">
              {class11Data.map((val, index) => (
                <div key={index} className="study-link">
                  <a href={val} target="_blank">
                    Download
                  </a>
                </div>
              ))}
            </div>
            <div className="delete-study-material">
              {isAuthenticated &&
                class11Name.map((val, index) => (
                  <div key={index} className="link-delete-button">
                    <button
                      className="delete-button btn-primary"
                      onClick={() => {
                        var desertRef = storage.ref("Class-11").child(val);
                        desertRef
                          .delete()
                          .then(function () {
                            alert(
                              "The file has been deleted. Please refresh to see the changes."
                            );
                          })
                          .catch(function (error) {});
                      }}
                    >
                      Delete
                    </button>
                  </div>
                ))}
            </div>
          </div>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <div className="study-material-tab">
            <div className="name-study-material-1">
              {class10Name.map((val, index) => (
                <h6 className="names" key={index}>{val.split(".")[0]}</h6>
              ))}
            </div>
            <div className="link-study-material">
              {class10Data.map((val, index) => (
                <div key={index} className="study-link">
                  <a href={val} target="_blank">
                    Download
                  </a>
                </div>
              ))}
            </div>
            <div className="delete-study-material">
              {isAuthenticated &&
                class10Name.map((val, index) => (
                  <div key={index} className="link-delete-button">
                    <button
                      className="delete-button btn-primary"
                      onClick={() => {
                        var desertRef = storage.ref("Class-10").child(val);
                        desertRef
                          .delete()
                          .then(function () {
                            alert(
                              "The file has been deleted. Please refresh to see the changes."
                            );
                          })
                          .catch(function (error) {});
                      }}
                    >
                      Delete
                    </button>
                  </div>
                ))}
            </div>
          </div>
        </TabPanel>
        <TabPanel value={value} index={3}>
          <div className="study-material-tab">
            <div className="name-study-material-2">
              {class9Name.map((val, index) => (
                <h6 className="names" key={index}>{val.split(".")[0]}</h6>
              ))}
            </div>
            <div className="link-study-material">
              {class9Data.map((val, index) => (
                <div key={index} className="study-link">
                  <a href={val} target="_blank">
                    Download
                  </a>
                </div>
              ))}
            </div>
            <div className="delete-study-material">
              {isAuthenticated &&
                class9Name.map((val, index) => (
                  <div key={index} className="link-delete-button">
                    <button
                      className="delete-button btn-primary"
                      onClick={() => {
                        var desertRef = storage.ref("Class-9").child(val);
                        desertRef
                          .delete()
                          .then(function () {
                            alert(
                              "The file has been deleted. Please refresh to see the changes."
                            );
                          })
                          .catch(function (error) {});
                      }}
                    >
                      Delete
                    </button>
                  </div>
                ))}
            </div>
          </div>
        </TabPanel>
      </div>
    </div>
  );
}
