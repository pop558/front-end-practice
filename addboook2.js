function serialize(form) {
    const result = {}
    const inputs = form.querySelectorAll('[name]')
    inputs.forEach(item => {
        const val = item.value.trim()
        result[item.name] = val
    })
    return result
}