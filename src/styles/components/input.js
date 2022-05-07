import tw, { styled } from "twin.macro"

export const InputWrapper = tw.div`
mb-4
`

export const InputLabel = tw.label`
  block text-sm font-medium text-gray-700
`

export const InputBase = styled.input(({ error }) => [
  tw`
  appearance-none 
  block 
  w-full 
  px-3 
  py-2 
  border 
  rounded-md 
  shadow-none
  sm:text-sm`,

  tw`
  border-gray-300 
  placeholder-gray-400 
  focus:outline-none 
  focus:ring-indigo-500 
  focus:border-indigo-500 
  `,

  error &&
    tw`border-red-300 
  text-red-900 
  placeholder-red-300 
  focus:outline-none 
  focus:ring-red-500 
  focus:border-red-500`,
])

export const InputIconError = tw.div`
  absolute 
  top-2.5
  right-0 
  pr-3 
  flex 
  items-center 
  pointer-events-none
`

export const InputMessageError = tw.p`
  mt-1 text-sm text-red-600 
 `
