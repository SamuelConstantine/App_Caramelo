import styled from 'styled-components'
import { Text, Card, } from 'react-native-paper';
import { View } from 'react-native';

export const CardContainer = styled(Card)`
   border-radius: 20px;
   margin-top: 10px;
   margin: 5%;
   elevation: 15;
`



export const TextDetails = styled(Text)`
   color: black;
`

export const ActionsCard = styled(View)`
   justify-content: space-between;
   flex-direction: row;
   height: 40px;
`


