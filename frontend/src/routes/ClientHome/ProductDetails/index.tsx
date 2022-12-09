import './style.css';
import ButtonInverse from "../../../components/ButtonInverse";
import ButtonPrimary from "../../../components/ButtonPrimary";
import ProductDetailsCard from "../../../components/ProductDetailsCard";
import * as productServices from '../../../services/product-services'
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ProductDTO } from '../../../models/product';

export default function ProductDetails() {

   const navigate = useNavigate();

   const params = useParams();

   const [product, setProduct] = useState<ProductDTO>();

   useEffect(() => {
      productServices.findById(Number(params.productId)).then(reponse => {
         console.log(reponse)
         setProduct(reponse.data)
      })
      .catch( () => {
         navigate("/");
      });
   }, []);


   return (
      <>
         <main>
            <section id="product-details-section" className="dsc-container">

               {
                  product 
                  && <ProductDetailsCard product={product} />
                  
               }

               <div className="dsc-btn-page-container">
                  <ButtonPrimary text="Comprar" />
                  <Link to={`/`}>
                     <ButtonInverse text="Inicio" />
                  </Link>
               </div>
            </section>
         </main>
      </>
   );
}