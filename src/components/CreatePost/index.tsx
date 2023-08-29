import Avatar from "../AvatarSquare";
import InputArea from "../InputArea";
import Button from "../Button";

import { Container, Content } from "./styles";

const CreatePost: React.FC = () => {
  return (
    <Container>
      <Content>
        <Avatar
          src="https://media.kasperskydaily.com/wp-content/uploads/sites/94/2018/02/15183316/mr-robot-safety-tips-featured.jpg"
          borderEffect
        />

        <InputArea rows={2} placeholder="O que temos para hoje?" />
      </Content>

      <Button>Publicar</Button>
    </Container>
  );
};

export default CreatePost;
