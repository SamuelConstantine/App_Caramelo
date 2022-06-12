import styled from 'styled-components'
import { Text, Card, Button } from 'react-native-paper';
import { View } from 'react-native';

export const CardContainer = styled(Card)`
   border-top-left-radius: 20px;
   border-top-right-radius: 20px;
   border-bottom-right-radius: 20px;
   margin-top: 10px;
   margin: 5%;
   padding: 5px;
   elevation: 15;
`


export const TextDetails = styled(Text)`
   color: black;
`

export const ActionsCard = styled(Card.Actions)`
   align-self: flex-end;
`


