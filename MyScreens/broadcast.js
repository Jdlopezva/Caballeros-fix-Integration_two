import React, { Component } from 'react'

import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    Alert,
    ScrollView,
    FlatList,
    Button,
    SafeAreaView,
    StatusBar
  } from 'react-native'

  import { hideNavigationBar } from 'react-native-navigation-bar-color'
  import commonFontStyle from '../styles/fonts/fontStyleProvider'
  import Icon from 'react-native-vector-icons/FontAwesome5'
  
  var notFour = require('../src/notfour.png')
  const broadOne = require('../src/broad-1.png')
  const broadTwo = require('../src/broad-2.png')
  const broadTree = require('../src/broad-3.png')
  const broadFour = require('../src/broad-4.png')
  const broadFive = require('../src/broad-5.png')

  export default class Broadcast extends Component {
      render() {
          hideNavigationBar()
          return (
              <SafeAreaView>
                  <ScrollView>
                      <View style={{ paddingTop: 24 }}>
                          <Text style={styles.boldText}>Transmisiones en Vivo</Text>
                      </View>
                      <View>
                          <Text style={{...styles.titleText, marginLeft: 10}}>
                              Lunes a Viernes
                          </Text>
                      </View>
                      <View style={styles.cardContainer}>
                          <Image
                              source={broadOne}
                              style={styles.broadImage}
                          />
                          <Text style={styles.cardText}> Misa de 10:00am</Text>
                          <View style={{ flexDirection: "row" }}>
                              <View style={{ padding: 0, bottom: 10 }}>
                                  <Icon name="instagram" size={25} color="#900"
                                      onPress={() => Alert.alert('Social Link Button Pressed')}
                                  />
                              </View>
                              <View style={{ marginLeft: 20, padding: 0, bottom: 10 }}>
                                  <Icon name="youtube" size={25} color="#900" 
                                    onPress={() => Alert.alert('Social Link Button Pressed')}
                                  />
                              </View>
                          </View>
                      </View>
                      <View>
                          <Text style={{ ...styles.titleText, marginTop: 25, marginLeft: 10}}>
                              Sábado
                          </Text>
                      </View>
                      <ScrollView horizontal={true}>
                          <View style={{ ...styles.cardContainer }}>
                              <Image
                                  source={broadTwo}
                                  style={styles.broadImage}
                              />
                              <Text style={styles.cardText}> Misa de 8:00am</Text>
                              <View style={{ flexDirection: "row" }}>
                                  <View style={{ padding: 0, bottom: 10 }}>
                                      <Icon name="instagram" size={25} color="#900" />
                                  </View>
                                  <View style={{ marginLeft: 20, padding: 0, bottom: 10 }}>
                                      <Icon name="youtube" size={25} color="#900" />
                                  </View>
                              </View>
                          </View>
                          <View style={{ ...styles.cardContainer, marginLeft: 0 }}>
                              <Image
                                  source={broadTree}
                                  style={styles.broadImage}
                              />
                              <Text style={styles.cardText}> Misa de 10:00am</Text>
                              <View style={{ flexDirection: "row" }}>
                                  <View style={{ padding: 0, bottom: 10 }}>
                                      <Icon name="instagram" size={25} color="#900" />
                                  </View>
                                  <View style={{ marginLeft: 20, padding: 0, bottom: 10 }}>
                                      <Icon name="youtube" size={25} color="#900" />
                                  </View>
                              </View>
                          </View>
                          <View style={{ ...styles.cardContainer, marginLeft: 0 }}>
                              <Image
                                  source={broadFour}
                                  style={styles.broadImage}
                              />
                              <Text style={styles.cardText}> Misa de 12:00pm</Text>
                              <View style={{ flexDirection: "row" }}>
                                  <View style={{ padding: 0, bottom: 10 }}>
                                      <Icon name="instagram" size={25} color="#900" />
                                  </View>
                                  <View style={{ marginLeft: 20, padding: 0, bottom: 10 }}>
                                      <Icon name="youtube" size={25} color="#900" />
                                  </View>
                              </View>
                          </View>
                          <View style={{ ...styles.cardContainer, marginLeft: 0 }}>
                              <Image
                                  source={broadFive}
                                  style={styles.broadImage}
                              />
                              <Text style={styles.cardText}> Misa de 10:00am</Text>
                              <View style={{ flexDirection: "row" }}>
                                  <View style={{ padding: 0, bottom: 10 }}>
                                      <Icon name="instagram" size={25} color="#900" />
                                  </View>
                                  <View style={{ marginLeft: 20, padding: 0, bottom: 10 }}>
                                      <Icon name="youtube" size={25} color="#900" />
                                  </View>
                              </View>
                          </View>
                          <View style={{ ...styles.cardContainer, marginLeft: 0 }}>
                              <Image
                                  source={notFour}
                                  style={styles.broadImage}
                              />
                              <Text style={styles.cardText}> Misa de 10:00am</Text>
                              <View style={{ flexDirection: "row" }}>
                                  <View style={{ padding: 0, bottom: 10 }}>
                                      <Icon name="instagram" size={25} color="#900"/>
                                  </View>
                                  <View style={{ marginLeft: 20, padding: 0, bottom: 10 }}>
                                      <Icon name="youtube" size={25} color="#900" />
                                  </View>
                              </View>
                          </View>
                          
                      </ScrollView>
                      
                      <View>
                          <Text style={{ ...styles.titleText, marginTop: 25, marginLeft: 10 }}>
                              Domingo
                          </Text>
                      </View>
                      <ScrollView horizontal={true}>
                          <View style={{ ...styles.cardContainer }}>
                              <Image
                                  source={broadFive}
                                  style={styles.broadImage}
                              />
                              <Text style={styles.cardText}> Misa de 8:00am</Text>
                              <View style={{ flexDirection: "row" }}>
                                  <View style={{ padding: 0, bottom: 10 }}>
                                      <Icon name="instagram" size={25} color="#900" />
                                  </View>
                                  <View style={{ marginLeft: 20, padding: 0, bottom: 10 }}>
                                      <Icon name="youtube" size={25} color="#900" />
                                  </View>
                              </View>
                          </View>
                          <View style={{ ...styles.cardContainer, marginLeft: 0 }}>
                              <Image
                                  source={broadFour}
                                  style={styles.broadImage}
                              />
                              <Text style={styles.cardText}> Misa de 10:00am</Text>
                              <View style={{ flexDirection: "row" }}>
                                  <View style={{ padding: 0, bottom: 10 }}>
                                      <Icon name="instagram" size={25} color="#900" />
                                  </View>
                                  <View style={{ marginLeft: 20, padding: 0, bottom: 10 }}>
                                      <Icon name="youtube" size={25} color="#900" />
                                  </View>
                              </View>
                          </View>
                          <View style={{ ...styles.cardContainer, marginLeft: 0 }}>
                              <Image
                                  source={broadTree}
                                  style={styles.broadImage}
                              />
                              <Text style={styles.cardText}> Misa de 12:00pm</Text>
                              <View style={{ flexDirection: "row" }}>
                                  <View style={{ padding: 0, bottom: 10 }}>
                                      <Icon name="instagram" size={25} color="#900" />
                                  </View>
                                  <View style={{ marginLeft: 20, padding: 0, bottom: 10 }}>
                                      <Icon name="youtube" size={25} color="#900" />
                                  </View>
                              </View>
                          </View>
                          <View style={{ ...styles.cardContainer, marginLeft: 0 }}>
                              <Image
                                  source={notFour}
                                  style={styles.broadImage}
                              />
                              <Text style={styles.cardText}> Misa de 10:00am</Text>
                              <View style={{ flexDirection: "row" }}>
                                  <View style={{ padding: 0, bottom: 10 }}>
                                      <Icon name="instagram" size={25} color="#900" />
                                  </View>
                                  <View style={{ marginLeft: 20, padding: 0, bottom: 10 }}>
                                      <Icon name="youtube" size={25} color="#900" />
                                  </View>
                              </View>
                          </View>
                          <View style={{ ...styles.cardContainer, marginLeft: 0 }}>
                              <Image
                                  source={notFour}
                                  style={styles.broadImage}
                              />
                              <Text style={styles.cardText}> Misa de 10:00am</Text>
                              <View style={{ flexDirection: "row" }}>
                                  <View style={{ padding: 0, bottom: 10 }}>
                                      <Icon name="instagram" size={25} color="#900" />
                                  </View>
                                  <View style={{ marginLeft: 20, padding: 0, bottom: 10 }}>
                                      <Icon name="youtube" size={25} color="#900" />
                                  </View>
                              </View>
                          </View>
                      </ScrollView>
                  </ScrollView>
              </SafeAreaView>
          )
      }
  }

const styles = {
    ...commonFontStyle,
    cardContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginStart: 20,
        marginEnd: 20,
        marginTop: 30,
        borderColor:"#E0E0E0",
        borderWidth:1,
        borderRadius: 20,
        width: 122,
        height: 124
    },
    cardText: {
        
        top: "-20%",
        left: '-1%'
    },
    broadImage: {
        height: 62, 
        width: 122, 
        borderTopLeftRadius: 20, 
        borderTopRightRadius: 20, 
        top: "-25%"
    }
}