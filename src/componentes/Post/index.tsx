import { Container, Content, Hashtags, Divider } from "./styles";

import Avatar from "../Avatar";

const Post: React.FC = () => {
  return (
    <Container>
      <p>Publicado à 1h</p>
      <header>
        <div>
          <Avatar />

          <section>
            <h1>Alaf Freire</h1>
            <p>alaffreire.jaba@gmail.com</p>
          </section>
        </div>
      </header>

      <main>
        <Content>
          <p>Fala galera 👋🏾👋🏾</p>
          <p>
            Voce pode sempre sonhar, e seus sonhos se tornarão Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Odit fugiat maxime ipsa.
            Pariatur iste earum error fuga nisi quisquam ducimus quasi vitae,
            itaque omnis beatae voluptates unde, soluta, odio architecto.
          </p>
        </Content>

        <Hashtags>
          <span>#collabspace </span>
          <span>#laele1000x</span>
        </Hashtags>
      </main>

      <Divider />

      <footer>
        <h1>Deixe seu comentário</h1>
        <textarea name=""></textarea>
        <button>Comentar</button>
      </footer>
    </Container>
  );
};

export default Post;
