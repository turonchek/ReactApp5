import React, {PureComponent} from 'react';
import { NewsItem } from '../NewsItem/NewsItem';
import { NewsForm } from '../NewsForm/NewsForm';
import PropTypes from 'prop-types';

export class NewsPage extends PureComponent {

    constructor(props){
        super(props);

        this.state = {
            status: 'initial',
            error:null,
            data:null,
            isItem:false,
            isForm:false,
        };
    }

    toggleItem =() => {
        this.setState({
            isItem: !this.state.isItem,
        })
    }
    toggleForm =() => {
        this.setState({
            isForm: !this.state.isForm,
        })
    }

    fetchData = (id) => {
        this.setState({
            status:'loading',
            error:null,
            data:null,
        });

        fetch(`https://anapioficeandfire.com/api/characters/${id}`)
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                this.setState({
                    status: `success`,
                    error: null,
                    data,
                });
            })
            .catch((error) => {
                this.setState({
                    status: `error`,
                    error:error.message,
                    data:null,
                });
            })
    }
    

    render(){

        const {status, error, data,isItem, isForm} = this.state;

        return (
            <div className="">
                <button onClick={this.toggleItem}>{isItem ? 'Close item' : 'Show item'}</button>
                <button onClick={this.toggleForm}>{isForm ? 'Close form ' : 'Show form'}</button>
                {isItem && <NewsItem 
                            status={status}
                            error={error}
                            data={data}/>}
                {isForm && <NewsForm/>}
            </div>
        );
    }

    componentDidMount() {
        const {newsID} = this.props;
        this.fetchData(newsID);
    }
}

NewsPage.propTypes = {
    newsID: PropTypes.number,
};

NewsPage.defaultProps = {
    newsID:583,
};