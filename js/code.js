window.onload = function () {
  let inputs = document.querySelectorAll("input");
  let errorMsg = document.querySelectorAll("form div p");
  let emailRegExp = /^\S+@\S+\.\S+$/gi;
  let passwordRegExp =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/;
  let namesRegExp = /^[A-Z][a-z]*$/gi;
  let lastnamesRegExp = /^[A-Z][a-z]*$/gi;

  for (let i of errorMsg) {
    i.style.display = "none";
  }

  inputs[4].onclick = function (e) {
    e.preventDefault();

    checkRegExp(inputs[0].value, namesRegExp, 0);
    checkRegExp(inputs[1].value, lastnamesRegExp, 1);
    checkRegExp(inputs[2].value, emailRegExp, 2);
    checkRegExp(inputs[3].value, passwordRegExp, 3);

    var counter = 0;

    for (let i = 0; i < 4; i++) {
      if (inputs[i].value.length !== 0) {
        counter++;
      }
    }

    if (counter === 4) {
      inputs[0].value = "";
      inputs[1].value = "";
      inputs[2].value = "";
      inputs[3].value = "";
    }
  };

  function checkRegExp(input, regExp, i) {
    if (regExp.test(input)) {
      errorMsg[i].style.display = "none";
    } else {
      errorMsg[i].style.display = "block";
    }

    return true;
  }
};
