import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import Data from './components/Data';



function App() {
  const cards = Data.map(item =>{
    return(
      <Card
            
            img={item.img}
            rating={item.stats.rating}
            reviewCount={item.stats.reviewCount}
            location={item.location}
            title={item.title}
            price={item.price}
            
      />
    )
  })
  return (
    <div>
      <Navbar />
      <Hero />
      <section className='card-list'>
      {cards}
      </section>
      
    </div>

  );
}

export default App;
