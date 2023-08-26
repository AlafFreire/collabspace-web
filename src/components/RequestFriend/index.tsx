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
        <AvatarCircle src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaUrqGwbl93Gf8iF_4v_rdk-Q8V7TkPuuSaVB_o8WBIt5nWH6CMRN4Mg2v1pbFTxm1R6A&usqp=CAU" />

        <Info>
          <h1>Victor Wooten Ribeiro</h1>
          <p>wooten.victor@bass.com</p>
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
