import React from "react";
import SchoolIcon from "@mui/icons-material/School";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";

function Experience() {
  return (
    <div className="expContainer">
      <div className="expElements">
        <ol>
          <li>
            <SchoolIcon />
            <h3>High School Graduation 2014</h3>
            <p>Bahcesehir Collage</p>
          </li>
          <li>
            <SchoolIcon />
            <h3>University Graduation 2020</h3>
            <p>Cag University</p>
          </li>
          <li>
            <BusinessCenterIcon />
            <h3>My First Job As a Front-End Dev 2022</h3>
            <p>Recuno.com</p>
          </li>
          <li>
            <QuestionMarkIcon />
            <h3>...... ?</h3>
            <p>..................</p>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Experience;
