import { View, StyleSheet } from "react-native";

const Card = ({ children }) => {
    return (
        <View style={styles.inputContainer}>
            {children}
        </View>
    )
};
export default Card;

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: "center",
        alignItems: "center",
        padding: 16,
        marginTop: 36,
        marginHorizontal: 24,
        borderRadius: 8,
        elevation: 4,
        shadowColor: "black",
        backgroundColor: "#4e0329",
        shadowOffset: { width: 0, height: 2 }
    },
})