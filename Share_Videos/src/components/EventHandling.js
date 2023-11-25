import React from "react";

class EventHandling extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      title: "!! Jay Hari !!",
      name: "Shree Dnyanoba",
      name2: "Shree Vitthal",
      isDnyanoba: true,
      isVithoba: true,
    };
  }
  changeName = () => {
    // console.table(this.state);
    this.state.isDnyanoba
      ? this.setState({ name: "Shree Tukoba", isDnyanoba: false })
      : this.setState({ name: "Shree Dnyanoba", isDnyanoba: true });
  };
  changeName2() {
    // console.table(this.state);
    this.state.isVithoba
      ? this.setState({ name2: "Har Har Mahadev", isVithoba: false })
      : this.setState({ name2: "Shree Vitthal", isVithoba: true });
  }

  render() {
    const { title, name, name2 } = this.state;
    return (
      <div className="w-4/5 my-5 flex flex-col gap-y-2 items-center mx-auto px-5 py-3 border-2 border-green-400 rounded-xl">
        <h1>!! Ram Krushna Hari !!</h1>
        <h2>{title}</h2>
        <div className="flex flex-col items-center">
          <h2 className="text-2xl px-5 py-2 rounded-xl shadow-rose-600 shadow-md font-bold my-5 ">
            {name}
          </h2>
          <button
            type="button"
            className="border hover:bg-rose-500 hover:text-white active:shadow-md active:shadow-purple-500 rounded-md px-5 py-2 text-lg font-semibold border-rose-400"
            onClick={this.changeName}
          >
            Change name
          </button>
        </div>
        <div className="flex flex-col items-center">
          <h2 className="text-2xl px-5 py-2 rounded-xl shadow-purple-600 shadow-md font-bold my-5 ">
            {name2}
          </h2>
          <button
            type="button"
            className="border hover:bg-purple-500 hover:text-white active:shadow-md active:opacity-80 hover:border-none rounded-md px-5 py-2 text-lg font-semibold border-rose-400"
            onClick={this.changeName2.bind(this)}
          >
            Change name
          </button>
        </div>
      </div>
    );
  }
}

export default EventHandling;
