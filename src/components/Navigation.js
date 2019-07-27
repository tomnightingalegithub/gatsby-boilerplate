import React from "react"

import AniLink from "gatsby-plugin-transition-link/AniLink"
import { IoIosMenu, IoMdClose, IoIosMailUnread } from "react-icons/io"

import LeagueLogoText from "../svg/league-logo-text.svg"


const Navigation = class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        active: false,
        navBarActiveClass: "translate-x-full"
      };
    }

    toggleHamburger = (e) => {
      e.preventDefault(); //cancel default action
      // toggle the active boolean in the state
      this.setState(
        {
          active: !this.state.active
        },
        // after state has been updated,
        () => {
          // set the class in state for the navbar accordingly
          this.state.active
            ? this.setState({
                navBarActiveClass: "translate-x-0"
              })
            : this.setState({
                navBarActiveClass: "translate-x-full"
              });
        }
      );
    };

    render() {

      /*const subItems = {
          "web design" : "/",
          "web development" : "/",
          "seo" : "/",
          "ppc" : "/",
          "content marketing" : "/",
          "copywriting" : "/",
          "telecoms" : "/"
      }*/

      return (
          <div className="min-w-full flex flex-wrap justify-end">

              <nav className={`w-full md:flex flex-wrap justify-around items-center px-4 md:py-8 lg:w-3/4 xl:w-1/2 font-MRbold text-beige-100 ${this.props.classList}`}>

              <AniLink
                  to="/"
                  paintDrip
                  duration={.75}
                  hex="#0b1529"
                  className="hidden md:inline-block hover:text-teal-500 transition-all transition-250">our services</AniLink>

              <AniLink
                  to="/projects"
                  paintDrip
                  duration={.75}
                  hex="#0b1529"
                  className="hidden md:inline-block hover:text-teal-500 transition-all transition-250">projects</AniLink>

              <AniLink
                  to="/"
                  paintDrip
                  duration={.75}
                  hex="#0b1529"
                  className="hidden md:inline-block hover:text-teal-500 transition-all transition-250">work with us</AniLink>

                  <a className={`absolute md:relative z-10 inline-block top-0 right-0 m-4 p-4 md:p-0 ${this.props.iconColor}`} href="/" onClick={(e) => this.toggleHamburger(e) }>
                      <IoIosMenu className="text-4xl" />
                  </a>

              </nav>

              <div className={`w-full lg:w-1/4 bg-white absolute top-0 right-0 p-5 pt-6 lg:p-10 lg:pt-16 min-h-screen z-10 transition-all transition-250 ${this.state.navBarActiveClass}`}>

                  <a className="absolute top-0 right-0 mt-12 mr-8 p-1 md:mt-6 md:mr-6 lg:mt-2 lg:mr-8 lg:pt-12 text-4xl text-navy-500" href="/" onClick={(e) => this.toggleHamburger(e)}><IoMdClose /></a>

                  <nav className="flex flex-col justify-center pl-10 text-navy-500 font-MRextrabold ">

                      <AniLink
                          paintDrip
                          duration={.75}
                          hex="#0b1529"
                          to="/"><LeagueLogoText
                          className="mt-4 mb-8 w-32 mb-8" /></AniLink>

                      <AniLink
                          paintDrip
                          duration={.75}
                          hex="#0b1529"
                          to="/"
                          className="py-3">our services</AniLink>

                      {/*
                          Object.entries(subItems).map(([name, url]) => (
                              <Link to={url} className="py-3 pl-4 text-teal-500">{name}</Link>
                          ))
                      */}

                      <AniLink
                          paintDrip
                          duration={.75}
                          hex="#0b1529"
                          to="/projects"
                          className="py-3">projects</AniLink>

                      <AniLink
                          paintDrip
                          duration={.75}
                          hex="#0b1529"
                          to="/"
                          className="py-3">latest news</AniLink>

                      <AniLink
                          to="/"
                          paintDrip
                          duration={.75}
                          hex="#0b1529"
                          className="flex flex-wrap items-center py-3"><IoIosMailUnread className="text-2xl mr-2"/> work with us</AniLink>
                  </nav>

              </div>

          </div>
      )
    }
}

Navigation.defaultProps = {
    classList: '',
    iconColor: '',
}

export default Navigation;
