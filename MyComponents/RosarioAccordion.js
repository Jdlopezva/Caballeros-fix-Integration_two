import React from 'react'
import { View, Text, Image } from 'react-native'
import { List } from 'react-native-paper'
import Icon from 'react-native-vector-icons/FontAwesome5'


import commonFontStyle from '../styles/fonts/fontStyleProvider'

const dolorosos = require('../src/dolorosos-1.webp')
const dolorosos2 = require('../src/dolorosos-2.webp')
const dolorosos3 = require('../src/dolorosos-3.webp')
const dolorosos4 = require('../src/dolorosos-4.webp')
const dolorosos5 = require('../src/dolorosos-5.webp')
const dolorosos6 = require('../src/dolorosos-6.webp')

export default function RosarioAccordion() {
    const [expanded, setExpanded] = React.useState(true)
    const handlePress = () => setExpanded(!expanded)
    return (
        <View style={{ marginLeft: 15 , marginTop: '-15%'}}>
            <List.Section title="">
            <List.Accordion
                    title="Ofrecimiento del Rosario"
                    left={props => <Icon name="microphone" />}
                    expanded={expanded}
                    onPress={handlePress}>
                    <Image source={dolorosos} style={{ width: 291, height: 200, marginLeft: '10%'}}/>
                    <View style={{ marginLeft: '-1%', paddingVertical: 0, width: 350}}>
                    <Text style={{ marginVertical: 10, fontWeight: 'bold', fontSize: 20 }}>
                    Ofrecimiento del Rosario 
                    </Text>
                    <Text>
                    Me uno a todos los santos que están el cielo, a todos los justos que están en la tierra, a todas las almas fieles que están en este lugar.
                    </Text>
                    <Text>
                    Me uno a Vos oh Jesús, para alabar dignamente a vuestra Santa Madre y alabaros a Vos en Ella y por Ella.
                    </Text>
                    <Text>
                    Renuncio a todas las distracciones que me vinieren durante este rosario, que quiero recitar con modestia, atención y devoción como si fuera el ultimo de mi vida. Amén.
                    </Text>
                    <Text style={{ marginVertical: 10, fontWeight: 'bold', fontSize: 20 }}>
                    Señal de la Cruz
                    </Text>
                    <Text>
                    Por la señal de la Santa Cruz, de nuestros enemigos, líbranos Señor, Dios nuestro.
                    </Text>
                    <Text>
                    En el nombre del Padre y del Hijo y del Espíritu Santo. Amén.
                    </Text>
                    </View>
                </List.Accordion>
                <List.Accordion
                    title="Primer Misterio Doloroso"
                    left={props => <Icon name="microphone" />}>
                    <Image source={dolorosos2} style={{ width: 291, height: 200,marginLeft: '10%' }}/>
                    <View style={{ marginLeft: '-2%', paddingVertical: 0, width: '80%'}}>
                    <Text style={{ marginVertical: 10, fontWeight: 'bold', fontSize: 20 }}>
                    En el primer Misterio Doloroso contemplamos la Agonía de Jesús en el Huerto de los Olivos
                    </Text>
                    <Text>
                    Las oraciones de Jesús al Padre constituyen una de las más bellas escenas del Evangelio. ¿Dónde encontrar en toda la obra de la creación, un relacionamiento con Dios tan rico cuanto aquél? Jesús es para nosotros el divino ejemplo y consejero. Aprendamos de Él a rezar para no caer en tentación. Por este Misterio pidamos la intercesión de la Santísima Virgen para obtener la gracia de beneficiarnos plenamente de las oraciones de Jesús, en especial de ésta, hecha en el Huerto de los Olivos, y así seamos contemplativos con Él.
                    </Text>
                    <Text style={{ marginTop: 10}}>
                     * (Pausa para meditación)
                    </Text>
                    <Text style={{ marginTop: 5}}>
                     * Padre Nuestro,
                    </Text>
                    <Text style={{ marginTop: 5}}>
                     * 10 Ave Marías,
                    </Text>
                    <Text style={{ marginTop: 5}}>
                     * Gloria al Padre, y al Hijo, y al Espíritu Santo. Como era en el principio, ahora y siempre, y por los siglos de los siglos. Amén.
                    </Text>
                    <Text style={{ marginTop: 5}}>
                     * Oh! Jesús mío, perdona nuestras culpas, líbranos del fuego del infierno, lleva al Cielo a todas las almas, y socorre especialmente a las más necesitadas de tu Misericordia.
                    </Text>
                    </View>
                </List.Accordion>
                <List.Accordion
                    title="Segundo Misterio Doloroso"
                    left={props => <Icon name="microphone" />}>
                    <Image source={dolorosos3} style={{ width: 291, height: 200,marginLeft: '10%'  }}/>
                    <View style={{ marginLeft: '-2%', paddingVertical: 0 ,width: '80%' }}>
                    <Text style={{ marginVertical: 10, fontWeight: 'bold', fontSize: 20, marginLeft: '1%' }}>
                    En el segundo misterio doloroso contemplamos la sangrienta flagelación de jesús
                    </Text>
                    <Text>
                    En este misterio Pilatos manda a flagelar a Jesús por temor a las autoridades judías. Esta es la actitud frecuente de todos los que buscan una posición neutra entre el bien y el mal: en situaciones críticas prefieren de cierta manera sacrificar algo del bien, en busca de un ablandamiento del mal. Como Pilatos no encontró crimen alguno en Jesús, lo mandó flagelar. Por este Misterio, pidamos la intercesión de la Santísima Virgen para obtener la gracia de siempre atender con entusiasmo y perfección a los llamados de Dios, a fin de no seguir jamás el ejemplo de Pilatos, mandando flagelar a Jesús.
                    </Text>
                    <Text style={{ marginTop: 10}}>
                     * (Pausa para meditación)
                    </Text>
                    <Text style={{ marginTop: 5}}>
                     * Padre Nuestro,
                    </Text>
                    <Text style={{ marginTop: 5}}>
                     * 10 Ave Marías,
                    </Text>
                    <Text style={{ marginTop: 5}}>
                     * Gloria al Padre, y al Hijo, y al Espíritu Santo. Como era en el principio, ahora y siempre, y por los siglos de los siglos. Amén.
                    </Text>
                    <Text style={{ marginTop: 5}}>
                     * Oh! Jesús mío, perdona nuestras culpas, líbranos del fuego del infierno, lleva al Cielo a todas las almas, y socorre especialmente a las más necesitadas de tu Misericordia.
                    </Text>
                    </View>
                </List.Accordion>
                <List.Accordion
                    title="Tercer Misterio Doloroso"
                    left={props => <Icon name="microphone" />}>
                    <Image source={dolorosos4} style={{ width: 291, height: 200, marginLeft: '10%'}}/>
                    <View style={{ marginLeft: '-2%', paddingVertical: 0, width: '80%'  }}>
                    <Text style={{ marginVertical: 10, fontWeight: 'bold', fontSize: 20 }}>
                    En el tercer misterio doloroso contemplamos la coronación de espinas de jesús
                    </Text>
                    <Text>
                    Por este Misterio, pidamos la intercesión de la Santísima Virgen para obtener la gracia de soportar con humildad y resignación las injurias y ofensas, aunque sean injustas, manteniendo siempre como Jesús un alto sentido de nuestra dignidad
                    </Text>
                    <Text style={{ marginTop: 10}}>
                     * (Pausa para meditación)
                    </Text>
                    <Text style={{ marginTop: 5}}>
                     * Padre Nuestro,
                    </Text>
                    <Text style={{ marginTop: 5}}>
                     * 10 Ave Marías,
                    </Text>
                    <Text style={{ marginTop: 5}}>
                     * Gloria al Padre, y al Hijo, y al Espíritu Santo. Como era en el principio, ahora y siempre, y por los siglos de los siglos. Amén.
                    </Text>
                    <Text style={{ marginTop: 5}}>
                     * Oh! Jesús mío, perdona nuestras culpas, líbranos del fuego del infierno, lleva al Cielo a todas las almas, y socorre especialmente a las más necesitadas de tu Misericordia.
                    </Text>
                    </View>
                </List.Accordion>
                <List.Accordion
                    title="Cuarto Misterio Doloroso"
                    left={props => <Icon name="microphone" />}>
                    <Image source={dolorosos5} style={{ width: 291, height: 200, marginLeft: '10%' }}/>
                    <View style={{ marginLeft: '-2%', paddingVertical: 0 ,width: '80%'  }}>
                    <Text style={{ marginVertical: 10, fontWeight: 'bold', fontSize: 20 }}>
                    En el Cuarto Misterio Doloroso contemplamos a Jesús con la Cruz a Cuestas Camino del Calvario
                    </Text>
                    <Text>
                    Inmediatamente después de haber sido condenado por Pilatos, Nuestro Señor Jesucristo tomó la cruz sobre los hombros para llevarla al Calvario y en ella morir crucificado. La cargó sin manifestar repugnancia alguna; antes por el contrario, la abrazó con amor indecible, pues deseaba levantar bien alto el estandarte bajo el cual deberían alistarse sus seguidores en esta tierra. Bajo su peso, Jesús alcanzaba nuestra salvación; y con su ejemplo, nos daba fuerza para que abrazásemos nuestra propia cruz, y de esta manera venciésemos las pruebas de esta vida. Es a través de la cruz que con Él compartiremos después el Reino de los cielos.
                    </Text>
                    <Text style={{ marginTop: 10}}>
                     * (Pausa para meditación)
                    </Text>
                    <Text style={{ marginTop: 5}}>
                     * Padre Nuestro,
                    </Text>
                    <Text style={{ marginTop: 5}}>
                     * 10 Ave Marías,
                    </Text>
                    <Text style={{ marginTop: 5}}>
                     * Gloria al Padre, y al Hijo, y al Espíritu Santo. Como era en el principio, ahora y siempre, y por los siglos de los siglos. Amén.
                    </Text>
                    <Text style={{ marginTop: 5}}>
                     * Oh! Jesús mío, perdona nuestras culpas, líbranos del fuego del infierno, lleva al Cielo a todas las almas, y socorre especialmente a las más necesitadas de tu Misericordia.
                    </Text>
                    </View>
                </List.Accordion>
                <List.Accordion
                    title="Quinto Misterio Doloroso"
                    left={props => <Icon name="microphone" />}>
                    <Image source={dolorosos6} style={{ width: 291, height: 200, marginLeft: '10%'}}/>
                    <View style={{ marginLeft: '-2%', paddingVertical: 0 , width: '80%'  }}>
                    <Text style={{ marginVertical: 10, fontWeight: 'bold', fontSize: 20 }}>
                    En el Quinto Misterio Doloroso contemplamos la Crucifición y Muerte de Jesús
                    </Text>
                    <Text>
                    “Llegados al lugar llamado Calvario, le crucificaron. (…) Jesús decía: Padre, perdónales, porque no saben lo que hacen (…). Era ya cerca de la hora sexta cuando, al eclipsarse el sol, hubo oscuridad sobre toda la tierra hasta la hora nona (…). Jesús, dando un fuerte grito, dijo: Padre, en tus manos encomiendo mi espíritu y, dicho esto, expiró.” “Como le vieron muerto, no le quebraron las piernas, sino que uno de los soldados le traspasó el costado con una lanza y al instante salió sangre y agua.”
                    </Text>
                    <Text style={{ marginTop: 10}}>
                     * (Pausa para meditación)
                    </Text>
                    <Text style={{ marginTop: 5}}>
                     * Padre Nuestro,
                    </Text>
                    <Text style={{ marginTop: 5}}>
                     * 10 Ave Marías,
                    </Text>
                    <Text style={{ marginTop: 5}}>
                     * Gloria al Padre, y al Hijo, y al Espíritu Santo. Como era en el principio, ahora y siempre, y por los siglos de los siglos. Amén.
                    </Text>
                    <Text style={{ marginTop: 5}}>
                     * Oh! Jesús mío, perdona nuestras culpas, líbranos del fuego del infierno, lleva al Cielo a todas las almas, y socorre especialmente a las más necesitadas de tu Misericordia.
                    </Text>
                    </View>
                </List.Accordion>
                <List.Accordion
                    title="Oraciones Finales"
                    left={props => <Icon name="microphone" />}>
                    <View style={{ marginLeft: '-10%', paddingVertical: 0 }}>
                    <Text style={{ marginVertical: 10, fontWeight: 'bold', fontSize: 20 }}>
                    Oraciones Finales
                    </Text>
                    <Text>
                    * Rezar la Salve.
                    </Text>
                    <Text style={{ marginTop: 10}}>
                     -AudioPlayer Here-
                    </Text>
                    <Text style={{ marginTop: 5}}>
                     * Se puede rezar las Letanías Lauretanas al final de todo el Rosario.
                    </Text>
                    <Text style={{ marginTop: 5}}>
                     -AudioPlayer Here-
                    </Text>
                    </View>
                </List.Accordion>
            </List.Section>
        </View>
      )
}

const styles = {
    ...commonFontStyle
}