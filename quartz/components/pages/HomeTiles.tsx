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

          {/* Getty guides */}
          <section class="tg-section">
            <div class="tg-cmd tg-cmd-small">
              <span class="tg-prompt">$</span>open getty/ <span class="tg-comment"># 中文观展指南</span>
            </div>
            <div class="tg-pillars tg-pillars-2">
              <a class="tg-pill" href="/static/getty/center-guide.html">
                <div class="tg-pill-head">Getty Center</div>
                <div class="tg-pill-name">盖蒂中心 · 观展指南</div>
                <div class="tg-pill-desc">
                  阅读模式 + 楼层导航 · 60件必看藏品
                </div>
              </a>
              <a class="tg-pill" href="/static/getty/villa-guide.html">
                <div class="tg-pill-head">Getty Villa</div>
                <div class="tg-pill-name">盖蒂别墅 · 观展指南</div>
                <div class="tg-pill-desc">
                  阅读模式 + 楼层导航 · 20件必看藏品
                </div>
              </a>
            </div>
          </section>
        </div>

        {/* RIGHT RAIL */}
        <aside class="tg-rail">
          <div class="tg-rail-inner">
          <section class="tg-panel">
            <div class="tg-panel-head">
              <span>Graph View</span>
              <button class="global-graph-icon tg-graph-expand" aria-label="Open global graph">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 55 55" fill="currentColor" xmlSpace="preserve">
                  <path d="M49,0c-3.309,0-6,2.691-6,6c0,1.035,0.263,2.009,0.726,2.86l-9.829,9.829C32.542,17.634,30.846,17,29,17s-3.542,0.634-4.898,1.688l-7.669-7.669C16.785,10.424,17,9.74,17,9c0-2.206-1.794-4-4-4S9,6.794,9,9s1.794,4,4,4c0.74,0,1.424-0.215,2.019-0.567l7.669,7.669C21.634,21.458,21,23.154,21,25s0.634,3.542,1.688,4.897L10.024,42.562C8.958,41.595,7.549,41,6,41c-3.309,0-6,2.691-6,6s2.691,6,6,6s6-2.691,6-6c0-1.035-0.263-2.009-0.726-2.86l12.829-12.829c1.106,0.86,2.44,1.436,3.898,1.619v10.16c-2.833,0.478-5,2.942-5,5.91c0,3.309,2.691,6,6,6s6-2.691,6-6c0-2.967-2.167-5.431-5-5.91v-10.16c1.458-0.183,2.792-0.759,3.898-1.619l7.669,7.669C41.215,39.576,41,40.26,41,41c0,2.206,1.794,4,4,4s4-1.794,4-4s-1.794-4-4-4c-0.74,0-1.424,0.215-2.019,0.567l-7.669-7.669C36.366,28.542,37,26.846,37,25s-0.634-3.542-1.688-4.897l9.665-9.665C46.042,11.405,47.451,12,49,12c3.309,0,6-2.691,6-6S52.309,0,49,0z"/>
                </svg>
              </button>
            </div>
            <div class="tg-panel-graph graph">
              <div class="graph-outer">
                <div
                  class="graph-container"
                  data-cfg='{"drag":true,"zoom":true,"depth":-1,"scale":1.0,"repelForce":0.8,"centerForce":0.25,"linkDistance":50,"fontSize":0.75,"opacityScale":1,"showTags":true,"removeTags":[],"focusOnHover":false,"enableRadial":false}'
                ></div>
                <span class="tg-graph-count">{allFiles.length} nodes</span>
              </div>
              <div class="global-graph-outer">
                <div
                  class="global-graph-container"
                  data-cfg='{"drag":true,"zoom":true,"depth":-1,"scale":0.9,"repelForce":0.5,"centerForce":0.2,"linkDistance":30,"fontSize":0.6,"opacityScale":1,"showTags":true,"removeTags":[],"focusOnHover":true,"enableRadial":true}'
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
          </div>

          <section class="tg-panel tg-panel-tail">
            <div class="tg-panel-head">
              <span>Elsewhere</span>
            </div>
            <div class="tg-elsewhere">
              <a href="https://github.com/silviazeng">
                <span class="tg-prompt">↗</span>github.com/silviazeng
              </a>
              <a href="https://www.linkedin.com/in/silvia-zeng">
                <span class="tg-prompt">↗</span>linkedin.com/in/silvia-zeng
              </a>
            </div>
          </section>
        </aside>
      </div>
    </div>
  )
}

export default (() => HomeTiles) satisfies QuartzComponentConstructor
