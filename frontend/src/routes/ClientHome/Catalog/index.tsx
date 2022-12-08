import './style.css';


import SearchBar from '../../../components/SearchBar';
import CatalogCard from '../../../components/CatalogCard';
import ButtonNextPage from '../../../components/ButtonNextPage';


import * as productServices from '../../../services/product-services'


export default function Catalog() {

   return (


      <main>
         <section id="catalog-section" className="dsc-container">
            <SearchBar />

            <div className="dsc-catalog-cards dsc-mb20 dsc-mt20">

               {
                  productServices.findAll()
                  .map(products => <CatalogCard key={products.id} product={products} />)
               }

            </div>

            <ButtonNextPage></ButtonNextPage>
         </section>
      </main>

   );
}