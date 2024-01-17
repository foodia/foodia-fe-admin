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
          href: "/ui-components/wallet",
          name: "CSR Wallet",
          icon: <IconWallet />,
          // isUnapproved: isUnapprovedMerchant,
        },
        {
          id: uniqueId(),
          href: "/ui-components/wallet/agnostic",
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
          href: "/ui-components/mercnt",
          name: "Individuals",
          icon: <IconUser />,
          // isUnapproved: isUnapprovedMerchant,
        },
        {
          id: uniqueId(),
          href: "/ui-components/prodct",
          name: "Corporations",
          icon: <IconBusinessplan />,
          // isUnapproved: isUnapprovedProduct,
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
