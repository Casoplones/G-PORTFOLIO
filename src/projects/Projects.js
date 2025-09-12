import React, { Component } from "react";
import ProjectsMenu from "./ProjectsMenu";
import { motion } from "framer-motion";

export default class Projects extends Component {
  render() {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <ProjectsMenu />
      </motion.div>
    );
  }
}