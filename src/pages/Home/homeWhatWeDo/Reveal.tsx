
interface IReveal {
    children: JSX.Element,
    count?: string,
    name: string
}

function Reveal({children, count, name}: IReveal) {
    return (
        <div>
            <h1>{name}</h1>
            <h2>{count}</h2>
            <div>
                {children}
            </div>

        </div>
    );
}

export default Reveal;