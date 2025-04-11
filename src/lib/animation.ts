import type { Variants } from 'framer-motion';

// Fade up animation (for sections, cards, etc.)
export const fadeUpVariant: Variants = {
  hidden: {
    opacity: 0,
    y: 30
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut'
    }
  }
};

// Stagger children animation (for lists of items)
export const staggerContainerVariant: Variants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

// Zoom in animation
export const zoomInVariant: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut'
    }
  }
};

// Slide right animation (for hero elements)
export const slideRightVariant: Variants = {
  hidden: {
    opacity: 0,
    x: -50
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: 'easeOut'
    }
  }
};

// Subtle hover animations
export const hoverScaleVariant = {
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.3,
      ease: 'easeInOut'
    }
  }
};

// Button hover effect
export const buttonHoverVariant = {
  hover: {
    scale: 1.05,
    backgroundColor: '#a9573c', // verz-rust color
    transition: {
      duration: 0.2,
      ease: 'easeInOut'
    }
  }
};

// For animating in sections when they come into view
export const scrollAnimationVariant: Variants = {
  offscreen: {
    opacity: 0,
    y: 50
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.2,
      duration: 0.8
    }
  }
};
