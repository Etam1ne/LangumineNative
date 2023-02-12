import { StyleSheet, Dimensions } from "react-native";

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;

export const styles = StyleSheet.create({
    container: {
      width: '100%',
      height: '100%',
      backgroundColor: '#F5F5F5',
      display: "flex",
      alignItems: 'center',
    },

    scrollview: {
      width: "95%",
      paddingTop: "5%",
    },

    button: {
      width: "100%",
      backgroundColor: "#FFFFFF",
      borderRadius: 30,
      display: "flex",
      flexDirection: "row",
      marginVertical: 5,
    },

    buttonImage: {
      width: "20%",
      lineHeight: 60,
      fontSize: 25,
      textAlign: "center",
      textAlignVertical: "center",
    },

    buttonText: {
      fontSize: 18,
      lineHeight: 60,
    },

    // cards screen

    cardView: {
      justifyContent: "center",
    },
  
    card: {
      width: "95%",
      aspectRatio: 1,
      backgroundColor: "white",
      borderRadius: "30px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },

    translationContainerShown: {
      borderRadius: 30,
      marginVertical: 10,
      paddingVertical: 5,
      borderColor: "grey",
      borderStyle: "solid",
      borderWidth: 1,
    },

    translationContainerHidden: {
      borderRadius: 30,
      backgroundColor: "grey",
      marginVertical: 10,
      paddingVertical: 5,
    },

    translationText: {
      width: SCREEN_WIDTH * 0.9,
      textAlign: "center",
      textAlignVertical: "center",
      lineHeight: 40,
      fontSize: 20,
    },
  });