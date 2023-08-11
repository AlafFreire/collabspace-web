import Avatar from "../Avatar";
import InputArea from "../InputArea";
import Button from "../Button";

import { Container, Content } from "./styles";

const CreatePost: React.FC = () => {
  return (
    <Container>
      <Content>
        <Avatar
          src="https://cutewallpaper.org/21/wallpaper-robot/Mr-Robot-Wallpapers-WallpaperTag.jpg"
          borderEffect
        />

        <InputArea rows={2} placeholder="O que temos para hoje?" />
      </Content>

      <Button>Publicar</Button>
    </Container>
  );
};

export default CreatePost;
