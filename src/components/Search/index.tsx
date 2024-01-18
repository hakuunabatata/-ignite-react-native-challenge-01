import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import styles from './styles'

interface Props {
  onChange: (value: string) => void
  onPress: () => void
  value: string
}

export const Search = ({ onChange, onPress, value }: Props) => (
  <View style={styles.container}>
    <TextInput
      style={styles.input}
      onChangeText={onChange}
      placeholder='Adicione uma nova tarefa'
      placeholderTextColor='#808080'
      value={value}
    />
    <TouchableOpacity onPress={onPress}>
      <Text>Create</Text>
    </TouchableOpacity>
  </View>
)
