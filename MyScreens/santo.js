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
import {useNavigation } from '@react-navigation/native'
import commonFontStyle from '../styles/fonts/fontStyleProvider'
import Icon from 'react-native-vector-icons/FontAwesome5'
const bg = require('../src/santo-1.png')

export default function Santo(props) {
    const navigation = useNavigation()
    return (
        <SafeAreaView>
            <View style={{marginTop:40}}></View>
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
                <View style={{ zIndex: 2, position: 'absolute', top: 35, right: 10, flexDirection: 'row', backgroundColor:'white', borderRadius: 20 }} >
                    <Text style={{ top: 11, left: 10}}>
                        Siguiente
                    </Text>
                    <Icon.Button
                        name="chevron-right"
                        size={25}
                        borderRadius={50}
                        backgroundColor="transparent"
                        iconStyle={{ right: '-30%'}}
                        color="#0D2A4E"
                        onPress={() => Alert.alert('Back Button Pressed')}
                    />
                </View>
                <View style={{ ...styles.cardContainer, position: 'absolute' ,marginVertical: 0, paddingBottom: 2, alignItems: 'flex-end', height: 65 ,top: 190, width: '100%', backgroundColor:'#f3f3f3' }} >
                    <Icon
                        name="share-alt" size={16}
                        onPress={() => Alert.alert('Share Button Pressed')}
                    />
                </View>
                <View>
                    <Text style={{ ...styles.boldText, fontSize: 20, zIndex: 3, marginVertical: 0, paddingVertical: 10, marginLeft: 3, top: '-70%', }}>
                        San Juan Bautista de la Salle
                    </Text>
                </View>
                <View style={{ paddingVertical: 0, marginTop: '-10%', marginLeft: 5 }}>
                    <Text style={{ ...styles.normalText, paddingVertical: 0, marginVertical: 0 }}>
                        M I ?? R C O L E S, 7  D E  A B R I L
                    </Text>
                </View>
                <View>
                    <Text style={{ ...styles.normalText, paddingVertical: 0, marginVertical: 0, textAlign: 'justify', fontSize: 12 }}>
                    Santo Patrono de los Maestros Naci?? en Reims, el 30 de abril de 1651 y fue el fundador de los Hermanos de las Escuelas Cristianas. A los 11 a??os de edad recibi?? la tonsura, y a los 16, fue nombrado miembro del cap??tulo de la Catedral de Reims. En 1670, ingres?? en el seminario de San Sulpicio, en Par??s y ocho a??os despu??s fue ordenado sacerdote. Un can??nigo de Reims le confi??, en su lecho de muerte, la direcci??n de una escuela y un orfanatorio de ni??as y el cuidado de las religiosas que estaban bajo su cargo y protecci??n. En 1681 empez?? formando a los 7 profesores que trabajaban en las escuelas. Este fue el principio de lo que en un futuro tomar??a el nombre de "Instituto de los Hermanos de las Escuelas Cristianas". Inaugur?? cuatro escuelas, pero su principal preocupaci??n era la formaci??n de profesores, por lo que en 1687 estableci?? el primer Instituto para la formaci??n de profesores en Reims, al que le siguieron el de Par??s (1699) y el de Saint-Denis (1709). Hacia 1695 escribi?? su tratado sobre la "Direcci??n de Escuelas", en el cual propon??a su sistema educativo que consist??a en reemplazar el m??todo de instrucci??n individual y el llamado "sistema simult??neo". En 1717, San Juan dej?? el cargo de superior y se dedic?? a la formaci??n de los novicios e internos, para quienes escribi?? varios libros, entre ellos un m??todo de oraci??n mental. El santo muere el 7 de abril de 1719, un Santo, a los 76 a??os de edad.
                    </Text>
                </View>
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
        backgroundColor: '#fafafa',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 20
    }
}