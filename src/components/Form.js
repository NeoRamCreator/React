import React from "react";

class Form extends React.Component {
    render() {
        return (
            <>
                <Form1 />
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
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('Отправленное имя: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Имя:
                        <input type="text" value={this.state.value} onChange=
                            {this.handleChange} />
                    </label>
                </form>
            </div>
        );
    }
}

export default Form;