import React from "react";

export default class Footer extends React.Component {
  render() {
    return (
      <div>
        <footer className="row footer">
          <div className="footerLeft">
            {" "}
            <p>
              {" "}
              Stubucks Chester
              <br />
              Cheshire
              <br />
              Since 2019
            </p>
          </div>
          <div className="footerRight">
            <p>
              Stubucks Coffee | Privacy Policy | Terms of Service
              <br />
              Stubucks is not a registered trademark, infact it was just
              something Stuart made Dan make even though he didn’t have any
              spare
              <br />
              time. But he likes designing stuff so that’s OK.
            </p>
          </div>
        </footer>
      </div>
    );
  }
}
