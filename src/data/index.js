import { menus } from './menus'
import { mis } from './mis'
var list = [
  ...menus,
  ...mis
]
export const map = new Map(list)