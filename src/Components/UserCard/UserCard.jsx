import {
  MiddleBox,
  BottomBox,
  Logo,
  MainBox,
  TopBox,
  AvatarBox,
  Ring,
  Avatar,
  Text,
  FollowBtn,
} from "./UserCard.styled";
import TopPicture from "../../images/topImg.webp";
import LogoImg from "../../images/Logo.webp";

export const UserCard = () => {
  return (
    <MainBox>
      <TopBox>
        <img src={TopPicture} alt="topPicture" />
        <Logo src={LogoImg} alt="logo" />
      </TopBox>
      <MiddleBox>
        <AvatarBox>
          <Ring>
            <Avatar src="https://robohash.org/121?size=62x62" alt="avatar" />
          </Ring>
        </AvatarBox>
      </MiddleBox>
      <BottomBox>
        <Text> 777 tweets</Text>
        <Text>100,500 Followers</Text>
        <FollowBtn>Follow</FollowBtn>
      </BottomBox>
    </MainBox>
  );
};
