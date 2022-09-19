import { Route, Routes } from "react-router-dom";
import { ItemContainer } from "./components/item/ItemContainer";
import { Home } from "./components/pages/Home";
import { NavBar } from "./components/pages/NavBar";


function App() {

  return (
    <>

      <NavBar />
      <main>

        <Routes>

          <Route exact path='/' element={<Home />} />
          
          <Route path='/character/:id' element={<ItemContainer />} />

          <Route path='/*' element={<Home />} />

        </Routes>

      </main>
      

    </>
  )
}

export default App
