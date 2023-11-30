import TeamMember, {TeamMember2} from "./TeamMember";

const AboutUs = () => {

  
  return (
    <div className="about text-white mt-32 border rounded-md py-10 px-5 w-3/4 mx-auto">
      <h1 className="text-center text-2xl font-bold font-serif my-3">💥🌼!! Ram Krushna Hari !! 🌼💥</h1>
      <h2 className="text-lg my-3 font-semibold">About Us :</h2>
      <h3 className="my-3 text-lg">🚀 Here I'm learning React 🚀</h3>
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