import Details from "../components/product/details.jsx";
import Layout from "../components/layout/layout.jsx";
import {useParams} from "react-router-dom";
import Brands from "../components/product/brands.jsx";
import ProductStore from "../store/ProductStore.js";
import {useEffect} from "react";
const ProductDetails = () => {
    const {BrandList,DetailsRequest,ReviewListRequest,BrandListRequest}=ProductStore();
    const {id}=useParams();

    useEffect(() => {
        (async ()=>{
            await DetailsRequest(id);
            await ReviewListRequest(id);
            BrandList===null?await BrandListRequest():null
        })()
    }, [id]);


    return (
        <Layout>
            <Details/>
            <Brands/>
        </Layout>
    );
};
export default ProductDetails;