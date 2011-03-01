function RunStarterJs(){
    wibiyaToolbar.framework.ReadProfile();
wibiyaToolbar.framework.fun_MinMaxCookie("check");

// minimize toolbar button handlers
jQuery(".wibiyaToolbar_right_normal").mouseover(function(){
    jQuery(this).hand().removeClass("wibiyaToolbar_right_normal").addClass("wibiyaToolbar_right_over");
}).mouseout(function(){
    jQuery(this).removeClass("wibiyaToolbar_right_over").addClass("wibiyaToolbar_right_normal");
}).click(function(){
    wibiyaToolbar.framework.fun_RegisterAction_extended(21,0,1,0,"");
    wibiyaToolbar.framework.fun_wibiyaToolbar_toggle();
});

//maximize button handler
jQuery(".wibiyaToolbar_minimized_right_normal").mouseover(function() {
    jQuery(this).hand().removeClass("wibiyaToolbar_minimized_right_normal").addClass("wibiyaToolbar_minimized_right_over");
}).mouseout(function(){
    jQuery(this).removeClass("wibiyaToolbar_minimized_right_over").addClass("wibiyaToolbar_minimized_right_normal");
}).click(function(){
    wibiyaToolbar.framework.fun_RegisterAction_extended(21,0,1,0,"");
    wibiyaToolbar.framework.fun_wibiyaToolbar_toggle();
});

jQuery(".wibiyaToolbar_minimized_maximize").mouseover(function() {
    jQuery(this).hand();
    jQuery(".wibiyaToolbar_minimized_right_normal").removeClass("wibiyaToolbar_minimized_right_normal").addClass("wibiyaToolbar_minimized_right_over");
}).mouseout(function(){
    jQuery(".wibiyaToolbar_minimized_right_over").removeClass("wibiyaToolbar_minimized_right_over").addClass("wibiyaToolbar_minimized_right_normal");
}).click(function(){
    jQuery(".wibiyaToolbar_minimized_right_over").removeClass("wibiyaToolbar_minimized_right_over").addClass("wibiyaToolbar_minimized_right_normal");
    wibiyaToolbar.framework.fun_RegisterAction_extended(22,0,1,0,"");
    wibiyaToolbar.framework.fun_wibiyaToolbar_toggle();
});

// build menu
var ProviderMenu =jQuery('#wibiyaToolbar_search_providers_menu_72794');
var ProviderItemsHtml = '';
if (wibiyaToolbar.Apps.App_72794.search_providers.provider.length > 0) {


    for (i = 0; i < wibiyaToolbar.Apps.App_72794.search_providers.provider.length; i++) {
        var Provider = wibiyaToolbar.Apps.App_72794.search_providers.provider[i];
        ProviderItemsHtml += '<li class="wibiyaToolbar_SearchmenuItem_normal" index="'+i+'"><img src="'+Provider.icon+'" class="wibiyaToolbar_menuImg"/><span class="wibiyaToolbar_menuText">'+Provider.name+'</span></li>';
    }
}
else
{
    var Provider =  wibiyaToolbar.Apps.App_72794.search_providers.provider;
    ProviderItemsHtml += '<li class="wibiyaToolbar_SearchmenuItem_normal" index="0"><img src="'+Provider.icon+'" class="wibiyaToolbar_menuImg"/><span class="wibiyaToolbar_menuText">'+Provider.name+'</span></li>';
}
ProviderMenu.html(ProviderItemsHtml);
// add default icon
jQuery('#wibiyaToolbar_search_provider_icon_72794').attr('src',wibiyaToolbar.Apps.App_72794.search_providers.provider[0].icon);
//Wide

var textBoxTheme_72794 = 'WibiyaToolbarIcon_4_searchbox_normal';
var searchContainerTheme_72794 = 'wibiyaToolbar_search_container';
var textboxButtonTheme_72794 = 'wibiyaToolbar_search_textbox_button';
var textboxInput_72794 = 'wibiyaToolbar_search_textbox_input';
if (wibiyaToolbar.Apps.App_72794.is_wide_search == 1) {
    var textBoxTheme_72794 = 'WibiyaToolbarIcon_4_searchbox_wide';
    var searchContainerTheme_72794 = 'wibiyaToolbar_search_container_wide';
    var textboxButtonTheme_72794 = 'wibiyaToolbar_search_textbox_button_wide';
    var textboxInput_72794 = 'wibiyaToolbar_search_textbox_input_wide';

    jQuery(".WibiyaToolbarIcon_4_searchbox_normal").removeClass('WibiyaToolbarIcon_4_searchbox_normal').addClass(textBoxTheme_72794);
    jQuery(".wibiyaToolbar_search_container").removeClass('WibiyaToolbarIcon_4_searchbox_normal').addClass(searchContainerTheme_72794);
    jQuery(".wibiyaToolbar_search_textbox_button").removeClass('WibiyaToolbarIcon_4_searchbox_normal').addClass(textboxButtonTheme_72794);
    jQuery(".wibiyaToolbar_search_textbox_input").removeClass('WibiyaToolbarIcon_4_searchbox_normal').addClass(textboxInput_72794);
}




jQuery('#wibiyaToolbar_search_providers_back_72794').mouseover(function(){
    var _this = jQuery(this);
    _this.hand().removeClass('wibiyaToolbar_search_providers_normal').addClass('wibiyaToolbar_search_providers_over');
    if (jQuery('#wibiyaToolbar_SearchProviders_72794').attr('menu_opened')=='no'){	
        if(_this.parent().find('.wibiyaToolbar_search_menu').length == 0 ||  _this.parent().find('.wibiyaToolbar_search_menu').attr('menu_opened') == 'no') 
            _this.parent().parent().find('.wibiyaToolbar_tooltip').vshow();
    }
}).mouseout(function(){
    var _this = jQuery(this);    
    _this.removeClass('wibiyaToolbar_search_providers_over').addClass('wibiyaToolbar_search_providers_normal');
    _this.parent().parent().find('.wibiyaToolbar_tooltip').vhide();
}).click(function(){
    jQuery(this).parent().parent().find('.wibiyaToolbar_tooltip').vhide();
    _fun_wibiya_openSearchProviders_72794(jQuery(this));
});

jQuery('.wibiyaToolbar_search_providers_menu .wibiyaToolbar_search_menuItem_normal').click(function(){
    jQuery('#wibiyaToolbar_SearchProviders_72794').slideUp(300).attr('menu_opened','no');
    var _sp = jQuery('#wibiyaToolbar_SearchProviders_72794').attr('selected_provider');
    var _item_index = jQuery(this).attr('index');
    if (_sp!=_item_index) {
	jQuery('#wibiyaToolbar_SearchProviders_72794').attr('selected_provider',_item_index);
	var _bi = jQuery(this).find('.wibiyaToolbar_menuImg').attr('src');
	jQuery('#wibiyaToolbar_search_providers_72794').find('#wibiyaToolbar_search_provider_icon_72794').attr('src',_bi);
    }
});

jQuery('#wibiyaToolbar_search_textbox_input_72794').keydown(function(event){
    if(event.keyCode==13) {
	var _actionType = 'search';
	var _appId = jQuery(this).parent().parent().attr('appId');
	var _index = Number(jQuery('#wibiyaToolbar_SearchProviders_72794').attr('selected_provider'));
	var _searchQuery = jQuery(this).val();
	if (_searchQuery!='Search..'){
	    wibiyaToolbar.framework.fun_RegisterAction_extended(4,72794,1,0,'{"provider":"'+searchProviders.provider[_index].searchProviderName+'","term":"'+_searchQuery+'"}');
	    fun_wibiya_Search_72794(_index,_searchQuery);
	}
    }
});

jQuery('#wibiyaToolbar_search_textbox_button_72794').mouseover(function () {
    jQuery(this).hand();
}).click(function(){
    var _actionType = 'search';
    var _appId = jQuery(this).parent().parent().attr('appId');
    var _index = Number(jQuery('#wibiyaToolbar_SearchProviders_72794').attr('selected_provider'));
    var _searchQuery = jQuery(this).parent().find('#wibiyaToolbar_search_textbox_input_72794').val();
    if (_searchQuery!='Search..'){
	wibiyaToolbar.framework.fun_RegisterAction_extended(4,72794,1,0,'{"provider":"'+searchProviders.provider[_index].searchProviderName+'","term":"'+_searchQuery+'"}');
	fun_wibiya_Search_72794(_index,_searchQuery);
    }
});

jQuery('#wibiyaToolbar_search_textbox_input_72794').focus(function(){
    if (jQuery(this).val()==jQuery(this).attr('defaultValue')){
	jQuery(this).removeClass().addClass('wibiyaToolbar_searchbox_on').addClass(textboxInput_72794).val('');
    }
}).blur(function(){
    if (jQuery(this).val()==''){
	jQuery(this).removeClass().addClass('wibiyaToolbar_searchbox_default').addClass(textboxInput_72794).val(jQuery(this).attr('defaultValue'));
    }
});

jQuery('.wibiyaToolbar_SearchmenuItem_normal').mouseover(function(){
    jQuery(this).hand().removeClass('wibiyaToolbar_SearchmenuItem_normal').addClass('wibiyaToolbar_SearchmenuItem_over');
}).mouseout(function(){
    jQuery(this).removeClass('wibiyaToolbar_SearchmenuItem_over').addClass('wibiyaToolbar_SearchmenuItem_normal');
}).click(function(){
    var menuItem = jQuery(this);
    index = menuItem.attr('index');
    jQuery('#wibiyaToolbar_SearchProviders_72794').slideUp(300).attr('menu_opened','no');
    var _sp = jQuery('#wibiyaToolbar_SearchProviders_72794').attr('selected_provider');
    var _item_index = index;
    if (_sp!=_item_index){
	jQuery('#wibiyaToolbar_SearchProviders_72794').attr('selected_provider',_item_index);
	var _bi = menuItem.find('.wibiyaToolbar_menuImg').attr('src');
	jQuery('#wibiyaToolbar_search_providers_72794').find('#wibiyaToolbar_search_provider_icon_72794').attr('src',_bi);
    }
});

jQuery('#wibiyaToolbar_item_normal_72795').multilinkBehavior().click(function(e){
    var _menu = jQuery(this).find('.wibiyaToolbar_menu');
    if (_menu.attr('menu_opened')=='no'){
	wibiyaToolbar.framework.fun_RegisterAction_extended(5,72795,1,0,'');
	OpenLinkMenu_72795(_menu);
    }
});

jQuery('#wibiyaToolbar_item_normal_72795').find('.wibiyaToolbar_menuItem_normal').mouseover(function(){
    jQuery(this).hand().removeClass('wibiyaToolbar_menuItem_normal').addClass('wibiyaToolbar_menuItem_over');
}).mouseout(function(){
    jQuery(this).removeClass('wibiyaToolbar_menuItem_over').addClass('wibiyaToolbar_menuItem_normal');
}).click(function(e){
    var _item = jQuery(this);
    var _appId = _item.parent().attr('appId');
    _itemIndex = _item.attr('index');
    var _action_options = {
	itemIndex: _itemIndex,
	object: _item
    };
    wibiyaToolbar.framework.fun_RegisterAction_extended(5,72795,2,0,'{"linkName":"'+LinkNodes_72795[_action_options.itemIndex].name+'"}');
    LinkClicked_72795(_action_options);
});jQuery('#wibiyaToolbar_item_normal_72796').mouseover(function(){
    var _this = jQuery(this);
    _this.hand().removeClass('wibiyaToolbar_item_normal').addClass('wibiyaToolbar_item_over');
    if(_this.find('.wibiyaToolbar_window_wiwiMenu').length == 0 ||  _this.find('.wibiyaToolbar_window_wiwiMenu').attr('wiwi_opened') == 'no') _this.find('.wibiyaToolbar_tooltip').vshow();
    var btnhover = jQuery(this).filter(".wibiyaToolbar_BtnHover");
    jQuery.each(btnhover, function() {
        jQuery(this).find(".wibiyaToolbar_button_left").addClass("wibiyaToolbar_button_left_over");
        jQuery(this).find(".wibiyaToolbar_button_center").addClass("wibiyaToolbar_button_center_over");
        jQuery(this).find(".wibiyaToolbar_button_right").addClass("wibiyaToolbar_button_right_over");
        jQuery(this).find(".wibiyaToolbar_button_right_multi").addClass("wibiyaToolbar_button_right_multi_over");
    });
}).mouseout(function(){
    jQuery(this).removeClass('wibiyaToolbar_item_over').addClass('wibiyaToolbar_item_normal').find('.wibiyaToolbar_tooltip').vhide();
    var btnhover = jQuery(this).filter(".wibiyaToolbar_BtnHover");
    jQuery.each(btnhover, function() {
        jQuery(this).find(".wibiyaToolbar_button_left").removeClass("wibiyaToolbar_button_left_over");
        jQuery(this).find(".wibiyaToolbar_button_center").removeClass("wibiyaToolbar_button_center_over");
        jQuery(this).find(".wibiyaToolbar_button_right").removeClass("wibiyaToolbar_button_right_over");
        jQuery(this).find(".wibiyaToolbar_button_right_multi").removeClass("wibiyaToolbar_button_right_multi_over");
    });
}).click(function(){
     jQuery(this).find('.wibiyaToolbar_tooltip').vhide();
    wibiyaToolbar.framework.fun_RegisterAction_extended(7,72796,1,0,'');
    wibiyaToolbar.framework.fun_OpenResentPostMenu_72796();
});jQuery('.wibiyaToolbar_item_normal_72797').linkBehavior().click(function(){
    wibiyaToolbar.framework.fun_RegisterAction_extended(28,72797,2,0,'');
    var _action_options =
        {
        sender : this.id
    };
    wibiyaToolbar.framework.fun_GeneralApp_72797(_action_options);
});jQuery(".wibiyaToolbar_item_normal_72798").mouseover(function(){
//if this item have an opened menu - don't do mouse over
if (jQuery(this).find(".wibiyaToolbar_menu").attr("menu_opened")=="yes")
{
}
else
{
jQuery(this).css("cursor","pointer");
jQuery(this).removeClass("wibiyaToolbar_item_normal");
jQuery(this).addClass("wibiyaToolbar_item_over");
jQuery(this).find(".wibiyaToolbar_tooltip").css("visibility","visible");
}
}).mouseout(function(){
jQuery(this).removeClass("wibiyaToolbar_item_over");
jQuery(this).addClass("wibiyaToolbar_item_normal");
jQuery(this).find(".wibiyaToolbar_tooltip").css("visibility","hidden");
}).click(function(){
var  _appId = jQuery(this).attr("appId");
var _appType = jQuery(this).attr("appType");
var _windowMethod = jQuery(this).attr("windowMethod");
var _action_options = {
        actionType: 'StandartItemClick',
        appId: _appId,
        appType : _appType,
        windowMethod : _windowMethod
        };
wibiyaToolbar.framework.fun_RegisterAction_extended(15,72798,1,0,'');
fun_GeneralApp_72798(_action_options);
});jQuery('.wibiyaToolbar_item_normal_72799').linkBehavior().click(function(){
    wibiyaToolbar.framework.fun_RegisterAction_extended(20,72799,2,0,'');
    var _action_options =
        {
        sender : this.id
    };
    wibiyaToolbar.framework.fun_GeneralApp_72799(_action_options);
});jQuery('#wibiyaToolbar_item_normal_72800').multilinkBehavior().click(function(e){
    var _menu = jQuery(this).find('.wibiyaToolbar_menu');
    if (_menu.attr('menu_opened')=='no'){
	wibiyaToolbar.framework.fun_RegisterAction_extended(14,72800,1,0,'');
	OpenLinkMenu_72800(_menu);
    }
});

jQuery('#wibiyaToolbar_item_normal_72800').find('.wibiyaToolbar_menuItem_normal').mouseover(function(){
    jQuery(this).hand().removeClass('wibiyaToolbar_menuItem_normal').addClass('wibiyaToolbar_menuItem_over');
}).mouseout(function(){
    jQuery(this).removeClass('wibiyaToolbar_menuItem_over').addClass('wibiyaToolbar_menuItem_normal');
}).click(function(e){
    var _item = jQuery(this);
    var _appId = _item.parent().attr('appId');
    _itemIndex = _item.attr('index');
    var _action_options = {
	itemIndex: _itemIndex,
	object: _item
    };
    wibiyaToolbar.framework.fun_RegisterAction_extended(14,72800,2,0,'{"linkName":"'+LinkNodes_72800[_action_options.itemIndex].name+'"}');
    LinkClicked_72800(_action_options);
});jQuery('.wibiyaToolbar_item_normal_72801').linkBehavior().click(function(){
    wibiyaToolbar.framework.fun_RegisterAction_extended(13,72801,2,0,'');
    var _action_options =
        {
        sender : this.id
    };
    wibiyaToolbar.framework.fun_GeneralApp_72801(_action_options);
});wibiyaToolbar.AppsArray = {"4":["72794"],"5":["72795"],"7":["72796"],"28":["72797"],"15":["72798"],"20":["72799"],"14":["72800"],"13":["72801"]};
    jQuery("#wibiyaToolbar").trigger("toolbarLoaded");
}





            wibiyaToolbar.Apps = {};
            wibiyaToolbar.Data = {"SiteName":"More+Than+Technical","SiteUrl":"http:\/\/www.morethantechnical.com","LangId":"1","ThemeId":"9","Favicon":"http:\/\/cdn.wibiya.com\/Graphics_Toolbar\/Favicons\/Defaultfavicon10050_2906.png","nc":"1","toolbarId":"10426","TBStyleXml":{"size":{"Wtype":"0","Htype":"0","width":"1850","height":"32"},"position":{"align":"1","offset":"0"},"background":{"color":"#0f72b2","overColor":"#0f3b95","opacity":"100","minimize_type":"Dark"},"text":{"font":"arial","color":"#ffffff","size":"11px"},"style":{"type":"round_gradient","sprite":"round_hard_gradient"}}};
            wibiyaToolbar.ToolbarHTML = "<div class=\"wibiya_toolbar_wrapper\" id=\"wibiya_toolbar_wrapper\"><div class=\"wibiya_toolbar_holder\"><div class=\"wibiya_toolbar_sideLeft\" style=\"\"><div class=\"wibiya_toolbar_side_seperator\"></div> <div class=\"wibiya_toolbar_left_gradian\"></div><div class=\"wibiya_toolbar_side_seperator wibiya_toolbar_side_left\"><div class=\"wibiya_toolbar_side_70per side_70perFirstLeft wibiya_toolbar_BG\"></div><div class=\"wibiya_toolbar_side_20per side_20perFirstLeft wibiya_toolbar_BG\"></div><div class=\"wibiya_toolbar_side_40per side_40perFirstLeft wibiya_toolbar_BG\"></div><div class=\"wibiya_toolbar_side_20per side_20perSecondLeft wibiya_toolbar_BG\"></div><div class=\"wibiya_toolbar_side_70per side_70perSecondLeft wibiya_toolbar_BG\"></div><div class=\"wibiya_toolbar_side_twopx wibiya_toolbar_BG wibiya_toolbar_opacity\"></div><div class=\"wibiya_toolbar_side_threepx wibiya_toolbar_BG wibiya_toolbar_opacity\"></div><div class=\"wibiya_toolbar_side_colHold wibiya_toolbar_BG wibiya_toolbar_opacity\"></div></div></div>        <div class=\"wibiya_toolbar_holder_middle\"><div class=\"wibiya_toolbar_middle_bg wibiya_toolbar_BG wibiya_toolbar_opacity\"></div>           <div class=\"wibiya_toolbar_middle_gradian\"></div><div id=\"wibiya_toolbar_middle_item_holder\"><div class=\"itemRight minMaxBtnDiv_minimize wibiyaToolbar_minimized_right_normal wibiyaToolbar_item_normal\">                                        <table cellspacing=\"0\" border=\"0\" cellpadding=\"0\" class=\"itemTable\">                                            <tbody>                                                <tr>                                                    <td>                                                                                                                        <div id=\"minMaxBtn_minimize\" class=\"wibiya_toolbar_minmizeBtnDark\"></div>                                                            <div style=\"visibility: hidden;\" class=\"wibiyaToolbar_tooltip wibiyaToolbar_tooltip_Right\"><span class=\"wibiyaToolbar_tooltip_text\">Minimize Toolbar</span></div>                                                        </td>                                                    </tr>                                        </tbody>                                    </table></div><div class=\"itemRight\"><div class=\"wibiyaToolbar_divider minMaxBtn_divider\"></div></div><div class=\"itemLeft\">    <div class=\"wibiyaToolbar_item_normal wibiyaToolbar_item_normal_72794\" Appindex=\"72794\" id=\"wibiyaToolbar_item_normal_72794\" appId=\"4\" toolbarAppId=\"72794\" appType=\"\"  applicationName=\"Search\" >            <div class=\"wibiyaHtmlContainer\" id=\"wibiya_Html_Container_72794\">                <table cellspacing=\"0\" border=\"0\" cellpadding=\"0\" class=\"itemTable\">                    <tbody>                        <tr>                            <td>                    <div id=\"wibiyaToolbar_search_container_72794\" class=\"wibiyaToolbar_search_container\" appId=\"4\" toolbarAppId=\"72794\" Appindex=\"72794\" applicationName=\"Search\"><div id=\"wibiyaToolbar_search_providers_back_72794\" class=\"wibiyaToolbar_search_providers_normal wibiyaToolbar_search_providers_back\">    <div id=\"wibiyaToolbar_search_providers_72794\" class=\"wibiyaToolbar_search_providers\" style=\"overflow: hidden\"><div id=\"wibiyaToolbar_search_providers_icon_72794\" class=\"wibiyaToolbar_search_providers_icon\">    <img width=\"16\" height=\"16\" id=\"wibiyaToolbar_search_provider_icon_72794\" class=\"wibiyaToolbar_search_provider_icon\" src=\"\" /></div><div id=\"wibiyaToolbar_search_providers_arrow_72794\" class=\"wibiyaToolbar_search_providers_arrow WibiyaToolbarIcon_4_arrow_up\">&nbsp;</div>    </div></div><div id=\"wibiyaToolbar_search_textbox_back_72794\" class=\"WibiyaToolbarIcon_4_searchbox_normal wibiyaToolbar_search_textbox_back\">    <input type=\"text\" name=\"wibiyaSearchQuery\" id=\"wibiyaToolbar_search_textbox_input_72794\" defaultValue=\"Search...\" class=\"wibiyaToolbar_search_textbox_input wibiyaToolbar_searchbox_default\" value=\"Search...\" />    <div id=\"wibiyaToolbar_search_textbox_button_72794\" class=\"wibiyaToolbar_search_textbox_button\"></div></div>    </div><div selected_provider=\"0\" menu_opened=\"no\" id=\"wibiyaToolbar_SearchProviders_72794\" class=\"wibiyaToolbar_search_menu\" style=\"display: none\">    <ul id=\"wibiyaToolbar_search_providers_menu_72794\" class=\"wibiyaToolbar_Menu_UL\" appId=\"4\">        ***ITEMS***    </ul></div>    <div class=\"wibiyaToolbar_tooltip wibiyaToolbar_tooltip_Left\" style=\"visibility: hidden\">    <span class=\"wibiyaToolbar_tooltip_text\">Click here to change the search provider</span>    </div>                           </td>                        </tr>                    </tbody>                </table>            </div>    </div></div><div class=\"itemLeft\">    <div class=\"wibiyaToolbar_divider\"></div></div><div class=\"itemLeft\">    <div class=\"wibiya_appOver wibiya_toolbar_middle_gradian\"></div>    <div  class=\"wibiyaToolbar_item_normal wibiyaToolbar_item_normal_72795\" Appindex=\"72795\" id=\"wibiyaToolbar_item_normal_72795\" appId=\"5\" toolbarAppId=\"72795\" appType=\"\" windowMethod=\"3\" applicationName=\"Translate\">        <table cellspacing=\"0\" show=\"no\" cellpadding=\"0\" border=\"0\" style=\"display:none;\" class=\"itemTable WibiyaMinRepresentation\">    <tbody>        <tr>            <td>                <div class=\"WibiyaToolbarIcon_72795\"></div>            </td>        </tr>    </tbody></table>        <div class=\"TBcontainerDiv \" show=\"yes\">            <table cellspacing=\"0\" border=\"0\" cellpadding=\"0\" class=\"itemTable\">    <tbody>        <tr>            <td>                 <div class=\"WibiyaToolbarIcon_72795\" show=\"no\"/>            </td>            <td>                <span class=\"wibiyaToolbar_itemText \">Translate</span>            </td>        </tr>    </tbody></table>        </div><div class=\"wibiyaToolbar_tooltip wibiyaToolbar_tooltip_Left\" style=\"visibility: hidden\"><span class=\"wibiyaToolbar_tooltip_text\">Click here to translate this page</span></div>        <div menu_opened=\"no\" class=\"wibiyaToolbar_menu\" style=\"width:180px;display:none;\">    <div id=\"wibiyaToolbar_menu_top\" style=\"width:180px;\">        <div id=\"wibiyaToolbar_menu_top_left\">                                <div class=\"wibiya_toolbar_side_seperator\"></div>                                <div class=\"wibiya_toolbar_left_gradian\"></div>                                <div class=\"wibiya_toolbar_side_seperator wibiya_toolbar_side_left\">                                        <div class=\"wibiya_toolbar_side_70per side_70perFirstLeft wibiya_toolbar_BG\"></div>                                        <div class=\"wibiya_toolbar_side_20per side_20perFirstLeft wibiya_toolbar_BG\"></div>                                        <div class=\"wibiya_toolbar_side_40per side_40perFirstLeft wibiya_toolbar_BG\"></div>                                        <div class=\"wibiya_toolbar_side_20per side_20perSecondLeft wibiya_toolbar_BG\"></div>                                        <div class=\"wibiya_toolbar_side_70per side_70perSecondLeft wibiya_toolbar_BG\"></div>                                        <div class=\"wibiya_toolbar_side_twopx wibiya_toolbar_BG wibiya_toolbar_opacity\"></div>                                        <div class=\"wibiya_toolbar_side_threepx wibiya_toolbar_BG wibiya_toolbar_opacity\"></div>                                        <div class=\"wibiya_toolbar_side_colHold wibiya_toolbar_BG wibiya_toolbar_opacity\"></div>                                </div>                        </div>        <div id=\"wibiyaToolbar_menu_top_center\" style=\"width:160px;\">                                <div class=\"wibiya_toolbar_middle_gradian\"></div>                                <div class=\"wibiya_toolbar_middle_bg wibiya_toolbar_BG wibiya_toolbar_opacity\"></div>            <div class=\"wibiyaToolbar_menu_title\">                                        <table cellspacing=\"0\" cellpadding=\"0\" border=\"0\">                                                <tr>                                                        <td>                                                                <img src=\"http://cdn.wibiya.com/Graphics_Toolbar/Icons/globe_dark.png\" class=\"wibiyaToolbar_menu_icon\" alt=\"\"/>                                                        </td>                                                        <td class=\"wibiyaToolbar_menu_caption\">                                                                Translate                                                        </td>                                                </tr>                                        </table>                                </div>        </div>        <div id=\"wibiyaToolbar_menu_top_right\">                                <div class=\"wibiya_toolbar_side_seperator wibiya_toolbar_side_right\">                                        <div class=\"wibiya_toolbar_side_70per side_70perFirstRight wibiya_toolbar_BG\"></div>                                        <div class=\"wibiya_toolbar_side_20per side_20perFirstRight wibiya_toolbar_BG\"></div>                                        <div class=\"wibiya_toolbar_side_40per side_40perFirstRight wibiya_toolbar_BG\"></div>                                        <div class=\"wibiya_toolbar_side_20per side_20perSecondRight wibiya_toolbar_BG\"></div>                                        <div class=\"wibiya_toolbar_side_70per side_70perSecondRight wibiya_toolbar_BG\"></div>                                        <div class=\"wibiya_toolbar_side_twopx wibiya_toolbar_BG wibiya_toolbar_opacity\"></div>                                        <div class=\"wibiya_toolbar_side_threepx wibiya_toolbar_BG wibiya_toolbar_opacity\"></div>                                        <div class=\"wibiya_toolbar_side_colHold wibiya_toolbar_BG wibiya_toolbar_opacity\"></div>                                </div>                                <div class=\"wibiya_toolbar_right_gradian\"></div>                                <div class=\"wibiya_toolbar_side_seperator\"></div>                        </div>    </div>    <table width=\"100%\" border=\"0\" style=\"float:left;margin:0;padding:0;border-collapse:collapse;\">        <tr>            <td id=\"wibiyaToolbar_menu_left\">            </td>            <td class=\"wibiyaToolbar_menu_body\" style=\"width:170px;\">                <ul class=\" wibiyaToolbar_Menu_UL\" appId=\"5\">                    <li class=\"wibiyaToolbar_menuItem_normal \" index=\"0\" >    <div class=\"Img_72795_0 wibiyaToolbar_MenuItemImg\" ></div>    <span class=\"wibiyaToolbar_menuText\">Chinese</span></li><li class=\"wibiyaToolbar_menuItem_normal \" index=\"1\" >    <div class=\"Img_72795_1 wibiyaToolbar_MenuItemImg\" ></div>    <span class=\"wibiyaToolbar_menuText\">Dutch</span></li><li class=\"wibiyaToolbar_menuItem_normal \" index=\"2\" >    <div class=\"Img_72795_2 wibiyaToolbar_MenuItemImg\" ></div>    <span class=\"wibiyaToolbar_menuText\">English</span></li><li class=\"wibiyaToolbar_menuItem_normal \" index=\"3\" >    <div class=\"Img_72795_3 wibiyaToolbar_MenuItemImg\" ></div>    <span class=\"wibiyaToolbar_menuText\">French</span></li><li class=\"wibiyaToolbar_menuItem_normal \" index=\"4\" >    <div class=\"Img_72795_4 wibiyaToolbar_MenuItemImg\" ></div>    <span class=\"wibiyaToolbar_menuText\">German</span></li><li class=\"wibiyaToolbar_menuItem_normal \" index=\"5\" >    <div class=\"Img_72795_5 wibiyaToolbar_MenuItemImg\" ></div>    <span class=\"wibiyaToolbar_menuText\">Italian</span></li><li class=\"wibiyaToolbar_menuItem_normal \" index=\"6\" >    <div class=\"Img_72795_6 wibiyaToolbar_MenuItemImg\" ></div>    <span class=\"wibiyaToolbar_menuText\">Japanese</span></li><li class=\"wibiyaToolbar_menuItem_normal \" index=\"7\" >    <div class=\"Img_72795_7 wibiyaToolbar_MenuItemImg\" ></div>    <span class=\"wibiyaToolbar_menuText\">Korean</span></li><li class=\"wibiyaToolbar_menuItem_normal \" index=\"8\" >    <div class=\"Img_72795_8 wibiyaToolbar_MenuItemImg\" ></div>    <span class=\"wibiyaToolbar_menuText\">Portuguese</span></li><li class=\"wibiyaToolbar_menuItem_normal \" index=\"9\" >    <div class=\"Img_72795_9 wibiyaToolbar_MenuItemImg\" ></div>    <span class=\"wibiyaToolbar_menuText\">Russian</span></li><li class=\"wibiyaToolbar_menuItem_normal \" index=\"10\" >    <div class=\"Img_72795_10 wibiyaToolbar_MenuItemImg\" ></div>    <span class=\"wibiyaToolbar_menuText\">Spanish</span></li>                </ul>            </td>            <td id=\"wibiyaToolbar_menu_right\">            </td>        </tr>    </table></div>       </div></div><div class=\"itemLeft\">    <div class=\"wibiyaToolbar_divider\"></div></div><div class=\"itemLeft\">        <div  class=\"wibiyaToolbar_item_normal wibiyaToolbar_item_normal_72796 wibiyaToolbar_BtnHover\" Appindex=\"72796\" id=\"wibiyaToolbar_item_normal_72796\" appId=\"7\" toolbarAppId=\"72796\" appType=\"\" windowMethod=\"0\" applicationName=\"Navigator\">        <table cellspacing=\"0\" show=\"no\" cellpadding=\"0\" border=\"0\" style=\"display:none;\" class=\"itemTable WibiyaMinRepresentation\">    <tbody>        <tr>            <td>                <div class=\"WibiyaToolbarIcon_72796\"></div>            </td>        </tr>    </tbody></table>        <div class=\"TBcontainerDiv wibiyaToolbar_button\" show=\"yes\">            <table cellspacing=\'0\' cellpadding=\'0\' border=\'0\' class=\'tableButton\'><tr><td><div class=\'wibiyaToolbar_button_left\'></div></td><td><div class=\'wibiyaToolbar_button_center\'><table cellspacing=\"0\" border=\"0\" cellpadding=\"0\" class=\"itemTable\">    <tbody>        <tr>            <td>                 <div class=\"WibiyaToolbarIcon_72796\" show=\"no\"/>            </td>            <td>                <span class=\"wibiyaToolbar_itemText \">Recent Posts</span>            </td>        </tr>    </tbody></table></div></td><td><div class=\'wibiyaToolbar_button_right\'></div></td></tr></table>        </div><div class=\"wibiyaToolbar_tooltip wibiyaToolbar_tooltip_Left\" style=\"visibility: hidden\"><span class=\"wibiyaToolbar_tooltip_text\">Click here to view the Latest Posts</span></div>            </div></div><div class=\"itemLeft\">    <div class=\"wibiyaToolbar_divider\"></div></div><div class=\"itemLeft\">        <div onClick=\"wibiya_randomPost();\" class=\"wibiyaToolbar_item_normal wibiyaToolbar_item_normal_72797 wibiyaToolbar_BtnHover\" Appindex=\"72797\" id=\"wibiyaToolbar_item_normal_72797\" appId=\"28\" toolbarAppId=\"72797\" appType=\"\" windowMethod=\"0\" applicationName=\"Random Posts\">        <table cellspacing=\"0\" show=\"no\" cellpadding=\"0\" border=\"0\" style=\"display:none;\" class=\"itemTable WibiyaMinRepresentation\">    <tbody>        <tr>            <td>                <div class=\"WibiyaToolbarIcon_72797\"></div>            </td>        </tr>    </tbody></table>        <div class=\"TBcontainerDiv wibiyaToolbar_button\" show=\"yes\">            <table cellspacing=\'0\' cellpadding=\'0\' border=\'0\' class=\'tableButton\'><tr><td><div class=\'wibiyaToolbar_button_left\'></div></td><td><div class=\'wibiyaToolbar_button_center\'><table cellspacing=\"0\" border=\"0\" cellpadding=\"0\" class=\"itemTable\">    <tbody>        <tr>            <td>                 <div class=\"WibiyaToolbarIcon_72797\" show=\"no\"/>            </td>            <td>                <span class=\"wibiyaToolbar_itemText \">Random</span>            </td>        </tr>    </tbody></table></div></td><td><div class=\'wibiyaToolbar_button_right\'></div></td></tr></table>        </div><div class=\"wibiyaToolbar_tooltip wibiyaToolbar_tooltip_Left\" style=\"visibility: hidden\"><span class=\"wibiyaToolbar_tooltip_text\">Click here to load a random post</span></div>            </div></div><div class=\"itemLeft\">    <div class=\"wibiyaToolbar_divider\"></div></div><div class=\"itemRight\">    <div class=\"wibiya_appOver wibiya_toolbar_middle_gradian\"></div>    <div  class=\"wibiyaToolbar_item_normal wibiyaToolbar_item_normal_72798\" Appindex=\"72798\" id=\"wibiyaToolbar_item_normal_72798\" appId=\"15\" toolbarAppId=\"72798\" appType=\"\" windowMethod=\"0\" applicationName=\"Notifier\">        <table cellspacing=\"0\" show=\"no\" cellpadding=\"0\" border=\"0\" style=\"display:none;\" class=\"itemTable WibiyaMinRepresentation\">    <tbody>        <tr>            <td>                <div class=\"WibiyaToolbarIcon_72798\"></div>            </td>        </tr>    </tbody></table>        <div class=\"TBcontainerDiv \" show=\"yes\">            <table cellspacing=\"0\" border=\"0\" cellpadding=\"0\" class=\"itemTable\">    <tbody>        <tr>            <td>                 <div class=\"WibiyaToolbarIcon_72798\" show=\"no\"/>            </td>            <td>                <span class=\"wibiyaToolbar_itemText\" style=\"margin: 0px !important;\"></span>            </td>        </tr>    </tbody></table>        </div><div class=\"wibiyaToolbar_tooltip wibiyaToolbar_tooltip_Right\" style=\"visibility: hidden\"><span class=\"wibiyaToolbar_tooltip_text\">Click here to view the latest notification</span></div>            </div></div><div class=\"itemRight\">    <div class=\"wibiyaToolbar_divider\"></div></div><div class=\"itemRight\">    <div class=\"wibiya_appOver wibiya_toolbar_middle_gradian\"></div>    <div  class=\"wibiyaToolbar_item_normal wibiyaToolbar_item_normal_72799\" Appindex=\"72799\" id=\"wibiyaToolbar_item_normal_72799\" appId=\"20\" toolbarAppId=\"72799\" appType=\"\" windowMethod=\"1\" applicationName=\"Twitter\">        <table cellspacing=\"0\" show=\"no\" cellpadding=\"0\" border=\"0\" style=\"display:none;\" class=\"itemTable WibiyaMinRepresentation\">    <tbody>        <tr>            <td>                <div class=\"WibiyaToolbarIcon_72799\"></div>            </td>        </tr>    </tbody></table>        <div class=\"TBcontainerDiv \" show=\"yes\">            <table cellspacing=\"0\" border=\"0\" cellpadding=\"0\" class=\"itemTable\">    <tbody>        <tr>            <td>                 <div class=\"WibiyaToolbarIcon_72799\" show=\"no\"/>            </td>            <td>                <span class=\"wibiyaToolbar_itemText\" style=\"margin: 0px !important;\"></span>            </td>        </tr>    </tbody></table>        </div><div class=\"wibiyaToolbar_tooltip wibiyaToolbar_tooltip_Right\" style=\"visibility: hidden\"><span class=\"wibiyaToolbar_tooltip_text\">Click here to see our Latest Tweets</span></div>            </div></div><div class=\"itemRight\">    <div class=\"wibiyaToolbar_divider\"></div></div><div class=\"itemRight\">    <div class=\"wibiya_appOver wibiya_toolbar_middle_gradian\"></div>    <div  class=\"wibiyaToolbar_item_normal wibiyaToolbar_item_normal_72800\" Appindex=\"72800\" id=\"wibiyaToolbar_item_normal_72800\" appId=\"14\" toolbarAppId=\"72800\" appType=\"\" windowMethod=\"0\" applicationName=\"Share\">        <table cellspacing=\"0\" show=\"no\" cellpadding=\"0\" border=\"0\" style=\"display:none;\" class=\"itemTable WibiyaMinRepresentation\">    <tbody>        <tr>            <td>                <div class=\"WibiyaToolbarIcon_72800\"></div>            </td>        </tr>    </tbody></table>        <div class=\"TBcontainerDiv \" show=\"yes\">            <table cellspacing=\"0\" border=\"0\" cellpadding=\"0\" class=\"itemTable\">    <tbody>        <tr>            <td>                 <div class=\"WibiyaToolbarIcon_72800\" show=\"no\"/>            </td>            <td>                <span class=\"wibiyaToolbar_itemText \">Share</span>            </td>        </tr>    </tbody></table>        </div><div class=\"wibiyaToolbar_tooltip wibiyaToolbar_tooltip_Right\" style=\"visibility: hidden\"><span class=\"wibiyaToolbar_tooltip_text\">Click here to share this page</span></div>        <div menu_opened=\"no\" class=\"wibiyaToolbar_menu\" style=\"width:180px;display:none;\">    <div id=\"wibiyaToolbar_menu_top\" style=\"width:180px;\">        <div id=\"wibiyaToolbar_menu_top_left\">                                <div class=\"wibiya_toolbar_side_seperator\"></div>                                <div class=\"wibiya_toolbar_left_gradian\"></div>                                <div class=\"wibiya_toolbar_side_seperator wibiya_toolbar_side_left\">                                        <div class=\"wibiya_toolbar_side_70per side_70perFirstLeft wibiya_toolbar_BG\"></div>                                        <div class=\"wibiya_toolbar_side_20per side_20perFirstLeft wibiya_toolbar_BG\"></div>                                        <div class=\"wibiya_toolbar_side_40per side_40perFirstLeft wibiya_toolbar_BG\"></div>                                        <div class=\"wibiya_toolbar_side_20per side_20perSecondLeft wibiya_toolbar_BG\"></div>                                        <div class=\"wibiya_toolbar_side_70per side_70perSecondLeft wibiya_toolbar_BG\"></div>                                        <div class=\"wibiya_toolbar_side_twopx wibiya_toolbar_BG wibiya_toolbar_opacity\"></div>                                        <div class=\"wibiya_toolbar_side_threepx wibiya_toolbar_BG wibiya_toolbar_opacity\"></div>                                        <div class=\"wibiya_toolbar_side_colHold wibiya_toolbar_BG wibiya_toolbar_opacity\"></div>                                </div>                        </div>        <div id=\"wibiyaToolbar_menu_top_center\" style=\"width:160px;\">                                <div class=\"wibiya_toolbar_middle_gradian\"></div>                                <div class=\"wibiya_toolbar_middle_bg wibiya_toolbar_BG wibiya_toolbar_opacity\"></div>            <div class=\"wibiyaToolbar_menu_title\">                                        <table cellspacing=\"0\" cellpadding=\"0\" border=\"0\">                                                <tr>                                                        <td>                                                                <img src=\"http://cdn.wibiya.com/Graphics_Toolbar/Icons/share_dark.png\" class=\"wibiyaToolbar_menu_icon\" alt=\"\"/>                                                        </td>                                                        <td class=\"wibiyaToolbar_menu_caption\">                                                                Share                                                        </td>                                                </tr>                                        </table>                                </div>        </div>        <div id=\"wibiyaToolbar_menu_top_right\">                                <div class=\"wibiya_toolbar_side_seperator wibiya_toolbar_side_right\">                                        <div class=\"wibiya_toolbar_side_70per side_70perFirstRight wibiya_toolbar_BG\"></div>                                        <div class=\"wibiya_toolbar_side_20per side_20perFirstRight wibiya_toolbar_BG\"></div>                                        <div class=\"wibiya_toolbar_side_40per side_40perFirstRight wibiya_toolbar_BG\"></div>                                        <div class=\"wibiya_toolbar_side_20per side_20perSecondRight wibiya_toolbar_BG\"></div>                                        <div class=\"wibiya_toolbar_side_70per side_70perSecondRight wibiya_toolbar_BG\"></div>                                        <div class=\"wibiya_toolbar_side_twopx wibiya_toolbar_BG wibiya_toolbar_opacity\"></div>                                        <div class=\"wibiya_toolbar_side_threepx wibiya_toolbar_BG wibiya_toolbar_opacity\"></div>                                        <div class=\"wibiya_toolbar_side_colHold wibiya_toolbar_BG wibiya_toolbar_opacity\"></div>                                </div>                                <div class=\"wibiya_toolbar_right_gradian\"></div>                                <div class=\"wibiya_toolbar_side_seperator\"></div>                        </div>    </div>    <table width=\"100%\" border=\"0\" style=\"float:left;margin:0;padding:0;border-collapse:collapse;\">        <tr>            <td id=\"wibiyaToolbar_menu_left\">            </td>            <td class=\"wibiyaToolbar_menu_body\" style=\"width:170px;\">                <ul class=\" wibiyaToolbar_Menu_UL\" appId=\"14\">                    <li class=\"wibiyaToolbar_menuItem_normal \" index=\"0\" >    <div class=\"Img_72800_0 wibiyaToolbar_MenuItemImg\" ></div>    <span class=\"wibiyaToolbar_menuText\">Email This</span></li><li class=\"wibiyaToolbar_menuItem_normal \" index=\"1\" >    <div class=\"Img_72800_1 wibiyaToolbar_MenuItemImg\" ></div>    <span class=\"wibiyaToolbar_menuText\">Facebook</span></li><li class=\"wibiyaToolbar_menuItem_normal \" index=\"2\" >    <div class=\"Img_72800_2 wibiyaToolbar_MenuItemImg\" ></div>    <span class=\"wibiyaToolbar_menuText\">Twitter</span></li><li class=\"wibiyaToolbar_menuItem_normal \" index=\"3\" >    <div class=\"Img_72800_3 wibiyaToolbar_MenuItemImg\" ></div>    <span class=\"wibiyaToolbar_menuText\">Delicious</span></li><li class=\"wibiyaToolbar_menuItem_normal \" index=\"4\" >    <div class=\"Img_72800_4 wibiyaToolbar_MenuItemImg\" ></div>    <span class=\"wibiyaToolbar_menuText\">Stumbleupon</span></li><li class=\"wibiyaToolbar_menuItem_normal \" index=\"5\" >    <div class=\"Img_72800_5 wibiyaToolbar_MenuItemImg\" ></div>    <span class=\"wibiyaToolbar_menuText\">Digg</span></li><li class=\"wibiyaToolbar_menuItem_normal \" index=\"6\" >    <div class=\"Img_72800_6 wibiyaToolbar_MenuItemImg\" ></div>    <span class=\"wibiyaToolbar_menuText\">Buzz up!</span></li><li class=\"wibiyaToolbar_menuItem_normal \" index=\"7\" >    <div class=\"Img_72800_7 wibiyaToolbar_MenuItemImg\" ></div>    <span class=\"wibiyaToolbar_menuText\">MySpace</span></li><li class=\"wibiyaToolbar_menuItem_normal \" index=\"8\" >    <div class=\"Img_72800_8 wibiyaToolbar_MenuItemImg\" ></div>    <span class=\"wibiyaToolbar_menuText\">FriendFeed</span></li><li class=\"wibiyaToolbar_menuItem_normal \" index=\"9\" >    <div class=\"Img_72800_9 wibiyaToolbar_MenuItemImg\" ></div>    <span class=\"wibiyaToolbar_menuText\">Technorati</span></li><li class=\"wibiyaToolbar_menuItem_normal \" index=\"10\" >    <div class=\"Img_72800_10 wibiyaToolbar_MenuItemImg\" ></div>    <span class=\"wibiyaToolbar_menuText\">G Bookmarks</span></li><li class=\"wibiyaToolbar_menuItem_normal \" index=\"11\" >    <div class=\"Img_72800_11 wibiyaToolbar_MenuItemImg\" ></div>    <span class=\"wibiyaToolbar_menuText\">Live</span></li>                </ul>            </td>            <td id=\"wibiyaToolbar_menu_right\">            </td>        </tr>    </table></div>       </div></div><div class=\"itemRight\">    <div class=\"wibiyaToolbar_divider\"></div></div><div class=\"itemRight\">    <div class=\"wibiya_appOver wibiya_toolbar_middle_gradian\"></div>    <div  class=\"wibiyaToolbar_item_normal wibiyaToolbar_item_normal_72801\" Appindex=\"72801\" id=\"wibiyaToolbar_item_normal_72801\" appId=\"13\" toolbarAppId=\"72801\" appType=\"\" windowMethod=\"2\" applicationName=\"Rss\">        <table cellspacing=\"0\" show=\"no\" cellpadding=\"0\" border=\"0\" style=\"display:none;\" class=\"itemTable WibiyaMinRepresentation\">    <tbody>        <tr>            <td>                <div class=\"WibiyaToolbarIcon_72801\"></div>            </td>        </tr>    </tbody></table>        <div class=\"TBcontainerDiv \" show=\"yes\">            <table cellspacing=\"0\" border=\"0\" cellpadding=\"0\" class=\"itemTable\">    <tbody>        <tr>            <td>                 <div class=\"WibiyaToolbarIcon_72801\" show=\"no\"/>            </td>            <td>                <span class=\"wibiyaToolbar_itemText\" style=\"margin: 0px !important;\"></span>            </td>        </tr>    </tbody></table>        </div><div class=\"wibiyaToolbar_tooltip wibiyaToolbar_tooltip_Right\" style=\"visibility: hidden\"><span class=\"wibiyaToolbar_tooltip_text\">Click here to subscribe to our RSS feed</span></div>            </div></div><div class=\"itemRight\">    <div class=\"wibiyaToolbar_divider\"></div></div></div></div><div class=\"wibiya_toolbar_sideRight\" style=\"\"><div class=\"wibiya_toolbar_side_seperator wibiya_toolbar_side_right\" ><div class=\"wibiya_toolbar_side_70per side_70perFirstRight wibiya_toolbar_BG\"></div><div class=\"wibiya_toolbar_side_20per side_20perFirstRight wibiya_toolbar_BG\"></div><div class=\"wibiya_toolbar_side_40per side_40perFirstRight wibiya_toolbar_BG\"></div><div class=\"wibiya_toolbar_side_20per side_20perSecondRight wibiya_toolbar_BG\"></div><div class=\"wibiya_toolbar_side_70per side_70perSecondRight wibiya_toolbar_BG\"></div><div class=\"wibiya_toolbar_side_twopx wibiya_toolbar_BG wibiya_toolbar_opacity\"></div><div class=\"wibiya_toolbar_side_threepx wibiya_toolbar_BG wibiya_toolbar_opacity\"></div><div class=\"wibiya_toolbar_side_colHold wibiya_toolbar_BG wibiya_toolbar_opacity\"></div></div>    <div class=\"wibiya_toolbar_right_gradian\"></div><div class=\"wibiya_toolbar_side_seperator\"></div></div></div></div><div><iframe height=\"0\" width=\"0\" id=\"statFrame\" src=\"\" style=\"border:none ; position: absolute; display: block;\"></iframe></div>";
            wibiyaToolbar.MinimizedHTML = "<div class=\"wibiya_toolbar_wrapper\" id=\"wibiya_toolbar_wrapper_mini\"><div class=\"wibiya_toolbar_minimized_holder\"><div class=\"wibiya_toolbar_side_minimize\"><div class=\"wibiya_toolbar_side_seperator\"></div><div class=\"wibiya_toolbar_left_gradian\"></div><div class=\"wibiya_toolbar_side_seperator wibiya_toolbar_side_left\"><div class=\"wibiya_toolbar_side_70per side_70perFirstLeft wibiya_toolbar_BG\"></div><div class=\"wibiya_toolbar_side_20per side_20perFirstLeft wibiya_toolbar_BG\"></div><div class=\"wibiya_toolbar_side_40per side_40perFirstLeft wibiya_toolbar_BG\"></div><div class=\"wibiya_toolbar_side_20per side_20perSecondLeft wibiya_toolbar_BG\"></div><div class=\"wibiya_toolbar_side_70per side_70perSecondLeft wibiya_toolbar_BG\"></div><div class=\"wibiya_toolbar_side_twopx wibiya_toolbar_BG wibiya_toolbar_opacity\"></div><div class=\"wibiya_toolbar_side_threepx wibiya_toolbar_BG wibiya_toolbar_opacity\"></div><div class=\"wibiya_toolbar_side_colHold wibiya_toolbar_BG wibiya_toolbar_opacity\"></div></div></div><div class=\"wibiya_toolbar_minimized_holder_middle wibiyaToolbar_minimized_maximize\"><div class=\"wibiya_toolbar_middle_bg wibiya_toolbar_BG wibiya_toolbar_opacity\"></div><div class=\"wibiya_toolbar_middle_gradian\"></div><div id=\"wibiya_toolbar_middle_item_holder\">                            <div class=\"itemLeft\">                                <table cellspacing=\"0\" border=\"0\" cellpadding=\"0\" class=\"itemTable\" dir=\"ltr\">                                    <tbody>                                        <tr>                                            <td>                                                <img id=\"wibiyaToolbar_minimized_favicon\" src=\"http://cdn.wibiya.com/Graphics_Toolbar/Favicons/Defaultfavicon10050_2906.png\" class=\"wibiyaToolbar_itemImg\">                                           </td><td>                                               <span class=\"wibiyaToolbar_itemText\">Tools</span>                                            </td>                                        </tr>                                    </tbody>                                </table>                            </div>                            <div class=\"itemLeft\"><div class=\"wibiyaToolbar_divider minMaxBtn_divider\"></div></div>                            <div class=\"itemLeft minMaxBtnDiv_maximize\">                                    <table cellspacing=\"0\" border=\"0\" cellpadding=\"0\" class=\"itemTable\">                                        <tbody>                                            <tr>                                                <td>                                                    <div id=\"minMaxBtn_maximize\" class=\"wibiya_toolbar_maximizeBtnDark\" style=\'\'></div>                                                    <div style=\"visibility: hidden;\" class=\"wibiyaToolbar_tooltip wibiyaToolbar_tooltip_Right\"><span class=\"wibiyaToolbar_tooltip_text\">Maximize Toolbar</span></div>                                                </td>                                            </tr>                                        </tbody>                                    </table></div></div></div><div class=\"wibiya_toolbar_side_minimize\">                        <div class=\"wibiya_toolbar_side_seperator wibiya_toolbar_side_right\" ><div class=\"wibiya_toolbar_side_70per side_70perFirstRight wibiya_toolbar_BG\"></div><div class=\"wibiya_toolbar_side_20per side_20perFirstRight wibiya_toolbar_BG\"></div><div class=\"wibiya_toolbar_side_40per side_40perFirstRight wibiya_toolbar_BG\"></div><div class=\"wibiya_toolbar_side_20per side_20perSecondRight wibiya_toolbar_BG\"></div><div class=\"wibiya_toolbar_side_70per side_70perSecondRight wibiya_toolbar_BG\"></div><div class=\"wibiya_toolbar_side_twopx wibiya_toolbar_BG wibiya_toolbar_opacity\"></div><div class=\"wibiya_toolbar_side_threepx wibiya_toolbar_BG wibiya_toolbar_opacity\"></div><div class=\"wibiya_toolbar_side_colHold wibiya_toolbar_BG wibiya_toolbar_opacity\"></div></div> <div class=\"wibiya_toolbar_right_gradian\"></div><div class=\"wibiya_toolbar_side_seperator\"></div>                        </div></div></div>";
            wibiyaToolbar.TempWiwiHTML = "<div class=\"wibiyaToolbar_wiwi_main\">    <div class=\"wibiyaToolbar_wiwi_header_main\">        <div id=\"wibiyaToolbar_wiwi_hl\">            <div class=\"wibiya_toolbar_side_seperator\"></div>            <div class=\"wibiya_toolbar_left_gradian\"></div>            <div class=\"wibiya_toolbar_side_seperator wibiya_toolbar_side_left\">                <div class=\"wibiya_toolbar_side_70per side_70perFirstLeft wibiya_toolbar_BG\"></div>                <div class=\"wibiya_toolbar_side_20per side_20perFirstLeft wibiya_toolbar_BG\"></div>                <div class=\"wibiya_toolbar_side_40per side_40perFirstLeft wibiya_toolbar_BG\"></div>                <div class=\"wibiya_toolbar_side_20per side_20perSecondLeft wibiya_toolbar_BG\"></div>                <div class=\"wibiya_toolbar_side_70per side_70perSecondLeft wibiya_toolbar_BG\"></div>                <div class=\"wibiya_toolbar_side_twopx wibiya_toolbar_BG wibiya_toolbar_opacity\"></div>                <div class=\"wibiya_toolbar_side_threepx wibiya_toolbar_BG wibiya_toolbar_opacity\"></div>                <div class=\"wibiya_toolbar_side_colHold wibiya_toolbar_BG wibiya_toolbar_opacity\"></div>            </div>        </div>        <div class=\"wibiyaToolbar_wiwi_header\">            <div class=\"wibiya_toolbar_middle_gradian\"></div>            <div class=\"wibiya_toolbar_middle_bg wibiya_toolbar_BG wibiya_toolbar_opacity\"></div>            <div class=\"wibiyaToolbar_wiwi_title\">                <table cellspacing=\"0\" cellpadding=\"0\" border=\"0\">                    <tr>                        <td>                            <img class=\"wibiyaToolbar_wiwi_icon\" alt=\"Popout\" src=\"\"/>                        </td>                        <td class=\"wibiyaToolbar_wiwi_caption\">                            &nbsp;&nbsp; Wiwi Title                        </td>                    </tr>                </table>            </div>            <div class=\"wibiyaToolbar_wiwi_close\">                <div class=\"wibiyaToolbar_wiwi_Mini\">                </div>                <div class=\"wibiyaToolbar_wiwi_Pop\">                </div>                <div class=\"wibiyaToolbar_wiwi_close_a\">                </div>            </div>        </div>        <div id=\"wibiyaToolbar_wiwi_hr\">            <div class=\"wibiya_toolbar_side_seperator wibiya_toolbar_side_right\">                <div class=\"wibiya_toolbar_side_70per side_70perFirstRight wibiya_toolbar_BG\"></div>                <div class=\"wibiya_toolbar_side_20per side_20perFirstRight wibiya_toolbar_BG\"></div>                <div class=\"wibiya_toolbar_side_40per side_40perFirstRight wibiya_toolbar_BG\"></div>                <div class=\"wibiya_toolbar_side_20per side_20perSecondRight wibiya_toolbar_BG\"></div>                <div class=\"wibiya_toolbar_side_70per side_70perSecondRight wibiya_toolbar_BG\"></div>                <div class=\"wibiya_toolbar_side_twopx wibiya_toolbar_BG wibiya_toolbar_opacity\"></div>                <div class=\"wibiya_toolbar_side_threepx wibiya_toolbar_BG wibiya_toolbar_opacity\"></div>                <div class=\"wibiya_toolbar_side_colHold wibiya_toolbar_BG wibiya_toolbar_opacity\"></div>            </div>            <div class=\"wibiya_toolbar_right_gradian\"></div>            <div class=\"wibiya_toolbar_side_seperator\"></div>        </div>    </div>    <div class=\"wibiyaToolbar_wiwi_body_main\">        <div id=\"wibiyaToolbar_wiwi_bl\"></div>        <div class=\"wibiyaToolbar_wiwi_body\">        </div>        <div id=\"wibiyaToolbar_wiwi_br\"></div>    </div>    <div class=\"wibiyaToolbar_wiwi_placeholder_main\">        <div id=\"wibiyaToolbar_wiwi_pl\"></div>        <div class=\"wibiyaToolbar_wiwi_placeholder\"></div>        <div id=\"wibiyaToolbar_wiwi_pr\"></div>    </div>    <div class=\"wibiyaToolbar_wiwi_footer_main\">        <div id=\"wibiyaToolbar_wiwi_fl\">        </div>        <div class=\"wibiyaToolbar_wiwi_footer\">            <a href=\"http://www.wibiya.com?FtrLnk=true\" class=\"wibiyaToolbar_wiwi_footerlink\" target=\"blank\">Powered by</a>            <div>                <a style=\"\" class=\"wibiyaToolbar_wiwi_close_window\" href=\"javascript: void(0)\">Close window</a>            </div>        </div>        <div id=\"wibiyaToolbar_wiwi_fr\">        </div>    </div></div>";

if(!this.JSON){
    JSON={};
}(function(){
    function f(n){
        return n<10?'0'+n:n;
    }
    if(typeof Date.prototype.toJSON!=='function'){
        Date.prototype.toJSON=function(key){
            return this.getUTCFullYear()+'-'+f(this.getUTCMonth()+1)+'-'+f(this.getUTCDate())+'T'+f(this.getUTCHours())+':'+f(this.getUTCMinutes())+':'+f(this.getUTCSeconds())+'Z';
        };

        String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(key){
            return this.valueOf();
        };
    }
    var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={
        '\b':'\\b',
        '\t':'\\t',
        '\n':'\\n',
        '\f':'\\f',
        '\r':'\\r',
        '"':'\\"',
        '\\':'\\\\'
    },rep;
    function quote(string){
        escapable.lastIndex=0;
        return escapable.test(string)?'"'+string.replace(escapable,function(a){
            var c=meta[a];
            return typeof c==='string'?c:'\\u'+('0000'+a.charCodeAt(0).toString(16)).slice(-4);
        })+'"':'"'+string+'"';
    }
    function str(key,holder){
        var i,k,v,length,mind=gap,partial,value=holder[key];
        if(value&&typeof value==='object'&&typeof value.toJSON==='function'){
            value=value.toJSON(key);
        }
        if(typeof rep==='function'){
            value=rep.call(holder,key,value);
        }
        switch(typeof value){
            case'string':
                return quote(value);
            case'number':
                return isFinite(value)?String(value):'null';
            case'boolean':case'null':
                return String(value);
            case'object':
                if(!value){
                    return'null';
                }
                gap+=indent;
                partial=[];
                if(Object.prototype.toString.apply(value)==='[object Array]'){
                    length=value.length;
                    for(i=0;i<length;i+=1){
                        partial[i]=str(i,value)||'null';
                    }
                    v=partial.length===0?'[]':gap?'[\n'+gap+partial.join(',\n'+gap)+'\n'+mind+']':'['+partial.join(',')+']';
                    gap=mind;
                    return v;
                }
                if(rep&&typeof rep==='object'){
                    length=rep.length;
                    for(i=0;i<length;i+=1){
                        k=rep[i];
                        if(typeof k==='string'){
                            v=str(k,value);
                            if(v){
                                partial.push(quote(k)+(gap?': ':':')+v);
                            }
                        }
                    }
                }else{
                    for(k in value){
                        if(Object.hasOwnProperty.call(value,k)){
                            v=str(k,value);
                            if(v){
                                partial.push(quote(k)+(gap?': ':':')+v);
                            }
                        }
                    }
                }
                v=partial.length===0?'{}':gap?'{\n'+gap+partial.join(',\n'+gap)+'\n'+mind+'}':'{'+partial.join(',')+'}';
                gap=mind;
                return v;
        }
    }
    if(typeof JSON.stringify!=='function'){
        JSON.stringify=function(value,replacer,space){
            var i;
            gap='';
            indent='';
            if(typeof space==='number'){
                for(i=0;i<space;i+=1){
                    indent+=' ';
                }
            }else if(typeof space==='string'){
                indent=space;
            }
            rep=replacer;
            if(replacer&&typeof replacer!=='function'&&(typeof replacer!=='object'||typeof replacer.length!=='number')){
                throw new Error('JSON.stringify');
            }
            return str('',{
                '':value
            });
        };
    }
    if(typeof JSON.parse!=='function'){
        JSON.parse=function(text,reviver){
            var j;
            function walk(holder,key){
                var k,v,value=holder[key];
                if(value&&typeof value==='object'){
                    for(k in value){
                        if(Object.hasOwnProperty.call(value,k)){
                            v=walk(value,k);
                            if(v!==undefined){
                                value[k]=v;
                            }else{
                                delete value[k];
                            }
                        }
                    }
                }
                return reviver.call(holder,key,value);
            }
            cx.lastIndex=0;
            if(cx.test(text)){
                text=text.replace(cx,function(a){
                    return'\\u'+('0000'+a.charCodeAt(0).toString(16)).slice(-4);
                });
            }
            if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,'@').replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,']').replace(/(?:^|:|,)(?:\s*\[)+/g,''))){
                j=eval('('+text+')');
                return typeof reviver==='function'?walk({
                    '':j
                },''):j;
            }
            throw new SyntaxError('JSON.parse');
        };
    }
})();


wibiyaToolbar.framework.currentZIndex = 8999999;

String.prototype.wiFormat = function() {
    var pattern = /\{\d+\}/g;
    var args = arguments;
    return this.replace(pattern, function(capture) {
        return args[capture.match(/\d+/)];
    });
};

jQuery.fn.hand = function(){
    return this.css('cursor','pointer');
};

jQuery.fn.vhide = function(){
    return this.css('visibility','hidden');
};

jQuery.fn.vshow = function(){
    return this.css('visibility','visible');
};

jQuery.fn.linkBehavior = function(){
    this.mouseover(function(){
        var _item = jQuery(this);
        if (_item.find('.wibiyaToolbar_menu').attr('menu_opened')!='yes'){
            _item.hand().removeClass('wibiyaToolbar_item_normal').addClass('wibiyaToolbar_item_over').find('.wibiyaToolbar_tooltip').vshow();
        }
        wibiyaToolbar.framework.linkMouseOver(_item);
    }).mouseout(function(){
        var _item = jQuery(this);
        _item.removeClass('wibiyaToolbar_item_over').addClass('wibiyaToolbar_item_normal').find('.wibiyaToolbar_tooltip').vhide();
        wibiyaToolbar.framework.linkMouseOut(_item);
    });
    return this;
};

jQuery.fn.multilinkBehavior = function(){
    this.mouseover(function(){
        var _item = jQuery(this);
        if (_item.find('.wibiyaToolbar_menu').attr('menu_opened')=='no'){
            _item.hand().removeClass('wibiyaToolbar_item_normal').addClass('wibiyaToolbar_item_over').parent().find('.wibiyaToolbar_tooltip').vshow();
        }
        wibiyaToolbar.framework.linkMouseOver(_item);
    }).mouseout(function(){
        var _item = jQuery(this);
        _item.removeClass('wibiyaToolbar_item_over').addClass('wibiyaToolbar_item_normal').parent().find('.wibiyaToolbar_tooltip').vhide();
        wibiyaToolbar.framework.linkMouseOut(_item);
    });
    return this;
};


wibiyaToolbar.framework.getViewPort=function(dir){
    if (typeof window.innerWidth != "undefined"){
        return dir=='h'?window.innerHeight:window.innerWidth;
    }
    else if (typeof document.documentElement != "undefined" && typeof document.documentElement.clientWidth != "undefined" && document.documentElement.clientWidth !== 0){
        return dir=='h'?document.documentElement.clientHeight:document.documentElement.clientWidth;
    }
    else{
        return dir=='h'?document.getElementsByTagName("body")[0].clientHeight:document.getElementsByTagName("body")[0].clientWidth;
    }
};

wibiyaToolbar.framework.getHeight = function(height){
    var _height = height.toString();
    var _pres_position = _height.indexOf("%");
    if (_pres_position != -1){
        _height = _height.substring(0,_pres_position);
        _height = wibiyaToolbar.framework.getViewportHeight()*(_height/100);
    }
    else{
        _height = Number(_height);
    }
    return _height;
};

wibiyaToolbar.framework.openWiwi = function(options) {
    var _height = wibiyaToolbar.framework.getHeight(options.dimention.height);

    wibiyaToolbar.framework.remove_lightbox();
    var _wiwi;
    var _numberOfOpenWindows;
    var _link_content;
    var _iframe = '<iframe frameborder="0" SCROLLING="{0}" allowtransparency="true" src="{1}" width="{2}" height="{3}" style="{4}"></iframe>';
    var _style1 = 'overflow-y: auto;overflow-x: hidden;';
    var _style2 = 'overflow: hidden;';
    switch (options.actionType){
        case "Link":
            switch (options.windowType){
                case 1:
                    if (jQuery("#"+options.name).size()===0){
                        _wiwi = wibiyaToolbar.framework.createWiwi("body", options);
                        _link_content = (options.scroll=="1" || options.scroll=="YES") ?
                        _iframe.wiFormat("YES",options.link,options.dimention.width,_height,_style1) :
                        _iframe.wiFormat("NO",options.link,'100%','100%',_style2);
			
                        _wiwi.fadeIn(500,function(){
                            wibiyaToolbar.framework.WriteProfile('OpenWiwi', _wiwi.attr('toolbarappid'));
                            _wiwi.find(".wibiyaToolbar_wiwi_body").html(_link_content);
                        });
                    }
                    break;
                case 2:
                    _numberOfOpenWindows = jQuery("#"+options.name).size();
                    if (_numberOfOpenWindows>0){
                        wibiyaToolbar.framework.close_wiwi(jQuery("#"+options.name), "slide_down");
                        wibiyaToolbar.framework.remove_lightbox();
                    }
                    else{
                        _wiwi = wibiyaToolbar.framework.createWiwi("body", options);
                        _link_content = (options.scroll=="1" || options.scroll=="YES") ?
                        _iframe.wiFormat("YES",options.link,options.dimention.width,_height,_style1) :
                        _iframe.wiFormat("NO",options.link,'100%','100%',_style2);

                        wibiyaToolbar.framework.appendLightbox("#"+options.name);
                        _wiwi.fadeIn(500,function(){
                            wibiyaToolbar.framework.WriteProfile('OpenWiwi',_wiwi.attr('toolbarappid'));
                            _wiwi.find(".wibiyaToolbar_wiwi_body").html(_link_content);
                        });
                    }
                    break;
                case 4:
                    var _attr = 'status=1,toolbar=1,scrollbars=1,location=1,resizable=1,height={0},width={1}';
                    window.open(options.link, "WibiyaToolbarNewWindow", _attr.wiFormat(_height,options.dimention.width));
                    break;
                case 3:
                    wibiyaToolbar.LinkToBeOpened = options.link;
                    setTimeout("window.location=wibiyaToolbar.LinkToBeOpened;",500);
                    break;
            }
            break;
        case "Code":
            _numberOfOpenWindows = jQuery("#"+options.name).size();
            if (_numberOfOpenWindows>0){
                wibiyaToolbar.framework.close_wiwi(jQuery("#"+options.name), "slide_down");
                wibiyaToolbar.framework.remove_lightbox();
            }
            else{
                _wiwi = wibiyaToolbar.framework.createWiwi("body", options);
                var _code_content =  options.code;
                if(options.windowType==2){
                    wibiyaToolbar.framework.appendLightbox("#"+options.name);
                }
                wibiyaToolbar.framework.WriteProfile('OpenWiwi', _wiwi.attr('toolbarappid'));
                _wiwi.find(".wibiyaToolbar_wiwi_body").html(_code_content);
                _wiwi.fadeIn(500,function(){});
            }
            break;
    }
};




wibiyaToolbar.framework.createWiwiMenu =  function(container, options){    
    var _height = wibiyaToolbar.framework.getHeight(options.dimention.height);
    wibiyaToolbar.framework.close_all_wiwis();
    var _newWiwiMenu = jQuery("#wibiyaToolbar_window_template").clone();
    if (typeof(options.appId) != "undefined"){
        _newWiwiMenu .attr("appId", options.appId);
    }
    if (typeof(options.toolbarAppId) != "undefined"){
        _newWiwiMenu .attr("toolbarAppId", options.toolbarAppId);
    }
    _newWiwiMenu .attr("id", options.name);
    _newWiwiMenu .attr("wiwi_opened", "yes");
    _newWiwiMenu .css("z-index",wibiyaToolbar.framework.currentZIndex++);
    _newWiwiMenu .css("width",(options.dimention.width+10)+"px");
    _newWiwiMenu .css("height",(_height+30)+"px");
    var obJ = jQuery(container);
    var parentFloat = obJ.parent().css('float');  
    _newWiwiMenu .addClass("wibiyaToolbar_window_wiwiMenu");
    _newWiwiMenu .removeClass("wibiyaToolbar_window");	
    if(parentFloat == "right"){
        _newWiwiMenu .css("right","0px");
        _newWiwiMenu .css("left","auto");
    }

    _newWiwiMenu .find(".wibiyaToolbar_wiwi_main").css("bottom","-"+(_height+30)+"px");
    _newWiwiMenu .find(".wibiyaToolbar_wiwi_body, .wibiyaToolbar_wiwi_body_main").css("height",_height);
    _newWiwiMenu .find(" .wibiyaToolbar_wiwi_placeholder, .wibiyaToolbar_wiwi_body").css("width",options.dimention.width+"px");
    _newWiwiMenu .find(".wibiyaToolbar_wiwi_footer, .wibiyaToolbar_wiwi_header").css("width",(options.dimention.width-10)+"px");
    _newWiwiMenu .find(".wibiyaToolbar_wiwi_caption").html(options.title);
    _newWiwiMenu .find(".wibiyaToolbar_wiwi_icon").attr("src",options.icon);
    _newWiwiMenu .find(".wibiyaToolbar_wiwi_close_a").css('float','right');
    _newWiwiMenu .find(".wibiyaToolbar_wiwi_Pop").remove();
    _newWiwiMenu .find(".wibiyaToolbar_wiwi_Mini").remove();
    _newWiwiMenu .find(".wibiyaToolbar_wiwi_footer_main").remove();    
    // _newWiwiMenu.css("bottom" , wibiyaToolbar.Data.TBStyleXml.size.height);
    jQuery(container).append(_newWiwiMenu );    
    return _newWiwiMenu ;
};


wibiyaToolbar.framework.createWiwi =  function(container, options){
    //    if (typeof(wibiyaToolbar.OpenWiwis) == "undefined") {
    //        wibiyaToolbar.OpenWiwis = [];
    //    }
    //    wibiyaToolbar.OpenWiwis.push(options.toolbarAppId.toString());
    var _height = wibiyaToolbar.framework.getHeight(options.dimention.height);

    wibiyaToolbar.framework.close_all_wiwis();
    var _newWiwi = jQuery("#wibiyaToolbar_window_template").clone();
    if (typeof(options.appId) != "undefined"){
        _newWiwi.attr("appId", options.appId);
    }
    if (typeof(options.toolbarAppId) != "undefined"){
        _newWiwi.attr("toolbarAppId", options.toolbarAppId);
    }
    _newWiwi.attr("id", options.name);
    _newWiwi.css("z-index",wibiyaToolbar.framework.currentZIndex++);
    _newWiwi.css("width",(options.dimention.width+10)+"px");
    _newWiwi.css("height",(_height+56)+"px");
    _newWiwi.find(".wibiyaToolbar_wiwi_body, .wibiyaToolbar_wiwi_body_main").css("height",_height);
    _newWiwi.find(" .wibiyaToolbar_wiwi_placeholder, .wibiyaToolbar_wiwi_body").css("width",options.dimention.width+"px");
    _newWiwi.find(".wibiyaToolbar_wiwi_footer, .wibiyaToolbar_wiwi_header").css("width",(options.dimention.width-10)+"px");

    _newWiwi.find(".wibiyaToolbar_wiwi_caption").html(options.title);
    _newWiwi.find(".wibiyaToolbar_wiwi_icon").attr("src",options.icon);
    _newWiwi = wibiyaToolbar.framework.positionWiwi(_newWiwi,options);
    _newWiwi.find(".wibiyaToolbar_wiwi_close_a").click(function(){
        if (typeof(options.appId) != "undefined" && typeof(options.toolbarAppId) != "undefined"){
            wibiyaToolbar.framework.fun_RegisterAction_extended(options.appId,options.toolbarAppId,4,0,"");
        }
        wibiyaToolbar.framework.close_wiwi(jQuery("#"+options.name),"fade_out");
        wibiyaToolbar.framework.remove_lightbox();
    });

    if (typeof(options.controles) != "undefined" && options.controles.close ===0) {
        _newWiwi .find(".wibiyaToolbar_wiwi_close_a").remove();
    }
    _newWiwi.find(".wibiyaToolbar_wiwi_close_window").click(function(){
        if (typeof(options.toolbarAppId) != "undefined" && typeof(options.appId) != "undefined")
        {
            wibiyaToolbar.framework.fun_RegisterAction_extended(options.appId,options.toolbarAppId,4,0,"");
        }
        wibiyaToolbar.framework.close_wiwi(jQuery("#"+options.name),"fade_out");
        wibiyaToolbar.framework.remove_lightbox();
    });
    if (typeof(options.controles) != "undefined" && options.controles.pop ===0) {
        _newWiwi .find(".wibiyaToolbar_wiwi_Pop").remove();
    }
    _newWiwi.find(".wibiyaToolbar_wiwi_Pop").click(function(){
        if (typeof(options.toolbarAppId) != "undefined" && typeof(options.appId) != "undefined"){
            wibiyaToolbar.framework.fun_RegisterAction_extended(options.appId,options.toolbarAppId,10,0,"");
        }
        wibiyaToolbar.framework.fun_PopOut();
    });
    if (typeof(options.controles) != "undefined" && options.controles.min ===0) {
        _newWiwi .find(".wibiyaToolbar_wiwi_Mini").remove();
    }
    _newWiwi.find(".wibiyaToolbar_wiwi_Mini").click(function(){
        if (typeof(options.toolbarAppId) != "undefined" && typeof(options.appId) != "undefined")
        {
            wibiyaToolbar.framework.fun_RegisterAction_extended(options.appId,options.toolbarAppId,4,0,"");
        }
        wibiyaToolbar.framework.close_wiwi(jQuery("#"+options.name),"minimize");
        wibiyaToolbar.framework.remove_lightbox();
    });

    if (typeof(options.controles) != "undefined" && options.controles.icon ===0) {
        _newWiwi .find(".wibiyaToolbar_wiwi_icon").remove();
    }

    _newWiwi = wibiyaToolbar.framework.createWiwiFooter(_newWiwi,options);
    if (typeof( _newWiwi.draggable)== 'function')
    {
        _newWiwi.draggable({
            containment : 'body',
            cursor      : 'move',
            handle      : '.wibiyaToolbar_wiwi_header',
            scroll      : true
        });

        _newWiwi.find('.wibiyaToolbar_wiwi_header').css('cursor','move');
    }
    jQuery(container).append(_newWiwi);
    return _newWiwi;
};

wibiyaToolbar.framework.appendLightbox = function(name){
    jQuery("body").append('<div id="wibiya_TB_overlay" class="wibiya_TB_overlayBG"></div>');
    if (typeof document.body.style.maxHeight === "undefined"){
        jQuery("body","html").css({
            height: "100%",
            width: "100%"
        });
        jQuery("html").css("overflow","hidden");
    }
    if(wibiyaToolbar.framework.tb_detectMacXFF()){
        jQuery("#wibiya_TB_overlay").addClass("wibiya_TB_overlayMacFFBGHack");
    }else{
        jQuery("#wibiya_TB_overlay").addClass("wibiya_TB_overlayBG");
    }
    jQuery("#wibiya_TB_overlay").click(function(){
        jQuery(name).remove();
        wibiyaToolbar.framework.remove_lightbox();
    });
};

wibiyaToolbar.framework.getViewportHeight = function()
{
    return wibiyaToolbar.framework.getViewPort('h');
};

wibiyaToolbar.framework.getViewportWidth = function()
{
    return wibiyaToolbar.framework.getViewPort('w');
};

wibiyaToolbar.framework.remove_lightbox = function()
{
    jQuery("#wibiya_TB_overlay").fadeOut(100,function(){
        jQuery("#wibiya_TB_overlay").remove();
    });
};

wibiyaToolbar.framework.close_all_wiwis = function()
{
    jQuery(".wibiyaToolbar_window[id!=wibiyaToolbar_window_template]").each(function(){
        var item = jQuery(this);
        if(item.css("visibility") != "hidden"){
            wibiyaToolbar.framework.close_wiwi(item,"fade_out");
        }
    });
    if (typeof(wiApp_share) != 'undefined') {
        wiApp_share.hideShareDialog();
    }
};

wibiyaToolbar.framework.close_wiwi = function(wiwi, type){
    switch (type) {
        case "slide_down":
            wiwi.find("#wibiyaToolbar_window_content").html("&nbsp;");
            wiwi.animate({
                "bottom":"-1000px"
            },500,"linear",function(){
                wiwi.vhide();
            });
            break;
        case "fade_out":
            wiwi.find("#wibiyaToolbar_window_content").html("&nbsp;");
            if(wiwi.hasClass("PersistOpen")){
            //wibiyaToolbar.framework.minimize_wiwi(wiwi);
            }
            else{
                wiwi.fadeOut(400,function(){
                    wiwi.remove();
                });
            }
            break;
        case "minimize":
            wiwi.find("#wibiyaToolbar_window_content").html("&nbsp;");
            wibiyaToolbar.framework.minimize_wiwi(wiwi);
            break;
        default:
            wiwi.remove();
            break;
    }

    
    wibiyaToolbar.framework.WriteProfile('CloseWiwi',jQuery(wiwi).attr('toolbarappid'));
};

wibiyaToolbar.framework.minimize_wiwi = function(wiwi){
    wiwi.fadeTo(400,0,function(){
        wiwi.vhide();
    });
}

wibiyaToolbar.framework.show_wiwi = function(wiwi)
{
    wibiyaToolbar.framework.close_all_wiwis();
    wiwi.css("visibility","visible").fadeTo(400,1);
};

wibiyaToolbar.framework.tb_detectMacXFF = function(){
    var userAgent = navigator.userAgent.toLowerCase();
    return (userAgent.indexOf("mac") != -1 && userAgent.indexOf("firefox")!=-1);
};

wibiyaToolbar.framework.CloseMenu = function(menuObject){
    menuObject.attr("menu_opened","no");
    menuObject.find(".wibiyaToolbar_panel_body").hide(1);
    menuObject.find(".wibiyaToolbar_panel_header").hide(1);
    menuObject.slideUp(200);
};

wibiyaToolbar.framework.OpenMenu = function(menuObject){ 
    menuObject.parent().find(".wibiyaToolbar_tooltip").hide();

    menuObject.attr("menu_opened","yes").slideDown(300, function() {
        menuObject.find(".wibiyaToolbar_panel_body").show(1);
        menuObject.find(".wibiyaToolbar_panel_header").show(1);
        fun_AddClickHandlerForBodyForMenu(jQuery(this));
    });
    var LeftOffset = menuObject.offset().left+ Number(menuObject.css('width').split('px')[0]);
    LeftOffset  = wibiyaToolbar.framework.getViewportWidth() -LeftOffset;
    if (LeftOffset  < 0)
    {
        LeftOffset -=30;
        menuObject.css('left',LeftOffset+'px');
    }
    var obJ = jQuery(menuObject);
    var parentFloat = obJ.parent().parent().css('float');   
    if(parentFloat == "right"){
        menuObject .css("right","0px");
        menuObject .css("left","auto");
    }
};

wibiyaToolbar.framework.OpenWiwiMenu = function(menuObject){    
    menuObject.parent().find(".wibiyaToolbar_tooltip").hide();
    if(menuObject.attr("wiwi_opened") == "yes"){        
        if(jQuery('#wibiya_TB_overlay')) {
            jQuery('#wibiya_TB_overlay').remove();
        }
        menuObject.find(".wibiyaToolbar_recent_body_inner").fadeOut(400,function(){
            menuObject.find(".wibiyaToolbar_wiwi_main").animate({
                bottom:'-'+menuObject.css("height")
            },400,function(){
                menuObject.hide();
                menuObject.attr("wiwi_opened","no");
                jQuery("body").unbind("click");
            });            
        });        
    }else{
        menuObject.show();        
        menuObject.find(".wibiyaToolbar_wiwi_main").animate({
            bottom:0
        },400,function(){
            menuObject.find(".wibiyaToolbar_recent_body_inner").fadeIn(400);
            menuObject.attr("wiwi_opened","yes");
            fun_AddClickHandlerForBodyForWiwiMenu(jQuery(menuObject));
        });        
    }    
};

fun_AddClickHandlerForBody = function(Wiwi){
    jQuery("body").click(function() {
        Wiwi.slideUp(300, function(){
            Wiwi.attr("menu_opened","no");
            if (Wiwi.attr("id")=="wibiyaToolbar_share_menu"){
                Wiwi.remove();
            }
        });
        jQuery("body").unbind("click");
    });
};

fun_AddClickHandlerForBodyForMenu = function(_Menu){
    jQuery("body").click(function(){       
        wibiyaToolbar.framework.CloseMenu(_Menu);
        jQuery("body").unbind("click");
    });
};

fun_AddClickHandlerForBodyForWiwiMenu = function(_Menu){    
    jQuery("body").one('click',function(){
        wibiyaToolbar.framework.OpenWiwiMenu(_Menu);
        jQuery("body").unbind("click");
    });
};


wibiyaToolbar.framework.positionWiwi = function(_wiwi,options){
    var portWidth = wibiyaToolbar.framework.getViewportWidth();
    var portHeight = wibiyaToolbar.framework.getViewportHeight();

    var posX = options.position.x;
    var posY = _wiwi.css('height');
    if(posY=='0px'){
        posY =_wiwi[0].style.height
        } // <<= jQuery 1.4.3 Bug Fix
    var wiwiWidth = options.dimention.width.toString();
    var wiwiHeight = options.dimention.height.toString();

    // Checking hight and width
    
    if(wiwiWidth.indexOf('px')==-1 && wiwiWidth.indexOf('%')>0){
        wiwiWidth = Number(_wiwi.css('width').split('%')[0]);
        wiwiWidth = Math.floor(portWidth*(wiwiWidth/100));
    } else {
        wiwiWidth = Number(_wiwi.css('width').split('px')[0]);
        if(wiwiWidth=='0'){
            wiwiWidth = Number(_wiwi[0].style.width.split('px')[0])
            } // <<= jQuery 1.4.3 Bug Fix
    }
    
    if(wiwiHeight.indexOf('px')==-1 && wiwiHeight.indexOf('%')>0){
        wiwiHeight = Number(_wiwi.css('height').split('%')[0]);
        wiwiHeight = Math.floor(wiwiWidth*(wiwiHeight/100));
    } else {
        wiwiHeight = Number(_wiwi.css('height').split('px')[0]);
        if(wiwiHeight=='0'){
            wiwiHeight =Number(_wiwi[0].style.height.split('px')[0])
            } // <<= jQuery 1.4.3 Bug Fix
    }

    if(wiwiWidth>portWidth){
        posX =0
    }
    else
    if(posX+wiwiWidth>portWidth){
        posX = posX+wiwiWidth - postWidth;
    }
    if(wiwiHeight>portHeight){
        posY =0
    }
    else
    if(posY+wiwiHeight>portHeight){
        posY = posX+wiwiHeight - postHeight;
    }

    switch(options.type){
        case 'custom':
            _wiwi.css({
                "bottom":posY,
                "left":posX,
                "display":"none"
            });
            break;
        case 'left':
            _wiwi.css({
                "bottom":wibiyaToolbar.Data.TBStyleXml.size.height+"px",
                "left":posX,
                "display":"none"
            });
            break;
        case 'right':

            _wiwi.css({
                "bottom":wibiyaToolbar.Data.TBStyleXml.size.height+"px",
                "right":posX,
                "display":"none"
            });
            break;
        case 'center':
            _wiwi.css({
                "bottom":wibiyaToolbar.Data.TBStyleXml.size.height+"px",
                "left":((portWidth - wiwiWidth)/2)+"px",
                "display":"none"
            });
            break;
        case 'app':
            var btnClicked = jQuery("#"+options.starterOptions.sender);
            var position_app = btnClicked.offset().left;
            var btnWidth = btnClicked.width();
            var appSide = btnClicked.parent().css('float');
            var WidthofWiwi = Number(_wiwi.css('width').split('px')[0]);
            if(WidthofWiwi=='0'){
                WidthofWiwi = Number(_wiwi[0].style.width.split('px')[0])
                } // <<= jQuery 1.4.3 Bug Fix
            if (appSide == 'right') {
                position_app = (position_app - WidthofWiwi)+ btnWidth;
                if (position_app  < 0) {
                    position_app = 15;
                }
            }
            else
            {
                if (WidthofWiwi+position_app > wibiyaToolbar.framework.getViewportWidth()) {
                    var Offset =  (WidthofWiwi+position_app)-wibiyaToolbar.framework.getViewportWidth();
                    position_app = position_app-Offset-15;
                }
            }
            _wiwi.css({
                "bottom":wibiyaToolbar.Data.TBStyleXml.size.height+"px",
                "left":position_app+"px",
                "display":"none"
            });
            break;
    }

    return _wiwi;
}

wibiyaToolbar.framework.fun_MinMaxCookie = function(_action){
    var _tbs = jQuery("#wibiyaToolbar").attr("state");
    var _COOKIE_MinMax = "WibiyaMinMax";
    var _OPTIONS = {
        path: "/",
        expires: 30
    };
    if (_action == "check"){
        if (typeof(wibiyaToolbar.profile) == "undefined"){
            wibiyaToolbar.framework.WriteProfile("MaxToolbar",0);
            wibiyaToolbar.framework.fun_wibiyaToolbar_toggle();
        }
        else if (wibiyaToolbar.profile.toolbar.stat == "Max"){
            if(_tbs=="off"){
                wibiyaToolbar.framework.fun_wibiyaToolbar_toggle();
            }
        }
        else if (wibiyaToolbar.profile.toolbar.stat == "Min"){
            if (_tbs=="on"){
                wibiyaToolbar.framework.fun_wibiyaToolbar_toggle();
            }
            else{
                /*  jQuery("#wibiyaToolbar").animate({
                    bottom:"-65px"
                },300,function(){
                    jQuery(this).hide();
                });
                jQuery("#wibiyaToolbar").attr("state","off");
                //maximizing toolbar_minimized
                jQuery(".wibiyaToolbarMin").slideDown(300);
                wibiyaToolbar.framework.fun_MinMaxCookie("Min");*/
                var wibiya_toolbar_wrapper = jQuery('#wibiya_toolbar_wrapper');
                var wibiya_toolbar_wrapper_mini = jQuery('#wibiya_toolbar_wrapper_mini');
                var wibiyaToolbarWrap = jQuery("#wibiyaToolbar");
                var wibiyaToolbarMinWrap = jQuery("#wibiyaToolbarNewMinimized");
                jQuery("#wibiyaToolbar").attr("state","off");
                wibiyaToolbar.framework.fun_MinMaxCookie("Min");
                wibiya_toolbar_wrapper_mini.css('bottom',"-55px");
                wibiyaToolbarMinWrap.show();
                wibiya_toolbar_wrapper.animate({
                    bottom: "-55px"
                }, 500,
                function() {
                    wibiyaToolbarWrap.hide();
                    wibiya_toolbar_wrapper.hide();
                    wibiya_toolbar_wrapper_mini.show();
                    wibiya_toolbar_wrapper_mini.animate({
                        bottom: "-24px"
                    }, 500);
                // Animation complete.
                });
            }
        }
    }
    else if (_action == "Min"){
        wibiyaToolbar.framework.WriteProfile("MinToolbar",0);
    }
    else if (_action == "Max"){
        wibiyaToolbar.framework.WriteProfile("MaxToolbar",0);
    }
};

wibiyaToolbar.framework.fun_wibiyaToolbar_toggle = function(){
    var _tbs = jQuery("#wibiyaToolbar").attr("state");
    var wibiya_toolbar_wrapper = jQuery('#wibiya_toolbar_wrapper');
    var wibiya_toolbar_wrapper_mini = jQuery('#wibiya_toolbar_wrapper_mini');
    var wibiyaToolbarWrap = jQuery("#wibiyaToolbar");
    var wibiyaToolbarMinWrap = jQuery("#wibiyaToolbarNewMinimized");
	
    //maximizing toolbar
    if (_tbs=="off"){
        if(wibiya_toolbar_wrapper_mini.length==0){
            jQuery("#wibiyaToolbar").animate({
                bottom:"-65px"
            },100,function(){
                jQuery(this).show(100,function(){
                    jQuery(this).animate({
                        bottom:"0px"
                    },300);
                });
            });
            jQuery("#wibiyaToolbar").attr("state","on");
            //minimizing toolbar_minimized
            jQuery(".wibiyaToolbarMin").slideUp(300);
            wibiyaToolbar.framework.fun_MinMaxCookie("Max");
        }else{
            jQuery("#wibiyaToolbar").attr("state","on");
            wibiyaToolbar.framework.fun_MinMaxCookie("Max");
            wibiya_toolbar_wrapper.css('bottom',"-55px");
            wibiyaToolbarWrap.show();
            wibiya_toolbar_wrapper_mini.animate({
                bottom: "-55px"
            }, 500,
            function() {
                wibiyaToolbarMinWrap.hide();
                wibiya_toolbar_wrapper_mini.hide();
                wibiya_toolbar_wrapper.show();
                wibiya_toolbar_wrapper.animate({
                    bottom: (wibiyaToolbar.Data.TBStyleXml.size.height - 56)+"px"
                }, 500);
            // Animation complete.
            });
        }
		
    //wibiyaToolbar.framework.centerApps(); //align toolbar apps
    }
    else{
        //minimizing toolbar
        if(wibiya_toolbar_wrapper_mini.length==0){
            jQuery("#wibiyaToolbar").animate({
                bottom:"-65px"
            },300,function(){
                jQuery(this).hide();
            });
            jQuery("#wibiyaToolbar").attr("state","off");
            //maximizing toolbar_minimized
            jQuery(".wibiyaToolbarMin").slideDown(300);
            wibiyaToolbar.framework.fun_MinMaxCookie("Min");
        }else{
            jQuery("#wibiyaToolbar").attr("state","off");
            wibiyaToolbar.framework.fun_MinMaxCookie("Min");
            wibiya_toolbar_wrapper_mini.css('bottom',"-55px");
            wibiyaToolbarMinWrap.show();
            wibiya_toolbar_wrapper.animate({
                bottom: "-55px"
            }, 500,
            function() {
                wibiyaToolbarWrap.hide();
                wibiya_toolbar_wrapper.hide();
                wibiya_toolbar_wrapper_mini.show();
                wibiya_toolbar_wrapper_mini.animate({
                    bottom: "-24px"
                }, 500);
            // Animation complete. // bottom: (wibiyaToolbar.Data.TBStyleXml.size.height - 56)+"px"
            });
        }
      				
    }
};

wibiyaToolbar.framework.fun_RegisterAction_extended = function(_AppId,_ToolbarAppId,_ActionId,_Sender,_MetaData){
    var img = new Image(0,0);
    var wstat = "http://wstat.wibiya.com/a.jpg?AppId={0}&ToolbarId={1}&ToolbarAppId={2}&ActionId={3}&Sender={4}&MetaData={5}";
    img.src = wstat.wiFormat(_AppId,wibiyaToolbar.id,_ToolbarAppId,_ActionId,_Sender,_MetaData);
    jQuery.get("http://actions.wibiya.com/SetToolbarAction.php", {
        AppId: _AppId,
        ToolbarId: wibiyaToolbar.id,
        ToolbarAppId : _ToolbarAppId,
        ActionId : _ActionId,
        Sender : _Sender,
        MetaData : _MetaData
    },null,"jsonp");
};

wibiyaToolbar.framework.AddHttp = function(str){
    var http="http://";
    return (str.indexOf(http) !== 0)?"http://"+str:str;
};

wibiyaToolbar.framework.LinkDataReplace = function(link, withData){
    link = link.replace(/Wibiya_TBID/g, wibiyaToolbar.id);
    link = link.replace(/Wibiya_PAGETITLE/g, document.title);
    link = link.replace(/Wibiya_URLesc/g, escape(window.location.href));
    link = link.replace(/Wibiya_URL/g, window.location.href);
    
    if(withData){
        link = link.replace(/Wibiya_SITENAME/g, wibiyaToolbar.Data.SiteName);
        link = link.replace(/Wibiya_SITEURL/g, wibiyaToolbar.Data.SiteUrl);
    }

    return link;
};

wibiyaToolbar.framework.LinkDataReplacor = function(link){
    return wibiyaToolbar.framework.LinkDataReplace(link, true);
};

wibiyaToolbar.framework.LinkDataReplacorNoData = function(link){
    return wibiyaToolbar.framework.LinkDataReplace(link, false);
};

wibiyaToolbar.framework.BDGClick =function(appName,AppIndex){
    var ObjToClickId;
    var _obj = jQuery("div[applicationName="+appName+"]");
    if (AppIndex === 0) {
        ObjToClickId = _obj[0].id;
    }
    else{
        ObjToClickId = (typeof(_obj[AppIndex]) == "undefined") ? _obj[0].id : _obj[AppIndex].id;
    }

    jQuery("#"+ObjToClickId).trigger("click");
};



wibiyaToolbar.framework.BDGClickV2 =function(appId,appTypeId,Index){
    wibiyaToolbar.framework.fun_RegisterAction_extended(appTypeId,appId,55,0,"");
    fname = "";
    //register stats
    switch (appTypeId){
        case 5:
        case 14:
        case 18:
        case 20:
        case 26:
        case 27:
        case 29:
        case 30:
        case 31:
        case 32:
        case 33:
        case 35:
        case 36:
        case 13:
            fname = "wibiyaToolbar.framework.fun_GeneralApp_"+Index+"({sender:'wibiyaToolbar_item_normal_"+Index+"'})";
            break;
        case 4:
            break;
        case 7:
            break;
        case 15:
            break;
        case 17:
            fname = "wibiyaToolbar.framework.fun_CodeApp_"+Index+"({sender:'wibiyaToolbar_item_normal_"+Index+"'})";
            break;
        case 28:
            fname = "wibiyaToolbar.framework.fun_functionBtn_"+Index+"({sender:'wibiyaToolbar_item_normal_"+Index+"'})";
            break;
        case 34:
            break;
        default:
            break;
    }
    eval (fname);
};

wibiyaToolbar.framework.badgeHandler = function(appTypeId){
    BadgeClicked = jQuery("div[appid="+appTypeId+"]:first");
    BadgeToolbarAppId = BadgeClicked.attr("toolbarappid");
    BadgeAppIndex = BadgeClicked.attr("Appindex");
    wibiyaToolbar.framework.BDGClickV2(Number(BadgeToolbarAppId),Number(appTypeId),BadgeAppIndex);
};

wibiyaToolbar.framework.fun_PopOut = function(){
    //wiwis = jQuery(".wibiyaToolbar_window");
    //if (wiwis.length>1)
    if (jQuery(".wibiyaToolbar_window").is(":visible"))
    {
        //var wiwi = wiwis[1];
        var wiwi = jQuery(".wibiyaToolbar_window[id!=wibiyaToolbar_window_template]");
        var height = Number(jQuery(wiwi).css("height").split('px')[0])-56;
        var width = Number(jQuery(wiwi).css("width").split('px')[0])-10;
        var winName = jQuery(wiwi).attr('id');
        var iframeSrc = jQuery(wiwi).find("iframe").attr("src");
        var ScrollType = jQuery(wiwi).find("iframe").css('overflow-y');
        jQuery(wiwi).remove();
        wibiyaToolbar.framework.remove_lightbox();
        wibiyaToolbar.framework.WriteProfile('CloseWiwi',wiwi.attr('toolbarappid'));
        if (typeof(iframeSrc) != 'undefined')
        {
            if (ScrollType == 'auto') {
                PopOutWindow = window.open( iframeSrc,'Popout_'+winName , 'height='+height+',width='+width+',location=no,scrollbars=1');
            }
            else
            {
                PopOutWindow = window.open( iframeSrc,'Popout_'+winName , 'height='+height+',width='+width+',location=no');
            }
            
        }
        else
        {
            PopOutWindow = window.open( '','Popout_'+winName , 'height='+height+',width='+width+',location=no');
            PopOutWindow.document.write(jQuery(wiwi).find(".wibiyaToolbar_wiwi_body").html());
        }

    }
    
};

wibiyaToolbar.framework.delayAction = function(CodeToRun,Time)
{
    jQuery("#wibiyaToolbar").bind('toolbarLoaded',function(){
        setTimeout(CodeToRun,Time);
    });
    
};


wibiyaToolbar.framework.TimerAction = function(functionToRun,Delay,mode)
{
    switch (mode) {
        case 1:
            //jQuery("#wibiyaToolbar").bind('toolbarLoaded',function(){
            setTimeout(functionToRun+"()",Delay);
            //});
            break;
        case 2:
            setTimeout(functionToRun+"();wibiyaToolbar.framework.TimerAction('"+functionToRun+"',"+Delay+","+mode+");",Delay);
            break;
        default:
            break;
    }

};

wibiyaToolbar.framework.registerProfileCookie = function ()
{
    var cookieContent = JSON.stringify(wibiyaToolbar.profile);
    var _OPTIONS = {
        path: "/",
        expires: 30
    };
    jQuery.cookie("WibiyaProfile",cookieContent,_OPTIONS);
};

wibiyaToolbar.framework.WriteProfile = function (actionType,id)
{
    if (typeof (wibiyaToolbar.profile)== "undefined")
    {
        wibiyaToolbar.profile = {
            'toolbar':{
                'stat':{}
            },
            'apps':{
                'openApps':{}
            }

        };
    }
    switch (actionType) {
        case 'MinToolbar':
            wibiyaToolbar.profile.toolbar.stat = 'Min';
            break;
        case 'MaxToolbar':
            wibiyaToolbar.profile.toolbar.stat = 'Max';
            break;
        case 'OpenWiwi':
            //wibiyaToolbar.profile.apps.openApps[id] = '';
            break;
        case 'CloseWiwi':
            //delete (wibiyaToolbar.profile.apps.openApps[id]);
            break;
        default:
            break;
    }
        
    wibiyaToolbar.framework.registerProfileCookie();
};

wibiyaToolbar.framework.ReadProfile = function ()
{
    var profileCookie = jQuery.cookie("WibiyaProfile");
    if (profileCookie !== null) {
        wibiyaToolbar.profile = JSON.parse(profileCookie);
    }
};

wibiyaToolbar.framework.RunProfile = function (){};

wibiyaToolbar.framework.createWiwiFooter =  function(_newWiwi,options){
    var _url_clean = escape(location.href.replace(/http:\/\//g, ""));
    _url_clean = _url_clean.replace(/\//g,"%25252f");

    if (typeof(wibiyaToolbar.Data.customFooter)== 'undefined') {
        var _footer_link = "";
       
        if (typeof(options.appId) == "undefined") {
            _newWiwi.find(".wibiyaToolbar_wiwi_footer").append(_footer_link);
        }
        else {
            if (options.footer == "html") {
                _newWiwi.find(".wibiyaToolbar_wiwi_footer").html(_footer_link);
            }
            else {
                _newWiwi.find(".wibiyaToolbar_wiwi_footer").append(_footer_link);
            }
        }
    }
    else
    {
        var footerHtml = '';
        switch (wibiyaToolbar.Data.customFooter) {
            case "noPowered":
                footerHtml = '<a target="blank" class="" href="javascript:void(0);"></a>';
                break;
            case "JPost":
                footerHtml = '<iframe height="1px" width="1px" style="border:medium none;float:left;" src="http://www.jpost.com/wibiyaframe.htm"/><a target="blank" class="wibiyaToolbar_wiwi_footerlink" href="http://www.wibiya.com?FtrLnk=true">Powered by</a>';
                break;
            default:
                footerHtml ='<a target="blank" class="wibiyaToolbar_wiwi_footerlink" href="http://www.wibiya.com?FtrLnk=true">Powered by</a>';
                break;
        }
        _newWiwi.find(".wibiyaToolbar_wiwi_footerlink").remove();
        _newWiwi.find(".wibiyaToolbar_wiwi_footer").prepend(footerHtml);
    }

    return _newWiwi;
};

wibiyaToolbar.framework.prepare_width = function () {
    //set_wibiya_text_width();
    var leftOffset;
    if (jQuery(".itemLeft:last").offset() === null){
        leftOffset = 0;
    }
    else{
        leftOffset = jQuery(".itemLeft:last").offset().left;
    }

    var isleft = (leftOffset > 0) ? true : false;
    var isright = (jQuery(".itemRight:last").offset().left > 0) ? true : false;
    var window_w = jQuery(window).width();
    var tot_w_l = wibiyaToolbar.framework.prepare_width_l();
    var tot_w_r = wibiyaToolbar.framework.prepare_width_r();
    var w_sum = tot_w_r + tot_w_l + 100;
    var lasLeftOntheRightTop = 0;
    if ( jQuery(".itemRight:last").length >0) {
        lasLeftOntheRightTop =  jQuery(".itemRight:last").position().top;
    }
    if (isleft && isright) {
        if(w_sum > window_w || lasLeftOntheRightTop>20) {
            jQuery(".itemLeft").find(".WibiyaMinRepresentation").show().attr('show','yes');
            jQuery(".itemLeft").find(".TBcontainerDiv").hide().attr('show','no');
            tot_w_l = wibiyaToolbar.framework.prepare_width_l();
            tot_w_r = wibiyaToolbar.framework.prepare_width_r();
            var w_calc = tot_w_r + tot_w_l + 100;

            while( w_calc < window_w && jQuery(".itemRight:last").position().top < 20)
            {
                jQuery(".itemLeft").find(".WibiyaMinRepresentation[show='yes']").filter(":first").hide().attr('show','no');
                jQuery(".itemLeft").find(".TBcontainerDiv[show='no']").filter(":first").show().attr('show','yes');
                tot_w_l = wibiyaToolbar.framework.prepare_width_l();
                tot_w_r = wibiyaToolbar.framework.prepare_width_r();
                w_calc = tot_w_r + tot_w_l + 100;
            }
            // icon mode support
            jQuery(".itemLeft").find(".TBcontainerDiv[show='no']").parent().filter(".wibiyaToolbar_BtnHover").removeClass("wibiyaToolbar_BtnHover").addClass("wibiyaToolbar_BtnHoverOff");
        }
        else
        {
            // resize mode
            wibiyaToolbar.framework.hide_show_text();
        }
    }
};

wibiyaToolbar.framework.hide_show_text = function () {
    var leftOffset;
    if (jQuery(".itemLeft:last").offset() === null){
        leftOffset = 0;
    }
    else{
        leftOffset = jQuery(".itemLeft:last").offset().left;
    }
    
    var l = leftOffset + jQuery(".itemLeft:last").width();
    var r = jQuery(".itemRight:last").offset().left;
    var rl_diff = r - l;
    var isleft = (leftOffset > 0) ? true : false;
    var isright = (jQuery(".itemRight:last").offset().left > 0) ? true : false;
    if (rl_diff > 0 && isleft && isright) {

        if (rl_diff < 40) {
            jQuery(".itemLeft").find(".WibiyaMinRepresentation[show='no']").filter(":last").show().attr('show','yes');
            jQuery(".itemLeft").find(".TBcontainerDiv[show='yes']").filter(":last").hide().attr('show','no');
            //turn on hover for button
            jQuery(".itemLeft").find(".TBcontainerDiv[show='no']").parent().filter(".wibiyaToolbar_BtnHover").removeClass("wibiyaToolbar_BtnHover").addClass("wibiyaToolbar_BtnHoverOff");

        }
        else
        {
            var items_1 = jQuery(".itemLeft").find(".TBcontainerDiv[show='no']");
            var cnt = items_1.length;
            while( rl_diff > 100 & cnt > 0)
            {
                items_1 = jQuery(".itemLeft").find(".TBcontainerDiv[show='no']");
                items_2 = jQuery(".itemLeft").find(".WibiyaMinRepresentation[show='yes']");
                cnt = items_1.length;
                items_1.filter(":first").show().attr('show','yes');
                //turn on hover for button
                jQuery(".itemLeft").find(".TBcontainerDiv[show='yes']").parent().filter(".wibiyaToolbar_BtnHoverOff").removeClass("wibiyaToolbar_BtnHoverOff").addClass("wibiyaToolbar_BtnHover");
                items_2.filter(":first").hide().attr('show','no');
                l = leftOffset + jQuery(".itemLeft:last").width();
                r = jQuery(".itemRight:last").offset().left;
                rl_diff = r - l;
            }
            if (rl_diff < 40) {
                jQuery(".itemLeft").find(".WibiyaMinRepresentation[show='no']").filter(":last").show().attr('show','yes');
                jQuery(".itemLeft").find(".TBcontainerDiv[show='yes']").filter(":last").hide().attr('show','no');
                //turn on hover for button
                jQuery(".itemLeft").find(".TBcontainerDiv[show='no']").parent().filter(".wibiyaToolbar_BtnHover").removeClass("wibiyaToolbar_BtnHover").addClass("wibiyaToolbar_BtnHoverOff");
            }
        }
    }
};

wibiyaToolbar.framework.prepare_width_l = function ()
{
    var tot_w_l = 9;
    jQuery(".itemLeft").each(function() {
        tot_w_l = tot_w_l + jQuery(this).width();
    });
    return tot_w_l;
};

wibiyaToolbar.framework.prepare_width_r = function () {
    var tot_w_r = 35;
    jQuery(".itemRight").each(function() {
        tot_w_r = tot_w_r + jQuery(this).width();
    });
    return tot_w_r;
};

wibiyaToolbar.framework.hide_devider = function() {
    // go over deviders
    jQuery(".itemLeft  .wibiyaToolbar_divider").each(function()
    {
        var current = jQuery(this).parent();
        isbtn_next=jQuery(current).next().find(".wibiyaToolbar_BtnHover").size();
        isbtn_prev=jQuery(current).prev().find(".wibiyaToolbar_BtnHover").size();
        if(isbtn_prev || isbtn_next)
        {
            jQuery(current).css({
                visibility: 'hidden',
                width: '0px'
            });
        }
    });

    // go over deviders
    jQuery(".itemRight  .wibiyaToolbar_divider").each(function()
    {
        var current = jQuery(this).parent();
        isbtn_next=jQuery(current).next().find(".wibiyaToolbar_BtnHover").size();
        isbtn_prev=jQuery(current).prev().find(".wibiyaToolbar_BtnHover").size();
        if(isbtn_prev || isbtn_next)
        {
            //jQuery(current).remove();
            jQuery(current).css({
                visibility: 'hidden',
                width: '0px'
            });
        }
    });
};

wibiyaToolbar.framework.linkMouseOver = function(link){
    var btnhover = link.filter(".wibiyaToolbar_BtnHover");
    var _btnItem;
    jQuery.each(btnhover, function() {
        _btnItem = jQuery(this);
        _btnItem.find(".wibiyaToolbar_button_left").addClass("wibiyaToolbar_button_left_over");
        _btnItem.find(".wibiyaToolbar_button_center").addClass("wibiyaToolbar_button_center_over");
        _btnItem.find(".wibiyaToolbar_button_right").addClass("wibiyaToolbar_button_right_over");
        _btnItem.find(".wibiyaToolbar_button_right_multi").addClass("wibiyaToolbar_button_right_multi_over");
    });
};

wibiyaToolbar.framework.linkMouseOut = function(link){
    var btnhover = link.filter(".wibiyaToolbar_BtnHover");
    jQuery.each(btnhover, function() {
        var _btnItem = jQuery(this);
        _btnItem.find(".wibiyaToolbar_button_left").removeClass("wibiyaToolbar_button_left_over");
        _btnItem.find(".wibiyaToolbar_button_center").removeClass("wibiyaToolbar_button_center_over");
        _btnItem.find(".wibiyaToolbar_button_right").removeClass("wibiyaToolbar_button_right_over");
        _btnItem.find(".wibiyaToolbar_button_right_multi").removeClass("wibiyaToolbar_button_right_multi_over");
    });
};

wibiyaToolbar.framework.centerApps = function(){
    jQuery('.wibiyaToolbar_itemImg').each(function(){
        var item = jQuery(this);
        var marg = Math.ceil(20 - item.height());
        if(marg>0) jQuery(this).css('padding-top',marg+'px');
    
    });
}

wibiyaToolbar.framework.toolbarDefaultPosition = function(size){
    var viewPortWidth = wibiyaToolbar.framework.getViewportWidth();
    var correctWidth = Math.floor((viewPortWidth-37)*(size/100));
    jQuery('.wibiya_toolbar_holder_middle').css('width',correctWidth);
}

wibiyaToolbar.framework.getToolbarAppIdByAppType = function (appId)
{
    if (typeof(wibiyaToolbar.AppsArray[appId]) != 'undefined') {
        return wibiyaToolbar.AppsArray[appId][0];
    }
    else
    {
        return null;
    }

}
//Define connect object
wibiyaToolbar.framework.connect = {};

//WIBIYA ENDPOINT
wibiyaToolbar.framework.connect.handlerUrl = 'http://conn.wibiya.com/connectivity/framework/connect_handler.php';
wibiyaToolbar.framework.connect.updateHandlerUrl = 'http://conn.wibiya.com/connectivity/framework/connect_handler_update.php';
wibiyaToolbar.framework.connect.root = 'http://conn.wibiya.com/connectivity/framework/';
wibiyaToolbar.framework.connect.imagesRoot = 'http://cdn.wibiya.com/Graphics_Toolbar/connect/framework/';


//GVS ENDPOINT
//wibiyaToolbar.framework.connect.handlerUrl = 'http://www.gvs.ro/connectivity-jumi/connect_handler.php';
//wibiyaToolbar.framework.connect.root = 'http://www.gvs.ro/connectivity-jumi/';

wibiyaToolbar.framework.connect.networksEnum = {
	facebook : 0,
	twitter : 1,
	yahoo : 2,
	myspace : 3,
	google : 4,
        linkedin : 5
};
wibiyaToolbar.framework.connect.friendStatusEnum = {
	online : "true",
	offline: "false"
};

wibiyaToolbar.framework.connect.networkCount = 6;

wibiyaToolbar.framework.connect.defaultAvatar = wibiyaToolbar.framework.connect.imagesRoot + 'default_avatar.gif';

//Object that holds the data from each network
wibiyaToolbar.framework.connect.networkData = function(networkId) {
	this.isConnected = false;
	this.isUserConnected = false;
	this.id = '';
	this.firstName = '';
	this.lastName = '';
	this.url = '';
	this.pic = '';
	this.location = '';
	this.about = '';
	this.networkSmallLogo 	= wibiyaToolbar.framework.connect.imagesRoot + 'small_logo_' + networkId + '.png';
	this.networkMediumLogo 	= wibiyaToolbar.framework.connect.imagesRoot + 'medium_logo_' + networkId + '.png';
	this.buttonConnected 	= wibiyaToolbar.framework.connect.imagesRoot + 'button_connected_' + networkId + '.png';
	this.buttonNotConnected = wibiyaToolbar.framework.connect.imagesRoot + 'button_not_connected_' + networkId + '.png';
	this.connectButtonUrl 	= function () {
		if (this.isConnected)
			return this.buttonConnected;
		else
			return this.buttonNotConnected;
	};
	//(key,value) => (page => array(json)) 
	this.friends = new Array();
	this.networkName = '';
	this.key = function () {
		//Get the md5 value from the cookie
		//If the cookie expired null is returned.
		return wibiyaToolbar.framework.connect.readCookie('wi_co_key_' + networkId);
	};
	this.sessionKey = '';
};

wibiyaToolbar.framework.connect.ready = false;

//check for loading of connect framework inside connect popup dialogs.
//This code is loaded outside the initialize function to work on small dialogs as well.
//alert('parent != null:' + (parent != null));
//alert('parent.window.opener != null' + (parent.window.opener != null));
//alert('document.location.hash.indexOf("connect") != -1:' + (document.location.hash.indexOf("connect") != -1));
if (parent != null && parent.window.opener != null && document.location.hash.indexOf("connect") != -1)
{
	var hashString = document.location.hash.substring(1, document.location.hash.length);
	//alert ('hashString:' + hashString)
	parent.window.opener.wibiyaToolbar.framework.connect.connectToCallback(hashString.split("_")[1]);
	parent.window.close();
};

function initializeConnect() {
	//The connect framework stores in a cookie which networks the user already connected to on each site.

	//If user connection cookie don't exist, create new cookie array
	//Verify that the profile object exist.
	//if (wibiyaToolbar.profile == undefined) wibiyaToolbar.framework.ReadProfile();
	//check for networks in the cookies store.
	if (wibiyaToolbar.profile.connectUserNetworks == undefined)
	{
		wibiyaToolbar.profile.connectUserNetworks = new Array(wibiyaToolbar.framework.connect.networkCount);
		for (i in wibiyaToolbar.profile.connectUserNetworks) {
			wibiyaToolbar.profile.connectUserNetworks[i] = "0";
		}
		wibiyaToolbar.framework.WriteProfile(null,null);
	}

	//Initialize networks array
	wibiyaToolbar.framework.connect.networks = new Array(wibiyaToolbar.framework.connect.networkCount);

	jQuery('body').trigger('connectReady');
	wibiyaToolbar.framework.connect.ready = true;
}

//Binding to the toolbarLoaded event failed because the #wibiyaToolbar doesn't exist when this code runs,
//so there was no element to bind.
//Here we use a timer to make sure that the profile exist before using it.
profileTimer = setInterval('checkProfile()', 50);
function checkProfile() {
	if (wibiyaToolbar != undefined && wibiyaToolbar.profile != undefined)
	{
		clearInterval(profileTimer);
		initializeConnect();
	}
}

//Create network object for each network that is requires by an application.
wibiyaToolbar.framework.connect.registerRequiredNetworks = function(networkIdsArray) {
	var id;
	for(id in networkIdsArray)
	{
		if (!wibiyaToolbar.framework.connect.networks[networkIdsArray[id]])
		{
			wibiyaToolbar.framework.connect.networks[networkIdsArray[id]] = 
				new wibiyaToolbar.framework.connect.networkData(networkIdsArray[id]);
			wibiyaToolbar.framework.connect.setNetworkName(networkIdsArray[id]);
			//update user connected options from cookies
			if (wibiyaToolbar.profile.connectUserNetworks[networkIdsArray[id]] == '1')
				wibiyaToolbar.framework.connect.networks[networkIdsArray[id]].isUserConnected = true;
		}
	}
}

wibiyaToolbar.framework.connect.setNetworkName = function(networkId) {
	switch (networkId)
	{
	case 0:
		wibiyaToolbar.framework.connect.networks[networkId].networkName = 'Facebook';
		break;
	case 1:
		wibiyaToolbar.framework.connect.networks[networkId].networkName = 'Twitter';
		break;
	case 2:
		wibiyaToolbar.framework.connect.networks[networkId].networkName = 'Yahoo';
		break;
	case 3:
		wibiyaToolbar.framework.connect.networks[networkId].networkName = 'Myspace';
		break;
	case 4:
		wibiyaToolbar.framework.connect.networks[networkId].networkName = 'Google';
		break;
        case 5:
		wibiyaToolbar.framework.connect.networks[networkId].networkName = 'Linkedin';
		break;
	}
}
//Generic AJAX method with callback.
wibiyaToolbar.framework.connect.createCall = function(handlerUrl, callData, callbackFunction) {
	jQuery.ajax( {
		url : handlerUrl,
		dataType : 'jsonp',
		data : callData,
		type : 'GET',
		success : callbackFunction,
		cache: false
	});
};

//Gets network data for all required networks from the server handler.
wibiyaToolbar.framework.connect.getConnections = function(callback) {
	wibiyaToolbar.framework.connect.getConnectionsApplicationCallback = callback;
	wibiyaToolbar.framework.connect.createCall(
			wibiyaToolbar.framework.connect.handlerUrl, {
				'action' : 'get_connections'
			}, wibiyaToolbar.framework.connect.getConnectionsCallback);
};

// Opens a popup to connect to a network
wibiyaToolbar.framework.connect.connectTo = function(networkId, callback) {
/*	wibiyaToolbar.framework.connect.connectingNetworkId = networkId;
	wibiyaToolbar.framework.connect.createCall(
			wibiyaToolbar.framework.connect.handlerUrl, {
				'action' : 'get_connections'
			}, wibiyaToolbar.framework.connect.getConnectionsForConnectCallback);*/
	wibiyaToolbar.framework.connect.connectToApplicationCallback = callback;

	if (wibiyaToolbar.framework.connect.networks[networkId].isConnected == false)
	{
		var popupWidth;
		var popupHeight;
		switch (networkId)
		{
		case 0:
			popupWidth = 1000;
			popupHeight = 550;
			break;
		case 1:
			popupWidth = 880;
			popupHeight = 410;
			break;
		case 2:
			popupWidth = 500;
			popupHeight = 500;
			break;
		case 3:
			popupWidth = 500;
			popupHeight = 465;
			break;
		case 4:
			popupWidth = 400;
			popupHeight = 300;
			break;
                case 5:
			popupWidth = 500;
			popupHeight = 450;
			break;
		}
		var popupLeft = (document.documentElement.clientWidth - popupWidth) / 2;
		var popupTop = (document.documentElement.clientHeight - popupHeight) / 2;
		var windowSpecs = 'width=' + popupWidth + ',height=' + popupHeight + ',left=' + popupLeft + ',top=' + popupTop;
		var connectPage = wibiyaToolbar.framework.connect.getConnectPage(networkId);
		window.open(connectPage + '?host_url=' + location.href,'wibiyaConnect',windowSpecs);
	}
	else
	{
		wibiyaToolbar.framework.connect.networks[networkId].isUserConnected = true;
		wibiyaToolbar.framework.connect.connectToCallback(networkId);
	}
};

//Get the right connect page address for each network
wibiyaToolbar.framework.connect.getConnectPage = function(networkId)
{
	var connectPageUrl = "";
	switch(networkId)
	{
		case wibiyaToolbar.framework.connect.networksEnum.facebook:
			connectPageUrl = wibiyaToolbar.framework.connect.root + "connect_facebook.php";
		break;
		case wibiyaToolbar.framework.connect.networksEnum.twitter:
			connectPageUrl = wibiyaToolbar.framework.connect.root + "connect_twitter.php";
		break;
		case wibiyaToolbar.framework.connect.networksEnum.yahoo:
			connectPageUrl = wibiyaToolbar.framework.connect.root + "connect_yahoo.php";
		break;
		case wibiyaToolbar.framework.connect.networksEnum.myspace:
			connectPageUrl = wibiyaToolbar.framework.connect.root + "connect_myspace.php";
		break;
		case wibiyaToolbar.framework.connect.networksEnum.google:
			connectPageUrl = wibiyaToolbar.framework.connect.root + "connect_google.php";
		break;
                case wibiyaToolbar.framework.connect.networksEnum.linkedin:
			connectPageUrl = wibiyaToolbar.framework.connect.root + "connect_linkedin.php";
                break;
	}
	return connectPageUrl;
}

//Returns a connect button HTML for the required network, along with it's click event code.
wibiyaToolbar.framework.connect.getConnectButton = function(networkObj){
	
	//Create HTML of the button image, according to connected state.
	imgUrl = wibiyaToolbar.framework.connect.networks[networkObj['network']].connectButtonUrl();
        var btnIndex = 0;
        jQuery.each(jQuery('.connectBtn'), function(){
            if (btnIndex <= parseInt(jQuery(this).attr('btnIndex')))
            {
                btnIndex = parseInt(jQuery(this).attr('btnIndex'))+1;
            }
        });
	buttonHtml = '<img id="connectBtn' + btnIndex + '" class="connectBtn" btnIndex="' + btnIndex +'" src="' + imgUrl + '" />';

	//If not connected, add connect script to click event
	//if (!wibiyaToolbar.framework.connect.networks[networkObj['network']].isConnected)
	//{
		//generate click event
		clickEventJs = 'jQuery("#connectBtn' +btnIndex + '").unbind("click");'+
                    'jQuery("#connectBtn' + btnIndex + '").click(function(){' +
                    'var w_connect = wibiyaToolbar.framework.connect;' +
                    'w_connect.connectTo(' + networkObj['network'] + ', ' + 
                    networkObj['callback'] + ');' +
                '});';
		//Add to HTML
		buttonHtml += '<script type="text/javascript">' + clickEventJs + '</script>';
	//}else
	//{
		//generate click event
		//clickEventJs = 'jQuery("#connectBtn' + networkObj['network'] + '").click(function(){'  
        //           + networkObj['callback'] + '();' +
        //        '});';
		//Add to HTML
		//buttonHtml += '<script type="text/javascript">' + clickEventJs + '</script>';
	//}
	return buttonHtml;
};


wibiyaToolbar.framework.connect.getFriends = function(network, page, status, callback) {
	
	wibiyaToolbar.framework.connect.getFriendsApplicationsCallback = callback;
	
	var friends = wibiyaToolbar.framework.connect.networks[network].friends;
	
	if(friends[page])
	{
		callback(friends[page]);
	}
	else
	{
		wibiyaToolbar.framework.connect.createCall(
			wibiyaToolbar.framework.connect.handlerUrl, 
			{
				'network' 	: network, 
				'action' 	: 'get_friends',
				'page'		: page,
				'online'	: status
			}, wibiyaToolbar.framework.connect.getFriendsCallback);
	}
}

wibiyaToolbar.framework.connect.getUserStatus = function(network, callback) {
	wibiyaToolbar.framework.connect.getUserStatusApplicationsCallback = callback;
	wibiyaToolbar.framework.connect.createCall(
			wibiyaToolbar.framework.connect.handlerUrl, {
				'network' : network,
				'action': 'get_user_status'
			}, wibiyaToolbar.framework.connect.getUserStatusCallback);
};

wibiyaToolbar.framework.connect.getIsFan = function(pageid, callback) {
	wibiyaToolbar.framework.connect.getIsFanApplicationsCallback = callback;
	wibiyaToolbar.framework.connect.createCall(
			wibiyaToolbar.framework.connect.handlerUrl, {
				'pageid' : pageid,
				'action': 'get_isfan'
			}, wibiyaToolbar.framework.connect.getIsFanCallback);
};

wibiyaToolbar.framework.connect.setUserStatus = function(network, msg, callback) {
	wibiyaToolbar.framework.connect.setUserStatusApplicationsCallback = callback;
	wibiyaToolbar.framework.connect.createCall(
			wibiyaToolbar.framework.connect.updateHandlerUrl, {
				'network' : network, 
				'msg' : msg,
				'action': 'set_user_status'				
			}, wibiyaToolbar.framework.connect.setUserStatusCallback);
};

wibiyaToolbar.framework.connect.messageFriends = function(network, friends,
		msg, callback) {
	wibiyaToolbar.framework.connect.messageFriendsApplicationsCallback = callback;
	wibiyaToolbar.framework.connect.createCall(
			wibiyaToolbar.framework.connect.updateHandlerUrl, {
				'network' : network,
				'msg' : msg,
				'friends' : friends,
				'action': 'message_friends'
			}, wibiyaToolbar.framework.connect.messageFriendsCallback);
};

wibiyaToolbar.framework.connect.becomeFriend = function(friendId) {	
	wibiyaToolbar.framework.connect.createCall(
			wibiyaToolbar.framework.connect.updateHandlerUrl, {
				'friend' : friendId,
				'action' : 'become_friend'
			}, wibiyaToolbar.framework.connect.becomeFriendCallback);
};

wibiyaToolbar.framework.connect.followUser = function(user,callback) {
       wibiyaToolbar.framework.connect.followUserApplicationsCallback = callback;
	wibiyaToolbar.framework.connect.createCall(
			wibiyaToolbar.framework.connect.updateHandlerUrl, {
				'user' : user,
				'action' : 'follow_user'
			}, wibiyaToolbar.framework.connect.followUserCallback);
};

wibiyaToolbar.framework.connect.disconnect = function(networkIds) {	
	wibiyaToolbar.framework.connect.createCall(
			wibiyaToolbar.framework.connect.handlerUrl, {
				'networks[]' : networkIds,
				'action' : 'disconnect'
			}, wibiyaToolbar.framework.connect.disconnectCallback);
};

//Publish a message to a user/group/page/application wall.
//Currently supports only facebook (networkId should be 0)
//msg = the message to publish on the wall. string.
//targetId = the id of the wall owner: profile/group/page/application id. string.
//callback = function to call when operation is done. called with result data.
wibiyaToolbar.framework.connect.streamPublish = function(networkId, msg, targetId, callback) {
	wibiyaToolbar.framework.connect.streamPublishApplicationsCallback = callback;
	wibiyaToolbar.framework.connect.createCall(
			wibiyaToolbar.framework.connect.updateHandlerUrl, {
				'network' : networkId, 
				'msg' : msg,
				'target_id': targetId,
				'action': 'stream_publish'				
			}, wibiyaToolbar.framework.connect.streamPublishCallback);
};

wibiyaToolbar.framework.connect.inviteFriend = function(networkId, friend, note, callback) {
	wibiyaToolbar.framework.connect.inviteFriendApplicationsCallback = callback;
	wibiyaToolbar.framework.connect.createCall(
			wibiyaToolbar.framework.connect.updateHandlerUrl,
			{
				'network': networkId,
				'friend' : friend,
				'action' : 'invite_friend',
                                'note'   : note
			}, wibiyaToolbar.framework.connect.inviteFriendCallback);
};

//Get user home timeline
//currently supports only twitter (networkId should be 1)
//returns a "statuses" array with all the internal data received from twitter.
//gets 50 tweets. If you need more paging should be implemented.
wibiyaToolbar.framework.connect.getHomeTimeline = function(networkId, callback) {
	wibiyaToolbar.framework.connect.getHomeTimelineApplicationsCallback = callback;
	wibiyaToolbar.framework.connect.createCall(
			wibiyaToolbar.framework.connect.handlerUrl, {
				'network' : networkId, 
				'action': 'get_home_timeline'				
			}, wibiyaToolbar.framework.connect.getHomeTimelineCallback);
};


//The callback functions
wibiyaToolbar.framework.connect.getConnectionsCallback = function(data) {
	wibiyaToolbar.framework.connect.updateNetworks(data);
	wibiyaToolbar.framework.connect.getConnectionsApplicationCallback();
};

//Update local networks data with new data just arrived from the server (using getConnections call)
wibiyaToolbar.framework.connect.updateNetworks = function(data) {
	// get the networks from the "data" object and fill the "wibiyaToolbar.framework.connect.networks" array
	for ( var i = 0; i < data.networks.length; i++) {
		if (wibiyaToolbar.framework.connect.networks[i] != undefined)
		{
			if (data.networks[i].id != undefined)
			{
				//Reset undefined values to empty strings
				if (data.networks[i].first_name == undefined) data.networks[i].first_name = '';
				if (data.networks[i].last_name == undefined) data.networks[i].last_name = '';
				if (data.networks[i].about == undefined) data.networks[i].about = '';
				if (data.networks[i].location == undefined) data.networks[i].location = '';
				//copy values to client side data store
				wibiyaToolbar.framework.connect.networks[i].isConnected = data.networks[i].isConnected;
				wibiyaToolbar.framework.connect.networks[i].id = data.networks[i].id;
				wibiyaToolbar.framework.connect.networks[i].firstName = data.networks[i].first_name;
				wibiyaToolbar.framework.connect.networks[i].lastName = data.networks[i].last_name;
				wibiyaToolbar.framework.connect.networks[i].url = data.networks[i].url;
				wibiyaToolbar.framework.connect.networks[i].pic = data.networks[i].pic;
				if (wibiyaToolbar.framework.connect.networks[i].pic==null || wibiyaToolbar.framework.connect.networks[i].pic=='')
					wibiyaToolbar.framework.connect.networks[i].pic=wibiyaToolbar.framework.connect.defaultAvatar;
				wibiyaToolbar.framework.connect.networks[i].location = data.networks[i].location;
				wibiyaToolbar.framework.connect.networks[i].about = data.networks[i].about;
				
				//Set optional fields, like twitter stats
				if (data.networks[i].followers_count != undefined)
				{
					wibiyaToolbar.framework.connect.networks[i].followers = data.networks[i].followers_count;
					wibiyaToolbar.framework.connect.networks[i].following = data.networks[i].friends_count;
					wibiyaToolbar.framework.connect.networks[i].tweets = data.networks[i].statuses_count;
				}
				//Set session key for facebook
				if (data.networks[i].session_key != undefined)
					wibiyaToolbar.framework.connect.networks[i].sessionKey = data.networks[i].session_key;
				//Set md5 key to cookie
				wibiyaToolbar.framework.connect.createShortCookie('wi_co_key_' + i, data.networks[i].key, 15);

			}
			else //Not connected on the server, remove client connection
			{
				wibiyaToolbar.framework.connect.networks[i].isUserConnected = false;
				wibiyaToolbar.profile.connectUserNetworks[i] = '0';
				wibiyaToolbar.framework.WriteProfile(null,null);
			}
		}
	}
}

wibiyaToolbar.framework.connect.connectToCallback = function(networkId) {
	//Mark network as connected, persist the cookie for 90 days:
	wibiyaToolbar.framework.connect.networks[networkId].isUserConnected = true;
	wibiyaToolbar.profile.connectUserNetworks[networkId] = '1';
	wibiyaToolbar.framework.WriteProfile(null,null);
	//network was not connected, we fetch it's data
	if (wibiyaToolbar.framework.connect.networks[networkId].isConnected == false)
	{
		wibiyaToolbar.framework.connect.getConnections(function(data){
			if (data != undefined)
				wibiyaToolbar.framework.connect.updateNetworks(data);
			wibiyaToolbar.framework.connect.connectToApplicationCallback(networkId);
			jQuery('body').trigger('wibiyaConnectNetworksChanged');
                        wibiyaToolbar.framework.connect.RegisterAction(networkId);
		});
	}
	else //network was already connected, only connecting to framework and applications.
	{
		wibiyaToolbar.framework.connect.connectToApplicationCallback(networkId);
		jQuery('body').trigger('wibiyaConnectNetworksChanged');
                wibiyaToolbar.framework.connect.RegisterAction(networkId);
	}
};

wibiyaToolbar.framework.connect.getFriendsCallback = function(response) {
	var currentFriend;
	
	var data 	= response.data;
	var network = response.network;
	var page 	= response.page;

	//save the data 
	wibiyaToolbar.framework.connect.networks[network].friends[page] = data;
	//the dt includes the page that was read and the network
	wibiyaToolbar.framework.connect.getFriendsApplicationsCallback(data);
};



wibiyaToolbar.framework.connect.getUserInfoCallback = function(data) {
	wibiyaToolbar.framework.connect.getUserInfoApplicationsCallback(data);
	
};

wibiyaToolbar.framework.connect.getIsFanCallback = function(data) {
	wibiyaToolbar.framework.connect.getIsFanApplicationsCallback(data);

};

wibiyaToolbar.framework.connect.getUserStatusCallback = function(data) {
	wibiyaToolbar.framework.connect.getUserStatusApplicationsCallback(data);
	
};

wibiyaToolbar.framework.connect.setUserStatusCallback = function(data) {
	wibiyaToolbar.framework.connect.setUserStatusApplicationsCallback(data);
	
};

wibiyaToolbar.framework.connect.streamPublishCallback = function(data) {
	wibiyaToolbar.framework.connect.streamPublishApplicationsCallback(data);
	
};

wibiyaToolbar.framework.connect.getHomeTimelineCallback = function(data) {
	wibiyaToolbar.framework.connect.getHomeTimelineApplicationsCallback(data);
};

wibiyaToolbar.framework.connect.messageFriendsCallback = function(data) {
	wibiyaToolbar.framework.connect.messageFriendsApplicationsCallback(data);
	
};

wibiyaToolbar.framework.connect.becomeFriendCallback = function(data) {
};

wibiyaToolbar.framework.connect.followUserCallback = function(data) {
       wibiyaToolbar.framework.connect.followUserApplicationsCallback(data);
};

wibiyaToolbar.framework.connect.inviteFriendCallback = function(data) {
	wibiyaToolbar.framework.connect.inviteFriendApplicationsCallback(data);
};

wibiyaToolbar.framework.connect.disconnectCallback = function(data) {
	
	for(var i=0;i<data.networks.length;i++)
	{
		if(data.networks[i] == true)
		{
			//clear network data
			wibiyaToolbar.framework.connect.networks[i] = 
				new wibiyaToolbar.framework.connect.networkData(i);
			wibiyaToolbar.framework.connect.setNetworkName(i);
			//raise the event
			jQuery('body').trigger('wibiyaConnectNetworksChanged');
		}
	}
	
	wibiyaToolbar.profile.connectUserNetworks = new Array(wibiyaToolbar.framework.connect.networkCount);
	for (i in wibiyaToolbar.profile.connectUserNetworks) {
		wibiyaToolbar.profile.connectUserNetworks[i] = "0";
	}
	wibiyaToolbar.framework.WriteProfile(null,null);

};


//Cookies functions:

wibiyaToolbar.framework.connect.createCookie = function(name,value,days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else var expires = "";
	document.cookie = name+"="+value+expires+"; path=/";
};

wibiyaToolbar.framework.connect.createShortCookie = function(name,value,mins) {
	if (mins) {
		var date = new Date();
		date.setTime(date.getTime()+(mins*60*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else var expires = "";
	document.cookie = name+"="+value+expires+"; path=/";
};

wibiyaToolbar.framework.connect.readCookie = function(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
};

wibiyaToolbar.framework.connect.eraseCookie = function(name) {
	wibiyaToolbar.framework.connect.createCookie(name,"",-1);
};

wibiyaToolbar.framework.connect.RegisterAction= function(networkId) {
        var userId = wibiyaToolbar.framework.connect.networks[networkId].id;
	var userName = wibiyaToolbar.framework.connect.networks[networkId].firstName + " " + wibiyaToolbar.framework.connect.networks[networkId].lastName;
	var pic = wibiyaToolbar.framework.connect.networks[networkId].pic;
	var profileUrl = wibiyaToolbar.framework.connect.networks[networkId].url;

	var extendedData = '{"networkId":"{0}","userId":"{1}","userName":"{2}","img":"{3}","profileUrl":"{4}"}';
	extendedData = extendedData.wiFormat(networkId, userId, userName, pic, profileUrl);
	//Write statistics
	//ActionId 101 is saved for "connect" actions, no other apps should use it.
	wibiyaToolbar.framework.fun_RegisterAction_extended('58',0,101,0,extendedData);
};
//define EE object
wibiyaToolbar.framework.ee={};

//define application messages
wibiyaToolbar.framework.ee.html={};
wibiyaToolbar.framework.ee.html['default']='Visit us at wibiya.com';
wibiyaToolbar.framework.ee.html['WibiyaConnect']='Click here to update your status on multiple social networks at once!';
wibiyaToolbar.framework.ee.html['WibiyaChat']='Click here to chat live with real people on the site publicly or privately.';
var jumps=8;

//add css
jQuery('head').append('<style type="text/css">.wibiyaNotifier{background:url("http://cdn.wibiya.com/Graphics_Toolbar/em.png") no-repeat left top;}.el{background:url("http://cdn.wibiya.com/Graphics_Toolbar/el.png") no-repeat left top;}.er{background:url("http://cdn.wibiya.com/Graphics_Toolbar/er.png") no-repeat left top;}.wibiyaNotifier:hover .w{background-color:white;}.wibiyaNotifier .x:hover{background-position:-18px 0;}</style>');

//the function that pops up the ee
wibiyaToolbar.framework.ee.promoteApp=function(style,app,unique,duration){
	if(typeof wibiyaToolbar.profile.ee=='undefined'){
		wibiyaToolbar.profile.ee={};
	}
	if(typeof app!='undefined'){
		if(typeof unique=='undefined'){unique=false;}
		if(unique!=true||wibiyaToolbar.profile.ee[app]!=1){
			if(typeof style=='undefined'){style=1;}
			if(typeof duration=='undefined'){duration=0;}
			var _hm='<a href="javascript://" onclick="wibiyaToolbar.framework.ee.close(\''+app+'\')" style="background:url(\'http://cdn.wibiya.com/Graphics_Toolbar/ex.png\') no-repeat left top;float:right;height:21px;position:absolute;right:8px;top:8px;width:18px;z-index:6;" class="x"><span style="display:none;">x</span></a>';
			_hm+='<span onclick="wibiyaToolbar.framework.ee.launch(\''+app+'\')" class="w" style="cursor:pointer;display:block;filter:alpha(opacity=15);height:76px;opacity:0.15;width:175px;"></span><span onclick="wibiyaToolbar.framework.ee.launch(\''+app+'\')" style="cursor:pointer;display:block;margin:5px 10px;position:relative;top:-76px">';
			_hm+=(typeof wibiyaToolbar.framework.ee.html[app]!='undefined'?wibiyaToolbar.framework.ee.html[app]:wibiyaToolbar.framework.ee.html['default']);
			_hm+='</span></div>';
			if(jQuery('#wibiyaToolbar [applicationname="'+app+'"]').siblings('.wibiyaNotifier').length!=0){
				wibiyaToolbar.framework.ee.del(app);
			}
                        var eeBottom = 25;
                        if (typeof(wibiyaToolbar.Data.TBStyleXml)=="object")
                        {
                            eeBottom = parseInt(wibiyaToolbar.Data.TBStyleXml.size.height)-5;
                        }
			jQuery('#wibiyaToolbar [applicationname="'+app+'"]').parent().append('<div class="wibiyaNotifier" style="bottom:'+eeBottom+'px;color:#1B3743;font-family:Arial;font-size:13px;height:90px;line-height:20px;padding:15px !important;position:fixed;width:175px;z-index:5;"></div>');
			var left=jQuery('#wibiyaToolbar [applicationname="'+app+'"]').offset().left;
			var aw=jQuery('#wibiyaToolbar [applicationname="'+app+'"]').width();
			if(left<25){
				jQuery('#wibiyaToolbar [applicationname="'+app+'"]').siblings('.wibiyaNotifier').addClass('el');
			}else if(wibiyaToolbar.framework.getViewportWidth()<(left+205)){
				jQuery('#wibiyaToolbar [applicationname="'+app+'"]').siblings('.wibiyaNotifier').addClass('er').css('left',(left+aw-205));
			}else{
				jQuery('#wibiyaToolbar [applicationname="'+app+'"]').siblings('.wibiyaNotifier').css('left',(left-(205/2)+(aw/2)));
			}
			jQuery('#wibiyaToolbar [applicationname="'+app+'"]').siblings('.wibiyaNotifier').html(_hm).fadeIn(function(){
				if(duration>0){
					setTimeout(function(){
						wibiyaToolbar.framework.ee.close(app);
					},(duration*1000));
				}
			});
                        jumps=8
			wibiyaToolbar.framework.ee.bounceup();
			wibiyaToolbar.profile.ee[app]=1;
			wibiyaToolbar.framework.WriteProfile(null,null);
		}
	}
}

//function to trigger close event
wibiyaToolbar.framework.ee.launch=function(app){
	wibiyaToolbar.framework.ee.close(app);
	jQuery('body').trigger('eeLaunch',[app]);
}

//function to handle the "close" link
wibiyaToolbar.framework.ee.close=function(app){
	jQuery('#wibiyaToolbar [applicationname="'+app+'"]').siblings('.wibiyaNotifier').fadeOut(function(){
		wibiyaToolbar.framework.ee.del(app);
	});
}

//function to delete an ee window
wibiyaToolbar.framework.ee.del=function(app){
	jQuery('#wibiyaToolbar [applicationname="'+app+'"]').siblings('.wibiyaNotifier').remove();
};

wibiyaToolbar.framework.ee.bounceup=function(){
	jumps--;
	jQuery(".wibiyaNotifier").animate({bottom:'+=15px'},'300',function(){
		if(jumps>0){
			wibiyaToolbar.framework.ee.bouncedown();
		}
	});
};
wibiyaToolbar.framework.ee.bouncedown=function(){
	jumps--;
	jQuery(".wibiyaNotifier").animate({bottom:'-=15px'},'300',function(){
		if(jumps>0){
			wibiyaToolbar.framework.ee.bounceup();
		}
	});
};

wibiyaToolbar.Apps.App_72794={"windowMethod":"2","is_wide_search":"0","search_providers":{"provider":[{"name":"Site Search","icon":"http:\/\/cdn.wibiya.com\/Graphics_Toolbar\/Favicons\/Defaultfavicon10050_2906.png","url":"http:\/\/toolbar2.wibiya.com\/search.php?type=blog&amp;q=AAAA&amp;site_name=More+Than+Technical&amp;site_url=http:\/\/www.morethantechnical.com"},{"name":"Web Search","icon":"http:\/\/cdn.wibiya.com\/Graphics_Toolbar\/Favicons\/google.png","url":"http:\/\/toolbar2.wibiya.com\/search.php?type=web&amp;q=AAAA&amp;site_name=More+Than+Technical&amp;site_url=http:\/\/www.morethantechnical.com"}]}};var searchProviders = wibiyaToolbar.Apps.App_72794.search_providers;
if (typeof(searchProviders.provider[0])== "undefined") {
    searchProviders.provider[0]={};
    searchProviders.provider[0].icon = searchProviders.provider.icon;
    searchProviders.provider[0].name = searchProviders.provider.name;
    searchProviders.provider[0].url = searchProviders.provider.url;
}

function _fun_wibiya_openSearchProviders_72794(object){
    if (jQuery('#wibiyaToolbar_SearchProviders_72794').attr('menu_opened')=='yes'){
	jQuery('.wibiyaToolbar_SearchProviders_72794').slideUp(300).attr('menu_opened','no');
    }
    else{
	object.parent().find('.wibiyaToolbar_tooltip').vhide();
	jQuery('#wibiyaToolbar_SearchProviders_72794').slideDown(300, function() {
	    fun_AddClickHandlerForBody(jQuery(this));
	}).attr('menu_opened','yes');
    }
};

function fun_AddClickHandlerForBody(Wiwi) {
    jQuery('body').click(function() {
	Wiwi.slideUp(300, function(){
	    Wiwi.attr('menu_opened','no');
	    if (Wiwi.attr('id')=='wibiyaToolbar_share_menu') {
		Wiwi.remove();
	    }
	});
	jQuery('body').unbind('click');
    });
};

function fun_wibiya_Search_72794(_index,_searchQuery){
    var _action_options =
	{
	actionType: 'Link',
	name:'Search_'+_index,
	title : searchProviders.provider[_index].name,
	windowType : Number(wibiyaToolbar.Apps.App_72794.windowMethod),
	link : wibiyaToolbar.framework.LinkDataReplacor(searchProviders.provider[_index].url).replace(/aaaa/gi, _searchQuery),
	scroll : '1',
	icon : jQuery('#wibiyaToolbar_search_provider_icon_72794').attr('src'),
	dimention : { width: 975 ,height: '80%'},
        type : 'center',
	position : { x: 0 ,y: 0},
        controles : {pop:1,min:1,close:1}
    };

    wibiyaToolbar.framework.openWiwi(_action_options);
};var LinkNodes_72795 = [{"url":"http:\/\/translate.google.com\/translate?sl=auto&tl=zh-CN&u=Wibiya_URL\n                ","windowMethod":3,"width":0,"height":0,"right":"","bottom":"","name":"Chinese","icon":"http:\/\/cdn.wibiya.com\/Graphics_Toolbar\/Icons\/flag_china.png","type":"","uId":"0","pop":0,"min":0,"close":1},{"url":"http:\/\/translate.google.com\/translate?sl=auto&tl=nl&u=Wibiya_URL\n                ","windowMethod":3,"width":0,"height":0,"right":"","bottom":"","name":"Dutch","icon":"http:\/\/cdn.wibiya.com\/Graphics_Toolbar\/Icons\/flag_netherlands.png","type":"center","uId":"1","pop":1,"min":1,"close":1},{"url":"http:\/\/translate.google.com\/translate?sl=auto&tl=en&u=Wibiya_URL\n                ","windowMethod":3,"width":0,"height":0,"right":"","bottom":"","name":"English","icon":"http:\/\/cdn.wibiya.com\/Graphics_Toolbar\/Icons\/flag_usa.png","type":"center","uId":"2","pop":1,"min":1,"close":1},{"url":"http:\/\/translate.google.com\/translate?sl=auto&tl=fr&u=Wibiya_URL\n                ","windowMethod":3,"width":0,"height":0,"right":"","bottom":"","name":"French","icon":"http:\/\/cdn.wibiya.com\/Graphics_Toolbar\/Icons\/flag_france.png","type":"center","uId":"3","pop":1,"min":1,"close":1},{"url":"http:\/\/translate.google.com\/translate?sl=auto&tl=de&u=Wibiya_URL\n                ","windowMethod":3,"width":0,"height":0,"right":"","bottom":"","name":"German","icon":"http:\/\/cdn.wibiya.com\/Graphics_Toolbar\/Icons\/flag_germany.png","type":"center","uId":"4","pop":1,"min":1,"close":1},{"url":"http:\/\/translate.google.com\/translate?sl=auto&tl=it&u=Wibiya_URL\n                ","windowMethod":3,"width":0,"height":0,"right":"","bottom":"","name":"Italian","icon":"http:\/\/cdn.wibiya.com\/Graphics_Toolbar\/Icons\/flag_italy.png","type":"center","uId":"5","pop":1,"min":1,"close":1},{"url":"http:\/\/translate.google.com\/translate?sl=auto&tl=ja&u=Wibiya_URL\n                ","windowMethod":3,"width":0,"height":0,"right":"","bottom":"","name":"Japanese","icon":"http:\/\/cdn.wibiya.com\/Graphics_Toolbar\/Icons\/flag_japan.png","type":"center","uId":"6","pop":1,"min":1,"close":1},{"url":"http:\/\/translate.google.com\/translate?sl=auto&tl=ko&u=Wibiya_URL\n                ","windowMethod":3,"width":0,"height":0,"right":"","bottom":"","name":"Korean","icon":"http:\/\/cdn.wibiya.com\/Graphics_Toolbar\/Icons\/flag_korea.png","type":"center","uId":"7","pop":1,"min":1,"close":1},{"url":"http:\/\/translate.google.com\/translate?sl=auto&tl=pt&u=Wibiya_URL\n                ","windowMethod":3,"width":0,"height":0,"right":"","bottom":"","name":"Portuguese","icon":"http:\/\/cdn.wibiya.com\/Graphics_Toolbar\/Icons\/flag_portugal.png","type":"center","uId":"8","pop":1,"min":1,"close":1},{"url":"http:\/\/translate.google.com\/translate?sl=auto&tl=ru&u=Wibiya_URL\n                ","windowMethod":3,"width":0,"height":0,"right":"","bottom":"","name":"Russian","icon":"http:\/\/cdn.wibiya.com\/Graphics_Toolbar\/Icons\/flag_russia.png","type":"center","uId":"9","pop":1,"min":1,"close":1},{"url":"http:\/\/translate.google.com\/translate?sl=auto&tl=es&u=Wibiya_URL\n                ","windowMethod":3,"width":0,"height":0,"right":"","bottom":"","name":"Spanish","icon":"http:\/\/cdn.wibiya.com\/Graphics_Toolbar\/Icons\/flag_spain.png","type":"app","uId":"10","pop":0,"min":0,"close":1}];
function OpenLinkMenu_72795(LinkObject){
    if (LinkObject.attr('menu_opened')=='yes'){
	wibiyaToolbar.framework.CloseMenu(LinkObject);
    }
    else{
	wibiyaToolbar.framework.OpenMenu(LinkObject);
    }
};


function LinkClicked_72795(_options){
    if (jQuery('#AppWin_72795').length >0)
    {
        var CurrentWiwi = jQuery('#AppWin_72795');
        if (jQuery(CurrentWiwi).css('opacity') == 0) {
            wibiyaToolbar.framework.show_wiwi(jQuery(CurrentWiwi));
            if ( jQuery('#AppWin_72795').find("iframe").attr('src') != wibiyaToolbar.framework.LinkDataReplacor(LinkNodes_72795[_options.itemIndex].url))
            {
                jQuery('#AppWin_72795').find("iframe").attr('src' ,wibiyaToolbar.framework.LinkDataReplacor(LinkNodes_72795[_options.itemIndex].url));
            }
        }
        else
        {
            jQuery('#AppWin_72795').find('.wibiyaToolbar_wiwi_close_a').trigger('click');
            wibiyaToolbar.framework.fun_RegisterAction_extended(5,72795,3,0,'');
        }
    }
    else
    {
        if (LinkNodes_72795[_options.itemIndex].windowMethod !=0) {
            var _link = wibiyaToolbar.framework.LinkDataReplacor(LinkNodes_72795[_options.itemIndex].url);
            var _action_options =
                {
                actionType: 'Link',
                name:'AppWin_72795',
                title :LinkNodes_72795[_options.itemIndex].name,
                windowType : LinkNodes_72795[_options.itemIndex].windowMethod,
                link : _link,
                scroll : 'YES',
                code : '',
                dimention : { 'width' :LinkNodes_72795[_options.itemIndex].width , 'height':LinkNodes_72795[_options.itemIndex].height },
                icon : LinkNodes_72795[_options.itemIndex].icon,
                position : { 'x' :LinkNodes_72795[_options.itemIndex].right , 'y':LinkNodes_72795[_options.itemIndex].bottom},
                type : LinkNodes_72795[_options.itemIndex].type,
                appId : 5,
                toolbarAppId : 72795,
                controles :{pop:LinkNodes_72795[_options.itemIndex].pop,min:LinkNodes_72795[_options.itemIndex].min,close:LinkNodes_72795[_options.itemIndex].close,icon:1}
                };
            wibiyaToolbar.framework.openWiwi(_action_options);
        }
        
    }

}wibiyaToolbar.Apps.App_72796={"rssUrl":"http:\/\/feeds2.feedburner.com\/MoreThanTechnical"};wibiyaToolbar.framework.fun_OpenResentPostMenu_72796 = function(){
    wibiyaToolbar.framework.fun_BuildResentPost_72796();

};


wibiyaToolbar.framework.fun_BuildResentPost_72796 = function(){
    if (jQuery('#wibiyaToolbar_recentMenu_72796').length == 0) {
//	var _recentMenu = '<div menu_opened="no" class="wibiyaToolbar_recent" id="wibiyaToolbar_recentMenu_72796" style="display:none;left:0px;">\
//        <div id="wibiyaToolbar_recent_top">\
//        <div id="wibiyaToolbar_recent_top_left"><div class="wibiya_toolbar_side_seperator"></div><div class="wibiya_toolbar_left_gradian"></div>\
//        <div class="wibiya_toolbar_side_seperator wibiya_toolbar_side_left">\
//        <div class="wibiya_toolbar_side_70per first left wibiya_toolbar_BG"></div><div class="wibiya_toolbar_side_20per first left wibiya_toolbar_BG"></div><div class="wibiya_toolbar_side_40per first left wibiya_toolbar_BG"></div>\
//        <div class="wibiya_toolbar_side_20per second left wibiya_toolbar_BG"></div><div class="wibiya_toolbar_side_70per second left wibiya_toolbar_BG"></div><div class="wibiya_toolbar_side_twopx wibiya_toolbar_BG wibiya_toolbar_opacity"></div>\
//        <div class="wibiya_toolbar_side_threepx wibiya_toolbar_BG wibiya_toolbar_opacity"></div><div class="wibiya_toolbar_side_colHold wibiya_toolbar_BG wibiya_toolbar_opacity"></div></div>\
//		</div>\
//        <div id="wibiyaToolbar_recent_top_center"><div class="wibiya_toolbar_middle_gradian"></div><div class="wibiya_toolbar_middle_bg wibiya_toolbar_BG wibiya_toolbar_opacity"></div>\
//        <div class="wibiyaToolbar_recent_close">\
//        <div class="wibiyaToolbar_recent_close_a"></div>\
//        </div>\
//        <div class="wibiyaToolbar_recent_title wibiyaToolbar_recent_top_title">\
//        <img src="***IMAGE_URL***" class="wibiyaToolbar_recent_icon" alt=""/>\
//        <div class="wibiyaToolbar_recent_caption">\
//        ***TITLE***\
//        </div>\
//        </div>\
//        </div>\
//        <div id="wibiyaToolbar_recent_top_right"><div class="wibiya_toolbar_side_seperator wibiya_toolbar_side_right">\
//		<div class="wibiya_toolbar_side_70per first right wibiya_toolbar_BG"></div><div class="wibiya_toolbar_side_20per first right wibiya_toolbar_BG"></div><div class="wibiya_toolbar_side_40per first right wibiya_toolbar_BG"></div>\
//		<div class="wibiya_toolbar_side_20per second right wibiya_toolbar_BG"></div><div class="wibiya_toolbar_side_70per second right wibiya_toolbar_BG"></div><div class="wibiya_toolbar_side_twopx wibiya_toolbar_BG wibiya_toolbar_opacity"></div>\
//		<div class="wibiya_toolbar_side_threepx wibiya_toolbar_BG wibiya_toolbar_opacity"></div><div class="wibiya_toolbar_side_colHold wibiya_toolbar_BG wibiya_toolbar_opacity"></div>\
//		</div><div class="wibiya_toolbar_right_gradian"></div><div class="wibiya_toolbar_side_seperator"></div>\
//		</div>\
//        </div>\
//        <table width="100%" border="0" style="float:left;margin:0;padding:0;border-collapse:collapse;">\
//        <tr>\
//        <td id="wibiyaToolbar_recent_left">\
//        </td>\
//        <td class="wibiyaToolbar_recent_body" width="440">\
//        <div class="wibiyaToolbar_recent_body_inner">\
//        <ul class="wibiyaToolbar_Menu_UL" appId="7" id="recentMenuList_72796" appid="7" style="margin:0;width:440px;">\
//            </ul>\
//            </div>\
//            </td>\
//            <td id="wibiyaToolbar_recent_right">\
//            </td>\
//            </tr>\
//            </table>\
//            <div id="wibiyaToolbar_recent_loader" style="position:absolute; left: 200px; top: 170px"><img src="http://cdn.wibiya.com/Graphics_Toolbar/Icons/loading.gif" border="0" /></div>\
//            </div>';
//
//	jQuery('#wibiyaToolbar_item_normal_72796').append(_recentMenu);
//
//	jQuery('#wibiyaToolbar_recentMenu_72796').css({
//	    'z-index':1000,
//	    'width':'450px',
//	    'height': '350px'
//	
//
//	jQuery('#wibiyaToolbar_recentMenu_72796 wibiyaToolbar_recent_body').css({'height': '328px'});
//	wibiyaToolbar.framework.OpenMenu(jQuery('#wibiyaToolbar_recentMenu_72796'));


        options = {
            name:'wibiyaToolbar_recentMenu_72796',
            title :'Recent Posts',
            dimention : { width: 440,height: 319},
            icon : 'http://cdn.wibiya.com/Graphics_Toolbar/Icons/recent_dark.png',
            appId : 7,
            toolbarAppId : 72796
            };

        var _recentMenu =wibiyaToolbar.framework.createWiwiMenu('#wibiyaToolbar_item_normal_72796', options);
        _recentMenu.find(".wibiyaToolbar_wiwi_main").animate({bottom:0},400,function(){
            var _recentMenuinner = '<div class="wibiyaToolbar_recent_body_inner">\
                <ul class="wibiyaToolbar_Menu_UL" appId="7" id="recentMenuList_72796" appid="7" style="margin:0;width:440px;">\
                    </ul>\
                    </div>\
                    <div id="wibiyaToolbar_recent_loader" style="position:absolute; left: 200px; top: 170px"><img src="http://cdn.wibiya.com/Graphics_Toolbar/Icons/loading.gif" border="0" /></div>';
                _recentMenu.find(".wibiyaToolbar_wiwi_body").append(_recentMenuinner);

                var _rssUrl = 'http://feeds2.feedburner.com/MoreThanTechnical';
                var _ShowImages = "1";

                jQuery.get('http://toolbar2.wibiya.com/Handlers/New_Navigator.php', {
                    action:'all',
                    URL:_rssUrl
                },function(data){
                    jQuery('#wibiyaToolbar_recent_loader').remove();
                    var _size = data.length;
                    var _To =  0;
                    var _Imgcounter = 0;
                    for (i = _size-1; i >= _To; i--){
                        _TagsSize = data[i].tags.length;
                        if (_TagsSize>3){
                            _TagsSize = 3;
                        }
                        var _tags = '';
                        for (_Tagindex = 0; _Tagindex < _TagsSize; _Tagindex++){
                            _tags += data[i].tags[_Tagindex];
                            if (_Tagindex<_TagsSize-1){
                                _tags += ',';
                            }
                        }

                        var _publicationDate = data[i].publicationDate;
                        if (data[i].publicationDate == '31-Dec-1969'){
                            _publicationDate = "";
                        }

                        var itmeHtml = '<li class="wibiyaToolbar_recentItem_normal" index="'+i+'" link="'+data[i].linkUrl+'" style="cursor: pointer; height: auto">'
                            +'<table width="100%" cellpadding="0" cellspacing="0" class="wibiyaToolbar_td" style="border-bottom:dashed 1px #e0e0e0">'
                            +'<tr>';

                        if (_ShowImages==1){
                            var _imgId = "navigatorImg"+_Imgcounter;

                            itmeHtml += '<td width="70" class="wibiyaToolbar_td" style="padding: 8px;">\
                                <div style="width:60px; height:60px;border: solid 1px #d0d0d0; background-color: #ffffff; background-image: url(http://cdn.wibiya.com/Graphics_Toolbar/Themes/frame.gif) ">\
                                <table class="wibiyaToolbar_td" width="100%" height="100%" cellpadding="0" cellspacing="0">\
                                <tr>\
                                <td align="center" valign="middle" class="wibiyaToolbar_td">\
                                <div style="overflow:hidden;width:60px;height:60px;"><img onload="fun_imagefit_72796(\''+_imgId+'\')"  src="'+data[i].imageUrl+'" title="'+data[i].title+'" class="navigatorImg WibyaImgPreview" id="'+_imgId+'"></div>\
                                </td>\
                                </tr>\
                                </table>\
                                </div>\
                                </td>';
                        }

                        itmeHtml += '<td align="left" class="wibiyaToolbar_td" style="width: 310px;vertical-align:middle;">\
                            <table width="100%" class="wibiyaToolbar_td">\
                            <tr>\
                            <td align="left" valign="top" style="padding:5px; background-color: transparent" class="wibiyaToolbar_recent_title">'+data[i].title+'</td>\
                            </tr>\
                            <tr>\
                            <td align="left" valign="middle" class="wibiyaToolbar_td" style="padding:5px;color: #888888">\
                            <div class="wibiyaToolbar_recent_tags"><font style="color: #565656; margin-right: 8px">'+_publicationDate+'</font>'+_tags+'</div>\
                            </td>\
                            </tr>\
                            </table>\
                            </td>\
                            <td width="20" class="wibiyaToolbar_td" style="vertical-align:middle;" align="center" valign="middle">\
                            <img src="http://cdn.wibiya.com/Graphics_Toolbar/Themes/panel_link_icon.png" border="0">\
                            </td>\
                            </tr>\
                            </table>\
                            </li>';

                        jQuery("#recentMenuList_72796").append(itmeHtml);

                        if (_ShowImages==1){
                            fun_imagefit_72796(jQuery("#navigatorImg"+_Imgcounter).attr("id"));
                            _Imgcounter++;
                        }

                    }

                    jQuery(".wibiyaToolbar_recentItem_normal").mouseover(function(){
                        jQuery(this).hand().removeClass().addClass("wibiyaToolbar_recentItem_over");
                    }).mouseout(function(){
                        jQuery(this).removeClass().addClass("wibiyaToolbar_recentItem_normal");
                    }).click(function(){
                        var NavLink = jQuery(this).attr('link');
                        wibiyaToolbar.framework.fun_RegisterAction_extended(7,72796,2,0,'{"link" : "'+NavLink+'"}');
                        if (typeof(wibiyaToolbar.Apps.App_72796)=='object')
                        {
                            if (Number(wibiyaToolbar.Apps.App_72796.windowMethod)==4)
                            {
                                window.open(NavLink, "WibiyaToolbarNewWindow");
                            }
                            else
                            {
                                setTimeout('window.location = "'+NavLink+'";',1000);
                            }
                        }
                        else
                        {
                            setTimeout('window.location = "'+NavLink+'";',1000);
                        }
                    });

                    jQuery(".wibiyaToolbar_recentItem_normal").each(function(){
                        if (IsCurrentPost_72796(jQuery(this).find(".wibiyaToolbar_recent_title").text())){
                            jQuery(this).removeClass().addClass("wibiyaToolbar_recentItem_selected").unbind();
                        }
                    });
                    _fun_imagePreview_72796();
                },'jsonp');

              jQuery("body").one('click',function(){                    
                    wibiyaToolbar.framework.OpenWiwiMenu(jQuery(_recentMenu));
                    jQuery("body").unbind("click");
                });
        });
       
	
    }
    else{                
	//wibiyaToolbar.framework.OpenMenu(jQuery("#wibiyaToolbar_recentMenu_72796"));
            wibiyaToolbar.framework.OpenWiwiMenu(jQuery("#wibiyaToolbar_recentMenu_72796"));
    }
};

function IsCurrentPost_72796(PostTitle){
    return document.title.replace(unescape(wibiyaToolbar.Data.SiteName),"").indexOf(PostTitle) != -1;
};

function fun_imagefit_72796(_ImgId){
    if(typeof _ImgId == "undefined"){
        return;
    }

    var _img = jQuery("#"+_ImgId+"");
    //get  the container dimesions
    _width = _img.parent().width();
    _height = _img.parent().height();
    _img.attr('startwidth', _img.width()).attr('startheight', _img.height());

    // strech/skew the image
    if (_img.width() <= _img.height()){
	_img.width(_width + 'px').height(Math.round(_img.attr('startheight')*(_img.width()/_img.attr('startwidth'))));
    }
    else{
	_img.height(_height + 'px').width(Math.round(_img.attr('startwidth')*(_img.height()/_img.attr('startheight'))));
    }
};

function _fun_imagePreview_72796(){
    /* CONFIG
     these 2 variable determine popup's distance from the cursor
     you might want to adjust to get the right result */
    xOffset = 10;
    yOffset = 30;
    /* END CONFIG */

    jQuery("img.WibyaImgPreview").mouseover(function(e){
	jQuery("body").append("<p id='preview' style='z-index:11000000;position:absolute;border:1px solid #ccc;background:#333;padding:5px;color:#fff;'><img src='"+ this.src +"' alt='Image preview' /></p>");
	jQuery("#preview")
	.css("bottom",(wibiyaToolbar.framework.getViewportHeight()-e.pageY-xOffset) + "px")
	.css("left",(e.pageX + yOffset) + "px")
    }).mouseout(function(){
	jQuery("#preview").remove();
    });
};wibiyaToolbar.framework.fun_GeneralApp_72797 = function (_action_options_starter){
    if (jQuery('#AppWin_72797').length >0)
    {
        var CurrentWiwi = jQuery('#AppWin_72797');
        if (jQuery(CurrentWiwi).css('opacity') == 0) {
            wibiyaToolbar.framework.show_wiwi(jQuery(CurrentWiwi));
        }
        else
        {
            jQuery('#AppWin_72797').find('.wibiyaToolbar_wiwi_close_a').trigger('click');
            wibiyaToolbar.framework.fun_RegisterAction_extended(28,72797,3,0,'');
        }
    }
    else
    {
        if (0 != 0){
            var _action_options =
                {
                actionType: 'Link',
                name:'AppWin_72797',
                title :'Random',
                windowType : 0,
                link : wibiyaToolbar.framework.LinkDataReplacor(''),
                scroll : 'NO',
                code : wibiyaToolbar.framework.LinkDataReplacor(''),
                dimention : { width: 0 ,height: '0'},
                icon : 'http://cdn.wibiya.com/Graphics_Toolbar/Icons/random.png',
                position : {x : 0 , y : 0 },
                appId : 28,
                side : 'Left',
                type : '',
                starterOptions : _action_options_starter,
                toolbarAppId : 72797,
                controles :{pop:1,min:1,close:1,icon:1}
                };

            wibiyaToolbar.framework.openWiwi(_action_options);
        }
    }
};

wibiyaToolbar.framework.fun_PopOut_72797 = function (_action_options){
    if (jQuery('#AppWin_72797').length >0){
        jQuery('#AppWin_72797').find('.wibiyaToolbar_wiwi_close_a').trigger('click');
    }

    PopOutWindow = window.open( wibiyaToolbar.framework.LinkDataReplacor(''),'Popout_72797' , 'height=0,width=0,location=no');

};var _rssUrl = "http://feeds2.feedburner.com/MoreThanTechnical";function wibiya_randomPost() {jQuery.get("http://toolbar2.wibiya.com/Handlers/New_Navigator.php", {action:"random",URL:_rssUrl},function(data){window.location = data.link;},"jsonp");}wibiyaToolbar.Apps.App_72798={"notifications":{"notification":{"date":"2009-12-28","link":"","msgid":"1","text":"Welcome to More Than Technical !","expire":"2019-12-28"}}};
if (wibiyaToolbar.Apps.App_72798.notifications.notification.constructor.toString().indexOf("Array")==-1)
{
    wibiyaToolbar.Notifier = wibiyaToolbar.Apps.App_72798.notifications.notification;
}
else
{
    wibiyaToolbar.Notifier = wibiyaToolbar.Apps.App_72798.notifications.notification[0];
}

function fun_App_72798_onLoad(){
    if(jQuery.cookie)
    {
        if (typeof (wibiyaToolbar.Notifier.text) != "undefined")
        {
             var _COOKIE_NAME = 'WibiyaNoughty';

            var _OPTIONS = {
                path: '/',
                expires: 60
            };

            var type = 0;//1: noti 2:both 3:twit 0: none
            var cookie = jQuery.cookie(_COOKIE_NAME);
            if (cookie == null )
            {
                if (typeof(wibiyaToolbar.Notifier.text) != 'undefined' && cookie == null || cookie != wibiyaToolbar.Notifier.msgId)
                {
                    jQuery.cookie(_COOKIE_NAME,wibiyaToolbar.Notifier.msgId,_OPTIONS);
                    type =1;

                }

                wibiyaToolbar.framework.delayAction('fun_ShowNotificationPop(1);',4000);
            }
            else
            {
                if (typeof(wibiyaToolbar.Notifier.text) != 'undefined')
                {
                    if (cookie != wibiyaToolbar.Notifier.msgId)
                    {
                        jQuery.cookie(_COOKIE_NAME,wibiyaToolbar.Notifier.msgId,_OPTIONS);
                        type = 1;

                        wibiyaToolbar.framework.delayAction('fun_ShowNotificationPop(1);',4000);
                    }
                }

            };
        };
    }
    else
    {
        setTimeout("fun_App_72798_onLoad();",500);
    }
}

function fun_GeneralApp_72798(_action_options)
{
    fun_ShowNotificationPop();
};

function fun_ShowNotificationPop()
{
            var msgText = wibiyaToolbar.Notifier.text;
            msgText = msgText.replace(/wibiya_SITENAME/g,wibiyaToolbar.Data.SiteName);
            var msgLink = wibiyaToolbar.Notifier.link;
            msgLink = msgLink.replace(/\*\*\*WibiyaAmp\*\*\*/g,'&');
    //_fun_RegisterNotificationView();
if (jQuery("#wibiyaPop").length ==0)
    {
        if (typeof (msgText) != "undefined")
        {
            var URLregex = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;

            // verify link

            var _link = '';
            if (msgLink.length>2) {
                msgLink = wibiyaToolbar.framework.AddHttp(msgLink);
                _link = '<a href="'+msgLink+'" onclick="return wibiyaToolbar.framework.fun_RegisterAction_extended(15,72798,3,0,\'\');" target="_blank" style="font-family:arial,verdana; font-size: 12px; color: #3b5998; font-weight: bold">'+msgLink.slice(0, 30)+'...</a>';
            }


            var notyTitle = jQuery("#wibiyaToolbar_item_normal_72798").find(".wibiyaToolbar_itemText").text();;

            //_ih +=          '<td width="215" align="left" class="wibiyaToolbar_td" style="font-family:arial,verdana; font-size: 15px; color: #333333; font-weight: bold; padding-top:14px;background-color: transparent; text-align:left; vertical-align:middle;">Blog Notification</td>';

            // build notifier body
            var _ih = '<table width="290" cellpadding="0" cellspacing="0" class="wibiyaToolbar_td">';
            _ih +=      '<tr height="40">';
            _ih +=          '<td width="55" align="center" valign="top" class="wibiyaToolbar_td" style="padding-top: 9px; vertical-align: middle;text-align: center">';
            _ih +=              '<img src="http://cdn.wibiya.com/Graphics_Toolbar/Icons/notify32.png" style="text-align: center; display: inline" />';
            _ih +=          '</td>';
            _ih +=          '<td width="215" align="left" class="wibiyaToolbar_td" style="font-family:arial,verdana; font-size: 15px; color: #333333; font-weight: bold; padding-top:14px;background-color: transparent; text-align:left; vertical-align:middle;">'+ notyTitle +'</td>';
            _ih +=          '<td class="PopX" width="20" align="left" valign="top" style="padding-top: 10px;font-family:arial,verdana; font-size: 14px; color: #555555; font-weight: bold;background-color: transparent;vertical-align:top; border:none;">X</td>';
            _ih +=      '</tr>';
            _ih +=      '<tr>';
            _ih +=          '<td valign="top" align="left"colspan="3" width="290px" class="wibiyaToolbar_td" style="padding:4px 12px 2px 12px;line-height: 18px;font-family:arial,verdana; font-size: 14px; color: #333333; padding-top:14px;background-color: transparent">'+msgText+'</td>';
            _ih +=      '</tr>';
            _ih +=      '<tr>';
            _ih +=          '<td valign="top" align="left" colspan="3" width="290px" class="wibiyaToolbar_td" style="padding:4px 12px 2px 12px;">'+_link+'</td>';
            _ih +=      '</tr>';
            _ih += '</table>';


            var _wibiyaNoughtyDiv = document.createElement("div");
            _wibiyaNoughtyDiv.style.display = 'none';
            _wibiyaNoughtyDiv.id = "wibiyaPop";
            _wibiyaNoughtyDiv.innerHTML = _ih;
            var NewBottom = 35;
            if (typeof(wibiyaToolbar.Data.TBStyleXml)=="object")
            {
                NewBottom = parseInt(wibiyaToolbar.Data.TBStyleXml.size.height)+5;
            }
            

            //jQuery("div[appid=15]").parent().prepend(_wibiyaNoughtyDiv);
            jQuery("#wibiyaToolbar").append(_wibiyaNoughtyDiv);
            jQuery("#wibiyaPop").css('bottom',NewBottom+'px');

            jQuery(".PopX").css("cursor","pointer");


            jQuery(".PopX").click(function(){
                    jQuery("#wibiyaPop").fadeOut(200,function(){
                            jQuery(this).remove()
                        })

                });

            jQuery("#wibiyaPop").fadeIn(500);
    /*
jQuery("#wibiyaPop").oneTime(1000,function(){
    jQuery(this).animate({
        opacity:1
    },500)
});
*/

            jQuery("#wibiyaPop").oneTime(15000,function(){
                    jQuery("#wibiyaPop").fadeOut(500,function(){
                            jQuery(this).remove();
                        })
                });
        }
        else
        {

            var notyTitle = jQuery("#wibiyaToolbar_item_normal_72798").find(".wibiyaToolbar_itemText").text();
            //_ih +=          '<td width="215" align="left" class="wibiyaToolbar_td" style="font-family:arial,verdana; font-size: 15px; color: #333333; font-weight: bold; padding-top:14px; text-align:left;vertical-align:middle">Blog Notification</td>';

            var _ih = '<table width="290" cellpadding="0" cellspacing="0" class="wibiyaToolbar_td">';
            _ih +=      '<tr height="40">';
            _ih +=          '<td width="55" align="center" valign="top" class="wibiyaToolbar_td" style="padding-top: 9px; vertical-align: middle;text-align: center">';
            _ih +=              '<img src="http://cdn.wibiya.com/Graphics_Toolbar/Icons/notify32.png" style="text-align: center" />';
            _ih +=          '</td>';
            _ih +=          '<td width="215" align="left" class="wibiyaToolbar_td" style="font-family:arial,verdana; font-size: 15px; color: #333333; font-weight: bold; padding-top:14px; text-align:left;vertical-align:middle">'+ notyTitle +'</td>';
            _ih +=          '<td class="PopX" width="20" align="left" valign="top" style="padding: 10px 0px 0px 0px;font-family:arial,verdana; font-size: 14px; color: #555555; font-weight: bold; background-color: transparent; border: none; margin: 0;vertical-align:top;">X</td>';
            _ih +=      '</tr>';
            _ih +=      '<tr>';
            _ih +=          '<td valign="top" align="left" colspan="3" width="290px" class="wibiyaToolbar_td" style="padding:4px 12px 2px 12px;font-family:arial,verdana; font-size: 14px; color: #333333; padding-top:14px">No new notifications</td>';
            _ih +=      '</tr>';
            _ih += '</table>';

            var _wibiyaNoughtyDiv = document.createElement("div");
            _wibiyaNoughtyDiv.id = "wibiyaPop";
            _wibiyaNoughtyDiv.style.display = 'none';
            _wibiyaNoughtyDiv.innerHTML = _ih;

            jQuery("div[appid=15]").parent().prepend(_wibiyaNoughtyDiv);


            jQuery(".PopX").css("cursor","pointer");


            jQuery(".PopX").click(function(){
                    jQuery("#wibiyaPop").fadeOut(200,function(){
                            jQuery(this).remove()
                        })

                });

            jQuery("#wibiyaPop").fadeIn(500);


            jQuery("#wibiyaPop").oneTime(10000,function(){
                    jQuery("#wibiyaPop").fadeOut(500,function(){
                            jQuery(this).remove();
                        })
                });
        }
    }
};
setTimeout("fun_App_72798_onLoad();",500);wibiyaToolbar.framework.fun_GeneralApp_72799 = function (_action_options_starter){
    if (jQuery('#AppWin_72799').length >0)
    {
        var CurrentWiwi = jQuery('#AppWin_72799');
        if (jQuery(CurrentWiwi).css('opacity') == 0) {
            wibiyaToolbar.framework.show_wiwi(jQuery(CurrentWiwi));
        }
        else
        {
            jQuery('#AppWin_72799').find('.wibiyaToolbar_wiwi_close_a').trigger('click');
            wibiyaToolbar.framework.fun_RegisterAction_extended(20,72799,3,0,'');
        }
    }
    else
    {
        if (1 != 0){
            var _action_options =
                {
                actionType: 'Code',
                name:'AppWin_72799',
                title :'Twitter Notifier',
                windowType : 1,
                link : wibiyaToolbar.framework.LinkDataReplacor(''),
                scroll : '0',
                code : wibiyaToolbar.framework.LinkDataReplacor('<script type="text/javascript">var username="morethantech";function wibiyaToolbar_ra20(_ActionId,_MetaData,_MetaType){wibiya_reg(20,wibiyaToolbar.id,72799,_ActionId,_MetaData,_MetaType);}loadjscssfile("http://cdn.wibiya.com/Apps/twitter/twitter.js","js","head");loadjscssfile("http://cdn.wibiya.com/Scripts/actions.js","js","head");loadjscssfile("http://cdn.wibiya.com/Scripts/jquery.cookie.js","js","head");loadjscssfile("http://cdn.wibiya.com/Scripts/jquery.timer.js","head");loadjscssfile("http://cdn.wibiya.com/Apps/twitter/twitter.css","css","head");</script><div id="wibiyaToolbar_tw_placeholder"></div>            '),
                dimention : { width: 785 ,height: '425'},
                icon : 'http://cdn.wibiya.com/Graphics_Toolbar/Icons/twitter_dark_light.png',
                position : {x : 0 , y : 30 },
                appId : 20,
                side : 'Right',
                type : 'app',
                starterOptions : _action_options_starter,
                toolbarAppId : 72799,
                controles :{pop:0,min:0,close:1,icon:1}
                };

            wibiyaToolbar.framework.openWiwi(_action_options);
        }
    }
};

wibiyaToolbar.framework.fun_PopOut_72799 = function (_action_options){
    if (jQuery('#AppWin_72799').length >0){
        jQuery('#AppWin_72799').find('.wibiyaToolbar_wiwi_close_a').trigger('click');
    }

    PopOutWindow = window.open( wibiyaToolbar.framework.LinkDataReplacor(''),'Popout_72799' , 'height=425,width=785,location=no');

};var LinkNodes_72800 = [{"url":"mailto:?subject=Wibiya_PAGETITLE&body=Hi.%0A%0aI%20wanted%20to%20share%20this%20with%20you:%0A%0AWibiya_PAGETITLE%0AWibiya_URL%0A%0A%0A","windowMethod":4,"width":0,"height":0,"right":"","bottom":"","name":"Email This","icon":"http:\/\/cdn.wibiya.com\/Graphics_Toolbar\/Icons\/share_email.png","type":"","uId":"0","pop":0,"min":0,"close":1},{"url":"http:\/\/www.facebook.com\/share.php?u=Wibiya_URL&t=Wibiya_PAGETITLE","windowMethod":2,"width":990,"height":"80%","right":"","bottom":"","name":"Facebook","icon":"http:\/\/cdn.wibiya.com\/Graphics_Toolbar\/Icons\/share_fb.png","type":"","uId":"1","pop":0,"min":0,"close":1},{"url":"http:\/\/twitter.com\/home?status=Currently reading Wibiya_PAGETITLE at: Wibiya_URL","windowMethod":4,"width":0,"height":0,"right":"","bottom":"","name":"Twitter","icon":"http:\/\/cdn.wibiya.com\/Graphics_Toolbar\/Icons\/share_twitter.png","type":"","uId":"2","pop":0,"min":0,"close":1},{"url":"http:\/\/delicious.com\/save?v=5&noui&jump=close&url=Wibiya_URL&title=Wibiya_PAGETITLE","windowMethod":2,"width":990,"height":"80%","right":"","bottom":"","name":"Delicious","icon":"http:\/\/cdn.wibiya.com\/Graphics_Toolbar\/Icons\/share_delicious.png","type":"","uId":"3","pop":1,"min":1,"close":1},{"url":"http:\/\/www.stumbleupon.com\/submit?url=Wibiya_URL&title=Wibiya_PAGETITLE","windowMethod":4,"width":0,"height":0,"right":"","bottom":"","name":"Stumbleupon","icon":"http:\/\/cdn.wibiya.com\/Graphics_Toolbar\/Icons\/share_stumble.png","type":"","uId":"4","pop":0,"min":0,"close":1},{"url":"http:\/\/digg.com\/submit?phase=2&url=Wibiya_URL&title=Wibiya_PAGETITLE","windowMethod":2,"width":990,"height":"80%","right":"","bottom":"","name":"Digg","icon":"http:\/\/cdn.wibiya.com\/Graphics_Toolbar\/Icons\/share_digg.png","type":"","uId":"5","pop":1,"min":1,"close":1},{"url":"http:\/\/buzz.yahoo.com\/buzz?targetUrl=Wibiya_URL","windowMethod":4,"width":0,"height":0,"right":"","bottom":"","name":"Buzz up!","icon":"http:\/\/cdn.wibiya.com\/Graphics_Toolbar\/Icons\/share_buzz.png","type":"","uId":"6","pop":0,"min":0,"close":1},{"url":"http:\/\/www.myspace.com\/Modules\/PostTo\/Pages\/?u=Wibiya_URL&t=Wibiya_PAGETITLE","windowMethod":4,"width":0,"height":0,"right":"","bottom":"","name":"MySpace","icon":"http:\/\/cdn.wibiya.com\/Graphics_Toolbar\/Icons\/share_myspace.png","type":"","uId":"7","pop":0,"min":0,"close":1},{"url":"http:\/\/friendfeed.com?title=Wibiya_PAGETITLE&url=Wibiya_URL","windowMethod":2,"width":990,"height":"80%","right":"","bottom":"","name":"FriendFeed","icon":"http:\/\/cdn.wibiya.com\/Graphics_Toolbar\/Icons\/share_ff.png","type":"","uId":"8","pop":1,"min":1,"close":1},{"url":"http:\/\/www.technorati.com\/faves?add=Wibiya_URL","windowMethod":2,"width":990,"height":"80%","right":"","bottom":"","name":"Technorati","icon":"http:\/\/cdn.wibiya.com\/Graphics_Toolbar\/Icons\/share_technorati.png","type":"","uId":"9","pop":1,"min":1,"close":1},{"url":"http:\/\/www.google.com\/bookmarks\/mark?op=edit&bkmk=Wibiya_URL&title=Wibiya_PAGETITLE","windowMethod":2,"width":990,"height":"80%","right":"","bottom":"","name":"G Bookmarks","icon":"http:\/\/cdn.wibiya.com\/Graphics_Toolbar\/Icons\/share_google.png","type":"","uId":"10","pop":0,"min":0,"close":1},{"url":"https:\/\/favorites.live.com\/quickadd.aspx?marklet=1&mkt=en-us&url=Wibiya_URL&title=Wibiya_PAGETITLE","windowMethod":4,"width":0,"height":0,"right":"","bottom":"","name":"Live","icon":"http:\/\/cdn.wibiya.com\/Graphics_Toolbar\/Icons\/share_live.png","type":"","uId":"11","pop":0,"min":0,"close":1}];
function OpenLinkMenu_72800(LinkObject){
    if (LinkObject.attr('menu_opened')=='yes'){
	wibiyaToolbar.framework.CloseMenu(LinkObject);
    }
    else{
	wibiyaToolbar.framework.OpenMenu(LinkObject);
    }
};


function LinkClicked_72800(_options){
    if (jQuery('#AppWin_72800').length >0)
    {
        var CurrentWiwi = jQuery('#AppWin_72800');
        if (jQuery(CurrentWiwi).css('opacity') == 0) {
            wibiyaToolbar.framework.show_wiwi(jQuery(CurrentWiwi));
            if ( jQuery('#AppWin_72800').find("iframe").attr('src') != wibiyaToolbar.framework.LinkDataReplacor(LinkNodes_72800[_options.itemIndex].url))
            {
                jQuery('#AppWin_72800').find("iframe").attr('src' ,wibiyaToolbar.framework.LinkDataReplacor(LinkNodes_72800[_options.itemIndex].url));
            }
        }
        else
        {
            jQuery('#AppWin_72800').find('.wibiyaToolbar_wiwi_close_a').trigger('click');
            wibiyaToolbar.framework.fun_RegisterAction_extended(14,72800,3,0,'');
        }
    }
    else
    {
        if (LinkNodes_72800[_options.itemIndex].windowMethod !=0) {
            var _link = wibiyaToolbar.framework.LinkDataReplacor(LinkNodes_72800[_options.itemIndex].url);
            var _action_options =
                {
                actionType: 'Link',
                name:'AppWin_72800',
                title :LinkNodes_72800[_options.itemIndex].name,
                windowType : LinkNodes_72800[_options.itemIndex].windowMethod,
                link : _link,
                scroll : 'YES',
                code : '',
                dimention : { 'width' :LinkNodes_72800[_options.itemIndex].width , 'height':LinkNodes_72800[_options.itemIndex].height },
                icon : LinkNodes_72800[_options.itemIndex].icon,
                position : { 'x' :LinkNodes_72800[_options.itemIndex].right , 'y':LinkNodes_72800[_options.itemIndex].bottom},
                type : LinkNodes_72800[_options.itemIndex].type,
                appId : 14,
                toolbarAppId : 72800,
                controles :{pop:LinkNodes_72800[_options.itemIndex].pop,min:LinkNodes_72800[_options.itemIndex].min,close:LinkNodes_72800[_options.itemIndex].close,icon:1}
                };
            wibiyaToolbar.framework.openWiwi(_action_options);
        }
        
    }

}wibiyaToolbar.framework.fun_GeneralApp_72801 = function (_action_options_starter){
    if (jQuery('#AppWin_72801').length >0)
    {
        var CurrentWiwi = jQuery('#AppWin_72801');
        if (jQuery(CurrentWiwi).css('opacity') == 0) {
            wibiyaToolbar.framework.show_wiwi(jQuery(CurrentWiwi));
        }
        else
        {
            jQuery('#AppWin_72801').find('.wibiyaToolbar_wiwi_close_a').trigger('click');
            wibiyaToolbar.framework.fun_RegisterAction_extended(13,72801,3,0,'');
        }
    }
    else
    {
        if (2 != 0){
            var _action_options =
                {
                actionType: 'Link',
                name:'AppWin_72801',
                title :'RSS',
                windowType : 2,
                link : wibiyaToolbar.framework.LinkDataReplacor('http://feeds2.feedburner.com/MoreThanTechnical'),
                scroll : '1',
                code : wibiyaToolbar.framework.LinkDataReplacor(''),
                dimention : { width: 990 ,height: '80%'},
                icon : 'http://cdn.wibiya.com/Graphics_Toolbar/Icons/rss_dark.png',
                position : {x : 0 , y : 30 },
                appId : 13,
                side : 'Right',
                type : 'center',
                starterOptions : _action_options_starter,
                toolbarAppId : 72801,
                controles :{pop:1,min:1,close:1,icon:1}
                };

            wibiyaToolbar.framework.openWiwi(_action_options);
        }
    }
};

wibiyaToolbar.framework.fun_PopOut_72801 = function (_action_options){
    if (jQuery('#AppWin_72801').length >0){
        jQuery('#AppWin_72801').find('.wibiyaToolbar_wiwi_close_a').trigger('click');
    }

    PopOutWindow = window.open( wibiyaToolbar.framework.LinkDataReplacor('http://feeds2.feedburner.com/MoreThanTechnical'),'Popout_72801' , 'height=80%,width=990,location=no');

};


// Creating Toolbar Div & Properties
var wibiyaToolbarDiv = '<div id="wibiyaToolbar" style="display:none" state="off">'+wibiyaToolbar.ToolbarHTML+'</div>';

// Creating Minimized Toolbar Div & Properties
var wibiyaToolbarMinimizedDiv = '<div id="wibiyaToolbarNewMinimized" style="display:none" class="wibiyaToolbarMin">'+wibiyaToolbar.MinimizedHTML+'</div>';


// Creating Wiwi Div & Properties
var wibiyaToolbarTempWiwiDiv = '<div id="wibiyaToolbar_window_template" style="display:block" class="wibiyaToolbar_window">'+wibiyaToolbar.TempWiwiHTML+'</div>';

jQuery("head").append('<style> #wibiyaToolbar,#wibiyaToolbar div,#wibiyaToolbar table,#wibiyaToolbar tr,#wibiyaToolbar td,#wibiyaToolbar tr:hover td,#wibiyaToolbar img,#wibiyaToolbar a img,.wibiyaToolbar_window table,.wibiyaToolbar_window tr,.wibiyaToolbar_window td,.wibiyaToolbar_window img,.wibiyaToolbar_window a,#wibiyaToolbarMinimized tr,#wibiyaToolbarMinimized td,#wibiyaToolbarMinimized img,#wibiyaToolbarMinimized a img,.wibiyaToolbar_td tr:hover td{background-color:transparent;border:medium none;border-collapse:separate;direction:ltr;margin:0;padding:0;text-align:left;}#wibiyaToolbar{bottom: -22px;color:#333333;font-family:"lucida grande",tahoma,verdana,arial,sans-serif;font-size:11px;font-weight:normal;height:55px;left:0;line-height:14px;position:fixed !important;width:100%;z-index:9999999;}#wibiyaToolbarNewMinimized{ bottom: -55px;color:#333333;font-family:"lucida grande",tahoma,verdana,arial,sans-serif;font-size:11px;font-weight:normal;height:55px;right:0;line-height:14px;position:fixed !important;z-index:9999999;}.wibiya_toolbar_wrapper{ position:fixed !important;width:100%;height:54px;left:0;bottom: -22px;display:block;}#wibiya_toolbar_wrapper_mini{ width:auto !important;left:auto !important;right:0 !important;}#wibiya_toolbar_wrapper_mini .itemTable{ height:26px !important;}.wibiya_toolbar_hight{ }.wibiya_toolbar_holder{ position:relative;width:98%;height:100%;margin-left:auto !important;margin-right:auto !important;padding-right:9px !important;padding-left:9px !important;}.wibiya_toolbar_holder_middle{ width:100%;height:100%;float:left;position: relative;}#wibiya_toolbar_middle_item_holder{ position:absolute;width:100%;left:0;top:5px;z-index:9999999;height:100%;}.wibiya_toolbar_minimized_holder_middle #wibiya_toolbar_middle_item_holder{ position: relative !important;top:auto !important;left:auto !important;margin-top:5px !important;height:26px !important;float: left;}.wibiya_toolbar_BG{ background-color:#0f72b2 !important;}.wibiya_toolbar_opacity{ filter:alpha(opacity=100);-moz-opacity:1;-khtml-opacity:1;opacity:1;}.wibiya_toolbar_side,.wibiya_toolbar_sideLeft,.wibiya_toolbar_sideRight{ width:9px;height:100%;position:absolute;top:0px;;float: left;display: inline;}.wibiya_toolbar_sideLeft{ left:0px }.wibiya_toolbar_sideRight{ right:0px }.wibiya_toolbar_side_minimize{ width:9px;height:100%;position: relative;float: left;}.wibiya_toolbar_middle_bg{ width:100%;height:50px;position:absolute;bottom:0;left:0;z-index:1;}.wibiya_toolbar_middle_gradian{ background-image: url("http://cdn.wibiya.com/Graphics_Toolbar/toolbar_round_hard_gradient.png");background-position:0 -55px;background-repeat: repeat-x;width:100%;height:100%;position:absolute;z-index:10;top:0;left:0;}.wibiya_toolbar_right_gradian,.wibiya_toolbar_left_gradian{ background-image:url("http://cdn.wibiya.com/Graphics_Toolbar/toolbar_round_hard_gradient.png");background-position: -11px -1px;background-repeat: no-repeat;width:9px;height:100%;position:absolute;z-index:100;top:0;left:0;}.wibiya_toolbar_left_gradian{ background-position:0px -1px;}.wibiya_toolbar_side_seperator{ width:5px;float: left;position:relative;z-index:1;height:100%;}.wibiya_toolbar_side_right,.wibiya_toolbar_side_left{ position: relative;width:4px;z-index:1;}.wibiya_toolbar_side_20per{ width:1px;height:1px;position:absolute;filter:alpha(opacity=20);-moz-opacity:0.2;-khtml-opacity:0.2;opacity:0.2;font-size:0px;}.wibiya_toolbar_side_40per{ width:1px;height:1px;position:absolute;filter:alpha(opacity=40);-moz-opacity:0.4;-khtml-opacity:0.4;opacity:0.4;font-size:0px;}.wibiya_toolbar_side_70per{ width:1px;height:1px;position:absolute;filter:alpha(opacity=70);-moz-opacity:0.7;-khtml-opacity:0.7;opacity:0.7;font-size:0px;}.side_20perFirstLeft{ top:4px;right:1px;}.side_20perSecondLeft{ top:6px;left:0px;}.side_20perFirstRight{ top:4px;left:1px;}.side_20perSecondRight{ top:6px;right:0px;}.side_40perFirstLeft{ top:5px;right:2px;}.side_40perFirstRight{ top:5px;left:2px;}.side_70perFirstLeft{ top:4px;right:0px;}.side_70perSecondLeft{ top:7px;left:0px;}.side_70perFirstRight{ top:4px;left:0px;}.side_70perSecondRight{ top:7px;right:0px;}.wibiya_toolbar_side_left .wibiya_toolbar_side_onepx,.wibiya_toolbar_side_left .wibiya_toolbar_side_twopx,.wibiya_toolbar_side_left .wibiya_toolbar_side_threepx{ right:0px;}.wibiya_toolbar_side_right .wibiya_toolbar_side_onepx,.wibiya_toolbar_side_right .wibiya_toolbar_side_twopx,.wibiya_toolbar_side_right .wibiya_toolbar_side_threepx{ left:0px;}.wibiya_toolbar_side_colHold{ width:4px;height:48px;position:absolute;top:8px;left:0px;}.wibiya_toolbar_side_colHoldFull{ width:4px;height:55px;position:absolute;top:4px;left:0px;}.wibiya_toolbar_side_onepx{ width:1px;height:1px;position:absolute;top:6px;font-size:0px;}.wibiya_toolbar_side_twopx{ width:2px;height:1px;position:absolute;top:5px;font-size:0px;}.wibiya_toolbar_side_threepx{ width:3px;height:2px;position:absolute;top:6px;font-size:0px;}.wibiya_opacityHolder{ width:500px;position: relative;}.wibiya_opacityText{ font-weight:12px;float: left;}div#wibiya_opacity_slider{ width:160px;font-size:10px;}.wibiya_hight_slideHolder{ width:500px;position: relative;}.wibiya_hight_slideText{ font-weight:12px;float: left;}div#wibiya_hight_slider{ width:300px;font-size:10px;}.itemLeft{position: relative;background-color:transparent;display:block;float:left;height:100%;}.wibiyaToolbar_item_normal{background-color:transparent !important;display:list-item;height:26px;list-style-type:none;position:relative;width:auto;z-index:1;}.wibiyaToolbar_divider{background-image:url("http://cdn.wibiya.com/Graphics_Toolbar/toolbar_round_hard_gradient.png");background-position:-9px -1px;background-repeat:no-repeat;display:inline;float:left;height:55px;width:2px;margin-top:-4px !important;}.wibiyaToolbar_divider.minMaxBtn_divider{ margin-right:0px ! important;}.itemRight{background-color:transparent;display:block;position: relative;float:right;height:100%;}.wibiya_toolbar_minmizeBtn{ background-image:url("http://cdn.wibiya.com/Graphics_Toolbar/toolbar_round_hard_gradient.png");width:16px;height:16px;margin:5px;cursor:pointer;}.wibiya_toolbar_minmizeBtn.minimized{ background-image: url(../images/btn_minimize_light2.png);}.wibiyaToolbar_tooltip{background-image:url(http://cdn.wibiya.com/Graphics_Toolbar/Themes/tooltip-arrow2.gif);background-repeat:no-repeat;padding-bottom:4px !important;position:absolute;z-index:10 !important;display: inline !important;bottom:28px !important;!important;}.minMaxBtnDiv_minimize .wibiyaToolbar_tooltip,.minMaxBtnDiv_maximize .wibiyaToolbar_tooltip{ width:100px;}.wibiyaToolbar_tooltip_Left{background-position:5px bottom;left:0px;right:auto;}.wibiyaToolbar_tooltip_Right{background-position:right bottom;left:auto;right:0px;}.wibiyaToolbar_tooltip_text{font-size:11px;font-family:Arial,Verdana;background-color:#282828;color:white;display:block;height:auto;line-height:inherit;margin:0 -5px 0 0;padding:3px 8px;position:relative;white-space:nowrap;width:auto;}.wibiyaToolbar_tooltip_Right .wibiyaToolbar_tooltip_text {float:right;}.wibiyaToolbar_tooltip_Left .wibiyaToolbar_tooltip_text {float:left;}#wibiyaToolbar_right:hover{background-position:0px -30px;cursor: pointer;}#wibiyaToolbar_min_tbl{direction: ltr;width:150px;height:30px;font: inherit;padding:0;margin:0;border: none;border-collapse:separate;}#wibiyaToolbar_min_tbl:hover{cursor: pointer;}#wibiyaToolbar_min_tbl:hover #wibiyaToolbar_minimized_right{background-position:0px -90px;cursor: pointer;}#wibiyaToolbarMinimized{direction: ltr;font-family: "lucida grande" ,tahoma,verdana,arial,sans-serif;font-weight: normal;font-size:11px;text-align: left;color:#333333;width:auto;height:30px;z-index:9999997;position:fixed !important;right:0px;bottom:0px;line-height:14px;}#wibiyaToolbar_minimized_left{background-image: url(http://cdn.wibiya.com/Graphics_Toolbar/Themes/Round/sprite_blue_grad.png);background-repeat: no-repeat;background-position:0px -150px;width:20px;}#wibiyaToolbar_minimized_center{background-image: url(http://cdn.wibiya.com/Graphics_Toolbar/Themes/Round/sprite_blue_grad.png);background-position:0px -120px;background-repeat: repeat-x;position: relative;width:75px;}#wibiyaToolbar_minimized_right{background-image: url("http://cdn.wibiya.com/Graphics_Toolbar/toolbar_round_hard_gradient.png");background-repeat: no-repeat;background-position:0px -60px;width:60px;}#wibiyaToolbar_minimized_right:hover{background-position:0px -90px;cursor: pointer;}#wibiyaToolbar_minimized_content{padding:3px 5px 3px 5px;width:auto;height:100%;position: relative;}#wibiyaToolbar_minimized_favicon{ height:19px !important;}#wibiyaToolbar_minimized_text{color:#333333;font-size:12px;font-family:Arial,Verdana;display: inline;float: left;margin-top:7px;margin-left:6px;}#wibiyaToolbar_window_template{z-index:1000;visibility: hidden;left: -5000px;position:fixed !important;}.wibiyaToolbar_wiwi_back{background-color:#000;filter:alpha(opacity=40);-moz-opacity:0.40;opacity:0.40;position:absolute;top:0px;left:0px;width:100%;height:100%;}.wibiyaToolbar_wiwi_main{background-color: transparent;overflow:hidden;z-index:100;position: relative;}.wibiyaToolbar_recent_icon{display: inline;float: left;margin:7px 5px 6px 5px !important;padding:0 !important;}.wibiyaToolbar_wiwi_icon,.wibiyaToolbar_menu_icon,wibiyaToolbar_title_icon{margin:0 5px !important;padding:0 !important;height:19px;}.wibiyaToolbar_wiwi_caption,.wibiyaToolbar_menu_caption{color:#ffffff;font-size:12px !important;font-family: "lucida grande",tahoma,verdana,arial,sans-serif;font-weight:bold;}.wibiyaToolbar_recent_caption{color:#ffffff;font-size:12px !important;font-family: "lucida grande",tahoma,verdana,arial,sans-serif;font-weight:bold;display: inline;float: left;margin:7px 0px 0px 0px !important;margin-top:7px !important;margin-bottom:0px !important;margin-right:0px !important;margin-left:0px !important;height:22px !important;height:22px !important;width:auto;font-size:12px;font-weight:bold;}.wibiyaToolbar_recent_close_a,.wibiyaToolbar_recent_close_a:link{color:#ffffff;font-size:15px;font-family: sans-serif,"lucida grande",tahoma,verdana,arial;font-weight:bold;text-decoration: none;height:16px;background-image:url("http://cdn.wibiya.com/Graphics_Toolbar/toolbar_round_hard_gradient.png");background-position:0 -466px;background-repeat: no-repeat;display:inline;float:left;width:23px;cursor:pointer;}.TBcontainerDiv{float:left;}.itemTable{ height:26px;margin:0px !important;width:auto !important;}.itemTable td{ vertical-align: middle;background: none !important;}.tableButton{ height:26px;width:auto !important;}.tableButton td{ padding-top:0px !important;vertical-align: middle !important;width:auto !important;height:auto !important;}.tableButton .itemTable{ height:24px;}.wibiyaToolbar_wiwi_close_a,.wibiyaToolbar_wiwi_close_a:link{color:#ffffff;font-size:15px;font-family: sans-serif,"lucida grande",tahoma,verdana,arial;font-weight:bold;text-decoration: none;height:16px;background-position:0 -466px;background-image: url("http://cdn.wibiya.com/Graphics_Toolbar/toolbar_round_hard_gradient.png");background-repeat: no-repeat;display:inline;float:left;width:23px;cursor:pointer;z-index:10;}.wibiyaToolbar_wiwi_close_a:hover,.wibiyaToolbar_recent_close_a:hover{color:#000000;font-size:15px;font-family: sans-serif,"lucida grande",tahoma,verdana,arial;font-weight:bold;text-decoration: none;background-position:0 -450px;}.wibiyaToolbar_recent_close{display: inline;float: right;margin:7px 0 !important;height:16px;position:relative;z-index:100;}.wibiyaToolbar_wiwi_close{display: inline;float: right;margin:8px 3px 1px 3px !important;height:16px;position:relative;z-index:100;}.wibiyaToolbar_wiwi_body{width:100%;display:block;}.wibiyaToolbar_wiwi_loader{position: relative;top:45%;left:45%;}.wibiyaToolbar_wiwi_footer{width:100%;height:20px;display:block;}.wibiyaToolbar_wiwi_footerlink,.wibiyaToolbar_wiwi_footerlink:link{background: transparent url(http://cdn.wibiya.com/Graphics_Toolbar/Themes/wibiya_footer_new.png) no-repeat scroll 78px 2px;color:#636461 !important;direction:ltr;display:block;float:left;font-family:"lucida grande",tahoma,verdana,arial,sans-serif;font-size:11px;font-weight:bold;line-height:16px;padding:1px 2px 2px 5px !important;text-align:left;text-decoration:none;width:130px;}.wibiyaToolbar_wiwi_footerlink:hover{width:130px;display:block;background: transparent url(http://cdn.wibiya.com/Graphics_Toolbar/Themes/wibiya_footer_new.png) no-repeat scroll 78px 2px;padding:1px 2px 2px 5px !important;direction: ltr;font-family: "lucida grande" ,tahoma,verdana,arial,sans-serif;font-weight:bold;font-size:11px;text-align: left;text-decoration: none;color:black !important;float: left;line-height:16px;opacity:1;}.wibiyaToolbar_wiwi_footerlink_poweredby,.wibiyaToolbar_wiwi_footerlink_poweredby:link{background: transparent;color:#636461 !important;direction:ltr;display:block;float:left;font-family:"lucida grande",tahoma,verdana,arial,sans-serif;font-size:11px;font-weight:bold;padding:1px 2px 2px 5px !important;text-align:left;text-decoration:none;width:130px;}.wibiyaToolbar_wiwi_footerlink_poweredby:hover{width:130px;display:block;background: transparent;padding:1px 2px 2px 5px !important;direction: ltr;font-family: "lucida grande" ,tahoma,verdana,arial,sans-serif;font-weight:bold;font-size:11px;text-align: left;text-decoration: none;color:black !important;float: left;opacity:1;}.wibiyaToolbar_wiwi_close_window,.wibiyaToolbar_wiwi_close_window:link{direction:ltr;display:block;float:right;font-family:"lucida grande",tahoma,verdana,arial,sans-serif;font-size:11px;font-weight:bold;line-height:16px;padding:1px 4px 2px 5px !important;text-decoration:none !important;width:100px !important;text-align:right !important;color:#636461 !important;}.wibiyaToolbar_wiwi_close_window:hover{direction:ltr;display:block;float:right;font-family:"lucida grande",tahoma,verdana,arial,sans-serif;font-size:11px;font-weight:bold;line-height:16px;padding:1px 4px 2px 5px !important;text-decoration:none !important;width:100px !important;text-align:right !important;color:black !important;opacity:1;}.wibiyaToolbar_button_old{display: inline ;float: left !important;border-top: solid 1px #b3b3b1 !important;border-left: solid 1px #a2a2a2 !important;border-right: solid 1px #a2a2a2 !important;border-bottom: solid 1px #b5b5b5 !important;background-color:#f4f2f1 !important;height:20px !important;margin:2px !important;cursor: pointer !important;position: relative !important;}.wibiyaToolbar_button_old:hover{display: inline ;float: left !important;border-top: solid 1px black !important;border-left: solid 1px black !important;border-right: solid 1px black !important;border-bottom: solid 1px black !important;background-color:#ffffff !important;height:20px !important;margin:2px !important;position: relative !important;}.wibiyaToolbar_button{display: inline ;float: left !important;margin:0px 2px 2px 2px !important;cursor: pointer !important;position: relative !important;}.wibiyaToolbar_button .wibiyaToolbar_icon{width:16px !important;height:16px !important;display: inline ;float: left !important;margin:2px 4px 2px 4px !important;background-image: url(http://cdn.wibiya.com/Graphics_Toolbar/Themes/Round/sprites_set1.png) !important;background-repeat: no-repeat !important;}.wibiyaToolbar_button .wibiyaToolbar_itemImg{display:inline;float:left;margin:0px 2px 2px !important;}.wibiyaToolbar_button_center .wibiyaToolbar_itemImg{margin:0px 2px 0px !important;}.wibiyaToolbar_button .wibiyaToolbar_itemText{margin:0px 8px 2px 2px !important;color:#ffffff;}.wibiyaToolbar_MenuItemImg{ float:left;margin:6px 4px 0 10px !important;}.wibiyaToolbar_button_center .wibiyaToolbar_itemText{margin:0px 8px 0px 2px !important;color:#ffffff;}.wibiyaToolbar_button_left{height:24px;background-position:0px -338px;background-image: url("http://cdn.wibiya.com/Graphics_Toolbar/toolbar_round_hard_gradient.png");background-repeat: no-repeat;display:block;width:4px;cursor:pointer;}.wibiyaToolbar_button_left_over{background-position: -12px -338px;!important;}.wibiyaToolbar_button_right{height:24px;background-position: -7px -266px;background-image: url("http://cdn.wibiya.com/Graphics_Toolbar/toolbar_round_hard_gradient.png");background-repeat: no-repeat;display:block;width:4px;cursor:pointer;}.wibiyaToolbar_button_right_over{ background-position: -19px -266px !important;}.wibiyaToolbar_button_right_multi{height:24px;background-position:0 -218px;background-image: url("http://cdn.wibiya.com/Graphics_Toolbar/toolbar_round_hard_gradient.png");background-repeat: no-repeat;display:inline;float:left;width:22px;cursor:pointer;}.wibiyaToolbar_button_right_multi_over{ background-position:0 -242px !important;}.wibiyaToolbar_button_center{height:24px;background-position:0px -290px;background-image: url("http://cdn.wibiya.com/Graphics_Toolbar/toolbar_round_hard_gradient.png");background-repeat: repeat-x;display:block;width:auto;cursor:pointer;}.wibiyaToolbar_button_center_over{ background-position:0px -314px !important;}.wibiyaToolbar_button .fb{background-position: -55px -15px !important;}.wibiyaToolbar_button .arrow{background-position: -62px 0px !important;margin-top:3px !important;}.wibiyaToolbar_button .random{background-position: -38px -15px !important;}.wibiyaToolbar_button .fp{background-position:0px -37px !important;margin-top:3px !important;}#wibiyaToolbar_itemsContainer{width:100%;height:26px;background-color: transparent;position: relative;bottom:0px;left:0px;display: inline;}#wibiyaToolbar_center .itemLeft{height:26px;background-color: transparent;display:block;float: left;}#wibiyaToolbar_center .itemRight{height:26px;background-color: transparent;display:block;float: right;}.wibiyaToolbar_itemTbl{margin:0px;padding:0px;}.wibiyaToolbar_itemIcon{display: inline;float: left;}.wibiyaToolbar_item_normal{background-color: transparent !important;height:26px;position: relative;display: list-item;list-style-type:none;width:auto;z-index:1;margin:0px 3px !important;}.wibiyaToolbar_item_over{height:26px;position: relative;width:auto;display: list-item;list-style-type:none;margin:0px 3px !important;}.wibiyaToolbar_item_anchor:hover .wibiyaToolbar_tooltip{ visibility: visible !important;bottom:56px !important;}.wibiyaToolbar_item_anchor .TBcontainerDiv{ margin:0 3px !important;}.wibiyaToolbar_item_normal_anchor{ left:1px;position:absolute;top:0;width:96% !important;background-color:#fff !important;filter:alpha(opacity=00);-moz-opacity:0.0;-khtml-opacity:0.0;opacity:0.0;margin:0 !important;padding:0 !important;}.minMaxBtnDiv_minimize:hover .wibiyaToolbar_tooltip,.minMaxBtnDiv_maximize:hover .wibiyaToolbar_tooltip{ visibility:visible !important;}.itemLeft .wibiyaToolbar_BtnHover,.itemRight .wibiyaToolbar_BtnHover{background-color: transparent !important;position: relative;display: list-item;list-style-type:none;width:auto;z-index:1;}.wibiyaToolbar_itemImg{margin:0 3px !important;vertical-align:middle;}.wibiyaToolbar_itemText{margin-left:4px;margin-top:0 !important;margin-bottom:0 !important;margin-right:5px;display: inline;float: left;color:#ffffff;font-size:11px;font-family:arial;height:auto;position:static;width:auto;}.wibiyaToolbar_td{margin:0;padding:0;background-color: transparent;border: none;line-height:100%;}.wibiyaToolbar_menu{height:auto;background-color: transparent !important;position:absolute;bottom:27px !important;left:0px;color: inherit;display: inline;z-index: -1;}.wibiyaToolbar_bottom{bottom:27px !important;}.wibiyaToolbar_PopHeight{bottom:19px !important;}.wibiyaToolbar_search_menu{width:250px;height:auto;background-color: white !important;position:absolute;bottom:27px !important;left:0px;border: solid 1px #454545 !important;color: inherit;display: inline;z-index: -1;}.wibiyaToolbar_search_menuItem_normal{height:25px;font-size:11px;vertical-align: middle;text-align: left;color: inherit;background-color: white;overflow: hidden;}.wibiyaToolbar_search_menuItem_over{height:25px;font-size:11px;vertical-align: middle;text-align: left;color: inherit;background-color:#f1f6fc;}.wibiyaToolbar_Menu_UL{list-style: none;margin:0px;padding:0;direction: ltr;}.wibiyaToolbar_menuItem_normal{height:25px;font-size:11px;vertical-align: middle;text-align: left;color: inherit;background-color: white;overflow: hidden;margin:0;padding:0;}.wibiyaToolbar_menuItem_over{height:25px;font-size:11px;vertical-align: middle;text-align: left;color: inherit;background-color:#f1f6fc;margin:0;padding:0;}.wibiyaToolbar_menuImg{margin-top:4px !important;margin-left:10px !important;vertical-align: middle;padding:0 !important;border:none;display:inline;height:16px;}.wibiyaToolbar_menu_image{margin-top:4px !important;margin-left:10px !important;vertical-align: middle;padding:0 !important;border:none;display:inline;float: left;}.wibiyaToolbar_menuText{margin-left:6px;width:auto;height:auto;position: relative;top:4px;color:#333333;}#wibiyaPop{background-image: url(http://cdn.wibiya.com/Graphics_Toolbar/Themes/popup_background.png);background-repeat: no-repeat;position:fixed;right:30px;width:290px;height:193px;}.wibiyaToolbar_recent{background-color: transparent !important;position:absolute;bottom:27px !important;color: inherit;display: inline;z-index:1;}.wibiyaToolbar_panel{background-color: transparent !important;position:absolute;bottom:27px;border: solid 1px #454545 !important;color: inherit;display: inline;z-index:1;}.wibiyaToolbar_panel_header{width:100%;height:20px;display:block;background-color:#0f3b95 !important;border-bottom:solid 1px #454545 !important;}.wibiyaToolbar_panel_body{width:100%;display:block;background-color:#ffffff;overflow-y:auto;overflow-x: hidden;}.wibiyaToolbar_panel_title{display: inline;float: left;padding-left:5px !important;padding-top:2px !important;font-family:Arial,Verdana;font-size:12px;color:#ffffff;font-weight:bold;z-index:100;}.wibiyaToolbar_panel_close{display: inline;float: right;padding-right:5px !important;padding-top:2px !important;}.wibiyaToolbar_panel_close a{font-family:Arial,Verdana;font-size:13px;color:#ffffff;font-weight:bold;text-decoration: none;border: none;padding : none;}.wibiyaToolbar_panel_close a:hover{font-family:Arial,Verdana;font-size:13px;color:#000000;font-weight:bold;text-decoration: none;border: none;padding : none;}.wibiyaToolbar_recent_title{font-family:Arial,Verdana;font-size:13px;color:#3f6898;font-weight:bold;line-height:20px;border: none;margin:0;width:350px;z-index:100;}.wibiyaToolbar_recent_top_title{ position:relative;}.wibiyaToolbar_recent_body_inner{width:440px;overflow-y:auto;overflow-x:hidden;background-color:white !important;height:319px;}.wibiyaToolbar_recentItem_normal{background-color:#ffffff;width:433px !important;}.wibiyaToolbar_recentItem_over{background-color:#f1f6fc;width:433px !important;}.wibiyaToolbar_recentItem_selected{background-color:#e1e6ec;cursor:default;width:433px !important;}.wibiyaToolbar_recent_tags{color:#8e8e8e;font-family:Arial,Verdana;font-size:11px;font-weight: normal;margin:0;}#wibiya_TB_overlay{position:fixed;z-index:1000;top:0px;left:0px;height:100%;width:100%;}.wibiya_TB_overlayMacFFBGHack {background: url(macFFBgHack.png) repeat;}.wibiya_TB_overlayBG{background-color:#000;filter:alpha(opacity=75);-moz-opacity:0.75;opacity:0.75;}.wibiyaToolbar_ligthbox{width:100%;height:100%;background-color:#000000;opacity:0.8;padding:0px;position:fixed !important;position:absolute;padding:0px;margin:0px;z-index:1000;direction: ltr;top:0px;left:0px;}#wibiyaToolbar_window_template{position:absolute;visibility: hidden;left: -1000px;}.wibiya_btn_wrap_2{-moz-user-select: none !important;display:inline-block !important;position:relative !important;-x-system-font:none !important;border:0 none !important;color:#000000 !important;cursor:default !important;font-family:arial,sans-serif !important;font-size:11px !important;font-size-adjust:none !important;font-stretch:normal !important;font-style:normal !important;font-variant:normal !important;font-weight:normal !important;line-height:normal !important;list-style-image:none !important;list-style-position:outside !important;list-style-type:none !important;margin:0 !important;outline-color:-moz-use-text-color !important;outline-style:none !important;outline-width:medium !important;padding:0 !important;text-decoration:none !important;vertical-align:middle !important;}.wibiya_btn_wrap_1{display:inline-block !important;position:relative !important;}.wibiya_btn_wrap_3{border-color:#BBBBBB !important;border-style:solid !important;padding:0 !important;display:inline-block !important;position:relative !important;border-width:1px 0 !important;margin:0 !important;}.wibiya_btn_wrap_3:hover{border-color:black !important;}.wibiya_btn_wrap_4{display:inline-block !important;position:relative !important;border-color:#BBBBBB !important;border-style:solid !important;padding:0 !important;background:#E3E3E3 none repeat scroll 0 0 !important;border-width:0 1px !important;cursor:pointer !important;margin:0 -1px !important;cursor:pointer !important;}.wibiya_btn_wrap_4:hover{border-color:black !important;}.wibiya_btn_body{height:100% !important;position:relative !important;}.wibiya_btn_upper_Active{background:#E3E3E3 none repeat scroll 0 0 !important;border-bottom:0.2em solid #EEEEEE !important;height:50% !important;left:0 !important;overflow:hidden !important;position:absolute !important;right:0 !important;top:0 !important;cursor:pointer !important;}.wibiya_btn_upper{background:#F9F9F9 none repeat scroll 0 0 !important;border-bottom:0.2em solid #EEEEEE !important;height:50% !important;left:0 !important;overflow:hidden !important;position:absolute !important;right:0 !important;top:0 !important;}.wibiya_btn_txt{color:#000000 !important;line-height:100% !important;padding:0 3px 0 2px !important;position:relative !important;text-align:center !important;vertical-align:middle !important;white-space:nowrap !important;}.wibiya_btn_img{color:#000000 !important;line-height:100% !important;padding:1px !important;position:relative !important;text-align:center !important;vertical-align:middle !important;white-space:nowrap !important;}.wibiya_btn_img img{position:relative !important;vertical-align:middle !important;white-space:nowrap !important;}.wibiya_btn_txt img{padding-right:2px !important;position:relative !important;vertical-align:middle !important;white-space:nowrap !important;}.wibiya_main_btn_wrap {float:left !important;height:auto !important;width:auto !important;margin-left:3px !important;margin-right:1px !important;}.wibiyaToolbar_window{width:800px;height:500px;display:block;position:fixed !important;bottom:27px;z-index:10013;line-height:14px;padding:0px;margin:0px;direction: ltr;overflow: hidden;}.wibiyaToolbar_window_wiwiMenu{width:800px;height:500px;display:block;position:absolute !important;bottom:27px !important;z-index:10013;line-height:14px;padding:0px;margin:0px;direction: ltr;overflow: hidden;left:0px;}.wibiyaToolbar_wiwi_header_main{height:30px;display:block;width:100%;float:left;border:none;}.wibiyaToolbar_wiwi_header_main #wibiyaToolbar_wiwi_hl{width:9px;height:100%;display:inline;float:left;position:relative;}.wibiyaToolbar_wiwi_header_main #wibiyaToolbar_wiwi_hr{width:9px;height:100%;display:inline;float:left;position:relative;}#wibiyaToolbar_wiwi_hl .wibiya_toolbar_side_colHold,#wibiyaToolbar_wiwi_hr .wibiya_toolbar_side_colHold,#wibiyaToolbar_menu_top_left .wibiya_toolbar_side_colHold,#wibiyaToolbar_menu_top_right .wibiya_toolbar_side_colHold,#wibiyaToolbar_recent_top_left .wibiya_toolbar_side_colHold,#wibiyaToolbar_recent_top_right .wibiya_toolbar_side_colHold{ height:22px !important;left:0;position:absolute;top:8px;width:4px;}#wibiyaToolbar_wiwi_hl .wibiya_toolbar_left_gradian{ background-position:1px -110px !important;}#wibiyaToolbar_wiwi_hr .wibiya_toolbar_right_gradian{ background-position: -12px -110px !important;}.wibiyaToolbar_wiwi_header_main .wibiyaToolbar_wiwi_header{ height:30px;display:inline;float:left;width:780px;background-color:transparent;line-height:100%;border:none;padding:0 1px !important;position:relative;}.wibiyaToolbar_wiwi_header .wibiya_toolbar_middle_bg,#wibiyaToolbar_menu_top_center .wibiya_toolbar_middle_bg,#wibiyaToolbar_recent_top_center .wibiya_toolbar_middle_bg{ bottom:0;height:26px;left:0;width:100%;z-index:-2;position:absolute;}.wibiyaToolbar_wiwi_header .wibiya_toolbar_middle_gradian{ background-position:0 -140px !important;}.wibiyaToolbar_wiwi_body_main{display:block;width:100%;height:430px;float:left;}.wibiyaToolbar_wiwi_body_main #wibiyaToolbar_wiwi_bl{width:5px;height:100%;background-image: url(http://cdn.wibiya.com/Graphics_Toolbar/Themes/Round/sprite_s_v.png);background-repeat: repeat-y;background-position:0px 0px;display:inline;float:left;}.wibiyaToolbar_wiwi_body_main #wibiyaToolbar_wiwi_br{width:5px;height:100%;background-image: url(http://cdn.wibiya.com/Graphics_Toolbar/Themes/Round/sprite_s_v.png);background-repeat: repeat-y;background-position: -6px 0px;display:inline;float:right;}.wibiyaToolbar_wiwi_body_main .wibiyaToolbar_wiwi_body{width:780px;height:100%;display:inline;float:left;background-color:#ffffff !important;}.wibiyaToolbar_wiwi_placeholder_main{display:block;width:100%;height:0px;float:left;}.wibiyaToolbar_wiwi_placeholder_main #wibiyaToolbar_wiwi_pl{width:5px;height:100%;background-image: url(http://cdn.wibiya.com/Graphics_Toolbar/Themes/Round/sprite_s_v.png);background-repeat: repeat-y;background-position:0px 0px;display:inline;float:left;}.wibiyaToolbar_wiwi_placeholder_main #wibiyaToolbar_wiwi_pr{width:5px;height:100%;background-image: url(http://cdn.wibiya.com/Graphics_Toolbar/Themes/Round/sprite_s_v.png);background-repeat: repeat-y;background-position: -6px 0px;display:inline;float:right;}.wibiyaToolbar_wiwi_placeholder_main .wibiyaToolbar_wiwi_placeholder{width:780px;height:100%;display:inline;float:left;}.wibiyaToolbar_wiwi_footer_main{display:block;width:100%;height:24px;float:left;border:none;}.wibiyaToolbar_wiwi_footer_main #wibiyaToolbar_wiwi_fl{ background-image:url("http://cdn.wibiya.com/Graphics_Toolbar/toolbar_round_hard_gradient.png");background-position:1px -170px;background-repeat:no-repeat;display:inline;float:left;height:100%;width:10px;}.wibiyaToolbar_wiwi_footer_main #wibiyaToolbar_wiwi_fr{ background-image:url("http://cdn.wibiya.com/Graphics_Toolbar/toolbar_round_hard_gradient.png");background-position:-9px -170px;background-repeat:no-repeat;display:inline;float:right;height:100%;width:10px;}.wibiyaToolbar_wiwi_footer_main .wibiyaToolbar_wiwi_footer{ background-color:transparent;background-image:url("http://cdn.wibiya.com/Graphics_Toolbar/toolbar_round_hard_gradient.png");background-position:0 -194px;background-repeat:repeat-x;border:medium none;display:inline;float:left;height:100%;width:780px;}.wibiyaToolbar_wiwi_Pop,.wibiyaToolbar_wiwi_Pop:link{height:16px;background-image: url("http://cdn.wibiya.com/Graphics_Toolbar/toolbar_round_hard_gradient.png");background-repeat: no-repeat;background-position:0 -498px;display:inline;float:left;width:23px;cursor:pointer;color:#ffffff;font-size:15px;font-family: sans-serif,"lucida grande",tahoma,verdana,arial;font-weight:bold;text-decoration: none;}.wibiyaToolbar_wiwi_Pop:hover{background-position:0px -482px;color:#000000;font-size:15px;font-family: sans-serif,"lucida grande",tahoma,verdana,arial;font-weight:bold;text-decoration: none;}.wibiyaToolbar_wiwi_title,.wibiyaToolbar_menu_title,.wibiyaToolbar_panel_title{ float:left;height:30px;margin:0;font-family:"lucida grande",tahoma,verdana,arial,sans-serif;font-size:12px;font-weight:bold;color:#636461;overflow:hidden;width:70%;position:relative;z-index:100;}.wibiyaToolbar_menu_title table{ height:26px !important;margin-top:4px !important;vertical-align:middle !important;}.wibiyaToolbar_menu_title table td,.wibiyaToolbar_wiwi_title table td{ vertical-align: middle !important;background: none !important;}.wibiyaToolbar_wiwi_title table{ height:26px !important;margin-top:4px !important;vertical-align:middle !important;}.wibiyaToolbar_wiwi_title table tr{ background:none !important;background-color: transparent !important;}.wiwi_table{margin:0;padding:0;height:100%;}.wibiyaToolbar_wiwi_Mini,.wibiyaToolbar_wiwi_Mini:link{color:#ffffff;font-size:15px;font-family: sans-serif,"lucida grande",tahoma,verdana,arial;font-weight:bold;text-decoration: none;height:16px;background-position:0 -530px;background-image:url("http://cdn.wibiya.com/Graphics_Toolbar/toolbar_round_hard_gradient.png");background-repeat: no-repeat;display:inline;float:left;width:22px;cursor:pointer;}.wibiyaToolbar_wiwi_Mini:hover{background-position:0px -514px;color:#000000;font-size:15px;font-family: sans-serif,"lucida grande",tahoma,verdana,arial;font-weight:bold;text-decoration: none;}#wibiyaToolbar_menu_top,#wibiyaToolbar_recent_top{height:30px;display:block;width:100%;float:left;border:none;}#wibiyaToolbar_menu_top_left,#wibiyaToolbar_recent_top_left{width:9px;height:100%;display:inline;float:left;position:relative;}#wibiyaToolbar_menu_top_left .wibiya_toolbar_left_gradian{ background-position:1px -110px !important;}#wibiyaToolbar_recent_top_center{height:30px;display:inline;float:left;width:430px;line-height:100%;border:none;padding:0 1px !important;position:relative;}#wibiyaToolbar_menu_top_center{height:30px;display:inline;float:left;width:780px;line-height:100%;border:none;padding:0 1px !important;position:relative;}#wibiyaToolbar_menu_top_center .wibiya_toolbar_middle_gradian{ background-position:0 -140px !important;}#wibiyaToolbar_menu_top_right,#wibiyaToolbar_recent_top_right{width:9px;height:100%;display:inline;float:left;position:relative;}#wibiyaToolbar_menu_top_right .wibiya_toolbar_right_gradian{ background-position: -12px -110px !important;}#wibiyaToolbar_menu_right,#wibiyaToolbar_recent_right{width:5px;height:100%;background-image: url(http://cdn.wibiya.com/Graphics_Toolbar/Themes/Round/sprite_s_v.png);background-repeat:repeat-y;background-position:-6px 0px;}#wibiyaToolbar_menu_left,#wibiyaToolbar_recent_left{width:5px;height:100%;background-image: url(http://cdn.wibiya.com/Graphics_Toolbar/Themes/Round/sprite_s_v.png);background-repeat:repeat-y;background-position:0px 0px;}.wibiyaToolbar_menu_body,.wibiyaToolbar_recent_body{width:170px;height:100%;float:left;background-color:white;}.minMaxBtnDiv_maximize,.minMaxBtnDiv_minimize{ cursor:pointer;height:26px;margin:0 2px !important;}.wibiya_toolbar_maximizeBtnDark,.wibiya_toolbar_maximizeBtnLight{background-image:url("http://cdn.wibiya.com/Graphics_Toolbar/toolbar_round_hard_gradient.png");background-position:0 -395px;cursor:pointer;height:11px;width:11px;margin:0px 3px !important;}.wibiya_toolbar_maximizeBtnLight{ background-position:0 -373px;}.wibiya_toolbar_minmizeBtnDark,.wibiya_toolbar_minmizeBtnLight{ background-image:url("http://cdn.wibiya.com/Graphics_Toolbar/toolbar_round_hard_gradient.png");background-position:0 -439px;cursor:pointer;height:11px;margin:0 0 0 2px !important;width:11px;float:left;}.wibiya_toolbar_minmizeBtnLight{ background-position:0 -417px;}.wibiya_toolbar_minimized_holder{height:100%;margin-right:10px;position:relative;width:auto;z-index:99999;}.wibiya_toolbar_minimized_holder_middle{float:left;height:100%;position:relative;width:auto;}.wibiya_appOver{ position:absolute;top:0px;left:0px;width:0px;height:0px;}.itemLeft:hover .wibiya_appOver,.itemRight:hover .wibiya_appOver{ background-color:#0f3b95 !important;width:100%;height:54px;filter:alpha(opacity=40);-moz-opacity:0.4;-khtml-opacity:0.4;opacity:0.4;background-position:0 -59px;z-index:-99;}.wibiyaHtmlContainer{ position:relative;}.wibiya_text_bold{ font-weight:bold !important;}.wibiya_text_underline{ text-decoration: underline !important;}.wibiya_text_italics{ font-style: italic !important;}[appid="70"],[appid="54"]{text-decoration:none !important;}.twitter-bubble{ display:none;}.twitter-bubble[style*="visible"]{display:block !important;}.WibiyaToolbarIcon_4_searchbox_normal{background:url(http://cdn.wibiya.com/Toolbars/dir_0010/Toolbar_10426/Sprite/cssSprite1296037726.png) -0px -0px no-repeat;width:118px;height:22px;}.WibiyaToolbarIcon_4_searchbox_wide{background:url(http://cdn.wibiya.com/Toolbars/dir_0010/Toolbar_10426/Sprite/cssSprite1296037726.png) -0px -22px no-repeat;width:220px;height:22px;}.WibiyaToolbarIcon_4_arrow_up{background:url(http://cdn.wibiya.com/Toolbars/dir_0010/Toolbar_10426/Sprite/cssSprite1296037726.png) -0px -44px no-repeat;width:10px;height:8px;}.WibiyaToolbarIcon_72794{background:url(http://cdn.wibiya.com/Toolbars/dir_0010/Toolbar_10426/Sprite/cssSprite1296037726.png) -0px -52px no-repeat;width:74px;height:19px;}.WibiyaToolbarIcon_72795{background:url(http://cdn.wibiya.com/Toolbars/dir_0010/Toolbar_10426/Sprite/cssSprite1296037726.png) -0px -71px no-repeat;width:18px;height:19px;}.Img_72795_0{background:url(http://cdn.wibiya.com/Toolbars/dir_0010/Toolbar_10426/Sprite/cssSprite1296037726.png) -0px -90px no-repeat;width:18px;height:13px;}.Img_72795_1{background:url(http://cdn.wibiya.com/Toolbars/dir_0010/Toolbar_10426/Sprite/cssSprite1296037726.png) -0px -103px no-repeat;width:18px;height:13px;}.Img_72795_2{background:url(http://cdn.wibiya.com/Toolbars/dir_0010/Toolbar_10426/Sprite/cssSprite1296037726.png) -0px -116px no-repeat;width:18px;height:13px;}.Img_72795_3{background:url(http://cdn.wibiya.com/Toolbars/dir_0010/Toolbar_10426/Sprite/cssSprite1296037726.png) -0px -129px no-repeat;width:18px;height:13px;}.Img_72795_4{background:url(http://cdn.wibiya.com/Toolbars/dir_0010/Toolbar_10426/Sprite/cssSprite1296037726.png) -0px -142px no-repeat;width:18px;height:13px;}.Img_72795_5{background:url(http://cdn.wibiya.com/Toolbars/dir_0010/Toolbar_10426/Sprite/cssSprite1296037726.png) -0px -155px no-repeat;width:18px;height:13px;}.Img_72795_6{background:url(http://cdn.wibiya.com/Toolbars/dir_0010/Toolbar_10426/Sprite/cssSprite1296037726.png) -0px -168px no-repeat;width:18px;height:13px;}.Img_72795_7{background:url(http://cdn.wibiya.com/Toolbars/dir_0010/Toolbar_10426/Sprite/cssSprite1296037726.png) -0px -181px no-repeat;width:18px;height:13px;}.Img_72795_8{background:url(http://cdn.wibiya.com/Toolbars/dir_0010/Toolbar_10426/Sprite/cssSprite1296037726.png) -0px -194px no-repeat;width:18px;height:13px;}.Img_72795_9{background:url(http://cdn.wibiya.com/Toolbars/dir_0010/Toolbar_10426/Sprite/cssSprite1296037726.png) -0px -207px no-repeat;width:18px;height:13px;}.Img_72795_10{background:url(http://cdn.wibiya.com/Toolbars/dir_0010/Toolbar_10426/Sprite/cssSprite1296037726.png) -0px -220px no-repeat;width:18px;height:13px;}.WibiyaToolbarIcon_72796{background:url(http://cdn.wibiya.com/Toolbars/dir_0010/Toolbar_10426/Sprite/cssSprite1296037726.png) -0px -233px no-repeat;width:18px;height:19px;}.WibiyaToolbarIcon_72797{background:url(http://cdn.wibiya.com/Toolbars/dir_0010/Toolbar_10426/Sprite/cssSprite1296037726.png) -0px -252px no-repeat;width:16px;height:16px;}.WibiyaToolbarIcon_72798{background:url(http://cdn.wibiya.com/Toolbars/dir_0010/Toolbar_10426/Sprite/cssSprite1296037726.png) -0px -268px no-repeat;width:27px;height:19px;}.WibiyaToolbarIcon_72799{background:url(http://cdn.wibiya.com/Toolbars/dir_0010/Toolbar_10426/Sprite/cssSprite1296037726.png) -0px -287px no-repeat;width:65px;height:19px;}.WibiyaToolbarIcon_72800{background:url(http://cdn.wibiya.com/Toolbars/dir_0010/Toolbar_10426/Sprite/cssSprite1296037726.png) -0px -306px no-repeat;width:17px;height:19px;}.Img_72800_0{background:url(http://cdn.wibiya.com/Toolbars/dir_0010/Toolbar_10426/Sprite/cssSprite1296037726.png) -0px -325px no-repeat;width:16px;height:16px;}.Img_72800_1{background:url(http://cdn.wibiya.com/Toolbars/dir_0010/Toolbar_10426/Sprite/cssSprite1296037726.png) -0px -341px no-repeat;width:18px;height:18px;}.Img_72800_2{background:url(http://cdn.wibiya.com/Toolbars/dir_0010/Toolbar_10426/Sprite/cssSprite1296037726.png) -0px -359px no-repeat;width:18px;height:18px;}.Img_72800_3{background:url(http://cdn.wibiya.com/Toolbars/dir_0010/Toolbar_10426/Sprite/cssSprite1296037726.png) -0px -377px no-repeat;width:18px;height:18px;}.Img_72800_4{background:url(http://cdn.wibiya.com/Toolbars/dir_0010/Toolbar_10426/Sprite/cssSprite1296037726.png) -0px -395px no-repeat;width:18px;height:18px;}.Img_72800_5{background:url(http://cdn.wibiya.com/Toolbars/dir_0010/Toolbar_10426/Sprite/cssSprite1296037726.png) -0px -413px no-repeat;width:18px;height:18px;}.Img_72800_6{background:url(http://cdn.wibiya.com/Toolbars/dir_0010/Toolbar_10426/Sprite/cssSprite1296037726.png) -0px -431px no-repeat;width:18px;height:18px;}.Img_72800_7{background:url(http://cdn.wibiya.com/Toolbars/dir_0010/Toolbar_10426/Sprite/cssSprite1296037726.png) -0px -449px no-repeat;width:18px;height:18px;}.Img_72800_8{background:url(http://cdn.wibiya.com/Toolbars/dir_0010/Toolbar_10426/Sprite/cssSprite1296037726.png) -0px -467px no-repeat;width:18px;height:18px;}.Img_72800_9{background:url(http://cdn.wibiya.com/Toolbars/dir_0010/Toolbar_10426/Sprite/cssSprite1296037726.png) -0px -485px no-repeat;width:18px;height:18px;}.Img_72800_10{background:url(http://cdn.wibiya.com/Toolbars/dir_0010/Toolbar_10426/Sprite/cssSprite1296037726.png) -0px -503px no-repeat;width:18px;height:18px;}.Img_72800_11{background:url(http://cdn.wibiya.com/Toolbars/dir_0010/Toolbar_10426/Sprite/cssSprite1296037726.png) -0px -521px no-repeat;width:18px;height:18px;}.WibiyaToolbarIcon_72801{background:url(http://cdn.wibiya.com/Toolbars/dir_0010/Toolbar_10426/Sprite/cssSprite1296037726.png) -0px -539px no-repeat;width:16px;height:19px;}.wibiyaToolbar_search_container_wide{ width:262px !important ;position: relative;height:26px;top:0px;left:0px;}.wibiyaToolbar_search_container_wide_NoProv{ width:222px !important;position: relative;height:26px;top:0px;left:0px;}.wibiyaToolbar_search_textbox_button_wide{left:198px !important;width:20px;height:18px;position:absolute;top:1px;background-color: transparent;}.wibiyaToolbar_search_textbox_input_wide{width:200px !important;border:0 none transparent;background-color: transparent;font-size:13px;font-family:Arial,Verdana;margin:2px 2px 4px !important;position:absolute;left:1px;top:0px;padding:0;}.wibiyaToolbar_search_container{position: relative;width:160px;height:26px;top:0px;left:0px;}.wibiyaToolbar_search_container_short{position: relative;width:120px;height:26px;top:0px;left:0px;}.wibiyaToolbar_search_providers_back{position:absolute;top:2px;left:0px;width:32px;height:22px;}.wibiyaToolbar_search_providers_normal{background-color:#a0a0a0 !important;}.wibiyaToolbar_search_providers_over{background-color:#555555 !important;}.wibiyaToolbar_search_providers{position:absolute;top:1px;left:1px;width:30px;height:20px;background-color: white !important;}.wibiyaToolbar_search_providers_icon{border: none;position:absolute;top:2px;left:1px;width:16px;height:16px;}.wibiyaToolbar_search_providers_icon img{padding:0;margin:0;border:none;}.wibiyaToolbar_search_providers_arrow{border: none;position:absolute;top:6px;left:19px;}.wibiyaToolbar_search_textbox_back{position:absolute;top:2px;left:34px;height:22px;}.wibiyaToolbar_search_textbox_back_left{position:absolute;top:2px;height:22px;}.wibiyaToolbar_search_textbox_input{border:0 none transparent;background-color: transparent;font-size:13px;font-family:Arial,Verdana;margin:2px 2px 4px !important;width:95px;position:absolute;left:1px;top:0px;padding:0;}.wibiyaToolbar_searchbox_default{color:#777777;font-style:italic;}.wibiyaToolbar_searchbox_on{color:#333333;font-style:normal;}.wibiyaToolbar_search_textbox_button{width:20px;height:18px;position:absolute;left:95px;top:1px;background-color: transparent;}.wibiyaToolbar_SearchmenuItem_normal{height:25px;font-size:11px;vertical-align: middle;text-align: left;color: inherit;background-color: white;overflow: hidden;margin:0;padding:0;}.wibiyaToolbar_SearchmenuItem_over{height:25px;font-size:11px;vertical-align: middle;text-align: left;color: inherit;background-color:#f1f6fc;margin:0;padding:0;}</style>');


wibiyaToolbar.start=function(){var _body=jQuery("body");_body.append(wibiyaToolbarMinimizedDiv);_body.append(wibiyaToolbarTempWiwiDiv);_body.append(wibiyaToolbarDiv);jQuery(".wbadge").each(function(){jQuery(this).click(function(){WibiyaAppId=jQuery(this).attr("AppType");wibiyaToolbar.framework.badgeHandler(WibiyaAppId);return false;}).hand();});wibiyaToolbar.framework.delayAction("wibiyaToolbar.framework.prepare_width()",3000);wibiyaToolbar.framework.delayAction(function(){jQuery(".itemLeft").find(".TBcontainerDiv[show='no']").parent().filter(".wibiyaToolbar_BtnHover").removeClass("wibiyaToolbar_BtnHover").addClass("wibiyaToolbar_BtnHoverOff");},3100);jQuery(window).resize(function(){wibiyaToolbar.framework.prepare_width();});wibiyaToolbar.framework.delayAction("wibiyaToolbar.framework.hide_devider()",700);};jQuery.fn.extend({everyTime:function(interval,label,fn,times,belay){return this.each(function(){jQuery.timer.add(this,interval,label,fn,times,belay);});},oneTime:function(interval,label,fn){return this.each(function(){jQuery.timer.add(this,interval,label,fn,1);});},stopTime:function(label,fn){return this.each(function(){jQuery.timer.remove(this,label,fn);});}});jQuery.event.special;jQuery.extend({timer:{global:[],guid:1,dataKey:"jQuery.timer",regex:/^([0-9]+(?:\.[0-9]*)?)\s*(.*s)?$/,powers:{"ms":1,"cs":10,"ds":100,"s":1000,"das":10000,"hs":100000,"ks":1000000},timeParse:function(value){if(value==undefined||value==null){return null;}
var result=this.regex.exec(jQuery.trim(value.toString()));if(result[2]){var num=parseFloat(result[1]);var mult=this.powers[result[2]]||1;return num*mult;}else{return value;}},add:function(element,interval,label,fn,times,belay){var counter=0;if(jQuery.isFunction(label)){if(!times)
times=fn;fn=label;label=interval;}
interval=jQuery.timer.timeParse(interval);if(typeof interval!="number"||isNaN(interval)||interval<=0){return;}
if(times&&times.constructor!=Number){belay=!!times;times=0;}
times=times||0;belay=belay||false;var timers=jQuery.data(element,this.dataKey)||jQuery.data(element,this.dataKey,{});if(!timers[label]){timers[label]={};}
fn.timerID=fn.timerID||this.guid++;var handler=function(){if(belay&&this.inProgress){return;}
this.inProgress=true;if((++counter>times&&times!==0)||fn.call(element,counter)===false){jQuery.timer.remove(element,label,fn);}
this.inProgress=false;};handler.timerID=fn.timerID;if(!timers[label][fn.timerID]){timers[label][fn.timerID]=window.setInterval(handler,interval);}
this.global.push(element);},remove:function(element,label,fn){var timers=jQuery.data(element,this.dataKey),ret;if(timers){if(!label){for(label in timers){this.remove(element,label,fn);}}else if(timers[label]){if(fn){if(fn.timerID){window.clearInterval(timers[label][fn.timerID]);delete timers[label][fn.timerID];}}else{for(var fn in timers[label]){window.clearInterval(timers[label][fn]);delete timers[label][fn];}}
for(ret in timers[label])break;if(!ret){ret=null;delete timers[label];}}
for(ret in timers)break;if(!ret)
jQuery.removeData(element,this.dataKey);}}}});jQuery.cookie=function(name,value,options){if(typeof value!="undefined"){options=options||{};if(value===null){value="";options.expires=-1;}
var expires="";if(options.expires&&(typeof options.expires=="number"||options.expires.toUTCString)){var date;if(typeof options.expires=="number"){date=new Date();date.setTime(date.getTime()+(options.expires*24*60*60*1000));}else{date=options.expires;}
expires="; expires="+date.toUTCString();}
var path=options.path?"; path="+(options.path):"";var domain=options.domain?"; domain="+(options.domain):"";var secure=options.secure?"; secure":"";document.cookie=[name,"=",encodeURIComponent(value),expires,path,domain,secure].join("");}else{var cookieValue=null;if(document.cookie&&document.cookie!=""){var cookies=document.cookie.split(";");for(var i=0;i<cookies.length;i++){var cookie=jQuery.trim(cookies[i]);if(cookie.substring(0,name.length+1)==(name+"=")){cookieValue=decodeURIComponent(cookie.substring(name.length+1));break;}}}
return cookieValue;}};if(wibiyaToolbar.Data.TBStyleXml.position.align=="1"&&wibiyaToolbar.Data.TBStyleXml.size.Wtype=="2"){jQuery(window).bind("resize",function(){if(wibiyaToolbar.framework.getViewPort("w")<parseInt(wibiyaToolbar.Data.TBStyleXml.size.width)+25){jQuery(".wibiya_toolbar_holder").attr("style","width: 98% !important;");jQuery(".wibiya_toolbar_holder_middle").attr("style","width: 100% !important;");jQuery(".wibiya_toolbar_sideLeft").attr("style","position:absolute; top:0px; left:0px;");jQuery(".wibiya_toolbar_sideRight").attr("style","position:absolute; top:0px;");}else{jQuery(".wibiya_toolbar_holder").attr("style","");jQuery(".wibiya_toolbar_holder_middle").attr("style","");jQuery(".wibiya_toolbar_sideLeft").attr("style","");jQuery(".wibiya_toolbar_sideRight").attr("style","");}});}
if(jQuery("#xgDock").size()==1){var zindex=parseInt(jQuery("#xgDock").css('z-index'))-1;jQuery("head").append("<style>#wibiyaToolbar {bottom:22px!important; z-index:"+zindex+";} #wibiyaToolbarNewMinimized{z-index:"+zindex+";} .wibiya_toolbar_wrapper{bottom: 0px !important;} </style>");}
var regexS="[\\?&]WibarDisable=([^&#]*)";var regex=new RegExp(regexS);var results=regex.exec(window.location.href);wibiyaToolbar.start();RunStarterJs();var wstatimg=new Image(0,0);wstatimg.src="http://wstat.wibiya.com/l.jpg?t="+wibiyaToolbar.id+"&r="+document.referrer;jQuery("body").append('<iframe style="border: medium none; position: absolute; display: block;" scrolling="no" height="0" frameborder="0" width="0" src="http://cdn.wibiya.com/load.html"></iframe>');jQuery("#statFrame").attr("src","http://statistics.wibiya.com/SetToolbarLoad.php?toolbarId="+wibiyaToolbar.id+"&referer="+document.referrer);wibiyaToolbar.framework.RunProfile();