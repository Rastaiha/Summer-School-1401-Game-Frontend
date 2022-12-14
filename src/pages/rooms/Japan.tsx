import React, { FC } from 'react';
import { ItemType } from '../../types/global';
import RoomBase from '../../components/organism/konva/RoomBase';
import {
  setProblemDialogAction,
} from '../../redux/slices/problem';
import { connect } from 'react-redux';

const Japan = ({
  setProblemDialog,
}) => {
  const backgroundImageSrc = '/japan/japan room - empty.png';
  const items: ItemType[] = [
    {
      imageSrc: process.env.PUBLIC_URL + '/japan/sushi.png',
      id: "0",
      x: 1005,
      y: 638,
      onClick: () => {
        setProblemDialog({ problemGroupId: 4 })
      },
    },
    {
      imageSrc: process.env.PUBLIC_URL + '/japan/chance cat.png',
      id: "1",
      x: 380,
      y: 550,
      onClick: () => {
        setProblemDialog({ problemGroupId: 1 })
      },
    },
    {
      imageSrc: process.env.PUBLIC_URL + '/japan/cherry blossom vase.png',
      id: "3",
      x: 710,
      y: 470,
      onClick: () => {
        setProblemDialog({ problemGroupId: 7 })
      },
    },
    {
      imageSrc: process.env.PUBLIC_URL + '/japan/dragon.png',
      id: "4",
      x: 240,
      y: 230,
      onClick: () => {
        setProblemDialog({ problemGroupId: 2 })

      },
    },
    {
      imageSrc: process.env.PUBLIC_URL + '/japan/katana.png',
      id: "5",
      x: 130,
      y: 698,
      onClick: () => {

        setProblemDialog({ problemGroupId: 3 })

      },
    },
    {
      imageSrc: process.env.PUBLIC_URL + '/japan/japan frame.png',
      id: "6",
      x: 1220,
      y: 235,
      disabled: true,
      onClick: () => { },
    },
    {
      imageSrc: process.env.PUBLIC_URL + '/japan/door.png',
      id: "7",
      x: 1330,
      y: 750,
      disabled: true,
      onClick: () => { },
    },
  ];

  return (
    <RoomBase backgroundImageSrc={backgroundImageSrc} items={items} />
  );
};

const mapStateToProps = (state) => ({

})

export default connect(setProblemDialogAction, {
  setProblemDialog: setProblemDialogAction,
})(Japan);
