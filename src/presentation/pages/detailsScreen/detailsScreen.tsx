import React from 'react';
import { View, Text, StyleSheet, Image, Button, Alert } from 'react-native';
import { useRoute } from '@react-navigation/native'; // Importa el hook para acceder a los parámetros de la ruta
import styles from './styles';
import ProductPresenter from './presenter';

const DetailsScreen = ({ navigation }) => {
  const presenter = new ProductPresenter();
  const route = useRoute(); // Hook para acceder a la ruta actual
  const { item } = route.params; // Obtén el ítem de los parámetros
  const Separator = () => <View style={styles.separator} />;
  async function handleDeleteProduct(id:string) {
    const response = await presenter.deleteProductById(id)
    navigation.navigate('Home', {
      onGoBack: () => handleGetProduct(),
    })
  }
  return (
    <View style={styles.container}>
      <View >
        <Text style={styles.title}>ID: {item.id}</Text>
        <Text style={styles.subtitle}>Informacion extra</Text>
      </View>
      <Separator />
      <Text>{'\n'}</Text>
      <View style={styles.rowText}>
        <Text style={styles.detailText}>Nombre: </Text>
        <Text style={styles.detailText}> {item.name}</Text>
      </View>
      <View style={styles.rowText}>
        <Text style={styles.detailText}>Descripción: </Text>
        <Text style={styles.detailText}> {item.description}</Text>
      </View>
      <Text style={styles.detailText}>Logo:</Text>
      <View style={styles.logoContainer} >
        <Image
          source={{ uri: item.logo }}
          style={styles.logo}
        />
      </View>
      <View style={styles.rowText}>
        <Text style={styles.detailText}>Fecha de Lanzamiento:</Text>
        <Text style={styles.detailText}>{item._dateRealease}</Text>
      </View>
      <View style={styles.rowText}>
        <Text style={styles.detailText}>Fecha de Revisión:</Text>
        <Text style={styles.detailText}> {item._dateRevision}</Text>
      </View>
      <Text>{'\n\n\n\n'}</Text>
      <View style={styles.button}>
      <Button
        title="Editar"
        color="grey"
        onPress={() => navigation.navigate('Edit',{ item })}
      />
      </View>
      <View style={styles.button}>
      <Button 
        title="Eliminar"
        color="red"
        onPress={() => Alert.alert(
          'Confirmation',
          'Do you want to proceed delete '+item.name+'?',
          [
            { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), },
            { style: 'default', text: 'OK', onPress: () => handleDeleteProduct(item.id) },
          ],
        )}
      />
      </View>
    </View>
  );
};



export default DetailsScreen;
