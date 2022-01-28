import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

import Dot from '../../components/Dot';
import SizeButton from '../../components/SizeButton';
import Button from '../../components/Button';
import Footer from '../../components/Footer'

export default function Detail({ navigation }) {

  navigation.setOptions({
    headerTitle: 'Nike Kyrie 6 Basketbol'
  })

 return (
   <ScrollView style={styles.container}>
       <Image
        source={require('../../assets/detail.png')}
        style={styles.image}
        resizeMode="cover"
       />

       <View>
         <View>
           <Text style={[styles.title, {fontSize: 24}]}>R$869,90</Text>
         </View>
         <View opacity={0.3}>
           <Text style={[styles.title, {fontSize: 30}]}>Nike Kyrie 6 Basketbol</Text>
         </View>

        <View style={styles.dotContainer}>
          <Dot color="#2379F4"/>
          <Dot color="#FB6E53"/>
          <Dot color="#DDD"/>
          <Dot color="#000"/>
        </View>

        <View style={{flexDirection: 'row', widtg: '100%'}}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <SizeButton bgColor='#17181A' color='#FFF'>40</SizeButton>
            <SizeButton>37</SizeButton>
            <SizeButton>39</SizeButton>
            <SizeButton>42</SizeButton>
          </ScrollView>
        </View>

        <View style={styles.textContent}>
          <Text style={styles.textTitle}>
          Nike Kyrie 6 Basketbol
          </Text>
          <Text style={styles.textContent}>
            Desenvolvido para o jogo criativo e imprevisível de Kyrie Irving, o Kyrie 6 concentra-se no conforto, controle e amortecimento reativo para ajudá-lo a ir mais rápido e sentir-se fresco. O amortecimento flexível é combinado com espuma macia e de sustentação para proporcionar agilidade e transições suaves entre o calcanhar e a ponta, enquanto a alça no médio pé e gola acolchoada e macia o fazem sentir-se seguro e o ajudam a manter um passo à frente dos adversários.
          </Text>
          <Text style={styles.textList}>
            - Categoria: Amortecimento
          </Text>
          <Text style={styles.textList}>
            - Material: Mesh
          </Text>
        </View>

        <Button />

        <View style={styles.line} />

        <Footer>
          
        </Footer>

       </View>
   </ScrollView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    width: '100%',
    backgroundColor: '#FFF'
  },
  image:{
    width: '100%'
  },
  title:{
    fontFamily: 'Anton_400Regular',
    paddingHorizontal: '2%'
  },
  dotContainer:{
    flexDirection: 'row',
    marginVertical: '7%'
  },
  textContent:{
    fontSize: 16,
    lineHeight: 25,
    marginVertical: '2%',
    paddingHorizontal: '2%'
  },
  textTitle:{
    fontSize: 22,
    marginVertical: '2%'
  },
  textList:{
    fontSize: 16,
    lineHeight: 25
  },
  line:{
    borderWidth: 1,
    borderBottomColor: '#DDD',
    marginVertical: '2%'
  }
});