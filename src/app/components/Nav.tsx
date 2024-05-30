export default function Nav({...props}) {
    return (
        <nav className="container flex justify-between p-10" {...props}>
            <div>
                <h1>World Museum</h1>
            </div>
            <div className="grid grid-cols-3">
                <div>Home</div>
                <div>About</div>
                <div>Contact</div>
            </div>
        </nav>
    );
}
