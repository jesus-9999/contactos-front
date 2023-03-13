import { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";

import Button from "react-bootstrap/Button";
import Contacts from "./Contacts";
export default function Home(params) {
  const [data, setData] = useState([]);
  /*     const [token, setToken] = useState(""); */

  useEffect(() => {
    const token = document.cookie
      .split("; ")
      .find((row) => row.startsWith("token_contacts="))
      ?.split("=")[1];
    console.log(token);

    fetch("http://localhost:4000/contacto", {})
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);
  const handleDelete = (id) => {

    fetch(`http://localhost:4000/contacto/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(() => {
        setData(data.filter((item) => item.id !== id));
        window.location.reload();
      });
  };
  return (
    <div>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>nombre_contacto</th>
            <th>apellido_contacto</th>
            <th>ciudad_contacto</th>
            <th>correo_contacto</th>
            <th>direccion_contacto</th>
            <th>fechaRegistro_contacto</th>
            <th>pais_contacto</th>
            <th>telefonoCelular_contacto</th>
            <th>telefonoFijo_contacto</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.nombre_contacto}</td>
              <td>{item.apellido_contacto}</td>
              <td>{item.ciudad_contacto}</td>
              <td>{item.correo_contacto}</td>
              <td>{item.direccion_contacto}</td>
              <td>{item.fechaRegistro_contacto}</td>
              <td>{item.pais_contacto}</td>
              <td>{item.telefonoCelular_contacto}</td>
              <td>{item.telefonoFijo_contacto}</td>
              <td>
                <Button variant="danger" onClick={() => handleDelete(item.id_contacto)}>
                  Eliminar
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
     <Contacts/>
    </div>
  );
}
