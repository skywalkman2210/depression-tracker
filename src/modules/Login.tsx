import { useState } from 'react';
import { connect, ConnectedProps } from 'react-redux'
import { RootState } from "../store";

import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';

import { 
  TextField, 
  Stack, 
  Button, 
  Modal, 
  Box, 
  Typography, 
  CircularProgress,
  Snackbar
} from '@mui/material';
import { loginUser } from "../services/LoginService";
import { storeUsername } from "../slices/user.slice";

const modalStyle = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 115,
  p: 4,
};


const Login = (props: PropsFromRedux) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [errorOpen, setErrorOpen] = useState(false);

  const handleClose = () => setModalOpen(false);
  const handleErrorClose = () => setErrorOpen(false);
  
  const handleUsernameChange = (event: any) => {
    setUsername(event.target.value);
  }

  const handlePasswordChange = (event: any) => {
    setPassword(event.target.value);
  }

  const handleLoginClick = () => {
    setModalOpen(true);
    
    loginUser(username, password).then((r: boolean) => {
      if (r) {
        props.setUsername(username);
        setModalOpen(false)
      } else {
        setErrorOpen(true);
        setModalOpen(false)
      }
    });
  }

  return (
    <IonPage> 
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Login</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Login">
          <Stack direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={2}>
          
            <TextField label="Username" onChange={handleUsernameChange} value={username} />
            <TextField label="Password" type="password" onChange={handlePasswordChange} value={password} />
            <Button onClick={handleLoginClick} variant="outlined">Login</Button>
          </Stack>
        </ExploreContainer>
      </IonContent>
      <Modal
        open={modalOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <CircularProgress />
        </Box>
      </Modal>
      <Snackbar
        open={errorOpen}
        autoHideDuration={2000}
        onClose={handleErrorClose}
        message="Invalid Username or Password!"
      />
    </IonPage>
  )
};

const connector = connect((state: RootState) => ({
    username: state.user.name || ""
  }),(dispatch) => {
    return {
      setUsername: (name: string) => {dispatch(storeUsername(name))},
    }
  })
  type PropsFromRedux = ConnectedProps<typeof connector>
  
  export default connector(Login);