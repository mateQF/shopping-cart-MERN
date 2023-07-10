import { useParams } from "react-router";
import { useProducts } from "../hooks/useProducts";
import { Header } from "./Header";
import { Footer } from "./Footer";
import "../styles/ProductDetail.css";
import { CART_ACTION_TYPES } from "../reducer/cart";
import { useCartContext } from "../context/CartContext";

export default function ProductDetail() {
  const { products } = useProducts();
  const { dispatch } = useCartContext()
  const { id } = useParams();
  const product = products.find((product) => product.id === id);
  if (!product) return null;

  const addProduct = (product) => {
    dispatch({ type: CART_ACTION_TYPES.ADD_PRODUCT, payload: product });
  };

  return (
    <>
      <Header />
      <div>
        <div className="product-detail-container">
          <div className="product-data">
            <h1>{product.description}</h1>
            <img src={`${product.imageUrl}`} alt={`${product.description}`} />
            <div className="btn-purchase">
              <h1>${product.price}</h1>
              <button className="btn-add-cart" onClick={() => addProduct(product)}>Add to cart</button>
            </div>
          </div>
          <div className="product-information">
            <ul className="information-container">
              <li className="item-info">
                Procesador: Intel Core i7 de última generación
              </li>
              <li className="item-info">Memoria RAM: 16 GB DDR4</li>
              <li className="item-info">
                Almacenamiento: Unidad de estado sólido (SSD) de 512 GB
              </li>
              <li className="item-info">
                Tarjeta gráfica: NVIDIA GeForce GTX 1660 Ti con 6 GB de memoria
                dedicada
              </li>
              <li className="item-info">
                Pantalla: 15.6 pulgadas Full HD (1920x1080) IPS
              </li>
              <li className="item-info">
                Conectividad: Wi-Fi 802.11ac, Bluetooth 5.0
              </li>
              <li className="item-info">
                Puertos: 3 puertos USB 3.0, 1 puerto USB-C, 1 puerto HDMI, 1
                puerto Ethernet, lector de tarjetas SD
              </li>
              <li className="item-info">Sistema operativo: Windows 10</li>
              <li className="item-info">Batería: Hasta 8 horas de duración</li>
              <li className="item-info">Peso: Aproximadamente 2.2 kg</li>
              <li className="item-info">Dimensiones: 36 cm x 25 cm x 2 cm</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
