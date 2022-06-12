import styled from 'styled-components'
import { Modal, Portal, Text, Button, Provider, Card, List, IconButton, Colors } from 'react-native-paper';

export const Image = styled(Card.Cover)`
    height: 350px;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
`


export const ButtonClose = styled(Button)`
    background-color: #62cb65;
`


export const ItemList = styled(List.Item)`
    padding-top: -5px;
    padding-bottom: -5px;
    border-style: solid;
    border-bottom-width: 1px;
    border-top-width: 0;
    border-right-width: 0;
    border-left-width: 0;
`