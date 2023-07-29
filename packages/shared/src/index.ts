export const shuffle = (arr: unknown[]) => {
  return arr.sort(() => Math.random() - 0.5)
}
