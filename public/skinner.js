
class Skinner {
    constructor(cb){
        this.skinnerContainer = this.createControlsWrapper()

        this.cb = cb

        this.skin = {
            primaryBg:"#161616",
            isDark:false,
            primaryTxt:"#ffffff",
            primaryTxt2:"#cccccc",
            primaryBgTransparent: "rgba(0,0,0,0.7)",

            isBodyBg:false,
            isWidgetGradient:false,
            bodyBg_g:"#555555",
            bodyBg:"#333333",
            bodyG:"#333333",
            bodyBg2:"#404040",
            bodyBg3:"#373737",
            bodyTxt:"#ffffff",
            bodyTxt2:"#999999",

            isAccentBg:true,
            isAccentGradient:false,
            accentBg:"#ffb700",
            accentG:"#ffb700",
            accentBg2:"#ffb700",
            accentBg_g:"#f14100",
            accentTxt:"#000000",

            isHeaderBg:false,
            isHeaderGradient:false,
            headerBg:"#161616",
            headerBg_g:"#333333",
            headerG:"#161616",
            headerTxt:"#ffffff",

            isHeadingBg:false,
            isHeadingGradient:false,
            headingBg:"#161616",
            heading_g:"#333333",
            headingG:"#161616",
            headingTxt:"#ffb700",

            isFooterBg:false,
            isFooterGradient:false,
            footerBg:"#0a0a0a",
            footerG:"#0a0a0a",
            footerBg_g:"#333333",
            footerTxt:"#ffffff",

            borderRadius: 2,

        }



        this.modifyColor = this.modifyColor.bind(this);

        this.cb(this.skin)
    }

    init(){
        this.createHTML()
        this.applyInitialValues()
        this.createDownloadButton()
    }

    async modifyColor(key, value){
        this.skin[key] = value
        this.applyInitialValues()
        this.generateTheme()
        this.cb(this.skin)
    }

    modifyKey(key, value){
        this.skin[key] = value;
        this.generateTheme()
        this.applyInitialValues()
        this.cb(this.skin)
    }

    generateTheme(){
        this.skin.primaryTxt = guessVisibleColor(this.skin.primaryBg)
        this.skin.primaryBg2 = this.skin.isDark ? tinycolor(this.skin.primaryBg).darken(9).toString() : tinycolor(this.skin.primaryBg).lighten(9).toString()
        this.skin.primaryBg3 = this.skin.isDark ? tinycolor(this.skin.primaryBg).darken(16).toString() : tinycolor(this.skin.primaryBg).lighten(16).toString()
        this.skin.primaryTxt2 = this.skin.primaryTxt === "#000" ? tinycolor(this.skin.primaryTxt).lighten(20).toString() : tinycolor(this.skin.primaryTxt).darken(20).toString()
        this.skin.primaryBgTransparent = tinycolor(this.skin.primaryBg).setAlpha(.8).toRgbString()
        
        if(this.skin.isBodyBg){
            this.skin.bodyG = this.skin.bodyBg
            this.skin.bodyTxt = guessVisibleColor(this.skin.bodyBg)
            this.skin.bodyTxt2 = this.skin.bodyTxt === "#000" ? tinycolor(this.skin.bodyTxt).lighten(20).toString() : tinycolor(this.skin.bodyTxt).darken(20).toString()
            this.skin.bodyBg2 = this.skin.isDark ? tinycolor(this.skin.bodyBg).darken(6).toString() : tinycolor(this.skin.bodyBg).lighten(6).toString()
            this.skin.bodyBg3 = this.skin.isDark ? tinycolor(this.skin.bodyBg).darken(9).toString() : tinycolor(this.skin.bodyBg).lighten(9).toString()
            this.skin.bodyBgHov = this.skin.isDark ? tinycolor(this.skin.bodyBg).darken(2).toString() : tinycolor(this.skin.bodyBg).lighten(2).toString()
            this.skin.bodyBg2Hov = this.skin.isDark ? tinycolor(this.skin.bodyBg).darken(7).toString() : tinycolor(this.skin.bodyBg).lighten(7).toString()
            this.skin.bodyBg3Hov = this.skin.isDark ? tinycolor(this.skin.bodyBg).darken(2).toString() : tinycolor(this.skin.bodyBg).lighten(2).toString()
            if(this.skin.isWidgetGradient){
                this.skin.bodyG = `linear-gradient(0deg, ${this.skin.bodyBg} 0%, ${this.skin.bodyBg_g} 100%)`
            }
        }
        else{
            this.skin.bodyBg = this.skin.primaryBg2
            this.skin.bodyG = this.skin.bodyBg
            this.skin.bodyTxt = guessVisibleColor(this.skin.bodyBg)
            this.skin.bodyTxt2 = this.skin.bodyTxt === "#000" ? tinycolor(this.skin.bodyTxt).lighten(20).toString() : tinycolor(this.skin.bodyTxt).darken(20).toString()
            this.skin.bodyBg2 = this.skin.isDark ? tinycolor(this.skin.bodyBg).darken(6).toString() : tinycolor(this.skin.bodyBg).lighten(6).toString()
            this.skin.bodyBg3 = this.skin.isDark ? tinycolor(this.skin.bodyBg).darken(9).toString() : tinycolor(this.skin.bodyBg).lighten(9).toString()
            this.skin.bodyBgHov = this.skin.isDark ? tinycolor(this.skin.bodyBg).darken(2).toString() : tinycolor(this.skin.bodyBg).lighten(2).toString()
            this.skin.bodyBg2Hov = this.skin.isDark ? tinycolor(this.skin.bodyBg).darken(7).toString() : tinycolor(this.skin.bodyBg).lighten(7).toString()
            this.skin.bodyBg3Hov = this.skin.isDark ? tinycolor(this.skin.bodyBg).darken(2).toString() : tinycolor(this.skin.bodyBg).lighten(2).toString()
        }


        if(this.skin.isAccentBg){
            this.skin.accentG = this.skin.accentBg
            this.skin.accentTxt = guessVisibleColor(this.skin.accentBg)
            this.skin.accentBg2 = this.skin.isDark ? tinycolor(this.skin.accentBg).darken(6).toString() : tinycolor(this.skin.accentBg).lighten(6).toString()
            if(this.skin.isAccentGradient){
                this.skin.accentG = `linear-gradient(0deg, ${this.skin.accentBg} 0%, ${this.skin.accentBg_g} 100%)`
            }
        }
        else{
            this.skin.accentBg = this.skin.bodyTxt
            this.skin.accentG = this.skin.accentBg
            this.skin.accentTxt = guessVisibleColor(this.skin.accentBg)
            this.skin.accentBg2 = this.skin.isDark ? tinycolor(this.skin.accentBg).darken(6).toString() : tinycolor(this.skin.accentBg).lighten(6).toString()
        }

        

        if(this.skin.isHeaderBg){
            this.skin.headerG = this.skin.headerBg
            this.skin.headerTxt = guessVisibleColor(this.skin.headerBg)
            this.skin.headerBg2 = this.skin.isDark ? tinycolor(this.skin.headerBg).darken(6).toString() : tinycolor(this.skin.headerBg).lighten(6).toString()
            if(this.skin.isHeaderGradient){
                this.skin.headerG = `linear-gradient(0deg, ${this.skin.headerBg} 0%, ${this.skin.headerBg_g} 100%)`
            }
        }
        else{
            this.skin.headerBg = this.skin.primaryBg
            this.skin.headerG = this.skin.primaryBg
            this.skin.headerBg2 = this.skin.isDark ? tinycolor(this.skin.headerBg).darken(6).toString() : tinycolor(this.skin.headerBg).lighten(6).toString()
            this.skin.headerTxt = guessVisibleColor(this.skin.headerBg)
        }

        if(this.skin.isHeadingBg){
            this.skin.headingG = this.skin.headingBg
            this.skin.headingTxt = guessVisibleColor(this.skin.headingBg)
            if(this.skin.isHeadingGradient){
                this.skin.headingG = `linear-gradient(0deg, ${this.skin.headingBg} 0%, ${this.skin.headingBg_g} 100%)`
            }
        }
        else{
            this.skin.headingBg = this.skin.bodyBg
            this.skin.headingG = this.skin.bodyG
            this.skin.headingTxt = this.skin.accentBg
        }


        if(this.skin.isFooterBg){
            this.skin.footerG = this.skin.footerBg
            this.skin.footerTxt = guessVisibleColor(this.skin.footerBg)
            if(this.skin.isFooterGradient){
                this.skin.footerG = `linear-gradient(0deg, ${this.skin.footerBg} 0%, ${this.skin.footerBg_g} 100%)`
            }
        }
        else{
            this.skin.footerBg = this.skin.primaryBg
            this.skin.footerG = this.skin.primaryBg
            this.skin.footerTxt = guessVisibleColor(this.skin.footerBg)
        }

        
        
    }

    applyInitialValues(){
        this.primaryBg.picker.value = this.skin.primaryBg
        this.primaryBg.checkBox.checked = this.skin.isDark

        this.bodyBg.checkBox.checked = this.skin.isBodyBg
        this.bodyBg.checkBox2.checked = this.skin.isWidgetGradient
        this.bodyBg.picker.value = this.skin.bodyBg
        this.bodyBg.picker2.value = this.skin.bodyBg_g
        this.skin.isBodyBg ? this.bodyBg.picker.disabled = false : this.bodyBg.picker.disabled = true
        this.skin.isBodyBg && this.skin.isWidgetGradient ? this.bodyBg.picker2.disabled = false : this.bodyBg.picker2.disabled = true

        this.accentBg.checkBox.checked = this.skin.isAccentBg
        this.accentBg.checkBox2.checked = this.skin.isAccentGradient
        this.accentBg.picker.value = this.skin.accentBg
        this.accentBg.picker2.value = this.skin.accentBg_g
        this.skin.isAccentBg ? this.accentBg.picker.disabled = false : this.accentBg.picker.disabled = true
        this.skin.isAccentBg && this.skin.isAccentGradient ? this.accentBg.picker2.disabled = false : this.accentBg.picker2.disabled = true

        this.headerBg.checkBox.checked = this.skin.isHeaderBg
        this.headerBg.checkBox2.checked = this.skin.isHeaderGradient
        this.headerBg.picker.value = this.skin.headerBg
        this.headerBg.picker2.value = this.skin.headerBg_g
        this.skin.isHeaderBg ? this.headerBg.picker.disabled = false : this.headerBg.picker.disabled = true
        this.skin.isHeaderBg && this.skin.isHeaderGradient ? this.headerBg.picker2.disabled = false : this.headerBg.picker2.disabled = true

        this.headingBg.checkBox.checked = this.skin.isHeadingBg
        this.headingBg.checkBox2.checked = this.skin.isHeadingGradient
        this.headingBg.picker.value = this.skin.headingBg
        this.headingBg.picker2.value = this.skin.headingBg_g
        this.skin.isHeadingBg ? this.headingBg.picker.disabled = false : this.headingBg.picker.disabled = true
        this.skin.isHeadingBg && this.skin.isHeadingGradient ? this.headingBg.picker2.disabled = false : this.headingBg.picker2.disabled = true

        this.footerBg.checkBox.checked = this.skin.isFooterBg
        this.footerBg.checkBox2.checked = this.skin.isFooterGradient
        this.footerBg.picker.value = this.skin.footerBg
        this.footerBg.picker2.value = this.skin.footerBg_g
        this.skin.isFooterBg ? this.footerBg.picker.disabled = false : this.footerBg.picker.disabled = true
        this.skin.isFooterBg && this.skin.isFooterGradient ? this.footerBg.picker2.disabled = false : this.footerBg.picker2.disabled = true

        this.borderRadius.range.value = this.skin.borderRadius

    }
    
    createHTML(){
        this.primaryBg = this.createControl("primaryBg", this.skinnerContainer, 
            (e)=> {this.modifyKey("isDark", e.target.checked)},
            null,
            (e)=> {this.modifyColor("primaryBg", e.target.value)}
        )
        this.bodyBg = this.createControl("bodyBg", this.skinnerContainer, 
            (e)=> {this.modifyKey("isBodyBg", e.target.checked)},
            (e)=> {this.modifyKey("isWidgetGradient", e.target.checked)},
            (e)=> {this.modifyColor("bodyBg", e.target.value)},
            (e)=> {this.modifyColor("bodyBg_g", e.target.value)}
        )
        this.accentBg = this.createControl("accentBg", this.skinnerContainer, 
            (e)=> {this.modifyColor("isAccentBg", e.target.checked)},
            (e)=> {this.modifyColor("isAccentGradient", e.target.checked)},
            (e)=> {this.modifyColor("accentBg", e.target.value)},
            (e)=> {this.modifyColor("accentBg_g", e.target.value)},
        )

        this.headerBg = this.createControl("headerBg", this.skinnerContainer, 
            (e)=> {this.modifyColor("isHeaderBg", e.target.checked)},
            (e)=> {this.modifyColor("isHeaderGradient", e.target.checked)},
            (e)=> {this.modifyColor("headerBg", e.target.value)},
            (e)=> {this.modifyColor("headerBg_g", e.target.value)},
        )

        this.headingBg = this.createControl("headingBg", this.skinnerContainer, 
            (e)=> {this.modifyColor("isHeadingBg", e.target.checked)},
            (e)=> {this.modifyColor("isHeadingGradient", e.target.checked)},
            (e)=> {this.modifyColor("headingBg", e.target.value)},
            (e)=> {this.modifyColor("headingBg_g", e.target.value)},
        )

        this.footerBg = this.createControl("footerBg", this.skinnerContainer, 
            (e)=> {this.modifyColor("isFooterBg", e.target.checked)},
            (e)=> {this.modifyColor("isFooterGradient", e.target.checked)},
            (e)=> {this.modifyColor("footerBg", e.target.value)},
            (e)=> {this.modifyColor("footerBg_g", e.target.value)},
        )

       
        this.borderRadius = this.createRangeControl("borderRadius", this.skinnerContainer, 
            (e)=> {this.modifyKey("borderRadius", e.target.value)}
        )

    }

    createControlsWrapper(){
        let main = document.createElement('div')
        main.className = "nik_skinner_control_wrapper"
        document.body.appendChild(main)
        return main
    }

    createDownloadButton(){
        this.btnWrapper = document.createElement('div')
        this.btnWrapper.className = "nik_skinner_download_button_wrapper"
        let downloadBtn = document.createElement('button')
        downloadBtn.innerText = "download css"
        downloadBtn.className = "nik_skinner_download_button"
        this.skinnerContainer.appendChild(this.btnWrapper)
        this.btnWrapper.appendChild(downloadBtn)
        downloadBtn.addEventListener('click', () => {
            this.makeDownloadRequest(this.cb, this.skin);
        })        
    }

    async makeDownloadRequest(cb, argument){
        const skin = cb(argument)
        try {
            const data = await fetch(`/req` + window.location.pathname, {
                method: 'post',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({data: skin})
            })
            if (data.status === 200) {
                window.location.replace(`/download` + window.location.pathname)
            }
        } catch (error) {
            console.log(error)
        }
        
        
    }

    createRangeControl(label, parent, checkboxCallback, type, max){
        let _type = type
        let _max = max
        let _label = document.createElement('label')
        _label.className = "nik_skinner_control_group_label"
        _label.htmlFor = label
        _label.innerText = label

        this.wrapper = document.createElement('div')
        this.wrapper.className = "nik_skinner_control_group"

        let range = document.createElement('input')
        if(_type){
          range.type = "checkbox"
          range.className = "nik_skinner_control_group_checkbox"
        }
        else{
          range.type = "range"
          if(_max){
            range.max = _max
          }
          range.className = "nik_skinner_control_group_range"
        }
        
        range.id = label
        range.addEventListener("change", checkboxCallback)

        this.wrapper.appendChild(_label)
        this.wrapper.appendChild(range)
        parent.appendChild(this.wrapper)


        return {
            range
        }
    }

    createControl(label, parent, checkboxCallback, gradientCallback, pickerCallback, picker2Callback){
        let _label = document.createElement('label')
        _label.className = "nik_skinner_control_group_label"
        _label.htmlFor = label
        _label.innerText = label

        let wrapper = document.createElement('div')
        wrapper.className = "nik_skinner_control_group"
        let checkBox = document.createElement('input')
        checkBox.type = "checkbox"
        checkBox.className = "nik_skinner_control_group_checkbox"
        checkBox.id = label

        checkBox.addEventListener("change", checkboxCallback)
        let picker = document.createElement('input')
        picker.type = "color"
        picker.className = "nik_skinner_control_group_picker"
        picker.addEventListener("input", pickerCallback)
        

        let picker2, checkBox2
        if(gradientCallback){
            checkBox2 = document.createElement('input')
            checkBox2.type = "checkbox"
            checkBox2.className = "nik_skinner_control_group_checkbox"
            checkBox2.id = label + '_g'
            checkBox2.addEventListener("input", gradientCallback)
            
            picker2 = document.createElement('input')
            picker2.type = "color"
            picker2.className = "nik_skinner_control_group_picker"
            wrapper.appendChild(picker2)
            picker2.addEventListener("change", picker2Callback)
        }

        wrapper.appendChild(_label)
        wrapper.appendChild(checkBox)
        if(gradientCallback){
           wrapper.appendChild(checkBox2)
        }
        wrapper.appendChild(picker)
        if(gradientCallback){
            wrapper.appendChild(picker2)
         }
        parent.appendChild(wrapper)

        return {
            picker,
            picker2,
            checkBox,
            checkBox2
        }
    }
}

var head = document.getElementsByTagName('head')[0];
var style = document.createElement('style');
style.setAttribute('type', 'text/css');
head.appendChild(style);

var s = new Skinner(createCss)

s.init()


function addActiveClassToNavigation(){
    let nav = document.querySelectorAll('.nik_skinner_link')

    for (let i = 0; i < nav.length; i++) {
        if(`/${nav[i].href.split('/')[3]}` === window.location.pathname){
            nav[i].classList.add("nik_skinner_link-active")
        }
    }

    
}

addActiveClassToNavigation();







