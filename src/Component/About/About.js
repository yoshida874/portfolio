import React from "react";
import Typography from "@material-ui/core/Typography";

function About() {
  return (
    <div className="App">
        <Typography fontFamily="Segoe UI Emoji" variant="h4" to="/">
          About
        </Typography>
        <table>
          <tbody>
            <tr>
              <th>Github </th>
              <td>
                <a href="https://github.com/yoshida874">yoshida874</a>
              </td>
            </tr>
          </tbody>
        </table>
        </div>
  );
}

export default About;
