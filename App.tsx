import { StatusBar } from 'expo-status-bar'
import { useState } from 'react'
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import { Home } from './src/screens'

interface Task {
  task: string
  done: boolean
}

export default function App() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [value, setValue] = useState('')

  const addTask = () => {
    setTasks(prev => [...prev, { task: value, done: false }])
  }

  const removeTask = (index: number) => {
    setTasks(prev => prev.filter((_, idx) => idx !== index))
  }

  const endTask = (index: number) => {
    setTasks(prev =>
      prev.map((item, idx) =>
        idx === index ? { task: item.task, done: !item.done } : item,
      ),
    )
  }

  return (
    <>
      <Home />
      <TextInput
        style={styles.input}
        onChangeText={setValue}
      />
      <TouchableOpacity onPress={addTask}>
        <Text>Create</Text>
      </TouchableOpacity>
      <View>
        <Text>Criadas</Text>
        <Text>{tasks.length}</Text>
      </View>
      <View>
        <Text>Concluídas</Text>
        <Text>{tasks.filter(({ done }) => done).length}</Text>
      </View>
      {tasks.map((task, index) => (
        <View key={index}>
          <TouchableOpacity onPress={() => endTask(index)}>
            <Text>Concluir</Text>
          </TouchableOpacity>
          <Text>{task.task}</Text>
          <TouchableOpacity onPress={() => removeTask(index)}>
            <Text>Delete</Text>
          </TouchableOpacity>
        </View>
      ))}
      <StatusBar style='auto' />
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: '#f00',
  },
  input: {
    backgroundColor: '#0ee',
    color: '#000',
  },
})
