import * as React from 'react';
import { View } from 'react-native';
import * as reactNativePaper from 'react-native-paper';

import {
    Cardw
} from '../Styles/CardStyle'

type Props = {
    description: {
        name: string
        descripition: string
        tipy: string
        age: string
    },
  }

export const Card = ({description}: Props) => {

console.log("descriptionw", description)

  return (
    <Cardw>
        <reactNativePaper.Card.Title title={description.name} subtitle={description.age}  />
        <reactNativePaper.Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
        <reactNativePaper.Card.Actions>
        <reactNativePaper.Button>detalhes</reactNativePaper.Button>
        </reactNativePaper.Card.Actions>
    </Cardw>
  )
};
