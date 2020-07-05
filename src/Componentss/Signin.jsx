import React, {
    Component
} from 'react';
import Gamein from './Gamein'
import "./Game.css";
import short from "./short.mp3"
import click from "./click.gif"



class Signin extends Component {
    state = {
        inputName: null,
        colors: ["#00B799", "#E1E2E2", "#115173", "#E40C2B", "#053f5e", "#F2D349",
            "#8AA899", "#E60576", "#00bcd4", "#FDD935", "#E5BACE", "#442727", "#363062",
            "#E1E2E2", "#D48166", "#E40C2B", "#9c5518", "#F2D349", "#ffa41b", "#E60576",
            "#FACD3D", "#FDD935", "#E5BACE"
        ],
        increment: 0
    }

    changeColor = (idclass) => {
        const { colors } = this.state;
        setInterval(() => {

            var bas = document.querySelector(`${idclass}`)
            bas.style.backgroundColor = `${colors[this.state.increment]}`
            this.setState({
                increment: this.state.increment + 1
            })
            if (this.state.increment === 22) {
                this.setState({
                    increment: 0
                })
            }


        }, 2000);
    }

    sendIt = (e) => {
        e.preventDefault()

        const { inputName } = this.state;
        if (inputName !== null && inputName !== " ") {
            document.querySelector(".info").style.display = "none"
            document.querySelector("#frame").style.transition = "all 1.5s ease"
            document.querySelector("#frame").style.transform = "rotate(360deg)"
            if (this.state.increment === 22) {
                this.setState({
                    increment: 0
                })
            }

            this.changeColor("#bas")
        }
    }


    componentDidMount() {
        this.changeColor(".info")

        setTimeout(() => {
            var enter = document.querySelector(".info")
            enter.id = "entrance"
        }, 400);
        setTimeout(() => {
            const click = document.querySelector("#click")
            click.style.display = "block"
            const like = document.querySelector("#likeThis")
            like.style.display = "block"
        }, 3500);

    }


    render() {
        return (
            <div>
                <div className="info" >
                    <div id="mid">
                        <div>
                            <br /><h3 id="hi" className="p-1 text-center" > Hi Everyone! </h3> </div>
                        <br />
                        <form action="" >
                            <p className="text-center" > The only thing that you should do is pushing <span id="constant">consecutive</span> on the "Click it!" button then answer the Questions <br />  </p>
                            <br />
                            <input id="inp1" className="input" type="text" name="name" placeholder="Player Name"
                                onChange={e => { this.setState({ inputName: e.target.value }); }} />


                            <button type="submit" onClick={this.sendIt} className="btn btn-warning goIn "> GO IN! </button>
                        </form>
                        <div id="signature" className="fadeIn" >Made By <br />M. Halid Kutsal </div>
                        <img id="click" className="fadeIn" src={click} alt="" />
                        <div id="likeThis" className="fadeIn">Just like <br />That  </div>

                    </div>
                </div>
                <Gamein playerName={this.state.inputName} renkler={this.changeColor} />
                <audio autoPlay loop allow="autoplay" ><source src={short} /> </audio>


            </div>);
    }
}



export default Signin;