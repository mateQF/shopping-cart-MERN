import { Header } from "./Header";
import { Footer } from "./Footer";
import { ProductList } from "./ProductList";
import "../styles/Home.css";

export default function Home() {
  return (
    <>
      <Header />
      <ProductList />
      <Footer />
    </>
  );
}
