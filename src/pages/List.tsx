
import './List.css';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
  IonButton,
} from "@ionic/react";
import ApiMethods from '../commons/ApiMethods';

const List: React.FC = () => {

  const {data, refetch} = ApiMethods('http://localhost:3000/pets');

  if (!data) {
    return <h1>Estamos cargando su información...</h1>
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
              <IonCard className='Ion__Card'>
                <IonCardHeader>
                  <IonCardTitle className='Ion__Card__Title'>Nombre: {pet.name}</IonCardTitle>
                  <IonCardSubtitle className='Ion__Card__SubTitle'>Raza: {pet.breed}</IonCardSubtitle>
                </IonCardHeader>

                <IonCardContent className='Ion__Card__Content'>Mi dueño es: {pet.owner.first_name}</IonCardContent>
              </IonCard>
            )
          })}

          <IonButton className= 'Ion__Button' expand='block' color= "danger" onClick={refetch}>
            Agregar
          </IonButton>
        </IonContent>
      </IonPage>
    )
  }

};

export default List;
