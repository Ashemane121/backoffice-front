import React from "react";
import { UserMenu, MenuItemLink } from "react-admin";
import SettingsIcon from "@material-ui/icons/Settings";
const MyID = localStorage.getItem('id');
const MyUserMenu = (props) => {
  return (
    <UserMenu {...props}>
      <MenuItemLink
        to={`/users/${MyID}`}
        primaryText="Modifier mon Profile"
        leftIcon={<SettingsIcon />}
      />
    </UserMenu>
  );
};

export default MyUserMenu;