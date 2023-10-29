import React, { useState, useEffect } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonImg,
  IonCard,
  IonCardTitle,
  IonCardSubtitle,
  IonText,
  IonMenuButton,
  IonAlert
} from '@ionic/react';

function App() {

const [isOpen, setIsOpen] = useState(false);

 const [imageUrl, setImageUrl] = useState('');

 const fetchRandomImage = () => {

 const imageUrl = 'https://pic.re/image';
    setImageUrl(imageUrl);
 }

  useEffect(() => {
    fetchRandomImage();
  }, []);

  return (

    <IonPage style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>

        <IonCard style={{ paddingBottom: 10, paddingTop:10, backgroundColor: '#DCDCDC', width:500, borderStyle:'solid', borderColor:'#A9A9A9', borderTop:0, borderLeft:0, borderRight:0, borderWidth:0.2 }}>
        <IonCardTitle style={{ fontSize: 24, fontWeight: 'bold', color: '#0000CD' }}>Bem-vindo ao Meu Site</IonCardTitle>
        <br></br><br></br><IonText style={{color:'green'}}>Este é um parágrafo de exemplo </IonText>
       I<br></br><br></br><IonButton color="primary" >Clique aqui</IonButton>
        <br></br><br></br><IonButton onClick={() => setIsOpen(true)}>Click Me</IonButton>
      <IonAlert
        isOpen={isOpen}
        header="Alert"
        subHeader="Important message"
        message="This is an alert!"
        buttons={['OK']}
        onDidDismiss={() => setIsOpen(false)}
      ></IonAlert>
      </IonCard>

      <IonCard style={{ paddingBottom: 10, paddingTop:10 ,backgroundColor: '#DCDCDC', width:500, borderStyle: 'solid', borderColor: '#A9A9A9', borderTop:0, borderLeft:0, borderRight:0, borderWidth:0.2, }}>
      <IonText style={{fontWeight: 'bold'}}>Seção Importante</IonText>
      <br></br><br></br><IonText style={{color:'green'}}>Esta é uma seção com conteúdo relevante</IonText>
      <br></br> <IonImg src='unijui.png' style={{height:250}}/>
      </IonCard>  

    </IonPage>
  );
} 
export default App;
        
         //<IonImg src={imageUrl} style={{ width: '400px', height: '300px' }}></IonImg>
        
      
