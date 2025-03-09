import { useSelector } from "react-redux"
import { useDispatch } from 'react-redux'
import { changeAvailable, deleteProduct } from "../store/productSlice";
import EditProduct from "./EditProduct";
import { useRef, useState } from "react";


const ProductList = () => {
    const products = useSelector(state => state.products.products);
    const dispatch = useDispatch();

    const [editingProduct, setEditingProduct] = useState(null);
    const editRef = useRef(null);

    setTimeout(() => {
        if (editRef.current) {
            editRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    }, 100);


    return (
        <div>
            <h2>Список продуктов:</h2>
            {products.length > 0 ? (
                <ul className="product-box">
                    {products.map(product => (
                        <li key={product.id} >
                            <h2> {product.name} </h2>
                            <p > {product.description} </p>
                            <p> {product.price}$</p>
                            <p>Статус: {product.available ? <span style={{ color: 'green' }} > Доступен</span>
                                : <span style={{ color: 'red' }} > Нет в наличии</span>} </p>
                            <button className="btnDelete" onClick={() => dispatch(deleteProduct(product.id))} >удалить</button>
                            <button className="btnAvailable" onClick={() => dispatch(changeAvailable(product.id))} >
                                {product.available ? 'скрыть товар' : 'сделать доступным'}
                            </button>
                            <button className="btnEdit" onClick={() => setEditingProduct(product)} >
                                Редактировать
                            </button>
                            {editingProduct?.id === product.id && (
                                <div ref={editRef} >
                                    <EditProduct
                                        product={editingProduct}
                                        onClose={() => setEditingProduct(null)} />
                                </div>
                            )}
                        </li>
                    ))}

                </ul>
            ) : (
                <p>список пуст</p>
            )}
        </div>
    )

};

export default ProductList;