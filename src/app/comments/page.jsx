 // Assurez-vous que ce fichier CSS existe bien

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
    <div className='max-w-900px m-20 p-20 bg-white border-radius-8px shadow-md '> {/* Utilisation d'un nom de classe plus approprié */}
      <h1 className='bg-white border-radius-6px border-1px solid black mb-20 shadow-md p-10 text-black align-items-center justify-center'>Commentaires des Articles</h1>
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
            <div key={comment.id} className='bg-white text-black border-radius-6px border-1px solid gray mb-20 shadow-md p-20 '> {/* Nom de classe plus approprié */}
              {/* Le titre de l'article auquel le commentaire est lié */}
              <h2 className='font-size-1.1em color-gray-555 mt-5 mb-5'>Article: {post.title}</h2>
              {/* Le nom de l'auteur de l'article, si trouvé */}
              {postAuthor && <h3>Auteur de l'article: {postAuthor.firstname}</h3>}
              {/* Le nom de l'auteur du commentaire */}
              <h4 className='color-gray-777 font-size-1em mt-5 mb-10'>Commentaire : {comment.name}</h4>
              {/* Le corps du commentaire */}
              <p className='color-gray-444 font-size-0.95em line-light-1.6'>{comment.comment}</p>
            </div>
          );
        }
        // Si le post n'est pas trouvé (par exemple, ID invalide), on ne retourne rien pour ce commentaire
        return null;
      })}
    </div>
  );
}