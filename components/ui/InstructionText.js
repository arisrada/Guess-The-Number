import { StyleSheet, Text } from "react-native";
import Colors from "../../constants/colors.android";

function InstructionText({ children, style }) {
  return <Text style={[styles.text, style]}>{children}</Text>;
}

export default InstructionText;

const styles = StyleSheet.create({
  text: {
    color: Colors.accent500,
    fontSize: 24,
  },
});
