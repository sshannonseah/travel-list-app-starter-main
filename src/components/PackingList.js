import Item from "./Item";


function PackingList({ items , onDeleteItem , updatedItem}) {


    return (
      <div className="list">
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              <Item item={item} onDelete={onDeleteItem} onUpdate={updatedItem}/>
              </li>
          ))}
        </ul>
      </div>
    );
  }

  export default PackingList;