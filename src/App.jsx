//App.js
import 'bootstrap/dist/css/bootstrap.min.css';
import { lazy, Suspense } from 'react'
//App.js
import { cardData } from './mock.js';

const CardComponent = lazy(() => import("./components/CardComponent"))
    
function App() {
    return (
    <div>
        <h1>React Lazy Loading with Infinite Scroll</h1>
        <Suspense fallback={<div>isLoading...</div>}>
          {/* {
            cardData.map(el=> <h1>{el.title}</h1>)
          } */}
            <CardComponent cardData= {cardData} />
        </Suspense>
    </div>
    );
}
export default App;
