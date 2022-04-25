import { ExclamationCircleIcon } from "@heroicons/react/solid"
import {
  InputWrapper,
  InputBase,
  InputLabel,
  InputIconError,
} from "./../../styles/components/input"
export default function Input({
  id,
  name,
  error,
  type,
  placeholder,
  label,
  showError,
  ...rest
}) {
  console.log(error)
  return (
    <InputWrapper>
      <div>
        {label && <InputLabel htmlFor={name}>{label}</InputLabel>}
        <div className="mt-1 relative rounded-md shadow-sm">
          <InputBase
            id={id}
            name={name}
            type={type}
            placeholder={error ? error : placeholder}
            error={error}
            {...rest}
          />
          {error && (
            <InputIconError>
              <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
            </InputIconError>
          )}
        </div>
      </div>
    </InputWrapper>
  )
}
