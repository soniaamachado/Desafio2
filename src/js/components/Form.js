import React, {Component} from "react";
import {connect} from "react-redux";
import uuidv1 from "uuid";
import {addArticle} from "../actions/index";

const mapDispatchToProps = dispatch => {
    return {
        addArticle: article => dispatch(addArticle(article))
    };
};

class ConnectedForm extends Component {
    constructor() {
        super();
        this.state = {
            title: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({[event.target.id]: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        const {title} = this.state;
        const id = uuidv1();
        this.props.addArticle({title, id});
        this.setState({title: ""});
    }

    render() {
        const {title} = this.state;
        return (
            <div style={{Top:'40%',margin:'auto',width:'300px', textAlign:'center'}}>
                <form onSubmit={this.handleSubmit}>
                    <input style={{width:'200px', margin:'auto',height:'45px',float:'left'}}
                        type="text"
                        className="form-control"
                        id="title"
                        value={title}
                        onChange={this.handleChange}
                           placeholder={'New Article'}
                    />
                    <button type="submit" style={{float:'right', height:'45px', textAlign:'center'}} className="btn btn-success btn-lg">
                        Save
                    </button>
            </form>
            </div>
        );
    }
}

const Form = connect(null, mapDispatchToProps)(ConnectedForm);
export default Form;