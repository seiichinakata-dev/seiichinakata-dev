import React from 'react'
import { BsCodeSlash } from 'react-icons/bs'
import { IoMdConstruct } from 'react-icons/io'
import { motion } from "framer-motion";

export default function Works({ profile, initial, animate }) {
    return (
        <motion.div className="content skills" initial={ initial } animate={ animate } transition={{ delay: 0.5 }}>
            <h3><BsCodeSlash className='icon accent'/>Works</h3>
            <div className='skill-list' style={{ visibility: 'hidden' }}>
            { 
                profile.skills && profile.skills.map((node, i) => <div key={`skill-${i}`} className='skill-badge'>{node}</div>) 
            }
            </div>
            <p className='' style={{ textAlign: 'left'}}><h2><IoMdConstruct className='icon'/>In Progress...</h2></p>
        </motion.div >
    )
}
