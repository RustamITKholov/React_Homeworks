const PageHeader = ({ title, breadcrumbs }) => {
    return (
        <section className="head center">
            <h2 className="head__heading">{title}</h2>
            <nav className="head__nav">
                <ul className="breadcrumbs__ul">
                    {breadcrumbs.map((crumb, index) => (
                        <li key={index} className="breadcrumbs__li">
                            <a href="#" className="breadcrumbs__link">{crumb}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        </section>
    );
};

export default PageHeader;
