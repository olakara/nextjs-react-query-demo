import postsRepository from './posts.repository';
class PostsPresenter {
    
    fetchPosts = async () => {    
        const response = await postsRepository.fetchPosts();
        const vm = response.map(item => {
            return {
                id: item.id,
                title: item.title
            }
        })
        return vm;
    }

    createPost = async(postVm) => {
        const postPm = {           
            title: postVm.title,
            author: 'Myself'
        }
        const response = await postsRepository.createPost(postPm);
        return response;
    }
}

const postsPresenter = new PostsPresenter();
export default postsPresenter;
