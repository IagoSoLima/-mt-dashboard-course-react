export const removeDuplicateArrayValue = (value: any) => {
  return value.filter((item, index) => value.indexOf(item) === index)
}
