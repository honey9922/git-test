cc.Class({
    extends: cc.Component,

    properties: {

        button: cc.Node,

        bar: cc.Node,

        clic: cc.Label,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {

        var progressbar = this.bar.getComponent(cc.ProgressBar).progress;
        this.bar.active = false;
       

        //獲取小車節點
        let { button } = this;
        //新增變數判斷使用者當前滑鼠是不是處於按下狀態
        let mouseDown = false;
        //當使用者點選的時候記錄滑鼠點選狀態
        button.on(cc.Node.EventType.TOUCH_START, (event) => {
            mouseDown = true;
            this.bar.active = true;
            progressbar = 0;
            this.bar.getComponent(cc.ProgressBar).progress = progressbar;
        });
        //只有當使用者滑鼠按下才能拖拽
        button.on(cc.Node.EventType.TOUCH_MOVE, (event) => {
            if (!mouseDown) return;
            //獲取滑鼠距離上一次點的資訊
            let delta = event.getDelta();
            //移動小車節點
            button.x = button.x + delta.x;
            button.y = button.y + delta.y;


            if (progressbar <= 1) {
                progressbar += 0.005
            } else {
                progressbar = 1
            }

            

            this.bar.getComponent(cc.ProgressBar).progress = progressbar;


        });
        //當滑鼠抬起的時候恢復狀態
        button.on(cc.Node.EventType.TOUCH_END, (event) => {
            mouseDown = false;

            if (progressbar = 1) {
                this.bar.active = true;

            //     this.scheduleOnce(function() {
                

            //         let temp = (Number(this.clic.string) + 10)
            //         this.clic.string = String(temp)
                

            // }, 1);

            }
            if (progressbar <= 1) {
                this.bar.active = false;
                progressbar = 0;
            }

            //this.bar.getComponent(cc.ProgressBar).progress = progressbar;
        })
        // button.on(cc.Node.EventType.TOUCH_CANCE, (event) => {
        //     mouseDown = false;
        // })

    },

    start() {

    },

    update(dt) {


    },

    click() {

        console.log("點擊")
        let temp = (Number(this.clic.string) + 1)
        this.clic.string = String(temp)

    },



});
