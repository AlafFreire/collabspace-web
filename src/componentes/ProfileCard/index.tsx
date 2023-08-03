import { Container, Cover, Divider, ButtonEdit } from "./styles";
import Avatar from "../Avatar";

const ProfileCard: React.FC = () => {
  return (
    <Container>
      <header>
        <Cover src="https://scontent-gru2-2.xx.fbcdn.net/v/t39.30808-6/306839561_428156126079183_6932015175786487267_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=WcH3QK0slvAAX_D_2Me&_nc_ht=scontent-gru2-2.xx&oh=00_AfCzGaIPQo3sDXGB-jScEDh5HaF5pIIyxOj4yXhbo0uHBQ&oe=64CF68A8" />

        <div>
          <Avatar />
        </div>
      </header>

      <main>
        <h1>Alaf Freire</h1>
        <p>alaffreire.jaba@gmail.com</p>
      </main>

      <Divider />

      <footer>
        <ButtonEdit>Editar perfil</ButtonEdit>
      </footer>
    </Container>
  );
};
export default ProfileCard;
