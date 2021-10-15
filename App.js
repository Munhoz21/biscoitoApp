import React, {useState} from 'react';
import {Text, View,TextInput, StyleSheet,Image, TouchableOpacity} from 'react-native';



function App(){

const [image,useImg]=useState(require('./src/biscoito.png'));
const [textoFrase, setTextoFrase] = useState('')

let frases = [
    'A vida trará coisas boas se tiveres paciência.',
'Demonstre amor e alegria em todas as oportunidades e verás que a paz nasce dentro de você.',
'Não compense na ira o que lhe falta na razão.',
'Defeitos e virtudes são apenas dois lados da mesma moeda.',
'A maior de todas as torres começa no solo.',
'Não há que ser forte. Há que ser flexível.',
'Gente todo dia arruma os cabelos, por que não o coração?',
'Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.',
]

function quebraBiscoito(){
    let numeroAleatorio = Math.floor(Math.random()* frases.length)
    setTextoFrase(' " ' + frases[numeroAleatorio] +' "  ');
    useImg(require('./src/biscoitoAberto.png'))
}


function reiniciarBiscoito(){
    useImg(require('./src/biscoito.png'))
    setTextoFrase('')
}

    return(
    <View style={styles.container}>
        
        <Image 
        source={image}
        style={styles.image}
        />

    <Text style={styles.textoFrase}>{textoFrase} </Text>

    <TouchableOpacity style={styles.btn} onPress={quebraBiscoito}>
        <View style={styles.btnArea}>
            <Text style={styles.btnTexto}>Quebrar biscoito</Text>
        </View>
    </TouchableOpacity>

    <TouchableOpacity style={[styles.btn, {marginTop:20, borderColor: '#121212'}]} onPress={reiniciarBiscoito} >
        <View style={styles.btnArea}>
            <Text style={[styles.btnTexto, {color:'#121212'}]}>Reiniciar Biscoito</Text>
        </View>
    </TouchableOpacity>
    </View>

     )
    }
  
const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',

    },
    image:{
        width: 230,
        height: 230,
    },
    textoFrase:{
       fontSize:20,
       color : '#dd7b22',
       margin: 15,
       fontStyle:'italic',
       textAlign:'center'
    },
    btn:{
        width: 230,
        height: 50,
        borderColor:'#dd7b22',
        borderWidth: 2,
        borderRadius:20,
        margin: 30
     

        
    },
    btnArea:{
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
        

    },
    btnTexto:{
        fontSize:16,
        fontWeight:'bold',
        color:'#dd7b15'
    }
})

export default App;
