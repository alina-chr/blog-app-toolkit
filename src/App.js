import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchPost } from "./Features/postsSlice";
import { fetchUsers } from "./Features/usersSlice";
import { UserComponent } from "./Components/UserComponent";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPost());
    dispatch(fetchUsers());
  }, [dispatch]);

  const posts = useSelector((state) => state.posts);
  const { postsList, loading } = posts;
  const users = useSelector((state) => state.users);
  const { usersList, loading: loadingUsers } = users;

  return (
    <div className="App ui container">
      <h1>Posts</h1>
      <div className="ui relaxed divided list">
        {loading ? (
          <h2>Loading...</h2>
        ) : (
          postsList &&
          postsList.map((post) => (
            <div className="item" key={post.id}>
              <i className="large middle aligned icon user" />
              <div className="content">
                <div className="description">
                  <h2>{post.title}</h2>
                  <p>{post.body}</p>
                </div>
              </div>
              {loadingUsers ? (
                <h2>Loading...</h2>
              ) : (
                <>
                  <UserComponent
                    user={usersList.find((user) => user.id === post.userId)}
                  />
                </>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default App;
