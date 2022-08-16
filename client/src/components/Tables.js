import React, {useEffect, useState} from 'react';
import axios from "axios";
import {BrowserRouter, Link} from "react-router-dom";
import Row from "./Row";


function Tables() {

    const [products, setProducts] = useState([]);
    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await axios.get("http://localhost:3001/products")
                setProducts(res.data);
            } catch (err) {
                console.log(err)
            }

        };
        getProducts();
    }, [])

    return (
        <div>
            <div className="container-xl">
                <div className="table-responsive">
                    <div className="table-wrapper">
                        <div className="table-title">
                            <div className="row">
                                <div className="col-sm-6">
                                    <h2>List <b>Products</b></h2>
                                </div>
                                <div className="col-sm-6">

                                    <Link className="btn btn-success" to={`/products/create`}>
                                        <span>Add New Employee</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <table className="table table-striped table-hover">
                            <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Descriptions</th>
                                <th>Price</th>
                                <th>Stock</th>
                                <th colSpan={"3"}>Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                products?.map((product, index) => (
                                    <Row key={index} index={index} product={product}/>
                                ))
                            }

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Tables;