console.log('hiiiiii')

const resetBtn = document.getElementById('reset-btn')

resetBtn.addEventListener('click', () => {

    const newPassword = document.getElementById('newPassword')
    const confirmNewPassword = document.getElementById('confirmNewPassword')

    console.log(newPassword.value,confirmNewPassword.value)

    if (newPassword.value == '' || confirmNewPassword.value == '') {
        alert('please enter password properly')
    }

    if (newPassword.value != confirmNewPassword.value) {
        alert('password did not matched')
    }
    if (newPassword.value != '' && newPassword.value == confirmNewPassword.value) {
        alert('password changed successfully')
        window.location.href = './login-page/loginPage.html'
    }
})