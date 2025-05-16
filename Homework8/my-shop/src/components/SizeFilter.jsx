const sizes = ['XS', 'S', 'M', 'L'];

const SizeFilter = ({ selected, onChange }) => (
    <div className="filter">
        {sizes.map(s => (
            <button key={s} onClick={() => onChange(s)} className={s === selected ? 'active' : ''}>
                {s}
            </button>
        ))}
        <button onClick={() => onChange(null)}>All</button>
    </div>
);

export default SizeFilter;