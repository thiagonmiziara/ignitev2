import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { GlobalStyle } from "./styles/GlobalStyle"

export function App() {
  return (
    <>
      <Header />
      <Dashboard/>
      <GlobalStyle />
    </>
  );
}
