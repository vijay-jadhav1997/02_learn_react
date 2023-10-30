import TeamMember, {TeamMember2} from "./TeamMember";

const AboutUs = () => {

  
  return (
    <div className="about">
      <h1>💥🌼!! Ram Krushna Hari !! 🌼💥</h1>
      <h2>About Us :</h2>
      <h3>🚀 Here I'm learning React 🚀</h3>
      <h3>👨🏻‍💻 Our Team Members: 👩🏻‍💻</h3>
      <div className="teamMemberBox">
        <TeamMember2 name={"Shree Vitthal"} />
        {/* <TeamMember name={"Shree Dnyanoba-Tukoba"} /> */}
        <TeamMember />
      </div>
    </div>
  )
}

export default AboutUs;