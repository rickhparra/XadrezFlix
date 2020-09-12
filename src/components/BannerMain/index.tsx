import React from 'react';

import VideoIframeResponsive from '../VideoIFrameResponsive';

import { Container, Content, Item, Title, Description, Category, WatchButton } from './styles';

function getYoutubeId(youtubeURL: string) {
  return youtubeURL
    .replace(
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,'$7',);
}

interface IBannerMainProps {
  videoTitle: string;
  url: string;
  videoDescription: string;
}

const BannerMain: React.FC<IBannerMainProps> = ({ videoTitle, url, videoDescription }) => {
  const youTubeID = getYoutubeId(url);
  const bgUrl = `https://img.youtube.com/vi/${youTubeID}/maxresdefault.jpg`;

  return(
    <Container backgroundImage={bgUrl}>
      <Content>
        <Item>
          <Title>
            {videoTitle}
          </Title>
          <Description>
            {videoDescription}
          </Description>
        </Item>

        <Item>
          <VideoIframeResponsive
            youtubeID={youTubeID}
          />
          <WatchButton>
            Assistir
          </WatchButton>
        </Item>
      </Content>
    </Container>
  );
}

export default BannerMain;