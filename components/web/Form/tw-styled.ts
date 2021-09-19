import { Button, Form } from 'antd'
import tw from 'tailwind-styled-components'

export const TWForm = tw(Form)`
    flex
    flex-col
    w-full
    md:w-[500px]
`
export const TWFormTitle = tw.div`
    mb-3.5
    text-xl
    md:text-2xl
`
export const TWFormDescription = tw.div`
    mb-3.5
    text-xs
    md:text-sm
    text-gray-500
`
export const TWFormButton = tw(Button)`
    w-full
`
export const TWFormExtra = tw.div`
    mt-3
    w-full
`
