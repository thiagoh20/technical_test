import { render } from "react-dom";
import { TrashIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import axios from "axios";
const Form = () => {
  const [items, setitems] = useState([]);
  const [valores, setValores] = useState({
    objectApp: "",
    categoryApp: "",
  });
  const [flag, setFlag] = useState(false);

  const onDelete = (id) => {
    axios
      .delete(`http://localhost:8080/platforms/deletePlatform/${id}`)
      .then(function (res) {
        setFlag(true);
      })
      .catch(function (error) {
        // manejar error
        console.log(error);
      });
  };

  const onChange = (event) => {
    const { id, value } = event.target;
    setValores((prevValores) => ({
      ...prevValores,
      [id]: value,
    }));
  };

  const getData = () => {
    axios
      .get("http://localhost:8080/platforms/allPlatforms")
      .then(function (res) {
        setitems(res.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const postData = () => {
    axios
      .post("http://localhost:8080/platforms/newPlatform", {
        objectApp: valores.objectApp,
        categoryApp: valores.categoryApp,
      })
      .then(function (response) {
        setFlag(true);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    postData();
  };

  useEffect(() => {
    getData();
    if (flag) {
      setFlag(false)
    }
  }, [flag]);
  return (
    <form className="mt-8" onSubmit={onSubmit}>
      <div className="mb-6">
        <label
          htmlFor="app"
          className="block mb-2 text-sm font-medium text-green-700 dark:text-green-500"
        >
          Nombre de la App
        </label>
        <input
          type="text"
          onChange={onChange}
          value={valores.miInput}
          id="objectApp"
          className="bg-green-50 border border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full py-2 dark:bg-gray-700 dark:border-green-500"
        />
      </div>
      <div>
        <select
          id="categoryApp"
          defaultValue={"DEFAULT"}
          onChange={onChange}
          value={valores.miInput}
          className="inline-flex  items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm w-full py-2 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        >
          <option value="DEFAULT" disabled>
            Selecciona una categoria
          </option>
          <option value="Mensajeria">Mensajeria</option>
          <option value="RedesSociales">Redes Sociales</option>
          <option value="Entretenimiento">Entretenimiento</option>
        </select>

        <div
          id="dropdownAction"
          className=" z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
        >
          <ul
            className="py-1 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownActionButton"
          >
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Mensajeria
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Redes Sociales
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Entretenimiento
              </a>
            </li>
          </ul>
        </div>
      </div>
      <button
        type="submit"
        className=" mt-4 w-full text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
      >
        Agregar
      </button>
      <div className="relative mt-6 overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full  text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                #
              </th>
              <th scope="col" className="px-6 py-3">
                Objeto
              </th>
              <th scope="col" className="px-6 py-3">
                Categoria
              </th>
              <th scope="col" className="px-6 py-3">
                Accion
              </th>
            </tr>
          </thead>
          <tbody>
            {items?.map((data, i) => (
              <tr
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                key={i}
              >
                <th
                  scope="row"
                  className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <div className="text-base font-semibold">{i + 1}</div>
                </th>
                <td className="px-6 py-4">{data.objectApp.toUpperCase()}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div>{" "}
                    {data.categoryApp}
                  </div>
                </td>
                <td className="px-6 py-4" onClick={() => onDelete(data._id)}>
                  <TrashIcon className="h-5  ml-4  text-red-600  cursor-pointer " />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </form>
  );
};
export default Form;
