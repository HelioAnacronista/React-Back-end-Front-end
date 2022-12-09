import './style.css';


import SearchBar from '../../../components/SearchBar';
import CatalogCard from '../../../components/CatalogCard';
import ButtonNextPage from '../../../components/ButtonNextPage';



import { useEffect, useState } from 'react';
import { ProductDTO } from '../../../models/product';
import axios from 'axios';


export default function Catalog() {

   const [product, setProduct] = useState<ProductDTO[]>([]);

   const baseURL = axios.get(`http://localhost:8080/products`);

   useEffect(() => {
      baseURL.then(response => {
         setProduct(response.data.content);
      })
   }, []);

   return (

      <main>
         <section id="catalog-section" className="dsc-container">
            <SearchBar />

            <div className="dsc-catalog-cards dsc-mb20 dsc-mt20">
 
               {
                  product.map(products => <CatalogCard key={products.id} product={products} />)
               }

            </div>

            <ButtonNextPage></ButtonNextPage>
         </section>
      </main>

   );
}