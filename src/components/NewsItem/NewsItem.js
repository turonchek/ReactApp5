import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import { NewsContent } from '../NewsContent/NewsContent';

export class NewsItem extends PureComponent {

    render(){
        const {status, error, data} = this.props;

        return (
            <div className="">
                {status === `loading` || status === 'initial' ? (
                    <div>Loading...</div>
                ) : (
                    <div>
                        {error === null ? (
                            <div>
                                <NewsContent {...data}/>
                            </div>
                        ) : (
                            <span style={{ color: 'red'}}>{error}</span>
                        )}
                    </div>
                )}
            </div>
        );
    }
}

NewsItem.propTypes = {
    status: PropTypes.string.isRequired,
    error:PropTypes.string,
    data:PropTypes.shape({
        name:PropTypes.string,
        born:PropTypes.string,
        gender:PropTypes.string,
        culture:PropTypes.string, 
        url:PropTypes.string
    }),
};

NewsItem.defaultProps = {
    error:null,
};