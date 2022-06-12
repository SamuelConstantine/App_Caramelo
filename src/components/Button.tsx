/* eslint-disable prettier/prettier */
import React from 'react'
import { GestureResponderEvent } from 'react-native'
import { StyleButton, TextGeral } from '../Styles/StylesUtils'

type Props = {
  description: string | null,
  onPress: (event: GestureResponderEvent) => void,
}

export default function Button({ description, onPress } : Props) {
  return (
    <StyleButton onPress={onPress}>
      <TextGeral>{description}</TextGeral>
    </StyleButton>
  )
}
