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

import commonFontStyle from '../styles/fonts/fontStyleProvider'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { hideNavigationBar } from 'react-native-navigation-bar-color'

export default function Evangelio(props) {
    const navigation = useNavigation()
    return (
        <SafeAreaView>
            <ScrollView>
            <View></View>
                <View style={{ ...styles.container }}>
                    <View style={{ flexDirection: 'row', zIndex: 1, paddingTop: 24 }}>
                        <Icon.Button
                            name="chevron-left"
                            size={30}
                            iconStyle={{ marginLeft: 10, marginRight: 0, marginTop: 19 }}
                            backgroundColor="transparent"
                            onPress={() => props.navigation.navigate('Home')}
                        />
                        <Text style={{ ...styles.boldText, color: 'white', marginTop: 15 }}>
                            Evangelio del día
                        </Text>
                        <Icon.Button
                            name="share-alt"
                            size={18}
                            iconStyle={{ top: 13, left: 18 }}
                            borderRadius={100}
                            backgroundColor="transparent"
                            color="#0D2A4E"
                            onPress={() => Alert.alert('Back Button Pressed')}
                        />
                    </View>
                    <Text style={{ ...styles.normalText, paddingVertical: 0, marginVertical: 0, color:'white', paddingBottom:40 }}>
                            M I É R C O L E S,  1 0  D E  M A Y O
                        </Text>
                    <View
                        style={{ position: 'absolute', height: 30, width: 30, backgroundColor: 'white', borderRadius: 40, right: 14, top: 40, zIndex: 0 }}
                    />
                    <View>
                        <Text style={{ ...styles.normalText, color: 'white', marginBottom: 0, paddingBottom: 1 }}>
                            Primera lectura
                            Lectura del libro de los Hechos de los apóstoles (3,1-10):
                        </Text>
                        <Text style={{ ...styles.normalText, color: 'white', marginTop: 0, paddingBottom: 0 }}>
                            EN aquellos días, Pedro y Juan subían al tempo, a la oración de la hora nona, cuando vieron traer a cuestas a un lisiado de nacimiento. Solían colocarlo todos los días en la puerta del templo llamada «Hermosa, para que pidiera limosna a los que entraban. Al ver entrar en el templo a Pedro y a Juan, les pidió limosna. Pedro, con Juan a su lado, se quedó mirándolo y le dijo:
                            «Míranos».
                            Clavó los ojos en ellos, esperando que le darían algo. Pero Pedro le dijo:
                            «No tengo plata ni oro, pero te doy lo que tengo: en nombre de Jesucristo Nazareno, levántate y anda».
                            Y agarrándolo de la mano derecha lo incorporó. Al instante se le fortalecieron los pies y los tobillos, se puso en pie de un salto, echó a andar y entró con ellos en el templo por su pie, dando brincos y alabando a Dios. Todo el pueblo lo vio andando y alabando a Dios, y, al caer en la cuenta de que era el mismo que pedía limosna sentado en la puerta Hermosa del templo, quedaron estupefactos y desconcertados ante lo que le había sucedido.
                        </Text>
                        <Text style={{ ...styles.normalText, color: 'white', marginTop: 0, paddingBottom: 0 }}>
                            Palabra de Dios{'\n'}
                            Salmo{'\n'}
                            Sal 104,1-2.3-4.6-7.8-9
                        </Text>
                        <Text style={{ ...styles.normalText, color: 'white', marginTop: 0, paddingBottom: 0 }}>
                            R/. Que se alegren los que buscan al Señor
                        </Text>
                        <Text style={{ ...styles.normalText, color: 'white', marginTop: 0, paddingBottom: 0 }}>
                            Dad gracias al Señor, invocad su nombre,
                            dad a conocer sus hazañas todos los pueblos.
                            Cantadle al son de instrumentos,
                            hablad de sus maravillas. R/.
                        </Text>
                        <Text style={{ ...styles.normalText, color: 'white', marginTop: 0, paddingBottom: 0 }}>
                            Gloriaos de su nombre santo,
                            que se alegren los que buscan al Señor.
                            Recurrid al Señor y a su poder,
                            buscad continuamente su rostro. R/
                        </Text>
                        <Text style={{ ...styles.normalText, color: 'white', marginTop: 0, paddingBottom: 0 }}>
                            ¡Estirpe de Abrahán, su siervo;
                            hijos de Jacob, su elegido!
                            El Señor es nuestro Dios,
                            él gobierna toda la tierra. R/.
                        </Text>
                        <Text style={{ ...styles.normalText, color: 'white', marginTop: 0, paddingBottom: 0 }}>
                            Se acuerda de su alianza eternamente,
                            de la palabra dada, por mil generaciones;
                            de la alianza sellada con Abrahán,
                            del juramento hecho a Isaac. R/.
                        </Text>
                        <Text style={{ ...styles.normalText, color: 'white', marginTop: 0, paddingBottom: 0 }}>
                            Secuencia {'\n'}
                            (Opcional)
                        </Text>
                        <Text style={{ ...styles.normalText, color: 'white', marginTop: 0, paddingBottom: 0 }}>
                            Ofrezcan los cristianos
                            ofrendas de alabanza
                            a gloria de la Víctima
                            propicia de la Pascua.
                        </Text>
                        <Text style={{ ...styles.normalText, color: 'white', marginTop: 0, paddingBottom: 0 }}>
                            Cordero sin pecado
                            que a las ovejas salva,
                            a Dios y a los culpables
                            unió con nueva alianza.
                        </Text>
                        <Text style={{ ...styles.normalText, color: 'white', marginTop: 0, paddingBottom: 0 }}>
                            Lucharon vida y muerte
                            en singular batalla,
                            y, muerto el que es la Vida,
                            triunfante se levanta.
                        </Text>
                        <Text style={{ ...styles.normalText, color: 'white', marginTop: 0, paddingBottom: 0 }}>
                            «¿Qué has visto de camino,
                            María, en la mañana?»
                            «A mi Señor glorioso,
                            la tumba abandonada,
                        </Text>
                        <Text style={{ ...styles.normalText, color: 'white', marginTop: 0, paddingBottom: 0 }}>
                            los ángeles testigos,
                            sudarios y mortaja.
                            ¡Resucitó de veras
                            mi amor y mi esperanza!
                        </Text>
                        <Text style={{ ...styles.normalText, color: 'white', marginTop: 0, paddingBottom: 0 }}>
                            Venid a Galilea,
                            allí el Señor aguarda;
                            allí veréis los suyos
                            la gloria de la Pascua.»
                        </Text>
                        <Text style={{ ...styles.normalText, color: 'white', marginTop: 0, paddingBottom: 0 }}>
                            Primicia de los muertos,
                            sabemos por tu gracia
                            que estás resucitado;
                            la muerte en ti no manda.
                        </Text>
                        <Text style={{ ...styles.normalText, color: 'white', marginTop: 0, paddingBottom: 0 }}>
                            Rey vencedor, apiádate
                            de la miseria humana
                            y da a tus fieles parte
                            en tu victoria santa.
                            Evangelio de hoy
                            Lectura del santo evangelio según san Lucas (24,13-35):
                        </Text>
                        <Text style={{ ...styles.normalText, color: 'white', marginTop: 0, paddingBottom: 0 }}>
                            AQUEL mismo día, el primero de la semana, dos de los discípulos de Jesús iban caminando a una aldea llamada Emaús, distante de Jerusalén unos setenta estadios; iban conversando entre ellos de todo lo que había sucedido. Mientras conversaban y discutían, Jesús en persona se acercó y se puso a caminar con ellos. Pero sus ojos no eran capaces de reconocerlo.
                            Él les dijo:
                            «¿Qué conversación es esa que traéis mientras vais de camino?».
                            Ellos se detuvieron con aire entristecido. Y uno de ellos, que se llamaba Cleofás, le respondió:
                            «¿Eres tú el único forastero en Jerusalén que no sabe lo que ha pasado estos días?».
                            Él les dijo:
                            «¿Qué».
                            Ellos le contestaron:
                            «Lo de Jesús el Nazareno, que fue un profeta poderoso en obras y palabras, ante Dios y ante todo el pueblo; cómo lo entregaron los sumos sacerdotes y nuestros jefes para que lo condenaran a muerte, y lo crucificaron. Nosotros esperábamos que él iba a liberar a Israel, pero, con todo esto, ya estamos en el tercer día desde que esto sucedió. Es verdad que algunas mujeres de nuestro grupo nos han sobresaltado, pues habiendo ido muy de mañana la sepulcro, y no habiendo encontrado su cuerpo, vinieron diciendo que incluso habían visto una aparición de ángeles, que dicen que está vivo. Algunos de los nuestros fueron también al sepulcro y lo encontraron como habían dicho las mujeres; pero a él no lo vieron».
                            Entonces él les dijo:
                            «¡Qué necios y torpes sois para creer lo que dijeron los profetas! ¿No era necesario que el Mesías padeciera esto y entrara así en su gloria».
                            Y, comenzado por Moisés y siguiendo por todos los profetas, les explicó lo que se refería a él en todas las Escrituras.
                            Llegaron cerca de la aldea adonde iban y él simuló que iba a seguir caminando; pero ellos lo apremiaron, diciendo:
                            «Quédate con nosotros, porque atardece y el día va de caída».
                            Y entró para quedarse con ellos. Sentado a la mesa con ellos, tomó el pan, pronunció la bendición, lo partió y se lo iba dando. A ellos se les abrieron los ojos y lo reconocieron. Pero él desapareció de su vista.
                            Y se dijeron el uno al otro:
                            «¿No ardía nuestro corazón mientras nos hablaba por el camino y nos explicaba las Escrituras?».
                            Y, levantándose en aquel momento, se volvieron a Jerusalén, donde encontraron reunidos a los Once con sus compañeros, que estaban diciendo:
                            «Era verdad, ha resucitado el Señor y se ha aparecido a Simón».
                            Y ellos contaron lo que les había pasado por el camino y cómo lo habían reconocido al partir el pan.
                        </Text>
                        <Text style={{ ...styles.normalText, color: 'white', marginTop: 0, paddingBottom: 0 }}>
                            Palabra del Señor
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}


const styles = {
    ...commonFontStyle,
    container: {
        flex:1,
        backgroundColor: '#0D2A4E'
    }
}
