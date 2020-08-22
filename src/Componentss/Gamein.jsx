import React, {
    Component
} from 'react'
import "./Game.css";
import star from './star.png';
import replay from './replay.png';
import game from './game.png';
import time from './time.png';
import witz from "./witz.gif"
import { Table } from 'react-bootstrap';
import point from './point.mp3';
import win from './win game.mp3';



class Gamein extends Component {
    state = {
        game: 1,
        time: 60,
        soru: false,
        bonus: false,
        soruyazi: null,
        sec1: null,
        sec2: null,
        sec3: null,
        sec4: null,
        cevap: null,
        score: 0,
        son: false,
        questionNr: [8, 6, 1, 3, 7, 4, 10, 9, 2, 5, 3, 7, 10, 5, 4, 2, 9, 8, 6, 1, 10, 4, 3, 2, 5, 6, 7, 8, 9, 10,],
        sorual: 0,
        data: null




    }



    start = () => {

        this.setState({
            sorual: Math.floor(Math.random() * 25)
        })

        this.setState({
            game: 50
        })

        const timer = setInterval(() => {
            this.setState({
                time: this.state.time - 1
            })

            switch (this.state.time) {


                case 58:
                    this.setState({
                        bonus: true
                    })
                    this.setState({
                        soru: false
                    })
                    break;
                case 55:
                    this.setState({
                        bonus: false
                    })
                    break;
                case 54:
                    this.setState({
                        bonus: true
                    })
                    this.setState({
                        soru: false
                    })
                    break;
                case 51:
                    this.setState({
                        bonus: false
                    })
                    break;
                case 50:
                    this.setState({
                        bonus: true
                    })
                    this.setState({
                        soru: false
                    })
                    break;
                case 47:
                    this.setState({
                        bonus: false
                    })
                    break;
                case 46:
                    this.setState({
                        bonus: true
                    })
                    this.setState({
                        soru: false
                    })
                    break;
                case 43:
                    this.setState({
                        bonus: false
                    })
                    break;
                case 42:
                    this.setState({
                        bonus: true
                    })
                    this.setState({
                        soru: false
                    })
                    break;
                case 39:
                    this.setState({
                        bonus: false
                    })
                    break;
                case 38:
                    this.setState({
                        bonus: true
                    })
                    this.setState({
                        soru: false
                    })
                    break;
                case 35:
                    this.setState({
                        bonus: false
                    })
                    break;
                case 34:
                    this.setState({
                        bonus: true
                    })
                    this.setState({
                        soru: false
                    })
                    break;
                case 31:
                    this.setState({
                        bonus: false
                    })
                    break;
                case 30:
                    this.setState({
                        bonus: true
                    })
                    this.setState({
                        soru: false
                    })
                    break;
                case 27:
                    this.setState({
                        bonus: false
                    })
                    break;
                case 26:
                    this.setState({
                        bonus: true
                    })
                    this.setState({
                        soru: false
                    })
                    break;
                case 23:
                    this.setState({
                        bonus: false
                    })
                    break;
                case 22:
                    this.setState({
                        bonus: true
                    })
                    this.setState({
                        soru: false
                    })
                    break;
                case 19:
                    this.setState({
                        bonus: false
                    })
                    break;
                case 18:
                    this.setState({
                        bonus: true
                    })
                    this.setState({
                        soru: false
                    })
                    break;
                case 15:
                    this.setState({
                        bonus: false
                    })
                    break;
                case 14:
                    this.setState({
                        bonus: true
                    })
                    this.setState({
                        soru: false
                    })
                    break;
                case 11:
                    this.setState({
                        bonus: false
                    })
                    break;
                case 10:
                    this.setState({
                        bonus: true
                    })
                    this.setState({
                        soru: false
                    })
                    break;
                case 7:
                    this.setState({
                        bonus: false
                    })
                    break;
                case 6:
                    this.setState({
                        bonus: true
                    })
                    this.setState({
                        soru: false
                    })
                    break;
                case 4:
                    this.setState({
                        bonus: true
                    })
                    this.setState({
                        soru: false
                    })
                    break;
                default:
                    ;

            }



        }, 1250);


        const score = setInterval(() => {
            this.setState({
                game: this.state.game - 5
            })
            var can = document.querySelector("#can")
            can.style.width = `${this.state.game}%`
            if (this.state.game <= 30) {
                can.style.backgroundColor = "red"
            } else (can.style.backgroundColor = " rgb(103, 207, 5)")


            if (this.state.time === 0) {
                // localStorage.setItem(this.props.playerName, this.state.score)
                this.setState({ son: true })
                clearInterval(timer)
                clearInterval(score)
                this.getFromServer()

            }
            if (this.state.game < 10) {
                // localStorage.setItem(this.props.playerName, this.state.score)
                this.setState({
                    son: true
                })
                clearInterval(timer)
                clearInterval(score)
                this.getFromServer()


            }


            // var obj = localStorage
            // var result = Object.keys(obj).map(key => [(key), obj[key]]);
            // var isim = result[0][0]
            // var score = result[0][1]
            // this.setState({ oisim: isim })
            // this.setState({ oscore: score })



        }, 300);

        document.querySelector("#basla").style.display = "none"
        document.querySelector("#bas").style.display = "inline-block"
    }


    soru1 = () => {
        this.setState({
            soruyazi: "8X6=?",
            sec1: 48,
            sec2: 58,
            sec3: 40,
            sec4: 38
        })

    }
    soru2 = () => {
        this.setState({
            soruyazi: "2X2=?",
            sec1: 4,
            sec2: 2,
            sec3: 6,
            sec4: 8
        })
    }
    soru3 = () => {
        this.setState({
            soruyazi: "3X5=?",
            sec1: 16,
            sec2: 22,
            sec3: 15,
            sec4: 80
        })
    }
    soru4 = () => {
        this.setState({
            soruyazi: "6X4=?",
            sec1: 7,
            sec2: 2,
            sec3: 14,
            sec4: 24
        })
    }
    soru5 = () => {
        this.setState({
            soruyazi: "9X7=?",
            sec1: 67,
            sec2: 63,
            sec3: 74,
            sec4: 68
        })
    }
    soru6 = () => {
        this.setState({
            soruyazi: "37+23=?",
            sec1: 50,
            sec2: 70,
            sec3: 55,
            sec4: 60
        })
    }
    soru7 = () => {
        this.setState({
            soruyazi: "Where is Not the City Basel?",
            sec1: "Spain",
            sec2: "France",
            sec3: "Germany",
            sec4: "Switzer-\nland"
        })
    }
    soru8 = () => {
        this.setState({
            soruyazi: "4x13/2-13?",
            sec1: "21",
            sec2: "13",
            sec3: "11",
            sec4: "10"
        })
    }
    soru9 = () => {
        this.setState({
            soruyazi: "How can you say 'where' in German?",
            sec1: "Were",
            sec2: "Wo",
            sec3: "Where",
            sec4: "Who"
        })
    }
    soru10 = () => {
        this.setState({
            soruyazi: "Which is not a capital?",
            sec1: "Brussels",
            sec2: " Zurich",
            sec3: "Budapest",
            sec4: "Vienna"
        })
    }

    // A B C Ç D E F G Ğ H I İ J K L M N O Ö P R S Ş T U Ü V Y Z – (Â Î Û)
    // a b c ç d e f g ğ h ı i j k l m n o ö p r s ş t u ü v y z – (â î û)

    starr = () => {
        this.setState({
            score: this.state.score + 1
        })
        const asd = document.createElement("img")
        asd.setAttribute("src", star)
        asd.setAttribute("class", "yildiz")
        const cdf = document.querySelector("#starbucks")
        cdf.appendChild(asd)

        let audio = new Audio(point)
        audio.play()
    }


    sor = () => {
        const {
            questionNr,
            sorual
        } = this.state
        this.setState({
            bonus: false
        })
        this.setState({
            soru: true
        })
        this.setState({
            sorual: sorual + 1
        })

        var sor = questionNr[sorual]


        if (sorual === 28) {
            this.setState({
                sorual: 0
            })
        }



        if (sor === 10) {
            this.soru1()
        }
        if (sor === 9) {
            this.soru2()
        }
        if (sor === 8) {
            this.soru3()
        }
        if (sor === 7) {
            this.soru4()
        }
        if (sor === 6) {
            this.soru5()
        }
        if (sor === 5) {
            this.soru6()
        }
        if (sor === 4) {
            this.soru7()
        }
        if (sor === 3) {
            this.soru8()
        }
        if (sor === 2) {
            this.soru9()
        }
        if (sor === 1) {
            this.soru10()
        }
    }


    secti = () => {

        this.setState({
            soru: false
        })


        setTimeout(this.odul, 50)
    }


    odul = () => {


        if (parseInt(this.state.cevap) === 48) {
            this.starr()
        }
        if (parseInt(this.state.cevap) === 4) {
            this.starr()
        }
        if (parseInt(this.state.cevap) === 15) {
            this.starr()
        }
        if (parseInt(this.state.cevap) === 24) {
            this.starr()
        }
        if (parseInt(this.state.cevap) === 63) {
            this.starr()
        }
        if (parseInt(this.state.cevap) === 60) {
            this.starr()
        }
        if (parseInt(this.state.cevap) === 13) {
            this.starr()
        }
        if (this.state.cevap === "Spain") {
            this.starr()
        }
        if (this.state.cevap === "Wo") {
            this.starr()
        }
        if (this.state.cevap === "Zurich") {
            this.starr()
        }

    }




    cevap = () => {
        setTimeout(this.secti, 50)
    }




    plus = () => {
        if (this.state.game < 100) {
            this.setState({
                game: this.state.game + 5
            })


            document.querySelector("#can").style.width = `${this.state.game}%`
        }
    }

    ac = () => {
        this.setState({
            yazdir: true
        })
    }


    sorusor = (i1, ia, ib, ic, id) => {

        // console.log(i1, ia, ib, ic, id)
        // this.setState({ soruyazi: i1, sec1: ia, sec2: ib, sec3: ic, sec4: id })

    }





    refresh = () => {
        window.location.reload()

    }
    reset = () => {
        this.setState({
            game: 1
        })
        this.setState({
            time: 60
        })
        this.setState({
            score: 0
        })
        this.setState({
            son: false
        })
        this.setState({
            soru: false
        })
        this.setState({
            bonus: false
        })
        this.props.renkler("#bas")
        document.querySelector("#basla").style.display = "inline-block"
        document.querySelector("#bas").style.display = "none"
        document.querySelector("#starbucks").innerHTML = ""
        document.querySelector("#frame").style.transform = "rotate(360deg)"


    }

    listallscores = () => {
        const URL = "https://halidgame.herokuapp.com/"
        fetch(URL)
            .then(response => response.json())
            .then(score => {
                const orderd = score.sort((a, b) => parseInt(a.GameScore) > parseInt(b.GameScore) ? 1 : -1)
                orderd.reverse()

                this.setState({ n1: orderd[0].PlayerName })
                this.setState({ n2: orderd[1].PlayerName })
                this.setState({ n3: orderd[2].PlayerName })
                this.setState({ n4: orderd[3].PlayerName })
                this.setState({ n5: orderd[4].PlayerName })

                this.setState({ s1: orderd[0].GameScore })
                this.setState({ s2: orderd[1].GameScore })
                this.setState({ s3: orderd[2].GameScore })
                this.setState({ s4: orderd[3].GameScore })
                this.setState({ s5: orderd[4].GameScore })

            })
    }

    getFromServer = () => {



        const URL = "https://halidgame.herokuapp.com/"

        const playerName = this.props.playerName
        const score = this.state.score
        const data = {
            playerName,
            score
        }

        fetch(URL, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "content-type": "application/json"
            }
        }).then(response => response.json())
            .then(createdScore => {
                this.setState({ plyersName: createdScore.PlayerName })
                this.setState({ plyersScore: createdScore.GameScore })

            })
        setTimeout(() => {
            this.listallscores()
        }, 10);







    }




    render() {
        const {
            sec1,
            sec2,
            sec3,
            sec4,
            soruyazi,
            score,
        } = this.state

        return (

            <div id="frame" > {
                this.state.son === true ? <div id="bitismenü">
                    <span className="badge" >{this.props.playerName} : {score} </span>

                    <div id="restart" > <span> Play Again </span> <span>New Player</span>
                        <img onClick={this.reset} id="replay" src={replay} alt="" />
                        <img id="gamerestart" onClick={this.refresh} src={game} alt="At" />  </div>


                    <div id="tweet"> <h2 className="text-center"> <b> TOP LIST</b> </h2> <br />
                        {/* 
                        <div id="form">
                            <h4 className="card-title">Player: {this.state.plyersName}</h4>

                            <h4 className="card-title">Score: {this.state.plyersScore}</h4>
                        </div> */}
                        <div id="load" className="loading">
                            <h2><i> Its Comminn</i></h2>
                            <img src={witz} alt="Warten Sie Bitte.." />
                        </div>

                        <Table className="table" striped variant="dark">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Player</th>
                                    <th>Score</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>{this.state.n1}</td>
                                    <td>{this.state.s1}</td>

                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>{this.state.n2}</td>
                                    <td>{this.state.s2}</td>

                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>{this.state.n3}</td>
                                    <td>{this.state.s3}</td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>{this.state.n4}</td>
                                    <td>{this.state.s4}</td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>{this.state.n5}</td>
                                    <td>{this.state.s5}</td>
                                </tr>
                            </tbody>
                        </Table>
                        <Table className="table" striped variant="dark">
                            <tbody>
                                <tr>
                                    <td><b>{this.state.plyersName}</b></td><td><b>{this.state.plyersScore}</b></td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>


                </div> : null}

                <div id="top">
                    <span id="game" className="badge badge-info m-1" > Health <div id="can" > </div> {this.state.game}</span>

                    <span id="game" className="badge badge-info m-1" >Player <br /> <br /> {this.props.playerName}</span>

                    <span onClick={this.sor} id="time" className="m-1 badge badge-info " > Time <img id="saat" src={time} alt="At" />
                        {this.state.time} </span> </div>

                <div id="starbucks" >

                </div>
                <div> {this.state.bonus === true ? <div id="bonus1"> <button id="bonus" onClick={this.sor} className="btn btn-warning " >OPEN </button> </div> : null}

                    {this.state.soru === true ? <div id="sorular" >
                        <span id="sorubas" className="badge badge-warning p-2 "> Answer the question! </span><span id="soruyazi"> {soruyazi} </span>
                        <div id="options" >
                            <div onClick={this.cevap}> <button onClick={e => { this.setState({ cevap: e.currentTarget.innerText }) }} className="btn btn-secondary m-1 p-2" > {sec1} </button></div>
                            <div onClick={this.cevap}> <button onClick={e => { this.setState({ cevap: e.currentTarget.innerText }) }} className="btn btn-secondary m-1 p-2"> {sec2} </button></div>
                            <div onClick={this.cevap}> <button onClick={e => { this.setState({ cevap: e.currentTarget.innerText }) }} className="btn btn-secondary m-1 p-2" > {sec3} </button></div>
                            <div onClick={this.cevap}> <button onClick={e => { this.setState({ cevap: e.currentTarget.innerText }) }} className="btn btn-secondary m-1 p-2" > {sec4} </button></div> </div></div> : null}
                </div>


                <div id="byk" > <button onClick={this.plus} id="bas" className="btn btn-success " > CLICK IT! </button> <button onClick={this.start}
                    id="basla" className="btn btn-warning " > START </button> </div> </div>
        );

    }
}

export default Gamein;



/*
    dogru cevaba ses
    -cok yarismacili yarisma konsepti --default yarismalar icinde olur such as ingilizce ve almanca kelime yarismasi
     ekstra olarak kendin sorular girersin ve o sorularla yarisirsin
    -günlük liste denemesi
    --ucak marjin style~~~~
    --multiple butt ons ,
    --cIKAN SORU BI DAHA cikmasin~~~
    --bar uzatmasi ile can yapip soru cikarmak~~~
    -soru sayisinin saniye den artirilmasi
    -sayfa döndürme~~~~
    -localstorage
    -backgr color~~~



     <input onChange={e => {
                        this.setState({ girdi: e.target.value })
                    }} type="number" />
                    <button onClick={this.cevap} className="btn btn-primary m-1">Cevapla</button>  */