import { View } from 'react-native'
import { Header, List, Search } from '../../components'
import { Task } from '../../types'
import styles from './styles'
import { useState } from 'react'
import { Info } from '../../components/Info'

export const Home = () => {
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
      <View style={styles.container}>
        <Header />
        <Search
          onChange={setValue}
          onPress={addTask}
          value={value}
        />
        <List
          tasks={tasks}
          onEnd={endTask}
          onRemove={removeTask}
        />
      </View>
    </>
  )
}
