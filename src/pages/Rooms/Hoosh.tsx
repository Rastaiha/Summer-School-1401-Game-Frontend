import React, { FC } from 'react';
import { ItemType } from '../../types/global';
import RoomBase from './RoomBase';

const Hoosh = () => {
  const backgroundImageSrc = '/Hoosh/japan room - empty.png';
  const items: ItemType[] = [
    {
      imageSrc: process.env.PUBLIC_URL + '/Hoosh/sushi.png',
      id: "0",
      x: 1005,
      y: 638,
      onClick: () => { },
    },
    {
      imageSrc: process.env.PUBLIC_URL + '/Hoosh/chance cat.png',
      id: "1",
      x: 380,
      y: 550,
      onClick: () => { },
    },
    {
      imageSrc: process.env.PUBLIC_URL + '/Hoosh/cherry blossom vase.png',
      id: "3",
      x: 710,
      y: 470,
      onClick: () => { },
    },
    {
      imageSrc: process.env.PUBLIC_URL + '/Hoosh/dragon.png',
      id: "4",
      x: 240,
      y: 230,
      onClick: () => { },
    },
    {
      imageSrc: process.env.PUBLIC_URL + '/Hoosh/katana.png',
      id: "5",
      x: 130,
      y: 698,
      onClick: () => { },
    },
    {
      imageSrc: process.env.PUBLIC_URL + '/Hoosh/japan frame.png',
      id: "6",
      x: 1220,
      y: 235,
      disabled: true,
      onClick: () => { },
    },
    {
      imageSrc: process.env.PUBLIC_URL + '/Hoosh/door.png',
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

export default Hoosh;
