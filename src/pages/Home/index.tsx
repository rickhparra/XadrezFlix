import React from 'react';

import PageDefault from '../../components/PageDefault';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';

function Home() {
  return(
    <PageDefault>
      <BannerMain 
        videoTitle='Teste de titulo'
        url='https://www.youtube.com/watch?v=Q9HvH123co0'
        videoDescription='Teste de descrição'
      />

      <Carousel />
    </PageDefault>
  );
}

export default Home;