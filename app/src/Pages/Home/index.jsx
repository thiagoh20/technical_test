import Layout from "../../Components/Layout";
import ProductDetail from "../../Components/ProductDetail/ProductDetail";

const Home = () => {
  const routes = [
    { title: "Reto Palindromo", link: '/retoPalindromo' },
    { title: "Reto Lista Objetos", link: '/retoListaObjetos' },
    { title: "Reto FizzBuzz", link: '/retoFizzBuzz'},
    { title: "Reto Mockup", link: '/retoMockup'},
  ];
  return (
    <Layout>
      <p className="text-4xl hover:italic hover:font-bold hover:tracking-widest">Bienvenidos a mi prueba tecnica!</p>
      <ProductDetail routes={routes}/>
    </Layout>
  );
};

export default Home;
