import { Header } from "./Header";
// import { Content } from "./Content";
import { Footer } from "./Footer";
// import { SessionsContent } from "./leagueSessions/SessionsContent";
import { SeasonsContent } from "./seasons/SeasonsContent";

function App() {
  return (
    <div className="container-fluid font-link">
      <Header />
      {/* <Content /> */}
      {/* <SessionsContent /> */}
      <SeasonsContent />
      <Footer />
    </div>
  );
}

export default App;
