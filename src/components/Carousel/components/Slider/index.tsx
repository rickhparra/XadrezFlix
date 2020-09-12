import React from 'react';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styled from 'styled-components';

import SlickSlider from 'react-slick';

import { Container } from './styles';

export const SliderItem = styled.li`
  margin-right: 16px;
  img {
    margin: 16px;
    width: 298px;
    height: 197px;
    object-fit: cover;
  }
`;

const Slider: React.FC = ({ children }) => {
  return(
    <Container>
      <SlickSlider {...{
        dots: false,
        infinite: false,
        speed: 300,
        centerMode: false,
        variableWidth: true,
        adaptiveHeight: true,
      }}
      >
        {children}
      </SlickSlider>
    </Container>
  );
}

export default Slider;