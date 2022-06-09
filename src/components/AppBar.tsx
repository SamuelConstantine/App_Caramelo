import * as React from 'react';
import { Appbar } from 'react-native-paper';

import {
    Content,
    Header
} from '../Styles/AppBarStyle'
type Props = {
    description: string | null,
  }

export default function AppBar({ description } : Props) {
    return (
        <Header style={{ elevation: 20}}> 
        <Content  titleStyle={{ color: 'black' }} title={description} />
         {/* <Appbar.Action icon="magnify" onPress={() => {}} /> */}
         <Appbar.Action icon={'bookmark-outline'} onPress={() => {}} />
        </Header>
    )
};
