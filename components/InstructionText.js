import { Text, StyleSheet } from 'react-native';

const InstructionText = ({ children, style }) => {
    return (
        <Text style={[styles.instructionText, style]}>{children}</Text>
    )
}
export default InstructionText;

const styles = StyleSheet.create({
    instructionText: {
        fontSize: 24,
        color: "#ddb52f"
    }
});