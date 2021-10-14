import React, { useState } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, makeStyles, Typography } from '@material-ui/core';
//import { addSolicitud } from '../config/axios';
import { useHistory } from "react-router-dom";

const initialValue = {
    idUsuario: '1',
    fechayHoraVisita: '',
    motivo: '',
    idArea: '',
}

const useStyles = makeStyles({
    container: {
        width: '50%',
        margin: '5% 0 0 25%',
        '& > *': {
            marginTop: 20
        }
    }
})

const CrearSolicitud = () => {
    const [solicitud, setSolicitud] = useState(initialValue);
    const { idUsuario, fechayHoraVisita, motivo, idArea } = solicitud;
    const classes = useStyles();

    //const history = useHistory();
    
    const onValueChange = (e) => {
        setSolicitud({...solicitud, [e.target.name]: e.target.value})
    }

    const addSol = async() => {
        if (fechayHoraVisita.trim() === ""){
            alert("Ingrese una fecha valida");   
        } else if(motivo.trim() === ""){
            alert("Motivo requerido")
        } else if(idArea.trim() === ""){
            alert("Area requerida")
        } else {
            /* await addSolicitud(solicitud);
            alert('Solicitud agregada');
            history.push('./adminhome'); */
        }
    }


    return (
        <FormGroup className={classes.container}>
            <Typography variant="h4">Agregar solicitud</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">IdUsuario</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='IdUsuario' value={idUsuario} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Fecha y Hora visita</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='fechayHoraVisita' value={fechayHoraVisita} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Motivo</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='motivo' value={motivo} id="my-input"/>
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">idArea</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='idArea' value={idArea} id="my-input" />
            </FormControl>
            <FormControl>
                <Button variant="contained" color="primary" onClick={() => addSol()}>Agregar usuario</Button>
            </FormControl>
        </FormGroup>
    );
}
 
export default CrearSolicitud;