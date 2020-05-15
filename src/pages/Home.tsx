import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonInput,
} from "@ionic/react";
import React from "react";
import "./Home.css";
import { useForm } from "react-hook-form";

const Home: React.FC = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data: any) => console.log(data);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <form onSubmit={handleSubmit(onSubmit)}>
          <IonInput name="username" ref={register({ required: true })} />
        </form>
      </IonContent>
    </IonPage>
  );
};

export default Home;
