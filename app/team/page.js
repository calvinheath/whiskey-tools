import "../globals.css";
import "../styles/team.css";

import Image from 'next/image';

export default function Team() {
  const teamMembers = [
    {
      name: 'Calvin Heath',
      role: 'CEO & Visionary Leader',
      image: 'https://i.postimg.cc/tgwqm5Yv/271467335-135021122299813-1750630773318712392-n.jpg',
      twitter: 'https://twitter.com/calvinheathak',
      linkedin: 'https://linkedin.com/in/calvinheath',
      github: 'https://github.com/calvinheath',
      telegram: 'https://t.me/calvinheath',
      description: 'Calvin is the driving force behind Whiskey.Tools. Ex Dev at Rarible and years of experience in blockchain with a passion for innovation, he leads the team towards new horizons.'
    },
    // Add other team members here
  ];

  return (
    <div>
      <div className="container">
        <section className="teamContainer">
          <h1 className="sectionHeader">Meet the Team</h1>
          <p className='landingP'>Our team is led by visionary leaders like Calvin Heath, backed by a group of passionate developers, marketers, and crypto enthusiasts. Together, we strive to innovate and create solutions that empower our community.</p>
          <div className="teamMembers">
            {teamMembers.map((member, index) => (
              <div key={index} className="teamMember">
                <Image className='teamImage' src={member.image} alt={member.name} width={512} height={512} />
                <div className='teamSocials'>
                <h1>{member.name}</h1>
                <div className='socials'>

                <span className="role disabled navLink" >{member.role}</span>

                <a href={member.twitter}><span className="role navLink">Twitter</span></a>
                <a href={member.linkedin}><span className="role navLink">LinkedIn</span></a>
                <a href={member.github}><span className="role navLink">GitHub</span></a>
                <a href={member.telegram}><span className="role navLink">Telegram</span></a>

                </div>
                </div>
                <p className="description">{member.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
