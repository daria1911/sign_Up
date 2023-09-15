import { NavBtn } from ".";

export default {
  title: "Components/NavBtn",
  component: NavBtn,
  argTypes: {
    property1: {
      options: ["variant-2", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "variant-2",
    className: {},
    divClassName: {},
    text: "Get Reeltalk",
  },
};
