import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserCard } from "Components/UserCard/UserCard";
import {
  CardList,
  CardListItem,
  LoadMoreBtn,
  LoadText,
  TopPanel,
} from "./UserCardList.styled";
import { loadUsers, updateUser } from "api/api";
import { IoMdArrowRoundBack } from "react-icons/io";
// import { Text } from "Components/UserCard/UserCard.styled";
import { Dropdown } from "Components/DropDown/DropDown";

export const UserCardList = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [userList, setUserList] = useState([]);
  const [page, setPage] = useState(1);
  const navigate = useNavigate();

  const [filter, setFilter] = useState("ALL");

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
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    if (!cards) {
      fetchUsers();
    } else {
      setUserList(JSON.parse(localStorage.getItem("cards")) || []);
      setIsLoading(false);
    }

    return () => {
      controller.abort();
    };
  }, []);

  function filteredList(value) {
    switch (value) {
      case "ALL":
        return userList;
      case "FOLLOW":
        return userList.filter((user) => user.isFollowing === false);
      case "FOLLOWINGS":
        return userList.filter((user) => user.isFollowing === true);
      default:
        return userList;
    }
  }
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
        {isLoading && <LoadText>Loading ....</LoadText>}
        <Dropdown
          options={["ALL", "FOLLOW", "FOLLOWINGS"]}
          value={filter}
          onChange={setFilter}
        />
      </TopPanel>

      <CardList>
        {userList &&
          filteredList(filter).map((user) => {
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
