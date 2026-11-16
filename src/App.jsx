
import "./App.css";

const photos = [
  {
    id: "01",
    title: "The little details",
    text: "Beauty has a way of appearing in the smallest details.",
    image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=1000&auto=format&fit=crop&q=85",
  },
  {
    id: "02",
    title: "Effortless elegance",
    text: "A quiet elegance that speaks entirely for itself.",
    image: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=1000&auto=format&fit=crop&q=85",
  },
  {
    id: "03",
    title: "One of a kind",
    text: "Some things are simply impossible to compare.",
    image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=1000&auto=format&fit=crop&q=85",
  },
];

function App() {
  return (
    <div className="site">
      <header className="navigation">
        <a href="#home" className="logo">ANAMAS<span>✳</span></a>
        <span className="navigation-center">AN ORIGINAL EXPERIENCE</span>
        <a href="#story" className="navigation-link">EXPLORE ↗</a>
      </header>

      <section className="hero" id="home">
        <div className="hero-background" />
        <div className="hero-shade" />

        <div className="hero-inner">
          <div className="hero-kicker">
            <span className="small-line" />
            AN EXPERIENCE IN ELEGANCE
            <span className="small-line" />
          </div>

          <h1>
            Some things are
            <br />
            beautifully <i>rare.</i>
          </h1>

          <p>
            A little collection of beauty, details and moments
            worth appreciating.
          </p>

          <a href="#story" className="explore">
            EXPLORE THE EXPERIENCE <span>↘</span>
          </a>
        </div>

        <div className="hero-footer">
          <span>EST. MMXXVI</span>
          <span>THE ART OF APPRECIATION</span>
          <span>SCROLL TO DISCOVER ↓</span>
        </div>
      </section>

      <section className="story" id="story">
        <div className="section-kicker">01 / THE INTRODUCTION</div>
        <div className="gold-line" />

        <h2>
          A little world
          <br />
          <i>of its own.</i>
        </h2>

        <p>
          There is something remarkable about the beauty
          found in simplicity. A quiet presence, a distinct
          elegance, and a charm that belongs to no one else.
        </p>
      </section>

      <section className="name-reveal">
        <div className="name-halo" />
        <span className="ornament">✳</span>
        <div className="section-kicker">SOMETHING TRULY DISTINCTIVE</div>
        <h2>ANAMAS</h2>
        <p>Beautifully, effortlessly, entirely herself.</p>
        <div className="gold-line" />
      </section>

      <section className="gallery">
        <div className="gallery-heading">
          <div>
            <div className="section-kicker">02 / THE DETAILS</div>
            <h2>Beauty in <i>details.</i></h2>
          </div>
          <span className="gallery-count">01 — 03</span>
        </div>

        <div className="gallery-grid">
          {photos.map((photo) => (
            <article className="gallery-card" key={photo.id}>
              <div className="gallery-image">
                <img src={photo.image} alt={photo.title} loading="lazy" />
                <span className="photo-number">{photo.id}</span>
              </div>
              <div className="gallery-copy">
                <h3>{photo.title}</h3>
                <p>{photo.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="finale">
        <span className="ornament">✳</span>
        <div className="section-kicker">A FINAL THOUGHT</div>
        <h2>Simply<br /><i>extraordinary.</i></h2>
        <p>Some things need no explanation.</p>
      </section>

      <footer className="footer">
        <a href="#home" className="logo">ANAMAS<span>✳</span></a>
        <span>AN ORIGINAL CREATION · 2026</span>
      </footer>
    </div>
  );
}

export default App;
