import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import Shoes from '../Shoes'

export default function Footer() {
 return (
   <View >
       <Text style={styles.title}>VOCÊ TAMBÉM PODE GOSTAR</Text>
       <View style={{ flexDirection: 'row' }}>
        <ScrollView horizontal sshowsHorizontalScrollIndicator={false}>
            <View style={{ marginHorizontal: 10}}>
                <Shoes img={require('../../assets/1.png')} cost="R$689,99">
                    Nike Joyride Run Flyknit
                </Shoes>
            </View>
            <View style={{ marginHorizontal: 10}}>
                <Shoes img={require('../../assets/3.png')} cost="R$250,90">
                    Adidas Rote
                </Shoes>
            </View>
            <View style={{ marginHorizontal: 10}}>
                <Shoes img={require('../../assets/5.png')} cost="R$999,90">
                    Adidas NMD R1
                </Shoes>
            </View>
        </ScrollView>
       </View>
   </View>
  );
}

const styles = StyleSheet.create({
    title:{
        fontSize: 24,
        fontFamily: 'Anton_400Regular',
        marginVertical: '2%',
        paddingVertical: '2%',
        paddingHorizontal: '2%'
    } 
})