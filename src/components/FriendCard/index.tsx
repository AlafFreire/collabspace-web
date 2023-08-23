import { Container, Avatar, Info } from "./styles";

const FriendCard: React.FC = () => {
  return (
    <Container>
      <Avatar src="https://akamai.sscdn.co/uploadfile/letras/fotos/9/0/a/6/90a6155cfd2054f7fcc56ddc83311307.jpg" />

      <Info>
        <h1>Marcus Miller</h1>
        <p>268 amigos em comum</p>
      </Info>
    </Container>
  );
};

export default FriendCard;
