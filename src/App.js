import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import blog_img from './assets/images/illustration-article.svg';
import author_img from './assets/images/image-avatar.webp';

function App() {
  return (
    <div className="card" style={{width: '25rem'}}>
      <img className="card-img" src={blog_img} alt="blog" />
      <div className="card-body">
        <button type="button" className="card-label">Learning</button>
        <p className="pub-date">Published 21 Dec 2023</p>
        <h5 className="card-title">HTML & CSS foundations</h5>
        <p className="card-text">These languages are the backbone of every website, defining structure, content, and presentation.</p>
        <div className="author-info">
          <img className="author-logo" src={author_img} alt="author" />
          <p className="author-name">Greg Hooper</p>
        </div>
      </div>
    </div>
  );
}

export default App;