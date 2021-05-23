import MenuItem from '@material-ui/core/MenuItem';
import ExitIcon from '@material-ui/icons/PowerSettingsNew';
import * as React from 'react';
import { forwardRef } from 'react';
import { useLogout } from 'react-admin';

const MyLogoutButton = forwardRef((props, ref) => {
  const logout = useLogout();
  const handleClick = () => logout();
  return (
    <MenuItem
      onClick={handleClick}
      ref={ref}
    >
      
      <ExitIcon /> Logout bro
    </MenuItem>
  );
});

export default MyLogoutButton;
