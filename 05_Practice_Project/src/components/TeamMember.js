import React, { useEffect, useState } from "react";

//* Functional Component:
const TeamMember2 = (props) => {
  const[count, setCount] = useState(1);
  const[userInfo, setuserInfo] = useState({});

  

  useEffect(()=> {
    getUserInfo();
  },[])

 const  getUserInfo = async () => {
    try {
      const userData = await fetch("https://api.github.com/users/akshaymarch7");
      const userDataJson = await userData.json();
      setuserInfo(userDataJson);
      // console.log(userDataJson);
    } catch (error) {
      console.log(error);
    }
 }

  function decreaseBy1() {
    return (count > 0 ? setCount(count - 1) : count);
  }
  function increaseBy1() {
    setCount(count + 1);
  }

  const {name, location, avatar_url, public_repos, bio, blog, followers, company} = userInfo;
  
  return (
    <div className="teamMember">
      <img src={avatar_url} />
      <h4>Name: {name}</h4>
      <h5>Bio: {bio}</h5>
      <h5>Location: {location}</h5>
      <h5>Followers: {followers}</h5>
      <h5>Blog: {blog}</h5>
      <h5>Compony: {company}</h5>
      {/* <h5>Contact: ramkrushnahari@gmail.com</h5> */}
      <h5>Public Repositories: {public_repos}</h5>
      <h5 className="count">Count:<button className="countBtn" onClick={decreaseBy1}>-1</button> <span>{count}</span> <button className="countBtn" onClick={increaseBy1}>+1</button></h5>
    </div>
  );
}


//* Class component:
class TeamMember extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count : 0,
      name : "Jay Hari",
      location : "Alandi-Dehu (MH)",
      avatar_url: "",
      public_repos: "",
    }
  }

  async componentDidMount () {
    try {
      const teamMemberData = await fetch("https://api.github.com/users/vijay-jadhav1997");
      const teamMemberInfo = await teamMemberData.json();
      // console.log(teamMemberInfo);
  
      this.setState({
        name: teamMemberInfo.name,
        avatar_url: teamMemberInfo.avatar_url,
        location: teamMemberInfo.location,
        public_repos: teamMemberInfo.public_repos,
      })
    } catch (error) {
     console.log(error); 
    }
  }

  render(){
    const {name, count, location, avatar_url, public_repos} = this.state;
    return(
      <div className="teamMember my-3">
        <img src={avatar_url} />
        <h4>Name: {name}</h4>
        <h5>Location: {location}</h5>
        <h5>Contact: tukobadnyanoba@gmail.com</h5>
        <h5>Public Repositories: {public_repos}</h5>
        <h5 className="count">
          Count:
          <button className="countBtn" 
            onClick={
              () => {
                if(this.state.count > 0){
                 return (this.setState({count: this.state.count - 1}));
                }
              }
            }
          >-1</button> 
          <span>{count}</span> 
          <button className="countBtn" 
            onClick={
              () => this.setState({count: this.state.count + 1})
            }
          >+1</button>
        </h5>
        {/* <h5>Count2: {count2}</h5> */}
      </div>
    )
  }
}
export  {TeamMember2, TeamMember as default};