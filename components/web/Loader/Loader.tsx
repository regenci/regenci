import React from 'react'
import { motion } from 'framer-motion'
import {
  TWLoader,
  TWLoaderSvgPattern,
  TWLoaderSvgRect,
  TWLoaderSvgText,
  TWLoaderSvgTextRect,
  TWLoaderSvgWrapper,
} from './tw-styled'

const blackBox = {
  initial: {
    opacity: 1,
    display: 'flex',
  },
  animate: {
    opacity: 0,
    display: 'none',
    transition: {
      display: {
        delay: 1,
        duration: 0,
      },
      opacity: {
        duration: 1,
      },
      when: 'afterChildren',
      ease: [0.87, 0, 0.13, 1],
    },
  },
}

const textContainer = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 0,
    transition: {
      duration: 0.3,
      when: 'afterChildren',
    },
  },
}

const text = {
  initial: {
    y: 40,
  },
  animate: {
    y: 90,
    transition: {
      duration: 1.5,
      ease: [0.87, 0, 0.13, 1],
    },
  },
}
const Loader: React.FC = (): JSX.Element => {
  const Svg = motion(TWLoaderSvgWrapper)
  const RectText = motion(TWLoaderSvgTextRect)
  const Container = React.useMemo(() => motion(TWLoader), [])

  return (
    <Container initial="initial" animate="animate" variants={blackBox}>
      <Svg variants={textContainer}>
        <TWLoaderSvgPattern width={750} height={800} id="pattern" patternUnits="userSpaceOnUse">
          <TWLoaderSvgRect />
          <RectText variants={text} />
        </TWLoaderSvgPattern>
        <TWLoaderSvgText x="50%" y="50%" textAnchor="middle" style={{ fill: 'url(#pattern)' }}>
          regenci.
        </TWLoaderSvgText>
      </Svg>
    </Container>
  )
}

export default Loader
