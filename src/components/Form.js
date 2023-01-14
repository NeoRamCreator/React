import React from "react";

class Form extends React.Component {
    render() {
        return (
            <>
                <Form1 />
                <Form2 />
            </>
        )
    }
}

class Form1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value.charAt(0).toUpperCase() + event.target.value.slice(1) });
    }

    handleSubmit(event) {
        alert('Отправленное имя: ' + this.state.value);
        event.preventDefault();
    }


    render() {
        return (
            <div>
                <form className="form" onSubmit={this.handleSubmit}>
                    <label>
                        Имя:
                        <input type="text" value={this.state.value} onChange=
                            {this.handleChange} placeholder="Введите имя" />
                        {/* <textarea value={this.state.value} onChange={this.handleChange}></textarea> */}
                    </label>
                </form>
            </div>
        );
    }
}

class Form2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: 'Не выбрано' }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)

    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        alert(this.state.value)
    }

    render() {
        return (<div>
            <form onSubmit={this.handleSubmit}>
                <label>
                    Выбрать:
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value="Не выбрано">Не выбрано</option>
                        <option value="1">1.</option>
                        <option value="2">2.</option>
                        <option value="3">3.</option>
                        <option value="4">4.</option>
                        <option value="5">5.</option>
                    </select>
                </label>
                <input type="submit" value="Отправить" />
            </form>
        </div>
        )
    }
}

export default Form;