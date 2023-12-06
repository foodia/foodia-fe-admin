import {
  IconBoxMultiple,
  IconBuildingStore,
  IconCircleDot,
  IconHome,
  IconInfoCircle,
  IconLayout,
  IconLayoutGrid,
  IconPhoto,
  IconPictureInPicture,
  IconPoint,
  IconStar,
  IconTable,
  IconTank,
  IconUser,
  IconUsers,
} from "@tabler/icons-react";

import { uniqueId } from "lodash";

const Menuitems = [
  // {
  //   id: uniqueId(),
  //   title: "Dashboard",
  //   icon: IconHome,
  //   href: "/dashboard",
  // },
  {
    id: uniqueId(),
    title: "Users",
    icon: IconUsers,
    submenu: [
      {
        id: uniqueId(),
        href: "/ui-components/merchant",
        name: "Merchant",
        icon: <IconPhoto />,
      },
      {
        id: uniqueId(),
        href: "/ui-components/detonator",
        name: "Detonator",
        icon: <IconUser />,
      },
    ],
  },
  // {
  //   id: uniqueId(),
  //   title: "Buttons",
  //   icon: IconCircleDot,
  //   href: "/ui-components/buttons",
  // },
  // {
  //   id: uniqueId(),
  //   title: "Forms",
  //   icon: IconTable,
  //   href: "/ui-components/forms",
  // },
  // {
  //   id: uniqueId(),
  //   title: "Alerts",
  //   icon: IconInfoCircle,
  //   href: "/ui-components/alerts",
  // },
  // {
  //   id: uniqueId(),
  //   title: "Ratings",
  //   icon: IconStar,
  //   href: "/ui-components/ratings",
  // },
  // {
  //   id: uniqueId(),
  //   title: "Images",
  //   icon: IconPhoto,
  //   href: "/ui-components/images",
  // },
  // {
  //   id: uniqueId(),
  //   title: "Pagination",
  //   icon: IconUser,
  //   href: "/ui-components/pagination",
  // },
  // {
  //   id: uniqueId(),
  //   title: "Tables",
  //   icon: IconLayoutGrid,
  //   href: "/ui-components/table",
  // },
];

export default Menuitems;
