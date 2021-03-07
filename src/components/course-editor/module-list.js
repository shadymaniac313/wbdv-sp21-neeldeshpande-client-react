import React from "react";

const ModuleList = () => {
    return(
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
    )
}

export default ModuleList