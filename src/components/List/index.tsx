import { Text, TouchableOpacity, View } from 'react-native'
import { Task } from '../../types'
import { Info } from '../Info'

interface Props {
  tasks: Task[]
  onRemove: (index: number) => void
  onEnd: (index: number) => void
}

export const List = ({ tasks, onRemove, onEnd }: Props) => (
  <>
    <Info tasks={tasks} />
    {tasks.map((task, index) => (
      <View key={index}>
        <TouchableOpacity onPress={() => onEnd(index)}>
          <Text>Concluir</Text>
        </TouchableOpacity>
        <Text>{task.task}</Text>
        <TouchableOpacity onPress={() => onRemove(index)}>
          <Text>Delete</Text>
        </TouchableOpacity>
      </View>
    ))}
  </>
)
