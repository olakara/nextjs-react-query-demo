import Link from 'next/link'
function HeaderComponent() {
    return ( <header>
        <Link href="/">
          <a>Home</a>
        </Link>     
        |
        <Link href="/posts">
          <a>Posts</a>
        </Link>      
    </header> );
}

export default HeaderComponent;