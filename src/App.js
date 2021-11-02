import './master.css';

function App() {
  return (
    <div className="App">
      <main className="flex container">
        <div className="box box-1">
          <h1>Join our community</h1>

          <h2>30-day, hassle-free money back guarantee</h2>

          <p>Gain access to our full library of tutorials along with expert code reviews.
          Perfect for any developers who are serious about honing their skills.</p>
        </div>

        <div className="flex row">
          <div className="box box-2">
            <h2>Monthly Subscription</h2>

            <p><span>$29</span> per month</p>

            <p>Full access for less than $1 a day</p>

            <button className="btn">Sign Up</button>
          </div>

          <div className="box box-3">
            <h2>Why Us</h2>

            <ul>
              <li>Tutorials by industry experts</li>
              <li>Peer & expert code review</li>
              <li>Coding exercises</li>
              <li>Access to our GitHub repos</li>
              <li>Community forum</li>
              <li>Flashcard decks</li>
              <li>New videos every week</li>
            </ul>
          </div>
        </div>
      </main>
      <footer>
    <p class="attribution">
      Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
      Coded by <a href="https://github.com/soransh-singh">Soransh Singh</a>.
    </p>
  </footer>
    </div>
  );
}

export default App;
