import React from 'react';
import Slide from './Slide/Slide';
import arrow from './arrow.svg'

class Slider extends React.Component {
    constructor() {
        super();
        this.state = {
            slides: ['Один', 'Два', 'Три'],
            index: 0,
            move: 0,
            interval: 5000,
        }
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.nextHandler(),
            this.state.interval
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    nextHandler = () => {
        let i = this.state.index;
        i++;
        if (i >= this.state.slides.length) {
            i = 0;
        }
        this.setState({ index: i, move: -i * 100 });
    }

    prevHandler = () => {
        let i = this.state.index;
        i--;
        if (i < 0) {
            i = this.state.slides.length;
            i--;
        }
        this.setState({ index: i, move: -i * 100 });
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-sm slider-header">Галерея</div>
                </div>
                <div className="col-sm slider">
                    <img onClick={this.prevHandler} className="prev" src={arrow} alt="prev" />
                    <Slide move={this.state.move} />
                    <img onClick={this.nextHandler} className="next" src={arrow} alt="next" />
                </div>
            </div>
        )
    }

}

export default Slider;