import { useState } from 'react';
import { ImageBackground, StyleSheet, View, SafeAreaView } from 'react-native';
import { LinearGradient }from "expo-linear-gradient";
import StartGameScreen from './screens/StartGameScreen';
import GameOverScreen from './screens/GameOverScreen';
import GameScreen from './screens/GameScreen';

export default function App() {
  const [userNumber, setUserNumber] = useState(null);
  const [gameIsOver, setGameIsOver] = useState(true);

  function pickedNumberHandler(pickedNumber){
     setUserNumber(pickedNumber);
     setGameIsOver(false);
  }

  function gameOverHandler(){
    setGameIsOver(true);
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

  if(userNumber){
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
  }

  if(gameIsOver && userNumber){
    screen = <GameOverScreen />
  }

  return (
    <LinearGradient colors={["#4e0329", "#ddb52f"]} style={styles.rootScreen}>
      <ImageBackground 
      source={require("./assets/background.png")}
      resizeMode="cover"
      style={styles.rootScreen}
      imageStyle={styles.backgroundImage}
     >
      <SafeAreaView style={styles.rootScreen}>
         {screen}
      </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1
  },
  backgroundImage: {
    opacity: 0.15
  }
});
