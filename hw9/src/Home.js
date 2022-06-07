import Edit from "./Edit";
import List from "./List";
import { useState } from 'react';

const Home = () => {

    const [data, setData] = useState([]);

    return (
        <div>
            <Edit addData={setData} deleteData={setData} />
            <br />
            <List added={data} />
        </div>
    );
}

export default Home;