// Button.tsx

import { ButtonContainer, ButtonLink } from './styles'

export type Props = {
  background: 'orange' | 'white'
  type: 'button' | 'link'
  title: string
  to?: string
  onClick?: () => void
  children?: string
}

export const Button = ({
  background,
  type,
  title,
  to,
  children,
  onClick
}: Props) => {
  if (type === 'button') {
    return (
      <ButtonContainer background={background} onClick={onClick}>
        {children}
      </ButtonContainer>
    )
  }

  return (
    <ButtonLink href={to as string} title={title}>
      {children}
    </ButtonLink>
  )
}

export default Button
