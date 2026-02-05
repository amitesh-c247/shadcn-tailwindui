import * as React from "react"

export function useToggle(
  initial = false
): [boolean, () => void, (next: boolean) => void] {
  const [value, setValue] = React.useState(initial)

  const toggle = React.useCallback(() => {
    setValue((prev) => !prev)
  }, [])

  const set = React.useCallback((next: boolean) => {
    setValue(next)
  }, [])

  return [value, toggle, set]
}
