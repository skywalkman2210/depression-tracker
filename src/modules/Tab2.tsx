import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import '../assets/css/Tab2.css';

import { connect, ConnectedProps } from 'react-redux'
import { RootState } from "../store";
import { storeUsername } from "../slices/user.slice";

const Tab2: React.FC<PropsFromRedux> = (props: PropsFromRedux) => {
  const getGreeting = (): string => {
    if (props.username && props.username !== "") {
      return "Welcome back " + props.username + "!";
    } else {
      return "Welcome!";
    }
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 2</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 2</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 2 page" username={props.username} onUserSet={props.setUsername} greeting={getGreeting()} />
      </IonContent>
    </IonPage>
  );
};

const connector = connect((state: RootState) => ({
  username: state.user.name || ""
}),(dispatch) => {
  return {
    setUsername: (name: string) => {dispatch(storeUsername(name))},
  }
})
type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(Tab2);