import axios from "axios";
import { useEffect, useState } from "react";
import { UserCard } from "Components/UserCard/UserCard";
import { CardList, CardListItem } from "./UserCardList.styled";
import { updateUser } from "api/api";

export const UserCardList = () => {
  const [userList, setUserList] = useState([]);
  //   const [update, setUpdate] = useState(false);
  //   const [page, setPage] = useState(1);

  useEffect(() => {
    let cards = JSON.parse(localStorage.getItem("cards"));
    const controller = new AbortController();
    async function fetchUsers() {
      try {
        const response = await axios("/users", {
          signal: controller.signal,
          params: {
            page: 1,
            limit: 9,
          },
        });
        console.log(response);
        localStorage.setItem("cards", JSON.stringify(response.data));
        setUserList(JSON.parse(localStorage.getItem("cards")));
      } catch (error) {
        console.log(error);
      }
    }
    if (!cards) {
      fetchUsers();
    }
    setUserList(JSON.parse(localStorage.getItem("cards")));
    return () => {
      controller.abort();
    };
  }, []);

  function subscribeChange(id) {
    const index = userList.findIndex((user) => user.id === id);
    const user = userList.find((user) => user.id === id);

    if (user.isFollowing) {
      user.isFollowing = false;
      user.followers -= 1;
    } else {
      user.isFollowing = true;
      user.followers += 1;
    }
    userList.splice(index, 1, user);
    const newList = [...userList];
    setUserList(newList);
    localStorage.setItem("cards", JSON.stringify(userList));
    updateUser(user);
  }

  // useEffect(() => {
  //     async function updateUsers
  //     if (update) {

  //   }
  // }, [update]);
  return (
    <CardList>
      {userList ? (
        userList.map((user) => {
          return (
            <CardListItem key={user.id}>
              <UserCard
                tweets={user.tweets}
                followers={user.followers}
                id={user.id}
                avatar={user.avatar}
                isFollowing={user.isFollowing}
                change={subscribeChange}
              />
            </CardListItem>
          );
        })
      ) : (
        <p>Loading ....</p>
      )}
    </CardList>
  );
};
