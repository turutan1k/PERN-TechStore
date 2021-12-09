import React from "react";

import { GET_ENUMS } from "~/const/router";

import useGetPopupState from "./hooks/useGetPopupState";
import SignIn from "./Popups/SignIn";
import SignUp from "./Popups/SignUp";
import Notifications from "./Popups/Notifications";

const popups = {
  [GET_ENUMS.popup.signIn]: SignIn,
  [GET_ENUMS.popup.signUp]: SignUp,
  [GET_ENUMS.popup.notifications]: Notifications
};

const GetParameterPopups = () => {
  const { mountedPopup, isOpened } = useGetPopupState();
  const Component = popups[mountedPopup];

  if (!Component) {
    return null;
  }

  return <Component isOpened={isOpened} />;
};

export default GetParameterPopups;