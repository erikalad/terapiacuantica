import React from "react";
import "./Pagina.css"
import instagram from './../assets/instagram.webp'
import facebook from './../assets/facebook.webp'
import youtube from './../assets/youtube.webp'

export function Pagina(){
    return(
        <div className="container" id="terapia">
            <div className="contenedor">
            <div className="links">
            <img src={instagram} alt="instagram" id="instagram"/><a href="https://www.instagram.com/conexionalquimica144441/?fbclid=IwAR3D1yKGFn6KSeTik1Vj9N08Lq_zi4J-oPwpYzTrVafiiQ2CKgkaCGi97DI">https://www.instagram.com/conexionalquimica144441</a>
            </div>
            <div className="links">
            <img src={facebook} alt="facebook" id="facebook"/>   <a href="https://www.facebook.com/conexionalquimica144441">https://www.facebook.com/conexionalquimica144441</a>
            </div>
            </div>
            <div className="you">
            <div className="links">
            <img src={youtube} alt="youtube" id="youtube"/> <a href="https://www.youtube.com/channel/UC5iBE6ANgX6zc9XMo44tNJQ">https://www.youtube.com/CONEXION ALQUIMICA Terapia Cuantica</a>
            </div>
            </div>
        </div>
    )
}