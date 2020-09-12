import React from 'react';

import { FooterBase } from './styles';

function Footer() {
  return(
    <FooterBase>
      <a href="https://www.alura.com.br/">
        <img src="https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg" alt="Logo Alura" />
      </a>

      <p>
        Animadamente criado durante a
        {' '}
        <a href="https://www.linkedin.com/in/ricardo-parra-039aaa10a/">
          Imersão React da Alura por Ricardo Parra
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;