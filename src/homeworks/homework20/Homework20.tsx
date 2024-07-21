import { v4 } from 'uuid';

import "./style.css";

function Homework20() {
  let firstName: string = "John";
  let lastName: string = "Doe";
  let job: string = "Software Engineer";
  let isManager: boolean = false;
  let experience: number = 5;
  let email: string = "john.doe@google.com";
  let programLangs: string[] = ["JavaScript", "Python", "Machine Learning"];

  return (
    <div className="user-card">
      <h2>
        {firstName} {lastName}
      </h2>
      <p>
        {job}: {isManager ? "Manager" : "Employee"}
      </p>
      <p>Experience: {experience} years</p>
      <p>Email: {email}</p>
      <p>Programming Languages:</p>
      <ul>
        {programLangs.map((lang: string) => (
          <li key={v4()}>{lang}</li>
        ))}
      </ul>
    </div>
  );
}

export default Homework20;
