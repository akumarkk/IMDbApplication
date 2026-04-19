import { Routes, Route } from "react-router-dom";
import Watched from "./Watched";

const WatchList = () => {
    return (
        <div>
            <h5>
                Watch List
            </h5>
            <Routes>
                <Route path="watched" element={<Watched />} />
            </Routes>
        </div>
        
    )
}

export default WatchList;