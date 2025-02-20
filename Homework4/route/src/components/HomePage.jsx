import { Link } from 'react-router-dom'

function Home() {
    return (
        <div>
            <h1>Главная страница</h1>
            <Link to={`/about`} >перейти на страницу "Обо мне"</Link>
        </div>
    );
}

export default Home;