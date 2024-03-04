import React from 'react'
import FaqTile from './components/FaqTile'
import { Tile } from './components/Tile'
import aedile_logo from './assets/OIG2.svg'
import aedile_bg from './assets/OIG2_bg.svg'
import github from './assets/github.svg'
import discord from './assets/discord.svg'
import website from './assets/website.svg'
import './styles/main.scss'

function App() {

  return (
    <div className='home-page'>

      <div className='banner' style={{backgroundImage: `url(${aedile_bg})`}}>
          <h1 className='banner__header'>Improve your server experience with NumberBot!</h1>
          <a className='button' href="https://dsc.gg/numberbot-server" target='_blank'>Join the Server</a>
      </div>

      <div className='landing-page'>
        <h2 className='landing-page__subheader'>What does it offer?</h2>

        <div className='landing-page__tiles-container'>
          <Tile title="Moderation" description="The bot includes commands and tools designed to facilitate server moderation. These features allow administrators to manage warnings, perform actions such as bans and bans, and monitor server activity to maintain a safe and orderly environment."/>
          <Tile title="Entertainment" description="To add fun and entertainment to the servers, the bot offers a range of interactive commands. From games like magic ball and rolling dice to commands to send hugs, kisses and jokes, the bot seeks to improve the user experience and encourage friendly interaction."/>
          <Tile title="Varius Content" description="In addition to moderation and entertainment, the bot provides various functions and content. This may include informational commands, such as obtaining bot or user information, as well as functions related to music playback, configuring settings, and exclusive premium features."/>
        </div>

        <div className='landing-page__about-me'>
          <h2 className='landing-page__subheader'>About NumberBot</h2>
          <p className='about-me__text'>
            Number_Bot is much more than just a bot for Discord; is a project conceived with the mission of enriching and improving the user experience on its servers. Designed with passion and commitment, Number_Bot offers a variety of features aimed at making your time in Discord more secure, interactive and entertaining.
            <br/><br/>
            <b>Our Vision:</b>
            <br/><br/>
            This project was created with the vision of providing Discord communities with a versatile tool that covers different essential areas. Whether it's strengthening moderation, offering interactive commands for fun, or providing varied content, Number_Bot aims to be a valuable resource for any server.
            <br/><br/>
          </p>
          <img className='about-me__img' src={aedile_bg}/>
        </div>
        
        <h2 className='landing-page__subheader'>FAQ</h2>

        <div className='landing-page__faq-tiles-container'>
          <FaqTile question='How can I invite Number_Bot to my server?' answer={(
           <p>
            To invite Number_Bot to your server, simply use this 
             <a href="https://dsc.gg/numberbot-server" target="_blank" rel="noopener noreferrer"> invite link</a> and follow the instructions provided. 
             It's easy and fast!
           </p>
          )}/>  
          <FaqTile question='What moderation features does Number_Bot offer?' answer={`Number_Bot provides effective moderation tools, including warnings, bans to maintain a safe environment on your server.`}/>  
          <FaqTile question='When will Number_Bot be released globally?' answer={`We are hard at work developing Number_Bot and plan to launch it globally in late 2024. \n \n Stay tuned for more information!`}/>  
          <FaqTile question="How can I get technical support or make suggestions?" answer={`If you need technical help or want to share your suggestions and comments, please join our support server. Our team will be happy to help you and listen to your ideas.`}/>  
        </div>

      </div>

      <div className='landing-page-navbar landing-page-navbar--footer'>
        <img className='landing-page-navbar__logo' src={aedile_logo}/>
        <div className='landing-page-navbar__icons'>
          <a className='landing-page-navbar__icon' href="https://github.com/Johnny1305" target="_blank"><img src={github}/></a>
          <a className='landing-page-navbar__icon'href="https://dsc.gg/numberbot-server" target="_blank"><img src={discord}/></a>
        </div>
      </div>

    </div>
  )
}

export default App
