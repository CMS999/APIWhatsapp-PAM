import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View, Linking, TextInput, Button} from 'react-native';

 function App() {
  const [Celular, setCelular] = useState('')
  const [Mensagem, setMensagem] = useState('')
  const [Titulo, setTitulo] = useState('')
  let options = 'pt-BR'
  const dia = new Date().getDate()
  const mes = new Date().getMonth()
  const ano = new Date().getFullYear()
  const hora = new Date().getHours()
  const minutos = new Date().getMinutes()
  let corminutos ='';

  function Teste(){
    if (minutos.toString().length<2) {
      corminutos = "0"+minutos
    }
    const data = 'Hora: '+hora+':'+minutos+'\n'+'Data: '+dia+'/'+mes+'/'+ano
    Linking.canOpenURL("whatsapp://send?text="+Mensagem).then(supported => {
      return Linking.openURL(
        "https://api.whatsapp.com/send?phone="+Celular+"&text="+data+"\n"+"Título: "+Titulo+"\n"+"Mensagem: "+Mensagem
      );
    })
  }

    return (
      <View style={styles.container}>
        <Text
          style={styles.text}
        >
          Digite um número de celular (destinatário, exemplo: 15991112222) e a mensagem. 
        </Text>
        <TextInput
          style={styles.input}
          keyboardType='numeric'
          maxLength={11}
          placeholder={'Ensira o número de celular'}
          onChangeText={(val)=>setCelular(55+val)} 
        />
        <TextInput
          style={styles.input}
          placeholder={'Ensira o título'}
          onChangeText={(val)=>setTitulo(val)} 
        />
        <TextInput
          style={styles.input}
          placeholder={'Ensira a mensagem'}
          onChangeText={(val)=>setMensagem(val)} 
        />
        <Button
          title={"Enviar mensagem"}
          onPress={() => Teste() }>
          Enviar Mensagem
        </Button>
        <StatusBar style="auto" />
      </View>
    );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  input:{
    flex: 1,
    width:300 ,
    maxHeight:60,
    padding: 10,
    borderWidth:1,
    borderColor:'black',
    borderRadius:5,
    marginBottom:5
  },
  text:{
    marginBottom:15,
    marginTop:50,
    padding:10,
    textAlign: 'center',
  }
});

export default App;