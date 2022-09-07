import {initializeApp} from 'firebase/app';
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
    apiKey: 'AIzaSyBoD0XiVpp4xHuOyp3YOmkOI',
    authDomain: 'd5reactgallery-d275d.firebaseapp.com',
    projectId: 'd5reactgallery-d275d',
    storageBucket: 'd5reactgallery-d275d.appspot.com',
    messagingSenderId: '86752241616',
    appId: '86752241616:web:e7120ec041dfa2a9723bd5'
  };

  console.log(firebaseConfig)
  //Inicializando storage
  const firebaseApp = initializeApp(firebaseConfig);

  export const storage = getStorage(firebaseApp);


