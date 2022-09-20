import CheckboxComponent from "../ui/checkbox.component";

function PostsListerComponent({posts, onComplete}) {

    return (  <ul>        
        {posts &&
          posts.map((post,index) => {
            return <li key={post.id}>
              <CheckboxComponent key={index} label={post.title} post={post}/>
              {JSON.stringify(post)}
            </li>;
          })}
    </ul>);
}

export default PostsListerComponent;