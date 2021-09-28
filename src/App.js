import './App.css';
import PostsContainer from "./components/posts/PostsContainer";
import {NavLink, Route} from "react-router-dom";
import PostContainer from "./components/Post/PostContainer";

function App() {

    return (
        <div className="App">

            <div className='allposts'><NavLink to='/allposts'>BACK TO POSTS</NavLink></div>

            <Route exact path="/allposts"
                   render={()=> <PostsContainer/>}/>

            <Route exact path="/post:Id?"
                   render={() => <PostContainer/>}/>

        </div>
    );
}

export default App;
