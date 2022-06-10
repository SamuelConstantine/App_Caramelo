import{Text, View} from 'react-native';
// import * as reactNativePaper from 'react-native-paper';
import { Button,Card } from 'react-native-paper';
import {
  CardContainer,
  TextDetails,
  ActionsCard
} from '../Styles/CardStyle'

type Props = {
    description: {
        name: string
        descripition: string
        tipy: string
        age: string
    },
  }

export const CardFull = ({description}: Props) => {

console.log("descriptionw", description)

  return (
    <CardContainer>
        <Card.Title title={description.name} subtitle={description.age}  />
        <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
        <ActionsCard>
          <Button><TextDetails>Detalhes</TextDetails></Button>
          <Button><TextDetails>favorite</TextDetails></Button>
        </ActionsCard>
    </CardContainer>
  )
};
