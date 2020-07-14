import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

function Navbar() {

  const [activeItem, setActiveItem] = useState('inicio')

  const handleItemClick = (e, { name }) => {
    setActiveItem(name)
  }

  return (
    <Menu pointing secondary>
      <Menu.Item
        as={Link} to="/"
        name='inicio'
        active={activeItem === 'inicio'}
        onClick={handleItemClick}
      />
      <Menu.Item
        as={Link} to="/buscar"
        name='buscar en la ontologia'
        active={activeItem === 'buscar en la ontologia'}
        onClick={handleItemClick}
      />
      <Menu.Item
        as={Link} to="/popular"
        name='popular ontologia'
        active={activeItem === 'popular ontologia'}
        onClick={handleItemClick}
      />
    </Menu>
  );
}

export default Navbar;
