import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserCard } from "Components/UserCard/UserCard";
import {
  CardList,
  CardListItem,
  LoadMoreBtn,
  TopPanel,
} from "./UserCardList.styled";
import { loadUsers, updateUser } from "api/api";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Text } from "Components/UserCard/UserCard.styled";

export const UserCardList = () => {
  const [userList, setUserList] = useState([]);
  const [page, setPage] = useState(1);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
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

        localStorage.setItem("cards", JSON.stringify(response.data));
        setUserList(JSON.parse(localStorage.getItem("cards")));
      } catch (error) {
        console.log(error);
      }
    }
    if (!cards) {
      fetchUsers();
    }
    setUserList(JSON.parse(localStorage.getItem("cards")) || []);
    setIsLoading(false);
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
  async function loadMore() {
    if (page < 5) {
      setPage(page + 1);
      const newUsers = await loadUsers(page + 1);
      const newList = [...userList, ...newUsers];
      setUserList(newList);
      localStorage.setItem("cards", JSON.stringify(newList));
    }
  }

  return (
    <>
      <TopPanel>
        <LoadMoreBtn
          className="backBtn"
          onClick={() => {
            navigate("/");
          }}
        >
          <IoMdArrowRoundBack />
        </LoadMoreBtn>
      </TopPanel>
      {isLoading && <Text className="loading">Loading ....</Text>}
      <CardList>
        {userList &&
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
          })}
      </CardList>
      {!isLoading && userList.length < 45 && (
        <LoadMoreBtn className="loadMore" onClick={loadMore}>
          Load more
        </LoadMoreBtn>
      )}
    </>
  );
};
