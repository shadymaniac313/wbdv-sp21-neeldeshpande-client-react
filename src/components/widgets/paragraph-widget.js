import React, {useState} from 'react'

const ParagraphWidget = ({widget, editing}) => {

    const [cachedWidget, setCachedWidget] = useState(widget)

    return (
        <>
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
                    </select>
                    <textarea
                        onChange={(e) => {
                            setCachedWidget({
                                ...cachedWidget,
                                text: e.target.value
                            })
                            widget.text = e.target.value
                        }}
                        value={cachedWidget.text}
                        className="form-control wbdv-widgetlist-edit-content"
                    />
                </>
            }
            {
                !editing &&
                <p>
                    {widget.text}
                </p>
            }
        </>
    )
}

export default ParagraphWidget