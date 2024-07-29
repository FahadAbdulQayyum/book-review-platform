import { useState } from "react";
import { BounceLoader } from "react-spinners";

function Loader() {
    let [loading, setLoading] = useState(true);
    let [color] = useState("#EAB308");

    return (
        <div className="sweet-loading flex justify-center items-center h-screen">
            <button onClick={() => setLoading(!loading)}></button>
            <BounceLoader
                color={color}
            />
        </div>
    );
}

export default Loader;