import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/images/Logo.png';

import { Nav } from './styles';

function Menu() {
  return(
    <Nav>
      <Link to="/">
        <img className="logo" src={Logo} alt="DevFlix logo" />
      </Link>

      <Link className='buttonLink' to='/cadastro/video'>
        Novo Vídeo
      </Link>
    </Nav>
  );
}

export default Menu;