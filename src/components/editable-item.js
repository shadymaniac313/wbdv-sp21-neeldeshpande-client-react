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
    const [cachedItem, setCahedItem] = useState(item)

    return (
        <>
            {
                !editing &&
                <>
                    <div className={`row`}>
                        <div className={"col"}>
                            <Link className={`nav-link`} to={to}>
                                {item.title}
                            </Link>
                        </div>
                        <div className={"col"}>
                            <i onClick={() => setEditing(true)} className="pull-right fas fa-edit wbdv-list-delete-icon"/>
                        </div>
                    </div>
                </>
            }
            {
                editing &&
                <>
                    <input
                        onChange={(e) =>
                            setCahedItem({
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