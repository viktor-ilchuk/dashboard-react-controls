import { create } from 'react-modal-promise'

export const openPopUp = (element, props) => {
  return create(element)(props)
}

export const isEveryObjectValueEmpty = (obj) =>
  Object.values(obj).every((item) => !item || item.length === 0)
