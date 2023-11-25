import React, { Component } from "react";

class Person extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "!! Har Har Mahadev !!",
    };
  }
  changeDiscription = () => {
    console.log(this);
  };
  changeTitle = () => {
    console.log(this.state);
    this.setState({ title: "!! Shree BholeNathay Namh !!" }, () => {
      console.log(this.state);
    });
  };

  render() {
    const { discription, title } = this.props;
    return (
      <div className="person flex-col items-center justify-center gap-y-2">
        <h3 className="my-4 border hover:text-3xl rounded-lg border-gray-800 font-semibold text-xl cursor-pointer hover:text-green-500 text-orange-600 w-max py-3 px-10 mx-auto">
          !! Jay Shree Ram !!
        </h3>
        <p className="border-2 my-2 border-pink-400 text-center hover:border-sky-600 rounded-md cursor-pointer hover:text-pink-500 w-[500px] mx-auto px-5 py-4 text-sky-600 font-semibold text-lg">
          {discription}
        </p>
        <button
          className="border rounded-md border-green-400 px-5 py-2"
          onClick={this.changeDiscription}
        >
          click Me
        </button>
        <p className="border-2 my-2 border-pink-400 text-center hover:border-sky-600 rounded-md cursor-pointer hover:text-pink-500 w-[500px] mx-auto px-5 py-4 text-sky-600 font-semibold text-lg">
          {this.state.title}
        </p>
        <button
          className="border active:shadow-lg active:shadow-green-500 hover: rounded-md border-green-400 px-5 py-2"
          onClick={this.changeTitle}
        >
          click Me
        </button>
      </div>
    );
  }
}

export default Person;
