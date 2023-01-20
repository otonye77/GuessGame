import { useState } from "react";
import { View, TextInput, StyleSheet, Alert, Text } from "react-native"
import Card from "../components/Card";
import InstructionText from "../components/InstructionText";
import PrimaryButton from "../components/PrimaryButton";
import Title from "../components/Title";

const StartGameScreen = ({ onPickNumber }) => {

    const [enteredNumber, setEnteredNumber] = useState("");

    function numberInputHandler(enteredText){
        setEnteredNumber(enteredText);
    }

    function resetInputHandler(){
        setEnteredNumber("");
    }

    function confirmInputHandler(){
        let chosenNumber = parseInt(enteredNumber)
        if(isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99){
            Alert.alert(
                "Invalid Number",
                 "Number has to be a number between 1 and 99",
                 [{ text: "Okay", style: "destructive", onPress: resetInputHandler }]
                 )
        }
        onPickNumber(chosenNumber);
    }

    return (
        <View style={styles.rootContainer}>
        <Title>GUESS MY NUMBER</Title>
        <Card>
            <InstructionText>Enter a number</InstructionText>
            <TextInput 
            style={styles.numberInput}
            maxLength={2}
            keyboardType="number-pad"
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={numberInputHandler}
            value={enteredNumber}
            />
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                   <PrimaryButton>Reset</PrimaryButton> 
                </View>
               <View style={styles.buttonContainer}>
                 <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton> 
               </View>
            </View>
        </Card>
        </View>
    )
}

export default StartGameScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        marginTop: 100,
        alignItems: "center"
    },
    numberInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: "#ddb52f",
        borderBottomWidth: 2,
        color: "#ddb52f",
        marginVertical: 8,
        fontWeight: "bold",
        textAlign: "center"
    },
    buttonsContainer: {
        flexDirection: "row"
    },
    buttonContainer: {
        flex: 1
    }
})