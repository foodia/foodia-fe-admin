import {
  IconBoxMultiple,
  IconBrandCampaignmonitor,
  IconBuildingStore,
  IconCamper,
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
    title: "Detonator",
    icon: IconTank,
    submenu: [
      {
        id: uniqueId(),
        href: "/ui-components/detonator",
        name: "List Detonator",
        icon: <IconUser />,
      },
      {
        id: uniqueId(),
        href: "/ui-components/detonator",
        name: "Campaign",
        icon: <IconBrandCampaignmonitor />,
      },
    ],
  },
  {
    id: uniqueId(),
    title: "Merchant",
    icon: IconCamper,
    submenu: [
      {
        id: uniqueId(),
        href: "/ui-components/merchant",
        name: "List Merchant",
        icon: <IconBuildingStore />,
      },
      {
        id: uniqueId(),
        href: "/ui-components/merchant",
        name: "Product",
        icon: <IconPhoto />,
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
