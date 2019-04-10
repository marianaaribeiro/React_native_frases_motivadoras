import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Alert
  } from 'react-native';
  import { Container, Header, Content, Card, CardItem, Body } from 'native-base';



const btnFrases = () =>{
    var numeroAleatorio = Math.random();
    numeroAleatorio = Math.floor(numeroAleatorio *41)


    //frases
    var frases = Array();
    frases[0] ='"O sucesso nasce do querer, da determinação e persistência em se chegar a um objetivo. Mesmo não atingindo o alvo, quem busca e vence obstáculos, no mínimo fará coisas admiráveis."\n \n José de Alencar';
    frases[1] ='"Determinação, coragem e auto-confiança são fatores decisivos para o sucesso. Se estamos possuídos por uma inabalável determinação, conseguiremos superá-los. Independentemente das circunstâncias, devemos ser sempre humildes, recatados e despidos de orgulho."\n \n Dalai Lama';
    frases[2] ='"Lute. Acredite. Conquiste. Perca. Deseje. Espere. Alcance. Invada. Caia. Seja tudo o quiser ser, mas acima de tudo, seja você sempre."\n \n Tumblr';
    frases[3] ='"Só existe um êxito: a capacidade de levar a vida que se quer."\n \n Cristopher Morley';
    frases[4] ='"A vitalidade é demonstrada não apenas pela persistência, mas pela capacidade de começar de novo."\n \n F. Scott Fitzgerald';
    frases[5] ='"A coragem não é ausência do medo; é a persistência apesar do medo."\n \n Desconhecido';
    frases[6] ='"O homem não teria alcançado o possível se, repetidas vezes, não tivesse tentado o impossível."\n \n Max Weber';
    frases[7] ='"Lute com determinação, abrace a vida com paixão, perca com classe e vença com ousadia, porque o mundo pertence a quem se atreve e a vida é muito para ser insignificante."\n \n Augusto Branco';
    frases[8] ='"Creia em si, mas não duvide sempre dos outros."\n \n Machado de Assis';
    frases[9] ='"Talento é dom, é graça. E sucesso nada tem haver com sorte, mas com determinação e trabalho."\n \n Augusto Branco';
    frases[10] ='"Não deixe que as pessoas te façam desistir daquilo que você mais quer na vida. Acredite. Lute. Conquiste. E acima de tudo, seja feliz!"\n \n Desconhecido';
    frases[11] ='"Para ter um negócio de sucesso, alguém, algum dia, teve que tomar uma atitude de coragem."\n \n Peter Drucker';
    frases[12] ='"Não importa o que você decidiu. O que importa é que isso te faça feliz."\n \n Frasesdobem';
    frases[13] ='"Algumas vezes coisas ruins acontecem em nossas vidas para nos colocar na direção das melhores coisas que poderíamos viver."\n \n Frasesdobem';
    frases[14] ='"Se a vida não ficar mais fácil, trate de ficar mais forte."\n \n Frasesdobem';
    frases[15] ='"Toda conquista começa com a decisão de tentar."\n \n Frasesdobem';
    frases[16] ='"Insista, persista e nunca desista."\n \n Frasesdobem';
    frases[17] ='"Vai. E se der medo, vai com medo mesmo."\n \n Frasesdobem';
    frases[18] ='"Quando algo ruim acontece você tem três escolhas: deixar isso definir você, deixar isso destruir você ou fazer isso te deixar mais forte."\n \n Frasesdobem';
    frases[19] ='"Você é mais forte do que imagina. Acredite."\n \n Frasesdobem';
    frases[20] ='"Imagine uma nova história para sua vida e acredite nela."\n \n Frasesdobem';
    frases[21] ='"Todo esforço tem a sua recompensa."\n \n Frasesdobem';
    frases[22] ='"Se não puder fazer tudo, faça tudo que puder."\n \n Frasesdobem';
    frases[23] ='"O importante não é vencer todos os dias, mas lutar sempre."\n \n Frasesdobem';
    frases[24] ='"Por maior que seja, não há obstáculo que não possa ser superado."\n \n Frasesdobem';
    frases[25] ='"Aquele que não luta para ter o futuro que quer deve aceitar o futuro que vier."\n \n Frasesdobem';
    frases[26] ='"Grandes batalhas só são dadas a grandes guerreiros."\n \n Frasesdobem';
    frases[27] ='"Você não é derrotado quando perde. Você é derrotado quando desiste."\n \n Frasesdobem';
    frases[28] ='"Esqueça os piores momentos da sua vida e faça os melhores se tornarem inesquecíveis."\n \n Frasesdobem';
    frases[29] ='"Sem sacrifício não há vitória."\n \n Frasesdobem';
    frases[30] ='"Seja seu foco. Faça as coisas por você, não pelos outros."\n \n Frasesdobem';
    frases[31] ='"Arrisque, tente, permita-se, mostre para si mesmo do que é capaz."\n \n Frasesdobem';
    frases[32] ='"Se um dia a razão te pedir para desistir e o coração te mandar lutar, lute. Pois não é a razão que bate pra você viver e sim o coração."\n \n Frasesdobem';
    frases[33] ='"Obstáculos não podem parar você. Se você achar uma parede, não desista. Ache uma maneira de escalá-la, atravessá-la ou derrubá-la."\n \n Michael Jordan';
    frases[34] ='"Na vida vence quem menos se ilude. Portanto durma com vontades, mas acorde com atitudes."\n \n Frasesdobem';
    frases[35] ='"A determinação de hoje é o sucesso de amanhã."\n \n Frasesdobem';
    frases[36] ='"Em vez de reclamar da vida, levante a cabeça, sacuda a poeira e dê a volta por cima. Afinal, dias ruins são necessários para que os bons valham a pena!"\n \n Frasesdobem';
    frases[37] ='"Suba o primeiro degrau com fé. Não é necessário que você veja toda a escada, apenas dê o primeiro passo."\n \n Martin Luther King';
    frases[38] ='"E que a vontade de realizar meus sonhos, seja maior que o medo."\n \n Frasesdobem';
    frases[39] ='"Persista! Se tudo fosse fácil, qualquer um conseguiria."\n \n Frasesdobem';
    frases[40] ='"Nunca deixe que alguém te diga que não pode fazer algo. Se você tem um sonho, tem que protegê-lo. As pessoas que não podem fazer por si mesmas, dirão que você não consegue. Se quer alguma coisa, vá e lute por ela. Ponto final."\n \n Frasesdobem';


    var fraseEscolhida = frases[numeroAleatorio]

    //Alert.alert(fraseEscolhida)
    Alert.alert(
        'Frases Motivadoras:',
        fraseEscolhida,
        [
          
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ],
        {cancelable: false},
      );
  
}

export default class Home extends Component {
  render() {
      const {container,btnHome, txtBtn} = estilos;
    return (
        <View style={container}>
            <Image  source={require('./img/nao-importa-a-cor-do-ceu.jpg')}></Image>
          
            <TouchableOpacity
                onPress={btnFrases}
                style={btnHome}>
                <Text style={txtBtn}>Nova Frase</Text>
            </TouchableOpacity>
           
        </View>
    );
  }
}


const estilos ={
  container:{
          justifyContent: 'center',
          alignItems:'center', 

     },
     btn:{
        backgroundColor: '#538530',
     },
     btnHome:{
         backgroundColor: '#538530',
         paddingVertical: 10,
         paddingHorizontal: 100,
         marginTop: 80,
         flex:0,
         borderRadius: 20,
     },
     txtBtn:{
         color: '#fff',
         fontSize: 20,
         fontWeight: 'bold',
     }
};

