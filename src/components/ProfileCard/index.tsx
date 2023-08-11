import {
  Container,
  Header,
  Cover,
  Content,
  Divider,
  ButtonEdit,
  Footer,
} from "./styles";

import Avatar from "../Avatar";

const ProfileCard: React.FC = () => {
  return (
    <Container>
      <Header>
        <Cover src="https://cutewallpaper.org/29/dual-screen-mr-robot-wallpaper/247286624.jpg" />

        <div>
          <Avatar
            src="https://cutewallpaper.org/21/wallpaper-robot/Mr-Robot-Wallpapers-WallpaperTag.jpg"
            borderEffect
          />
        </div>
      </Header>

      <Content>
        <h1>Alaf Freire</h1>
        <p>alaffreire.jaba@gmail.com</p>
      </Content>

      <Divider />

      <Footer>
        <ButtonEdit>Editar perfil</ButtonEdit>
      </Footer>
    </Container>
  );
};

export default ProfileCard;
