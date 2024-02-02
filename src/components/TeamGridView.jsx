import TeamData from "../BasicTeamData.json";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

function TeamGridView() {
  return (
    <div className="row row-cols-5">
      {TeamData.map((data) => {
        return (
          <div className="container" key={data.id}>
            <br />
            {data.Name} <br />
            <Dropdown data-bs-theme="dark">
              <Dropdown.Toggle
                id="dropdown-button-dark-example1"
                variant="secondary"
              >
                <img src={data.LogoLink} />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.ItemText>
                  Home Arena: {data.HomeArena}
                </Dropdown.ItemText>
                <Dropdown.ItemText>Captain: {data.Captain}</Dropdown.ItemText>
                <Dropdown.ItemText>
                  Finals Wins: {data.FinalsWins}
                </Dropdown.ItemText>
                <Dropdown.Item href={data.Website}>Team Website</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        );
      })}
    </div>
  );
}

export default TeamGridView;
