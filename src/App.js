import './App.css';
import PostsContainer from "./components/posts/PostsContainer";
import {NavLink, Route} from "react-router-dom";
import PostContainer from "./components/Post/PostContainer";

function App() {

    return (
        <div className="App">



            <Route exact path="/allposts"
                   render={()=> <PostsContainer/>}/>

            <Route exact path="/post:Id?"
                   render={() => <PostContainer/>}/>

        </div>
    );
}

export default App;
