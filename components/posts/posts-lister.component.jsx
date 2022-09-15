function PostsListerComponent({posts}) {
    return (  <ul>
        {posts &&
          posts.map((post) => {
            return <li key={post.id}>{post.title}</li>;
          })}
      </ul>);
}

export default PostsListerComponent;