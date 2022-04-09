module.exports = {
    install(){
        window.color = (parent=document) => {
            let divs = parent.getElementsByTagName("div")
            for (let div of divs) {
                div.style.backgroundColor = "#"+Array(3).fill(null).map(() => parseInt(Math.random()*256).toString(16).padStart(2, 0)).join("")+"66"
                window.color(div)
            }
        }
    }
}