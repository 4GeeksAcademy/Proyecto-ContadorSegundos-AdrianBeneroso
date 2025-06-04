import { useEffect, useState } from "react";
import '../../styles/index.css'
import { Alert } from "bootstrap";
import { AlarmClockPlus } from 'lucide-react';
import { Clock } from 'lucide-react';



export const Contador = ({ seconds }) => {

   const [unidades, setUnidades] = useState(0);
   const [decenas, setDecenas] = useState(0);
   const [centenas, setCentenas] = useState(0);
   const [unidadesM, setUnidadesM] = useState(0);
   const [decenasM, setDecenasM] = useState(0);
   const [centenasM, setCentenasM] = useState(0);
   const [num, setNum] = useState(0);

   

// FUNCION QUE SUMA EN C,D,U ETC Y REINICIA EL VALOR DE LAS UNIDADES
   const comprobador = () => {
      if (unidades === 10) {
         setDecenas(decenas => decenas + 1);
         setUnidades(0)
      }
      if (decenas === 10) {
         setCentenas(cenetenas => centenas + 1)
         setDecenas(0)
      }
      if (centenas === 10) {
         setUnidadesM(unidadesM => unidadesM + 1);
         setCentenas(0)
      }
      if (unidadesM === 10) {
         setDecenasM(decenasM => decenasM + 1);
         setUnidadesM(0);
      }
      if (decenasM === 10) {
         setCentenas(centenasM => centenasM + 1);
         setDecenasM(0);
      }

// SE LE ATRIBULLE EL VALOR DE LA CUENTA  AL HOOK NUM PARA ASI UTILIZARLO COMO COMPARATIVO
      setNum((centenasM * 100000) + (decenasM * 10000) +
         (unidadesM * 1000) + (centenas * 100) + decenas * 10 + unidades);
   }


   //HOOK PARA IR GENERANDO NUMEROS CADA 1 SEGUNDO, EN CASO DE QUE NUM SEA IGUAL AL NUMERO INTRODUCIDO SALTA EL MENSAJE DE ALERTA
   //INFORMANDO DE QUE YA SE HA LLEGADO AL SEGUNDO INTRODUCIDO
   useEffect(() => {
      if (num != seconds) {
         const interval = setInterval(() => {
            setUnidades(unidades => unidades + 1);



         }, 1000);

         return () => clearInterval(interval);
      } else {
         alert("!La cuenta ha finalizado");
      }


   },[num]);


//HOOK QUE UTILIZA LA FUNCION COMPROBACION PARA IR SUMANDO EN LA DECENAS,CENTENAS ETC
   useEffect(() => {

      comprobador()

   }, [unidades])

   //BOTON DE REINICIO DE CUENTA CON RESUMEN DEL NUMERO DONDE NOS HABIAMOS QUEDADO

const reiniciarContador = ()=>{
   alert("La cuenta ha llegado a " + num);
   setUnidades(0);
   setDecenas(0);
   setCentenas(0);
   setUnidadesM(0);
   setDecenasM(0);
   setCentenasM(0);
}



 

  

   return (
      <div>
         <div className="header">
            <h1>Contador</h1>
         </div>

         <div className="content">
            <div className="seconds">
               <Clock size={90} />
            </div>

            <div className="seconds">
               {centenasM}
            </div>
            <div className="seconds">
               {decenasM}
            </div>
            <div className="seconds">
               {unidadesM}
            </div>
            <div className="seconds">
               {centenas}
            </div>
            <div className="seconds">
               {decenas}
            </div>
            <div className="seconds">
               {unidades}
            </div>
            <div className="content-button">
             
            </div>
            <button className="buttonReinicio" onClick={reiniciarContador}>Reiniciar</button>
           
         </div>
   
      </div>

   );




}
