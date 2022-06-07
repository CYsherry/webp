const ListItem = ({ content, deleteData, id }) => {

    function deleteItem() {
        deleteData(function (prev) {
            return prev.filter(item => item.id !== id)
        })
    }

    return (
        <div>
            <input type="checkbox" ></input>
            <label>{content} </label>
            <button className="remove" onClick={deleteItem}>delete</button>
            <br /><br />
        </div>
    );
}
export default ListItem;