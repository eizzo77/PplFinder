import React, { useEffect, useState } from "react";
import Text from "components/Text";
import Spinner from "components/Spinner";
import CheckBox from "components/CheckBox";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { CountriesArr } from "constant";
import * as S from "./style";

const UserList = ({ users, isLoading, nationalityParams, setNationalityParams }) => {
  const [hoveredUserId, setHoveredUserId] = useState();

  const handleMouseEnter = (index) => {
    console.log(index);
    setHoveredUserId(index);
  };

  const handleMouseLeave = () => {
    setHoveredUserId();
  };

  const filterByCountry = (isChecked, value) => {
    if (isChecked) {
      nationalityParams.find((nat) => nat == value) ||
        setNationalityParams([...nationalityParams, value]);
    } else {
      let indexOfCurrNat = nationalityParams.indexOf(value);
      indexOfCurrNat > -1 && nationalityParams.splice(indexOfCurrNat, 1);
      setNationalityParams([...nationalityParams]);
    }
  };

  const AddRemoveFromFavs = (index) => {
    console.log("FAV");
    handleMouseEnter(index);
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
            <S.User key={index} onMouseEnter={() => handleMouseEnter(index)}>
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
              <S.IconButtonWrapper isVisible={index === hoveredUserId}>
                <IconButton onClick={() => AddRemoveFromFavs(index)}>
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
