import React from "react";
import {
  FetchStatus,
  Loader,
  Prompt,
  withHeadless,
} from "storybook-addon-headless";
import LandingPage from "../pages/landingPage";

export default {
  title: "Example/LandingPage",
  decorators: [
    withHeadless({
      restful: {
        baseURL:
          "https://api.buttercms.com/v2/pages/*/storybook-demo/?locale=en&preview=1&auth_token=6aa4e6cb6fb959f2dba4323c61710ad900b647d3",
      },
    }),
  ],
  parameters: {
    headless: {
      Data: {
        query: "",
        autoFetchOnInit: true,
      },
    },
  },
};

export const Default = (_args, { status, data }) => {
  switch (status?.Data) {
    case FetchStatus.Inactive:
    case FetchStatus.Rejected:
      return <Prompt />;

    case FetchStatus.Loading:
      return <Loader />;

    default:
      return data?.Data ? <LandingPage {...data.Data} /> : null;
  }
};
