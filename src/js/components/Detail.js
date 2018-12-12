import React, {Component} from "react";
import axios from 'axios';

class Detail extends Component {

    state = {
        noticia: []
    };

    componentDidMount() {
        axios.get('http://localhost/api/news/'+this.props.match.params.id)
            .then(response => {
                this.setState({noticia: response.data.data})
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    render() {
        if(this.state.noticia.length === 0){
            return null;
        }
        else {
            return (
                <div>
                    <img style={{float:'left', marginRight:'20px'}} src={this.state.noticia.img_url}/>
                    <div>
                        <h1 style={{marginLeft:"100px"}}> {this.state.noticia.title}</h1>
                        <p >{this.state.noticia.news}</p>
                    </div>
                </div>
            );
        }
    };
}

export default Detail;