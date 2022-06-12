import * as React from 'react';
import { Modal, Portal, Text, Button, Provider, Card, List, IconButton, Colors } from 'react-native-paper';
import { getLocalStorage, setLocalStorage } from '../core/utils';

import {
    Image,
    ButtonClose,
    ItemList
} from '../Styles/ModalStyle'
type Props = {
    startVisible: {
        visible: boolean
        data:{
            age: string,
            descripition: string,
            id: number,
            image: string,
            name:  string,
        }
    },
    setVisible: Function,
  }


export const ModalDetails = ({startVisible, setVisible}: Props) => {

  const hideModal = () => setVisible({visible:false});
  const containerStyle = {backgroundColor: 'white', margin:15, borderRadius: 15};

  const favoriteAdd  = async (item:object) => {
    let arrayFavorites = await getLocalStorage('favorite')
    if (arrayFavorites) {
      arrayFavorites.push(item)
    } else {
      arrayFavorites = [item]
    }

    setLocalStorage(arrayFavorites)
  }

  return (
    <Provider>
      <Portal>
        <Modal visible={startVisible.visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
            <Image source={{ uri: startVisible.data?.image}}/>
            <ItemList
                title={'Nome'}
                description={startVisible.data?.name}
                left={props => <List.Icon {...props} icon="label-outline" />}
                right={props => <IconButton  icon="heart-circle-outline"  color={Colors.red600} size={30} onPress={() => {favoriteAdd(startVisible.data)}}></IconButton> }

            />
            <ItemList
                title={'Descrição'}
                description={startVisible.data?.descripition}
                left={props => <List.Icon {...props} icon="label-outline" />}
            />
            <ItemList
                title={'Idade'}
                description={startVisible.data?.age}
                left={props => <List.Icon {...props} icon="label-outline" />}
            />
            <ButtonClose onPress={hideModal} mode={'contained'}>
                sair
            </ButtonClose>
        </Modal>
      </Portal>
    </Provider>
  );
};
