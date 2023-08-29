import { useNavigate } from "react-router-dom";

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

const ProfileCard: React.FC = () => {
  const navigate = useNavigate();

  const handleMe = () => {
    navigate("/me");
  };

  return (
    <Container>
      <Header>
        <Cover src="https://cutewallpaper.org/29/dual-screen-mr-robot-wallpaper/247286624.jpg" />

        <div onClick={handleMe}>
          <AvatarSquare
            src="https://media.kasperskydaily.com/wp-content/uploads/sites/94/2018/02/15183316/mr-robot-safety-tips-featured.jpg"
            borderEffect
          />
        </div>
      </Header>

      <Content>
        <h1 onClick={handleMe}>Alaf Freire</h1>
        <p>alaffreire.jaba@hotmail.com</p>
      </Content>

      <Divider />

      <Footer>
        <ButtonEdit>Editar seu perfil</ButtonEdit>
      </Footer>
    </Container>
  );
};

export default ProfileCard;
