import { Image, Text, View } from 'react-native'
import Logo from '../../assets/logo.png'
import styles from './style'

export const Header = () => (
  <>
    <View style={styles.container}>
      <Image source={Logo} />
    </View>
  </>
)
