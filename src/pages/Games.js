// import React from "react"
// import { useStaticQuery, graphql } from "gatsby"

// import Layout from "../components/layout"
// import SEO from "../components/Seo"
// import { Wrapper, Image, BottomEdgeDown, BottomEdgeUp, Game } from "./pageStyles/pageStyles"
// import { COLORS } from "../constants"

// const GamePage = () => {
//     const {
//         wpcontent: {
//           page: {
//             games: {
//                 kleineBeschrijving,
//                 bannerFoto
//             },
//             games: { edges: game },
//           }
//         }
//       } = useStaticQuery(graphql`
//       query{
//       wpcontent{
//         page(idType: URI, id: "games") {
//           games {
//             kleineBeschrijving
//             bannerFoto{
//               sourceUrl
//               altText
//               imageFile{
//                 childImageSharp{
//                   fluid(quality: 100) {
//                     ...GatsbyImageSharpFluid_withWebp
//                   }
//                 }
//               }
//             }
//             games {
//                 edges {
//                   node {
//                     game {
//                       developers
//                       gameTitle
//                       price
//                       publishers
//                     }
//                   }
//                 }
//               }
//             }
//           }
//        }
//     }`);

//   return (
//     <Layout>
//       <SEO title="Games" />
//       <Wrapper artistsColor={COLORS.BLACK} descriptionColor={COLORS.SECONDARY}>
//         <div className="banner">
//           <Image
//             fluid={bannerFoto.imageFile.childImageSharp.fluid}
//           />
//           <BottomEdgeDown color={COLORS.SECONDARY} />
//         </div>
//         <div className="description">
//           <h2>We are the game agency</h2>
//           <p>{kleineBeschrijving}</p>
//           <BottomEdgeUp color={COLORS.BLACK} />
//         </div>
//         <div className="game">
//           <h2>Our Games</h2>
//           <div className="game-items">
//             {game.map(({ node: { artist, slug } }) => (
//               <Game to={`/${slug}`} key={slug}>
//                 <Image
//                   fluid={game.photo.imageFile.childImageSharp.fluid}
//                   alt={game.photo.altText}
//                 />
//                 <div className="game-info">
//                   <p>{game.gameTitle} </p>
//                   <p>{game.publisher}{game.developers}</p>
//                   <p>{game.price}</p>
//                 </div>
//               </Game>
//             ))}
//           </div>
//         </div>
//       </Wrapper>
//     </Layout>
//   )
// }

// export default GamePage