function createCss(c){
    
let css = `
/*${c.fileName} skinning*/
body{
  background: ${c.bodyG};
  color: ${c.bodyTxt};
}
/*new header*/
.tl_header_top_row {
    background: ${c.headerG};
    color: ${c.headerTxt};
}
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


  `

    style.innerHTML = css

    return css

}