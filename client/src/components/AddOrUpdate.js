import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";
import {nanoid} from "nanoid";

function AddOrUpdate() {
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
        if (id) {
            getProduct();
            setIsEdit(true)
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

    const handleEdit = e => {
        e.preventDefault();
    };

    return (
        <div id="addOrEditModal" className="modal ">
            <div className="modal-dialog">
                <div className="modal-content">
                    <form onSubmit={isEdit ? handleEdit : handleAdd}>
                        <div className="modal-header">
                            <h4 className="modal-title">{isEdit ? "Edit" : "Add"} Employee</h4>
                            <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×
                            </button>
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
                                   defaultValue="Cancel"/>
                            <input type="submit" className="btn btn-success" defaultValue={isEdit ? "Update" : "Add"}/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AddOrUpdate;