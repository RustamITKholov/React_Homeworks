import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { addProduct, updateProduct } from '../store/productSlice';



const AddProduct = () => {
    const dispatch = useDispatch();

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [available, setAvailable] = useState(true);



    const handleSubmit = (e) => {
        e.preventDefault();
        handleAddProduct();
    };

    const handleAddProduct = () => {
        if (!name || !description || !price) return;

        const newProduct = {
            name,
            description,
            price: +price,
            available
        };

        dispatch(addProduct(newProduct));

        setName('');
        setDescription('');
        setPrice('');
        setAvailable(true);
    };


    return (
        <form className='productForm' onSubmit={handleSubmit}>
            <h2>Добавление продукта</h2>
            <input type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder='Введите название'
            />
            <input type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder='Введите описание'
            />
            <input type="text"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder='Введите цену'
            />
            <label>
                <input type="checkbox"
                    checked={available}
                    onChange={() => setAvailable(!available)}
                />
                Доступен
            </label>
            <button type='submit'> Добавить продукт </button>
        </form>
    )
};

export default AddProduct;