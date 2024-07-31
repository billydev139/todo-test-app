import {
  Image,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useCallback, useEffect} from 'react';
import {Button} from '../UI';
import {images} from '../Assets';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';

type RootStackParamList = {
  CreateTodo: undefined;
};

type NavigationProps = NavigationProp<RootStackParamList>;

const CreateTodo: React.FC = () => {
  const dispatch = useDispatch<any>();
  const route = useSelector((state: any) => state.route.routing);
  const navigation = useNavigation<NavigationProps>();
  const onPreviousPress = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  useEffect(() => {}, []);

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.previousContainer}
        onPress={onPreviousPress}>
        <Image style={styles.imgStyle} source={images.previous} />
      </TouchableOpacity>
      <View style={styles.textInputContainer}>
        <TextInput
          multiline
          placeholder={'write'}
          placeholderTextColor={'#7C8BA0'}
          style={styles.textInputStyle}
          autoCapitalize="none"
          autoCorrect={false}
        />
      </View>
      <Button
        onPress={() => {
          dispatch(CreateTodo());
        }}
        title={route == 'Create' ? 'Create' : 'Update'}
        buttonStyle={styles.btnStyle}
      />
    </SafeAreaView>
  );
};

export default CreateTodo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textInputStyle: {
    fontSize: 16,
    color: 'black',
  },
  textInputContainer: {
    marginHorizontal: 20,
    backgroundColor: '#F5F9FE',
    height: '50%',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    flexDirection: 'row',
    borderRadius: 10,
    padding: 20,
  },
  btnStyle: {
    alignSelf: 'flex-end',
    marginTop: 20,
    marginRight: 20,
  },
  imgStyle: {
    width: 34,
    height: 34,
  },
  previousContainer: {
    marginLeft: 20,
    marginVertical: 20,
  },
});
