import React from 'react';
import {useParams, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

function ConfirmDelete() {

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


    const handleDelete = async e => {
        console.log(product);
        try {
            await axios.delete(`http://localhost:3001/products/${id}`);
            console.log("Delete oke");
            navigate("/");


        } catch (err) {
            console.log("Delete failed")
            console.log(err)
        }

    };
    return (
        <div className={"container"}>
            <h1>You sure wanna delete!</h1>
            <h4>Name: {product.name}</h4>
            <h4>Price: {product.price}</h4>
            <h4>Stock: {product.stock}</h4>
            <hr/>
            <h4>Description:</h4>
            <h4>{product.description}</h4>
            <button type="button" className="btn btn-danger" onClick={handleDelete}>Delete</button>
            <span>&nbsp;</span>
            <button type="button" className="btn btn-secondary mx-10" onClick={()=> {navigate("/")}}>Cancel</button>
        </div>
    );
}

export default ConfirmDelete;