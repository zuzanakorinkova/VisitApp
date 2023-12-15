import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { Control, Controller, Path } from "react-hook-form";
import theme from '../../../../theme/colors';

interface ICustomInput<ContentType> {
  control: Control<ContentType, object>;
  name: Path<ContentType>;
  rules?: {};
  placeholder?: string;
  secureTextEntry?: boolean;
}

function CustomInput<ContentType>({
  control,
  name,
  rules = {},
  placeholder = "",
  secureTextEntry = false,
}: ICustomInput<ContentType>) {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({
        field: { value, onChange, onBlur },
        fieldState: { error },
      }) => (
        <>
          <View
            style={[
              styles.container,
              { borderColor: error ? theme.colors.danger : theme.colors.text },
            ]}
          >
            <TextInput
              value={value as string}
              onChangeText={onChange}
              onBlur={onBlur}
              placeholder={placeholder}
              style={styles.input}
              secureTextEntry={secureTextEntry}
              placeholderTextColor={theme.colors.inactive}
            />
          </View>
          {error && (
            <Text style={{ color: theme.colors.danger, alignSelf: "stretch" }}>
              {error.message || "Error"}
            </Text>
          )}
        </>
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.background,
    width: "100%",

    borderColor: theme.colors.text,
    borderWidth: 2,
    borderRadius: 50,

    paddingVertical: 5,
    paddingHorizontal: 15,
    marginVertical: 7,
  },
  input: {
    height: 50,
    color: theme.colors.text,
  },
});

export default CustomInput;
