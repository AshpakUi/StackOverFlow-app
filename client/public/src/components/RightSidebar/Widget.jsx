import React from "react";
import comment from "../../assets/comment-alt-solid.svg";
import pen from "../../assets/pen-solid.svg";
import blacLogo from "../../assets/blacklogo.svg";
import "./RightSidebar.css";
function Widget() {
  return (
    <div className="widget">
      <h4>The overflow blog</h4>
      <div className="righ-sidebar-div-1">
        <div className="righ-sidebar-div-2">
          <img width={18} src={pen} alt="pen" />
          <p>
            Observability is key to the future of software (and your DevOps
            career)
          </p>
        </div>
        <div className="righ-sidebar-div-2">
          <img width={18} src={pen} alt="pen" />
          <p>Podcast 374: How valuable is your screen name?</p>
        </div>
      </div>

      <h4>Featured on Meta</h4>
      <div className="righ-sidebar-div-1">
        <div className="righ-sidebar-div-2">
          <img width={18} src={comment} alt="pen" />
          <p>Review queue workflows - Final release....</p>
        </div>
        <div className="righ-sidebar-div-2">
          <img width={18} src={comment} alt="pen" />
          <p>
            Please welcome Valued Associates: #958 - V2Blast #959 - SpencerG
          </p>
        </div>
        <div className="righ-sidebar-div-2">
          <img width={18} src={blacLogo} alt="pen" />
          <p>Podcast 374: How valuable is your screen name?</p>
        </div>
      </div>

      <h4>Hot Meta Posts</h4>
      <div className="righ-sidebar-div-1">
        <div className="righ-sidebar-div-2">
          <p>38</p>
          <p>
            Why was this spam flag declined, yet the question marked as spam?
            career)
          </p>
        </div>
        <div className="righ-sidebar-div-2">
          <p>20</p>
          <p>
            What is the best course of action when a user has high enough rep
            to...
          </p>
        </div>
        <div className="righ-sidebar-div-2">
          <p>14</p>
          <p>Is a link to the "How to ask" help page a useful comment? </p>
        </div>
      </div>
    </div>
  );
}

export default Widget;
