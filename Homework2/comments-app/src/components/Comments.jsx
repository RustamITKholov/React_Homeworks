import { useState } from "react";

function CommentsList() {

  const [comments, setComments] = useState([
    { id: 1, text: "Сегодня прекрасный день!" },
    { id: 2, text: "React — это круто!" },
    { id: 3, text: "Не забудь сделать перерыв." },
    { id: 4, text: "Кто-то сказал кофе?" },
    { id: 5, text: "Программирование — это искусство." },
    { id: 6, text: "Нужно больше комментариев!" },
    { id: 7, text: "Ошибка 404: комментарий не найден." },
    { id: 8, text: "JS или Python? Вот в чем вопрос..." },
    { id: 9, text: "Задачи решаются кодом!" },
    { id: 10, text: "Скоро перерыв на обед!" }
  ]);

  const deleteComment = (id) => {
    setComments(comments.filter(comment => comment.id !== id));
  }

  return (
    <div>
      <ul>
        {comments.map(comment => <li> {comment.text}
          <button onClick={() => deleteComment(comment.id)}>удалить</button> </li>)}
      </ul>
    </div>
  );
}

export default CommentsList;