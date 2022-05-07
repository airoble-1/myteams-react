import { ButtonBase } from "../../styles/components/button"
export default function Button({ children, variant, ...rest }) {
  return (
    <ButtonBase variant={variant} {...rest}>
      {children}
    </ButtonBase>
  )
}
