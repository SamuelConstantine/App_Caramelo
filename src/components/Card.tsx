import React from 'react';
import { Colors ,Card, IconButton } from 'react-native-paper';
import {
  CardContainer,
} from '../Styles/CardStyle'
import { getLocalStorage, setLocalStorage } from '../core/utils'
import { GestureResponderEvent } from 'react-native';

type Props = {
    description: {
        name: string
        descripition: string
        age: string
        image:string
    },
    visible: any
  }


export const CardFull = ({description, visible}: Props) => {

  const detailsAdd = (item:object) => {
    visible({visible:true, data:item})
  }


  const favoriteAdd  = async (item:object) => {
    let arrayFavorites = await getLocalStorage('favorite')
    // console.log("item", item.id)
    console.log("arrayFavorites", arrayFavorites)
    if (arrayFavorites) {
      arrayFavorites.push(item)
    } else {
      arrayFavorites = [item]
    }
    console.log("atualizado", arrayFavorites)

    setLocalStorage(arrayFavorites)
  }


  return (
    <CardContainer onPress={() => {detailsAdd(description)}} >
        <Card.Title 
          title={description.name}
          subtitle={description.age} 
          right={(props) => <IconButton  icon="heart-circle-outline"  color={Colors.red600} size={22} onPress={() => {favoriteAdd(description)}}></IconButton> } />
        <Card.Cover style={{borderRadius: 20}} source={{ uri: description.image }} />
    </CardContainer>
  )
};
