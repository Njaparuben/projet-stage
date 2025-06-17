import styles from './pageComment.module.css'; // Assurez-vous que ce fichier CSS existe bien

export default async function PageComments() {
  // 1. On récupère toutes les données dont on a besoin
  // Utiliser Promise.all pour lancer toutes les requêtes en parallèle, c'est plus rapide !
  const [reponsePosts, reponseUsers, reponseComments] = await Promise.all([
    fetch("https://jsonplaceholder.org/posts"),
    fetch("https://jsonplaceholder.org/users"),
    fetch("https://jsonplaceholder.org/comments"),
  ]);

  // 2. On convertit les réponses en format JSON
  const posts = await reponsePosts.json();
  const users = await reponseUsers.json();
  const comments = await reponseComments.json();

  // 3. On crée des maps pour retrouver rapidement les posts et les utilisateurs par leur ID
  // C'est beaucoup plus efficace que de chercher dans un tableau à chaque fois
  const postsMap = new Map(posts.map(post => [post.id, post]));
  const usersMap = new Map(users.map(user => [user.id, user]));

  return (
    <div className={styles.commentsContainer}> {/* Utilisation d'un nom de classe plus approprié */}
      <h1>Commentaires des Articles</h1>
      {comments.map((comment) => {
        // Pour chaque commentaire, on cherche le post associé
        const post = postsMap.get(comment.postId);
        // Et on cherche l'utilisateur qui a écrit le post (car `posts` a `userId`)
        // Note: L'API des commentaires n'a pas de userId, elle a un `email` et un `name`
        // Pour l'auteur du COMMENTAIRE, on utilisera `comment.name`
        // Si tu veux l'auteur de l'article, c'est `usersMap.get(post.userId)`
        const postAuthor = post ? usersMap.get(post.userId) : null;
        
        // On affiche le commentaire seulement si le post associé existe
        if (post) { // On s'assure que le post existe bien avant d'essayer d'afficher ses infos
          return (
            <div key={comment.id} className={styles.commentItem}> {/* Nom de classe plus approprié */}
              {/* Le titre de l'article auquel le commentaire est lié */}
              <h2>Article: {post.title}</h2>
              {/* Le nom de l'auteur de l'article, si trouvé */}
              {postAuthor && <h3>Auteur de l'article: {postAuthor.firstname}</h3>}
              {/* Le nom de l'auteur du commentaire */}
              <h4>Commentaire : {comment.name}</h4> 
              {/* Le corps du commentaire */}
              <p>{comment.comment}</p>
            </div>
          );
        }
        // Si le post n'est pas trouvé (par exemple, ID invalide), on ne retourne rien pour ce commentaire
        return null;
      })}
    </div>
  );
}