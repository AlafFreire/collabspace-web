import { Container, Content, Posts } from "./styles";

import Header from "../../componentes/Header";
import ProfileCard from "../../componentes/ProfileCard";
import Post from "../../componentes/Post";

const Feed: React.FC = () => {
  return (
    <Container>
      <Header />

      <Content>
        <ProfileCard />
        <Posts>
          <Post />
        </Posts>
      </Content>
    </Container>
  );
};

export default Feed;
