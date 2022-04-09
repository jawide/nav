module.exports = {
    install() {
        String.prototype.replaceAll = function (exp, newStr) {
            return this.replace(new RegExp(exp, "gm"), newStr);
        };
        String.prototype.format = function (args) {
            let result = this;
            if (arguments.length < 1) {
                return result;
            }
            let data = arguments;
            if (arguments.length === 1 && typeof (args) == "object") {
                // 如果模板参数是对象
                data = args;
            }
            for (const key in data) {
                const value = data[key];
                if (undefined !== value) {
                    result = result.replaceAll("\\{" + key + "\\}", value);
                }
            }
            for (const key in data) {
                const value = data[key];
                if (undefined !== value) {
                    result = result.replace("{}", value);
                }
            }
            return result;
        }
    }
}