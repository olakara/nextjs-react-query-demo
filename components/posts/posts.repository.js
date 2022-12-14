class PostsRepository {
    
    fetchPosts = async () => {        
        const response = await fetch('http://localhost:5000/posts');        
        if (response.ok) {
            if (response.status === 204) return [];
            const dto = response.json();
            return dto;
        } else {
            return [];
        }
    }

    createPost = async (post) => {
        const response = await fetch('http://localhost:5000/posts', {
            method: 'POST',
            body: JSON.stringify(post),
            headers: { 'Content-Type': 'application/json' },            
          });
        if (response.ok) {
            const stringResponse = await response.text();
            const responseDto =
              stringResponse === '' ? { success: true, data: {} } : { success: true, data: JSON.parse(stringResponse) };
            return responseDto; 
        } else {
            return {}
        }
    }
}

const postsRepository = new PostsRepository();
export default postsRepository;