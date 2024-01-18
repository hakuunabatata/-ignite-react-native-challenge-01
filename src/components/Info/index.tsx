import { Text, View } from 'react-native'
import { Task } from '../../types'
import styles from './styles'

interface Props {
  tasks: Task[]
}

export const Info = ({ tasks }: Props) => (
  <View style={styles.container}>
    <View style={styles.textContainer}>
      <Text style={{ ...styles.text, color: '#4EA8DE' }}>
        Criadas
      </Text>
      <Text style={styles.number}>{tasks.length}</Text>
    </View>
    <View style={styles.textContainer}>
      <Text style={{ ...styles.text, color: '#8284FA' }}>
        Concluídas
      </Text>
      <Text style={styles.number}>
        {tasks.filter(({ done }) => done).length}
      </Text>
    </View>
  </View>
)
