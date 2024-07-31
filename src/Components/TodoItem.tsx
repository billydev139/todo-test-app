import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React, {memo} from 'react';
import {colors} from '../UI';
import {images} from '../Assets';
interface TodoItem {
  description?: string;
  date?: string;
}

interface TodoItemProps {
  item: TodoItem;
  index: number;
  onEditPress?: () => void;
  onDeletePress?: () => void;
}

const TodoItem: React.FC<TodoItemProps> = ({
  onDeletePress,
  onEditPress,
  item,
  index,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.imageContainer} onPress={onDeletePress}>
        <Image
          style={styles.imageStyle}
          resizeMode="contain"
          source={images.removeIcon}
        />
      </TouchableOpacity>
      <Text style={styles.descriptionStyle}>{item?.description}</Text>
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.dateStyle}>{item?.date}</Text>
        <TouchableOpacity style={styles.editContainer} onPress={onEditPress}>
          <Text style={styles.editTextStyle}>Edit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default memo(TodoItem);

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors?.lightBlue,
    marginHorizontal: 30,
    marginTop: 10,
    padding: 20,
    borderRadius: 12,
  },
  imageContainer: {position: 'absolute', right: -7, top: -7},
  imageStyle: {
    width: 24,
    height: 24,
  },
  descriptionStyle: {
    fontSize: 16,
    fontWeight: '500',
  },
  dateStyle: {
    marginTop: 10,
    color: colors?.blue,
    width: '80%',
  },
  editContainer: {flex: 1},
  editTextStyle: {
    marginTop: 10,
    textDecorationLine: 'underline',
    fontWeight: '600',
    textAlign: 'right',
  },
});
