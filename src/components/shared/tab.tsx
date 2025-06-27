

export function Comments({ comments }: { comments: Array<{ id: number, author: string, text: string }> }) {
  return (
    <div className="comments">
      {comments.map((comment) => (
        <div key={comment.id} className="comment">
          <p className="comment-author">{comment.author}</p>
          <p className="comment-text">{comment.text}</p>
        </div>
      ))}
    </div>
  );
}