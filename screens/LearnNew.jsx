import { StatusBar } from "expo-status-bar";
import { View, Text, Image, Animated, Dimensions} from "react-native";
import Card from "../components/Card";
import { styles } from "../styles";

export default function LearnNew() {

  const cards = [
    {id: "1", foreign: "Hello", transcription: "hə'ləʊ", translation: "Привет, здравствуй"},
    {id: "2", foreign: "Bye", transcription: "baɪ", translation: "Пока"},
  ]

  // const AllCards = () => {
  //   return cards.map((item, i) => {
  //       <Card
  //         foreign={item.foreign} 
  //         transcription={item.transcription} 
  //         translation={item.translation}
  //       />
  //   });
  // }

  return (
    <View style={[styles.container, styles.cardView]}>
      <Card foreign={cards[0].foreign} transcription={cards[0].transcription} translation={cards[0].translation}/>
      <StatusBar style='auto'/>
    </View>
  );
}