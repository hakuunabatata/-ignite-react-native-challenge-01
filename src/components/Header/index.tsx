import { Image, View } from 'react-native'
import Logo from '../../assets/logo.png'
import styles from './styles'

export const Header = () => (
  <>
    <View style={styles.container}>
      <Image source={Logo} />
    </View>
  </>
)
