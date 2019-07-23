import React from "react"
import { Link, graphql } from "gatsby"
import BackgroundImage from 'gatsby-background-image'

const Bucket = (props) => {
    return (
        <BackgroundImage
            fluid={props.img.childImageSharp.fluid}
            className="home-bucket relative overflow-hidden w-full border-gray-100 border cursor-pointer min-h-96 group"
        >

            <Link to="/" className="absolute translate-y-full group-hover:translate-y-0 transition-all transition-250 flex flex-col justify-center w-full h-full p-16 lg:px-24 xl:px-32 lg:py-40 bg-navy-500">
                <h2 className="text-beige-100 text-lg lg:text-2xl font-MRextrabold">{props.heading}</h2>
                <p className="text-teal-500 font-MRbold">{props.intro}</p>
            </Link>

        </BackgroundImage>
    )
}

export default Bucket;
