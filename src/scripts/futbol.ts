/// <reference path="../../typings/node/node.d.ts"/>
// Description:
//   Soccer information
//
// Dependencies:
//   None
//
// Configuration:
//   None
//
// Commands:
//   hubot premier-league standings - table with teams standings"
//   hubot premier-league fixtures - shows fixtures for current day
//
// Authors:
//   Camilo Aguilar & Osman Hernandez
//   Tester:
//      Carlos Fontecha

import ms = require("../helpers/messageSender");
import fw = require("../helpers/futbolWisdom");

class Futbol {
	constructor(private messageSender: ms.ISendMessages, private hubotFutbolWisdom: fw.IIHubotFutbolWisdom) {}

  	hubotAction = (robot: any) => {
    	robot.respond(/premier-league standings/i, (msg: any) => {
      		this.hubotFutbolWisdom.showPremierLeagueLeagueTable()
      			.then((table) => {
      				this.messageSender.send(msg, table);
      			});
      	});

      	robot.respond(/premier-league fixtures/i, (msg: any) => {
      		this.hubotFutbolWisdom.showPremierLeagueFixtures()
      			.then((fixtures) => {
      				this.messageSender.send(msg, fixtures);
      			});
      	});
  	}
}

var httpClient = require("request-promise");
var MessageSender = ms.MessageSender;
var HubotFutbolWisdom = fw.HubotFutbolWisdom;

var fn = new Futbol(new MessageSender(), new HubotFutbolWisdom(httpClient)).hubotAction
export = fn
