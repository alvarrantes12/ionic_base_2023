
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
} from '@ionic/react';

import ApiMethods from '../commons/ApiMethods';

const List: React.FC = () => {

  const { data , refetch } = ApiMethods('http://localhost:3000/pets');

  if (!data) {
    return <h1> Cargando...</h1>
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
          { data?.map((pet: any) => {
            return (
              <IonCard className='ion-card'>
                <IonCardHeader>
                  <IonCardTitle className='ion-card-title'>Nombre: {pet.name}</IonCardTitle>
                  <IonCardSubtitle className='ion-card-subtitle'>Raza: {pet.breed}</IonCardSubtitle>
                </IonCardHeader>
                <IonCardContent className='ion-card-content'>Dueñ@: {pet.owner.first_name}</IonCardContent>
              </IonCard>
            )
          })}

          <IonButton className='ion-button' expand='block' onClick={refetch}>
            Agregar
          </IonButton>
        </IonContent>
      </IonPage>
    )
  }

};

export default List;
