import { Grid } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import React from 'react';
import { Image, Layer, Stage, Star, Text } from 'react-konva';
import { useNavigate } from 'react-router-dom';
import useImage from 'use-image';

import GetProblem from '../../components/Dialog/GetProblem'
import URLImage from '../../components/Konva/URLImage';
import Layout from '../../components/organism/Layout';
import ItemImage from '../../components/molecules/konva/Item';

const useStyles = makeStyles(() => ({
  fullHeight: {
    minHeight: '100vh',
  },
}));

const Index = () => {
  let navigate = useNavigate();
  const classes = useStyles();
  const [openDialog, setOpenDialog] = React.useState(false);
  const [groupProblemId, setGroupProblemId] = React.useState();
  const BACKGROUND_IMAGE = '/mainhall/EmptyHall-LowQ.jpg';
  const [image] = useImage(process.env.PUBLIC_URL + BACKGROUND_IMAGE);
  const scaleY = window.innerHeight / image?.height;
  const [objects, setObjects] = React.useState([
    {
      urlImage: process.env.PUBLIC_URL + '/mainhall/Egypt.png',
      id: 0,
      x: 4720,
      y: 1880,
      isHover: false,
      onClick: () => goForward('/egypt/'),
    },
    {
      urlImage: process.env.PUBLIC_URL + '/mainhall/Greece.png',
      id: 1,
      x: 1330,
      y: 1885,
      isHover: false,
      onClick: () => goForward('/greece/'),
    },
    {
      urlImage: process.env.PUBLIC_URL + '/mainhall/Iran.png',
      id: 3,
      x: 2120,
      y: 1790,
      isHover: false,
      onClick: () => goForward('/iran/'),
    },
    {
      urlImage: process.env.PUBLIC_URL + '/mainhall/Japan.png',
      id: 4,
      x: 3920,
      y: 1800,
      isHover: false,
      onClick: () => goForward('/japan/'),
    },
    {
      urlImage: process.env.PUBLIC_URL + '/mainhall/Mashahir.png',
      id: 5,
      x: 3000,
      y: 1685,
      isHover: false,
      onClick: () => goForward('/mashahir/'),
    },
    {
      urlImage: process.env.PUBLIC_URL + '/mainhall/Viking.png',
      id: 6,
      x: 5560,
      y: 1980,
      isHover: false,
      onClick: () => goForward('/viking/'),
    },
  ]);

  const goForward = (dst) => {
    navigate(dst);
  };

  const handleMouseEnter = (e) => {
    const id = e.target.id();
    setObjects(
      objects.map((star) => {
        return {
          ...star,
          isHover: star.id === id,
        };
      })
    );
  };

  const handleMouseExit = (e) => {
    setObjects(
      objects.map((star) => {
        return {
          ...star,
          isHover: false,
        };
      })
    );
  };

  return (
    <Layout backgroundImage={BACKGROUND_IMAGE}>
      <Stage
        width={Math.min(image?.width * scaleY, window.innerWidth)}
        height={window.innerHeight}>
        <Layer
          draggable
          dragBoundFunc={(pos) => {
            pos.y = 0;
            if (window.innerWidth < image?.width * scaleY) {
              if (pos.x > 0) pos.x = 0;
              if (pos.x < window.innerWidth - image?.width * scaleY)
                pos.x = window.innerWidth - image?.width * scaleY;
            } else {
              pos.x = 0;
            }
            return pos;
          }}>
          <URLImage
            scaleX={scaleY}
            scaleY={scaleY}
            src={process.env.PUBLIC_URL + BACKGROUND_IMAGE}
          />
          {objects.map((object) => (
            <ItemImage
              key={object.id}
              object={object}
              parentScale={scaleY}
              handleMouseEnter={handleMouseEnter}
              handleMouseExit={handleMouseExit}
            />
          ))}
        </Layer>
      </Stage>
      <GetProblem
        open={openDialog}
        handleClose={() => setOpenDialog(!openDialog)}
        problemGroupId={groupProblemId}
      />
    </Layout>
  );
};

export default Index;
