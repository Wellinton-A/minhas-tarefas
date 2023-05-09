import {
  TagBase,
  TagDone,
  TagImportant,
  TagNormal,
  TagUrgent
} from './tags.style'

type Props = {
  children?: string
  tagType?: string
}

export const TAG_TYPE = {
  pendent: 'pendent',
  done: 'done',
  important: 'important',
  urgent: 'urgent',
  normal: 'normal'
}

const getTag = (tagType = TAG_TYPE.pendent) =>
  ({
    [TAG_TYPE.pendent]: TagBase,
    [TAG_TYPE.done]: TagDone,
    [TAG_TYPE.important]: TagImportant,
    [TAG_TYPE.urgent]: TagUrgent,
    [TAG_TYPE.normal]: TagNormal
  }[tagType])

const Tag = ({ children, tagType, ...otherProps }: Props) => {
  const CustomTag = getTag(tagType)
  return <CustomTag {...otherProps}>{children}</CustomTag>
}

export default Tag
