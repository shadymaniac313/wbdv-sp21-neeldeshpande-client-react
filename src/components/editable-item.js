import React, {useState} from "react";
import {Link} from "react-router-dom";

const EditableItem = ({
                          to = "/testlink",
                          item = {_id: "ABC", title: ""},
                          active,
                          deleteItem,
                          updateItem
                      }) => {

    const [editing, setEditing] = useState(false)
    const [cachedItem, setCachedItem] = useState(item)

    return (
        <>
            {
                !editing &&
                <>
                    <Link className={`nav-link`} to={to}>
                        {item.title}
                    </Link>
                    <i onClick={() => setEditing(true)} className="pull-right fas fa-edit wbdv-list-delete-icon"/>
                </>
            }
            {
                editing &&
                <>
                    <input
                        onChange={(e) =>
                            setCachedItem({
                                ...cachedItem,
                                title: e.target.value
                            })}
                        value={cachedItem.title}/>
                    <i onClick={() => {
                        setEditing(false)
                        updateItem(cachedItem)
                    }} className="fas fa-check"/>
                    <i onClick={() => deleteItem(item)} className="fas fa-times"/>
                </>
            }
        </>
    )
}

export default EditableItem