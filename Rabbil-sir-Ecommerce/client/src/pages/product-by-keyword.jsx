import React, {useEffect} from 'react';
import ProductStore from "../store/ProductStore.js";
import {useParams} from "react-router-dom";
import Layout from "../components/layout/layout.jsx";
import ProductList from "../components/product/product-list.jsx";

const ProductByKeyword = () => {
    const {ListByKeywordRequest}=ProductStore();
    const {keyword}=useParams();

    useEffect(() => {
        (async ()=>{
            await ListByKeywordRequest(keyword)
        })()
    }, [keyword]);


    return (
        <Layout>
            <ProductList/>
        </Layout>
    );
};

export default ProductByKeyword;