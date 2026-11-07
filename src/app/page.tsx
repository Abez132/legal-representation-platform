const services = [
  ["Find a lawyer", "Search legal professionals by practice area and location."],
  ["Manage enquiries", "Keep representation enquiries in one secure place."],
  ["Build trusted connections", "Help clients and legal professionals begin the right conversation."],
];

export default function Home() {
  return (
    <main>
      <section className="hero">
        <p className="eyebrow">Legal Representation Platform</p>
        <h1>Find the legal support you need in Addis Ababa.</h1>
        <p className="intro">
          This first release establishes the platform foundation. Lawyer profiles, search, and enquiry management will be added as the project develops.
        </p>
        <a className="button" href="#services">Explore the platform</a>
      </section>

      <section aria-labelledby="services-title" className="services" id="services">
        <h2 id="services-title">What the platform will support</h2>
        <div className="cards">
          {services.map(([title, description]) => (
            <article className="card" key={title}>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
