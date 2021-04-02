import React, {useState} from 'react'

const ListWidget = ({widget, setWidget, editing}) => {

    const [cachedWidget, setCachedWidget] = useState(widget)

    return (
        <div>
            {
                editing &&
                <>
                    <select
                        onChange={(e) => {
                            setCachedWidget({
                                ...cachedWidget,
                                type: e.target.value
                            })
                            widget.type = e.target.value
                        }}
                        value={cachedWidget.type}
                        className="form-control wbdv-widgetlist-edit-content">
                        <option value={"HEADING"}>Heading</option>
                        <option value={"PARAGRAPH"}>Paragraph</option>
                        <option value={"LIST"}>List</option>
                        <option value={"IMAGE"}>Image</option>
                    </select>
                </>
            }
            {
                !editing &&
                <>
                    {
                        widget.widgetOrder === 1 &&
                        <ol>
                            {
                                widget.text.split("\n").map(item => {
                                    return (
                                        <li>{item}</li>
                                    )
                                })
                            }
                        </ol>
                    }
                    {
                        !(widget.widgetOrder === 1) &&
                        <ul>
                            {
                                widget.text.split("\n").map(item => {
                                    return (
                                        <li>{item}</li>
                                    )
                                })
                            }
                        </ul>
                    }
                </>
            }
            {
                editing &&
                <div>
                    <input onChange={(e) => {
                        setCachedWidget({
                            ...cachedWidget,
                            widgetOrder: e.target.checked ? 1 : 0
                        })
                        widget.widgetOrder = e.target.checked ? 1 : 0
                        console.log(widget)
                    }}
                           checked={!!widget.widgetOrder}
                           type="checkbox"/> Ordered
                    <br/>
                    List Items
                    <textarea
                        onChange={(e) => {
                            setCachedWidget({
                                ...cachedWidget,
                                text: e.target.value
                            })
                            widget.text = e.target.value
                        }}
                        rows={10}
                        value={widget.text}
                        placeholder={"Enter one list item per line."}
                        className="form-control">

                    </textarea>
                </div>
            }
        </div>
    )
}

export default ListWidget