"use strict";

define([''], function () {
  //*******************************************************************************************************************
  // ** The Game Configuration
  //*******************************************************************************************************************
  var config = {};
  config.startWith = 'title'; //Options: title, quickload, newgame

  config.showTips = true;
  config.cheats = true;
  config.loadSfx = true;
  config.loadOst = true;
  config.sfxDefaultVolume = 0.8;
  config.ostDefaultVolume = 0.5;
  config.api = 'None';
  config.logo = [];//['agintro', 'https://armor.ag/MoreGames'];

  config.armorMode = false; //true

  config.domainLock = ''; //'armorgames.com'

  config.showAdventaleLogo = true;
  config.adventaleWebsite = '';
  return config;
});
