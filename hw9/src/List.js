import ListItem from "./ListItem";

const List = ({ added }) => {

    return (
        <div className="List">
            {added.map(item => <ListItem content={item.content} deleteData={item.deleteData} id={item.id} />)
            }
        </div>
    );
}
export default List;