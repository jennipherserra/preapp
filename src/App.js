import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AuthProvider from './context/login/AuthProvider';
import Login from './views/Login'
import AdminHome from './views/AdminHome';
import UserHome from './views/UserHome';
import Solicitudes from './views/Solicitudes';
import CrearSolicitud from './components/CrearSolicitud';
import EditarSolicitud from './components/EditarSolicitud';

const useStyles = makeStyles({
  container: {
    display: "flex"
  }
});

function App() {
  const classes = useStyles();
  return (
    <div className={classes.useStyles}>
      <AuthProvider>
            <Router>
                <Switch>
                    <Route exact path="/" component={Login} />
                    <Route exact path="/adminhome" component={AdminHome} />
                    <Route exact path="/userhome" component={UserHome} />
                    <Route exact path="/solicitudes" component={Solicitudes} />
                    <Route exact path="/crearsolicitud" component={CrearSolicitud} />
                    <Route exact path="/editarsolicitud/:id" component={EditarSolicitud} />
                </Switch>
            </Router>
        </AuthProvider>
    </div>
  );
}

export default App;
