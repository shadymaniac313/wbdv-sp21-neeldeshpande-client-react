import React, {useEffect, useState} from "react";
import ParagraphWidget from "./paragraph-widget";
import HeadingWidget from "./heading-widget";
import {useParams} from "react-router";
import widgetService from "../../services/widget-service"
import {connect} from "react-redux";

const WidgetList = ({
                        widgets = [],
                        findWidgets = (topicId) => console.log(topicId),
                        createWidgetForTopic,
                        updateWidget,
                        deleteWidget
                    }) => {
    const {moduleId, lessonId, topicId} = useParams()

    useEffect(() => {
        findWidgets(topicId)
    }, [moduleId, lessonId, topicId])

    const [editingWidget, setEditingWidget] = useState({})

    return (
        <div>
            <i onClick={() => createWidgetForTopic(topicId)} className="fas fa-plus fa-2x float-right"/>
            <h2>Widget List ({widgets.length}) {editingWidget.id}</h2>
            <ul className="list-group">
                {
                    widgets.map(widget =>
                        <li className="list-group-item" key={widget.id}>
                            {
                                editingWidget.id === widget.id &&
                                <>
                                    <i
                                        onClick={() => {
                                            updateWidget(editingWidget)
                                            setEditingWidget({})
                                        }}
                                        className="fas fa-2x fa-check float-right"/>
                                    <i
                                        onClick={() => deleteWidget(editingWidget)}
                                        className="fas fa-2x fa-trash float-right"/>
                                </>
                            }
                            {
                                editingWidget.id !== widget.id &&
                                <i onClick={() => setEditingWidget(widget)}
                                   className="fas fa-cog float-right"/>
                            }
                            {
                                widget.type === "HEADING" &&
                                <HeadingWidget
                                    editing={editingWidget.id === widget.id}
                                    widget={widget}/>
                            }
                            {
                                widget.type === "PARAGRAPH" &&
                                <ParagraphWidget
                                    editing={editingWidget.id === widget.id}
                                    widget={widget}/>
                            }
                        </li>
                    )
                }
            </ul>
        </div>
    )
}

const stpm = (state) => {
    return {
        widgets: state.widgetReducer.widgets
    }
}

const dtpm = (dispatch) => {
    return {
        findWidgets: (topicId) => {
            widgetService.findWidgetsForTopic(topicId)
                .then(fetchedWidgets => dispatch({
                    type: "FIND_WIDGETS_FOR_TOPIC",
                    widgets: fetchedWidgets
                }))
        },
        createWidgetForTopic: (topicId) => {
            widgetService.createWidget(topicId, {
                type: "HEADING",
                size: 1,
                text: "New Widget"
            })
                .then(createdWidget => dispatch({
                    type: "CREATE_WIDGET",
                    widget: createdWidget
                }))
        },
        updateWidget: (widget) => {
            console.log("logging from update widget")
            console.log(widget.id)
            return widgetService.updateWidget(widget.id, widget)
                .then(status => dispatch({
                    type: "UPDATE_WIDGET",
                    widget

                }))
        }
        ,
        deleteWidget: (widget) =>
            widgetService.deleteWidget(widget.id)
                .then(status => dispatch({
                    type: "DELETE_WIDGET",
                    widgetToDelete: widget
                }))
    }
}

export default connect(stpm, dtpm)(WidgetList);