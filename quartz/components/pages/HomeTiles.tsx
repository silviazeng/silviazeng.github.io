import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "../types"

const HomeTiles: QuartzComponent = ({ fileData }: QuartzComponentProps) => {
  if (fileData.slug !== "index") return null

  return (
    <div class="home-container">
      {/* Hero */}
      <div class="home-hero">
        <p>Hi, i'm <strong>Silvia</strong>.</p>
        <p>Ever Branching grows in three directions:</p>
        <p>AI &amp; Tech — I'm teaching myself →</p>
        <p>Work &amp; Career — looking back and forward →</p>
        <p>Life &amp; Parenting — raising a kid who teaches me more about cognition than anything →</p>
        <p>this is my running log of all of the above.</p>
      </div>

      {/* Main two-column */}
      <div class="home-main">
        {/* Left: Featured articles */}
        <div class="home-featured">
          <div class="home-section-label">Featured</div>

          <a href="/posts/medici-whos-who" class="hf-card hf-large hf-purple">
            <div class="hf-content">
              <div class="hf-tag">history · renaissance-history</div>
              <div class="hf-title">Who the Hell Is Who in Medici: Masters of Florence</div>
              <div class="hf-desc">Mar 31, 2026</div>
            </div>
          </a>

          <div class="hf-row">
            <a href="/posts/testing2" class="hf-card hf-sm hf-teal">
              <div class="hf-content">
                <div class="hf-tag">AI · learning</div>
                <div class="hf-title">Testing 2</div>
                <div class="hf-desc">Mar 20, 2026</div>
              </div>
            </a>
            <a href="/posts/testing3" class="hf-card hf-sm hf-dark">
              <div class="hf-content">
                <div class="hf-tag">travel · life</div>
                <div class="hf-title">Testing 3</div>
                <div class="hf-desc">Feb 10, 2026</div>
              </div>
            </a>
          </div>

          <a href="/posts/testing4" class="hf-card hf-wide hf-coral">
            <div class="hf-content hf-wide-content">
              <div>
                <div class="hf-tag">career · work</div>
                <div class="hf-title">Testing 4</div>
              </div>
              <div class="hf-meta">Mar 10, 2026</div>
            </div>
          </a>

          <a href="/posts" class="home-see-all">See all articles<br /><span>→</span></a>
        </div>

        {/* Right: Graph + Tags + Recent */}
        <div class="home-sidebar">
          <div class="home-section-label">Knowledge Graph</div>
          <div class="home-graph-box">
            <div class="home-graph-nodes">
              <span class="gnode gnode-green" style="top:30%;left:28%">Parenting</span>
              <span class="gnode gnode-green" style="top:20%;left:65%">Cognition</span>
              <span class="gnode gnode-purple" style="top:55%;left:42%">Your Garden</span>
              <span class="gnode gnode-green" style="top:75%;left:20%">Travel</span>
              <span class="gnode gnode-green" style="top:75%;left:68%">Brain</span>
            </div>
            <a href="/graph" class="home-graph-link">View full graph<br />→</a>
          </div>

          <div class="home-section-label" style="margin-top:10px">Browse by Tag</div>
          <div class="home-tagcloud">
            <a href="/tags/cognitive-science" class="htag">Cognitive Science <span>12</span></a>
            <a href="/tags/parenting" class="htag">Parenting <span>8</span></a>
            <a href="/tags/human-brain" class="htag">Human Brain <span>7</span></a>
            <a href="/tags/travel" class="htag">Travel <span>5</span></a>
            <a href="/tags/photography" class="htag">Photography <span>4</span></a>
            <a href="/tags/reading" class="htag">Reading <span>9</span></a>
            <a href="/tags/observations" class="htag">Daily Observations <span>6</span></a>
          </div>

          <div class="home-section-label" style="margin-top:10px">Recent Updates</div>
          <div class="home-recent">
            <a href="/posts/medici-whos-who" class="hrecent-item">
              <div class="hrecent-title">Who the Hell Is Who in Medici: Masters of Florence</div>
              <div class="hrecent-meta">Mar 31 · history</div>
            </a>
            <a href="/posts/testing2" class="hrecent-item">
              <div class="hrecent-title">Testing 2</div>
              <div class="hrecent-meta">Mar 20 · AI</div>
            </a>
            <a href="/posts/testing3" class="hrecent-item">
              <div class="hrecent-title">Testing 3</div>
              <div class="hrecent-meta">Feb 10 · travel</div>
            </a>
          </div>
        </div>
      </div>

      {/* MOC */}
      <div class="home-moc">
        <div class="home-section-label">Map of Content</div>
        <div class="home-moc-grid">
          <div class="home-moc-card">
            <div class="home-moc-accent home-moc-accent-purple"></div>
            <div class="home-moc-title">AI &amp; Tech</div>
            <ul>
              <li><a href="/posts/testing2">Testing 2</a></li>
              <li class="moc-more">+ more</li>
            </ul>
          </div>
          <div class="home-moc-card">
            <div class="home-moc-accent home-moc-accent-teal"></div>
            <div class="home-moc-title">Work &amp; Career</div>
            <ul>
              <li><a href="/posts/testing4">Testing 4</a></li>
              <li class="moc-more">+ more</li>
            </ul>
          </div>
          <div class="home-moc-card">
            <div class="home-moc-accent home-moc-accent-amber"></div>
            <div class="home-moc-title">Life &amp; Parenting</div>
            <ul>
              <li><a href="/posts/medici-whos-who">Who the Hell Is Who in Medici: Masters of Florence</a></li>
              <li><a href="/posts/testing3">Testing 3</a></li>
              <li class="moc-more">+ more</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default (() => HomeTiles) satisfies QuartzComponentConstructor
