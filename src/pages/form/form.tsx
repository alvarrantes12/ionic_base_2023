import React, { useState } from 'react';
import { IonInput, IonButton, IonLabel, IonPage, IonContent, IonItem } from "@ionic/react";
import ApiMethods from "../../commons/ApiMethods";
import { enviroment } from "../../enviroment/enviroment.dev";
import { useHistory } from 'react-router-dom';

const form: React.FC = () => {
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const { putMethod } = ApiMethods(`${enviroment.apiEndpoint}/pets`);
    const [message, setMessage] = useState('');
    const history = useHistory();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        putMethod(id, name);
        setMessage('Se ha editado correctamente');
    }

    const handleRedirect = () => {
        history.push('/pages/List');
        window.location.reload();
    }

    return (
        <IonPage>
            <IonContent>
                <h1>{message}</h1>
                <form onSubmit={handleSubmit} style={{marginTop: '50px', marginLeft: '20px', marginRight: '20px' }}>
                    <IonItem>
                        <IonLabel position="floating">ID</IonLabel>
                        <IonInput value={id}
                                  onIonChange={(e) => setId(e.detail.value!)}
                                  required></IonInput>
                    </IonItem>
                    <IonItem style={{marginBottom: '20px' }}>
                        <IonLabel position="floating">Nombre</IonLabel>
                        <IonInput value={name}
                                  onIonChange={(e) => setName(e.detail.value!)}
                                  required></IonInput>
                    </IonItem>
                    <IonButton type="submit" expand="block" color="primary">Editar</IonButton>
                </form>
                <IonButton onClick={handleRedirect}  expand="block" color="danger">Regresar</IonButton>
            </IonContent>
        </IonPage>
    )
}

export default form;