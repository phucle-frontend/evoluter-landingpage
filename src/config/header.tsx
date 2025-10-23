import { ChevronDown, MagnetIcon } from "lucide-react";

export const I_HEADER_CONFIGS_TYPE = {
  LINK: "LINK",
  POPOVER: "POPOVER",
} as const;
export type I_HEADER_CONFIGS_TYPE =
  (typeof I_HEADER_CONFIGS_TYPE)[keyof typeof I_HEADER_CONFIGS_TYPE];

export interface I_HEADER_CONFIGS {
  key: string;
  type: I_HEADER_CONFIGS_TYPE;
  link?: string;
  title: string;
  icon?: React.ReactNode;
  expandedData?: I_HEADER_CONFIGS[];
}

export const headerConfigs: I_HEADER_CONFIGS[] = [
  {
    key: "services",
    type: I_HEADER_CONFIGS_TYPE.POPOVER,
    title: "Services",
    icon: <ChevronDown className="w-4 h-4" />,
    expandedData: [
      {
        key: "services1",
        type: I_HEADER_CONFIGS_TYPE.LINK,
        title: "Services1",
        icon: <MagnetIcon className="w-4 h-4" />,
      },
      {
        key: "services2",
        type: I_HEADER_CONFIGS_TYPE.LINK,
        title: "Services2",
        icon: <MagnetIcon className="w-4 h-4" />,
      },
    ],
  },
  {
    key: "hireExperts",
    type: I_HEADER_CONFIGS_TYPE.LINK,
    link: "#",
    title: "Hire Experts",
  },
  {
    key: "company",
    type: I_HEADER_CONFIGS_TYPE.POPOVER,
    title: "Company",
    icon: <ChevronDown className="w-4 h-4" />,
    expandedData: [
      {
        key: "company1",
        type: I_HEADER_CONFIGS_TYPE.LINK,
        title: "Company1",
        icon: <MagnetIcon className="w-4 h-4" />,
      },
      {
        key: "company2",
        type: I_HEADER_CONFIGS_TYPE.LINK,
        title: "Company2",
        icon: <MagnetIcon className="w-4 h-4" />,
      },
    ],
  },
  {
    key: "resources",
    type: I_HEADER_CONFIGS_TYPE.POPOVER,
    title: "Resources",
    icon: <ChevronDown className="w-4 h-4" />,
    expandedData: [
      {
        key: "resources1",
        type: I_HEADER_CONFIGS_TYPE.LINK,
        title: "Resources1",
        icon: <MagnetIcon className="w-4 h-4" />,
      },
      {
        key: "resources2",
        type: I_HEADER_CONFIGS_TYPE.LINK,
        title: "Resources1",
        icon: <MagnetIcon className="w-4 h-4" />,
      },
    ],
  },
   {
    key: "why",
    type: I_HEADER_CONFIGS_TYPE.LINK,
    link: "#",
    title: "Why",
  },
];
