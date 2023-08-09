import { Trash } from "phosphor-react";

import Avatar from "../Avatar";

import { Container, CommentBox, AuthorAndTime, ButtonDelete } from "./styles";

const Comment: React.FC = () => {
  return (
    <Container>
      <Avatar src="https://cutewallpaper.org/23/aiolia-soul-of-gold-wallpaper/1583224199.jpg" />

      <CommentBox>
        <AuthorAndTime>
          <h1>Tardeno Akino Rego</h1>
          <time>Cerca de 2h</time>

          <ButtonDelete>
            <Trash size={22} />
          </ButtonDelete>
        </AuthorAndTime>

        <p>
          Ai Ney, ta ligado que o LeBroun ficou impressionado com a cor do meu
          tênis la em Miami 😎
        </p>
      </CommentBox>
    </Container>
  );
};

export default Comment;
