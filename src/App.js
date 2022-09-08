import Footer from './component/Footer';
import Navbar from './component/Navbar';
import PopularMovie from './pages/PopularMovie';
import Routers from './routes/Routers';

function App() {
  return (
    <div className=" bg-bgColors overflow-hidden font-Plus 2xl:w-3/5 m-auto">
      <Navbar />
      <Routers />
      <Footer />
    </div>
  );
}

export default App;
