import { React, useEffect, useState } from "react";
import Text from "components/Text";
import FavoritesList from "components/FavoritesList";
import * as S from "./style";

const Favorites = (favorites) => {
  return (
    <S.Favorites>
      <S.Content>
        <S.Header>
          <Text size="64px" bold>
            Favorites
          </Text>
        </S.Header>
        <FavoritesList favorites={favorites} />
      </S.Content>
    </S.Favorites>
  );
};

export default Favorites;
