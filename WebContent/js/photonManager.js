var AppInfo = {
	Wss: true,
    AppId: "39341178-a3c0-4b88-8716-fb304e411839",
    AppVersion: "1.0",
//	MasterServer: "localhost:9090"
//    FbAppId: "you fb app id", 
}


/// <reference path="Photon/Photon-Javascript_SDK.d.ts"/> 
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// For Photon Cloud Application access create cloud-app-info.js file in the root directory (next to default.html) and place next lines in it:
//var AppInfo = {
//    MasterAddress: "master server address:port",
//    AppId: "your app id",
//    AppVersion: "your app version",
//}
// fetching app info global variable while in global context
var DemoWss = this["AppInfo"] && this["AppInfo"]["Wss"];
var DemoAppId = this["AppInfo"] && this["AppInfo"]["AppId"] ? this["AppInfo"]["AppId"] : "<no-app-id>";
var DemoAppVersion = this["AppInfo"] && this["AppInfo"]["AppVersion"] ? this["AppInfo"]["AppVersion"] : "1.0";
var DemoMasterServer = this["AppInfo"] && this["AppInfo"]["MasterServer"];
var DemoFbAppId = this["AppInfo"] && this["AppInfo"]["FbAppId"];
var ConnectOnStart = false;


var photonManager = /** @class */ (function (_super) {
    __extends(photonManager, _super);

    
    function photonManager() {
        var _this = _super.call(this, DemoWss ? Photon.ConnectionProtocol.Wss : Photon.ConnectionProtocol.Wss, DemoAppId, DemoAppVersion) || this;
        _this.logger = new Exitgames.Common.Logger("Demo:");
        _this.USERCOLORS = ["#FF0000", "#00AA00", "#0000FF", "#FFFF00", "#00FFFF", "#FF00FF"];
        console.log("This " +_this);
        // uncomment to use Custom Authentication
        // this.setCustomAuthentication("username=" + "yes" + "&token=" + "yes");
        console.log(_this.logger.format("Init", _this.getNameServerAddress(), DemoAppId, DemoAppVersion));
        _this.logger.info("Init", _this.getNameServerAddress(), DemoAppId, DemoAppVersion);
        _this.setLogLevel(Exitgames.Common.Logger.Level.INFO);
        _this.myActor().setCustomProperty("color", _this.USERCOLORS[0]);
        return _this;
    }
    
    
    
    
    
    photonManager.prototype.start = function () {
    	this.messageOtherPlayer ;
        this.connectToRegionMaster("US");
        
    };
    
    photonManager.prototype.onError = function (errorCode, errorMsg) {
        //this.output("Error " + errorCode + ": " + errorMsg);
    };
    
    photonManager.prototype.onLobbyStats = function(errorCode, errorMsg, lobbies)  {
        console.log("Lobby Join");
    };
    
    
   
    
    photonManager.prototype.onEvent = function (code, content, actorNr) {
        switch (code) {
            case 1:
                var mess = content.message;
                var sender = content.senderName;
              
                if (actorNr){
                	  this.messageOtherPlayer  = mess ;
                	//take message other player
                	//console.log(sender + ": " + mess);
                }
                else{
                	
                }
                	//console.log(sender + ": " + mess);
                break;
            case 2:
            	level.checkHealthDuelMode(content.takeDamage,content.isHeadShoot)
            	//console.log("isHeadShot : " + content.isHeadShoot);
            	//console.log("damage : " + content.takeDamage);
            	break;
            case 3:
            	//Send time duel mode
            	//console.log("update Time " +content.current);
            	level.f_grpTimeDuel.updateTextTime(content.current);
            	break;
            case 4:
            	//Position 
            	//console.log("Call Position");
            	level.setPosition(content.enemyX,content.enemyY,content.playerX,content.playerY);
            	level.clearAllArrow();
            	break;
            	
            case 5:
            	//Score
            	level.updateScoreMultiplayer(content.value);
            	break;
            	
            case 6:
            	//Win and Lose
            	level.resultDuel = "Win and Lose";
            	 level.resultDuelMode(content.value);
            	break;
            case 7:
            	//  tranfer infor when connect
                level.f_grpMapDuel.loadInforClient(content.photo,content.name,content.id,
                    content.skin,content.bow);
            	break;
            case 8:
            	//Load scene when play with friend
            	level.f_grpMapDuel.f_grp_wait_joinRoom.visible = false;
            	level.f_grpMapDuel.endWaitTime();
            	 setTimeout(function () {level.onPlayClick();
          	   }, 1000);
            	break;
            	
            case 9:
            	//refuse challenge with friend
            	level.f_grpMapDuel.showMessageRefuseFriend(content.name);
            	break;
            	
            case 10:
            	//leave Room when finish battle
            	console.log("10 Leave Room With Friend");
            	GlobalSetting.photonManager.leaveRoom();
            	break;
            case 11:
             console.log("10 Leave Room With Friend");
            	break;
            case 12:
            	console.log("12 Leave Room With Friend");
            	level.resultDuel = "12 Leave Room With Friend";
            	GlobalSetting.photonManager.leaveRoom();
                GlobalSetting.entryPointData = null;
             
               
              
               
			    setTimeout(function () {
                    isFriendCall = false;
			   }, 5000);
                
            	break;
            case 13:
            	//Send Emotion
            	if(userType === USERTYPE.MASTER){
            		level.f_grpResultDuelMode.showEmotionClient(content.emotion);
            	}
            	else{
            		level.f_grpResultDuelMode.showEmotionMaster(content.emotion);
            	}
            	 
                break;
                case 14:
                console.log("Join Room Again WF");
            	level.f_grpResultDuelMode.isJoinRoomWithFriendAgain =true;
            	 
                break;


                case 15:
            	//synchronized time in duel mode
                level.f_grpTimeDuel.updateTimeSeconds(content.seconds);
                break;

            	
            default:
        }
        this.logger.debug("onEvent", code, "content:", content, "actor:", actorNr);
    };
    photonManager.prototype.onStateChange = function (state) {
        // "namespace" import for static members shorter acceess
        var LBC = Photon.LoadBalancing.LoadBalancingClient;
      //  var stateText = document.getElementById("statetxt");
      //  stateText.textContent = LBC.StateToName(state);
      //  this.updateRoomButtons();
        //this.updateRoomInfo();
    };
    photonManager.prototype.objToStr = function (x) {
        var res = "";
        for (var i in x) {
            res += (res == "" ? "" : " ,") + i + "=" + x[i];
        }
        return res;
    };
    photonManager.prototype.updateRoomInfo = function () {
    	
    	console.log("My Room " + "Name: " + this.myRoom().name + " [" + this.objToStr(this.myRoom()._customProperties) + "]");
    	
    };
    photonManager.prototype.onActorPropertiesChange = function (actor) {
       // this.updateRoomInfo();
    };
    photonManager.prototype.onMyRoomPropertiesChange = function () {
        //this.updateRoomInfo();
    	
    };
    photonManager.prototype.onRoomListUpdate = function (rooms, roomsUpdated, roomsAdded, roomsRemoved) {
        //this.logger.info("Demo: onRoomListUpdate", rooms, roomsUpdated, roomsAdded, roomsRemoved);
        //console.log("Demo: Rooms update: " + roomsUpdated.length + " updated, " + roomsAdded.length + " added, " + roomsRemoved.length + " removed");
        this.onRoomList(rooms);
        //this.updateRoomButtons(); // join btn state can be changed
    };
    photonManager.prototype.onRoomList = function (rooms) {
    	
            console.log("Demo: Rooms total: " + rooms.length);
            
          

    };
    photonManager.prototype.onJoinRoom = function () {
        //console.log("Game " + this.myRoom().name + " joined");
        //this.updateRoomInfo();
    	
    };
    
    photonManager.prototype.onFindFriendsResult =function(errorCode, errorMsg, friends)  {
    	
    	  	console.log("errorMsg " + errorMsg);
    	  	console.log("errorCode " + errorCode);
    	  
    	  	console.log("online " + friends.online);
	        console.log("roomId " + friends.roomId);
	        console.log("friends "+ friends.name);
	        console.log("friends length "+ friends.length);
	        
       for(var i = 0 ;i< friends.length ; i++){
	        console.log("online 1" + friends[i].online);
	        console.log("roomId 1" + friends[i].roomId);
	        console.log("friends 1"+ friends[i].name);
       }

};
    
    photonManager.prototype.onPrivateMessage = function (channelName, message) {
       console.log("channelName " +channelName);
       console.log("message " +message);
    };
    photonManager.prototype.onActorJoin = function (actor) {
    	  console.log("actor " + actor.actorNr + " joined");
    	
    	  /*
    	options =  {};
        options.receivers = Photon.LoadBalancing.Constants.ReceiverGroup.Others;
      	var playerInfor ={};
      	playerInfor.photo = facebookStuff.picture;
      	playerInfor.name = facebookStuff.name;
        playerInfor.id = FBInstant.player.getID();
        playerInfor.skin = localData.currentSkin;
      	console.log("Play Mode " +level.playMode );
      	*/
      	if(level.playMode === PLAYMODE.WITHFRIEND  && GlobalSetting.entryPointData != undefined){
      		//When play With Friend
      		level.f_grpMapDuel.visible = true;
      		level.f_grpMapDuel.f_grp_accept_challege.visible = true;
      		level.f_grpMapDuel.fAvatar_wait.visible = true;
      		level.f_grpMapDuel.isJoinRoomWithFriendSuccess  = true;
      	}
      	
      	if(level.playMode === PLAYMODE.WITHFRIEND  && isFriendCall && !level.f_grpMapDuel.createRoom){
      		//When play With Friend
      		level.f_grpMapDuel.visible = true;
      		level.f_grpMapDuel.f_grp_accept_challege.visible = true;
      		level.f_grpMapDuel.fAvatar_wait.visible = true;
      		level.f_grpMapDuel.isFriendCall = false;
          }
          
          level.f_grpMapDuel.sendInfor();
      
      
      	
      	setTimeout(function () {
      		if(level.f_grpMapDuel.isShowGemUIInfor){
      	      	}
        }, 1000);
      	
    	  
          this.updateRoomInfo();
    };
    photonManager.prototype.onActorLeave = function (actor) {
    	  
     
        console.log("level.isShowResultDuelMode " +level.isShowResultDuelMode);
       
    	if(!level.isShowResultDuelMode){
    		level.endWhenActorLeftRoom();
    	}
    	  
    	  
        this.updateRoomInfo();
    };
    photonManager.prototype.suspendRoom = function () {
  	  
    	console.log("suspendRoom");
    
    };
    
    photonManager.prototype.sendMessage = function (message) {
        try {
            this.raiseEvent(1, { message: message, senderName: "user" + this.myActor().actorNr });
        }
        catch (err) {
          // console.log("error: " + err.message);
        }
    };

    
   
    photonManager.prototype.onEventCreateRoom = function(facebookID,option){
    	 var _this = this;
	    	if (_this.isInLobby()) {
	           
	            console.log("New Game");
	            _this.createRoom(facebookID,option);
	            level.resultDuel ="New Game";
	           // console.log("My Room Name "+_this.myRoom().name);
	        }
	        else {
                level.resultDuel ="Reload page to connect to Master";
                //Proccess when create Room Failed
                level.f_grpMapDuel.createRoomAgain(facebookID,option);
	            console.log("Reload page to connect to Master");
	        }
    }
    
    photonManager.prototype.onEventJoinRandomGame = function(){
  	  var _this = this;
	  	if (_this.isInLobby()) {
	        
	          console.log("Join Game");
	          _this.joinRandomRoom();
	      }
	      else {
	         // console.log("Reload page to connect to Master");
	      }
  }
    
    
   
    
    photonManager.prototype.onEventSendMessage = function(message){
    	var _this = this; 
    	  if (_this.isJoinedToRoom()) {
              _this.sendMessage(message);
          }
          else {
              if (_this.isInLobby()) {
                 // console.log("Press Join or New Game to connect to Game");
              }
              else {
            	 // console.log("Reload page to connect to Master");
              }
          }
    }
    
    
    photonManager.prototype.onRaiseEvent = function(eventCode,data,options){
    	var _this = this; 
    	  if (_this.isJoinedToRoom()) {
              _this.raiseEvent(eventCode,data,options);
          }
          else {
              if (_this.isInLobby()) {
                 // console.log("Press Join or New Game to connect to Game");
              }
              else {
            	 // console.log("Reload page to connect to Master");
              }
          }
    }
    
   
    
    photonManager.prototype.searchRoom = function(){
    	var _this = this; 

    }
    
    photonManager.prototype.getMyRoom = function(){
    	return this.myRoom() ;

    }
    
    photonManager.prototype.getListRoom = function(){
    	return this.availableRooms() ;

    }
    
    photonManager.prototype.isJoinRoom = function(){
    	return this.isJoinedToRoom();

    }
    
    photonManager.prototype.joinRoomFollowName = function(nameRoom,option){
    	var _this =this;
  	  	if (_this.isInLobby()) {
  	        this.joinRoom(nameRoom,option);
  	      return true;
  	      }
  	      else {
  	          console.log("Reload page to connect to Master");
  	        return false;
  	      }
    	
  	  	return false;
    }
    
    photonManager.prototype.updateRoomButtons = function () {
      
     //   btn.disabled = !(this.isInLobby() && !this.isJoinedToRoom());
        var canJoin = this.isInLobby() && !this.isJoinedToRoom() && this.availableRooms().length > 0;
      //  btn = document.getElementById("joingamebtn");
      //  btn.disabled = !canJoin;
      //  btn = document.getElementById("joinrandomgamebtn");
      //  btn.disabled = !canJoin;
       // btn = document.getElementById("leavebtn");
      //  btn.disabled = !(this.isJoinedToRoom());
    };
    return photonManager;
}(Photon.LoadBalancing.LoadBalancingClient));

