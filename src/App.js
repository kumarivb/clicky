import React, { Component } from 'react';
import ImageCard from "./components/ImageCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import images from "./images.json";
import "./App.css";

class App extends Component {
    state = {
        images
    };

    // shuffle

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
                    />
                ))}
            </Wrapper>
        );
    }
};

export default App;
