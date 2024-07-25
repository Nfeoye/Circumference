function calculate(){
    const radius = document.getElementById('radius')
    const circumference = document.getElementById ('total-circumference')
    let r = radius.value
    const result = (2 * 3.142 * r)
    circumference.textContent = result.toLocaleString(undefined,)
}