import HelloWorld from "@/components/HelloWorld.vue";
import { shallowMount } from "@vue/test-utils";

describe("HelloWorld", () => {
  let spyLocal: ReturnType<typeof SpyGlobal>;
  const msg = "new message";

  const SpyGlobal = () => ({
    spyComponent: shallowMount(HelloWorld, {
      props: { msg },
    }),
  });

  it("must be created", () => {
    spyLocal = SpyGlobal();
    expect(spyLocal.spyComponent).toBeTruthy();
  });

  it("renders props.msg when passed", () => {
    let vari: any;
    spyLocal = SpyGlobal();
    expect(spyLocal.spyComponent.props()).toEqual({ msg: "new message" });
  });
});
