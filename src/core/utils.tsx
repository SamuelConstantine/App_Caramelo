import { useEffect } from "react"
import AsyncStorage from '@react-native-async-storage/async-storage';

export const getLocalStorage = async (name:string) => {
    try {
        const value = await AsyncStorage.getItem(name)
        return value != null ? JSON.parse(value) : null;
      } catch(e) {
        return 'Erro'
      }
}


export const setLocalStorage = async (data:Array<object>) => {
    try {
        await AsyncStorage.setItem('favorite', JSON.stringify(data))
      } catch (e) {
        return 'Erro'
      }
}
  