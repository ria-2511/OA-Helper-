function CompanyInfoPage({ company }) {
  if (!company) {
    return null;
  }

  return (
    <main className="company-infopage">
      <header className="company-header">
        <p className="eyebrow">Company Info</p>
        <h1>{company.name}</h1>
        <p className="company-tagline">{company.tagline}</p>
      </header>

      <section className="company-overview">
        <h2>Overview</h2>
        <p>{company.overview}</p>
      </section>

      {company.highlights?.length > 0 && (
        <section className="company-section">
          <h2>Highlights</h2>
          <ul className="company-list">
            {company.highlights.map((item, index) => (
              <li key={`${company.companyId}-highlight-${index}`}>{item}</li>
            ))}
          </ul>
        </section>
      )}

      {company.targetTopics?.length > 0 && (
        <section className="company-section">
          <h2>Topics the company targets</h2>
          <ul className="company-list">
            {company.targetTopics.map((topic, index) => (
              <li key={`${company.companyId}-topic-${index}`}>{topic}</li>
            ))}
          </ul>
        </section>
      )}

      {company.links?.length > 0 && (
        <section className="company-section">
          <h2>Useful links</h2>
          <div className="company-links">
            {company.links.map((link, index) => (
              <a
                key={`${company.companyId}-link-${index}`}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="company-link"
              >
                {link.label}
              </a>
            ))}
          </div>
        </section>
      )}

      {company.notes?.length > 0 && (
        <section className="company-section">
          <h2>Notes</h2>
          <div className="company-card-list">
            {company.notes.map((note, index) => (
              <div
                key={`${company.companyId}-note-${index}`}
                className="company-card"
              >
                <p>{note}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {company.sections?.length > 0 && (
        <section className="company-section">
          <h2>Preparation notes</h2>
          {company.sections.map((section, index) => (
            <div
              key={`${company.companyId}-section-${index}`}
              className="company-card"
            >
              <h3>{section.heading}</h3>
              <p>{section.content}</p>
            </div>
          ))}
        </section>
      )}

      {company.questions?.length > 0 && (
        <section className="company-section">
          <h2>Interview Q&A</h2>
          {company.questions.map((item, index) => (
            <div
              key={`${company.companyId}-qa-${index}`}
              className="company-card company-qa"
            >
              <h3>Q: {item.question}</h3>
              <p>
                <strong>A:</strong> {item.answer}
              </p>
            </div>
          ))}
        </section>
      )}
    </main>
  );
}

export default CompanyInfoPage;
