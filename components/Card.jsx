import { Text, Animated, View, Pressable} from "react-native";
import { styles } from "../styles";
import { useState } from "react";

export default function Card(props) {

    const [translation, setTranslation] = useState(false);

    return (
      <Animated.View style={styles.card}>
        <Text
        style={styles.translationText}
        >
            {props.foreign}
        </Text>
        <Text
        style={styles.translationText}
        >
            [{props.transcription}]
        </Text>

        {translation ? 
        <Pressable onPress={() => setTranslation(false)}>
            <View style={styles.translationContainerShown}>
                <Text style={styles.translationText}>{props.translation}</Text>
            </View>
        </Pressable>
        :
        <Pressable onPress={() => setTranslation(true)}>
            <View style={styles.translationContainerHidden}>
                <Text style={styles.translationText}>Перевод</Text>
            </View>
        </Pressable>
        }

        

      </Animated.View>
    );
}