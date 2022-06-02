import React, { useContext, useRef, useState, useCallback } from "react";
import Text from "components/Text";
import Spinner from "components/Spinner";
import CheckBox from "components/CheckBox";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { CountriesArr } from "constant";
import { PageNumberContext } from "../../AppContexts/PageNumberContext";
import { FavoritesContext } from "../../AppContexts/FavoriteListContext";
import { NationalitiesContext } from "../../AppContexts/NationalitiesContext";
import * as S from "./style";

const UserList = ({ users, isLoading }) => {
  const [hoveredUserId, setHoveredUserId] = useState();
  const { setPageNumber } = useContext(PageNumberContext);
  const { favorites, addToFavorites } = useContext(FavoritesContext);
  const { filterByCountry } = useContext(NationalitiesContext);
  const obs = useRef();

  const lastUserRef = useCallback((node) => {
    if (obs.current) {
      obs.current.disconnect();
    }
    obs.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setPageNumber((prevPageNumber) => prevPageNumber + 1);
      }
    });
    if (node) obs.current.observe(node);
  }, []);

  const handleMouseEnter = (index) => {
    setHoveredUserId(index);
  };

  const handleMouseLeave = () => {
    setHoveredUserId();
  };

  return (
    <S.UserList>
      <S.Filters>
        {CountriesArr.map((countryObj, index) => {
          return (
            <CheckBox
              key={index}
              value={countryObj.code}
              label={countryObj.name}
              onChange={filterByCountry}
            />
          );
        })}
      </S.Filters>
      <S.List>
        {users.map((user, index) => {
          return (
            <S.User
              key={index}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              ref={index + 1 == users.length ? lastUserRef : null}
            >
              <S.UserPicture src={user?.picture.large} alt="" />
              <S.UserInfo>
                <Text size="22px" bold>
                  {user?.name.title} {user?.name.first} {user?.name.last}
                </Text>
                <Text size="14px">{user?.email}</Text>
                <Text size="14px">
                  {user?.location.street.number} {user?.location.street.name}
                </Text>
                <Text size="14px">
                  {user?.location.city} {user?.location.country}
                </Text>
              </S.UserInfo>
              <S.IconButtonWrapper
                isVisible={index === hoveredUserId || favorites.includes(user)}
              >
                <IconButton onClick={() => addToFavorites(user)}>
                  <FavoriteIcon color="error" />
                </IconButton>
              </S.IconButtonWrapper>
            </S.User>
          );
        })}
        {isLoading && (
          <S.SpinnerWrapper>
            <Spinner color="primary" size="45px" thickness={6} variant="indeterminate" />
          </S.SpinnerWrapper>
        )}
      </S.List>
    </S.UserList>
  );
};

export default UserList;
