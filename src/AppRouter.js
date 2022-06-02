import React from "react";
// import ReactArrayToTree from "react-array-to-tree";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { Home, Favorites } from "pages";
import { ThemeProvider } from "theme";
import NavBar from "components/NavBar";
import FavoritesContext from "./AppContexts/FavoriteListContext";
import NationalitiesContext from "./AppContexts/NationalitiesContext";
import PageNumberContext from "AppContexts/PageNumberContext";

const AppRouter = () => {
  // const Providers = ReactArrayToTree([
  //   [FavoritesContext.Provider],
  //   [NationalitiesContext.Provider],
  //   [PageNumberContext.Provider],
  // ]);

  return (
    <ThemeProvider>
      <Router>
        <NavBar />
        <Switch>
          <NationalitiesContext>
            <FavoritesContext>
              <PageNumberContext>
                <Route exact path="/Favorites" component={Favorites} />
                <Route exact path="/" component={Home} />
              </PageNumberContext>
            </FavoritesContext>
          </NationalitiesContext>
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default AppRouter;
