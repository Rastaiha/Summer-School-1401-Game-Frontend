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
  const BACKGROUND_IMAGE = '/egypt/egypt room - empty 2.png';
  const [image] = useImage(process.env.PUBLIC_URL + BACKGROUND_IMAGE);
  const scaleY = window.innerHeight / image?.height;
  const [objects, setObjects] = React.useState([
    {
      urlImage: process.env.PUBLIC_URL + '/egypt/cat.png',
      id: 0,
      x: 1078,
      y: 503,
      isHover: false,
      onClick: () => {
        setGroupProblemId(23);
        setOpenDialog(true);
      },
    },
    {
      urlImage: process.env.PUBLIC_URL + '/egypt/harp.png',
      id: 1,
      x: 490,
      y: 680,
      isHover: false,
      onClick: () => {
        setGroupProblemId(19);
        setOpenDialog(true);
      },
    },
    {
      urlImage: process.env.PUBLIC_URL + '/egypt/pharaoh.png',
      id: 2,
      x: 1325,
      y: 480,
      isHover: false,
      onClick: () => {
        setGroupProblemId(7);
        setOpenDialog(true);
      },
    },
    {
      urlImage: process.env.PUBLIC_URL + '/egypt/pyramids.png',
      id: 3,
      x: 805,
      y: 600,
      isHover: false,
      onClick: () => {
        setGroupProblemId(22);
        setOpenDialog(true);
      },
    },
    {
      urlImage: process.env.PUBLIC_URL + '/egypt/egypt frame 2.png',
      id: 4,
      x: 715,
      y: 225,
      isHover: false,
      disabled: true,
      onClick: () => { },
    },
    {
      urlImage: process.env.PUBLIC_URL + '/egypt/door.png',
      id: 5,
      x: 165,
      y: 750,
      isHover: false,
      disabled: true,
      onClick: () => { },
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
