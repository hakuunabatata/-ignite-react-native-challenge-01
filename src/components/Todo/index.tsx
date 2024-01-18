import { Text, TouchableOpacity, View } from 'react-native'
import { FontAwesome as Icon } from '@expo/vector-icons'
import { Task } from '../../types'
import styles from './styles'

interface Props {
  task: Task
  onEnd: () => void
  onRemove: () => void
}

export const Todo = ({ onEnd, onRemove, task }: Props) => (
  <View style={styles.container}>
    <TouchableOpacity
      style={{
        ...styles.check,
        ...(task.done
          ? { backgroundColor: '#5E60CE', borderColor: '#5E60CE' }
          : { backgroundColor: '#4EA8DE' }),
      }}
      onPress={onEnd}
    >
      {task.done && (
        <Icon
          name='check'
          color='#F2F2F2'
          size={12}
        />
      )}
    </TouchableOpacity>
    <Text
      style={{
        ...styles.text,
        ...(task.done
          ? { textDecorationLine: 'line-through', color: '#808080' }
          : { color: '#F2F2F2' }),
      }}
    >
      {task.task}
    </Text>
    <TouchableOpacity onPress={onRemove}>
      <Icon
        name='trash-o'
        color='#808080'
        size={20}
      />
    </TouchableOpacity>
  </View>
)
