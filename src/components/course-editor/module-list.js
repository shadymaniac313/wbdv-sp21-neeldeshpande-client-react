import React, {useEffect} from "react";
import {connect} from 'react-redux'
import EditableItem from "../editable-item"
import {useParams} from "react-router";
import moduleService, {deleteModule} from "../../services/module-service"

const ModuleList = (
    {
        modules = [],
        findModulesForCourse = (courseId) => console.log(courseId),
        updateModule,
        deleteModule,
        createModule
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
                        <EditableItem key={module._id}
                                      item={module}
                                      updateItem={updateModule}
                                      deleteItem={deleteModule}
                                      createModule={createModule}
                        />
                    </li>
                )
            }
            <li className="list-group-item wbdv-group-item-add">New Module
                <i onClick={() => createModule(courseId)} className="pull-right fa fa-plus wbdv-list-delete-icon"/>
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
        },
        deleteModule: (item) =>
            moduleService.deleteModule(item._id)
                .then(status => dispatch({
                    type: "DELETE_MODULE",
                    moduleToDelete: item
                })),
        updateModule: (module) => {
            moduleService.updateModule(module._id, module)
                .then(status => dispatch({
                    type: "UPDATE_MODULE",
                    module
                }))
        },
        createModule: (courseId) => {
            moduleService.createModuleForCourse(courseId, {title: "New Module"})
                .then(createdModule => dispatch({
                    type: "CREATE_MODULE",
                    module: createdModule
                }))
        }
    }
}

export default connect(stpm, dtpm)(ModuleList)