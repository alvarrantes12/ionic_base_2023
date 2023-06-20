import React, { useState } from 'react';
import { IonContent, IonInput, IonItem, IonLabel, IonPage, IonButton } from '@ionic/react';
import { environment } from '../../environments/environment.dev';
import ApiMethods from '../../commons/ApiMethods';
import { useHistory } from 'react-router-dom'

const Form: React.FC = () => {
    const [id, setId] = useState('');
    const [name, setName] = useState(''); 
    const [message, setMessage] = useState('');
    const history = useHistory();

    const {putMethod} = ApiMethods(`${environment.apiEndpoint}/pets`);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        putMethod(id, name);
        setMessage('Editado!');
        setId('');
        setName('');
    }

    const handleRedirect = () => {
        history.push('/pages/List');
        window.location.reload();
    }

    return (
        <IonPage>
            <h1 style={{textAlign: 'center'}}>Bienvenid@ a Edición de Mascota</h1>
            <IonContent>
                <h2 style={{textAlign: 'center'}}>{message}</h2>
                <form onSubmit= { handleSubmit } style={{marginTop: '50px', marginLeft: '20px', marginRight: '20px'}}>
                    <IonItem>
                        <IonLabel position='floating'>ID</IonLabel>
                        <IonInput value={id} onIonChange={ (e) => setId(e.detail.value!) } required> </IonInput>
                    </IonItem>
                    <IonItem style={{marginBottom: '20px'}}>
                        <IonLabel position='floating'>Name</IonLabel>
                        <IonInput value={name} onIonChange={ (e) => setName(e.detail.value!) } required> </IonInput>
                    </IonItem>
                    <IonButton type='submit' expand='full'>Editar</IonButton>
                </form>
                <IonButton onClick={handleRedirect} expand='full'>Ir a Lista</IonButton>
            </IonContent>
        </IonPage>
    )
}

export default Form;