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
  IonButton

} from '@ionic/react'
import ApiMethods from '../commons/ApiMethods';
import { environment } from '../environments/environmen.dev';

const List: React.FC = () => {
  const { data, refetch } = ApiMethods(`${environment.apiEndpoint}/pets`);

  if(!data){
    return <h1>Cargando Informacion...</h1>
  } else{
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
          return(
            <IonCard className='Ion-Card'>
              <IonCardHeader>
                <IonCardTitle className='Ion-Card-Title'>Nombre: {pet.name}</IonCardTitle>
                <IonCardSubtitle className='Ion-Card-SubTitle'>Raza: {pet.breed}</IonCardSubtitle>
              </IonCardHeader>

              <IonCardContent className='Ion-Card-Content'>Mi dueño es: {pet.owner.first_name}</IonCardContent>
            </IonCard>
          )
        })}

        <IonButton className='Ion-Button' expand='block' color='danger' onClick={refetch}>
          Agregar
        </IonButton>
      </IonContent>
    </IonPage>
    )
  }
};

export default List;