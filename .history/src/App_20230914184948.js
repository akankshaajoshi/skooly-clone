import "@/styles/App.css"
import Navbar from "@/components/shared/Navbar"
import HeroContainer from "@/containers/HeroContainer"
import DownloadContainer from "@/containers/DownloadContainer"
import ForSchoolContainer from "@/containers/ForSchoolContainer"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <HeroContainer/>
      <DownloadContainer/>
      <ForSchoolContainer/>
    </div>
  );
}

export default App;
