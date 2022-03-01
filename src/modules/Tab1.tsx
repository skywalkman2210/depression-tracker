import { useState } from 'react';
import { connect, ConnectedProps } from 'react-redux'
import { RootState } from "../store";

import Smiley, { SmileyType } from "../components/smiley";
import Stack from "@mui/material/Stack";

import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import '../assets/css/Tab1.css';

const Tab1: React.FC<PropsFromRedux> = (props: PropsFromRedux) => {
  const [feeling, setFeeling] = useState("");

  const getGreeting = (): string => {
    if (props.username && props.username !== "") {
      return "Welcome back " + props.username + "!";
    } else {
      return "Welcome!";
    }
  }

  const getActive = (type: SmileyType): boolean => {
    return type == feeling;
  }

  return (
    <IonPage> 
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 1 page" greeting={getGreeting()} >
          <div>
            <h4>How are you feeling today?</h4>
          </div>

          <Stack direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={2}>
            <Smiley type={SmileyType.HAPPY} 
                    color="#00FF00"
                    active={getActive(SmileyType.HAPPY)} 
                    onClick={() => { setFeeling(SmileyType.HAPPY); }}/>

            <Smiley type={SmileyType.BIT_HAPPY} 
                    color="#0000FF"
                    active={getActive(SmileyType.BIT_HAPPY)} 
                    onClick={() => { setFeeling(SmileyType.BIT_HAPPY); }}/>
                    
            <Smiley type={SmileyType.MEH} 
                    color="gold"
                    active={getActive(SmileyType.MEH)} 
                    onClick={() => { setFeeling(SmileyType.MEH); }}/>
                    
            <Smiley type={SmileyType.BIT_SAD} 
                    color="orange"
                    active={getActive(SmileyType.BIT_SAD)} 
                    onClick={() => { setFeeling(SmileyType.BIT_SAD); }}/>
                    
            <Smiley type={SmileyType.SAD} 
                    color="red"
                    active={getActive(SmileyType.SAD)} 
                    onClick={() => { setFeeling(SmileyType.SAD); }}/>
          </Stack>
        </ExploreContainer>
      </IonContent>
    </IonPage>
  );
};

const connector = connect((state: RootState) => ({
  username: state.user.name || ""
}),(dispatch) => {
  return {
     
  }
})
type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(Tab1);