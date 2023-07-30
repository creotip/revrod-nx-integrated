export const shuffle = (arr: unknown[]) => {
  console.log('shared')
  return arr.sort(() => Math.random() - 0.5)
}
