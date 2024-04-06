import {useLocation} from "react-router-dom";
export default function BreadCrumbs() {
    const location = useLocation();
    const pathNames = location.pathname.split("/").filter((x) => x);
    return (
        <div>
            {pathNames.map((name, index) => {
                const routeTo = `/${pathNames.slice(0, index + 1).join("/")}`;
                const isLast = index === pathNames.length - 1;
                return isLast ? (
                    <span key={name}>{name}</span>
                ) : (
                    <span key={name}>
                        <a href={routeTo}>{name}</a>
                        {" | "}
                    </span>
                );
            })}
        </div>
    );
}
