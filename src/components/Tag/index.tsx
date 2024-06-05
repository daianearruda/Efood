import { TagContainer } from './styles'

export type Props = {
  children?: React.ReactNode // Permite strings, números, elementos React, etc.
}

const Tag = ({ children }: Props) => <TagContainer>{children}</TagContainer>

export default Tag
