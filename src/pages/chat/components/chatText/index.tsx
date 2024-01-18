import * as S from "./styles";
import * as CS from "../chatList/styles";

interface ChatTextProps {
  // TODO- 명세서 맞춰서 내용 추가 필요
  senderId?: number;
  isNotice?: boolean;
}

const ChatText = ({ senderId, isNotice = false }: ChatTextProps) => {
  // FIXME - 나중에 로그인 구현되면 userId를 받아와야함
  const userId = 1;
  const isMe = senderId === userId;

  if (isNotice) {
    return (
      <S.ChatNotice>
        <S.HightLight>강쥐사랑해진짜로</S.HightLight>
        님이 네고를 요청하셨습니다.
      </S.ChatNotice>
    );
  }

  if (isMe) {
    return (
      <S.Chat className="right">
        <S.Time>오후 5:50</S.Time>
        <S.Content className="right">
          그래
          그래그래그래그래그래그래그래그래그래그래그래그래그래그래그래그래그래그래그래그래그래그래그래그래그래그래그래그래그래그래그래그래그래
        </S.Content>
      </S.Chat>
    );
  }

  return (
    <S.Chat>
      <CS.ProfileImg
        style={{ height: "35px", width: "35px" }}
        src="https://i.pinimg.com/564x/4d/a5/dd/4da5dd3d7b0a981cd56ec1f7db32c0cf.jpg"
        alt="프로필"
      />
      <S.Content className={isMe ? "right" : ""}>만원만 깎아줘</S.Content>
      <S.Time>오후 5:50</S.Time>
    </S.Chat>
  );
};

export default ChatText;
