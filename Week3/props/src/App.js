
import './App.css';
import ImageGallery from './props/ImageGallery';
import imageData from './props/imageData.json'
import ParentComponet from './props/basicExample/ParentComponet';

function App() {
  return (
    <div className="App">
{/* <ParentComponet /> */}
<ImageGallery images={imageData} />
    </div>
  );
}

export default App;
