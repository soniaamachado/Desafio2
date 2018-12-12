import React, {Component} from "react";
import {connect} from "react-redux";
import {deleteArticle} from "../actions/index";
import {fetchArticles} from "../actions/index";
import "../../css/articles.css";
import Link from "react-router-dom/es/Link";

const mapDispatchToProps = dispatch => {
    return {
        deleteArticle: article => dispatch(deleteArticle(article)),
        fetchArticles: () => dispatch(fetchArticles()),
    }
};

const mapStateToProps = state => {
    return {articles: state.articles};
};

class ConnectedList extends Component {

    constructor() {
        super();
        this.clickAction = this.clickAction.bind(this);
    }

    clickAction(article) {
        this.props.deleteArticle(article);
    }

    componentDidMount() {
        if (this.props.articles.length==0){

        this.props.fetchArticles({type: 'FETCH_ARTICLES'});
        }
    }

    render() {
        const articles = this.props.articles;
        return (
            <div className="row">
                        {articles.map((el, index) => (
                            <div className="col-lg-3 col-md-4 col-sm-6portfolio-item" style={{marginBottom:'35px'}}>
                            <div  className="card h-100">
                                <Link  className='adName' to = {{pathname: `detail/${el.id}`, query: { id: el.id}}}>
                                <a href="#"><img className="card-img-top" src={el.img_url} alt=""/> </a>
                                <div className="card-body">
                                    <h4 className="card-title" style={{color:'tomato'}}>
                                        {el.title}
                                    </h4>
                                    <p className="card-text">{el.resume}</p>
                                </div>
                                </Link>

                            </div>
                            </div>
                    ))
                }
            </div>
        );
    }
}

const List = connect(mapStateToProps, mapDispatchToProps)(ConnectedList);
export default List;