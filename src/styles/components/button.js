import tw, { styled } from "twin.macro"

export const ButtonBase = styled.button(({ variant }) => [
  tw`
  relative 
  w-full 
  flex justify-center 
  py-2 px-4 
  border border-transparent rounded-md 
  text-sm font-medium text-white 
  bg-indigo-600 hover:bg-indigo-700 
  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
  `,
  variant === "primary" && tw`bg-indigo-600 hover:bg-indigo-700`,
  variant === "secondary" && tw`bg-gray-200 hover:bg-gray-300`,
])
