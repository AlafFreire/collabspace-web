import {
  Container,
  Header,
  Cover,
  Content,
  Divider,
  ButtonEdit,
  Footer,
} from "./styles";

import AvatarSquare from "../AvatarSquare";
import { useNavigate } from "react-router-dom";

const ProfileCard: React.FC = () => {
  const navigate = useNavigate();

  const handleMe = () => {
    navigate("/me");
  };

  return (
    <Container>
      <Header>
        <Cover src="https://cutewallpaper.org/29/dual-screen-mr-robot-wallpaper/247286624.jpg" />

        <div>
          <AvatarSquare
            src="https://i.pinimg.com/1200x/db/6f/0e/db6f0ef17e4e91005cb6e31581419d1e.jpg"
            borderEffect
          />
        </div>
      </Header>

      <Content>
        <h1 onClick={handleMe}>Alaf Freire</h1>
        <p>alaf.jaba@hotmail.com</p>
      </Content>

      <Divider />

      <Footer>
        <ButtonEdit>Editar seu perfil</ButtonEdit>
      </Footer>
    </Container>
  );
};

export default ProfileCard;
