import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetailsScreen from './src/presentation/pages/detailsScreen'; 
import ProductList from './src/presentation/pages/ProductList';
import { TouchableOpacity } from 'react-native';
import Foundation from '@expo/vector-icons/Foundation';
import editScreen from './src/presentation/pages/editScreen';
import newProduct from './src/presentation/pages/newProduct';
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={ProductList} options={{ 
          title: 'BANCO',
          headerTitleAlign: 'center', // Alinea el título al centro
          headerStyle: {
            backgroundColor: '#f5f5f5', // Cambia el color de fondo del encabezado si lo deseas
          },
          headerTintColor: '#333', // Cambia el color del texto del título si lo deseas
          headerTitleStyle: {
            fontWeight: 'bold', // Cambia el estilo del texto del título si lo deseas
            fontSize: 20, // Cambia el tamaño de la fuente del título si lo deseas
          },
          headerLeft: () => (
            <TouchableOpacity
              style={{ marginLeft: 90 }}
            >
            <Foundation name="dollar-bill" size={24} color="black" />
            </TouchableOpacity>
          ),
        }} />
        <Stack.Screen name="Details" component={DetailsScreen} options={{ 
          title: 'BANCO',
          headerTitleAlign: 'center', // Alinea el título al centro
          headerStyle: {
            backgroundColor: '#f5f5f5', // Cambia el color de fondo del encabezado si lo deseas
          },
          headerTintColor: '#333', // Cambia el color del texto del título si lo deseas
          headerTitleStyle: {
            fontWeight: 'bold', // Cambia el estilo del texto del título si lo deseas
            fontSize: 20, // Cambia el tamaño de la fuente del título si lo deseas
          },
          headerLeft: () => (
            <TouchableOpacity
              style={{ marginLeft: 90 }}
            >
            <Foundation name="dollar-bill" size={24} color="black" />
            </TouchableOpacity>
          ),
        }} />
        <Stack.Screen name="Edit" component={editScreen} options={{ 
          title: 'BANCO',
          headerTitleAlign: 'center', // Alinea el título al centro
          headerStyle: {
            backgroundColor: '#f5f5f5', // Cambia el color de fondo del encabezado si lo deseas
          },
          headerTintColor: '#333', // Cambia el color del texto del título si lo deseas
          headerTitleStyle: {
            fontWeight: 'bold', // Cambia el estilo del texto del título si lo deseas
            fontSize: 20, // Cambia el tamaño de la fuente del título si lo deseas
          },
          headerLeft: () => (
            <TouchableOpacity
              style={{ marginLeft: 90 }}
            >
            <Foundation name="dollar-bill" size={24} color="black" />
            </TouchableOpacity>
          ),
        }} />
        <Stack.Screen name="New" component={newProduct} options={{ 
          title: 'BANCO',
          headerTitleAlign: 'center', // Alinea el título al centro
          headerStyle: {
            backgroundColor: '#f5f5f5', // Cambia el color de fondo del encabezado si lo deseas
          },
          headerTintColor: '#333', // Cambia el color del texto del título si lo deseas
          headerTitleStyle: {
            fontWeight: 'bold', // Cambia el estilo del texto del título si lo deseas
            fontSize: 20, // Cambia el tamaño de la fuente del título si lo deseas
          },
          headerLeft: () => (
            <TouchableOpacity
              style={{ marginLeft: 90 }}
            >
            <Foundation name="dollar-bill" size={24} color="black" />
            </TouchableOpacity>
          ),
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App