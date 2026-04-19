import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/footer.scss"

interface Options {
  links: Record<string, string>
}

export default ((opts?: Options) => {
  const Footer: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
    const year = new Date().getFullYear()
    const links = opts?.links ?? {}
    return (
      <footer class={`${displayClass ?? ""} tg-foot`}>
        <div class="tg-foot-left">© {year} Silvia Zeng · built with quartz + care &amp; coffee</div>
        <div class="tg-foot-right">
          {Object.entries(links).map(([text, link]) => (
            <a href={link}>{text}</a>
          ))}
        </div>
      </footer>
    )
  }

  Footer.css = style
  return Footer
}) satisfies QuartzComponentConstructor
