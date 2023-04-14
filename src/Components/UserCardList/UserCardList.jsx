import { UserCard } from "Components/UserCard/UserCard";
import { CardList, CardListItem } from "./UserCardList.styled";

export const UserCardList = () => {
  return (
    <CardList>
      <CardListItem>
        <UserCard />
      </CardListItem>
    </CardList>
  );
};
