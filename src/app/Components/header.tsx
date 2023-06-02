import Link from "next/link";

const links = [{
    label: "Home",
    route: "/",
}, {
    label: "Nosotros",
    route: "/nosotros",
}, {
    label: "Programas",
    route: "/programas",
}, {
    label: "Contacto",
    route: "/contacto",
}];

export function Header() {
    return (
        <header className="flex justify-around items-center p-4">
            <div>
                <img src="" alt="manito" />
            </div>
            <div className="flex items-center flex-col">
                <h1>CRECIENDO</h1>
                <h2>Donde el aprendizaje es divertido</h2>
            </div>
            <div>
                <img src="" alt="manito" />
            </div>
            <nav>
                <ul>
                    {links.map(({ label, route }) => (
                        <li key={route}>
                            <Link href={route}>
                                {label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
            <div>
                <button>Ingresar</button>
                <button>Registrarse</button>
            </div>
        </header>
    );
}