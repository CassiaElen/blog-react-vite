import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Sazonalidade from './pages/Sazonalidade';
import DicasCultivo from './pages/DicasCultivo';
import CultiveConhecimento  from './pages/CultiveConhecimmento';
import JardimVertical from './pages/JardimVertical';
import JardimSonhos from './pages/JardimSonhos';
import PlantaVerao from './pages/PlantaVerao';
import JardimInverno from './pages/JardimInverno';
import PlantaEstacao from './pages/PlantaEstacao';
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/sazonalidade' element={<Sazonalidade/>}/>
        <Route path='/dicascultivo' element={<DicasCultivo/>}/>
        <Route path='/cultiveconhecimento' element={<CultiveConhecimento/>}/>
        <Route path='/jardimvertical' element={<JardimVertical/>}/>
        <Route path='/jardimsonhos' element={<JardimSonhos/>}/>
        <Route path='/plantaverao' element={<PlantaVerao/>}/>
        <Route path='/jardiminverno' element={<JardimInverno/>}/>
        <Route path='/plantaestacao' element={<PlantaEstacao/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App
