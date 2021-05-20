import React, { Component } from 'react';
import {useNavigation } from '@react-navigation/native'

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  FlatList,
  Button
} from 'react-native';
import NotificationButton from '../MyComponents/Notify'

var logo=require('../src/logo-1.png');
var notifi=require('../src/notifications.png');
var intencion= require('../src/Captura.png');
var rosario= require('../src/rosario_card.png');
var rosarioHeader= require('../src/rosario.png');
var evangelioCard = require('../src/evangelio.png');
var santosCard = require('../src/santoscard.png');
var oracionOne = require('../src/manana_one.png');
var oracionTwo = require('../src/jesus_two.png');
var oracionthree = require('../src/magnificat_three.png');
var oracionFour = require('../src/arcangel_four.png');
var oracionFive = require('../src/fatima_five.png');
var iglesia = require('../src/iglesia_fatima.png');


export default function HomeScreen(props) {
    const navigation = useNavigation()
    return (
        
        <View style={styles.container}>
        <ScrollView>
        <View style={{marginTop:40}}></View>
        <NotificationButton
        style={{height:50, width:50}}
         onPress={()=>props.navigation.navigate('Notifications')}
        />
        
        {/* <TouchableOpacity onPress={() => Alert.alert('image clicked')} >
        <Image source={notifi}  
        style={{height:50, width:50}} 
        onPress={() => Alert.alert('Autenticar y enviar a Home ')}        
        style={{height:50, width:50, margin:0 ,marginLeft:'auto' , marginBottom:-50, marginRight:15}}></Image>
        </TouchableOpacity> */}
        
  
        <View style={{flex:1,alignItems: 'center', justifyContent: 'center'}}>
        <Image source={logo}           
        style={{height:80, width:200, margin:20 }}></Image>
        </View>
  
        <View style={{flex:1,alignItems: 'center', justifyContent: 'center'}}>
        <Text style={styles.boldText}> ¡ Salve María !</Text>
  
        </View>
        
        <Text style={styles.normalText}> Bienvenido @NAME Gracias por unirte a la comunidad de los caballeros de la virgen.</Text>
        <Image source={intencion}           
        style={{height:160, width:370 , marginLeft:20, borderRadius:20 }}></Image>
  
        <View style={styles.cardContainer}>
        <Image source={rosarioHeader}           
        style={{height:150, width:'100%', borderRadius:20 }}></Image>
        <Text style={styles.TitleText}> Santo Rosario </Text>
        <Text style={styles.CardText}>La oración más poderosa ante Dios es la que hacemos a través de su Santísima Madre,particularmente el Rosario, en él oramos como nos enseñó y contemplamos la vida de Jesús.</Text>
        <Text style={styles.SeemoreText} onPress={() => props.navigation.navigate('Rosario')}> Ir Ahora </Text>
        </View>
  
        <View style={styles.cardContainer}>
        <Image source={evangelioCard}           
        style={{height:150, width:'100%', borderRadius:20 }}></Image>
        <Text style={styles.TitleText}> Titulo del evangelio diario </Text>
        <Text style={styles.CardText}>La oración más poderosa ante Dios es la que hacemos a través de su Santísima Madre,particularmente el Rosario, en él oramos como nos enseñó y contemplamos la vida de Jesús.</Text>
        <Text style={styles.SeemoreText} onPress={() => props.navigation.navigate('Evangelio')} > Ir Ahora </Text>
        </View>
        
        <View style={styles.cardContainer}>
        <Image source={santosCard}           
        style={{height:150, width:'100%', borderRadius:20 }}></Image>
        <Text style={styles.TitleText}> Santo  diario </Text>
        <Text style={styles.CardText}>La oración más poderosa ante Dios es la que hacemos a través de su Santísima Madre,particularmente el Rosario, en él oramos como nos enseñó y contemplamos la vida de Jesús.</Text>
        <Text style={styles.SeemoreText} onPress={() => props.navigation.navigate('Santo')}> Ir Ahora </Text>
        </View>
        
  
        <Text style={styles.boldText}>   Oraciones </Text>
        <ScrollView horizontal={true}>
  
        <View style={{  height:150, width:170, flex:1,alignItems: 'center', justifyContent: 'center' }}>
        <Image source={oracionOne}           
        style={{height:85, width:85, borderRadius:20, margin:10 }}></Image>
        <Text style={styles.iconsText}> Oración de la mañana </Text>
        </View>
  
        <View style={{  height:150, width:170, flex:1,alignItems: 'center', justifyContent: 'center' }}>
        <Image source={oracionTwo}           
        style={{height:85, width:85, borderRadius:20, margin:10 }}></Image>
        <Text style={styles.iconsText}> Oración a Jesús Sacramentado </Text>
        </View>
  
        <View style={{  height:150, width:150, flex:1,alignItems: 'center', justifyContent: 'center' }}>
        <Image source={oracionthree}           
        style={{height:85, width:85, borderRadius:20, margin:10 }}></Image>
        <Text style={styles.iconsText}> Oracion El Magnificat </Text>
        </View>
  
        <View style={{  height:150, width:180, flex:1,alignItems: 'center', justifyContent: 'center' }}>
        <Image source={oracionFour}           
        style={{height:85, width:85, borderRadius:20, margin:10 }}></Image>
        <Text style={styles.iconsText}> Oración a San Miguel Arcángel</Text>
        </View>
  
  
        <View style={{  height:150, width:180, flex:1,alignItems: 'center', justifyContent: 'center' }}>
        <Image source={oracionFive}           
        style={{height:85, width:85, borderRadius:20, margin:10 }}></Image>
        <Text style={styles.iconsText}> Novena a Nuestra Señora de Fátima </Text>
        </View>
  
        </ScrollView>
  
        <Text style={styles.boldText}>   Iglesia </Text>
        <View style={styles.cardContainer}>
        <Image source={iglesia}           
        style={{height:150,  width:'100%', borderRadius:20 }}></Image>
        <Text style={styles.TitleText}> Iglesia de Nuestra Señora de Fátima </Text>
        <Text style={styles.CardText}>Conoce la ubicación de nuestra iglesia y los horarios de las misas que tenemos disponibles.</Text>
        <Text style={styles.SeemoreText}> Ir Ahora </Text>
        </View>
        <View style={{ padding:40 }}></View>
        </ScrollView>
  
                
  
      </View>
    );
  }

  const styles = StyleSheet.create({
    container:{
      flex:1,
      marginTop:20,
    },
    list: {
      paddingHorizontal: 17,
      backgroundColor:"#FFFFFF",
    },
    separator: {
      marginTop: 10,
    },
    /******** card **************/
    card:{
      shadowColor: '#00000021',
      shadowOffset: {
        width: 2
      },
      shadowOpacity: 0.5,
      shadowRadius: 4,
      marginVertical: 8,
      backgroundColor:"white"
    },
    boldText: {
      marginTop:10,    
      fontFamily:'Nunito-Regular',
      fontWeight: 'bold',
      fontSize: 25,     
      color: "#0D2A4E",   
      padding:10
    },
    iglesiaText: {    
      fontFamily:'Nunito-Regular',
      fontWeight: 'bold',
      fontSize: 25,     
      color: "#0D2A4E",   
      padding:10
    },
    normalText: {
      textAlignVertical: "center",
      textAlign: "left",
      marginBottom:15,
      marginRight:20,
      padding: 20,
      fontWeight: 'normal',
      fontSize: 14,     
      color: "#0D2A4E",   
      fontFamily:'Nunito-Regular',
  
  
  },
  TitleText: {
          
    fontFamily:'Nunito-Regular',
    fontWeight: 'bold',
    fontSize: 20,     
    color: "#0D2A4E",  
    marginTop:10,
    textAlign:'left',
    marginRight:'auto',
    marginStart: 20,
    padding: 5
  },
  cardContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginStart: 20,
    marginEnd: 20,
    marginTop: 30,
    borderColor:"#E0E0E0",
    borderWidth:1,
    borderRadius: 20
  },
  CardText: {
    textAlignVertical: "center",
    textAlign: "left",
    marginBottom:15,
    marginRight:10,
    paddingLeft:25,
    paddingRight: 25,
    fontWeight: 'normal',
    fontSize: 14,     
    color: "#0D2A4E",   
    fontFamily:'Nunito-Regular',
  
  
  },
  iconsText: {
    textAlignVertical: "center",
    textAlign: "left",
    marginBottom:15,
    marginRight:10,
    paddingLeft:25,
    paddingRight: 25,
    fontWeight: 'normal',
    fontSize: 14,     
    color: "#0D2A4E",   
    fontFamily:'Nunito-Regular',
    fontWeight: "bold"
  
  
  },
  SeemoreText: {
    textAlignVertical: "center",
    textAlign: "left",
    marginBottom:15,
    marginRight:10,
    paddingLeft:25,
    paddingRight: 25,
    fontWeight: 'normal',
    fontSize: 14,     
    color: "#D10D0D",   
    fontFamily:'Nunito-Regular',
    marginLeft:'auto',
    textDecorationLine: 'underline'
  
  
  },
  
  
    cardHeader: {
      paddingVertical: 17,
      paddingHorizontal: 16,
      borderTopLeftRadius: 1,
      borderTopRightRadius: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    cardContent: {
      paddingVertical: 12.5,
      paddingHorizontal: 16,
    },
    cardFooter:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingTop: 12.5,
      paddingBottom: 25,
      paddingHorizontal: 16,
      borderBottomLeftRadius: 1,
      borderBottomRightRadius: 1,
      backgroundColor:"#EEEEEE",
    },
    cardImage:{
      flex: 1,
      height: 150,
      width: null,
    },
    /******** card components **************/
    title:{
      fontSize:18,
      flex:1,
    }, 
    description:{
      fontSize:15,
      color:"#888",
      flex:1,
      marginTop:5,
      marginBottom:5,
    },
    time:{
      fontSize:13,
      color: "#808080",
      marginTop: 5
    },
    icon: {
      width:25,
      height:25,
    },
    iconData:{
      width:15,
      height:15,
      marginTop:5,
      marginRight:5
    },
    timeContainer:{
      flexDirection:'row'
    },
    /******** social bar ******************/
    socialBarContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      flex: 1
    },
    socialBarSection: {
      justifyContent: 'center',
      flexDirection: 'row',
      flex: 1,
    },
    socialBarlabel: {
      marginLeft: 8,
      alignSelf: 'flex-end',
      justifyContent: 'center',
    },
    socialBarButton:{
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    }
  });  