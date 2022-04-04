export const inputAction = (value) => ({
  type: "inputValueChange",
  value
})

export const delAction = (index) => ({
  type: "delItem",
  value: index
})

export const clickAction = {
  type: "addItem",
}