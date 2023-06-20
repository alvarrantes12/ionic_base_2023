import './List.css';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonButton,
} from "@ionic/react";

import ApiMethods from '../commons/ApiMethods';

import { environment } from '../environments/environment.dev';

const List: React.FC = () => {

  const { data, refetch } = ApiMethods(`${environment.apiEndpoint}/pets`);

  if (!data) {
    return <h1>Cargando...</h1>
  } else {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>
              Ejemplo Ionic #1
            </IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          {data?.map((pet: any) => {
            return (
              <IonCard className='IonCard'>
                <IonCardHeader>
                  <IonCardTitle className='IonCardTitle'>Nombre: {pet.name}</IonCardTitle>
                  <IonCardSubtitle className='IonCardSubTitle'>Raza: {pet.breed}</IonCardSubtitle>
                </IonCardHeader>

                <IonCardContent className='IonCard__Content'>Mi dueño es: {pet.owner.first_name}</IonCardContent>
              </IonCard>)
          })}

          <IonButton className='Ionbutton' expand='block' color='danger' onClick={refetch}>
            Agregar
            </IonButton>
        </IonContent>
      </IonPage>
    )
  }
};

export default List;