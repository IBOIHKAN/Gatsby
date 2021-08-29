import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import {COLORS} from "../constants"
import { Wrapper, BottomEdgeDown, Game, Image} from "./pageStyles/pageStyles"

const IndexPage = () => {
  const {
    wpcontent: {
      page: {
        homeMeta: {
          fieldGroupName,
          kleineBeschrijving,
          title,
          bannerfoto,
          featuredGames
        }
      }
    }
  } = useStaticQuery(graphql`
  query{
  wpcontent{
    page(idType: URI, id: "home") {
      homeMeta {
        fieldGroupName
        kleineBeschrijving
        title
        bannerfoto{
          sourceUrl
          altText
          imageFile{
            childImageSharp{
              fluid(quality: 100) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
        featuredGames{
          ... on WPGraphql_Game {
            id
            game {
              photo {
                sourceUrl
                altText
                imageFile{
                  childImageSharp{
                    fluid(quality: 100, grayscale: true) {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                  }
                }
              }
              developers
              gameTitle
              fieldGroupName
              price
              publishers
            }
          }
        }
      }
    }
  }
  }`);
  return (
    <Layout>
      <Seo title="Home" />
      <Wrapper>
        <div className="banner" style={{top:65}}>
          <Image 
          fluid={bannerfoto.imageFile.childImageSharp.fluid} 
          alt={bannerfoto.altText}
          />
        
          <div className="inner-div">
            <p className="header-title">{title}</p>
            <p className="header-description">{kleineBeschrijving}</p>
          </div>
          <BottomEdgeDown color={COLORS.BLACK}/>
        </div>
        <div className="game">
          <h2>Featured games</h2>
          <div className="game-items">
            {featuredGames.map(({game, slug}) => (
              <Game to={`/${slug}`}>
                <Image fluid={game.photo.imageFile.childImageSharp.fluid}/>
                <div className="game-info">
                  <p>{game.gameTitle} </p>
                  <p>{"€" + game.price }</p>
                </div>
              </Game>
            ) )}
          </div>
        </div>
      </Wrapper>
    </Layout>
  )
}

export default IndexPage
