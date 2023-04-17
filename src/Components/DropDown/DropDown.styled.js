import styled from "@emotion/styled";
export const MainBox = styled.div`
  position: relative;
  width: 140px;
`;
export const ToggleBtn = styled.button`
  width: 100%;
  font-family: "Montserrat";
  font-size: 16px;
  background-color: #5736a3;
  border-radius: 6px;
  padding: 4px 0px;
  color: #ebd8ff;
  transition: background-color 250ms ease-in;
  &:hover,
  &:focus {
    background-color: #3a649b;
  }
`;
export const DropMenu = styled.ul`
  position: absolute;
  z-index: 100;
  left: 0;
  display: flex;
  max-width: 130px;
  flex-direction: column;
  background: #ebd8ff;
  margin: 0;
  width: 100%;
  padding: 0 5px 5px 5px;
  border-radius: 5px;
`;
export const DropMenuItem = styled.li`
  font-family: "Montserrat";
  cursor: pointer;
  text-align: center;
  margin-top: 8px;
  padding: 2px;
  background-color: #5736a3;
  border-radius: 5px;
  color: #ebd8ff;
  transition: background-color 250ms ease-in;
  &:hover,
  &:focus {
    background-color: #3a649b;
  }
`;
