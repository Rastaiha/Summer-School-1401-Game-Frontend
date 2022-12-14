import { Grid } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import React from 'react';
import { Image, Layer, Stage, Star, Text } from 'react-konva';
import { useNavigate } from 'react-router-dom';
import useImage from 'use-image';

import URLImage from '../../components/Konva/URLImage';
import Layout from '../../components/organism/Layout';
import ItemImage from '../../components/molecules/konva/Item';
import GetProblem from '../../components/Dialog/GetProblem'

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
  const BACKGROUND_IMAGE = '/iran/empty-room.png';
  const [image] = useImage(process.env.PUBLIC_URL + BACKGROUND_IMAGE);
  const scaleY = window.innerHeight / image?.height;
  const [objects, setObjects] = React.useState([
    {
      urlImage: process.env.PUBLIC_URL + '/iran/frame1.png',
      id: 300,
      x: 1010,
      y: 120,
      isHover: false,
      onClick: () => {
        setGroupProblemId(39);
        setOpenDialog(true);
      },
    },
    {
      urlImage: process.env.PUBLIC_URL + '/iran/frame2.png',
      id: 0,
      x: 1202,
      y: 220,
      isHover: false,
      onClick: () => {
        setGroupProblemId(40);
        setOpenDialog(true);
      },
    },
    {
      urlImage: process.env.PUBLIC_URL + '/iran/frame3.png',
      id: 100,
      x: 1395,
      y: 120,
      isHover: false,
      onClick: () => {
        setGroupProblemId(25);
        setOpenDialog(true);
      },
    },
    {
      urlImage: process.env.PUBLIC_URL + '/iran/cyrus cylinder.png',
      id: 1,
      x: 483,
      y: 567,
      isHover: false,
      onClick: () => {
        setGroupProblemId(9);
        setOpenDialog(true);
      },
    },
    {
      urlImage: process.env.PUBLIC_URL + '/iran/koozeye boz.png',
      id: 3,
      x: 1295,
      y: 525,
      isHover: false,
      onClick: () => {
        setGroupProblemId(20);
        setOpenDialog(true);
      },
    },
    {
      urlImage: process.env.PUBLIC_URL + '/iran/minakari.png',
      id: 4,
      x: 1025,
      y: 540,
      isHover: false,
      onClick: () => {
        setGroupProblemId(5);
        setOpenDialog(true);
      },
    },
    {
      urlImage: process.env.PUBLIC_URL + '/iran/pasargad.png',
      id: 5,
      x: 768,
      y: 480,
      isHover: false,
      onClick: () => {
        setGroupProblemId(24);
        setOpenDialog(true);
      },
    },
    {
      urlImage: process.env.PUBLIC_URL + '/iran/door.png',
      id: 6,
      x: 158,
      y: 745,
      isHover: false,
      disabled: true,
      onClick: () => { },
    },
    {
      urlImage: process.env.PUBLIC_URL + '/iran/iran frame.png',
      id: 7,
      x: 420,
      y: 225,
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
