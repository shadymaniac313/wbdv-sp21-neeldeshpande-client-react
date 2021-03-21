import React from "react";
import topicReducer from "../reducers/topic-reducer";

const WIDGET_URL = "http://localhost:8080/api/widgets"
const TOPIC_URL = "http://localhost:8080/api/topics"


const findAllWidgets = () =>
    fetch(`${WIDGET_URL}`)
        .then(response => response.json())


const findWidgetsForTopic = (topicId) =>
    fetch(`${TOPIC_URL}/${topicId}/widgets`)
        .then(response => response.json())


const findWidgetById = (widgetId) =>
    fetch(`$${WIDGET_URL}/{widgetId}`)
        .then(response => response.json())


const createWidget = (topicId, widget) =>
    fetch(`${TOPIC_URL}/${topicId}/widgets`, {
        method: "POST",
        body: JSON.stringify(widget),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())


const updateWidget = (widgetId, widget) =>
    fetch(`${WIDGET_URL}/${widgetId}`, {
        method: "PUT",
        body: JSON.stringify(widget),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(status => status.json())

const deleteWidget = (widgetId) => {
    fetch(`${WIDGET_URL}/${widgetId}`, {
        method: "DELETE"
    })
        .then(status => status.json())
}

const api = {
    createWidget,
    findAllWidgets,
    findWidgetsForTopic,
    updateWidget,
    deleteWidget
}

export default api