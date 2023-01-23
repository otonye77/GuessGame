import { View, StyleSheet, Dimensions } from "react-native";

const Card = ({ children }) => {
    return (
        <View style={styles.inputContainer}>
            {children}
        </View>
    )
};
export default Card;

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: "center",
        alignItems: "center",
        padding: 16,
        marginTop: deviceWidth < 380 ? 18 : 36,
        marginHorizontal: 24,
        borderRadius: 8,
        elevation: 4,
        shadowColor: "black",
        backgroundColor: "#4e0329",
        shadowOffset: { width: 0, height: 2 }
    },
})