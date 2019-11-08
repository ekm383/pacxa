import React from "react"
import styled from "styled-components"
import TeamItem from "../TeamItem"
import scott from "../../images/headshots/scott-watanabe.jpg"
import kelly from "../../images/headshots/kelly-ueoka.jpg"
import jim from "../../images/headshots/jim-takatsuka.jpg"
import geary from "../../images/headshots/geary-chun.jpg"
import doug from "../../images/headshots/doug-shimokawa.jpg"

const Team = () => {
  return (
    <TeamWrapper>
      <div className="topRow">
        <TeamItem
          img={kelly}
          name="Kelly Ueoka"
          bio="Kelly has over 15 years of technical consulting experience and holds the Virtual Technology Specialist (V-TSP) certification for Microsoft in Hawaii. He is also a Microsoft and infrastructure solutions architect and a certified solutions expert for Private Cloud. Kelly has extensive experience in architecting highly virtualized messaging and collaboration environments as well as advanced systems management. Prior to joining Pacxa, Kelly honed his skills at Commercial Data Systems, Hawaiian Electric Company, Kauai Island Utility Cooperative and the County of Kauai. He holds a Bachelor of Science in Computer Information Systems from Southern Oregon University."
        />
        <TeamItem
          img={scott}
          name="Scott Watanabe"
          bio="Prior to joining Pacxa, Scott was the Senior VP of Hoike Networks where he was in charge of Oracle-based solutions and served as the VP of Partner Alliance for Commercial Data Systems. He has over 32 years of industry experience, working for a variety of companies, including Wang Laboratories, Oracle Corporation, Commercial Data Systems, and the public sector. Scott holds a Bachelor of Arts in Economics and a Master of Arts in Urban and Regional Planning from the University of Hawaii at Manoa.
        "
        />
        <TeamItem
          img={jim}
          name="Jim Takatsuka"
          bio="Before joining Pacxa, Jim spent 15 years as Microsoft’s Area Manager in Hawaii, where he was responsible for enterprise business development. Prior to that he was Team Lead for Sun Microsystems’ Hawaii office, focused on commercial, education and Department of Defense sales. Jim began his career at Apple Computer, where he held a variety of technical and sales roles in the San Francisco Bay Area before moving home to Honolulu, where he helped establish Apple’s presence in Hawaii’s education market. Jim is a proud alumnus of the University of California Berkeley, where he majored in Biochemistry."
        />
      </div>
      <div className="bottomRow">
        <TeamItem
          img={doug}
          name="Doug Shimokawa"
          bio="With 15 years of experience in technology, Doug’s areas of expertise include data analytics, project management, and business operations. Before joining Pacxa, he led numerous projects as a consultant at Business Solution Technologies and a senior software engineer at Lockheed Martin. Doug received his bachelor’s in electrical engineering and computer science, and master's in electrical engineering from Yale University, as well as his MBA from the University of Hawaii at Manoa."
        />
        <TeamItem
          img={geary}
          name="Geary Chun"
          bio="Geary brings over 25 years of technical consulting experience with extensive expertise in Oracle database systems and is also a certified Oracle instructor. Geary has successfully led the Oracle Consulting Group through several large implementation projects with various State of Hawaii agencies. Prior to joining Pacxa, Geary held management positions with Commercial Data Systems, Oracle Corporation, and KPMG Peat Marwick. Geary earned a Bachelor of Arts degree in Computer Science from the University of California Berkeley and a MBA from the University of California at Los Angeles."
        />
      </div>
    </TeamWrapper>
  )
}

const TeamWrapper = styled.div`
  width: 80vw;
  margin: 4rem auto;
  text-align: center;
  .topRow,
  .bottomRow {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
  }
`

export default Team
