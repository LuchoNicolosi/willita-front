import Carrusel from './ui/client/home/carrusel';
import Categories from './ui/client/home/categories';
import Products from './ui/client/home/products';

export default function Home() {
  return (
    <main>
      <Carrusel />
      <Categories />
      <Products />
    </main>
  );
}
