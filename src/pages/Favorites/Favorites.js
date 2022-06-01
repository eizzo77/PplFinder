import React from "react";
import Text from "components/Text";
import UserList from "components/UserList";
import { usePeopleFetch } from "hooks";
import * as S from "./style";

const Favorites = () => {
  const { users, isLoading, nationalityParams, setNationalityParams } = usePeopleFetch();

  return (
    <S.Home>
      <S.Content>
        <S.Header>
          <Text size="64px" bold>
            Favorites
          </Text>
        </S.Header>
        <UserList
          users={users}
          isLoading={isLoading}
          setNationalityParams={setNationalityParams}
          nationalityParams={nationalityParams}
        />
      </S.Content>
    </S.Home>
  );
};

export default Favorites;
