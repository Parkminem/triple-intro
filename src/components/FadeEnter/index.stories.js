import CountUp from "../CountUp";

import FadeEnter from "./index";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "FadeEnter",
  component: FadeEnter,
};

export const Image = (args) => (
  <FadeEnter {...args}>
    <img src="/assets/triple2x.png" alt="triple" width={300} />
  </FadeEnter>
);

Image.args = {
  duration: 700,
  startTime: 0,
};

export const Text = (args) => (
  <FadeEnter {...args}>
    <CountUp number={700} />만 명의 여행자
  </FadeEnter>
);

Text.args = {
  duration: 700,
  startTime: 200,
};
