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
        <header className="flex h-60">
            <section className="flex w-4/12 items-center">
                <div className="flex justify-center">
                    <img src="https://3.bp.blogspot.com/-9ZnsaiEesoE/VOTsxSoEfUI/AAAAAAAAAe0/T7tf0CwsRxg/s1600/jardin.jpg" alt="logo del jardin" className="w-2/3" />
                </div>
            </section>
            <section className="flex justify-around w-8/12 p-10">
                <nav>
                    <ul className="flex space-x-4 text-lg border-b-2">
                        {links.map(({ label, route }) => (
                            <li key={route}>
                                <Link href={route}>
                                    {label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className="space-x-4 text-lg">
                    <button>Ingresar</button>
                    <button>Registrarse</button>
                </div>
            </section>
        </header>
    );
}