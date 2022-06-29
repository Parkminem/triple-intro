import CountUp from "./index";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "CountUp",
  component: CountUp,
};

export const Default = (args) => <CountUp {...args} />;

Default.args = {
  number: 20000,
  duration: 2000,
  startNumber: 20000 * 0.8,
  decimalPlaces: 0,
};
