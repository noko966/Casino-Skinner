function createCss(c){
    
let css = `
/*${c.fileName} skinning*/
body{
  background: ${c.bodyG};
  color: ${c.bodyTxt};
}
/*new header*/
.tl_head_promos a {
    color: ${c.headerTxt};;
    height: 32px;
    line-height: 32px;
    border: none;
    border-radius: 0;
    padding: 0 9px;
    font-size:14px;
}
.tl_head_promos a:hover {
    color: ${c.accentBg};
}
.live_tv_block {
    height: 34px;
    margin: 0 3vw;
}
.live_tv_block img {
    max-width: 114px;
}

/*header buttons*/
.tl_logged_out .tl_register_button,
.tl_logged_out .tl_login_button {
    font-size: 12px;
    font-weight: 500;
    border-radius: 2px;
    padding: 0 16px;
    min-width: initial;
    margin: 0 4px;
}

.tl_logged_out .tl_register_button {
    background: ${c.accentG};
    color: ${c.accentTxt};
}
.tl_logged_out .tl_register_button:hover {
  background: ${c.accentBg2};
  color: ${c.accentTxt};
}

.tl_logged_out .tl_login_button {
  background: ${c.headerBg2};
  color: ${c.headerTxt};
}
.tl_logged_out .tl_login_button:hover,
.tl_acc_lang:hover{
  background: ${c.headerBg};
  color: ${c.headerTxt};
}
.tl_acc_lang {
    height: 36px;
    background: ${c.headerBg2};
    color: ${c.headerTxt};
    padding: 0 8px;
}
.tl_acc_lang a{
  color: ${c.headerTxt};
}
.tl_login_container .tl_acc_lang a {
    padding: 0;
    font-size: 14px;
}
.tl_acc_lang .links_container {
    background-color: ${c.headerBg2};
}
.tl_acc_lang .links_container a {
    background-color: ${c.headerBg2};
    border-bottom: 1px solid ${c.headerBg};
}
.tl_acc_lang .links_container a:hover {
    background-color: ${c.headerBg};
}
/*header bottom row*/
.tl_header_bot_row {
    background-color: ${c.headerBg2};
    color:${c.headerTxt};
}
.tl_time{
    color:${c.headerTxt};
    font-size:12px;
}
/*main navigation*/
.tl_main_nav > a,
.tl_main_nav .navItem,
.tl_main_nav .promoted > a{
    color: ${c.headerTxt};
    font-size: 16px;
}
.header_nav__dropdown {
    background-color: ${c.headerBg2};
    color: ${c.headerTxt};
}
.tl_main_nav .header_nav__dropdown a, 
.header_nav__dropdown a {
  background-color: ${c.headerBg2};
  color: ${c.headerTxt};
  border-bottom: 1px solid ${c.headerBg};
}
.tl_main_nav .header_nav__dropdown a:hover,
.header_nav__dropdown a:hover {
  background-color: ${c.headerBg};
  color: ${c.headerTxt};
}
.New:after, .promoted:after {
    position: absolute;
    top: 0;
    right: 0;
    content: 'new';
    width: 23px;
    height: 15px;
    line-height: 15px;
    background: none;
    background-color: ${c.accentG};
    color: ${c.accentTxt};
    font-size: 10px;
    text-align:center;
    border-radius: 2px; 
    font-weight:500;
    text-transform:capitalize;
}


/*banner controls*/
.carousel-indicators > div{
  background-color: ${c.bodyBg};
}
.carousel-indicators > .active{
  background-color: ${c.accentBg};
}


/*footer*/
.tl_footer_BG{
  background: ${c.footerG};
  color: ${c.footerTxt};
}
.tl_footer_links_row h1, .tl_footer_links_row h2, .footer_links_heading, .tl_footer_links_row span{
  color: ${c.accentBg};
}
.tl_footer_links_row a{
  color: ${c.footerTxt};
}
.tl_footer_links_row a:hover{
  color: ${c.accentBg};
}

/*top casino games*/
.block_title{
  background: ${c.headingG};
  color: ${c.headingTxt};
  border-bottom: 2px solid ${c.accentBg};
  box-shadow: 0 2px 2px 2px rgba(0, 0, 0, .2);
}




/*new design*/

/*main styles*/
body{
    background-color:${c.bodyBg2};
    color:${c.bodyTxt};
    font-size:13px;
}
.casino_backgr__slider_item::after { 
    box-shadow: 0px 40px 90px 120px ${c.bodyBg2}; 
}
.tl_logo a,
.active .header__left__logo {

}

@media screen and (max-width: 1500px){
    .tl_logo a {

    }
}
.tl_logo_space_imitator{
    flex-shrink: 0;
} 
.tl_btn,
a.tl_btn,
.tl_acc_lang {
    background-color: ${c.primaryBg3};
    color: ${c.primaryTxt2};
    border-radius: ${c.borderRadius}px;
    ${c.leafView ? leafViewCss : ''}
}

.tl_acc_lang > a {
    color: ${c.primaryTxt2};
}
.tl_acc_lang:hover > a {
    color: ${c.primaryTxt2};
}

.tl_btn:hover,
a.tl_btn:hover,
.tl_acc_lang:hover {
    background-color: ${c.primaryBg2Hov};
    color: ${c.primaryTxt2};
}
.btnSec:hover, .btnSec,
.reg_btn,
.reg_btn:hover,
.changepass_btn,
.changepass_btn:hover,
.forgot_btn:hover,
.forgot_btn,
.tl_btn-accent,
a.tl_btn-accent,
.add_game_popup .moregame,
.tl_gh .tl_search_button {
    background: ${c.accentG};
    color: ${c.accentTxt};
}
.tl_btn-accent:hover,
a.tl_btn-accent:hover,
.add_game_popup .moregame:hover,
.tl_gh .tl_search_button:hover {
    background: ${c.accent2};
    color: ${c.accentTxt};
}
/*dropdowns*/
.tl_dropdown_style,
a.tl_dropdown_style {
    background-color: ${c.bodyBg};
    color: ${c.bodyTxt};
    border-bottom: 1px solid;
    border-color: ${c.bodyBg2};
}
.tl_dropdown_style:hover,
a.tl_dropdown_style:hover {
    background-color: ${c.bodyBg2Hov};
    color: ${c.bodyTxt};
}
/*header*/
.tl_acc_lang {
    margin: 0 4px;
}
.tl_header_top_row {
    background: ${c.headerG};
    color: ${c.headerTxt};
}
.tl_time {
    color:${c.headerTxt2};
}
.tl_header_bot_row {
    padding-left: 16px;
    padding-right: 16px;
}
a.tl_simple_link-accent {
    background-color: ${c.primaryBg3};
    height: 35px;
    line-height:35px;
    padding: 0 8px;
    color: ${c.accentBg};
    border-radius: ${c.borderRadius}px;
}
a.tl_simple_link-accent:hover{
    background-color: ${c.primaryBg3Hov};
    color: ${c.accentBg};
}
/*links*/
.tl_simple_link {
    transition: color 0.314s;
    color: ${c.primaryTxt};
}
.tl_simple_link:hover {
    color: ${c.accentBg};
}
/*badge*/
.tl_badge{
    position:absolute;
    top:0;
    right:0;
    background-color:${c.accentBg};
    color:${c.accentTxt};
    width:24px;
    height:24px;
    line-height:24px;
    text-align:center;
    border-radius:50%;
    font-size:11px;
    transform:translate(-50%, -50%);
}
.tl_badge:empty{
    display:none;
}
/*header bottom row*/
.tl_header_bot_row {
    background-color: ${c.primaryBg2};
    color: ${c.primaryTxt};
}
/*promoted routine*/
.tl_promoted {
    position: relative;
}
.tl_promoted:after,
.New:after,
.promoted:after,
.tl_game_tab_item.New:after {
    position: absolute;
    top: 0;
    right: 0;
    content: 'new';
    width: 20px;
    height: 14px;
    display: block;
    border-radius: 4px;
    text-align: center;
    line-height: 14px;
    font-size: 8px;
    font-weight: 500;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
    text-transform: uppercase;
    background: none;
}
.tl_promoted:after,
.New:after,
.promoted:after,
.tl_game_tab_item.New:after {
    background-color:${c.accentBg};
    color:${c.accentTxt};
}

.tl_header_navigation{
    display: flex;
    align-items: center;
    max-width: 1574px;
    margin: auto;
    width: 100%;
}
.tl_main_nav_item{
    height: 56px;
    padding:0 8px;
    display:flex;
    align-items:center;
    text-transform:uppercase;
    font-size: 16px;
    transition: all 0.314s;
    white-space:nowrap;
    color: ${c.primaryTxt};
    background-color: transparent;
    border: none;
}
.tl_main_nav_item:hover,
.tl_main_nav_item-active {
    color: ${c.accentBg};
}

/*main nav*/
.tl_landing_nav_big_wrapper{
    display:flex;
    margin-left:-4px;
    margin-right:-4px;
}
.tl_landing_nav_big {
    height: 120px;
    background-color: ${c.primaryBgTransparent};
    color: ${c.primaryTxt};
    position: relative;
    border-radius:${c.borderRadius * 4}px;
    flex-grow: 1;
    flex-basis: 260px;
    min-width: 100px;
    margin:4px;
    display:flex;
    justify-content:center;
    flex-direction:column;
    align-items:center;
    padding: 8px;
    ${c.leafView ? leafViewCss : ''} 
}
.tl_landing_nav_big > img{
    width:50px;
    height:50px;
}

.tl_landing_nav_big > p{
    text-align:center;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
    text-transform:uppercase;
    font-size:1.2em;
}
/*top winners*/
.top_winners__game_block{
    background-color: ${c.primaryBgTransparent};
    color: ${c.primaryTxt};
}
.top_winners__value,
.top_winners__date  {
    color: ${c.accentBg};
}
.me_badge{
    background-color: ${c.accentBg};
    color: ${c.accentTxt} !important;
}
.top_winners__game{
    border-color:${c.bodyBg2};
}
/*banner navigation*/
.top_winners__slider_number,
.cas_nav_prev,
.cas_nav_next {
    background-color: ${c.primaryBgTransparent};
    color: ${c.primaryTxt};
    margin:4px;
}
.cas_nav_prev:hover,
.cas_nav_next:hover {
    color: ${c.accentBg};
}

/*footer*/
.tl_footer{
    background:${c.footerG};
    color:${c.footerTxt};
    overflow:hidden;
    padding-top: 64px;
    z-index: 10;
    position: relative;
}
.footer_links_heading{
    margin-bottom: 4px;
    color:${c.accentBg};
}

.tl_footer_links_heading {
    font-size: 1.2em;
    display: block;
    margin-bottom:4px;
    color:${c.accentBg};
}
.tl_footer_link {
    display: block;
    margin-bottom: 4px;
    transition: all 0.314s;
    color:${c.bodyTxt2};
}
.tl_footer_text {
    line-height:1.3;
    color:${c.bodyTxt2};
}

.tl_footer_link:hover {
    color: ${c.bodyTxt};
}

.tl_footer_copy {
    color: ${c.accentBg};
}
/*popups*/
.tl_popup_header {
    background-color: ${c.popupHeaderBg};
    color: ${c.popupHeaderTxt};
    border-radius: ${c.borderRadius}px ${c.borderRadius}px 0 0;
}
.tl_head_text,
.tl_head_close {
    color: ${c.popupHeaderTxt};
}
.tl_my_acc_cont .tl_head_close:hover,
.tl_my_acc_cont .tl_head_close {
    color: ${c.primaryTxt2};
}
.tl_popup_content {
    background-color: ${c.bodyBg};
    color: ${c.bodyTxt2};
    border-radius: 0 0 ${c.borderRadius}px ${c.borderRadius}px;
}
/*widgets*/
.tl_widget_heading,
.name_vidget {
    background-color: ${c.primaryBgTransparent};
    color: ${c.primaryTxt};
    border-radius:${c.borderRadius * 4}px;
    padding:0 16px;
    height:35px;
    line-height:35px;
    ${c.leafView ? leafViewCss : ''}

}
/*banners*/
.tl_landing_banner {
    margin: 4px;
    border-radius: ${c.borderRadius * 4}px;
    overflow: hidden;
    display: block;
    flex-grow: 1;
    min-width: 100px;
    box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.3);
    ${c.leafView ? leafViewCss : ''}
}
.tl_landing_banner img{
    width:100%;
    height:auto;
}
.tl_games_slider_game {
    outline: 0;
}
.top_cas_games__slider img{
    border-radius: 0px;
}
.tl_games_slider_game > div {
    box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.3);
    border-radius: ${c.borderRadius * 4}px;
    overflow: hidden;
    ${c.leafView ? leafViewCss : ''}
}

/*my account*/
.tl_date_picker td .ui-state-hover,
.tl_date_picker td .ui-state-active {
    background: ${c.accentBg};
}
.tl_my_acc_cont_content{
    background-color:${c.bodyBg};
    color:${c.bodyTxt2};
}

.tl_messige {
    width: 100%;
    display: block;
    margin-bottom: 4px;
    margin-top: 4px;
}
.tl_messige-success{
    color:${c.accentBg};
}
.tl_messige-fail {
    color: #f00;
}
.tl_btn-min-width {
    min-width: 120px;
}

a.tl_my_acc_nav_item, 
a.tl_my_acc_nav_itemsp { 
    background-color:  ${c.primaryBg3}; 
    border-bottom: 1px solid ${c.bodyBg}; 
} 
.tl_my_acc_cont_nav { 
    background-color:  ${c.primaryBg3};     
}

/*casino games*/
.game__link_real{
    background-color:${c.accentBg};
    color:${c.accentTxt};
}
.game__link_real:hover{
    background-color:${c.accent2};
    color:${c.accentTxt};
}

.game__link_demo {
    background-color: ${c.primaryBg3};
    color: ${c.primaryTxt};
}
.game__link_demo:hover {
    background-color: ${c.primaryBg3Hov};
    color: ${c.primaryTxt};
}

/*??????*/
.tl_game_tabs_menu .tl_game_tab_item {
    color: ${c.bodyTxt};
}

/*games filter*/
.games_filter_content {
    background-color: ${c.bodyBg};
    color: ${c.bodyTxt2};
}
.filter_search{
    background-color: ${c.primaryBg3};
    color: ${c.primaryTxt2};
}
.search__input:-webkit-autofill,
.search__input:-webkit-autofill:hover,
.search__input:-webkit-autofill:focus,
.search__input:-webkit-autofill:active { 
    -webkit-box-shadow: inset 0 0 0 50px ${c.bodyBg2} !important;  
}
.filter_search_content {
    color: ${c.primaryTxt};
}
.games_filter_element {
    background-color: ${c.primaryBg3};
    color: ${c.primaryTxt2};
}
.games_filter_element:hover,
.games_filter_element.active {
    background-color: ${c.accentBg};
    color: ${c.accentTxt};
}
.games_filter_reset {
    background-color: ${c.primaryBg3};
    color: ${c.primaryTxt2};
}
.games_filter_reset:hover {
    background-color: ${c.primaryBg3Hov};
    color: ${c.primaryTxt2};
}
.games_filter_show {
    background-color: ${c.accentBg};
    color: ${c.accentTxt};
}
.games_filter_show:hover {
    background-color: ${c.accent2};
    color: ${c.accentTxt};
}

/*game view*/
.game__view__header {
    background-color: ${c.primaryBgTransparent};
    color: ${c.primaryTxt};
}
.header__left__button{
    color:${c.primaryTxt};
}
.game__buttons span:hover .likescount,
.game__buttons span:hover {
    color: ${c.accentBg};
}
.add__games_popup,
.add__games_popup .tl_games_container .tl_game_tabs_container {
    background-color: ${c.bodyBg} !important;
    color: ${c.bodyTxt} !important;
}
.casino_nav__providers .tl_tab_item {
    border-radius: 0;
    background-color: ${c.bodyBg};
    color: ${c.bodyTxt};
}
.casino_nav__providers .tl_tab_item.active {
    background-color: ${c.accentBg};
    color: ${c.accentTxt};
}
.add__games_popup .tl_game_tabs_menu .tl_game_tab_item {
    color: ${c.bodyTxt};
}
.add__games_popup .tl_game_tabs_menu .tl_game_tab_item.active {
    color: ${c.accentBg};
}
.add__games_popup .search__block {
    background-color: ${c.bodyBg};
    color: ${c.bodyTxt};
}
.add_game_popup .search__input {
    background-color: ${c.bodyBg};
    color: ${c.bodyTxt};
    box-shadow: none !important;
}
.add_game_popup .ui-dialog-titlebar {
    background-color: ${c.popupHeaderBg} !important;
    color: ${c.popupHeaderTxt} !important;
    border: 0 !important;
}
.ui-widget-content {
    background-color: ${c.bodyBg} !important;
    color: ${c.bodyTxt} !important;
    border-radius: ${c.borderRadius}px;
}
.ui-dialog .ui-dialog-titlebar-close {
    position: absolute;
    right: 8px;
    top: 50%;
    transform: translateY(-50%);
    width: 24px;
    height: 24px;
    margin: 0;
    padding: 0;
    background: transparent;
    color: currentColor;
    border: 0;
    cursor:pointer;
}
.ui-dialog .ui-dialog-titlebar-close:before {
    content: '\\041A';
    font-family: ProductIconsFont;
}
#bannersCont.casino__top_banner {
    min-height: 60vh;
    max-height: 100%;
    overflow: hidden;
    min-width: 1024px;
    height: auto;
    position: absolute;
    z-index: 1;
}
.casino__top_banner:after{
    content: '';
    position:absolute;
    left:0;
    bottom:0;
    display:block;
    width: 100%;
    height: 100px;
    background: linear-gradient(180deg, rgba(0,0,0,0) 0%, ${c.bodyBg2} 100%);
}
/*promotions*/
.tl_news, .tl_news_single, .tl_promotions{
    background-color: ${c.bodyBg2};
    color: ${c.bodyTxt};
}
.tl_prom_filters{
    background-color: ${c.primaryBg3};
    color: ${c.primaryTxt};
}
.tl_prom_filters:hover{
    color: ${c.accentTxt};
}
.tl_prom_filters:after{
    background-color: ${c.accentBg};
}
.tl_promo_news_name,
.tl_promo_news_hover{
    border-color: ${c.accentBg};
}
.tl_promo_news_button{
    background-color: ${c.accentBg};
    color: ${c.accentTxt};
}
.promo_clicked {
    background-color: ${c.accentBg} !important;
}
.tl_BG { 
    background-color: ${c.headerBg}; 
}
/*inputs*/
.tl_input_popup_reg,
.tl_sel_custom_popup_reg_selected,
.tl_input_popup_reg_s{
    background-color: ${c.bodyBg2};
    color: ${c.bodyTxt2};
}

/*registration steps*/
.reg_progress_dots span.active:after,
.reg_progress_dots span.done{
    background-color: ${c.accentBg};
}
.reg_progress_dots span{
    border-color: ${c.bodyTxt2};
}
.reg_progress_dots span:before{
    background-color: ${c.bodyTxt2};
}
/*casino navigation*/
.tl_casino_navigation_wrapper {
    color: ${c.primaryTxt2};
}

.tl_casino_navigation_tab {
    background-color: rgba(0,0,0,0.0);
    color: ${c.primaryTxt2};
    border-radius:${c.borderRadius * 2}px ${c.borderRadius * 2}px 0 0;

}

.tl_casino_subnavigation_wrapper{
    background-color: ${c.primaryBgTransparent};
    color: ${c.primaryTxt2};
    border-radius:${c.borderRadius * 2}px;
}

.tl_casino_navigation_tab.active,
.tl_casino_navigation_tab:hover {
    background-color: ${c.primaryBgTransparent};
    color: ${c.accentBg};
}

.tl_casino_subnavigation_item.active,
.tl_casino_subnavigation_item:hover {
    color: ${c.accentBg};
}

.casino_nav__see_more__dropdown,
.filter_result__block {
    background-color: ${c.primaryBgTransparent};
    color: ${c.primaryTxt};
}




/*payments*/
.tl_payment_block,
.tl_payment_block_inter,
.tl_payment_inner_block{
    background-color:${c.bodyBg2};
    color:${c.bodyTxt2};
}
.tl_payment_block:hover,
.tl_payment_block_inter:hover,
.tl_payment_inner_block:hover,
.tl_payment_block.active,
.tl_payment_inner_block.active
.tl_payment_block_inter.active{
    background-color:${c.bodyBg2Hov};
    color:${c.bodyTxt2};
}
.deposit_payment,
.tl_payment_block .icon_color,
.payment_lbl, a.payment_lbl{
    color:${c.bodyTxt2};
}
.tl_payment_block .tl_deposit_button{
    background-color:${c.accentBg};
    color:${c.accentTxt};
}
.tl_payment_block .tl_deposit_button:hover{
    background-color:${c.accent2};
    color:${c.accentTxt};
}
.tl_input_popup{
    background-color:${c.customBodyBg3};
    color:${c.bodyTxt2};
}

/*inbox popup*/
.tl_my_inbox_container{
    background-color:${c.bodyBg};
    color:${c.bodyTxt2};
}
.tl_my_inbox_msg_box,
.tl_my_inbox_mails_cont{
    background-color:${c.bodyBg2};
    color:${c.bodyTxt2};
}
.deleteAll_icon, .readAll_icon,
.tl_mail_icon,
.tl_mail_details_title{
    color:${c.bodyTxt2};
}
.tl_mail_details{
    color:${c.bodyTxt};
}
.tl_mail_item{
    background-color:${c.bodyBg};
    color:${c.bodyTxt2};
}
.tl_mail_item.active,
.tl_mail_item:hover{
    background-color:${c.customBodyBg3};
    color:${c.bodyTxt2};
}
.tl_mail_row{
    background-color:${c.bodyBg};
    color:${c.bodyTxt2};
}
.tl_mail_msgId{
    color:${c.accentBg};
}
.tl_msg_button {
    background-color: ${c.accentBg};
    color: ${c.accentTxt};
}
.tl_msg_button:hover {
    background-color: ${c.accent2};
    color: ${c.accentTxt};
}
.greyBtn:hover,
.greyBtn {
    background-color: ${c.bodyBg2};
    color: ${c.primaryTxt2};
    border-radius: ${c.borderRadius}px;
    ${c.leafView ? leafViewCss : ''}
}
.close_games_content,
.add__game,
.add__game_button,
.left__menu{
    background-color:${c.primaryBgTransparent};
    color:${c.primaryTxt};
}
.last__winners .item__img{
    background-color:${c.primaryBg};
    color:${c.primaryTxt};
}
.star__icon.favoriteGames_delete,
.tl_typography_accent{
    color: ${c.accentBg};
}

.tl_gh .tl_gh_result .tl_gh_result_heading{
    background-color:${c.bodyBg2};
    color:${c.bodyTxt2};
}
.tl_gh .tl_gh_result .tl_gh_result_item:nth-child(even) {
    background-color:${c.customBodyBg3};
    color:${c.bodyTxt};
}
.tl_gh .tl_gh_result .tl_gh_result_item:nth-child(odd) {
    background-color:${c.customBodyBg3Hov};
    color:${c.bodyTxt};
}
.paging li > .pi{
    color:${c.bodyTxt2};
}
.paging li > .pi.page{
    color:${c.bodyTxt};
}
.paging li > .pi.page:hover,
.paging li > .pi.active{
    background-color:${c.bodyBg2};
}
${c.hasVPNdropdown ? `
 /*vpn*/
.tl_main_nav .header_nav__dropdown a, .header_nav__dropdown a { 
    border-bottom: 1px solid ${c.bodyBg2};
}
.header_nav__dropdown {
    background: ${c.bodyBg};
}
.vpn_links__button {
    background-color: ${c.accentBg};
    color: ${c.bodyTxt};
}
`: ``}

${c.leafcustomLoginviewView ? `
.tl_casino_page .tl_logo a {
   
}
`: ``}


${c.customCasinoAccent ? `   
    /*different casino accent and logo*/
    .tl_casino_page .tl_logo a {
        background-image: url(/Img/partners/.......);
    }
    
    .tl_casino_page .tl_btn-accent,
    .tl_casino_page .add_game_popup .moregame,
    .tl_casino_page .a.tl_btn-accent,
    .tl_casino_page .tl_promoted:after,
    .tl_casino_page .New:after,
    .tl_casino_page .tl_game_tab_item.New:after,
    .tl_casino_page .promoted:after,
    .tl_casino_page .game__link_real,
    .tl_casino_page .tl_badge,
    .tl_casino_page .tl_payment_block .tl_deposit_button,
    .tl_casino_page .tl_search_button,
    .tl_casino_page .games_filter_element:hover,
    .tl_casino_page .games_filter_element.active,
    .tl_casino_page .games_filter_show,
    .tl_casino_page .me_badge{
        background-color: ${c.customCasinoAccentBg};
        color: ${c.customCasinoAccentTxt};
    }
    
    .tl_casino_page .tl_btn-accent:hover,
    .tl_casino_page a.tl_btn-accent:hover,
    .tl_casino_page .add_game_popup .moregame:hover,
    .tl_casino_page .game__link_real:hover,
    .tl_casino_page .tl_payment_block .tl_deposit_button:hover,
    .tl_payment_block .tl_search_button:hover,
    .tl_payment_block .games_filter_show:hover {
        background-color: ${c.customCasinoAccentBgHov};
        color: ${c.customCasinoAccentTxt};
    }

    .tl_casino_page a.tl_simple_link-accent,
    .tl_casino_page a.tl_simple_link-accent:hover,
    .tl_casino_page .top_winners__value,
    .tl_casino_page .top_winners__date {
        color: ${c.customCasinoAccentBg};
    }
    
    .tl_casino_page .tl_main_nav_item:hover,
    .tl_casino_page .tl_main_nav_item-active,
    .tl_casino_page .tl_footer_links_heading,
    .tl_casino_page .tl_simple_link:hover,
    .tl_casino_page .cas_nav_prev:hover,
    .tl_casino_page .cas_nav_next:hover,
    .tl_casino_page .tl_casino_navigation_tab.active,
    .tl_casino_page .tl_casino_navigation_tab:hover,
    .tl_casino_page .tl_casino_subnavigation_item.active,
    .tl_casino_page .tl_casino_subnavigation_item:hover,
    .tl_casino_page .top_winners__value,
    .tl_casino_page .star__icon.favoriteGames_delete {
        color: ${c.customCasinoAccentBg};
    }` : ''
}



  `

    style.innerHTML = css

    return css

}