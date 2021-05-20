import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList
} from 'react-native'
import { useNavigation } from '@react-navigation/native'

var oracionManana=require('../src/notone.png')
//const navigation = useNavigation()
export default class NotificationScreen extends Component {
    
  constructor(props) {
    super(props)
    this.state = {
      data:[
        {id:3, image: "https://i.postimg.cc/CxFfzKCp/one.png", name:"Oraciones de la Mañana", text:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.", attachment:"https://i.postimg.cc/5jdmFM4Q/oracion.png"},
        {id:2, image: "https://i.postimg.cc/RZXJfzG6/two.png", name:"Evangelio",     text:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.", attachment:"https://i.postimg.cc/vBMF5Dhb/Recurso-1-1-1.png"},
        {id:4, image: "https://i.postimg.cc/R0Y3sQkv/three.png", name:"Ángelus",  text:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.", attachment:"https://i.postimg.cc/5jdmFM4Q/oracion.png"},
        {id:5, image: "https://i.postimg.cc/MTjnhfwV/four.png", name:"Rosario",  text:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.", attachment:"https://i.postimg.cc/63QKFkNZ/rosarioicon.png"},
        {id:1, image: "https://i.postimg.cc/25yb7XXH/five.png", name:"Oraciones de la Noche",    text:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.", attachment:"https://i.postimg.cc/5jdmFM4Q/oracion.png"},
        {id:6, image: "https://i.postimg.cc/D0ZMvhCr/img-1-1.png", name:"Misa de 10 am", text:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.", attachment:"https://i.postimg.cc/5jdmFM4Q/oracion.png"},
        {id:7, image: "https://bootdey.com/img/Content/avatar/avatar5.png", name:"The googler",      text:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.", attachment:""},
      ]
    }
  }

  render() {
    return (
      
      <FlatList
        style={{ ...styles.root, paddingTop: 40 }}
        data={this.state.data}
        extraData={this.state}
        ItemSeparatorComponent={() => {
          return (
            
            <View style={styles.separator}/>
          )
        }}
        keyExtractor={(item)=>{
          return item.id
        }}
        renderItem={(item) => {
          const Notification = item.item
          let attachment = <View/>

          let mainContentStyle
          if(Notification.attachment) {
            mainContentStyle = styles.mainContent
            attachment = <Image style={styles.attachment} source={{uri:Notification.attachment}}/>
          }
          return(
            
            <View style={styles.container}>
              <Image source={{uri:Notification.image}} style={styles.avatar}/>
              <View style={styles.content}>
                <View style={mainContentStyle}>
                  <View style={styles.text}>
                    <Text style={styles.name}>{Notification.name}</Text>
                    <Text>{Notification.text}</Text>
                  </View>
                  <Text style={styles.timeAgo}>
                    2 hours ago
                  </Text>
                </View>
                {attachment}
              </View>
            </View>
          )
        }}/>
    )
  }
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: "#FFFFFF"
  },
  container: {
    padding: 16,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: "#FFFFFF",
    alignItems: 'flex-start'
  },
  avatar: {
    width:50,
    height:50,
    borderRadius:25,
  },
  text: {
    marginBottom: 5,
    flexDirection: 'row',
    flexWrap:'wrap',
    fontFamily:'Nunito-Regular'
  },
  content: {
    flex: 1,
    marginLeft: 16,
    marginRight: 0
  },
  mainContent: {
    marginRight: 60
  },
  img: {
    height: 50,
    width: 50,
    margin: 0
  },
  attachment: {
    position: 'absolute',
    right: 0,
    height: 50,
    width: 50
  },
  separator: {
    height: 1,
    backgroundColor: "#CCCCCC"
  },
  timeAgo:{
    fontSize:12,
    color:"#696969"
  },
  name:{
    fontSize:16,
    color:"#0D2A4E",
    fontFamily: 'Nunito-Regular',
    fontWeight:'bold'
  }
}) 
                   