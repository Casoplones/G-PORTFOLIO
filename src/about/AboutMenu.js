import React, { Component } from "react";
import AboutMenuItem from "./AboutMenuItem";
import AboutSubheading from "./AboutSubheading";
import subheadingsData from "./subheadingsData";
import personalIcon from "../assets/moebius-triangle.png";
import educationIcon from "../assets/upgrade.png";
import careerIcon from "../assets/triple-corn.png";
import cvPDF from "../assets/Nicolás_Casas_Rodriguez_CV.docx.pdf";

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

  handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = cvPDF;
    link.download = "Nicolás_Casas_Rodriguez_CV.docx.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
        <div className="menu">
          {menuItems.map((item, index) => (
            <AboutMenuItem
              key={index}
              title={item}
              active={activeMenuItem === index + 1}
              onClick={() => this.handleMenuItemClick(index + 1)}
            />
          ))}
          {/* Botón para descargar PDF con mismo estilo que los items del menú */}
          <div className="item download-item" onClick={this.handleDownloadCV}>
            <span className="title">MANAGER CV</span>
          </div>
        </div>
        <div className="sub-container">
          <div className="icon-title-container">
            <img src={activeMenuIcon} alt={activeMenuTitle} className="icon" />
            <h3>{activeMenuTitle}</h3>
          </div>
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
        </div>
      </>
    );
  }
}