import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { MdOutlineErrorOutline } from 'react-icons/md';

export default function ErrorPage({ initial, animate }) {
    return (
      <motion.div className='error-page' initial={ initial } animate={ animate } transition={{ delay: 0.2 }}>
          <h1><MdOutlineErrorOutline className='icon' style={{ fontSize: '2.5rem' }}/>404 Page not found</h1>
          <Link to={'/'}>Back to Home</Link>
      </motion.div>
    )
}
