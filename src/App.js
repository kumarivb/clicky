import React, { Component } from 'react';
import ImageCard from "./components/ImageCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import images from "./images.json";
import "./App.css";

class App extends Component {
    state = {
        images: images
    };

    // map
    render() {
        return (
            <Wrapper>
                <Title>Memory Game</Title>
                {this.state.images.map(image => (
                    <ImageCard
                        id={image.id}
                        key={image.id}
                        name={image.name}
                        image={image.imgPath}
                        /* click */
                        /* shuffle */
                    />
                ))}
            </Wrapper>
        );
    }

    // shuffle
    shuffle = array => {
        for (let i = array.length - 1; i > 0)
    }
};

// shuffle
// shuffle
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
// score

export default App;
