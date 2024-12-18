

export const DASHBOARD_TICKET_STATUS = {
  OPEN: 1,
  IN_PROGRESS: 2,
  CLOSED: 3,
};

export const NAV_INITIALIZE = [
  {
    to: "/dashboard",
    name: "leftMenu.adminDashBoard",
    title: "dashBoard.title",
  },
  {
    to: "/ticket",
    name: "leftMenu.ticket",
    title: "ticket.title",
  },
  {
    to: "/settings",
    name: "leftMenu.settings",
    children: [
      {
        to: "/settings/user",
        name: "leftMenu.user",
      },
      {
        to: "/settings/account",
        name: "leftMenu.account",
      },
    ],
    showDropdown: false,
  },
];

export const LOCAL_STORAGE_KEY = {
  LANGUAGE: "language",
  ACCESS_TOKEN: "access_token",
  LINKEDIN_ACCESS_TOKEN: "linkedin_access_token",
};

export const THEME_KEY = {
  DARK: "dark",
  LIGHT: "light",
};

export const LIST_PAGE_SIZE = [5, 10, 20];

export const LANGUAGE = {
  EN: "en",
  VI: "vi",
};

export const SIDEBAR_SHOW_STATUS = {
  EXPAND: "EXPAND",
  COLLAPSE: "COLLAPSE",
};
