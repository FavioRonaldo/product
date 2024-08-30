import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Button, Alert, TextInput } from 'react-native';
import { useRoute } from '@react-navigation/native'; // Importa el hook para acceder a los parámetros de la ruta
import styles from './styles';
import ProductPresenter from './presenter';
import Product from '../../../domain/entities/Product';

const EditScreen = ({ navigation }) => {
  const presenter = new ProductPresenter();
  const route = useRoute(); // Hook para acceder a la ruta actual
  const { item } = route.params; // Obtén el ítem de los parámetros
  const Separator = () => <View style={styles.separator} />;
  const [name, setName] = useState(item.name);
  const [descripcion, setDescripcion] = useState(item._description);
  const [logo, setLogo] = useState(item.logo);
  const [_dateRealease, setDataRealease] = useState(item._dateRealease);
  const [_dateRevision, setDataRevision] = useState(item._dateRevision);
  async function handleEditProduct(item:Product) {
    item.name=name
    item.description=descripcion
    item.logo=logo
    item.dateRealease=_dateRealease
    item.dateRevision=_dateRevision
    //console.log(item)
    const response = await presenter.editProductById(item)
    if (response !== null){
      Alert.alert('Confirmation',
        'El usuario se actualizo con exito',
        [
            { style: 'default', text: 'OK', onPress: () =>  navigation.navigate('Home', {
              onGoBack: () => handleGetProduct(),
            }) },
        ],

      )
    }
    //navigation.navigate('Home', { shouldFetchProduct:true })
  }
  
  return (
    <View style={styles.container}>
      <View >
        <Text style={styles.title}>ID: {item.id}</Text>
        <Text style={styles.subtitle}>Informacion extra</Text>
      </View>
      <Separator />
        <Text style={styles.detailText}>Nombre: </Text>
      <View style={styles.rowText}>
        <TextInput style={styles.input} onChangeText={(newText) => setName(newText)}
          value={name}  
          />
      </View>
        <Text style={styles.detailText}>Descripción: </Text>
      <View style={styles.rowText}>
      <TextInput style={styles.input} onChangeText={(newText) => setDescripcion(newText)}
          value={descripcion}  
          />
      </View>
      <Text style={styles.detailText}>Logo:</Text>
      <View style={styles.rowText} >
      <TextInput style={styles.input} onChangeText={(newText) => setLogo(newText)}
          value={logo}  
          />
      </View>
        <Text style={styles.detailText}>Fecha de Lanzamiento:</Text>
     <View style={styles.rowText}>
     <TextInput style={styles.input} onChangeText={(newText) => setDataRealease(newText)}
          value={_dateRealease}  
          />
      </View>
        <Text style={styles.detailText}>Fecha de Revisión:</Text>
      <View style={styles.rowText}>
      <TextInput style={styles.input} onChangeText={(newText) => setDataRevision(newText)}
          value={_dateRevision}  
          />
      </View>
      <Text>{'\n'}</Text>
      <View style={styles.button}>
      <Button
        title="Enviar"
        color="grey"
        onPress={() =>handleEditProduct(item)}
      />
      </View>
      <View style={styles.button}>
      <Button 
        title="Reiniciar"
        color="#FFD733"
        onPress={() => Alert.alert(
          'Confirmation',
          'Do you want to proceed delete '+item.name+'?',
          [
            { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), },
            { style: 'default', text: 'OK', onPress: () =>  Alert.alert('Button with adjusted color pressed') },
          ],
        )}
      />
      </View>
    </View>
  );
};



export default EditScreen;
