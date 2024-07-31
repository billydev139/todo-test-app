import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useCallback, useEffect} from 'react';
import {colors} from '../UI';
import {images} from '../Assets';
import TodoItem from '../Components/TodoItem';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useDispatch} from 'react-redux';
import {setRoute} from '../Redux/Slices/AppSlice';
import {DeleteTodo, GetTodo} from '../Redux/ActionCreator';
type RootStackParamList = {
  CreateTodo: undefined;
};

type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'CreateTodo'
>;
const Home: React.FC = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<NavigationProp>();
  const data: any = [
    {description: 'meeting with client ', date: '02july'},
    {
      description:
        'What is a basic definition of text? Text is the exact, original words written by an author. Text is also a specific work as written by the original author. Text is also commonly used to refer to a text message or to send a text message. Text has several other senses as a noun.',
      date: '05july',
    },
    {description: 'meeting with client ', date: '02july'},
    {description: 'meeting with client ', date: '02july'},
    {description: 'meeting with client ', date: '02july'},
    {description: 'meeting with client ', date: '02july'},
    {description: 'meeting with client ', date: '02july'},
  ];
  const _renderTodo = useCallback(
    ({item, index}: {item: any; index: number}) => {
      return (
        <TodoItem
          onEditPress={onEditPress}
          onDeletePress={onDeletePress}
          item={item}
          index={index}
        />
      );
    },
    [],
  );
  const onDeletePress = useCallback(() => {
    dispatch(DeleteTodo());
  }, []);

  const keyExtractor = useCallback(
    (item: any, index: number) => index.toString(),
    [],
  );

  const onAddPress = useCallback(() => {
    dispatch(setRoute('Create'));
    navigation.navigate('CreateTodo');
  }, []);
  const onEditPress = useCallback(() => {
    dispatch(setRoute('Edit'));
    navigation.navigate('CreateTodo');
  }, []);

  useEffect(() => {
    dispatch(GetTodo());
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={_renderTodo}
        keyExtractor={keyExtractor}
        contentContainerStyle={styles.contentContainerStyle}
        showsVerticalScrollIndicator={false}
      />
      <TouchableOpacity style={styles.addButtonContainer} onPress={onAddPress}>
        <Image style={styles.addImageStyle} source={images?.addIcon} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'white'},
  addImageStyle: {
    width: 60,
    height: 60,
  },
  addButtonContainer: {
    alignSelf: 'center',
    marginBottom: 20,
  },
  contentContainerStyle: {
    paddingBottom: 100,
  },
});
