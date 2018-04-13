import React, { Component } from 'react';
import ImageCard from "./components/ImageCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Images from "./Images.json";
import "./App.css";

class App extends Component {
    state = {
        Images: Images
    };

    // map
    render() {
        return (
            <Wrapper>
                <Title>Memory Game</Title>
                {this.state.Images.map(image => (
                    <ImageCard
                        id={image.id}
                        key={image.id}
                        name={image.name}
                        image={image.imgPath}
                        shuffle={() => {this.shuffle(this.state.Images)}}
                        imgClick={() => {this.shuffle(this.state.Images)}}
                    />
                ))}
            </Wrapper>
        );
    }

    // shuffle
    shuffle = array => {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        this.setState({ Images:Images});
    }
};

export default App;

// score