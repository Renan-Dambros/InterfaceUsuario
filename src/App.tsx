import React, { useState, useEffect } from 'react';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

import { IonButton, IonCard, IonCardContent, IonCardTitle, IonImg, IonPage, IonText, setupIonicReact } from '@ionic/react';

setupIonicReact();

function App() {

  const [imageUrl, setImageUrl] = useState('');

  const fetchRandomImage = () => {
  
  const imageUrl = 'https://pic.re/image';
     setImageUrl(imageUrl);
  }
  
  const generateRandomImage = () => {
    // Gerar uma URL de imagem aleatória a partir da API 'https://pic.re/image'
    const randomImageUrl = 'https://pic.re/image?random=' + Math.random();
    setImageUrl(randomImageUrl);
  };

  
return (
  <IonPage style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>

        <IonCard style={{ paddingBottom: 10, paddingTop:10, backgroundColor: '#DCDCDC', width:500, borderStyle:'solid', borderColor:'#A9A9A9', borderTop:0, borderLeft:0, borderRight:0, borderWidth:0.2 }}>
        <IonCardTitle style={{ fontSize: 24, fontWeight: 'bold', color: '#0000CD' }}>Bem-vindo ao Meu Site</IonCardTitle>
        <br></br><br></br><IonText style={{color:'green'}}>Este é um parágrafo de exemplo </IonText>
        <br></br><br></br><IonButton onClick={generateRandomImage}>Click Me</IonButton>
        <IonCardContent style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>      
        <IonImg src={imageUrl} style={{ width: '400px', height: '300px' }}></IonImg>
        </IonCardContent>  
      </IonCard>

      <IonCard style={{ paddingBottom: 10, paddingTop:10 ,backgroundColor: '#DCDCDC', width:500, borderStyle: 'solid', borderColor: '#A9A9A9', borderTop:0, borderLeft:0, borderRight:0, borderWidth:0.2, }}>
      <IonText style={{fontWeight: 'bold'}}>Seção Importante</IonText>
      <br></br><br></br><IonText style={{color:'green'}}>Esta é uma seção com conteúdo relevante</IonText>
      <br></br> <IonImg src='unijui.png' style={{height:250}}/>
      </IonCard>  

    </IonPage>

)};

export default App;