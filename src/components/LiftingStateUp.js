import React from "react";

class Parent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Parent",
            nameChild: "",
        };
        this.changeName = this.changeName.bind(this);
        this.getChildName = this.getChildName.bind(this);
    }
    changeName(newName) {
        this.setState({ name: newName });
    }

    getChildName(n) {
        this.setState({ nameChild: n })
    }

    render() {
        return (
            <>
                <div >
                    <h3>имя родителя: </h3><h1>{this.state.name}</h1>
                    <Child
                        prop={this.state.name}
                        changeN={this.changeName}
                        NameChild={this.getChildName} />
                </div>
                <h3>имя ребенка: {this.state.nameChild}</h3>
            </>
        )
    }
}


class Child extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: "Child" };
        this.hendleChange = this.hendleChange.bind(this);
    }

    hendleChange(event) {
        this.setState({ name: event.target.value });
        this.props.changeN(event.target.value);
        
    }
    componentDidMount() {
        this.props.NameChild(this.state.name);
    }




    render() {
        return (
            <><div>
                <input
                    type="text"
                    placeholder={"сейчас родитель: " + this.props.prop}
                    onChange={this.hendleChange}
                />
            </div>
            </>
        );
    }
}



export default Parent;