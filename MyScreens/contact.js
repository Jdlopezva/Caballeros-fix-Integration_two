import React, { Component } from 'react'
import {
    Text,
    View,
    SafeAreaView,
    ScrollView,
    Image
} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome5'

import commonFontStyle from '../../styles/fonts/fontStyleProvider'

const location = require('../src/contact-location.png')
const location2 = require('../src/contact-location-2.png')
const logo = require('../src/logo-1.png')

export default class Contact extends Component {
    render() {
        return (
            <SafeAreaView>
                <ScrollView>
                    <View style={{ flex: 1}}>
                        <Image
                            source={logo}
                            style={{ height: 80, width: 200, margin: 20 }} />
                    </View>

                    <View style={{ width: 290 }}>
                        <Text style={{ ...styles.boldText, marginLeft: 15 }}>
                            Contacto
                        </Text>
                        <Text style={{ ...styles.normalText, fontSize: 11, marginLeft: 5 , paddingBottom: 0, marginBottom: 0}}>
                            Casa Nuestra Señora de Fátima - Bogotá
                        </Text>
                        <Text style={{ ...styles.normalText, fontSize: 11, marginLeft: 5, paddingBottom: 0, marginBottom: 0}}>
                            Calle 75 No. 11 -8 7
                            Barrio El Lago, Bogotá D.C. Colombia
                            P.B.X. (57- 1) 7468787
                            WhatsApp: 321 2059931
                        </Text>
                        <Text style={{ ...styles.normalText, fontSize: 11, marginLeft: 5, paddingBottom: 0, marginBottom: 15}}>
                            Horario de Atención:
                            Visitas a la Virgen y Tienda Mariana
                            Lunes a sábado 9:00 a.m. a 6:00 p.m.
                            Misas Lunes a viernes 4:30 p.m.
                        </Text>
                    </View>
                    <View style={{ marginLeft: 25 }}>
                        <Text style={{ ...styles.normalText, marginLeft: 0, padding: 0 }}>
                            <Icon
                                name="facebook"
                                size={25} /> /loscaballerosdelavirgen
                        </Text>
                        <Text style={{ ...styles.normalText, marginLeft: 0, padding: 0 }}>
                            <Icon
                                name="twitter"
                                size={25} /> @Cab_Virgen
                        </Text>
                    </View>
                    <View>
                        <Text style={{ ...styles.boldText, marginLeft: 15 }}>
                            Cómo llegar
                        </Text>
                        <Image
                            source={location}
                            style={{ width: 375, height: 180, alignSelf: 'center' }}
                            />
                    </View>
                    <View style={{ width: 290 }}>
                        <Text style={{ ...styles.normalText, marginLeft: 5, paddingBottom: 0, marginBottom: 0 }}>
                            MEDELLIN
                        </Text>
                        <Text style={{ ...styles.normalText, fontSize: 11, marginLeft: 5, paddingBottom: 0, marginBottom: 0 }}>
                            Casa Medellin
                        </Text>
                        <Text style={{ ...styles.normalText, fontSize: 11, marginLeft: 5, paddingBottom: 0, marginBottom: 0 }}>
                            Dirección: calle 11 A sur#43A – 49 barrio la Aguacatala.
                            Teléfono: 322 97 57
                            WhatsApp: 311 8125837
                        </Text>
                        <Text style={{ ...styles.normalText, fontSize: 11, marginLeft: 5, paddingBottom: 0, marginBottom: 0 }}>
                            Orden II de Medellín
                        </Text>
                        <Text style={{ ...styles.normalText, fontSize: 11, marginLeft: 5, paddingBottom: 0, marginBottom: 15 }}>
                            Cra. 18 No. 12 sur – 51. Los balsos
                            Barrio el Poblado
                            Tel. 3172603
                        </Text>
                    </View>
                    <View style={{ marginLeft: 25 }}>
                        <Text style={{ ...styles.normalText, marginLeft: 0, padding: 0 }}>
                            <Icon
                                name="facebook"
                                size={25} /> /loscaballerosdelavirgen
                        </Text>
                        <Text style={{ ...styles.normalText, marginLeft: 0, padding: 0 }}>
                            <Icon
                                name="twitter"
                                size={25} /> @Cab_Virgen
                        </Text>
                    </View>
                    <View>
                        <Text style={{ ...styles.boldText, marginLeft: 15 }}>
                            Cómo llegar
                        </Text>
                        <Image
                            source={location2}
                            style={{ width: 375, height: 220, alignSelf: 'center' }}
                            />
                    </View>

                </ScrollView>
            </SafeAreaView>
        )
    }
}

const styles = {
    ...commonFontStyle
}