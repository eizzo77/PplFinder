import { useHistory } from "react-router-dom";
import React, { useEffect, useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Paths } from "../../constant";

const NavBar = () => {
  const [value, setValue] = useState(0);
  var history = useHistory();

  const handleChange = (_e, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    history.push(Paths[value].location);
    history.location.pathname != Paths[value].location && history.push("/");
  }, [value]);

  return (
    <AppBar position="static" color="transparent" style={{ position: "fixed", top: 0 }}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="Navigation"
        indicatorColor="primary"
        textColor="primary"
      >
        {Paths.map((path, index) => {
          return <Tab label={path.label} index={index} />;
        })}
      </Tabs>
    </AppBar>
  );
};

export default NavBar;
