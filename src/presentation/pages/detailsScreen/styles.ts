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
      fontSize: 15,
      marginBottom: 15,
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
  });
  export default styles