import React from 'react';

import Slider, { SliderItem } from './components/Slider';
import VideoCard from './components/VideoCard';

import { VideoCardGroupContainer, Title } from './styles';

interface ICarouselProps {
  ignoreFirstVideo?: boolean;
  category?: [];
}

const Carousel: React.FC<ICarouselProps> = ({ ignoreFirstVideo, category }) => {
  return(
    <VideoCardGroupContainer>
      <Title>
        Defesas
      </Title>

      <Slider>
        <SliderItem>
          <VideoCard
            videoTitle='teste'
            videoURL='https://www.youtube.com/watch?v=jmHVxvEnUEU'            
          />

          <VideoCard
            videoTitle='teste'
            videoURL='https://www.youtube.com/watch?v=jmHVxvEnUEU'            
          />          
        </SliderItem>
      </Slider>
    </VideoCardGroupContainer>
  );
}

export default Carousel;