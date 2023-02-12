import { View, ScrollView, Image, Text, Pressable} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { styles } from '../styles';

export default function Home({ navigation }) {
  
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollview}>
            <Pressable onPress={() => navigation.navigate('LearnNew')}>
              <View style={styles.button}>
                <Text style={styles.buttonImage}>📝</Text>
                <Text style={styles.buttonText}>Учить новые слова</Text>
              </View>
            </Pressable>
            <Pressable onPress={() => navigation.navigate('LearnNew')}>
              <View style={styles.button}>
                <Text style={styles.buttonImage}>📚</Text>
                <Text style={styles.buttonText}>Повторять слова</Text>
              </View>
            </Pressable>
        </ScrollView>
        <StatusBar style='auto'/>
      </View>
    );
  }