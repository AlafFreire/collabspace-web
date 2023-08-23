import { Check, X } from "phosphor-react";

import {
  Container,
  Avatar,
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
        <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkNWyEkGucz4UIuU7YqJQviOxIlUY3U62kMHwIkIVM4vtpXZBTpEwaD7OdXO18HGMTevk&usqp=CAU" />

        <Info>
          <h1>Victor Wooten</h1>
          <p>wooten.v@hotmaadsasdasdasdil.com</p>
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
