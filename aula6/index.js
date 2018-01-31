import { AppRegistry } from 'react-native';

import { StackNavigator } from 'react-navigation';
import { initializeApp} from 'firebase';
import Login from './componentes/login';
import Lista from './componentes/lista';


const config = {
    apiKey: "AIzaSyDYnOYzNwnnn5NtCb6OdSwcCY1OvOnadE0",
    authDomain: "aula-2018.firebaseapp.com",
    databaseURL: "https://aula-2018.firebaseio.com",
    projectId: "aula-2018",
    storageBucket: "aula-2018.appspot.com",
    messagingSenderId: "116877868019"
  };

const App = StackNavigator({
    Login:{screen:Login},
    Lista:{screen:Lista}
});
initializeApp(config);

AppRegistry.registerComponent('aula6', () => App);
