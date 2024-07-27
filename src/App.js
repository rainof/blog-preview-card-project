import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import blog_img from './assets/images/illustration-article.svg';

function App() {
  return (
    <div className="card" style={{width: '18rem'}}>
      <img className="card-img" src={blog_img} alt="blog" />
      <div className="card-body">
        <h5 className="card-title">HTML & CSS foundations</h5>
        <p className="card-text">These languages are the backbone of every website, defining structure, content, and presentation.</p>
        {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
      </div>
    </div>
  );
}

export default App;