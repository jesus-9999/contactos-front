import { useState } from "react";


export default function Contacts({ onAdd }) {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [correo, setCorreo] = useState("");
  const [telefonoCelular, setTelefonoCelular] = useState("");
  const [telefonoFijo, setTelefonoFijo] = useState("");
  const [direccion, setDireccion] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [pais, setPais] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const newContact = {
      nombre_contacto: nombre,
      apellido_contacto: apellido,
      correo_contacto: correo,
      telefonoCelular_contacto: telefonoCelular,
      telefonoFijo_contacto: telefonoFijo,
      direccion_contacto: direccion,
      ciudad_contacto: ciudad,
      pais_contacto: pais,
    };
  
    const response = await fetch('http://localhost:4000/contacto', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newContact),
    });
  
    if (!response.ok) {
        console.log(response.statu);
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    window.location.reload();
    const data = await response.json();
  
    onAdd(data);
  
    setNombre("");
    setApellido("");
    setCorreo("");
    setTelefonoCelular("");
    setTelefonoFijo("");
    setDireccion("");
    setCiudad("");
    setPais("");
   
  };
  return ( 
    <div className=" row " >
<div className="col-2"></div>
<div className="col-6">
<form onSubmit={handleSubmit}> 
  <div className="form-group">
    <label for="nombre">Nombre:</label>
    <input type="text" className="form-control" id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
  </div>
  <div className="form-group">
    <label for="apellido">Apellido:</label>
    <input type="text" className="form-control" id="apellido" value={apellido} onChange={(e) => setApellido(e.target.value)} />
  </div>
  <div className="form-group">
    <label for="correo">Correo electrónico:</label>
    <input type="email" className="form-control" id="correo" value={correo} onChange={(e) => setCorreo(e.target.value)} />
  </div>
  <div className="form-group">
    <label for="telefonoCelular">Teléfono celular:</label>
    <input type="tel" className="form-control" id="telefonoCelular" value={telefonoCelular} onChange={(e) => setTelefonoCelular(e.target.value)} />
  </div>
  <div className="form-group">
    <label for="telefonoFijo">Teléfono fijo:</label>
    <input type="tel" className="form-control" id="telefonoFijo" value={telefonoFijo} onChange={(e) => setTelefonoFijo(e.target.value)} />
  </div>
  <div className="form-group">
    <label for="direccion">Dirección:</label>
    <input type="text" className="form-control" id="direccion" value={direccion} onChange={(e) => setDireccion(e.target.value)} />
  </div>
  <div className="form-group">
    <label for="ciudad">Ciudad:</label>
    <input type="text" className="form-control" id="ciudad" value={ciudad} onChange={(e) => setCiudad(e.target.value)} />
  </div>
  <div className="form-group">
    <label for="pais">País:</label>
    <input type="text" className="form-control" id="pais" value={pais} onChange={(e) => setPais(e.target.value)} />
  </div>
  <button type="submit" className="btn btn-primary">Crear</button>
</form>
</div>
</div>
    )
  }