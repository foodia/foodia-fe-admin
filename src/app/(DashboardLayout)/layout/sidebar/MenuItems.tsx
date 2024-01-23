"use client";
import {
  IconBuildingStore,
  IconBurger,
  IconBusinessplan,
  IconGift,
  IconHandMove,
  IconSpeakerphone,
  IconUser,
  IconUsers,
  IconWallet,
} from "@tabler/icons-react";
import { uniqueId } from "lodash";
import { useAppContext } from "../../components/shared/Context";
import { IconWalletOff } from "@tabler/icons-react";

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
      title: "Wallet",
      icon: IconWallet,
      submenu: [
        {
          id: uniqueId(),
          href: "/ui-components/pages/wallet",
          name: "CSR Wallet",
          icon: <IconWallet />,
          // isUnapproved: isUnapprovedMerchant,
        },
        {
          id: uniqueId(),
          href: "/ui-components/pages/wallet/agnostic",
          name: "Agnostic Wallet",
          icon: <IconWallet />,
          // isUnapproved: isUnapprovedProduct,
        },
      ],
    },
    {
      id: uniqueId(),
      title: "Donator",
      icon: IconHandMove,
      submenu: [
        {
          id: uniqueId(),
          href: "/ui-components/pages/donator",
          name: "Corporations",
          icon: <IconBusinessplan />,
          // isUnapproved: isUnapprovedProduct,
        },
        {
          id: uniqueId(),
          href: "/ui-components/pages/donator/individuals",
          name: "Individuals",
          icon: <IconUser />,
          // isUnapproved: isUnapprovedMerchant,
        },
      ],
    },
    {
      id: uniqueId(),
      title: "Detonator",
      icon: IconUsers,
      submenu: [
        {
          id: uniqueId(),
          href: "/ui-components/pages/detonator",
          name: "List Detonator",
          icon: <IconUser />,
          isUnapproved: isUnapprovedDetonator,
        },
        {
          id: uniqueId(),
          href: "/ui-components/pages/campaign",
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
          href: "/ui-components/pages/merchant",
          name: "List Merchant",
          icon: <IconUser />,
          isUnapproved: isUnapprovedMerchant,
        },
        {
          id: uniqueId(),
          href: "/ui-components/pages/product",
          name: "List Product",
          icon: <IconBurger />,
          isUnapproved: isUnapprovedProduct,
        },
      ],
    },
  ];
};

export default Menuitems;
