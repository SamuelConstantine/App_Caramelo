import { TouchableOpacity, View } from 'react-native'
import styled from 'styled-components'


export const Image = styled.Image`
  width: 100%;
  height: 43%;
  align-items: flex-end;
`

export const Body = styled(View)`
  height: 100%;
  width: 100%;
  flex: 1;
  background-color: #DAF2E1;
`

export const StyleButton = styled(TouchableOpacity)`
  padding: 17px;
  margin-top: 20px;
  align-items: center;
  border-radius: 25px;
  padding-left: 15%;
  padding-right: 15%;
  background-color: #62cb65;
  width: 95%;
`

export const Text = styled.Text`
    color: white;
    font-size: 20px;
    font-weight: bold; 
    line-height: 20px;
`
