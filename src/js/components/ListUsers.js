import React, { Component } from "react";
import { connect } from "react-redux";
import {fetchUser} from "../actions/index";



const mapStateToProps = state => {
    return {user: state.user};
};

const mapDispatchToProps = dispatch => {
    return {
        fetchUser: () => dispatch(fetchUser()),

    }
};

class ConnectedUser extends Component {

    constructor(){
        super();
    }
    componentDidMount() {
        if (this.props.user.length==0){

            this.props.fetchUser({type: 'FETCH_USER'});
        }
    }

    render() {

        const users = this.props.user;
        console.log( users+"lol");
        return (
            <div className="row">
                {users.map((el, index) => (
                    <div key={index}> {el.first_name}</div>
                ))
                }
            </div>
        );
    }
}

// executar a função connect do Redux para:
// 1) mapear o State do Redux à propriedades locais do componente (mapStateToProps)
// 2) mapear as ações a serem invocadas às ações locais nas props do componente (mapDispatchToProps)
const User = connect(mapStateToProps, mapDispatchToProps())(ConnectedUser);

export default User;