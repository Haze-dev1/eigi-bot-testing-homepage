import { actionLine, copy } from './copy'
import { GarmentIllustration, PatternBandIllustration } from './illustrations'

export default function App() {
  const { brand, tag, hero, statement, garment, band, status, footer } = copy

  return (
    <div className="page">
      {/* 1 — Top bar: wordmark + pre-launch tag. No nav. */}
      <header className="topbar">
        <span className="wordmark">
          {brand}
          <span className="wordmark-mark" aria-hidden="true">
            .
          </span>
        </span>
        <span className="tag">{tag}</span>
      </header>

      <main>
        {/* 2 — Hero: type left, illustration right. */}
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <h1 id="hero-title">{hero.title}</h1>
            <p className="hero-label">{hero.label}</p>

            {/*
              ACTION ZONE — reserved, not yet interactive.
              This row is hard-locked to 52px (--action-row-height) and holds a
              single line of status copy. When the real CTA arrives it replaces
              this <p> inside the same 52px row, so the hero does not shift by a
              single pixel. No <form>, <input> or <button> exists in the DOM.
            */}
            <div
              className="action-row"
              data-testid="action-zone"
              data-action-row-height="52"
            >
              <span className="action-mark" aria-hidden="true" />
              <p className="action-line">{actionLine}</p>
            </div>
          </div>

          <figure className="hero-figure">
            <GarmentIllustration />
            <figcaption className="figure-caption">
              {hero.figureCaption}
            </figcaption>
          </figure>
        </section>

        {/* 3 — Statement */}
        <section className="statement" aria-labelledby="statement-title">
          <p className="eyebrow">{statement.eyebrow}</p>
          <div className="statement-body">
            <h2 id="statement-title" className="statement-lead">
              {statement.lead}
            </h2>
            {statement.body.map((para) => (
              <p key={para}>{para}</p>
            ))}
          </div>
        </section>

        {/* 4 — The Garment: three numbered entries, vertical hairlines */}
        <section className="garment" aria-labelledby="garment-title">
          <h2 id="garment-title" className="eyebrow">
            THE GARMENT
          </h2>
          <ul className="garment-list">
            {garment.entries.map((entry) => (
              <li key={entry.index} className="garment-entry">
                <span className="entry-index">{entry.index}</span>
                <h3>{entry.title}</h3>
                <p>{entry.body}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* 5 — Full-bleed illustration band with caption */}
        <section className="band" aria-labelledby="band-title">
          <h2 id="band-title" className="sr-only">
            The pattern
          </h2>
          <figure className="band-figure">
            <PatternBandIllustration />
            <figcaption className="figure-caption band-caption">
              {band.caption}
            </figcaption>
          </figure>
        </section>

        {/* 6 — Status: Design → Sampling → Launch */}
        <section className="status" aria-labelledby="status-title">
          <h2 id="status-title" className="eyebrow">
            {status.label}
          </h2>
          <ol className="status-track">
            {status.steps.map((step, index) => (
              <li
                key={step}
                className="status-step"
                aria-current={index === status.currentIndex ? 'step' : undefined}
              >
                {index === status.currentIndex ? (
                  <span className="status-dot" aria-hidden="true" />
                ) : null}
                <span>{step}</span>
                {index < status.steps.length - 1 ? (
                  <span className="status-arrow" aria-hidden="true">
                    →
                  </span>
                ) : null}
              </li>
            ))}
          </ol>
        </section>
      </main>

      {/* 7 — Footer */}
      <footer className="footer">
        <span className="footer-name">
          {brand}
          <span className="wordmark-mark" aria-hidden="true">
            .
          </span>
        </span>
        <span className="footer-contact">{footer.contact}</span>
        <span className="footer-line">{footer.line}</span>
      </footer>
    </div>
  )
}
