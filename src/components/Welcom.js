import React from 'react';

class Welcom extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: undefined,
        };
        this.inputName = this.inputName.bind(this);
    }

    inputName() {
        this.setState({ name: prompt("Input Name", "") });
    }
    // inputName = ()=>{this.setState({name: prompt("Input Name", "")})}
    componentDidMount () {
        console.log("имя человека: " + typeof this.state.name)
        // console.log("qwertyuiop")
    }

    render() {
        return (
            <>
                {this.state.name &&
                    <div>
                        <h2>Привет, {(this.state.name[0].toUpperCase() + this.state.name.slice(1) )}</h2>
                        {/* <h2>Привет, {(this.state.name)}</h2> */}
                        {/* <button onClick={console.log(typeof this.state.name)}>console</button> */}
                        <button onClick={this.inputName}>Изменить имя</button>
                    </div>
                }
                {!this.state.name &&
                <div>
                    <h2>Привет, Человек</h2>
                    <button onClick={this.inputName}>Хочу чтоб меня называли по имени!</button>
                </div>
                    
                }
            </>
        )
    }
}

export default Welcom;