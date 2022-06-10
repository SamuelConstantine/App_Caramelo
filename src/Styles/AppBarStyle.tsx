import styled from 'styled-components'
import { Appbar } from 'react-native-paper';
import { Text } from 'react-native';

export const Content = styled(Appbar.Content)`
    align-items: center;
`

export const Header = styled(Appbar.Header)`
    background-color: #DAF2E1;
    border-bottom-color: #017c68;
    border-bottom-width: 0.5px;
`

export const TitleBar = styled(Text)`
    color: white;
    font-size: 20px;
    font-weight: bold; 
    line-height: 20px;
`