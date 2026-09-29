import './App.css'

/**
 * App — root component.
 *
 * Future tasks will add:
 *   - React Router with routes for /upload, /history, /history/:id
 *   - An upload form (text + audio file inputs) → POST /api/transcripts
 *   - A history list view → GET /api/transcripts
 *   - A transcript detail view with summary + action items + job-status polling
 */
function App() {
  return (
    <main className="app-shell">
      <header className="app-header">
        <h1>Meeting Notes AI</h1>
        <p className="tagline">Upload a meeting transcript — get a summary and action items.</p>
      </header>

      <section className="placeholder-notice">
        <p>
          🚧 <strong>Coming soon:</strong> upload form, meeting history, and AI-generated summaries.
        </p>
      </section>
    </main>
  )
}

export default App
