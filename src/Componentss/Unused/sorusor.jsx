import React, { Component } from 'react'

class Sorusor extends Component {
    state = {
        i1: null,
        ia: null,
        ib: null,
        ic: null,
        id: null,
        kapat: true
    }
    ac = () => {
        this.setState({ kapat: false })
        this.setState({ soru: true })

    }


    yolla = (i1, ia, ib, ic, id) => {
        // if (this.state.ac === true)


    }



    render() {
        const { sec1, sec2, sec3, sec4, soruyazi, soru, i1, ia, ib, ic, id, kapat } = this.state

        return (<div>
            {kapat === true ? <div>
                <input onChange={e => this.setState({ i1: e.currentTarget.value })} type="text" />
                <input onChange={e => this.setState({ ia: e.currentTarget.value })} type="text" />
                <input onChange={e => this.setState({ ib: e.currentTarget.value })} type="text" />
                <input onChange={e => this.setState({ ic: e.currentTarget.value })} type="text" />
                <input onChange={e => this.setState({ id: e.currentTarget.value })} type="text" /></div> : null}


            {soru === true ? <div id="sorular">
                <span id="sorubas" className="badge badge-warning p-2 ">Soruyu bil puanı kap </span>

                <span id="soruyazi" >{soruyazi}</span>
                <div id="options">

                    <div onClick={this.cevap}>  <button onClick={e => {
                        this.setState({ cevap: e.currentTarget.innerText })
                    }} className="btn btn-secondary m-1 p-2">{sec1}</button></div>
                    <div onClick={this.cevap}>  <button onClick={e => {
                        this.setState({ cevap: e.currentTarget.innerText })
                    }} className="btn btn-secondary m-1 p-2">{sec2}</button></div>
                    <div onClick={this.cevap}>  <button onClick={e => {
                        this.setState({ cevap: e.currentTarget.innerText })
                    }} className="btn btn-secondary m-1 p-2">{sec3}</button></div>
                    <div onClick={this.cevap}>  <button onClick={e => {
                        this.setState({ cevap: e.currentTarget.innerText })
                    }} className="btn btn-secondary m-1 p-2">{sec4}</button></div>
                </div > </div>
                : null}
            <div onClick={this.ac}><button onClick={this.yolla(i1, ia, ib, ic, id)}>yazdir</button>
            </div>
        </div >
        );
    }
}

export default Sorusor;

