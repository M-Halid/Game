import React, {
    Component
} from "react";
import "../Mein.css";

class Game extends Component {
    state = {
        count: 0,
        data: {},
        inpa: "",
        inpb: "",
        inpc: "",
        react: "aldeer",
        lorem: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia saepe atque explicabo architecto, dicta magni ipsam neque asperiores quas repellat est? Quas, quae optio provident dicta fugiat et totam sunt soluta consequatur natus magnam voluptatum repellat recusandae. Nihil mollitia atque reprehenderit iure ducimus maxime inventore tempore praesentium perspiciatis, quisquam reiciendis!"

    };

    componentDidMount() {
        fetch('https://api.openweathermap.org/data/2.5/weather?q=Leipzig&units=Metric&appid=b00c652c4b84965eb16165112217a4a6')
            .then(response => response.json())
            .then(data => this.setState({
                data
            })

            );
    }

    sendit = () => {
        const {
            inpa,
            inpb,
            inpc
        } = this.state;

        const bodi = document.querySelector("#root");
        const diw = document.createElement("div");
        diw.id = "card";
        diw.innerText =
            `${inpa}\n${inpb} years old\nLives in ${inpc}`;

        bodi.appendChild(diw);
    };

    plus = () => {
        this.setState({
            count: this.state.count + 1
        })

    }

    minus = () => {
        this.setState({
            count: this.state.count - 1
        })

    }
    try = () => {



        //console.log(rnd)
        const text = this.state.lorem.split(" ")
        setInterval(() => {
            const rnd = Math.floor(Math.random() * 50)
            this.setState({ react: text[rnd] })
        }, 800);
        //console.log(text[rnd]) 
    }



    render() {

        // console.log(this.state.data)
        //const text = this.state.lorem.split(" ");


        return (
            <div>
                <header>
                    <div id="basi" >
                        <img src="iconface.png"
                            id="face"
                            alt="face" />
                        <div >
                            <p className="temp" > </p> <img className="icon"
                                alt="" />
                        </div>

                        <div id="nav" >
                            <li className="btn btn-success" > Home </li>
                            <li className="btn btn-success" > Content </li>
                            <li className="btn btn-success"
                                href="footer" >
                                Contact </li>
                        </div>
                    </div>
                </header>
                <div id="container"
                    className="container" >
                    {/* <div id="s1" >{this.state.react} <button className="btn btn-warning" onClick={this.try} > start </button> </div> */}

                    <div id="mid" >
                        <input id="inp1"
                            className="input"
                            type="text"
                            name="name"
                            onChange={
                                e => {
                                    this.setState({
                                        inpa: e.target.value
                                    });
                                }
                            }
                        />

                        <input id="inp2"
                            className="input"
                            type="number"
                            name="age"
                            onChange={e => {
                                this.setState({ inpb: e.target.value });
                            }
                            }
                        />

                        <input id="inp3"
                            className="input"
                            type="text"
                            name="city"
                            onChange={
                                e => {
                                    this.setState({
                                        inpc: e.target.value
                                    });
                                }
                            }
                        /> {
          /* ----------- -----------------*/} <button onClick={
                            this.sendit
                        }
                            className="btn btn-warning" >
                            Send </button> <div id="counter" >
                            <button className="btn btn-danger"
                                onClick={
                                    this.minus
                                } > - </button> {
                                this.state.count
                            } <button className="btn btn-danger"
                                onClick={
                                    this.plus
                                } > + </button>

                        </div> </div>

                    {/* <div id="s2"> <ol>{text.map(word => <li>{word}</li>)} </ol></div> */}
                </div>
            </div>
        );
    }
}

export default Game;