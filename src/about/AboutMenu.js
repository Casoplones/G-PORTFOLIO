import React, { Component } from "react";
import AboutMenuItem from "./AboutMenuItem";
import AboutSubheading from "./AboutSubheading";
import subheadingsData from "./subheadingsData";
import personalIcon from "../assets/moebius-triangle.png";
import educationIcon from "../assets/upgrade.png";
import careerIcon from "../assets/triple-corn.png";
import { motion, AnimatePresence } from "framer-motion";

export default class AboutMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeMenuItem: 1,
      activeSubheading: 1,
    };
  }

  handleMenuItemClick = (menuItem) => {
    this.setState({
      activeMenuItem: menuItem,
      activeSubheading: 1,
    });
  };

  handleSubheadingClick = (subheading) => {
    this.setState({
      activeSubheading: subheading,
    });
  };

  render() {
    const { activeMenuItem, activeSubheading } = this.state;
    const menuItems = ["PERSONAL", "FORMACIÓN", "EXPERIENCIA"];
    const activeMenuTitle = menuItems[activeMenuItem - 1];
    const activeMenuIcon =
      activeMenuTitle === "PERSONAL"
        ? personalIcon
        : activeMenuTitle === "EDUCATION"
        ? educationIcon
        : careerIcon;

    const subheadings = subheadingsData[activeMenuItem];

    return (
      <>
        <motion.div 
          className="menu"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          {menuItems.map((item, index) => (
            <AboutMenuItem
              key={index}
              title={item}
              active={activeMenuItem === index + 1}
              onClick={() => this.handleMenuItemClick(index + 1)}
            />
          ))}
        </motion.div>
        <motion.div 
          className="sub-container"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="icon-title-container">
            <motion.img 
              src={activeMenuIcon} 
              alt={activeMenuTitle} 
              className="icon"
              key={activeMenuItem}
              initial={{ rotate: -180, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 100 }}
            />
            <motion.h3
              key={`title-${activeMenuItem}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              {activeMenuTitle}
            </motion.h3>
          </div>
          <AnimatePresence mode="wait">
            {subheadings.map((subheading, index) => (
              <AboutSubheading
                key={index}
                title={subheading.title}
                content={subheading.content}
                active={activeSubheading === index + 1}
                onClick={() => this.handleSubheadingClick(index + 1)}
                menuItem={activeMenuItem}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </>
    );
  }
}