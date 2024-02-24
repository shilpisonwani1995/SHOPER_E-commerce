import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom';
import Breadcrum from '../Components/Breadcrum/Breadcrum';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts';

const Product = () => {
  const {all_product}= useContext(ShopContext);
  const {productId}= useParams();
  const product = all_product.find((e)=> e.id === Number(productId));
  return (
    <div>
       <Breadcrum product={product} />
       <ProductDisplay product={product} />
       {/* here we pass the props/product where we pass the productdata */}
       <DescriptionBox />
       <RelatedProducts />
    </div>
  )
}

export default Product

// particular product open by click any product
// when we click the product image the product page is oprn where we can see the product id.

// now we can creat product display page where we r having product details and images or a particular product image