
import { State, TextInput } from 'react-native-gesture-handler';
import {creatStore} from 'redux';
import Cadastro from './Cadastro.js';
import App from './App.js';


import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';


const EstadoIni={
    text: '',
}


const reducer = (estado = EstadoIni, action) =>{
    switch (Action.type) {
        case 'ADCIONATEXTO': {
            const novoEstado = objetct.assign({}, estado, {});
            novoEstado.text = action.payload ;
            return novoEstado;

        }
        default :
         return estado;


    }
};




const store = createStore




export const ADDPESSOAS = text => ({
    type : 'ADDPESSOAS',
    payload: text,
});




const EstadodeAtualizassao = text =>{
    store.dispatch(ADDPESSOAS(text))
};

return(
    <View>
        <TextInput onCancelledText ={EstadodeAtualizassao}/>

    </View>

)




const Tela2 = (props) => {

    const irTela3 = () => {
      const navigation = props.navigation;
      navigation.push('Tela1');
    };
  
  
    return (
        <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Tela1" component={Tela1} />

      <View>
        <Text> Tela 2 </Text>
        <Text>{'Numero' + pegarNumero}</Text>
        <Button title="Volta pra tela de Cadastrar Pedidos" onPress={irTela1}></Button>
      </View>

      </Stack.Navigator>
    </NavigationContainer>

    );
  };


const pegarNumero = () =>{
    const estato = store.pegarNumero();
    return State.text
}






  const  EstadodeAtualizassao = text => {
    const action = CREATENOVAPESSOA(text);
    store.dispatch(action);

  }

/*
export default function Lista(props) {




    const [nome, setNome] = useState('');
    const [Lanches, setLanches] = useState('');

StorageEvent.dispatch(AdciononaPessoas({nome, Lanche}));


    alert("Pedido Realizado com Sucesso");

const navigation = props.navigation;
navigation.replace('List');

};


