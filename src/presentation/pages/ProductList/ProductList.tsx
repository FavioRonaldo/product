import { View, Text, TouchableOpacity, FlatList, TextInput, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import styles from './styles';
import ProductPresenter from './presenter';
import { useEffect, useState } from 'react';
import ProductItem from '../../components/ProductList/ProductItem';


const ProductList = ({ route,navigation }) => {
  const presenter = new ProductPresenter();
  const [products, setProducts] = useState<Product[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState<Product[]>([]);
  
  async function handleGetProduct() {
    const response = await presenter.getAllProduct();
    setProducts(response);
  }

  useEffect(() => {
    const filterData = products.filter(item =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredData(filterData);
    
  },[searchQuery]);
  useEffect(
    () => navigation.addListener('focus', () =>  handleGetProduct()),
    []
  );


  const handleSearch = (query) => {
    console.log(query);
    setSearchQuery(query);
  };
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Buscar productsos..."
        value={searchQuery}
        onChangeText={handleSearch} // Actualiza el estado de búsqueda
      />
      <FlatList
        data={filteredData.length!==0 ? filteredData:products} // Se pasa todo el array `products` directamente a `FlatList`
        keyExtractor={(item) => item.id.toString()} // Usar `keyExtractor` para generar una clave única para cada elemento
        renderItem={({ item }) => (<ProductItem navigation={navigation} item={item} />)}
      />
      <Text style={styles.itemProduct}>Numero de datos: {filteredData.length!==0 ? filteredData.length:products.length}</Text>
      <StatusBar style="auto" backgroundColor="green" />
      <View style={styles.button}>
      <Button 
        title="Agregar Producto"
        color="#FFD733"
        onPress={() => navigation.navigate('New')}
      />
      </View>
    </View>
    
  );
};

export default ProductList;


