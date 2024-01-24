import { useEffect, useState } from "react";
import Layout from "../../Components/Layout";
import { personasMayoresDeEdad } from "../../utils/Algoritmos";

const RetoListaObjetos = () => {
  const [dataOrdenada, setDataOrdenada] = useState([]);
  const listaPersonas = [
    { nombre: "Juan", edad: 25 },
    { nombre: "Ana", edad: 20 },
    { nombre: "Santiago", edad: 16 },
    { nombre: "Carlos", edad: 30 },
    { nombre: "Elena", edad: 18 },
    { nombre: "Ricardo", edad: 10 },
    { nombre: "David", edad: 22 },
    { nombre: "Valentina", edad: 15 },
    { nombre: "Sara", edad: 6 },
  ];

  useEffect(() => {
    setDataOrdenada(personasMayoresDeEdad(listaPersonas));
  }, []);

  console.log(dataOrdenada);
  return (
    <Layout>
      <p className="text-4xl hover:italic hover:font-bold hover:tracking-widest">
        RetoListaObjetos
      </p>
      <p className="m-5">Lista Original (SIN ORDENAR): </p>
      <div
        className="divide-y divide-dashed flex flex-col rounded-lg"
        style={{
          boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
        }}
      >
        {listaPersonas.map((data, i) => (
          <div
            className="p-2 flex justify-center w-96 hover:bg-slate-50 hover:decoration-1 hover:underline"
            key={i}
          >
            <p>
              Nombre: {data.nombre} - Edad: {data.edad}
            </p>
          </div>
        ))}
      </div>

      <p className="m-5">Lista Ordenada: </p>
      <div
        className="divide-y divide-dashed flex m-5 flex-col rounded-lg"
        style={{
          boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
        }}
      >
        {dataOrdenada.map((data, i) => (
          <div
            className="p-2 flex justify-center w-96 hover:bg-slate-50 hover:decoration-1 hover:underline"
            key={i}
          >
            <p>
              Nombre: {data.nombre} - Edad: {data.edad}
            </p>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default RetoListaObjetos;
