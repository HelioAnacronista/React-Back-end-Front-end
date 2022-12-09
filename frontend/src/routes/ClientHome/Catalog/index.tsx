import './style.css';


import SearchBar from '../../../components/SearchBar';
import CatalogCard from '../../../components/CatalogCard';
import ButtonNextPage from '../../../components/ButtonNextPage';


import * as productServices from '../../../services/product-services'
import { useEffect, useState } from 'react';
import { ProductDTO } from '../../../models/product';


export default function Catalog() {

   const [product, setProduct] = useState<ProductDTO[]>([]);

   
   useEffect(() => {
      productServices.findAll().then(response =>{
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