import React, { useEffect } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import Product from '../../../domain/entities/Product';
import styles from './styles';

const today = new Date();
today.setHours(0, 0, 0, 0); 
//const presenter = new ProductPresenter();
// Definir esquema de validación con yup
const schema = ()=>{yup.object().shape({
  id: yup
    .string()
    .required('ID es requerido')
    .min(3, 'ID debe tener al menos 3 caracteres')
    .max(10, 'ID debe tener como máximo 10 caracteres')
    .test('checkIdUnique', 'Este ID ya existe', async (value) => {
      // Aquí deberías reemplazar con una llamada real a un API para verificar la unicidad del ID
      try {        
        const response = await presenter.getProductById(String(value))
      return false
      } catch (error) {
        return true
      }      
    }),
  name: yup
    .string()
    .required('Nombre es requerido')
    .min(3, 'Nombre debe tener al menos 3 caracteres')
    .max(100, 'Name debe tener como máximo 100 caracteres'),
  description: yup
    .string()
    .required('Descripción es requerida')
    .min(10, 'Descripción debe tener al menos 10 caracteres')
    .max(200, 'Descripcion debe tener como máximo 200 caracteres'),
  logo: yup
    .string()
    .required('Logo es requerido'),
  _dateRealease: yup
    .string()
    .required('Fecha es requerida')
    .matches(
      /^\d{4}-\d{2}-\d{2}$/,
      'Fecha inválida, use el formato YYYY-MM-DD'
    )
    .test('isValidDate', 'Fecha inválida', (value) => {
        return !isNaN(Date.parse(value));
      })
    .test('isFutureDate', 'La fecha debe ser mayor a la actual', (value) => {
        const inputDate = new Date(value);
        return inputDate > today;
      }),
  _dateRevision: yup
  .string()
  .required('Fecha es requerida')
  .matches(
    /^\d{4}-\d{2}-\d{2}$/,
    'Fecha inválida, use el formato YYYY-MM-DD'
  )
  .test('isValidDate', 'Fecha inválida', (value) => {
      return !isNaN(Date.parse(value));
    })
  .test('isFutureDate', 'La fecha debe ser mayor a la actual', (value) => {
      const inputDate = new Date(value);
      return inputDate > today;
    })
  .test('isOneYearLater', 'La fecha de revisión debe ser al menos un año mayor que la fecha de lanzamiento', function (value) {
        const { _dateRealease } = this.parent; // Accede a la fecha de lanzamiento desde el mismo objeto
        if (_dateRealease && value) {
          const releaseDate = new Date(_dateRealease);
          const revisionDate = new Date(value);
          releaseDate.setFullYear(releaseDate.getFullYear() + 1); // Agrega un año a la fecha de lanzamiento
          return revisionDate >= releaseDate;
        }
        return true;
      }),
})};

const productForn = ({ navigation,itemProduct }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data:Product) => {
    try {
        const response = await presenter.SaveProdcut(data)
        Alert.alert('Confirmation','EL Producto se guardo correctamente')
        navigation.navigate('Home', { onGoBack: () => handleGetProduct(), }) 
      } catch (error) {
        Alert.alert('Error','No se pdo guardar el producto, '+error)
      }
    // Aquí puedes proceder con el envío del formulario o alguna acción adicional
  };
  useEffect(()=>{
    console.log(errors)
  },[errors])

  return (
    
    <View style={styles.container}>
     <View >
        <Text style={styles.title}>Formulario de registro</Text>
      </View>
      <Controller
        control={control}
        name="id"
        render={({ field: { onChange, onBlur, value } }) => (
          <View>
            <TextInput 
              style={styles.input}
              placeholder="ID"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
            {errors.id && <Text style={styles.error}>{errors.id.message}</Text>}
          </View>
        )}
      />

      <Controller
        control={control}
        name="name"
        render={({ field: { onChange, onBlur, value } }) => (
          <View>
            <TextInput
              style={styles.input}
              placeholder="Nombre"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
            {errors.name && <Text style={styles.error}>{errors.name.message}</Text>}
          </View>
        )}
      />

      <Controller
        control={control}
        name="description"
        render={({ field: { onChange, onBlur, value } }) => (
          <View>
            <TextInput
              style={styles.input}
              placeholder="Descripción"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              multiline
            />
            {errors.description && (
              <Text style={styles.error}>{errors.description.message}</Text>
            )}
          </View>
        )}
      />
      <Controller
        control={control}
        name="logo"
        render={({ field: { onChange, onBlur, value } }) => (
          <View>
            <TextInput
              style={styles.input}
              placeholder="logo"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              multiline
            />
            {errors.logo && (
              <Text style={styles.error}>{errors.logo.message}</Text>
            )}
          </View>
        )}
      />

      <Controller
        control={control}
        name="_dateRealease"
        render={({ field: { onChange, onBlur, value } }) => (
          <View>
            <TextInput
              style={styles.input}
              placeholder="Fecha (YYYY-MM-DD)"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
            {errors._dateRealease && <Text style={styles.error}>{errors._dateRealease.message}</Text>}
          </View>
        )}
      />
      <Controller
        control={control}
        name="_dateRevision"
        render={({ field: { onChange, onBlur, value } }) => (
          <View>
            <TextInput
              style={styles.input}
              placeholder="Fecha (YYYY-MM-DD)"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
            {errors._dateRevision && <Text style={styles.error}>{errors._dateRevision.message}</Text>}
          </View>
        )}
      />

      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </View>
  );
};


export default productForn;
