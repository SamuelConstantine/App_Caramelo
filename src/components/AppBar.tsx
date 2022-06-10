import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { View } from 'react-native';
import { Appbar } from 'react-native-paper';

import {
    Content,
    Header,
} from '../Styles/AppBarStyle'
type Props = {
    description: string | null,
    goback:boolean
    rightButton:boolean
  }

export default function AppBar({ description, goback, rightButton} : Props) {
    const navigation = useNavigation()
    console.log("navigationigation", navigation)
    return (
        <Header style={{ elevation: 20 }}> 
            {goback ? <Appbar.Action icon="arrow-left" onPress={() => {navigation.goBack()}} /> : <View style={{width: '10%'}}></View> }
            <Content  titleStyle={{ color: 'black' }} title={description} />
            {rightButton ? <Appbar.Action icon={'bookmark-outline'} onPress={() => navigation.navigate('FavoriteScreen')} />:  <View style={{width: '10%'}}></View>}
        </Header>
    )
};
