import { Check, X } from "phosphor-react";

import AvatarCircle from "../AvatarCircle";

import {
  Container,
  User,
  Info,
  Actions,
  ButtonAccept,
  ButtonRecuse,
} from "./styles";

const RequestFriend: React.FC = () => {
  return (
    <Container>
      <User>
        <AvatarCircle src="https://ucarecdn.com/cc57ba86-147a-41dd-a486-2d4b45dedde6/-/crop/1785x1500/0,0/-/resize/1035x870/" />

        <Info>
          <h1>Victor Wooten </h1>
          <p>wooten.vic_bassplayer@yahoo.com </p>
        </Info>
      </User>

      <Actions>
        <ButtonAccept>
          <Check size={18} />
        </ButtonAccept>

        <ButtonRecuse>
          <X size={18} />
        </ButtonRecuse>
      </Actions>
    </Container>
  );
};

export default RequestFriend;
