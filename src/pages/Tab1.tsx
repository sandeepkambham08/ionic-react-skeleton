import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar
} from '@ionic/react';
import React from 'react';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader className="bg-green-800">
        <IonToolbar>
          <IonTitle>
            <div className="bg-red-200 rounded-full p-4">Page title</div>
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="h-screen text-center bg-red-800 sm:bg-green-400 lg:max-w-screen-xl mx-auto">
          <div className="border rounded-xl shadow-2xl p-8">
            <h1 className="text-2xl font-bold">Tab1 with Tailwind</h1>
            <p className="mt-4"></p>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
