import styled from "@emotion/styled";
export const CardList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

export const CardListItem = styled.li``;
export const LoadMoreBtn = styled.button`
  cursor: pointer;
  display: block;
  padding: 14px 28px;
  width: 196px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.2;
  text-transform: uppercase;

  text-align: center;
  margin: auto;
  margin-bottom: 20px;
  background-color: #5736a3;
  color: #ebd8ff;
  box-shadow: 0px 3.4px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  outline: none;
  border: none;
  transition: background-color 0.55s ease;
  margin-left: auto;
  &:hover {
    background-color: #ebd8ff;
    color: #5736a3;
  }
  &.backBtn {
    padding: 5px 20px;
    margin-left: 0;
    margin-bottom: 0;
    width: auto;
    font-size: 2em;
    display: flex;
  }
`;
export const TopPanel = styled.div`
  display: flex;
  justify-content: space-around;
`;
