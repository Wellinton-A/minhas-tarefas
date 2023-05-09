import { ButtonBase, ButtonCancel, ButtonSave } from './button.style'

type Props = {
  children?: string
  buttonType?: string
  onClick?: () => void
}

export const BUTTON_TYPE = {
  save: 'save',
  edit: 'edit',
  cancelRemove: 'cancelRemove'
}

const getButton = (buttonType = BUTTON_TYPE.edit) =>
  ({
    [BUTTON_TYPE.edit]: ButtonBase,
    [BUTTON_TYPE.save]: ButtonSave,
    [BUTTON_TYPE.cancelRemove]: ButtonCancel
  }[buttonType])

const Button = ({ children, buttonType, ...otherProps }: Props) => {
  const CustomButton = getButton(buttonType)
  return <CustomButton {...otherProps}>{children}</CustomButton>
}

export default Button
