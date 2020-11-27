function createCss(c){
    
let css = `
/*${c.fileName} skinning*/


/*landing main*/
#wrapper, body, html, .bgMain, #bonuses_content{
  background: ${c.primaryBg};
  color: ${c.bodyTxt} !important;
}
.platformForgPass {
  color: ${c.bodyTxt} !important;
}
#wrapper input,
#wrapper textarea,
.ui-btn,
#wrapper select{
  background-color: ${c.bodyBg2};
  color: ${c.bodyTxt};
  border-radius: ${c.borderRadius}px !important;
}
#wrapper label{
  color: ${c.primaryTxt};
}
#wrapper input::-webkit-input-placeholder,
#wrapper input::-ms-input-placeholder,
#wrapper input::placeholder {
  color: ${c.bodyTxt};
}
.casino_h_link_cont .clr_sec{
  background: ${c.headerBg};
  color: ${c.headerTxt} !important;
}
.casino_links_tabs .home_icon:before {
  color: ${c.accentBg};
}
.casino_links_tabs a{
  background: ${c.headerBg};
  color: ${c.headerTxt};
}

/*header*/
#header{
  background: ${c.headerBg};
  color: ${c.headerTxt};
}
.LinkToLeftPanel{
  color: ${c.headerTxt};
}
.user_balance{
  flex-direction: column;
}
.btn_deposit{
  background: ${c.accentG};
  color: ${c.accentTxt};
  border-radius: ${c.borderRadius}px;
  padding-left:5px;
  padding-right:15px;
}

.user_info a,
.user_info .txt {
  color: ${c.headerTxt} !important;
}

/*buttons*/
.btn_sec,
.game__link_demo {
  background-color: ${c.primaryBg2} !important;
  color: ${c.primaryTxt} !important;
  border-radius: ${c.borderRadius}px;
}
.btn_prim,
.favorite_see__notlogin_button,
.game__link_play {
  background: ${c.accentG} !important;
  color: ${c.accentTxt} !important;
  border-radius: ${c.borderRadius}px;
}

/*main menu*/
.nav_item {
  background: ${c.bodyBg2} !important;
  color: ${c.bodyTxt} !important;
  border-radius: ${c.borderRadius}px;
}
.nav_item>img {
  padding: 16px 23px 40px;
  max-height: 30vw;
  object-fit: contain;
}
.nav_title{
  color: ${c.bodyTxt} !important;
}

/*middle banner*/
.middle_banner_mob a{
  border-radius: ${c.borderRadius}px;
}

/*widget name*/
.name_vidget{
  border-radius: ${c.borderRadius}px;
  background: ${c.bodyBg2} !important;
  color: ${c.bodyTxt} !important;
}


/*top casino games*/
.slot_banners a{
  border-radius: ${c.borderRadius}px;
}

/*footer*/
#footer{
  background: ${c.footerBg};
  color: ${c.footerTxt};
  padding-left: 15px;
  padding-right: 15px;
}
.drop_down_lang {
  padding: 0 24px !important;
  background: ${c.footerBg};
  color: ${c.footerTxt};
}
.drop_down_lang_arrow:after{
  border-top-color: ${c.bodyTxt};
}
.drop_down_lang__front_el{
  display:none;
}

/*left panel*/
#left-panel,
.lm__container{
  background: ${c.primaryBg};
  color: ${c.primaryTxt};
}
.lm__block{
  background: ${c.bodyG};
  color: ${c.bodyTxt} !important;
}
.lm_link,
.lm_link_noic{
  background: ${c.bodyG};
  color: ${c.bodyTxt};
  border-bottom-color: ${c.primaryBg};
}

.lm_link a,
.lm_link_noic a,
.lm_link a:before,
.lm__block:before{
  color: ${c.bodyTxt} !important;
}

/*right panel*/
#right-panel,
.panel,
.PlatformLoggedUser {
  background: ${c.primaryBg};
  color: ${c.primaryTxt};
}
.ui-collapsible-content{
  background: ${c.primaryBg} !important;
  color: ${c.primaryTxt};
}
#right-panel .right_menu_close{
  font-size: 20px;
  background: ${c.bodyG};
  color: ${c.bodyTxt};
  width: 40px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  border-radius: 4px;
  display: block;
}
.account_title{
  text-align: center;
  color: ${c.accentBg};
  font-weight: 500;
  font-size: 16px;
}
.playerId{
  text-align: center;
}
.menuRow,
.menuBtn,
a.menuRow,
a.menuBtn{
  background: ${c.bodyG};
  color: ${c.bodyTxt} !important;
}


/*payment*/
.heading{
  background: ${c.headingG};
  color: ${c.headingTxt};
}
.paym_txt1{
  color: ${c.primaryTxt};
}
.collapse_btn h3 > a{
  background: ${c.bodyG};
  color: ${c.bodyTxt};
  border-bottom-color: ${c.bodyBg};
}
.collapse_btn h3 > a:before{
  color: ${c.bodyTxt};
}
.collapse_content .paym_txt{
  color: ${c.primaryTxt};
}
.paym_cond{
  color: ${c.primaryTxt2};
}
.paym_cond > span{
  color: ${c.primaryTxt};
}
.row label{
  color: ${c.primaryTxt2};
}
.paymentTypes .inp{
  background-color: ${c.bodyBg2};
  color: ${c.bodyTxt};
  border-radius: ${c.borderRadius}px;
}
.ui-body-b .ui-body-inherit{
  border-radius: ${c.borderRadius}px;
}

/*my account*/
.successmassage {
  color: #7fbb89;
  line-height: 20px;
  background-color: #dedede;
  border-radius: ${c.borderRadius}px;
  text-align: center;
}
.accRowClr {
  background-color: ${c.bodyBg2};
  color: ${c.bodyTxt};
}
.accRowClr td, .accRowClr td a{
  color: ${c.bodyTxt};
}


/*inbox*/
.tl_mail_header:before {
  color: ${c.bodyTxt};
}
.tl_mail_send_input,
.tl_mail_send_area{
  background-color: ${c.bodyBg2};
  color: ${c.bodyTxt};
}
.tl_mail_details_title {
  color: ${c.bodyTxt2};;
}
.tl_mail_attachfiel_screp,
.tl_mail_icon,
.tl_mail_details {
    color: ${c.bodyTxt};
}
.tl_mail_attachfiel_screp{
  color: ${c.primaryTxt};
}
.tl_mail_attachfiel_download_btn{
  background-color: ${c.bodyBg2};
  color: ${c.bodyTxt};
}
.tl_mail_msgId {
  color: ${c.accentBg}
}
.tl_mail_item {
  background-color: ${c.bodyBg2};
  color: ${c.bodyTxt};
  border-color: ${c.bodyBg};
}
.tl_mail_row {
  background-color: ${c.bodyBg};
  color: ${c.bodyTxt};
}
.tf_arrow_icon:before {
  color: ${c.bodyTxt};





/*profile*/
.ui-radio .ui-btn.ui-radio-on:after{
  box-sizing: content-box;
  background-color: ${c.accentBg};
  border-color: ${c.bodyTxt};
}
.ui-checkbox-off:after, .ui-btn.ui-radio-off:after{
  background-color: ${c.bodyTxt};
}
.required-field{
  color: ${c.accentBg};
}


/*bonuses*/
.tab_item{
  background-color: ${c.bodyBg2};
  color: ${c.bodyTxt} !important;
}
.tab_item.active{
  background-color: ${c.accentBg};
  color: ${c.accentTxt} !important;
}


/*training*/
.training__info {
  color: ${c.bodyTxt};
  background: ${c.bodyBg2};
}
.training__next {
  color: ${c.accentBg};
}

/*casino*/
.casino_nav__links_block{
  background-color: ${c.bodyBg2};
  color: ${c.bodyTxt};
  border-radius: ${c.borderRadius}px;
}
.casino_nav__links_block a{
  color: ${c.bodyTxt};
}
.casino_nav__links_block a.active{
  color: ${c.accentBg};
}
.casino__container .New:after{
  background-color: ${c.accentBg};
  color: ${c.accentTxt};
}
.casino__container .New:before {
  border-top-color: ${c.accentBg2};
  border-right-color: ${c.accentBg2};
}
.menu_circle:before{
  box-shadow:  4px 3px 40px 1200px  ${c.bodyBg2}; 
}
.fixed_menu__play_button{
  background-color: ${c.bodyBg2};
}
.fixed_menu__li.active{
  color: ${c.accentBg};
}

/*promotions*/
.tl_prom_filters{
  background: ${c.bodyBg2};
  color: ${c.bodyTxt};
  margin: 5px;
}
.promo_clicked{
  background: ${c.accentG};
  color: ${c.accentTxt};
  opacity: 1;
}
.promo_mobile_cont{
  background: ${c.bodyBg2};
  color: ${c.bodyTxt};
}
.promo_mobile_title{
  color: ${c.accentBg};
}
.tl_promotions_more_info{
  background: ${c.accentG};
  color: ${c.accentTxt} !important;
}


/*search*/
.search_switcher {
  background-color: ${c.bodyBg2};
}
.search_switcher:before {
  background-color: ${c.bodyTxt};
}
#advancedSearch.checked .search_switcher {
  background-color: ${c.accentBg};
}
.popup_flex_box{
  background-color: ${c.primaryBg};
  color: ${c.primaryTxt};
}
.nc__heading,
.fs__input_wrap .close-search{
  color: ${c.primaryTxt};
}
.games_filter_title{
  background-color: ${c.bodyBg2};
  color: ${c.bodyTxt};
  border-radius: ${c.borderRadius}px;
}
.games_filter_element, .games_filter_list_show{
  background-color: ${c.bodyBg2};
  color: ${c.bodyTxt};
  border-radius: ${c.borderRadius}px;
}
.games_filter_element.active{
  background-color: ${c.accentBg};
  color: ${c.accentTxt};
}
.games_filter_list_show:after {
  border-top-color: ${c.bodyTxt};
}
.games_filter_popup__footer {
  background-color: ${c.bodyBg};
}
.games_filter_reset {
  background-color: ${c.bodyBg2};
  color: ${c.bodyTxt};
}
.games_filter_show{
  background-color: ${c.accentG};
  color: ${c.accentTxt};
}


/*my casino*/
.favorite_see__notlogin_text {
  color: ${c.primaryTxt};
}

/*opened game*/
.close__game__more_block::after{
  color: #fff;
}
.game__name {
  text-shadow: none;
  color: #fff;
}
.game__like {
  color: ${c.bodyTxt};
  background: ${c.bodyBg2};
}


  `

    style.innerHTML = css

    return css

}