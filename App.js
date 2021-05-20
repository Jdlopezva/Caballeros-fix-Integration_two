import React from 'react';
import 'react-native-gesture-handler'
import { Provider as PaperProvider } from 'react-native-paper'
import stateProvider from './helpers/stateProvider'
import MyDrawer from './MyDrawer'

export default function App(){
  stateProvider()
  return(
    <PaperProvider>
      <MyDrawer/>
    </PaperProvider>
  )
}