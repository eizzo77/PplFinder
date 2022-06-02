import React, { useContext, useEffect } from "react";
import Text from "components/Text";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { FavoritesContext } from "../../AppContexts/FavoriteListContext";
import * as S from "./style";

const FavoritesList = ({}) => {
  const { favorites, setFavorites, addToFavorites } = useContext(FavoritesContext);

  useEffect(() => {}, [favorites]);

  useEffect(() => {
    setFavorites(JSON.parse(localStorage.getItem("favorites")));
  }, []);

  return (
    <S.UserList>
      <S.List>
        {favorites.map((user, index) => {
          return (
            <S.User key={index}>
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
              <S.IconButtonWrapper isVisible={true}>
                <IconButton onClick={() => addToFavorites(user)}>
                  <FavoriteIcon color="error" />
                </IconButton>
              </S.IconButtonWrapper>
            </S.User>
          );
        })}
        {/* {isLoading && (
          <S.SpinnerWrapper>
            <Spinner color="primary" size="45px" thickness={6} variant="indeterminate" />
          </S.SpinnerWrapper>
        )} */}
      </S.List>
    </S.UserList>
  );
};

export default FavoritesList;
