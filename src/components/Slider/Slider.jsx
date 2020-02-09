import React from 'react';
import Slide from './Slide/Slide';

class Slider extends React.Component {
    constructor() {
        super();
        this.state = {
            slides: ['Один', 'Два', 'Три'],
            index: 0
        }
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.nextHandler(),
            4000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    nextHandler = () => {
        let i = this.state.index;
        console.log(i)
        i++;
        if (i >= this.state.slides.length) {
            i = 0;
        }
        this.setState({ index: i });
    }

    prevHandler = () => {
        let i = this.state.index;
        i--
        if (i < 0) {
            i = this.state.slides.length;
            i--;
        }
        this.setState({ index: i });
    }

    render() {
        return (
            <div className="row">
                <div className="col-sm slider">
                    <Slide val={this.state.slides[this.state.index]} prev={this.prevHandler} next={this.nextHandler} />
                </div>
            </div>
        )
    }

}

export default Slider;