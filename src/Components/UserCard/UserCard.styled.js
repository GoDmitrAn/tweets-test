import styled from "@emotion/styled";
export const MainBox = styled.div`
  max-width: 380px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
  padding-bottom: 36px;
`;
export const TopBox = styled.div`
  position: relative;
  padding: 28px 36px 18px;
`;
export const Logo = styled.img`
  position: absolute;
  top: 20px;
  left: 20px;
`;
export const MiddleBox = styled.div`
  position: relative;
  height: 8px;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;
export const AvatarBox = styled.div`
  position: absolute;
  width: 80px;
  height: 80px;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
`;

export const Ring = styled.div`
  position: relative;
  width: 62px;
  height: 62px;
  border-radius: 50%;
  border: 9px solid #ebd8ff;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  &::before {
    content: "";
    z-index: 10;
    position: absolute;
    top: -9px;
    left: -9px;
    width: calc(100% + 18px);
    height: calc(100% + 18px);
    border-radius: 50%;
    box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
      inset 0px -2.19582px 4.39163px #ae7be3,
      inset 0px 4.39163px 3.29372px #fbf8ff;
  }
`;
export const Avatar = styled.img`
  max-width: 100%;
  max-height: 100%;
  border-radius: 50%;
`;
export const BottomBox = styled.div`
  padding-top: 62px;
  text-align: center;
`;
export const Text = styled.p`
  font-size: 20px;
  font-weight: 500;
  line-height: 1.22;
  text-transform: uppercase;
  color: #ebd8ff;
`;
export const FollowBtn = styled.button`
  cursor: pointer;
  padding: 14px 28px;
  width: 196px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.2;
  text-transform: uppercase;
  color: #373737;
  text-align: center;
  background: #ebd8ff;
  box-shadow: 0px 3.4px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  outline: none;
  border: none;
  transition: background-color 0.25s ease;
  &:hover {
    background: orangered;
  }
  &.following {
    background: #5cd3a8;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  }
`;
