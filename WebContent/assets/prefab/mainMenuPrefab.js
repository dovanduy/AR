
// -- user code here --

/* --- start generated code --- */

// Generated by  1.5.0 (Phaser v2.6.2)


/**
 * mainMenuPrefab.
 * @param {Phaser.Game} aGame A reference to the currently running game.
 * @param {Phaser.Group} aParent The parent Group (or other {@link DisplayObject}) that this group will be added to.
    If undefined/unspecified the Group will be added to the {@link Phaser.Game#world Game World}; if null the Group will not be added to any parent.
 * @param {string} aName A name for this group. Not used internally but useful for debugging.
 * @param {boolean} aAddToStage If true this group will be added directly to the Game.Stage instead of Game.World.
 * @param {boolean} aEnableBody If true all Sprites created with {@link #create} or {@link #createMulitple} will have a physics body created on them. Change the body type with {@link #physicsBodyType}.
 * @param {number} aPhysicsBodyType The physics body type to use when physics bodies are automatically added. See {@link #physicsBodyType} for values.
 */
function mainMenuPrefab(aGame, aParent, aName, aAddToStage, aEnableBody, aPhysicsBodyType) {
	
	Phaser.Group.call(this, aGame, aParent, aName, aAddToStage, aEnableBody, aPhysicsBodyType);
	var _grp_Control = this.game.add.group(this);
	
	var _btn_infor = this.game.add.button(530.0, 980.0, 'HUDAtlas', null, this, null, 'bt_shop', null, null, _grp_Control);
	
	var _btn_leaderBoard = this.game.add.button(7.0, 980.0, 'HUDAtlas', null, this, null, 'bt_leaderboard', null, null, _grp_Control);
	
	var _btn_worldMap = this.game.add.button(20.0, 289.0, 'HUDAtlas', null, this, null, 'bt_playduel', null, null, _grp_Control);
	
	var _btn_home = this.game.add.button(362.0, 289.0, 'HUDAtlas', null, this, null, 'bt_playduel', null, null, _grp_Control);
	
	var _txt_playSingle = this.game.add.text(349.0, 1704.0, 'PLAY SINGLE', {"font":"bold 40px Arial","fill":"#ffffff"}, _grp_Control);
	_txt_playSingle.anchor.setTo(0.5, 0.0);
	
	var _txt_playWF = this.game.add.text(524.0, 357.0, 'FRIEND', {"font":"bold 40px Arial","fill":"#ffffff"}, _grp_Control);
	_txt_playWF.anchor.setTo(0.5, 0.0);
	
	var _txt_playDuel = this.game.add.text(183.0, 357.0, 'DUEL', {"font":"bold 40px Arial","fill":"#fefb00"}, _grp_Control);
	_txt_playDuel.anchor.setTo(0.5, 0.0);
	
	var _home = this.game.add.group(this);
	_home.position.setTo(-2.0, -177.0);
	
	var _btn_duel_chooseMap = this.game.add.button(56.0, 770.0, 'EnvironmentAtlas', null, this, null, 'button', null, null, _home);
	
	var _btn_playSingle = this.game.add.button(65.0, 760.0, 'EnvironmentAtlas', null, this, null, 'button', null, null, _home);
	
	var _btn_play_with_friend = this.game.add.button(65.0, 910.0, 'EnvironmentAtlas', null, this, null, 'button', null, null, _home);
	
	var _BG_Empty1 = this.game.add.sprite(12.0, 248.0, 'BG_Empty', null, _home);
	_BG_Empty1.scale.setTo(0.965, 0.2);
	
	var _avatar_frame = this.game.add.sprite(84.0, 263.0, 'EnvironmentAtlas', 'avatar frame', _home);
	
	var _avatar_Other_Player = this.game.add.sprite(465.0, 263.0, 'EnvironmentAtlas', 'avatar frame', _home);
	
	var _icon_other_Player = this.game.add.sprite(545.0, 343.0, 'EnvironmentAtlas', 'earth icon', _home);
	_icon_other_Player.anchor.setTo(0.5, 0.5);
	
	var _profile_Picture = this.game.add.sprite(163.0, 343.0, 'profile_sample', null, _home);
	_profile_Picture.anchor.setTo(0.5, 0.5);
	
	var _Level_Bar_ = this.game.add.sprite(118.0, 418.0, 'HUDAtlas', 'Level_Bar_1', _home);
	_Level_Bar_.scale.setTo(0.8, 0.8);
	
	var _Level_Bar_1 = this.game.add.sprite(118.0, 419.0, 'HUDAtlas', 'Level_Bar_2', _home);
	_Level_Bar_1.scale.setTo(0.8, 0.8);
	
	var _BT_level = this.game.add.sprite(99.0, 411.0, 'HUDAtlas', 'BT_level', _home);
	_BT_level.scale.setTo(0.8, 0.8);
	
	var _txt_other_player_name = this.game.add.text(552.0, 485.0, 'Random Player', {"font":"bold 30px Arial","fill":"#ffffff"}, _home);
	_txt_other_player_name.anchor.setTo(0.5, 0.5);
	
	var _txt_player_name = this.game.add.text(94.0, 485.0, 'Random Player', {"font":"bold 30px Arial","fill":"#ffffff","align":"center"}, _home);
	_txt_player_name.anchor.setTo(0.5, 0.5);
	
	var _txt_playDuel_1 = this.game.add.text(178.0, 483.0, 'PLAY', {"font":"bold 40px Arial","fill":"#fefb00"}, _home);
	_txt_playDuel_1.anchor.setTo(0.5, 0.0);
	
	var _txt_playWF_1 = this.game.add.text(518.0, 483.0, 'FRIEND', {"font":"bold 40px Arial","fill":"#ffffff"}, _home);
	_txt_playWF_1.anchor.setTo(0.5, 0.0);
	
	var _txt_VS = this.game.add.text(353.0, 347.0, 'VS', {"font":"bold 80px Arial","fill":"#ffffff","align":"center"}, _home);
	_txt_VS.anchor.setTo(0.5, 0.5);
	
	var _txt_level_index = this.game.add.text(119.0, 433.0, '0', {"font":"bold 20px Arial","fill":"#ffffff"}, _home);
	_txt_level_index.anchor.setTo(0.5, 0.5);
	
	var _Setting = this.game.add.group(this);
	_Setting.position.setTo(860.0, -63.0);
	
	var _setting_BG = this.game.add.sprite(-19.0, 53.0, 'setting BG', null, _Setting);
	_setting_BG.scale.setTo(1.05, 1.0);
	
	var _btn_music = this.game.add.button(87.0, 279.0, 'HUDAtlas', null, this, null, 'button 02', null, null, _Setting);
	
	var _btn_sound = this.game.add.button(87.0, 432.0, 'HUDAtlas', null, this, null, 'button 02', null, null, _Setting);
	
	var _btn_terms = this.game.add.button(87.0, 747.0, 'HUDAtlas', null, this, null, 'button 01', null, null, _Setting);
	
	var _setting_bar = this.game.add.sprite(-15.0, 68.0, 'HUD2Atlas', 'setting bar', _Setting);
	_setting_bar.scale.setTo(1.05, 1.0);
	
	var _btn_close_Setting = this.game.add.button(643.0, 99.0, 'HUDAtlas', null, this, null, 'close button', null, null, _Setting);
	
	var _txt_terms = this.game.add.text(113.0, 767.0, 'Terms of Use & Privacy Policy', {"font":"bold 35px Arial","fill":"#ffffff"}, _Setting);
	_txt_terms.anchor.setTo(0.5, 0.0);
	
	var _txt_SOUND = this.game.add.text(220.0, 463.0, 'Sound On/Off', {"font":"60px Arial","fill":"#ffffff"}, _Setting);
	_txt_SOUND.anchor.setTo(0.5, 0.0);
	
	var _sfx_on = this.game.add.sprite(104.0, 460.0, 'HUDAtlas', 'sfx on', _Setting);
	_sfx_on.animations.add('on', ['sfx on'], 60, false);
	_sfx_on.animations.add('off', ['sfx off'], 60, false);
	
	var _sound_on = this.game.add.sprite(100.0, 307.0, 'HUDAtlas', 'sound on', _Setting);
	_sound_on.animations.add('on', ['sound on'], 60, false);
	_sound_on.animations.add('off', ['sound off'], 60, false);
	
	var _txt_MUSIC = this.game.add.text(216.0, 308.0, 'Music On/Off', {"font":"60px Arial","fill":"#ffffff"}, _Setting);
	_txt_MUSIC.anchor.setTo(0.5, 0.0);
	
	this.game.add.text(138.0, 875.0, 'archersupport@skyvu.com', {"font":"bold 35px Arial","fill":"#ffffff"}, _Setting);
	
	this.game.add.text(140.0, 929.0, 'User ID:', {"font":"bold 35px Arial","fill":"#ffffff"}, _Setting);
	
	var _txt_ID = this.game.add.text(272.0, 929.0, '123456789', {"font":"bold 35px Arial","fill":"#ffffff"}, _Setting);
	
	var _txt_Setting_title = this.game.add.text(221.0, 106.0, 'SETTINGS', {"font":"bold 60px Arial","fill":"#ffffff"}, _Setting);
	_txt_Setting_title.anchor.setTo(0.5, 0.0);
	
	var _btn_Language = this.game.add.button(89.0, 583.0, 'HUDAtlas', null, this, null, 'button 02', null, null, _Setting);
	
	var _txt_language = this.game.add.text(219.0, 610.0, 'Language', {"font":"60px Arial","fill":"#ffffff"}, _Setting);
	_txt_language.anchor.setTo(0.5, 0.0);
	
	var _Top_bar = this.game.add.group(this);
	
	this.game.add.sprite(0.0, -4.0, 'HUDAtlas', 'top bar', _Top_bar);
	
	var _item_coin_bar = this.game.add.sprite(500.0, 5.0, 'HUD2Atlas', 'iterm bar', _Top_bar);
	
	var _item_gem_bar = this.game.add.sprite(272.0, 4.0, 'HUD2Atlas', 'iterm bar', _Top_bar);
	
	this.game.add.sprite(472.0, 6.0, 'HUDAtlas', 'coin', _Top_bar);
	
	this.game.add.sprite(239.0, -7.0, 'HUDAtlas', 'diamond', _Top_bar);
	
	var _btn_coin_lus = this.game.add.button(602.0, 5.0, 'HUDAtlas', null, this, null, 'plus button', null, null, _Top_bar);
	
	var _btn_gem_plus = this.game.add.button(376.0, 5.0, 'HUDAtlas', null, this, null, 'plus button', null, null, _Top_bar);
	
	var _btn_setting = this.game.add.button(31.0, 3.0, 'HUDAtlas', null, this, null, 'setting button', null, null, _Top_bar);
	
	var _txt_gem = this.game.add.text(329.0, 31.0, '0', {"font":"bold 25px Arial","fill":"#ffffff"}, _Top_bar);
	_txt_gem.anchor.setTo(0.5, 0.5);
	
	var _txt_coin = this.game.add.text(561.0, 32.0, '0', {"font":"bold 25px Arial","fill":"#ffffff"}, _Top_bar);
	_txt_coin.anchor.setTo(0.5, 0.5);
	
	var _grp_Language = this.game.add.group(this);
	_grp_Language.position.setTo(1703.0, -64.0);
	
	this.game.add.sprite(4.0, 53.0, 'BG_Empty', null, _grp_Language);
	
	var _btn_english = this.game.add.button(171.0, 240.0, 'HUDAtlas', null, this, null, 'button 01', null, null, _grp_Language);
	_btn_english.scale.setTo(0.7, 1.0);
	
	var _txt_english = this.game.add.text(299.0, 260.0, 'English', {"font":"bold 35px Arial","fill":"#ffffff"}, _grp_Language);
	_txt_english.anchor.setTo(0.5, 0.0);
	
	var _language_bar = this.game.add.sprite(5.0, 68.0, 'HUD2Atlas', 'setting bar', _grp_Language);
	
	var _btn_close_Language = this.game.add.button(633.0, 99.0, 'HUDAtlas', null, this, null, 'close button', null, null, _grp_Language);
	
	var _txt_language_Title = this.game.add.text(191.0, 106.0, 'LANGUAGE', {"font":"bold 60px Arial","fill":"#ffffff"}, _grp_Language);
	_txt_language_Title.anchor.setTo(0.5, 0.0);
	
	var _btn_spanish = this.game.add.button(173.0, 340.0, 'HUDAtlas', null, this, null, 'button 01', null, null, _grp_Language);
	_btn_spanish.scale.setTo(0.7, 1.0);
	
	var _txt_spanish = this.game.add.text(301.0, 360.0, 'English', {"font":"bold 35px Arial","fill":"#ffffff"}, _grp_Language);
	_txt_spanish.anchor.setTo(0.5, 0.0);
	
	var _btn_VI = this.game.add.button(172.0, 440.0, 'HUDAtlas', null, this, null, 'button 01', null, null, _grp_Language);
	_btn_VI.scale.setTo(0.7, 1.0);
	
	var _txt_vi = this.game.add.text(300.0, 460.0, 'Vietnamese', {"font":"bold 35px Arial","fill":"#ffffff"}, _grp_Language);
	_txt_vi.anchor.setTo(0.5, 0.0);
	
	var _btn_portuguese = this.game.add.button(176.0, 540.0, 'HUDAtlas', null, this, null, 'button 01', null, null, _grp_Language);
	_btn_portuguese.scale.setTo(0.7, 1.0);
	
	var _txt_portuguese = this.game.add.text(304.0, 560.0, 'portuguese', {"font":"bold 35px Arial","fill":"#ffffff"}, _grp_Language);
	_txt_portuguese.anchor.setTo(0.5, 0.0);
	
	var _btn_thaiLand = this.game.add.button(176.0, 640.0, 'HUDAtlas', null, this, null, 'button 01', null, null, _grp_Language);
	_btn_thaiLand.scale.setTo(0.7, 1.0);
	
	var _txt_thaiLand = this.game.add.text(394.0, 660.0, 'portuguese', {"font":"bold 35px Arial","fill":"#ffffff"}, _grp_Language);
	_txt_thaiLand.anchor.setTo(0.5, 0.0);
	
	var _btn_french = this.game.add.button(176.0, 740.0, 'HUDAtlas', null, this, null, 'button 01', null, null, _grp_Language);
	_btn_french.scale.setTo(0.7, 1.0);
	
	var _txt_french = this.game.add.text(406.0, 760.0, 'portuguese', {"font":"bold 35px Arial","fill":"#ffffff"}, _grp_Language);
	_txt_french.anchor.setTo(0.5, 0.0);
	
	var _btn_polish = this.game.add.button(176.0, 840.0, 'HUDAtlas', null, this, null, 'button 01', null, null, _grp_Language);
	_btn_polish.scale.setTo(0.7, 1.0);
	
	var _txt_polish = this.game.add.text(389.0, 860.0, 'portuguese', {"font":"bold 35px Arial","fill":"#ffffff"}, _grp_Language);
	_txt_polish.anchor.setTo(0.5, 0.0);
	
	var _btn_taiwan = this.game.add.button(176.0, 940.0, 'HUDAtlas', null, this, null, 'button 01', null, null, _grp_Language);
	_btn_taiwan.scale.setTo(0.7, 1.0);
	
	var _txt_taiwan = this.game.add.text(365.0, 960.0, 'portuguese', {"font":"bold 35px Arial","fill":"#ffffff"}, _grp_Language);
	_txt_taiwan.anchor.setTo(0.5, 0.0);
	
	var __grp_nofti_add_gem = this.game.add.group(this);
	__grp_nofti_add_gem.position.setTo(-1052.0, -529.0);
	
	var _bg_nofti_add_gem = this.game.add.sprite(10.0, 386.0, 'EnvironmentAtlas', 'avatar bar', __grp_nofti_add_gem);
	
	var _btn_close_nofti_add_gem = this.game.add.button(653.0, 365.0, 'HUDAtlas', null, this, null, 'close button', null, null, __grp_nofti_add_gem);
	
	var _txt_nofti_desktop_device = this.game.add.text(116.0, 434.0, 'Play Single to get more gems', {"font":"bold 30px Arial","fill":"#ffffff"}, __grp_nofti_add_gem);
	_txt_nofti_desktop_device.anchor.setTo(0.5, 0.0);
	
	var _txt_nofti_mobile_device = this.game.add.text(159.0, 417.0, 'Play Single and Watch Video\nto get more gems', {"font":"bold 30px Arial","fill":"#ffffff","align":"center"}, __grp_nofti_add_gem);
	_txt_nofti_mobile_device.anchor.setTo(0.5, 0.0);
	
	var _btn_watch_Video = this.game.add.button(57.0, 512.0, 'HUDAtlas', null, this, null, 'button 02', null, null, __grp_nofti_add_gem);
	_btn_watch_Video.scale.setTo(0.5, 0.7);
	
	var _txt_watch_Video = this.game.add.text(191.0, 538.0, 'Watch Video', {"font":"bold 30px Arial","fill":"#ffffff","align":"center"}, __grp_nofti_add_gem);
	_txt_watch_Video.anchor.setTo(0.5, 0.0);
	
	var _btn_play_Single = this.game.add.button(393.0, 511.0, 'HUDAtlas', null, this, null, 'button 02', null, null, __grp_nofti_add_gem);
	_btn_play_Single.scale.setTo(0.5, 0.7);
	
	var _txt_play_Single = this.game.add.text(533.0, 556.0, 'Play Single\n', {"font":"bold 30px Arial","fill":"#ffffff","align":"center"}, __grp_nofti_add_gem);
	_txt_play_Single.anchor.setTo(0.5, 0.5);
	
	var _txt_nofti_show_reward_video_failed = this.game.add.text(360.0, 622.0, 'Can’t load Video', {"font":"bold 30px Arial","fill":"#ff2600","stroke":"#ff2600"}, __grp_nofti_add_gem);
	_txt_nofti_show_reward_video_failed.anchor.setTo(0.5, 0.0);
	
	
	
	// public fields
	
	this.fGrp_Control = _grp_Control;
	this.fBtn_infor = _btn_infor;
	this.fBtn_leaderBoard = _btn_leaderBoard;
	this.fBtn_worldMap = _btn_worldMap;
	this.fBtn_home = _btn_home;
	this.fTxt_playSingle = _txt_playSingle;
	this.fTxt_playWF = _txt_playWF;
	this.fTxt_playDuel = _txt_playDuel;
	this.fHome = _home;
	this.fBtn_duel_chooseMap = _btn_duel_chooseMap;
	this.fBtn_playSingle = _btn_playSingle;
	this.fBtn_play_with_friend = _btn_play_with_friend;
	this.fAvatar_frame = _avatar_frame;
	this.fAvatar_Other_Player = _avatar_Other_Player;
	this.fIcon_other_Player = _icon_other_Player;
	this.fProfile_Picture = _profile_Picture;
	this.fLevel_Bar_1 = _Level_Bar_1;
	this.fTxt_other_player_name = _txt_other_player_name;
	this.fTxt_player_name = _txt_player_name;
	this.fTxt_playDuel_1 = _txt_playDuel_1;
	this.fTxt_playWF_1 = _txt_playWF_1;
	this.fTxt_level_index = _txt_level_index;
	this.fSetting = _Setting;
	this.fBtn_music = _btn_music;
	this.fBtn_sound = _btn_sound;
	this.fBtn_terms = _btn_terms;
	this.fSetting_bar = _setting_bar;
	this.fBtn_close_Setting = _btn_close_Setting;
	this.fTxt_terms = _txt_terms;
	this.fTxt_SOUND = _txt_SOUND;
	this.fSfx_on = _sfx_on;
	this.fSound_on = _sound_on;
	this.fTxt_MUSIC = _txt_MUSIC;
	this.fTxt_ID = _txt_ID;
	this.fTxt_Setting_title = _txt_Setting_title;
	this.fBtn_Language = _btn_Language;
	this.fTxt_language = _txt_language;
	this.fItem_coin_bar = _item_coin_bar;
	this.fItem_gem_bar = _item_gem_bar;
	this.fBtn_coin_lus = _btn_coin_lus;
	this.fBtn_gem_plus = _btn_gem_plus;
	this.fBtn_setting = _btn_setting;
	this.fTxt_gem = _txt_gem;
	this.fTxt_coin = _txt_coin;
	this.fGrp_Language = _grp_Language;
	this.fBtn_english = _btn_english;
	this.fTxt_english = _txt_english;
	this.fLanguage_bar = _language_bar;
	this.fBtn_close_Language = _btn_close_Language;
	this.fTxt_language_Title = _txt_language_Title;
	this.fBtn_spanish = _btn_spanish;
	this.fTxt_spanish = _txt_spanish;
	this.fBtn_VI = _btn_VI;
	this.fTxt_vi = _txt_vi;
	this.fBtn_portuguese = _btn_portuguese;
	this.fTxt_portuguese = _txt_portuguese;
	this.fBtn_thaiLand = _btn_thaiLand;
	this.fTxt_thaiLand = _txt_thaiLand;
	this.fBtn_french = _btn_french;
	this.fTxt_french = _txt_french;
	this.fBtn_polish = _btn_polish;
	this.fTxt_polish = _txt_polish;
	this.fBtn_taiwan = _btn_taiwan;
	this.fTxt_taiwan = _txt_taiwan;
	this.f_grp_nofti_add_gem = __grp_nofti_add_gem;
	this.fBg_nofti_add_gem = _bg_nofti_add_gem;
	this.fBtn_close_nofti_add_gem = _btn_close_nofti_add_gem;
	this.fTxt_nofti_desktop_device = _txt_nofti_desktop_device;
	this.fTxt_nofti_mobile_device = _txt_nofti_mobile_device;
	this.fBtn_watch_Video = _btn_watch_Video;
	this.fTxt_watch_Video = _txt_watch_Video;
	this.fBtn_play_Single = _btn_play_Single;
	this.fTxt_play_Single = _txt_play_Single;
	this.fTxt_nofti_show_reward_video_failed = _txt_nofti_show_reward_video_failed;
	
	this.Create();
	
}

/** @type Phaser.Group */
var mainMenuPrefab_proto = Object.create(Phaser.Group.prototype);
mainMenuPrefab.prototype = mainMenuPrefab_proto;
mainMenuPrefab.prototype.constructor = mainMenuPrefab;

/* --- end generated code --- */
// -- user code here --

mainMenuPrefab.prototype.Init = function(level){
	
	this.level = level;
}
mainMenuPrefab.prototype.Create = function(){
	 


	GlobalSetting.currentMenuState = MENUSTATE.WORLDMAP;

	this.fSetting.position.setTo(0,0);
	this.currentControlButton = -1;
	this.prevControlButton = -1;
	this.controlButtons = new Array();
	this.controlButtons.push(this.fBtn_worldMap);
	this.controlButtons.push(this.fBtn_home);
	this.controlButtons.push(this.fBtn_leaderBoard);
	this.controlButtons.push(this.fBtn_infor);
	

	
	this.fBtn_home.onInputUp.add(this.onEventHome,this);
	this.fBtn_infor.onInputUp.add(this.onEventInfor,this);
	this.fBtn_leaderBoard.onInputUp.add(this.onEventLeaderBoard,this);
	this.fBtn_worldMap.onInputUp.add(this.onEventWorldMap,this);

	
	//Add Event plus
	this.fBtn_gem_plus.onInputUp.add(this.OnEventAddGems,this);
	this.fBtn_coin_lus.onInputUp.add(this.OnEventAddCoins,this);
	//Event Setting
	this.fBtn_setting.onInputUp.add(this.onEventSetting,this);
	this.fBtn_close_Setting.onInputUp.add(this.onEventCloseSetting,this);
	//Event Language
	this.fBtn_close_Language.onInputUp.add(this.onEventCloseLanguage,this);
	
	this.fBtn_music.onInputUp.add(this.onEventMusic,this);
	this.fBtn_sound.onInputUp.add(this.onEventSound,this);
	this.fBtn_terms.onInputUp.add(this.onEventTerms,this);
	this.fBtn_Language.onInputUp.add(this.onEventLanguage,this);
	
	this.fBtn_playSingle.onInputUp.add(this.onEventPlaySingle,this);
	this.fBtn_play_Single.onInputUp.add(this.onEventPlaySingle,this);
	this.fBtn_duel_chooseMap.onInputUp.add(this.onEventDuelChooseMap,this);
	this.fBtn_play_with_friend.onInputUp.add(this.onEventPlayWithFriend,this);
	this.fSetting.visible = false;
	
	this.prevMenuState = GlobalSetting.currentMenuState;
	
	this.fBtn_english.onInputUp.add(function(){this.onEventSelectLanguage(0)},this);
	this.fBtn_spanish.onInputUp.add(function(){this.onEventSelectLanguage(1)},this);
	this.fBtn_VI.onInputUp.add(function(){this.onEventSelectLanguage(2)},this);
	this.fBtn_portuguese.onInputUp.add(function(){this.onEventSelectLanguage(3)},this);
	this.fBtn_thaiLand.onInputUp.add(function(){this.onEventSelectLanguage(4)},this);
	this.fBtn_french.onInputUp.add(function(){this.onEventSelectLanguage(5)},this);
	this.fBtn_polish.onInputUp.add(function(){this.onEventSelectLanguage(6)},this);
	this.fBtn_taiwan.onInputUp.add(function(){this.onEventSelectLanguage(7)},this);
	this.fGrp_Language.visible = false;
	this.fGrp_Language.position.setTo(0,0);
	
	this.f_grp_nofti_add_gem.visible = false;
	this.f_grp_nofti_add_gem.position.setTo(0,0);
	
	this.fBtn_close_nofti_add_gem.onInputUp.add(this.onEventCloseNoftiAddGem,this);
	this.fBtn_watch_Video.onInputUp.add(this.onEventWatchVideo,this);
	this.fTxt_player_name.text = facebookStuff.name;
	if(localData.FacebookID != null || localData.FacebookID!=undefined)
	//this.fTxt_ID.text = localData.FacebookID;
	if(game.PlayFab.settings.PlayFabId != null || game.PlayFab.settings.PlayFabId!=undefined)
	this.fTxt_ID.text =game.PlayFab.settings.PlayFabId;

	this.fTxt_MUSIC.text ="MUSIC ON";
	this.fTxt_SOUND.text ="SOUND ON";

	
	if(this.game.device.desktop){
		this.fTxt_nofti_mobile_device.visible = false;
		this.fTxt_watch_Video.visible = false;
		this.fBtn_watch_Video.visible = false;
		this.fBtn_play_Single.position.setTo(220,this.fBtn_play_Single.y);
	
	}
	else{
		this.fTxt_nofti_desktop_device.visible = false;
	}
	
	this.fTxt_nofti_show_reward_video_failed.visible = false;
	
	this.updateTextAlignCenter();

	this.isSaveFriendFBId   = false;
	this.isOutClick  =false;

	this.fTxt_player_name.visible = false;
	this.fTxt_other_player_name.visible =false;
	this.fBtn_playSingle.visible = false;
	this.fBtn_play_with_friend.visible = false;
	this.fBtn_duel_chooseMap.visible = false;


	this.levelBarWidth = this.fLevel_Bar_1.width;
	var cropRect = new Phaser.Rectangle(0, 0, 0, this.fLevel_Bar_1.height);
	this.fLevel_Bar_1.crop(cropRect);



	setTimeout(function () {
	   //Update Level index and level bar
	   level.f_grpMainMenuPrefab.fTxt_level_index.text = localData.currentLevel;
 	   var cropRect = new Phaser.Rectangle(0, 0, level.f_grpInforPrefab.fillAmountLevel * level.f_grpMainMenuPrefab.levelBarWidth, level.f_grpMainMenuPrefab.fLevel_Bar_1.height);
 	   level.f_grpMainMenuPrefab.fLevel_Bar_1.crop(cropRect);
    }, 10);

}






mainMenuPrefab.prototype.onEventWatchVideo = function(){
	level.caseWatchRewardVideo = 2;
	FBshowRewardedVideo();
 

}
mainMenuPrefab.prototype.onEventSelectLanguage = function(languageIndex){
	
	localData.languageIndex = languageIndex;
	level.Language.updateLanguage(languageIndex);
	level.saveData();
}
mainMenuPrefab.prototype.onEventCloseNoftiAddGem = function(){
	GlobalSetting.currentMenuState = MENUSTATE.WORLDMAP;
	//this.f_grp_nofti_add_gem.visibile  =false;
	 
	game.state.start("Level");
	
}

mainMenuPrefab.prototype.onEventCloseLanguage = function(){
	this.fGrp_Language.visible = false;

}

mainMenuPrefab.prototype.onEventLanguage = function(){
	GlobalSetting.currentMenuState = MENUSTATE.LANGUAGE;
	this.fGrp_Language.visible = true;

}

mainMenuPrefab.prototype.onEventMusic = function(){
	if(GlobalSetting.currentMenuState === MENUSTATE.LANGUAGE) return;
	if(GlobalSetting.BGMVolume === 0 ){
		GlobalSetting.BGMVolume = 1;
		this.fSound_on.animations.play("on");
	}
	else{
		GlobalSetting.BGMVolume = 0;
		this.fSound_on.animations.play("off");

	}
	if(GlobalSetting.BGM !=undefined)
	GlobalSetting.BGM.volume = GlobalSetting.BGMVolume;
	
	//Update Text
	level.Language.updateMusicText(GlobalSetting.BGMVolume);
}
mainMenuPrefab.prototype.onEventSound = function(){
	if(GlobalSetting.currentMenuState === MENUSTATE.LANGUAGE) return;
	if(GlobalSetting.SEVolume === 0 ){
		GlobalSetting.SEVolume = 1;
		this.fSfx_on.animations.play("on");
	}
	else{
		GlobalSetting.SEVolume = 0;
		this.fSfx_on.animations.play("off");
	
	}
	
	//Update Text
	level.Language.updateSoundText(GlobalSetting.SEVolume);
	
	
	
}
mainMenuPrefab.prototype.onEventPlaySingle = function(){
	if(GlobalSetting.currentMenuState === MENUSTATE.LANGUAGE) return;
	if(GlobalSetting.currentMenuState === MENUSTATE.IAP) return;
	userType = USERTYPE.MASTER;
	this.level.onPlayClick();
	level.f_grpMap.visible   =true;
	level.f_grpMap.showMap(4);
	this.level.setPlayMode(PLAYMODE.SINGLE);
	playMode = PLAYMODE.SINGLE;
	level.f_grpWorldMapScene.setCurrentStage();
}



mainMenuPrefab.prototype.onEventPlayWithFriend= function(){
	if(GlobalSetting.currentMenuState === MENUSTATE.LANGUAGE) return;
	if(GlobalSetting.currentMenuState === MENUSTATE.IAP) return;
	GlobalSetting.preventClickButtonWorldMap = true;
	var context = FBInstant.context.getID();
	var contextType = FBInstant.context.getType();
	//console.log("contextType " +contextType);
	console.log("contextID " +context);
	
	
	if (contextType === "SOLO") {
		FBInstant.context
			.chooseAsync()
			.then(function () {
				console.log("chooseAsync 1");
				sendMessagePlayWithFriend();
			});
	} else if (contextType === "THREAD") {
		FBInstant.context
			.chooseAsync()
			.then(function () {
				console.log("chooseAsync 2");
				sendMessagePlayWithFriend();

				
			}, function () {
				console.log("chooseAsync 3");
				sendMessagePlayWithFriend();

		
			});
	}
}


function sendMessagePlayWithFriend (){
	

	isFriendCall  = false;
	var picture = level.ImageBase64.imageLogoSendMessage;

	var competitorName = FBInstant.player.getName();
	var id = FBInstant.player.getID();
	var challengeMessage =  competitorName + " is online NOW and challenging you to a duel";
	var acceptMessage =  "Accept "+FBInstant.player.getName()+"'s challenge " ;
	level.f_grpMainMenuPrefab.visibleButtonControl(false);
	level.f_grpMainMenuPrefab.visibleButtonHome(false);
	FBInstant.updateAsync({
		action: 'CUSTOM',
		cta : acceptMessage ,
		image: picture,
		text: {
			default: challengeMessage,
			localizations: {
				en_US: challengeMessage,
			}
		},
		template: 'WORD_PLAYED',
		data: {
			CompetitorName: competitorName,
			Id:id
		},
		strategy: 'IMMEDIATE', //IMMEDIATE_CLEAR
		notification: 'PUSH',
	}).then(function () {
		console.log('Message was sent successfully ' );
		//Create Room private and wait friend join room
		
		
		//when Invite friend will 3 case :
		
		
		//1 . You have played the game with you before
		var contextPlayers = FBInstant.context.getPlayersAsync()
		  .then(function(players,error) {
			  console.log("players length " +players.length);
			  for(var i=0;i<players.length;i++){
				  console.log("FBInstant.player.getID() " +FBInstant.player.getID());
				  console.log("players[i].getID() " +players[i].getID());
				  console.log("players[i].getName() " +players[i].getName());
				  
				  if(FBInstant.player.getID()!= players[i].getID()){
					  //get name friend
					  level.f_grpMapDuel.fTxt_other_player_name_wait.text =players[i].getName();
					  
					  //get photo
					  for(var j=0;j<friendListID.length;j++){
						 
						  if(friendListID[j]===players[i].getID()){
								level.f_grpMapDuel.fOther_Picture_wait.loadTexture("friend"+players[i].getID() );
								level.f_grpMapDuel.fOther_Picture_wait.width = 148;
								level.f_grpMapDuel.fOther_Picture_wait.height = 143;
								
								level.f_grpMapDuel.createRoomWithFriend(players[i].getID());
								console.log("Create Room 1");
								return;
						  }
					  }
				  }
				
			  }



			  
			  //2. friend was play game but no get Player Async

			  var context = FBInstant.context.getID();
			  console.log("contextID " +context);
			  console.log("contextID length" +context.length);
			  //Check length of context ID
			  var contextID = context ;
			  if(context.length >16){
				contextID = "";
				for(var i = 1 ;i<context.length ; i++){
					contextID += context[i];
				}
				console.log("contextID 1  " +contextID);
				contextID  = parseInt(contextID);
				console.log("contextID 2 " +contextID);
			}



			if(localData.contextIDs!= null ||localData.contextIDs!=undefined){
			  //check contextID in list
			  for(var i = 0 ;i<localData.contextIDs.length;i++){
				
				  if(localData.contextIDs[i] === contextID){
					  //if ID context have in list
					  if(localData.friendIDs[i] != -1){
						

						  //get photo
						  for(var j=0;j<friendListID.length;j++){
						 
							if(friendListID[j]===localData.friendIDs[i]){
								  level.f_grpMapDuel.fOther_Picture_wait.loadTexture("friend"+localData.friendIDs[i] );
								  level.f_grpMapDuel.fOther_Picture_wait.width = 148;
								  level.f_grpMapDuel.fOther_Picture_wait.height = 143;
								  console.log("Create Room 4");
								//Create room with friend ID
								level.f_grpMapDuel.createRoomWithFriend(localData.friendIDs[i]);
								  return;
							}
						}
						
					
					  }
					  else{

						console.log("Create Room 5");
						//Create room with my ID
						level.f_grpMapDuel.createRoomWithFriend(FBInstant.player.getID());
						return;
					  }
				  }
				 
			  }
			}


			  console.log("Create Room 3");

 				//3. Create Room if 2 case failed
			  	//if this is new ID context
				//Save new Context ID
				localData.contextIDs.push(contextID);
				this.isSaveFriendFBId = true;

				//Create room with my ID
				level.f_grpMapDuel.createRoomWithFriend(FBInstant.player.getID());
			
		  });
		
		
		
	
		
		 
		
		

	}).catch(function(){console.log("Error Send Message")});
	
	
}

mainMenuPrefab.prototype.onEventDuelChooseMap = function(){
	if(GlobalSetting.currentMenuState === MENUSTATE.LANGUAGE) return;
	if(GlobalSetting.currentMenuState === MENUSTATE.IAP) return;
	//console.log("User ID " +GlobalSetting.photonManager.getUserId());
	this.level.setPlayMode(PLAYMODE.DUEL);
	playMode = PLAYMODE.DUEL;
	//Show map
	//this.fMap_duel.visible = true;
	//console.log("Show Map");
	this.level.f_grpMapDuel.visible  = true;
	this.fHome.visible =false;
	//Find Room
	this.level.f_grpMapDuel.visible  = true;
	this.level.f_grpMapDuel.openDuelMap();
	this.level.onEventMenuDuel();
	level.f_grpWorldMapScene.stopScroll();
	this.visibleButtonHome(false);
	this.visibleButtonControl(false);
	GlobalSetting.preventClickButtonWorldMap = true;

}
mainMenuPrefab.prototype.onEventTerms = function(){
	if(GlobalSetting.currentMenuState === MENUSTATE.LANGUAGE) return;
	GlobalSetting.currentMenuState = MENUSTATE.TERMS ;
	level.f_grp_Terms.visible = true;
	level.f_grp_Terms.visibleTerms(true);
}


mainMenuPrefab.prototype.onEventHome = function(){

	//Event Home To play with friend
	console.log("currentMenuState  "+GlobalSetting.currentMenuState);
	if(GlobalSetting.currentMenuState === MENUSTATE.ADDGEMS) return;
	if(GlobalSetting.currentMenuState === MENUSTATE.LANGUAGE) return;
	//When menu in setting cancel press button
	if(GlobalSetting.currentMenuState === MENUSTATE.SETTING||GlobalSetting.currentMenuState === MENUSTATE.IAP) return;
	this.activeControlButton(1);
	this.isOutClick  =true;
	 this.onEventPlayWithFriend();
	 
}

mainMenuPrefab.prototype.onEventInfor = function(){
	
	if(GlobalSetting.currentMenuState === MENUSTATE.ADDGEMS) return;
	if(GlobalSetting.currentMenuState === MENUSTATE.LANGUAGE) return;
	//When menu in setting cancel press button
	if(GlobalSetting.currentMenuState === MENUSTATE.SETTING||GlobalSetting.currentMenuState === MENUSTATE.IAP) return;
	if(!this.activeControlButton(3)) return;
	GlobalSetting.currentMenuState = MENUSTATE.INFOR ;
	level.f_grpLeaderBoardPrefab.scroller.kill();
	GlobalSetting.showPlayerInfor = true;
	this.level.onEventInfor();
	level.f_grpInforPrefab.onEventOpenInfor();


	


	this.visibleButtonHome(false);
	this.visibleButtonControl(false);
	this.level.f_grpMapDuel.visible  = false;
	this.level.f_grpMapDuel.visibileMenuDuel(false);


	level.f_grpWorldMapScene.stopScroll();
	level.f_grpWorldMapScene.visibleScene(false);

	this.isOutClick  =true;

	GlobalSetting.preventClickButtonWorldMap = true;

	setTimeout(function () {
	   GlobalSetting.preventClickButtonWorldMap = false;
   }, 1000);
}

mainMenuPrefab.prototype.onEventLeaderBoard = function(){
	
	if(GlobalSetting.currentMenuState === MENUSTATE.ADDGEMS) return;
	if(GlobalSetting.currentMenuState === MENUSTATE.LANGUAGE) return;
	//When menu in setting cancel press button
	if(GlobalSetting.currentMenuState === MENUSTATE.SETTING||GlobalSetting.currentMenuState === MENUSTATE.IAP) return;
	if(!this.activeControlButton(2)) return;
	GlobalSetting.currentMenuState = MENUSTATE.LEADERBOARD ;
	this.level.onEventLeaderBoard();
	this.visibleButtonHome(false);
	 this.level.f_grpMapDuel.visible = false;
	 this.level.f_grpMapDuel.visibileMenuDuel(false);
	 this.visibleButtonControl(true);
	 level.f_grpInforPrefab.onEventCloseInfor();
	 this.isOutClick  =true;
	 this.visibleButtonControl(false);
	 level.f_grpWorldMapScene.visible = false;
	 level.f_grpWorldMapScene.visibleScene(false);
	 level.f_grpWorldMapScene.scroller.stop();


	 GlobalSetting.preventClickButtonWorldMap = true;

	 setTimeout(function () {
		GlobalSetting.preventClickButtonWorldMap = false;
    }, 1000);
}

mainMenuPrefab.prototype.onEventWorldMap = function(){
	//Change Event World Map To Duel Choose Map
	if(GlobalSetting.currentMenuState === MENUSTATE.ADDGEMS) return;
	if(GlobalSetting.currentMenuState === MENUSTATE.LANGUAGE) return;
	//When menu in setting cancel press button
	if(GlobalSetting.currentMenuState === MENUSTATE.SETTING||GlobalSetting.currentMenuState === MENUSTATE.IAP) return;
	//if(!this.activeControlButton(0)) return;
	this.activeControlButton(0);

	 level.f_grpWorldMapScene.stopScroll();
	 this.isOutClick  =true;
	
	 this.openWorldMap();
	 this.visibleButtonControl(false);
	 this.onEventDuelChooseMap();
}

mainMenuPrefab.prototype.openWorldMap = function(){
	
	this.level.onEventOpenWorldMap();
	this.visibleButtonHome(false);
	this.level.f_grpMapDuel.visible = false;
	this.level.f_grpMapDuel.visibileMenuDuel(false);
	
	level.f_grpLeaderBoardPrefab.scroller.kill();
	this.visibleButtonControl(true);
	level.f_grpInforPrefab.onEventCloseInfor();
	this.hideControlButton();
	level.f_grpWorldMapScene.startScroll();
	this.visibleButtonHome(true);

}



mainMenuPrefab.prototype.onEventSetting = function(){
	if(GlobalSetting.currentMenuState === MENUSTATE.ADDGEMS) return;
	if(GlobalSetting.currentMenuState === MENUSTATE.IAP) return;
	this.prevMenuState = GlobalSetting.currentMenuState;
	//console.log("this.prevMenuState " +this.prevMenuState);
	GlobalSetting.currentMenuState = MENUSTATE.SETTING ;
	this.fSetting.visible = true;
	GlobalSetting.isPause = true ;
	GlobalSetting.preventClickButtonWorldMap = true ;
	//Close Infor

	
	level.f_grpInforPrefab.visible = false;
	level.f_grpInforPrefab.onEventCloseInfor();
	if(this.prevMenuState === MENUSTATE.WORLDMAP){
	//Close World Map
	level.f_grpWorldMapScene.stopScroll();
	}
	if(this.prevMenuState === MENUSTATE.LEADERBOARD){
	//LeaderBoard
	level.f_grpLeaderBoardPrefab.stopScroll();
	}

	level.f_grpWorldMapScene.stopScroll();
	
}

mainMenuPrefab.prototype.onEventCloseSetting = function(){
	if(GlobalSetting.currentMenuState === MENUSTATE.TERMS ||GlobalSetting.currentMenuState === MENUSTATE.IAP) return;
	this.fSetting.visible = false;
	GlobalSetting.currentMenuState =this.prevMenuState;
	console.log("this.prevMenuState  " +this.prevMenuState);
	switch (this.prevMenuState){
		case MENUSTATE.INFOR:
 			this.prevControlButton = -1;
			this.onEventInfor();
			
		break;
		case MENUSTATE.LEADERBOARD:
 		this.prevControlButton = -1;
		this.onEventLeaderBoard();
		level.f_grpLeaderBoardPrefab.startScroll();
		break;

		case MENUSTATE.WORLDMAP:
		
 		this.prevControlButton = -1;
		//this.onEventWorldMap();
		level.f_grpWorldMapScene.startScroll();
		break;
	}
	GlobalSetting.preventClickButtonWorldMap = false ;
	GlobalSetting.isPause = false ;
	level.f_grpWorldMapScene.startScroll();
}

mainMenuPrefab.prototype.OnEventAddGems = function(){
	//When menu in setting cancel press button
	if(GlobalSetting.currentMenuState === MENUSTATE.SETTING) return;
	
	this.f_grp_nofti_add_gem.visible = true;
	//this.visibleButtonControl(false);
	GlobalSetting.currentMenuState = MENUSTATE.ADDGEMS;
	level.f_grpLeaderBoardPrefab.visible = false;
	level.f_grpInforPrefab.visible = false;
	level.f_grpInforPrefab.onEventCloseInfor();

	this.visibleButtonControl(false);
	this.visibleButtonHome(false);

	level.f_grpWorldMapScene.stopScroll();

	GlobalSetting.preventClickButtonWorldMap = true;



}

mainMenuPrefab.prototype.OnEventAddCoins = function(){
	//console.log("IAP Add Coins");
	//When menu in setting cancel press button
	if(GlobalSetting.currentMenuState === MENUSTATE.ADDGEMS) return;
	if(GlobalSetting.currentMenuState === MENUSTATE.SETTING  ||GlobalSetting.currentMenuState === MENUSTATE.IAP) return;
	this.prevMenuState = GlobalSetting.currentMenuState;
	level.f_grp_IAP.visible  = true;
	level.f_grpInforPrefab.onEventCloseInfor();

	GlobalSetting.currentMenuState = MENUSTATE.IAP;

	level.f_grpWorldMapScene.stopScroll();
}

mainMenuPrefab.prototype.activeControlButton = function(indexControl){
	
	this.currentControlButton = indexControl;
	//console.log("prevControlButton " +this.prevControlButton);
	//if(this.currentControlButton === this.prevControlButton) return false ;
	this.prevControlButton = this.currentControlButton;
	this.hideControlButton();
 
	//this.fLight_Chose.position.setTo(this.controlButtons[indexControl].x-18,this.controlButtons[indexControl].y -14);
	return true;
}

mainMenuPrefab.prototype.hideControlButton = function(){
	 
}

mainMenuPrefab.prototype.visibleButtonHome = function(visible){
	this.fHome.visible = visible;
}

//Hide all button bottom
mainMenuPrefab.prototype.visibleButtonControl = function(visible){
	for(var i =0 ; i < this.controlButtons.length ;i++){
		this.controlButtons[i].visible = visible;
	}

	this.fTxt_playDuel.visible =visible;
	this.fTxt_playWF.visible =visible;
	this.fTxt_playSingle.visible =visible;
}

//Show Gem and Coin
mainMenuPrefab.prototype.addGems = function(value){
	console.log("Gem Value " +value);
	
	if(value === null){
		localData.gemsBackUp = value;
	}
	
	localData.gems += value;
	localData.gemsBackUp += value;
	level.saveData();

	this.updateGemCoin(localData.gems,localData.coins);

}
mainMenuPrefab.prototype.updateGemCoin = function(gem,coin){
	
	if(coin != undefined ||coin != null)
	this.fTxt_coin.text = (coin>=1000) ?(coin/1000) +"K": coin;
	if(gem != undefined || gem != null){
		this.gemValue =gem;
		if(isNaN(gem)){
			this.fTxt_gem.text = "0";
		}
		else{
			this.fTxt_gem.text = (gem>=1000) ?(gem/1000) +"K": gem;
		}
		console.log("Gem " +gem);
	}
	
	
	this.fTxt_coin.x =this.fItem_coin_bar.x +this.fItem_coin_bar.width /2;
	this.fTxt_gem.x =this.fItem_gem_bar.x +this.fItem_gem_bar.width /2;
}

mainMenuPrefab.prototype.loadImageOtherPlayer = function(pathTexture){
	console.log("pathTexture " +pathTexture);
	this.fIcon_other_Player.loadTexture(pathTexture);
    this.fIcon_other_Player.width = 152;
	this.fIcon_other_Player.height = 147;
	
}






mainMenuPrefab.prototype.updateTextAlignCenter = function(){
	
	
	//set Align center for text language
	this.fTxt_player_name.x = this.fAvatar_frame.x + this.fAvatar_frame.width/2 ;
	this.fTxt_coin.x =this.fItem_coin_bar.x +this.fItem_coin_bar.width /2;
	this.fTxt_gem.x =this.fItem_gem_bar.x +this.fItem_gem_bar.width /2;

	
	//Main Menu
	this.fTxt_playDuel.x  = this.fBtn_worldMap.x +this.fBtn_worldMap.width/2;
	//this.fTxt_playSingle.x  = this.fBtn_infor.x +this.fBtn_infor.width/2;
	this.fTxt_playWF.x  = this.fBtn_home.x +this.fBtn_home.width/2;
	this.fTxt_playDuel_1.x  = this.fBtn_worldMap.x +this.fBtn_worldMap.width/2;
	//this.fTxt_playSingle.x  = this.fBtn_infor.x +this.fBtn_infor.width/2;
	this.fTxt_playWF_1.x  = this.fBtn_home.x +this.fBtn_home.width/2;
	this.fTxt_other_player_name.x  = this.fAvatar_Other_Player.x +this.fAvatar_Other_Player.width/2;
	
	//Setting
	this.fTxt_terms.x =this.fBtn_terms.x +this.fBtn_terms.width/2;
	this.fTxt_Setting_title.x =this.fSetting_bar.x +this.fSetting_bar.width/2;
	this.fTxt_MUSIC.x =this.fBtn_music.x +this.fBtn_music.width/2 +10;
	this.fTxt_SOUND.x =this.fBtn_sound.x +this.fBtn_sound.width/2+10;
	this.fTxt_language.x  =this.fBtn_Language.x +this.fBtn_Language.width/2;
	
	//Language
	this.fTxt_english.x = this.fBtn_english.x +this.fBtn_english.width/2;
	this.fTxt_spanish.x = this.fBtn_spanish.x +this.fBtn_spanish.width/2;
	this.fTxt_vi.x = this.fBtn_VI.x +this.fBtn_VI.width/2;
	this.fTxt_portuguese.x=this.fBtn_VI.x +this.fBtn_VI.width/2;
	this.fTxt_thaiLand.x=this.fBtn_VI.x +this.fBtn_VI.width/2;
	this.fTxt_french.x=this.fBtn_VI.x +this.fBtn_VI.width/2;
	this.fTxt_polish.x=this.fBtn_VI.x +this.fBtn_VI.width/2;
	this.fTxt_taiwan.x=this.fBtn_VI.x +this.fBtn_VI.width/2;
	this.fTxt_language_Title.x =this.fLanguage_bar.x +this.fLanguage_bar.width/2;
	
	
	this.fTxt_nofti_show_reward_video_failed.x =this.fBg_nofti_add_gem.x +this.fBg_nofti_add_gem.width/2;
	this.fTxt_nofti_desktop_device.x =this.fBg_nofti_add_gem.x +this.fBg_nofti_add_gem.width/2;
	this.fTxt_nofti_mobile_device.x =this.fBg_nofti_add_gem.x +this.fBg_nofti_add_gem.width/2;
	this.fTxt_play_Single.x =this.fBtn_play_Single.x +this.fBtn_play_Single.width/2;
	this.fTxt_play_Single.y =this.fBtn_play_Single.y +this.fBtn_play_Single.height/2;
	this.fTxt_watch_Video.x =this.fBtn_watch_Video.x+this.fBtn_watch_Video.width/2;
}



