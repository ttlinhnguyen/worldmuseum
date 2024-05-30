import NAV_ITEMS from "../data/navItems";

export default function Nav({ ...props }) {
    return (
        <nav className="container flex justify-between p-10 mx-auto" {...props}>
            <div>
                <h1 className="text-2xl font-medium">
                    <a href="/">World Museum</a>
                </h1>
            </div>
            <div className="grid grid-cols-3">
                {NAV_ITEMS.map((item, index) => {
                    return (
                        <div key={index}>
                            <a href={item.path}>{item.name}</a>
                        </div>
                    );
                })}
            </div>
        </nav>
    );
}
