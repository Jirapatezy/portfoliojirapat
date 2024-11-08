import Myskill from "./Myskill"

export default function About() {
    return (
        <div className="about-section" id="about">
            <div className="container">
                <div className="custom-grid">
                        <Myskill />
                    <div className="container">
                        <div className="inner-content">
                            <div className="vertical-bar">
                            </div>
                            <div className="profile-content">
                                <div className="profile-title text-white">Who <span className="text-gradient">I Am?</span></div>
                                <div className="profile-text">
                                    <p>
                                    I'm a university student at King Mongkut's University of Technology North Bangkok. During the day, I focus on my studies, and by night, I’m a front-end developer with a strong passion for UI/UX design and web development. I strive to create engaging and user-friendly digital experiences, always eager to learn and apply new technologies to improve my work.
                                        <br /><br />
                                        {/* <span className="highlight">a living.</span> */}
                                    </p>
                                </div>

                                <div className="timeline-item" style={{ background: "url(/img/bg.png)",backgroundAttachment:'center', borderRadius: '15px',opacity:'0.6' }}>
                                    <div className="timeline-content">
                                        <div className="timeline-text">
                                            <div className="timeline-title">I'm currently studying at</div>
                                            <div className="timeline-subtitle">KING MONGKUT'S UNIVERSITY OF TECHNOLOGY NORTH BANGKOK</div>
                                        </div>
                                        <div className="timeline-icon">
                                            <img src="/img/logo.png" style={{ width: '60px', height: 'auto', marginLeft: '25px',borderRadius:'100%' }} alt="" />
                                        </div>
                                    </div>
                                    <div className="timeline-year">2022 - now</div>
                                </div>
                                
                                <div className="timeline-item" style={{ background: "url(/img/bg.png)",backgroundAttachment:'center', borderRadius: '15px',opacity:'0.6' }}>
                                    <div className="timeline-content">
                                        <div className="timeline-text">
                                            <div className="timeline-title">I'm currently studying at</div>
                                            <div className="timeline-subtitle">KING MONGKUT'S UNIVERSITY OF TECHNOLOGY NORTH BANGKOK</div>
                                        </div>
                                        <div className="timeline-icon">
                                            <img src="/img/logo.png" style={{ width: '60px', height: 'auto', marginLeft: '25px',borderRadius:'100%' }} alt="" />
                                        </div>
                                    </div>
                                    <div className="timeline-year">2022 - now</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}