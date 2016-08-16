import React, { Component, PropTypes } from 'react';
import { Page, Carousel, CarouselItem } from 'react-onsenui';
import InternalPageToolbar from '../components/InternalPageToolbar.jsx';

class demoCarouselIndex extends Component {
    constructor(props) {
        super(props);
        this.renderToolbar = this.renderToolbar.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.setIndex = this.setIndex.bind(this);

        this.state = {
            items: [
                '#F1948A',
                '#D7BDE2',
                '#85C1E9',
                '#73C6B6'
            ],
            index: 0
        };
    }

    handleChange(e) {
        this.setState({index: e.activeIndex});
    };

    renderToolbar() {
        return (
            <InternalPageToolbar title="Carousel" navigator={this.props.navigator} />
        );
    }

    setIndex(index) {
        this.setState({index: index});
    }

    render() {
        return (
            <Page renderToolbar={this.renderToolbar}>
                <Carousel onPostChange={this.handleChange} index={this.state.index} fullscreen swipeable autoScroll overscrollable>
                    {this.state.items.map((item, index) => (
                        <CarouselItem key={index} style={{backgroundColor: item}}>
                            <div style={{marginTop: '50%', textAlign: 'center'}}>
                                Swipe me!
                            </div>
                        </CarouselItem>
                    ))}
                </Carousel>

                <div style={{
                  textAlign: 'center',
                  fontSize: '20px',
                  position: 'absolute',
                  bottom: '36px',
                  left: '0px',
                  right: '0px'
                }}>
                    {this.state.items.map((item, index) => (
                    <span key={index} style={{cursor: 'pointer'}} onClick={this.setIndex.bind(this, index)}>
                      {this.state.index === index ? '\u25CF' : '\u25CB'}
                    </span>
                    ))}
                </div>
            </Page>
        );
    }
}

demoCarouselIndex.propTypes = {
    navigator: PropTypes.object
};

export default demoCarouselIndex;
