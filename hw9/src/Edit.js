import { useState } from "react";
var idNum = 0;

const Edit = ({ addData, deleteData }) => {

    const [content, setContent] = useState("");
    function innerTextChange(e) {
        setContent(e.target.value);
    }

    function addItem() {
        idNum++;
        addData(function (prevData) {
            return [...prevData, { id: idNum, content, deleteData }]
        }

        );
    }

    return (
        <div className="Edit">
            <h3>CGU To Do List</h3>
            <br />
            <input name="toDo" type="text" placeholder="add a new todo..."
                value={content} onChange={innerTextChange} />
            <button onClick={addItem} >Add</button>
        </div>
    );
}
export default Edit;