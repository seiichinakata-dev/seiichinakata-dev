import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook, FaTwitter, FaLinkedin, FaCalendar, FaGlobe } from 'react-icons/fa'
import { MdWork } from 'react-icons/md'
import { BsStack, BsHeartFill } from 'react-icons/bs'
import { motion } from "framer-motion";

export default function Home( { profile, initial, animate }) {
    return (
        <>
            <motion.div className='content greetings' initial={ initial } animate={ animate } transition={{ delay: 0.15 }} >
                { profile.greetings }
            </motion.div >
            <motion.div className="content me" initial={ initial } animate={ animate } transition={{ delay: 0.25 }}>
                <div className="profile-content">
                    <h2 className='name'>{ profile.fullname }</h2>
                    <div className='headline'>{ profile.headline }</div>
                </div>
                <img className='profile-picture' src={ require('./assests/me2.png') } alt="" />
            </motion.div>
            <motion.div className="content work" initial={ initial } animate={ animate } transition={{ delay: 0.35 }}>
                <h3><MdWork className='icon accent'/>Work</h3>
                <p>{ profile.work }</p>
            </motion.div >
            <motion.div className="content bio" initial={ initial } animate={ animate } transition={{ delay: 0.45 }}>
                <h3><FaCalendar className='icon accent'/>Bio</h3>
                <div className='bio-list'>
                {
                    profile.bio.map((node, i) => {
                        return <div key={`bio-list-${i}`}>
                            <h4 className={`bio-year ${!node.ended ? 'present' : '' }`}>{`${node.year} ${ !node.ended ? ' to present' : '' }`}</h4>{node.content}
                         </div>
                    })
                }
                </div>
            </motion.div>
            <motion.div className="content skills" initial={ initial } animate={ animate } transition={{ delay: 0.55 }}>
                <h3><BsStack className='icon accent'/>Skills</h3>
                <div className='skill-list'>{ profile.skills.map((node, i) => <div key={`skill-${i}`} className='skill-badge'>{node}</div>) }</div>
            </motion.div >
            <motion.div className="content ilove" initial={ initial } animate={ animate } transition={{ delay: 0.65 }}>
                <h3>I <BsHeartFill className='icon accent'/></h3>
                <p>{ profile.ilove }</p>
            </motion.div >
            <motion.div className="content web" initial={ initial } animate={ animate } transition={{ delay: 0.75 }}>
                <h3><FaGlobe className='icon accent'/>Reach me out</h3>
                <div className='web-list'>
                { 
                    profile.web.map((node, i) => {
                        return <div key={`web-${i}`}>
                            { node.name == 'facebook' && <FaFacebook className='icon accent' /> }
                            { node.name == 'twitter' && <FaTwitter className='icon accent' /> }
                            { node.name == 'linkedin' && <FaLinkedin className='icon accent' /> }
                            <a className='' href={`${ node.link }`}> { node.desc } </a>
                        </div>
                    })
                }
                </div>
            </motion.div >
        </>
    )
}