import { TouchableOpacity, Text } from "react-native"
import styles from "./styles"

type Props = {
  navigation: any
  item: any
}
const ProductItem = ({ navigation, item }: Props) => {
  return (<TouchableOpacity
    style={styles.itemContainer}
    onPress={() => navigation.navigate('Details', { item })}
  >
    <Text style={styles.itemText}>
      {item.name} - {item.id}
    </Text>
  </TouchableOpacity>)
}
export default ProductItem