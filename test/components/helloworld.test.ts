import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import HelloWolrd from "./HelloWorld.vue";

describe("WeatherHeader.vue Test", () => {
  it("renders message when component is created", () => {
    // render the component
    const wrapper = mount(HelloWolrd, {
      props: {
        title: "hello world!",
      },
    });

    // check that the title is rendered
    expect(wrapper.text()).toMatch("hello world!");
  });
});
