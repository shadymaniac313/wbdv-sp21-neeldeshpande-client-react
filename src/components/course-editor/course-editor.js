import React, {useEffect, useState} from "react";
import ModuleList from "./module-list";
import {useParams} from "react-router";
import moduleReducer from "../../reducers/module-reducer"
import lessonReducer from "../../reducers/lesson-reducer";
import topicReducer from "../../reducers/topic-reducer"
import widgetReducer from "../../reducers/widget-reducer";
import {combineReducers, createStore,} from "redux";
import {Provider} from "react-redux"
import LessonTabs from "../course-editor/lesson-tabs"
import TopicPills from "../course-editor/topic-pills"
import WidgetList from "../widgets/widget-list";
import courseService from "../../services/course-service"

const reducer = combineReducers({
    moduleReducer: moduleReducer,
    lessonReducer: lessonReducer,
    topicReducer: topicReducer,
    widgetReducer: widgetReducer
})

const store = createStore(reducer)

const CourseEditor = ({history}) => {
    const {courseId} = useParams();
    const [courseTitle, setCourseTitle] = useState("");

    const getTitle = (courseId) => {
        courseService.findCourseById(courseId)
            .then(fetchedCourse => setCourseTitle(fetchedCourse.title));
    }

    useEffect(() =>
        getTitle(courseId)
    )

    return (
        <Provider store={store}>
            <div>
                <title>Title</title>
                <div id="wrapper">
                    <div className="wbdv-sticky-top-editor">
                        <div className="row">
                            <div className="wbdv-editor-head-icon wbdv-sticky-top-content">
                                <i className="fa fa-times fa-2x wbdv-sticky-top-content"
                                   onClick={() => history.goBack()}
                                />
                            </div>
                            <div className="col-2 wbdv-editor-head-title">
                                <div className="wbdv-sticky-top-content wbdv-editor-head-title">
                                    <h4 className="wbdv-editor-head-title-text">{courseTitle}</h4>
                                </div>
                            </div>
                            <div className="col-9 wbdv-editor-lesson-tabs-div">
                                <LessonTabs/>
                            </div>
                        </div>
                    </div>
                    <div className="row wbdv-content-row">
                        <div className="col-md-2 wbdv-editor-left-pane">
                            <ModuleList/>
                        </div>
                        <div className="col-md-10 wbdv-editor-content">
                            <TopicPills/>
                            <WidgetList/>
                        </div>
                    </div>
                </div>
            </div>
        </Provider>
    )


}

export default CourseEditor