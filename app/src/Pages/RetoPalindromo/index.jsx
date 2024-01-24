import { useState } from "react";
import Layout from "../../Components/Layout";
import { esPalindromo } from "../../utils/Algoritmos";

const RetoPalindromo = () => {
  const [value, setValue] = useState("");
  const [result, setResult] = useState(null);

  const onChange = (event) => {
    const nuevoValor = event.target.value;
    setValue(nuevoValor);
    setResult(esPalindromo(nuevoValor));
  };

  return (
    <Layout>
      <p className="text-4xl hover:italic hover:font-bold hover:tracking-widest">
        RetoPalindromo
      </p>
      <form className="w-96 flex justify-center m-5 flex-col">
        <label>Ingresa una palabra</label>
        <input
          type="text"
          onChange={onChange}
          value={value}
          className="bg-green-50 border border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full py-2 dark:bg-gray-700 dark:border-green-500"
        />
      </form>
      {result !== null &&
        (result ? (
          <div className="border-green-500 text-green-900 dark:text-green-400">
            SI ES PALINDROMO
          </div>
        ) : (
          <div className="border-red-500 text-red-900 dark:text-red-400">
            NO ES PALINDROMO
          </div>
        ))}
    </Layout>
  );
};

export default RetoPalindromo;
