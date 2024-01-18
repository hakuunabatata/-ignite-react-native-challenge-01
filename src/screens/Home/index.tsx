import { Text, View } from 'react-native'
import { Header, Search } from '../../components'

interface Props {
  onChange: (value: string) => void
  onPress: () => void
  value: string
}

export const Home = ({ onChange, onPress, value }: Props) => (
  <>
    <View>
      <Header />
      <Search {...{ onChange, onPress, value }} />
    </View>
  </>
)
