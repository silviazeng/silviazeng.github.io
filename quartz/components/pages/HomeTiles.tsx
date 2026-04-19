import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "../types"
import { QuartzPluginData } from "../plugins/vfile"
import { byDateAndAlphabetical } from "../PageList"
import { getDate } from "../Date"
import { resolveRelative, FullSlug } from "../../util/path"

type TagKind = "ai" | "career" | "hist" | undefined

const TAG_KIND: Record<string, TagKind> = {
  ai: "ai",
  theory: "ai",
  "singular-learning-theory": "ai",
  "loss-landscape": "ai",
  "deep-learning": "ai",
  "machine-learning": "ai",
  "recommendation-systems": "ai",
  career: "career",
  uncertainty: undefined,
  learning: undefined,
  reading: undefined,
  power: "hist",
  history: "hist",
  machiavelli: "hist",
  "the-prince": "hist",
  "renaissance-history": "hist",
}

function tagKind(tag: string): TagKind {
  return TAG_KIND[tag.toLowerCase()] ?? undefined
}

function tagCounts(allFiles: QuartzPluginData[]): { tag: string; count: number }[] {
  const counts: Record<string, number> = {}
  for (const file of allFiles) {
    const tags: string[] = (file?.frontmatter?.tags as string[]) ?? []
    for (const tag of tags) {
      counts[tag] = (counts[tag] ?? 0) + 1
    }
  }
  return Object.entries(counts)
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => b.count - a.count || a.tag.localeCompare(b.tag))
}

function formatDate(d: Date | undefined): string {
  if (!d) return ""
  const y = d.getFullYear()
  const m = String(d.getMonth() + 1).padStart(2, "0")
  const day = String(d.getDate()).padStart(2, "0")
  return `${y}.${m}.${day}`
}

const HomeTiles: QuartzComponent = ({ fileData, allFiles, cfg }: QuartzComponentProps) => {
  if (fileData.slug !== "index") return null

  const posts = allFiles
    .filter((f) => (f.slug ?? "").startsWith("posts/"))
    .sort(byDateAndAlphabetical(cfg))

  const tags = tagCounts(allFiles)

  const workbench = [
    { title: "The Prince", author: "Machiavelli · tr. Tim Parks", status: "reading" },
    { title: "Range", author: "David Epstein", status: "revisiting" },
    { title: "Algebraic Geometry & Statistical Learning", author: "Watanabe", status: "slow read" },
  ]

  return (
    <div class="tg-home">
      <div class="tg-main">
        {/* LEFT COLUMN */}
        <div class="tg-left">
          {/* Hero */}
          <section class="tg-hero">
            <div class="tg-cmd">
              <span class="tg-prompt">$</span>whoami <span class="tg-comment"># {formatDate(new Date())}</span>
            </div>
            <h1 class="tg-h1">
              A taste for elegant <span class="tg-accent">structure</span>,<br />
              a tolerance for confusion,<br />
              and no pressure to pretend otherwise.
            </h1>
            <p class="tg-sub">
              I'm more interested in why it works than whether it works.
              <span class="tg-caret" aria-hidden="true"></span>
            </p>
          </section>

          {/* Posts list */}
          <section class="tg-section">
            <div class="tg-cmd tg-cmd-small">
              <span class="tg-prompt">$</span>ls -lt posts/ <span class="tg-comment"># newest first</span>
            </div>
            <div class="tg-posts">
              {posts.map((page) => {
                const title = (page.frontmatter?.title as string) ?? page.slug
                const rawDesc = (page.frontmatter?.description as string) ?? page.description ?? ""
                const desc = rawDesc.trim()
                const d = getDate(cfg, page)
                const pageTags: string[] = (page.frontmatter?.tags as string[]) ?? []
                return (
                  <a
                    class="tg-post"
                    href={resolveRelative(fileData.slug!, page.slug as FullSlug)}
                  >
                    <div class="tg-post-date">{formatDate(d)}</div>
                    <div class="tg-post-body">
                      <div class="tg-post-title">
                        <span class="tg-post-mk">▸</span>
                        {title}
                      </div>
                      {desc && <div class="tg-post-desc">{desc}</div>}
                      {pageTags.length > 0 && (
                        <div class="tg-post-tags">
                          {pageTags.map((t) => (
                            <span class={`tg-tag-sm tg-tag-${tagKind(t) ?? "n"}`}>#{t}</span>
                          ))}
                        </div>
                      )}
                    </div>
                  </a>
                )
              })}
            </div>
          </section>

          {/* Pillars */}
          <section class="tg-section">
            <div class="tg-cmd tg-cmd-small">
              <span class="tg-prompt">$</span>cat pillars.md
            </div>
            <div class="tg-pillars">
              <a class="tg-pill" href="/AI-Tech">
                <div class="tg-pill-head">§ AI &amp; Tech</div>
                <div class="tg-pill-name">A taste for elegant structure.</div>
                <div class="tg-pill-desc">
                  A tolerance for confusion, and no pressure to pretend otherwise. More interested in why it works than whether it works.
                </div>
              </a>
              <a class="tg-pill" href="/Work-Career">
                <div class="tg-pill-head">§ Work &amp; Career</div>
                <div class="tg-pill-name">Patterns &amp; direction.</div>
                <div class="tg-pill-desc">
                  Looking back for patterns, forward for direction.
                </div>
              </a>
              <a class="tg-pill" href="/Living-Reading">
                <div class="tg-pill-head">§ Living &amp; Reading</div>
                <div class="tg-pill-name">The unquantifiable stuff.</div>
                <div class="tg-pill-desc">
                  Reading, watching, noticing. Machiavelli, Range, Renaissance.
                </div>
              </a>
            </div>
          </section>
        </div>

        {/* RIGHT RAIL */}
        <aside class="tg-rail">
          <section class="tg-panel">
            <div class="tg-panel-head">
              <span>Graph View</span>
              <span class="tg-panel-n">{allFiles.length} nodes</span>
            </div>
            <div class="tg-panel-graph graph">
              <div class="graph-outer">
                <div
                  class="graph-container"
                  data-cfg='{"drag":true,"zoom":true,"depth":-1,"scale":1.0,"repelForce":0.8,"centerForce":0.25,"linkDistance":50,"fontSize":0.75,"opacityScale":1,"showTags":true,"removeTags":[],"focusOnHover":false,"enableRadial":false}'
                ></div>
              </div>
            </div>
          </section>

          <section class="tg-panel">
            <div class="tg-panel-head">
              <span>Browse by Tag</span>
              <span class="tg-panel-n">{tags.length}</span>
            </div>
            <div class="tg-tagcloud">
              {tags.map(({ tag, count }) => (
                <a class={`tg-tag tg-tag-${tagKind(tag) ?? "n"}`} href={`/tags/${tag}`}>
                  #{tag.replace(/-/g, "-")}
                  <span class="tg-tag-c">{count}</span>
                </a>
              ))}
            </div>
          </section>

          <section class="tg-panel">
            <div class="tg-panel-head">
              <span>On the Workbench</span>
              <span class="tg-panel-n">now</span>
            </div>
            <div class="tg-workbench">
              {workbench.map((row) => (
                <div class="tg-wb-row">
                  <div>
                    <div class="tg-wb-title">{row.title}</div>
                    <div class="tg-wb-author">{row.author}</div>
                  </div>
                  <div class="tg-wb-status">{row.status}</div>
                </div>
              ))}
            </div>
          </section>

          <section class="tg-panel">
            <div class="tg-panel-head">
              <span>Elsewhere</span>
            </div>
            <div class="tg-elsewhere">
              <a href="https://github.com/silviazeng">
                <span class="tg-prompt">↗</span>github.com/silviazeng
              </a>
              <a href="https://twitter.com/_silviazeng">
                <span class="tg-prompt">↗</span>twitter.com/_silviazeng
              </a>
              <a href="/index.xml">
                <span class="tg-prompt">↗</span>/rss.xml
              </a>
            </div>
          </section>
        </aside>
      </div>
    </div>
  )
}

export default (() => HomeTiles) satisfies QuartzComponentConstructor
