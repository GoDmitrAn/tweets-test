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

export const UserCard = ({
  tweets,
  followers,
  id,
  avatar,
  isFollowing,
  change,
}) => {
  return (
    <MainBox>
      <TopBox>
        <img src={TopPicture} alt="topPicture" />
        <Logo src={LogoImg} alt="logo" />
      </TopBox>
      <MiddleBox>
        <AvatarBox>
          <Ring>
            {/* <Avatar src="https://robohash.org/121?size=62x62" alt="avatar" /> */}
            <Avatar src={avatar} alt="avatar" />
          </Ring>
        </AvatarBox>
      </MiddleBox>
      <BottomBox>
        <Text>{tweets} Tweets</Text>
        <Text>{followers.toLocaleString()} Followers</Text>
        <FollowBtn
          className={isFollowing ? "following" : ""}
          onClick={() => change(id)}
        >
          {isFollowing ? "Following" : "Follow"}
        </FollowBtn>
      </BottomBox>
    </MainBox>
  );
};
