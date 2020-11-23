function createCss(c){
    
let css = `
/*${c.fileName} skinning*/
body, #wrapper{
  background: ${c.bodyBg};
  color: ${c.bodyTxt};
}
/*top header*/
.casino_h_link_cont .clr_sec{
  background: ${c.headerG};
  color: ${c.headerTxt};
}
.casino_links_tabs .home_icon:before{
  color: ${c.accentBg};
}
.casino_links_tabs a{
  color: ${c.headerTxt};
}
/*main header*/
#header.bgMain{
  background: ${c.headerBg2};
  color: ${c.headerTxt};
}
.LinkToLeftPanel{
  color: ${c.headerTxt};
}


/*buttons*/
.btn_sec {
  background-color: ${c.primaryBg2} !important;
  color: ${c.primaryTxt} !important;
  border-radius: ${c.borderRadius}px;
}
.btn_prim {
  background: ${c.accentG} !important;
  color: ${c.accentTxt} !important;
  border-radius: ${c.borderRadius}px;
}

/*main content menu*/
.list-menu li{
  background: ${c.bodyG};
  color: ${c.bodyTxt} !important;
  border-color: ${c.bodyBg2} !important;
}
.list-menu li a,
.list-menu li a:after{
  color: ${c.bodyTxt} !important;
}
.list-menu li,
.list-menu li:last-child
.list-menu li:first-child{
  border-radius: ${c.borderRadius}px !important;
}


/*footer*/
#footer.bgMain{
  background: ${c.footerG};
  color: ${c.footerTxt};
}
  `

    style.innerHTML = css

    return css

}