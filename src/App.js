import React, { Component } from 'react';
import ImageCard from "./components/ImageCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Images from "./Images.json";
import "./App.css";

class App extends Component {
    state = {
        Images: Images,
        userScore: 0,
        topScore: 0
    };

    // map
    render() {
        return (
            <Wrapper>
                <Title>Memory Game</Title>
                <header>
                score = {this.state.score}
                topScore = {this.state.topScore}
                </header>
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
    
    // score 
    imgClick = id => {
        this.state.Images.forEach(image => {
            if (image.id === id) {
                if (image.status) {
                    return("You clicked that one twice!", "Score: "+[this.state.userScore]+"High Score: "+[this.state.topScore], "error", {
                        button: "Reset",
                    });
                    this.setState({ userScore: 0 });
                    this.state.Images.forEach((image) => {
                        image.status = 0;
                    });
                } else {
                    this.setState((newState) => ({
                        userScore: newState.userScore + 1
                    }), () => {
                        if (this.state.userScore === 10) {
                            return("You WON!", "Score: "+[this.state.userScore]+"High Score: "+[this.state.topScore], "success", {
                                button: "Play Again",
                            });
                            this.setState({userScore: 0});
                            this.state.Images.forEach((image) => {
                                image.status = 0;
                            });
                        } else {
                            this.shuffle(this.state.Images);
                            image.status = 1;
                        }
                    });
                }
                if (this.state.userScore >= this.state.topScore) {
                    this.setState({topScore: this.state.userScore +1});
                }                
            }
        });
    }
};

export default App;