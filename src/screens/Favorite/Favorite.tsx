import React, { useState } from 'react'
import {LayoutManageSafeBox} from '../../components/LayoutManage'
import {CardFull} from '../../components/Card'
import {  FlatList } from 'react-native';
import { getLocalStorage } from '../../core/utils'
import { useEffect } from 'react';
import { ModalDetails } from '../../components/Modal';

export default function FavoriteScreen() {
  const [favorite, setFavorite] = useState<any>([])
  const [startVisible, setVisible] = useState({
    visible:false,
    data:{
      age: '',
      descripition: '',
      id: '',
      image: '',
      name:  '',
  }
  })
  const renderItem = ({item}:any) => <CardFull description={item} visible={setVisible}/>

  useEffect(() => {
    (async () => {
      try {
        const value = await getLocalStorage('favorite')
        setFavorite(value)
      } catch (error) {
        return 'erro'
      }
    })()
  }, [])

  return (
    <LayoutManageSafeBox goback={true} title={'Favoritos'} right={false}>
       <FlatList
        showsVerticalScrollIndicator={false}
        data={favorite}
        renderItem={renderItem}
        keyExtractor={item => item.id}
       />
       <ModalDetails startVisible={startVisible} setVisible={setVisible}></ModalDetails>
    </LayoutManageSafeBox>

  )
}
