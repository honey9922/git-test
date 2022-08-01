cc.Class({
    extends: cc.Component,

    properties: {
       
       

        clic: cc.Label,

    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {

     
    },

    start () {

    },

    update (dt) {


    },

    click(){

        console.log("點擊")
        let temp = (Number(this.clic.string)+1)
        this.clic.string = String(temp)

    },

});
