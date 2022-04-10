module.exports = {
    install() {
        window.watch_win = (onLandscape, onPortrait) => {
            let last_differ = 0;
            const _ = () => {
                let differ = document.body.clientWidth - document.body.clientHeight;
                if (last_differ === 0 || last_differ * differ < 0) {
                    if (differ >= 0) {
                        if (onLandscape) onLandscape();
                        document.getElementsByTagName("html")[0].classList.remove("portrait")
                        document.getElementsByTagName("html")[0].classList.add("landscape")
                    } else {
                        if (onPortrait) onPortrait();
                        document.getElementsByTagName("html")[0].classList.remove("landscape")
                        document.getElementsByTagName("html")[0].classList.add("portrait")
                    }
                    last_differ = differ;
                }
            }
            _()
            window.onresize = () => {
                _()
            }
        }
    }
}