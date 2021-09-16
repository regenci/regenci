import { AnimationControls, VariantLabels, TargetAndTransition } from 'framer-motion'
import { MakeCustomValueType } from 'framer-motion/types/types'
import { NextPage } from 'next'
import { ReactNode } from 'react'

export interface UseWindowSize {
  width: number | undefined
  height: number | undefined
}
export type Page = NextPage & { Layout: () => JSX.Element }
export type Children = ReactNode | JSX.Element | JSX.Element[] | Element

export interface ITogglers {
  togglers: {
    personal: boolean
    education: boolean
    experience: boolean
    links: boolean
    languages: boolean
    skills: boolean
    templates: boolean
  }
  menu: {
    toggled: boolean
  }
}

export type FramerAnimation = boolean | VariantLabels | AnimationControls | TargetAndTransition | undefined
