import { Pages } from "../../navigation/Pages";

export const MenuItems = [
  {
    label: "Home",
    id: "home",
    page: Pages.HOME,
    subMenus: [],
  },
  {
    label: "Categories",
    id: "categories",
    href: "",
    subMenus: [
      {
        label: "First category",
        id: "first category",
        href: "/first",
      },
      {
        label: "Second category",
        id: "second category",
        href: "/second",
      },
    ],
  },
  {
    label: "Products",
    id: "products",
    href: "",
    subMenus: [
      {
        label: "First Product",
        id: "first prod",
      },
      {
        label: "Second Product",
        id: "second",
      },
      {
        label: "Third",
        id: "third",
      },
    ],
  },
  {
    label: "About Us",
    id: "about",
  },
  {
    label: "Contact Us",
    id: "contact",
  },
];

export default function testComp() {
  return <>ff</>;
}
