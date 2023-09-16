import { Route, Switch, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
import Home from "./Pages/Home";
import Team from "./Pages/Team";
import Calender from "./Pages/Calender";
import Developer from "./Pages/Developer";
import Faq from "./Pages/Faq";
import Documents from "./Pages/Documents";
import Projects from "./Pages/Projects";
import styled from "styled-components";
import { AnimatePresence } from "framer-motion";

const Pages = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: calc(2rem + 2vw);
    background: linear-gradient(to right, #803bec 30%, #1b1b1b 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

function App() {
  const location = useLocation();
  return (
    <>
      <Sidebar />
      <Pages>
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.pathname}>
            <Route exact path="/" component={Home} />
            <Route path="/team" component={Team} />
            <Route path="/calender" component={Calender} />
            <Route path="/developer" component={Developer} />
            <Route path="/faq" component={Faq} />
            <Route path="/documents" component={Documents} />
            <Route path="/projects" component={Projects} />
          </Switch>
        </AnimatePresence>
      </Pages>
    </>
  );
}

export default App;