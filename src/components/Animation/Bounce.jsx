export default {
  name: 'Bounce',

  render() {
    const data = {
      props: this.$attrs,
      on: this.$listeners,
    };

    return (
      <transition
        appear
        type="animation"
        enterActiveClass="bounce-in"
        leaveActiveClass="bounce-out"
        {...data}
      >
        {this.$slots.default}
      </transition>
    );
  },
};
