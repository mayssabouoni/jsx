
import './App.css';
import imageInSrc from "./imageInSrc.jpg";
import './style.css'; 
 

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div style={{border:'solid 1px black',maxwidth:'100vw'}}>
      <h1 className='titlered'>Your name here</h1>
       
      <br />
       <img src={imageInSrc}   className="imageInSrc" alt="imageInSrc" ></img>
       <br />
      <img src={"/imageInPublic.jpg"} className="imageInPublic" alt="imageInPublic" ></img>
      
     </div>
     
     
     <iframe width="560" height="315" src="https://www.youtube.com/embed/eV-kARtgxkM " title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

     

      </header>
    </div>
  );
 
}

export default App  ;

