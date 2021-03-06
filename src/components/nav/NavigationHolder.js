import * as React from "react";
import { useRef } from "react";
import { motion, useCycle } from "framer-motion";
import { useDimensions } from "./use-dimensions";
import MenuToggle from "./MenuToggle";
import Navigation from "./Navigation";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 100% 0)`,
    backgroundColor: "#0b1529",
    position: "absolute",
    zIndex: 40,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: "circle(0px at 100% 0px)",
    zIndex: -9999,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 40,
      delay: .5
    }
  }
};

const NavigationHolder = ( props ) => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (

    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
    >

          <motion.div className="nav__background" variants={sidebar} />

          <Navigation />

          <MenuToggle toggle={() => toggleOpen()} currentState={isOpen ? "menu-open" : "menu-closed"} isHomepage={props.isHomepage}/>

    </motion.nav>
  );
};

export default NavigationHolder;
