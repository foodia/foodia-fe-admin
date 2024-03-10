"use client";
import {
  IconBuildingStore,
  IconBurger,
  IconBusinessplan,
  IconHandMove,
  IconMoneybag,
  IconSpeakerphone,
  IconUser,
  IconUsers,
  IconWallet,
} from "@tabler/icons-react";
import { uniqueId } from "lodash";
import { useAppContext } from "../../components/shared/Context";

const Menuitems = () => {
  const {} = useAppContext();

  if (localStorage.getItem("ROLE") == "superadmin") {
    return [
      {
        id: uniqueId(),
        title: "Wallet",
        icon: IconWallet,
        submenu: [
          {
            id: uniqueId(),
            href: "/ui-components/pages/wallet/csr",
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
          {
            id: uniqueId(),
            href: "/ui-components/pages/wallet/merchant-payments",
            name: "Merchant Payments",
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
            // isUnapproved: isUnapprovedDetonator,
          },
          {
            id: uniqueId(),
            href: "/ui-components/pages/campaign",
            name: "List Campaign",
            icon: <IconSpeakerphone />,
            // isUnapproved: isUnapprovedCampaign,
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
            // isUnapproved: isUnapprovedMerchant,
          },
          {
            id: uniqueId(),
            href: "/ui-components/pages/product",
            name: "List Product",
            icon: <IconBurger />,
            // isUnapproved: isUnapprovedProduct,
          },
        ],
      },
      {
        id: uniqueId(),
        title: "Disbursement",
        icon: IconMoneybag,
        submenu: [
          {
            id: uniqueId(),
            href: "/ui-components/pages/disbursement",
            name: "List Disbursement",
            icon: <IconUser />,
            // isUnapproved: isUnapprovedMerchant,
          },
        ],
      },
    ];
  } else if (localStorage.getItem("ROLE") == "corporate") {
    return [
      {
        id: uniqueId(),
        title: "Wallet",
        icon: IconWallet,
        submenu: [
          {
            id: uniqueId(),
            href: "/ui-components/pages/wallet/csr",
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
          {
            id: uniqueId(),
            href: "/ui-components/pages/wallet/merchant-payments",
            name: "Merchant Payments",
            icon: <IconWallet />,
            // isUnapproved: isUnapprovedProduct,
          },
        ],
      },
    ];
  }
};

export default Menuitems;
