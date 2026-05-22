import {useState,useEffect} from "react";

import {
obtenerHistorial
}
from "../services/apiService";


export default function useHistorial(){

const [historial,setHistorial]=useState([]);

const cargarHistorial=async()=>{

try{

const data=
await obtenerHistorial();

console.log(data); // prueba

setHistorial(data);

}catch(error){

console.log(error);

}

};

useEffect(()=>{

cargarHistorial();

},[]);

return{

historial,
cargarHistorial

};

}