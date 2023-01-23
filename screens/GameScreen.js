import { useState, useEffect } from "react";
import { Text, View, StyleSheet, Alert, FlatList } from "react-native";
import Card from "../components/Card";
import NumberContainer from "../components/game/NumberContainer";
import InstructionText from "../components/InstructionText";
import PrimaryButton from "../components/PrimaryButton";
import Title from "../components/Title";
import { Ionicons } from "@expo/vector-icons";
import GuessLogItem from "../components/game/GuessLogItem";

function generateRandomNumber(min, max, exclude){
    let rndNumber = Math.floor(Math.random() * (max - min)) + min;
    if(rndNumber === exclude){
        return generateRandomNumber(min, max,exclude)
    }
    return rndNumber
}

let minBoundary = 1;
let maxBoundary = 100;

const GameScreen = ({ userNumber, onGameOver }) => {
    const initialGuess = generateRandomNumber(1, 100, userNumber);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    const [guessRounds, setGuessRounds] = useState([]);

    useEffect(() => {
        if(currentGuess === userNumber){
            onGameOver();
        }
    }, [currentGuess, userNumber, onGameOver]);

    useEffect(() => {
        minBoundary= 1;
        maxBoundary = 100;
    }), []

    function nextGuessHandler(direction){
        if(
            (direction === "lower" && currentGuess < userNumber)
            ||
            (direction === "greater" && currentGuess > userNumber)
            ){
                return Alert.alert("Don't lie you know this is wrong", [{ text: "Sorry!", style: "cancel" }])
            }
        if(direction === "lower"){
            maxBoundary = currentGuess;
        } else {
            minBoundary = currentGuess + 1;
        }
        const newRndNumber = generateRandomNumber(minBoundary, maxBoundary, currentGuess)
        setCurrentGuess(newRndNumber);
        setGuessRounds(prevGuessRounds => [...prevGuessRounds, newRndNumber]);
    }

    const guessRoundListLength = guessRounds.length;

    return (
        <View style={styles.screen}>
            <Title>Opponent Guess</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card>
                <InstructionText style={styles.instructionText}>Higher or Lower</InstructionText>
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                      <PrimaryButton onPress={() => nextGuessHandler("lower")}>
                        <Ionicons name="md-remove" size={24} color="white" />
                      </PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={() => nextGuessHandler("greater")}>
                     <Ionicons name="md-add" size={24} color="white" />
                    </PrimaryButton>
                    </View>
                </View>
            </Card>
            <View style={styles.listContainer}>
                <FlatList 
                 data={guessRounds}
                 renderItem={(itemData) => <GuessLogItem roundNumber={guessRoundListLength - itemData.index} guess={itemData.item} />}
                 keyExtractor={(item) => item}
                />
            </View>
        </View>
    )
}
export default GameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24,
        alignItems: "center"
    },
    instructionText: {
        marginBottom: 12
    },
    buttonsContainer: {
        flexDirection: "row"
    },
    buttonContainer: {
        flex: 1
    },
    listContainer: {
        flex: 1,
        padding: 16
    }
});