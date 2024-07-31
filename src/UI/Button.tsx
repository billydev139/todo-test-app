import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';
import {colors} from '.';
interface ButtonProps {
  title: string;
  onPress?: () => void;
  loading?: boolean;
  buttonStyle?: StyleProp<ViewStyle>;
  loadingColor?: string;
  buttonTextStyle?: StyleProp<TextStyle>;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = props => {
  const {
    title,
    onPress,
    loading,
    buttonStyle,
    loadingColor,
    buttonTextStyle,
    disabled,
  } = props;

  return (
    <TouchableOpacity
      disabled={disabled || loading}
      onPress={onPress}
      style={[styles.container, buttonStyle]}>
      {loading ? (
        <ActivityIndicator color={loadingColor || 'white'} />
      ) : (
        <Text style={[styles.buttonTextStyle, buttonTextStyle]}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 50,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: colors?.blue,
  },
  buttonTextStyle: {
    color: 'white',
    fontSize: 16,
    fontWeight: '700',
  },
});

export default Button;
