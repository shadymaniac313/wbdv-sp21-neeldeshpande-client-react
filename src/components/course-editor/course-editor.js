import React from "react";
import ModuleList from "./module-list";
import {Link, useParams} from "react-router";
import moduleReducer from "../../reducers/module-reducer"
import {combineReducers, createStore,} from "redux";
import {Provider} from "react-redux"
import "../../styles/course-editor.style.client.css"

const reducer = combineReducers({
    moduleReducer: moduleReducer
})

const store = createStore(reducer)

const CourseEditor = ({history}) => {
    const {courseId, moduleId} = useParams();

    return (
        <Provider store={store}>
            <div>
                <title>Title</title>
                <div id="wrapper">
                    <div className="wbdv-sticky-top">
                        <div className="row">
                            <div className="wbdv-editor-head-icon wbdv-sticky-top-content">
                                <i className="fa fa-arrow-left fa-2x wbdv-sticky-top-content"
                                   onClick={() => history.goBack()}
                                />
                            </div>
                            <div className="col-2 wbdv-editor-head-title">
                                <div className="wbdv-sticky-top-content wbdv-editor-head-title">
                                    <h4 className="wbdv-editor-head-title-text">{courseId} {moduleId}</h4>
                                </div>
                            </div>
                            <div className="col-9">
                                <ul className="nav nav-tabs">
                                    <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" href="#">
                                            Build
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Pages</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Theme</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Store</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Apps</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Settings</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link disabled" href="#" tabIndex={-1}
                                           aria-disabled="true">Privacy</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link disabled" href="#" tabIndex={-1} aria-disabled="true">
                                            <i className="fa fa-plus"/>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row wbdv-content-row">
                        <div className="col-md-2 wbdv-editor-left-pane">
                            <ModuleList/>
                        </div>
                        <div className="col-md-10 wbdv-editor-content">
                            <ul className="nav nav-pills wbdv-editor-nav-pills">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Topic 1</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Topic 2</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Topic 3</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Topic 4</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link disabled" href="#" tabIndex={-1} aria-disabled="true">
                                        Topic 5
                                        <i className="fa fa-lock"/>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </Provider>
    )


}

export default CourseEditor