
import styles from './page.module.css';
export default async function PagePosts() {
  const reponse = await fetch("https://jsonplaceholder.org/posts");
    const posts = await reponse.json();
    return (
      <div className={styles.post}>
        {posts.map((post) => (
          <div key={post.id} className={styles.postId}>
            <img src={post.image} alt="Image" />
            <h2>{post.title}</h2>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    );
}