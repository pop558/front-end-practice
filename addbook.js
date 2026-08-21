/**
 * 表单序列化插件
 * @param {HTMLFormElement} form - form表单DOM对象
 * @returns {Object} 表单键值对对象
 */
function serialize(form) {
    // 存放最终数据
    const result = {}
    // 获取表单内所有带name的控件
    const inputs = form.querySelectorAll('[name]')
    // 循环每一个输入框
    inputs.forEach(item => {
        // 去除首尾空格
        const val = item.value.trim()
        // name作为键，输入值作为值存入对象
        result[item.name] = val
    })
    return result
}