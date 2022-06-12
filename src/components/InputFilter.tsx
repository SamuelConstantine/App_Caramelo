import React, { useEffect, useState } from 'react';
import { TextInput } from 'react-native-paper';
import {
    InputSearch,
    ViewBody
} from '../Styles/InputStyle'

type Props = {
    filterInput:  React.Dispatch<React.SetStateAction<string>>,
  }


export function TodoInput({ filterInput}: Props) {
  const [filter, setFilter] = useState("");

  useEffect(() => {
    filterInput(filter)
  }, [filter]);

  return (
    <ViewBody>
      <InputSearch 
        label="Encontre seu pet.."
        underlineColor='#DAF2E1'
        right={ <TextInput.Icon name="search-web" />}
        value={filter}
        onChangeText={setFilter}
      />
    </ViewBody>
  )
}
