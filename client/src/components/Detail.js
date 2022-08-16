import React from 'react';
import {useParams, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

function Detail() {

    const {id} = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState({
        id: "",
        name: "",
        description: "",
        price: "",
        stock: "",
    });
    useEffect(() => {
        const getProduct = async () => {
            try {
                const res = await axios.get(`http://localhost:3001/products/${id}`);
                setProduct(res.data);
            } catch (err) {
                console.log(err);
            }
        }
        getProduct();
    }, []);

    return (
        <div className={"container"}>
            <h1>Detail for your product!</h1>
            <h4>Name: {product.name}</h4>
            <h4>Price: {product.price}</h4>
            <h4>Stock: {product.stock}</h4>
            <hr/>
            <h4>Description:</h4>
            <h4>{product.description}</h4>
            <button type="button" className="btn btn-primary" onClick={()=> {navigate("/")}}>Home</button>
        </div>
    );
}

export default Detail;