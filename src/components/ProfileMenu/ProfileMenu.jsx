import React from 'react';
import { Avatar, Menu } from '@mantine/core';
import { useNavigate } from 'react-router-dom';

const ProfileMenu = ({ user, logout }) => {
  const navigate = useNavigate();

  console.log('ProfileMenu rendered'); // Check if component renders

  return (
    <Menu>
      <Menu.Target>
        <Avatar
          src={user?.picture}
          alt="user image"
          radius="s"
          onClick={() => console.log('Avatar clicked')} // Check if click event fires
        />
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Item onClick={() => console.log('Favourites clicked')}>Favourites</Menu.Item>
        {/* Uncomment these for additional menu items */}
        {/* <Menu.Item onClick={() => navigate('./bookings', { replace: true })}>
          Bookings
        </Menu.Item>
        <Menu.Item
          onClick={() => {
            localStorage.clear();
            logout();
          }}
        >
          Logout
        </Menu.Item> */}
      </Menu.Dropdown>
    </Menu>
  );
};

export default ProfileMenu;
