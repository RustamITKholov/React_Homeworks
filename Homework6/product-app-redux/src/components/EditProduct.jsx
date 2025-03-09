import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateProduct } from "../store/productSlice";


const EditProduct = ({ product, onClose }) => {

    const dispatch = useDispatch();


    const [name, setName] = useState(product.name);
    const [description, setDescription] = useState(product.description);
    const [price, setPrice] = useState(product.price);

    const handleSave = () => {
        if (!name || !description || !price) return;

        dispatch(updateProduct({ id: product.id, name, description, price: +price }));
        onClose();
    }

    return (
        <div className="edit-product" >
            <h3>Редактирование продукта: ({product.name}) </h3>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
            <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
            <div className="btn-edit__box" >
                <button onClick={handleSave} >сохранить</button>
                <button onClick={onClose} >отмена</button>
            </div>
        </div>
    )
};

export default EditProduct;