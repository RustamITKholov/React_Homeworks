import { Link } from 'react-router-dom'

function About() {
    return (
        <div>
            <h1>Страница обо мне</h1>
            <Link to={`/`} >перейти на главную страницу</Link>
        </div>
    );
}

export default About;