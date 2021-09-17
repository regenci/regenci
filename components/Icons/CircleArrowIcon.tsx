import { motion } from 'framer-motion'
import React, { SVGAttributes } from 'react'

interface IProps extends SVGAttributes<SVGElement> {
  hovered: boolean
}
const circleVariants = {
  hidden: {
    opacity: 1,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 1,
    },
  },
}
const CircleArrowIcon = ({ hovered, ...props }: IProps) => {
  return (
    <svg {...props} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="2">
      <path
        d="M31.6415 20.9748C31.9344 20.6819 31.9344 20.207 31.6415 19.9141L26.8685 15.1412C26.5756 14.8483 26.1007 14.8483 25.8078 15.1412C25.5149 15.4341 25.5149 15.9089 25.8078 16.2018L30.0505 20.4445L25.8078 24.6871C25.5149 24.98 25.5149 25.4549 25.8078 25.7478C26.1007 26.0407 26.5756 26.0407 26.8685 25.7478L31.6415 20.9748ZM8.88892 21.1945L31.1111 21.1945L31.1111 19.6945L8.88892 19.6945L8.88892 21.1945Z"
        fill="black"
      />
      <motion.path
        d="M0.75,20a19.25,19.25 0 1,0 38.5,0a19.25,19.25 0 1,0 -38.5,0"
        stroke="black"
        variants={circleVariants}
        initial="hidden"
        animate={hovered ? 'visible' : 'hidden'}
      />
    </svg>
  )
}

export default CircleArrowIcon
