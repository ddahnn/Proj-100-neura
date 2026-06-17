import "./container.modules.css";

type ContainerProps = {
    children: React.ReactNode;
}


export function Container({children}: ContainerProps) {
    return (
        <div className="container">
            <div className="containerContent">
                {children}
            </div>
        </div>
    )
}