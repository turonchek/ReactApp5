import React,{PureComponent, useRef} from "react";
import { HASHTAGS } from "../../data";
import PropTypes from 'prop-types';

export class NewsForm extends PureComponent{
    titleInput=null;
    descriptionInput=null;
    hashtagsCheck=[];

    handleSubmit = (e) =>{
        e.preventDefault();
        console.log(`----------------- Submit form -----------------`)
        console.log(`TITLE: ${this.titleInput.value}`)
        console.log(`DESCRIPTION: ${this.descriptionInput.value}`)
        this.hashtagsCheck
        .filter(item => item.checked)
        .map((item,i)=> console.log(`HASHTAG ${i+1}: ${item.value}`))
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit} className="news-form__cont">

                <div className="news-form__row">
                    <div className="news-form__label">
                        <label htmlFor="news-form-title">Title:</label>
                    </div>
                    <input 
                        ref={(node)=>this.titleInput=node}
                        type="text" 
                        name="title" 
                        id="news-form-title"/>
                </div>

                <div className="news-form__row">
                    <div className="news-form__label">
                        <label htmlFor="news-form-description">Description:</label>
                    </div>
                    <textarea 
                        style={{width: '200px',height: '100px',}} 
                        ref={(node)=>this.descriptionInput=node}
                        name="description" 
                        id="news-form-description"/>
                </div>

                <div className="news-form__row">
                    <span>Hashtags:</span>
                    <div>
                        {HASHTAGS.map((hashtagsEl,i) => (
                            <label key={hashtagsEl.id}>
                            <input
                                type="checkbox"
                                ref={(node)=>this.hashtagsCheck[i]=node}
                                value={hashtagsEl.word}
                            /><span>{hashtagsEl.word}</span>
                            </label>
                        ))}
                    </div>
                </div>
                <button type="submit">Create item</button>
                </form>
            </div>
        );
    }
}