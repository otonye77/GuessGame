import { View, Text, StyleSheet } from 'react-native';

const GuessLogItem = ({ roundNumber, guess }) => {
    return (
        <View style={styles.listItem}>
            <Text style={styles.itemText}>#{roundNumber}</Text>
            <Text style={styles.itemText}>Opponent Guess: {guess}</Text>
        </View>
    )
}
export default GuessLogItem;

const styles = StyleSheet.create({
    listItem: {
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 40,
        padding: 12,
        marginVertical: 8,
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#ddb52f",
        width: "100%",
        elevation: 4,
        shadowColor: "black",
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.25,
        shadowRadius: 3
    },
    itemText: {
        fontFamily: "open-sans"
    }
});