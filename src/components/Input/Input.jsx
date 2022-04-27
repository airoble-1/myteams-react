import { ExclamationCircleIcon } from "@heroicons/react/solid"
import {
  InputWrapper,
  InputBase,
  InputLabel,
  InputIconError,
  InputMessageError,
} from "./../../styles/components/input"
export default function Input({
  name,
  error,
  type,
  placeholder,
  label,
  showError,
  ...rest
}) {
  return (
    <InputWrapper>
      <div>
        {label && <InputLabel htmlFor={name}>{label}</InputLabel>}
        <div className="mt-1 relative rounded-md">
          <InputBase
            name={name}
            type={type}
            placeholder={placeholder}
            error={error}
            {...rest}
          />
          {error && (
            <InputIconError>
              <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
            </InputIconError>
          )}
          {error && (
            <InputMessageError>{error ? error : placeholder}</InputMessageError>
          )}
        </div>
      </div>
    </InputWrapper>
  )
}
