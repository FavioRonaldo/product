import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: '#f5f5f5',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    detailText: {
      fontSize: 13,
      marginBottom: 2,
      alignContent:'stretch'
    },
    subtitle: {
      fontSize: 13,
      marginBottom: 10,
      color:'grey',
    },
    rowText:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        
    },
    logo:{        
        width: 200, 
        height: 120
    },
    logoContainer:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },
    separator: {
      marginVertical: 8,
      borderBottomColor: '#737373',
      borderBottomWidth: StyleSheet.hairlineWidth,
    },
    button:{
      marginBottom:10
    },
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      borderRadius: 3
    },
  });
  export default styles