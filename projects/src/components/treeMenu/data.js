export const menus = [
  {
    label: "Home",
    to: "/",
    id: 0,
  },
  {
    label: "Profile",
    to: "/profile",
    show: false,
    children: [
      {
        label: "Details",
        to: "details",
        show: false,
        children: [
          {
            label: "Location",
            to: "location",
            show: false,
            children: [
              {
                label: "City",
                to: "city",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    label: "Settings",
    to: "/settings",
    show: false,
    children: [
      {
        label: "Account",
        to: "account",
      },
      {
        label: "Security",
        to: "security",
        show: false,
        children: [
          {
            label: "Login",
            to: "login",
          },
          {
            label: "Register",
            to: "register",
            show: false,
            children: [
              {
                label: "Random data",
                to: "",
              },
            ],
          },
        ],
      },
    ],
  },
];

export default menus;
