import React from "react";
import moment from "moment";

export default class CourseStickyTop extends React.Component {

    constructor(props) {
        super(props);
    }

    state = {
        value: '',
        date: moment().format("MM/DD/YYYY")
    }

    handleInputChange = (e) => {
        this.setState({
            value: e.target.value
        })
    }

    handleAddCourse = () => {
        this.setState({
            value:'',
            date: moment().format("MM/DD/YYYY")
        })
        this.props.addCourse({
            title: this.state.value,
            owner: "me",
            lastModified: this.state.date
        })
    }

    render() {
        return (
            <div className="wbdv-sticky-top wbdv-padding-5px">
                <div className="row">
                    <div className="col-1">
                        <i className="fa fa-bars fa-2x wbdv-sticky-top-content wbdv-padding-left-20percent"/>
                    </div>
                    <div className="col-2 wbdv-hide-on-minimize">
                        <h4 className="wbdv-sticky-top-content wbdv-home-title">Course Manager</h4>
                    </div>
                    <div className="col-8">
                        <input className="form-control wbdv-course-searchbar" placeholder="New Course Title"
                               onChange={this.handleInputChange} value={this.state.value}/>
                    </div>
                    <div className="col-1">
                        <i onClick={this.handleAddCourse} className="fa fa-plus-circle fa-2x wbdv-sticky-top-content"/>
                    </div>
                </div>
            </div>
        )
    }
}