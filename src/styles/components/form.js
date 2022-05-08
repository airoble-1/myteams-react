import tw from "twin.macro";

export const FormWrapper = tw.div`
  min-h-full 
  flex flex-col 
  justify-center  
  sm:px-6 
  lg:px-8
`;
export const FormBox = tw.div`
  sm:mx-auto 
  sm:w-full 
  sm:max-w-md 
`;
export const FormImage = tw.img`
  mx-auto 
  h-12 
  w-auto
`;
export const FormTitle = tw.h2`
  mt-6 
  text-center 
  text-3xl 
  font-extrabold 
  text-gray-900
`;

export const FormContainer = tw.div`
  bg-white 
  py-8 
  px-4 
  shadow 
  rounded-lg 
  sm:px-10
  m-6
`;
export const FormError = tw.div`
  mb-4
  rounded-md
  border-2
  border-red-400
  bg-red-50
  py-2 
  px-2  
  text-red-600
`;
export const FormSucess = tw.div`
  mb-4
  rounded-md
  border-2
  border-green-400
  bg-green-50
  py-2 
  px-2  
  text-green-600
`;
