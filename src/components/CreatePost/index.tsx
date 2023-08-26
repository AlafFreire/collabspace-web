import Avatar from "../AvatarSquare";
import InputArea from "../InputArea";
import Button from "../Button";

import { Container, Content } from "./styles";

const CreatePost: React.FC = () => {
  return (
    <Container>
      <Content>
        <Avatar
          src="https://i.pinimg.com/1200x/db/6f/0e/db6f0ef17e4e91005cb6e31581419d1e.jpg"
          borderEffect
        />

        <InputArea rows={2} placeholder="O que temos para hoje?" />
      </Content>

      <Button>Publicar</Button>
    </Container>
  );
};

export default CreatePost;
