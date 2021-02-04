import React from "react";
import useReactRouter from "use-react-router";

import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import HomeIcon from "@material-ui/icons/Home";
import FavoriteIcon from "@material-ui/icons/Favorite";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";

const NavigationBar = (props) => {
  const { currentValue } = props;
  const { history } = useReactRouter();

  return (
    <BottomNavigation
      value={currentValue}
      onChange={(event, newValue) => {
        history.push(`/${newValue}`);
      }}
      showLabels
    >
      <BottomNavigationAction value="home" label="Home" icon={<HomeIcon />} />
      <BottomNavigationAction
        value="favorite"
        label="Favorite"
        icon={<FavoriteIcon />}
      />
      <BottomNavigationAction
        value="about"
        label="About"
        icon={<AssignmentIndIcon />}
      />
    </BottomNavigation>
  );
};

export default NavigationBar;
