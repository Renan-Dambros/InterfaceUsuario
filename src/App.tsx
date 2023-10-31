import React, { useState, useEffect } from 'react';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

import { IonAlert, IonButton, IonCard, IonCardContent, IonCardSubtitle, IonCardTitle, IonContent, IonImg, IonPage, IonText, setupIonicReact } from '@ionic/react';

setupIonicReact();

function App() {

  const [imageUrl, setImageUrl] = useState('');

  const fetchRandomImage = () => {
  
  const imageUrl = 'https://pic.re/image';
     setImageUrl(imageUrl);
  }
  
  useEffect(() => {
    fetchRandomImage();
  }, []);

  const generateRandomImage = () => {
    // Gerar uma URL de imagem aleatória a partir da API 'https://pic.re/image'
    const randomImageUrl = 'https://pic.re/image?random=' + Math.random();
    setImageUrl(randomImageUrl);
  };

  const [showInfoAlert, setShowInfoAlert] = useState(false);
  const showInfoPopup = () => {
    setShowInfoAlert(true);
  };
return (
  <IonPage style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
<IonContent>
        <IonCard style={{ paddingBottom: 10, paddingTop:25,backgroundColor: '#DCDCDC', borderStyle:'solid', borderColor:'#A9A9A9', borderTop:0, borderLeft:0, borderRight:0, borderWidth:0.2 }}>
        <IonCardTitle style={{ paddingBottom: 20, fontSize: 24, fontWeight: 'bold', color: '#0000CD' }}>Bem-vindo ao Meu Site</IonCardTitle>
        <IonText style={{ paddingBottom: 10, color:'green'}}>Este é um parágrafo de exemplo </IonText>
        <br></br><br></br>
        <IonButton color='danger' onClick={showInfoPopup}>Mostrar Informações</IonButton>
        <IonButton onClick={generateRandomImage}>Pesquisar imagem</IonButton>
        <IonCardContent style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>      
        <IonImg src={imageUrl} style={{ width: '400px', height: '300px' }}></IonImg>
        </IonCardContent>  
      </IonCard>

      <IonCard style={{ paddingBottom: 10, paddingTop:10 ,backgroundColor: '#DCDCDC', borderStyle: 'solid', borderColor: '#A9A9A9', borderTop:0, borderLeft:0, borderRight:0, borderWidth:0.2, }}>
      <IonCardSubtitle style={{paddingTop: 15,paddingBottom: 20,paddingLeft: 20,fontWeight: 'bold', color:'black', fontSize:17}}>Seção Importante</IonCardSubtitle>
      <IonText style={{paddingLeft: 20, color:'green'}}>Esta é uma seção com conteúdo relevante</IonText>
      </IonCard>  
      <br></br> <IonImg src='unijui.png' style={{height:250}}/>
      </IonContent>
      <IonAlert
        isOpen={showInfoAlert}
        onDidDismiss={() => setShowInfoAlert(false)}
        header={'Informações'}
        message={'Clique Pesquisar imagem para trocar a imagem'}
        buttons={['OK']}
      />
    </IonPage>

)};

export default App;