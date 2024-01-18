import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { Feather as Icon } from '@expo/vector-icons'
import { Task } from '../../types'
import { Info } from '../Info'
import styles from './styles'
import { Todo } from '../Todo'

interface Props {
  tasks: Task[]
  onRemove: (index: number) => void
  onEnd: (index: number) => void
}

export const List = ({ tasks, onRemove, onEnd }: Props) => (
  <View style={styles.container}>
    <Info tasks={tasks} />
    {tasks.length ? (
      tasks.map((task, index) => (
        <Todo
          key={index}
          task={task}
          onRemove={() => onRemove(index)}
          onEnd={() => onEnd(index)}
        />
      ))
    ) : (
      <View style={styles.emptyContainer}>
        <Icon
          name='clipboard'
          size={56}
          color='#808080'
        />
        <Text style={{ ...styles.emptyText, fontWeight: 'bold' }}>
          Você ainda não tem tarefas cadastradas
        </Text>
        <Text style={styles.emptyText}>
          Crie tarefas e organize seus itens a fazer
        </Text>
      </View>
    )}
  </View>
)
