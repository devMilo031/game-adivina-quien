import './styles/Header.css'


export function Header({ name }) {
    return (
        <header>
            <img className='imgHeader' src="https://somoskudasai.com/wp-content/uploads/2023/06/portada_kimetsu-337.jpg" alt="rengoku-header" />
            <h1 className='titleHeader'>¡Adivina Quien!</h1>
            {name ? <h2 className='nameHeader'>Hola {name}!</h2> : ''}
        </header>
    )
}