import LayoutDefault from "../../layouts/Default";

import RequestFriend from "../../components/RequestFriend";
import FriendCard from "../../components/FriendCard";

import {
  Camera,
  PencilSimple,
  MapPin,
  WhatsappLogo,
  Clock,
} from "phosphor-react";

import {
  Container,
  Content,
  Overview,
  UserBanner,
  Cover,
  Avatar,
  UserInfo,
  General,
  Total,
  Contact,
  Friends,
  FriendList,
  AreaFriendButton,
  Sidebar,
  Requests,
  RequestList,
  EditCoverButton,
  EditInfoButton,
} from "./styles";

const Profile: React.FC = () => {
  return (
    <LayoutDefault>
      <Container>
        <Content>
          <Overview>
            <UserBanner>
              <EditCoverButton>
                <Camera size={24} weight="fill" />
              </EditCoverButton>
              <Cover src="https://cutewallpaper.org/29/dual-screen-mr-robot-wallpaper/247286624.jpg" />

              <Avatar src="https://i.pinimg.com/1200x/db/6f/0e/db6f0ef17e4e91005cb6e31581419d1e.jpg" />

              <EditInfoButton>
                <PencilSimple size={24} weight="bold" />
              </EditInfoButton>
            </UserBanner>

            <UserInfo>
              <General>
                <h1>Alaf Freire</h1>
                <p>
                  Você só vai me olhar, me julgar, tirar conclusões
                  precipitadas, mas ainda… assim não vai me conhecer.
                </p>

                <Total>
                  <span>
                    <strong>115</strong> publicações
                  </span>
                  <span>
                    <strong>1562</strong> amigos
                  </span>
                </Total>
              </General>

              <Contact>
                <span>
                  <MapPin size={20.5} weight="bold" />
                  Jaborandi, São Paulo, Brasil
                </span>

                <span>
                  <WhatsappLogo size={20.5} weight="bold" />
                  (17) 98180-5243
                </span>

                <span>
                  <Clock size={20.5} weight="bold" />
                  Entrou em Fevereiro de 2023
                </span>
              </Contact>
            </UserInfo>
          </Overview>

          <Friends>
            <h1>Amigos</h1>

            <FriendList>
              <FriendCard />
              <FriendCard />
              <FriendCard />
              <FriendCard />
              <FriendCard />
              <FriendCard />
              <FriendCard />
              <FriendCard />
              <FriendCard />
              <FriendCard />
              <FriendCard />
            </FriendList>
            <AreaFriendButton>
              <button>Ver todos os amigos</button>
            </AreaFriendButton>
          </Friends>
        </Content>

        <Sidebar>
          <Requests>
            <h1>Solicitações de amizade</h1>

            <RequestList>
              <RequestFriend />
              <RequestFriend />
              <RequestFriend />
              <RequestFriend />
              <RequestFriend />
            </RequestList>
          </Requests>
        </Sidebar>
      </Container>
    </LayoutDefault>
  );
};

export default Profile;
