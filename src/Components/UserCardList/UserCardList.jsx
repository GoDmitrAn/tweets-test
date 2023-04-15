import axios from "axios";

import { UserCard } from "Components/UserCard/UserCard";
import { CardList, CardListItem } from "./UserCardList.styled";
import { useEffect, useState } from "react";

axios.defaults.baseURL = "https://64399663bd3623f1b9a3d3b6.mockapi.io/tweets";

export const UserCardList = () => {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
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
        setUserList(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchUsers();
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
  }
  // async function updateList(list)
  //   useEffect(() => {
  //     setUserList(newList);
  //   }, [newList]);
  return (
    <CardList>
      {userList.length > 0 ? (
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
