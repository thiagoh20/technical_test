import { useEffect, useState } from "react";
import Layout from "../../Components/Layout";
import { fizzBuzzArray } from "../../utils/Algoritmos";

const RetoFizzBuzz = () => {
  const [dataOrdenada, setDataOrdenada] = useState([]);
  const listaNumeros = [9, 10, 15, 7, 5, 4, 6, 45, 34, 4, 1, 2];

  useEffect(() => {
    setDataOrdenada(fizzBuzzArray(listaNumeros));
  }, []);

  return (
    <Layout>
      <p className="text-4xl hover:italic hover:font-bold hover:tracking-widest">
        Reto Fizz Buzz
      </p>
      <p className="m-5">Lista Original (SIN PROCESAR): </p>
      <div
        className="divide-y divide-dashed flex flex-col rounded-lg"
        style={{
          boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
        }}
      >
        {listaNumeros.map((data, i) => (
          <div
            className="p-2 flex justify-center w-96 hover:bg-slate-50 hover:decoration-1 hover:underline"
            key={i}
          >
            <p>
              Numero: {data}
            </p>
          </div>
        ))}
      </div>

      <p className="m-5">Lista PROCESADA: </p>
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
              Numero: {data}
            </p>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default RetoFizzBuzz;
