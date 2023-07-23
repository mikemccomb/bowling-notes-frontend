import { Header } from "./Header";
// import { Content } from "./Content";
import { Footer } from "./Footer";
import { SessionsContent } from "./leagueSessions/SessionsContent";

function App() {
  return (
    <div className="container-fluid font-link">
      <Header />
      {/* <Content /> */}
      <SessionsContent />
      <Footer />
    </div>
  );
}

export default App;
