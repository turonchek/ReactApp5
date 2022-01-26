import React, {PureComponent,createRef} from 'react';
import PropTypes from 'prop-types';
import './NewsContent.css'
import gsap from 'gsap';

export class NewsContent extends PureComponent {

    contentEl=createRef();
    nameEl=createRef();
    genderEl=createRef();
    bornEl=createRef();
    cultureEl=createRef();
    linkEl=createRef();

    componentDidMount(){
        let content=this.contentEl.current;
        let name=this.nameEl.current;
        let gender=this.genderEl.current;
        let born=this.bornEl.current;
        let culture=this.cultureEl.current;
        let link=this.linkEl.current;
        // console.log(name,gender,born,culture,link)

        let timeline = gsap.timeline();

        let contentTransition=gsap.fromTo(content,{
            opacity: 0,
            y:100
        }, {
            opacity: 1, 
            duration: 1,
            y:0
        })
        timeline.add(contentTransition);

        let nameTransition=gsap.fromTo(name,{
            opacity: 0
        }, {
            opacity: 1, 
            duration: 1,
            delay:0.5
        })
        timeline.add(nameTransition, '-=0.8');

        let genderTransition=gsap.fromTo(gender,{
            opacity: 0
        }, {
            opacity: 1, 
            duration: 1,
            delay:0.5
        })
        timeline.add(genderTransition, '-=0.8');

        let bornTransition=gsap.fromTo(born,{
            opacity: 0
        }, {
            opacity: 1, 
            duration: 1,
            delay:0.5
        })
        timeline.add(bornTransition, '-=0.8');

        let cultureTransition=gsap.fromTo(culture,{
            opacity: 0
        }, {
            opacity: 1, 
            duration: 1,
            delay:0.5
        })
        timeline.add(cultureTransition, '-=0.8');
        
        let linkTransition=gsap.fromTo(link,{
            opacity: 0
        }, {
            opacity: 1, 
            duration: 1,
            delay:0.5
        })
        timeline.add(linkTransition, '-=0.8');
    }

    render(){

        const {name,born,gender,culture, url} = this.props;

        return (
            <div ref={this.contentEl} className="content">
                <div ref={this.nameEl} className="m-10">Name: <strong>{name}</strong></div>
                <div ref={this.genderEl} className="m-10">Gender: <strong>{gender}</strong></div>
                <div ref={this.bornEl} className="m-10">Born: <strong>{born}</strong></div>
                <div ref={this.cultureEl} className="m-10">Culture: <strong>{culture}</strong></div>
                <a ref={this.linkEl} href={url} className="m-10">Link</a>
            </div>
        );
    }
}

NewsContent.propTypes = {
    data:PropTypes.shape({
        name:PropTypes.string,
        born:PropTypes.string,
        gender:PropTypes.string,
        culture:PropTypes.string, 
        url:PropTypes.string
    }),
};
