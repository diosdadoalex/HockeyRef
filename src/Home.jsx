import TeamData from "./BasicTeamData.json";

const RandomTeam = TeamData[Math.floor(Math.random() * TeamData.length)];

function Home() {
  return (
    <div className="center">
      This is a personal project that I've designed as a resource for
      information about teams in the National Hockey Leauge (NHL). Just click on
      the Teams Tab up top to view all teams at once. A randomly selected team
      is also displayed below. Currently this project is using a JSON file kept
      locally but work is being done to convert to a cloud based database.
      <br />
      <br />
      Your Randomly Selected Team is the:
      <br />
      <br />
      {RandomTeam.Name}
      <br />
      <img src={RandomTeam.LogoLink} />
    </div>
  );
}

export default Home;
