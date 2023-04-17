import PropTypes from "prop-types";
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
        <Text className="top">{tweets} Tweets</Text>
        <Text className="bottom">{followers.toLocaleString()} Followers</Text>
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

UserCard.propTypes = {
  tweets: PropTypes.number,
  followers: PropTypes.number,
  id: PropTypes.string,
  avatar: PropTypes.string,
  isFollowing: PropTypes.bool,
  change: PropTypes.func,
};
