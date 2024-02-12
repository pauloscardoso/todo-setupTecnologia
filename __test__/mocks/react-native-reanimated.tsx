jest.mock('react-native-reanimated', () => {
  const currentModule = require('react-native-reanimated/mock');
  return {
    ...currentModule,
    SlideInDown: {
      duration,
    },
    SlideOutLeft: {
      duration,
    },
    FadeInRight: {
      duration,
    },
    FadeOutRight: {
      duration,
    },
    FadeOut: {
      duration,
    },
    FadeInUp: {
      duration,
    },
    FadeOutUp: {
      duration,
    },
    FadeInDown: {
      duration,
    },
    FadeIn: {
      duration,
    },
    StretchInX: {
      duration,
    },
    LightSpeedInRight: {
      duration,
    },
    LightSpeedInLeft: {
      duration,
    },
  };
});

export {};

const duration = () => ({
  randomizeDelay: false,
  durationV: 0,
  easing: () => ({ randomizeDelay: false, durationV: 0 }),
  delay: () => ({ delayV: 0, durationV: 0, randomizeDelay: false }),
});
