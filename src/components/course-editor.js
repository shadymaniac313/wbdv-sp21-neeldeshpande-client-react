import React from "react";

export default class CourseEditor extends React.Component {
    render() {
        return (
            <div>
                <title>Title</title>
                <div id="wrapper">
                    <div className="wbdv-sticky-top">
                        <div className="row">
                            <div className="wbdv-editor-head-icon wbdv-sticky-top-content">
                                <i className="fa fa-times-circle fa-2x wbdv-sticky-top-content"/>
                            </div>
                            <div className="col-2 wbdv-editor-head-title">
                                <div className="wbdv-sticky-top-content wbdv-editor-head-title">
                                    <h4 className="wbdv-editor-head-title-text">CS5610</h4>
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
                            <ul className="list-group wbdv-module-list">
                                <li className="list-group-item active">
                                    Module 1 - JQuery
                                    <i className="pull-right fa fa-times wbdv-list-delete-icon"/>
                                </li>
                                <li className="list-group-item">
                                    Module 2 - React
                                    <i className="pull-right fa fa-times wbdv-list-delete-icon"/>
                                </li>
                                <li className="list-group-item">
                                    Module 3 - Redux
                                    <i className="pull-right fa fa-times wbdv-list-delete-icon"/>
                                </li>
                                <li className="list-group-item">Module 4 - Native
                                    <i className="pull-right fa fa-times wbdv-list-delete-icon"/>
                                </li>
                                <li className="list-group-item">Module 5 - Angular
                                    <i className="pull-right fa fa-times wbdv-list-delete-icon"/>
                                </li>
                                <li className="list-group-item">Module 6 - Node
                                    <i className="pull-right fa fa-times wbdv-list-delete-icon"/>
                                </li>
                                <li className="list-group-item">Module 7 - Mongo
                                    <i className="pull-right fa fa-times wbdv-list-delete-icon"/>
                                </li>
                                <li className="list-group-item wbdv-group-item-add">New Module
                                    <i className="pull-right fa fa-plus wbdv-list-delete-icon"/>
                                </li>
                            </ul>
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
        )

    }

}