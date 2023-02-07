'use strict';

//khai bao bien can thiet de lam phan thon tin ca nhan
const hiddenInfo = document.querySelector('.info');
const checkContent = document.querySelector('.yourEmail');
const btnContent = document.querySelector('.submitButton');
const hiddenForm = document.querySelector('.inputEmail');
const error = document.querySelector('.error-text');
const iconError = document.querySelector('.iconError');
const regex = //cac ky tu de kiem tra mail
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

//nhap email hop le nhan vao nut submit thi noi dung thong tin ca nhan hien len
//va noi dung form nhap email bi an di, neu email ko hop le thi hien len thong bao
const closeErrorBox = function () {
  error.style.display = 'none';
};

btnContent.addEventListener('click', function () {
  if (checkContent.value.match(regex) && checkContent !== '') {
    hiddenInfo.classList.remove('hidden');
    hiddenForm.classList.add('hidden');
    iconError.style.display = 'none';
    closeErrorBox();
  } else {
    error.style.display = 'block';
    iconError.style.display = 'block';
  }
});
checkContent.addEventListener('click', closeErrorBox);

//khai bao bien can thiet de lam phan job-info
const mouseMoveEvents = document.querySelectorAll('.job-info1');
const viewmoreDisplays = document.querySelectorAll('.unview');
const hiddenContents = document.querySelectorAll('.nomore');
const btnViewmores = document.querySelectorAll('.viewmore');
const mouseMoveEventOuts = document.querySelectorAll('.job-info1');
const markDowns = document.querySelectorAll('.bi-caret-down-fill');

//di chuyen chuot hien ra viewmore
for (let i = 0; i < mouseMoveEvents.length; i++) {
  const viewmoreOn = function () {
    viewmoreDisplays[i].classList.remove('unview');
  };
  mouseMoveEvents[i].addEventListener('mouseenter', viewmoreOn);
  const viewmoreOf = function () {
    viewmoreDisplays[i].classList.add('unview');
  };
  mouseMoveEventOuts[i].addEventListener('mouseleave', viewmoreOf);
}

//click vao viewmore hien ra noi dung va chuyen thanh viewless
function runButton() {
  //tao function cho nut bam de chay lenh duoi day
  for (let i = 0; i < btnViewmores.length; i++) {
    if (btnViewmores[i].textContent === 'viewmore') {
      //neu textContent cua nut bam ===viewmore thi chay lenh nay de hien thi noi dung ra
      const nomoreOn = function () {
        hiddenContents[i].classList.remove('nomore');
        markDowns[i].classList.remove('bi-caret-down-fill');
        btnViewmores[i].textContent = 'viewless';        
        markDowns[i].classList.add('bi-caret-up-fill');
      };
      btnViewmores[i].addEventListener('click', nomoreOn);
    } else {
      //neu nut bam khac viewmore thi chay lenh nay de an noi dung di
      const nomoreOf = function () {
        hiddenContents[i].classList.add('nomore');
        markDowns[i].classList.add('bi-caret-down-fill');
        btnViewmores[i].textContent = 'viewmore';        
        markDowns[i].classList.remove('bi-caret-up-fill');
      };
      btnViewmores[i].addEventListener('click', nomoreOf);
    }
  }
}
