import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Segment, Icon} from 'semantic-ui-react';

function Navbar() {

  const [activeItem, setActiveItem] = useState('inicio')

  const handleItemClick = (e, { name }) => {
    setActiveItem(name)
  }

  return (
    <div>
      <Segment inverted> 
        <Menu inverted pointing secondary>                                    
          <Menu.Item>
            <Icon name='home'/>
          </Menu.Item>
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
          <Menu.Menu position='right'>            
            <Menu.Item>
              U M S S            
            </Menu.Item>
            <Menu.Item>            
              <Icon name='university'/>            
            </Menu.Item>
          </Menu.Menu>              
        </Menu>
      </Segment>  
    </div>  
  );
}

export default Navbar;
