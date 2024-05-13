import { View, Text, SafeAreaView, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import FlatCards from './Components/FlatCards'
import ElevatedCards from './Components/ElevatedCards'
import FancyCard from './Components/FancyCard'
import ActionCard from './Components/ActionCard'
import ContactList from './Components/ContactList'
const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
      {console.log("Aayush")}
      <FlatCards/>
      <ElevatedCards/>
      <FancyCard/>
      <FancyCard/>
      <ActionCard/>
      <ContactList/>
      </ScrollView>
      
    </SafeAreaView>
  )
}


export default App