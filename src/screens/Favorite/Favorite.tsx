import React from 'react'
import {LayoutManageSafeBox} from '../../components/LayoutManage'
import {CardFull} from '../../components/Card'
import {  FlatList } from 'react-native';

const DATA = [
  {
    id: 1,
    name: 'Cheeatara',
    type: 'cat',
    descripition: 'Uma gatinha muito carinhosa',
    age: '1 ano e 5 meses'
  },
];

const renderItem = ({item}:any) => <CardFull description={item} />

export default function FavoriteScreen() {

  return (
    <LayoutManageSafeBox goback={true} title={'Favoritos'} right={false}>
       <FlatList
        showsVerticalScrollIndicator={false}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
       />
    </LayoutManageSafeBox>
  )
}
