import ButtonLinkStyle from "./../../styles/components/buttonLink"

const ButtonLink = ({ children, ...props }) => {
  return (
    <ButtonLinkStyle type="button" {...props}>{children}</ButtonLinkStyle>
  )
}

export default ButtonLink