const emoji = document.getElementById('emoji')
const prophesy = document.getElementById('prophesy')
const nameInput = document.getElementById('nameInput')

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0');
var yyyy = today.getFullYear();

today = mm + dd + yyyy;

const checkInput = (input) => {
    let inputReplace = input.replaceAll(' ', '')
    if ( inputReplace === '' ) {
        inputReplace = 'noName'
        return inputReplace
    } else if ( inputReplace.search('ก') !== -1 || inputReplace.search('ข') !== -1 || inputReplace.search('ค') !== -1 || inputReplace.search('ง') !== -1 || inputReplace.search('จ') !== -1 || inputReplace.search('ช') !== -1 || inputReplace.search('ญ') !== -1 || inputReplace.search('ณ') !== -1 || inputReplace.search('ด') !== -1 || inputReplace.search('ต') !== -1 || inputReplace.search('ธ') !== -1 || inputReplace.search('น') !== -1 || inputReplace.search('บ') !== -1 || inputReplace.search('ป') !== -1 || inputReplace.search('พ') !== -1 || inputReplace.search('ม') !== -1 || inputReplace.search('ย') !== -1 || inputReplace.search('ร') !== -1 || inputReplace.search('ล') !== -1 || inputReplace.search('ว') !== -1 || inputReplace.search('ศ') !== -1 || inputReplace.search('ส') !== -1 || inputReplace.search('ห') !== -1 || inputReplace.search('อ') !== -1 ) {
        inputReplace = 'thName'
        return inputReplace
    } else {
        inputReplace = inputReplace.toLowerCase()
        inputReplace = inputReplace.replaceAll('a', 0)
        inputReplace = inputReplace.replaceAll('b', 1)
        inputReplace = inputReplace.replaceAll('c', 2)
        inputReplace = inputReplace.replaceAll('d', 3)
        inputReplace = inputReplace.replaceAll('e', 4)
        inputReplace = inputReplace.replaceAll('f', 5)
        inputReplace = inputReplace.replaceAll('g', 6)
        inputReplace = inputReplace.replaceAll('h', 7)
        inputReplace = inputReplace.replaceAll('i', 8)
        inputReplace = inputReplace.replaceAll('j', 9)
        inputReplace = inputReplace.replaceAll('k', 0)
        inputReplace = inputReplace.replaceAll('l', 1)
        inputReplace = inputReplace.replaceAll('m', 2)
        inputReplace = inputReplace.replaceAll('n', 3)
        inputReplace = inputReplace.replaceAll('o', 4)
        inputReplace = inputReplace.replaceAll('p', 5)
        inputReplace = inputReplace.replaceAll('q', 6)
        inputReplace = inputReplace.replaceAll('r', 7)
        inputReplace = inputReplace.replaceAll('s', 8)
        inputReplace = inputReplace.replaceAll('t', 9)
        inputReplace = inputReplace.replaceAll('u', 0)
        inputReplace = inputReplace.replaceAll('v', 1)
        inputReplace = inputReplace.replaceAll('w', 2)
        inputReplace = inputReplace.replaceAll('x', 3)
        inputReplace = inputReplace.replaceAll('y', 4)
        inputReplace = inputReplace.replaceAll('z', 5)

        inputReplace = inputReplace + parseFloat(today)

        while (inputReplace > 9) {
            inputReplace = Math.floor(inputReplace / 3)
        }

        return inputReplace
    }
}

const clickButton = () => {
    let nameText = nameInput.value
    if (checkInput(nameText) == 0) {
        emoji.innerHTML = '😢'
        prophesy.innerHTML = 'วันนี้น่าจะเป็นวันที่เลวร้ายแน่ๆเลย แต่ไม่ต้องห่วงนะ ทำวันนี้ให้ดีที่สุดก็พอ'
    } else if (checkInput(nameText) == 1) {
        emoji.innerHTML = '😑'
        prophesy.innerHTML = 'วันนี้คงจะไม่มีอะไรพิเศษ เข้าขั้นน่าเบื่อเลยแหละ แต่ยิ้มเข้าไว้นะ'
    } else if (checkInput(nameText) == 2) {
        emoji.innerHTML = '😤'
        prophesy.innerHTML = 'ยิ้ม ยิ้ม ไว้น้า'
    } else if (checkInput(nameText) == 3) {
        emoji.innerHTML = '🥰'
        prophesy.innerHTML = 'ความรักของเธอ จะเป็นไปด้วยดี'
    } else if (checkInput(nameText) == 4) {
        emoji.innerHTML = '🙄'
        prophesy.innerHTML = 'เดี๋ยวมันก็ผ่านไปน้า'
    } else if (checkInput(nameText) == 5) {
        emoji.innerHTML = '😐'
        prophesy.innerHTML = 'ก็ปกติดีนะ'
    } else if (checkInput(nameText) == 6) {
        emoji.innerHTML = '😒'
        prophesy.innerHTML = 'เห่อ เธอก็ทำดีที่สุดแล้ว'
    } else if (checkInput(nameText) == 7) {
        emoji.innerHTML = '🥺'
        prophesy.innerHTML = 'หือ หือ มุแหง่'
    } else if (checkInput(nameText) == 8) {
        emoji.innerHTML = '😞'
        prophesy.innerHTML = 'วันพรุ่งนี้ ทุกอย่างจะดีขึ้นเอง'
    } else if (checkInput(nameText) == 9) {
        emoji.innerHTML = '👊'
        prophesy.innerHTML = 'เธอคงโชคดีสุดๆไปเลยแหละ'
    } else if (checkInput(nameText) == 'noName') {
        emoji.innerHTML = '😶'
        prophesy.innerHTML = 'คำทำนาย'
        alert('กรุณาใส่ชื่อ - นามสกุล')
    } else if (checkInput(nameText) == 'thName') {
        emoji.innerHTML = '😶'
        prophesy.innerHTML = 'คำทำนาย'
        alert('กรุุณาใช้ภาษาอังกฤษ')
    }
}
