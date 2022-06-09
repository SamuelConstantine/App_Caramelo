import React from 'react'
import { Body } from '../../Styles/StylesUtils'
import AppBar from '../../components/AppBar'
import {Card} from '../../components/Card'
import { View, FlatList } from 'react-native';
import styled from 'styled-components';

const DATA = [
  {
    name: 'Cheeatara',
    type: 'cat',
    descripition: 'Uma gatinha muito carinhosa',
    age: '1 ano e 5 meses'
  },
  {
    name: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    type: 'dog',
    descripition: '',
    age: '1 ano e 3 meses'

  },
  {
    name: '58694a0f-3da1-471f-bd96-145571e29d72',
    type: 'dog',
    descripition: '',
    age: '2 ano e 1 meses'

  },
];

const ViewBox = styled(View)`
    width: 100%;
    padding: 5%;
`
export default function HomeScreen() {

  return (
    <Body>
    <AppBar description={'HomeScreen'}/>
      <ViewBox >
        <FlatList
          data={DATA}
          renderItem={(data) => (
            <Card description={data.item} />
          )
          }
          keyExtractor={item => item.id}
        />
      </ViewBox>

    </Body>
  )
}
