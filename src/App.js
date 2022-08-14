import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from 'react-router-dom'
import {AddPostForm} from './app/features/posts/AddPostForm'
import {PostsList} from './app/features/posts/PostsList'
import {SinglePostPage} from './app/features/posts/SinglePostPage'
import {EditPostForm} from './app/features/posts/EditPostForm'

import {Navbar} from './app/Navbar'
import {UsersList} from "./app/features/users/UsersList";
import {UserPage} from "./app/features/users/UserPage";

function App() {
    return (
        <Router>
            <Navbar/>
            <div className="App">
                <Switch>
                    <Route
                        exact
                        path="/"
                        render={() => (
                            <>
                                <AddPostForm/>
                                <PostsList/>
                            </>
                        )}
                    />
                    <Route exact path="/posts/:postId" component={SinglePostPage}/>
                    <Route exact path="/editPost/:postId" component={EditPostForm}/>
                    <Route exact path="/users" component={UsersList}/>
                    <Route exact path="/users/:userId" component={UserPage}/>
                    <Redirect to="/"/>
                </Switch>
            </div>
        </Router>
    )
}

export default App
