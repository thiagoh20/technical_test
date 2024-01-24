import { render } from 'react-dom'
import { TrashIcon, } from '@heroicons/react/24/solid'
import { getData, getDataCreate } from '../../utils'
const Form = () => {


 
  return (
    <div className="mt-8">

      <div class="mb-6">
        <label for="app" class="block mb-2 text-sm font-medium text-green-700 dark:text-green-500">Nombre de la App</label>
        <input type="text" id="app" class="bg-green-50 border border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full py-2 dark:bg-gray-700 dark:border-green-500" />
      </div>
      <div>
        <select id="dropdownActionButton" class="inline-flex  items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm w-full py-2 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
          <option value="" disabled selected>Selecciona una categoria</option>
          <option value="mensajeria">Mensajeria</option>
          <option value="redes">Redes Sociales</option>
          <option value="Entretenimiento">Entretenimiento</option>
        </select>

        <div id="dropdownAction" class=" z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
          <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownActionButton">
            <li>
              <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Mensajeria</a>
            </li>
            <li>
              <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Redes Sociales</a>
            </li>
            <li>
              <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Entretenimiento</a>
            </li>
          </ul>
        </div>
      </div>
      <button onClick={''}
      type="button"
      class=" mt-4 w-full text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">Agregar</button>
      <div class="relative mt-6 overflow-x-auto shadow-md sm:rounded-lg">

        <table class="w-full  text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>

              <th scope="col" class="px-6 py-3">
                #
              </th>
              <th scope="col" class="px-6 py-3">
                Objeto
              </th>
              <th scope="col" class="px-6 py-3">
                Categoria
              </th>
              <th scope="col" class="px-6 py-3">
                Accion
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <th scope="row" class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                <div class="text-base font-semibold">0</div>
              </th>
              <td class="px-6 py-4">
                wpp
              </td>
              <td class="px-6 py-4">
                <div class="flex items-center">
                  <div class="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div> Mensajeria
                </div>
              </td>
              <td class="px-6 py-4">
                <TrashIcon className='h-5  ml-4  text-red-600  cursor-pointer ' />
              </td>
            </tr>

          </tbody>
        </table>
      </div>

    </div>


  )
}
export default Form