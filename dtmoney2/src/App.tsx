import Modal from "react-modal";

import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { ModalProvider } from "./context/ContextModalNewTransaction";
import { TransactionsContextProvider } from "./context/TransactionsContext";
import { GlobalStyle } from "./styles/GlobalStyle";

Modal.setAppElement("#root");

export function App() {
  return (
    <TransactionsContextProvider>
      <ModalProvider>
        <Header />

        <Dashboard />

        <NewTransactionModal />

        <GlobalStyle />
      </ModalProvider>
    </TransactionsContextProvider>
  );
}
