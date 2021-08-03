import Firebase from 'firebase/app'
import config from './config'

export const App = Firebase.initializeApp(config);