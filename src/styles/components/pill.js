import tw, { styled } from "twin.macro"

const Pill = styled.span(({ variant }) => [
  tw`
  py-0.5 px-2.5 
  shadow-md no-underline rounded-md
  text-sm text-gray-800 font-medium
  bg-indigo-100
  mb-2
   
  `,
  variant === "primary" && tw`bg-indigo-600 hover:bg-indigo-700`,
  variant === "secondary" && tw`bg-gray-200 hover:bg-gray-300`,
])

export default Pill
