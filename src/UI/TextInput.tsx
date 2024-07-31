import React, {useEffect, useState} from 'react';
import {View, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
interface RNTextInputProps {
  value?: string;
  onChangeText?: (text: string) => void;
  iconName?: string;
  icon?: React.ReactNode;
  iconColor?: string;
  isSecureTextEntry?: boolean;
  placeHolder?: string;
  onBlur?: any;
}

const RNTextInput: React.FC<RNTextInputProps> = props => {
  const {
    value,
    onChangeText,
    iconName,
    icon,
    iconColor,
    isSecureTextEntry,
    placeHolder,
  } = props;

  const [secureTextEntry, setSecureTextEntry] = useState<boolean>(
    isSecureTextEntry || false,
  );

  useEffect(() => {
    if (isSecureTextEntry) {
      setSecureTextEntry(true);
    }
  }, [isSecureTextEntry]);

  return (
    <View style={styles.container}>
      <View style={styles.textInputContainer}>
        <TextInput
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
          placeholder={placeHolder}
          placeholderTextColor={'#7C8BA0'}
          style={styles.textInputStyle}
          autoCapitalize="none"
          autoCorrect={false}
        />
      </View>
    </View>
  );
};

// Define the styles with proper typing
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    backgroundColor: '#F5F9FE',
    height: 60,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    flexDirection: 'row',
    borderRadius: 10,
    marginTop: 16,
  },

  textInputContainer: {
    width: '100%',
  },

  textInputStyle: {
    height: 60,
    width: '100%',
    paddingLeft: 24,
    paddingRight: 24,
    fontSize: 16,
    color: 'black',
  },

  eyeContainer: {
    width: '15%',
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: 24,
  },
});

export default RNTextInput;
