import { useSelector, useDispatch } from 'react-redux';
import { light, dark } from '../redux/themeSlice';
import '../ThemeToggle.css';

function ThemeToggle() {

    const theme = useSelector((state) => state.theme);
    const dispatch = useDispatch();

    return (
        <div className={theme} >
            <h2>Столицы мировых держав</h2>
            <div className='img'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT_jYUcYh5nXaDxzF0DntwfRiONvYUX9uRmw&s" alt="" />
                <img src="https://media.istockphoto.com/id/482334184/pl/zdj%C4%99cie/w-nocy-w-centralnej-dzielnicy-biznesowej-pekinu-budynki-panorama-miasta-chiny.jpg?s=612x612&w=0&k=20&c=9BCQUXFdeFa99blOghLv55ILTn4SioyBJeWsJVfGH4M=" alt="" />
                <img src="https://media.istockphoto.com/id/1471251637/photo/the-capitol-building-in-washington-d-c-usa.jpg?s=612x612&w=0&k=20&c=dQ3TVTNYMq4kOmj_ylKeRRpDMRoBQYuXC4dp24dnd8A=" alt="" />
            </div>

            <ul>
                <li>Москва</li>
                <li>Пекин</li>
                <li>Вашингтон</li>
            </ul>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis enim exercitationem eius non in, accusamus velit ducimus quae, fuga possimus, earum aut? Odit tempore esse pariatur minus. Distinctio aut dignissimos amet numquam tempora magnam iusto, velit minus saepe qui sint aspernatur accusamus harum dicta obcaecati eligendi illo autem debitis necessitatibus veritatis natus assumenda dolorum. Repellat unde quod fugiat voluptatum, vero possimus incidunt optio iste dignissimos. Perferendis sint illo vel neque omnis doloribus nam numquam facere deleniti consequuntur quisquam suscipit porro ipsa expedita, labore incidunt assumenda repellendus? Quidem, accusamus voluptas? Neque voluptates voluptatibus ea deserunt dolores laudantium nulla minima. Natus, tempore?</p>
            <button onClick={() => dispatch(theme === 'light' ? dark() : light())} >Поменять на {
                theme === 'light'
                    ? 'темную'
                    : 'светлую'} тему</button>
        </div>
    );
}

export default ThemeToggle;