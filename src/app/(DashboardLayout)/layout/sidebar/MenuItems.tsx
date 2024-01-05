"use client";
import {
  IconBuildingStore,
  IconBurger,
  IconSpeakerphone,
  IconUser,
  IconUsers,
} from "@tabler/icons-react";
import { uniqueId } from "lodash";
import { useAppContext } from "../../components/shared/Context";

const Menuitems = () => {
  const {
    isUnapprovedDetonator,
    isUnapprovedCampaign,
    isUnapprovedMerchant,
    isUnapprovedProduct,
  } = useAppContext();

  return [
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
          isUnapproved: isUnapprovedDetonator,
        },
        {
          id: uniqueId(),
          href: "/ui-components/campaign",
          name: "List Campaign",
          icon: <IconSpeakerphone />,
          isUnapproved: isUnapprovedCampaign,
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
          isUnapproved: isUnapprovedMerchant,
        },
        {
          id: uniqueId(),
          href: "/ui-components/product",
          name: "List Product",
          icon: <IconBurger />,
          isUnapproved: isUnapprovedProduct,
        },
      ],
    },
  ];
};

export default Menuitems;
