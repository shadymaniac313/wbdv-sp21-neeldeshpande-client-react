import React, {useEffect} from "react";
import {connect} from 'react-redux'
import EditableItem from "../editable-item"
import {useParams} from "react-router";
import moduleService from "../../services/module-service"

const ModuleList = (
    {
        modules = [],
        findModulesForCourse = (courseId) => console.log(courseId)
    }) => {
    const {courseId, moduleId} = useParams();
    useEffect(() => {
        findModulesForCourse(courseId)
    }, [])
    return (
        <ul className="list-group wbdv-module-list">
            {
                modules.map(module =>
                    <li className="list-group-item active">
                        <EditableItem key={module._id} item={module}/>
                    </li>
                )
            }
            <li className="list-group-item wbdv-group-item-add">New Module
                <i className="pull-right fa fa-plus wbdv-list-delete-icon"/>
            </li>
        </ul>
    )
}

const stpm = (state) => {
    return {
        modules: state.moduleReducer.modules
    }
}

const dtpm = (dispatch) => {
    return {
        findModulesForCourse: (courseId) => {
            moduleService.findModulesForCourse(courseId)
                .then(fetchedModules => dispatch({
                    type: "FIND_MODULES_FOR_COURSE",
                    modules: fetchedModules
                }))
        }
    }
}

export default connect(stpm, dtpm)(ModuleList)