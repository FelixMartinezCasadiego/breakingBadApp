import { ItemListContainer } from "./components/item/ItemListContainer";
import { NavBar } from "./components/pages/NavBar";
import { Search } from "./components/pages/Search";


function App() {

  return (
    <div>

      <NavBar />
      <main>

        <Search />
        <ItemListContainer />

      </main>
      

    </div>
  )
}

export default App
