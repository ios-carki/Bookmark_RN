import { View, Text, StyleSheet, TextInput } from "react-native";
import { GlobalStyles } from "../../constants/GlobalStyles";

function Input({ title, isInvalid, containerStyle, inputStyle, ...inputProps }) {
  return (
    <View style={[styles.container, containerStyle]}>
      <Text
        style={[
          styles.defaultTitleTextStyle,
          isInvalid && styles.invalidTitleTextStyle,
        ]}
      >
        {title}
      </Text>
      <TextInput
        placeholderTextColor={GlobalStyles.colors.gray500}
        {...inputProps}
        style={[
          styles.defaultInputStyles,
          inputProps.multiline && styles.multiLineInputStyle,
          isInvalid && styles.invalidInputStyles,
          inputStyle
        ]}
      />
    </View>
  );
}

export default Input;

const styles = StyleSheet.create({
  container: {
    gap: 6,
  },
  defaultTitleTextStyle: {
    ...GlobalStyles.fonts.label,
    color: GlobalStyles.colors.gray700,
  },
  invalidTitleTextStyle: {
    color: GlobalStyles.colors.error500,
  },
  defaultInputStyles: {
    fontFamily: GlobalStyles.fonts.body.fontFamily,
    fontSize: GlobalStyles.fonts.body.fontSize,
    color: GlobalStyles.colors.ink900,
    backgroundColor: GlobalStyles.colors.white,
    minHeight: 44,
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: GlobalStyles.colors.gray300,
  },
  invalidInputStyles: {
    backgroundColor: GlobalStyles.colors.error50,
    borderColor: GlobalStyles.colors.error500,
  },
  multiLineInputStyle: {
    minHeight: 100,
    lineHeight: 22,
    textAlignVertical: 'top'
  }
});
