import { useEffect } from "react"
import AsyncStorage from '@react-native-async-storage/async-storage';

export const getLocalStorage = async (name:string) => {
    console.log("namee", name)
    try {
        const value = await AsyncStorage.getItem(name)
        console.log("valuee", value)
        return value != null ? JSON.parse(value) : null;
      } catch(e) {
        return 'Erro'
      }
}


export const setLocalStorage = async (data:Array<object>) => {
    console.log("setLocalStorage", data)
    try {
        // await AsyncStorage.setItem('favorite', JSON.stringify(data))
        // AsyncStorage.clear();
      } catch (e) {
        return 'Erro'
      }
}
  