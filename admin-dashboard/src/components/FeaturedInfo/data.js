import { Apartment, ConfirmationNumber, Group } from "@material-ui/icons";

export const data = [
  {
    id: 1,
    name: "Projects",
    amount: 5,
    change: 0.1543,
    icon: <Apartment className="featuredIcon" />,
  },
  {
    id: 2,
    name: "Tickets",
    amount: 14,
    change: -0.121,
    icon: <ConfirmationNumber className="featuredIcon" />,
  },
  {
    id: 3,
    name: "Contributors",
    amount: 10,
    change: 1.213,
    icon: <Group className="featuredIcon" />,
  },
];
