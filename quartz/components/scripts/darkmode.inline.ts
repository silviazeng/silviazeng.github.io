const systemTheme = () =>
  window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark"

// Only an explicit click is stored, under a key introduced with that rule.
// The old "theme" key was also written by the system-change listener below,
// so anyone whose OS ever flipped to dark got pinned to dark forever without
// choosing; ignoring that key returns those readers to following the system.
const chosenTheme = localStorage.getItem("theme-choice")
document.documentElement.setAttribute("saved-theme", chosenTheme ?? systemTheme())

const emitThemeChangeEvent = (theme: "light" | "dark") => {
  const event: CustomEventMap["themechange"] = new CustomEvent("themechange", {
    detail: { theme },
  })
  document.dispatchEvent(event)
}

document.addEventListener("nav", () => {
  const switchTheme = () => {
    const newTheme =
      document.documentElement.getAttribute("saved-theme") === "dark" ? "light" : "dark"
    document.documentElement.setAttribute("saved-theme", newTheme)
    // Landing back on the system's own setting clears the override, so
    // "follow the system" stays reachable without opening devtools.
    if (newTheme === systemTheme()) {
      localStorage.removeItem("theme-choice")
    } else {
      localStorage.setItem("theme-choice", newTheme)
    }
    emitThemeChangeEvent(newTheme)
  }

  const themeChange = (e: MediaQueryListEvent) => {
    // Never persist here. This fires when the OS flips — nightfall, macOS
    // Auto — and writing it was what pinned the theme so daylight never came.
    if (localStorage.getItem("theme-choice") !== null) return
    const newTheme = e.matches ? "dark" : "light"
    document.documentElement.setAttribute("saved-theme", newTheme)
    emitThemeChangeEvent(newTheme)
  }

  for (const darkmodeButton of document.getElementsByClassName("darkmode")) {
    darkmodeButton.addEventListener("click", switchTheme)
    window.addCleanup(() => darkmodeButton.removeEventListener("click", switchTheme))
  }

  // Listen for changes in prefers-color-scheme
  const colorSchemeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
  colorSchemeMediaQuery.addEventListener("change", themeChange)
  window.addCleanup(() => colorSchemeMediaQuery.removeEventListener("change", themeChange))
})
