import { Header } from "./Header";
// import { Content } from "./Content";
import { Footer } from "./Footer";
// import { SessionsContent } from "./leagueSessions/SessionsContent";
import { SeasonsContent } from "./seasons/SeasonsContent";
import { LeagueInfo } from "./leagues/LeagueInfo";

function App() {
  return (
    <div className="container-fluid font-link">
      <Header />
      <LeagueInfo />
      <SeasonsContent />
      <Footer />
    </div>
  );
}

export default App;
