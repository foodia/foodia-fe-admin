import {
  IconBuildingStore,
  IconBurger,
  IconSpeakerphone,
  IconUser,
  IconUsers,
} from "@tabler/icons-react";

import { uniqueId } from "lodash";

const Menuitems = [
  {
    id: uniqueId(),
    title: "Detonator",
    icon: IconUsers,
    submenu: [
      {
        id: uniqueId(),
        href: "/ui-components/detonator",
        name: "List Detonator",
        icon: <IconUser />,
      },
      {
        id: uniqueId(),
        href: "/ui-components/campaign",
        name: "List Campaign",
        icon: <IconSpeakerphone />,
      },
    ],
  },
  {
    id: uniqueId(),
    title: "Merchant",
    icon: IconBuildingStore,
    submenu: [
      {
        id: uniqueId(),
        href: "/ui-components/merchant",
        name: "List Merchant",
        icon: <IconUser />,
      },
      {
        id: uniqueId(),
        href: "/ui-components/product",
        name: "List Product",
        icon: <IconBurger />,
      },
    ],
  },
];

export default Menuitems;
