import React, { Component } from 'react'
import { useNavigation } from '@react-navigation/native'
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

import RosarioAccordion from '../MyComponents/RosarioAccordion'
import commonFontStyle from '../styles/fonts/fontStyleProvider'
import Icon from 'react-native-vector-icons/FontAwesome5'
const bg = require('../src/rosario2.png')

export default function Rosario(props) {
    const navigation = useNavigation()
        return (
            <SafeAreaView>
                <View style={{ marginTop:40}}
                ></View>
                <ScrollView>
                    <View style={{ zIndex: 1 }}>
                        <Image source={bg} style={{ minWidth: '100%', width: '100%' }} />
                    </View>
                    <View style={{ zIndex: 2, position: 'absolute', top: 35, left: 10 }} >
                        <Icon.Button
                            name="chevron-left"
                            size={25}
                            borderRadius={50}
                            backgroundColor="transparent"
                            color="#0D2A4E"
                            onPress={() => props.navigation.navigate('Home')}
                        />
                    </View>
                    <View style={{ ...styles.cardContainer, position: 'absolute' ,marginVertical: 0, paddingBottom: 2, alignItems: 'flex-end', height: 65 ,top: 190, width: '100%', backgroundColor:'#f3f3f3' }} >
                        <Icon
                            name="share-alt" size={16}
                            onPress={() => Alert.alert('Share Button Pressed')}
                        />
                    </View>
                    <View>
                        <Text style={{ ...styles.boldText, zIndex: 3, marginVertical: 0, paddingVertical: 0, marginLeft: 15, top: '-130%', width: 200}}>
                            Santo Rosario
                        </Text>
                    </View>
                    <View style={{ paddingVertical: 0, marginTop: '-10%', marginLeft: 5 }}>
                        <Text style={{ ...styles.normalText, paddingVertical: 0, marginVertical: 0 }}>
                            M I É R C O L E S,  1 0  D E  M A Y O
                        </Text>
                    </View>
                    <View>
                        <Text style={{ ...styles.normalText, paddingVertical: 0, marginVertical: 0, textAlign: 'justify', fontSize: 14 }}>
                            La oración más poderosa ante Dios es la que hacemos a través de su Santísima Madre,particularmente el Rosario, en él oramos como nos enseñó y contemplamos la vida de Jesús.
                        </Text>
                    </View>
                    <View style={{ flex: 1, flexDirection: "row", marginLeft: 20 }}>
                        <ScrollView horizontal={true}>
                        <View style={{ width: 120 }}>
                            <TouchableOpacity
                                style={{ backgroundColor: '#3d7cc0' }}
                                onPress={() => Alert.alert('Button Pressed')} >
                                <Text style={{ color: 'white', fontSize: 12, paddingVertical: 10, paddingHorizontal: 2 , width:250}}>Misterios Gloriosos  <Icon name="cross" color="white" /></Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ marginLeft: 5, width: 120 }}>
                            <TouchableOpacity
                                style={{ backgroundColor: '#3d7cc0' }}
                                onPress={() => Alert.alert('Button Pressed')} >
                                <Text style={{ color: 'white', fontSize: 12, paddingVertical: 10, paddingHorizontal: 2 ,width:250 }}>Misterios Gozosos  <Icon name="cross" color="white" /></Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ marginLeft: 5, width: 125 }}>
                            <TouchableOpacity
                                style={{ backgroundColor: '#3d7cc0' }}
                                onPress={() => Alert.alert('Button Pressed')} >
                                <Text style={{ color: 'white', fontSize: 12, paddingVertical: 10, paddingHorizontal: 1, width:250 }}>Misterios Luminosos <Icon name="cross" color="white" /></Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ marginLeft: 5, width: 120 }}>
                            <TouchableOpacity
                                style={{ backgroundColor: '#3d7cc0' }}
                                onPress={() => Alert.alert('Button Pressed')} >
                                <Text style={{ color: 'white', fontSize: 12, paddingVertical: 10, paddingHorizontal: 1,width:250 }}>Misterios Dolorosos <Icon name="cross" color="white" /></Text>
                            </TouchableOpacity>
                        </View>
                        </ScrollView>
                        <View style={{ top: '-1%', width: 50 }}>
                            <Icon.Button
                                name="chevron-right"
                                size={25}
                                borderRadius={50}
                                backgroundColor="transparent"
                                color="#0D2A4E"
                                onPress={() => Alert.alert('Back Button Pressed')}
                            />
                        </View>
                    </View>
                    <View>
                        <Text style={{ ...styles.normalText, marginLeft: 5, fontSize: 20 }}>
                            Misterios Gozosos
                        </Text>
                    </View>
                    <RosarioAccordion />
                </ScrollView>
            </SafeAreaView>
        )
}

const styles = {
    ...commonFontStyle,
    cardContainer: {
        flex: 1,
        zIndex: 2,
        top: '-5%',
        backgroundColor: '#f3f3f3',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 20
    }
}