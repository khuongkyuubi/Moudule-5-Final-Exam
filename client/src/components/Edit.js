import React from 'react';
import {useParams, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

function Edit() {

    const {id} = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState({
        id: "",
        name: "",
        description: "",
        price: "",
        stock: "",
    });
    const [isEdit, setIsEdit] = useState(false);
    useEffect(() => {
        const getProduct = async () => {
            try {
                const res = await axios.get(`http://localhost:3001/products/${id}`);
                setProduct(res.data);
            } catch (err) {
                console.log(err);
            }
        }
        if (id && id !== "create") {
            setIsEdit(true);
            getProduct();
        }
    }, []);


    const handleChange = e => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value
        })

    };

    const handleAdd = async e => {
        e.preventDefault();
        console.log("add");
        console.log("add", product);
        try {
            const res = await axios.post("http://localhost:3001/products", product);
            console.log(res)
            navigate("/");
        } catch (err) {
            console.log(err)
        }


    };


    const handleEdit = async e => {
        e.preventDefault();
        console.log(product);
        try {
            await axios.put(`http://localhost:3001/products/${id}`, product);
            console.log("Update oke");
            navigate("/");


        } catch (err) {
            console.log("Update failed")
            console.log(err)
        }

    };
    return (
        <div className={"container"}>
            <form onSubmit={isEdit ? handleEdit : handleAdd}>
                <div className="modal-header">
                    <h4 className="modal-title">{isEdit ? "Edit" : "Add"} Employee</h4>
                </div>
                <div className="modal-body">
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" className="form-control"
                               name={"name"}
                               value={product.name}
                               onChange={handleChange}
                               required/>
                    </div>
                    <div className="form-group">
                        <label>Price</label>
                        <input type="number" className="form-control"
                               name={"price"}
                               value={product.price}
                               onChange={handleChange}
                               required/>
                    </div>
                    <div className="form-group">
                        <label>Description</label>
                        <textarea className="form-control" required
                                  name={"description"}
                                  value={product.description}
                                  onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Stock</label>
                        <input type="number" className="form-control"
                               name={"stock"}
                               value={product.stock}
                               onChange={handleChange}
                               required/>
                    </div>
                </div>
                <div className="modal-footer">
                    <input type="button" className="btn btn-default" data-dismiss="modal"
                           defaultValue="Cancel" onClick={()=> {navigate("/")}}/>
                    <input type="submit" className="btn btn-success" value={isEdit ? "Update" : "Add"}/>
                </div>
            </form>

        </div>
    );
}

export default Edit;