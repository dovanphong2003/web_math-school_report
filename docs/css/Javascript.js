"use strict";
alert("welcome 🎉🎉");
const result = document.querySelector(".button-value_container_body-body");
let resultBox = document.querySelector(
  ".result_container_body-body"
).textContent;
let buttonSend = document.querySelector(".btn-element-list_container");

const fctButtonSend = function (e) {
  let ValueName = document.querySelector(".value-name").value;
  if (!ValueName) {
    alert("Bạn quên chưa nhập tên 🙂");
  } else {
    let infomationProfile = (document.querySelector(
      ".infomation_profile-container"
    ).textContent = `Name: ${ValueName}`);
    let profileYou = document.querySelector(".profile-container_header-body");
    profileYou.classList.toggle("display-none");
  }
};
buttonSend.addEventListener("click", fctButtonSend);

const functionOnclickResult = function (e) {
  //point class 10
  const valueSubject1Class10 = Number(
    document.querySelector(".class10_subject1").value
  );
  const valueSubject2Class10 = Number(
    document.querySelector(".class10_subject2").value
  );
  const valueSubject3Class10 = Number(
    document.querySelector(".class10_subject3").value
  );

  //point class 11
  const valueSubject1Class11 = Number(
    document.querySelector(".class11_subject1").value
  );
  const valueSubject2Class11 = Number(
    document.querySelector(".class11_subject2").value
  );
  const valueSubject3Class11 = Number(
    document.querySelector(".class11_subject3").value
  );

  //point class 12
  const valueSubject1Class12 = Number(
    document.querySelector(".class12_subject1").value
  );
  const valueSubject2Class12 = Number(
    document.querySelector(".class12_subject2").value
  );
  const valueSubject3Class12 = Number(
    document.querySelector(".class12_subject3").value
  );

  //point priorityzed
  const valuePointPriorityzed = Number(
    document.querySelector(".point_priorityzed-input").value
  );

  const fctMathValuePoint = function (subject1, subject2, subject3) {
    return (subject1 + subject2 + subject3) / 3;
  };
  const pointSubject1 = fctMathValuePoint(
    valueSubject1Class10,
    valueSubject1Class11,
    valueSubject1Class12
  );
  const pointSubject2 = fctMathValuePoint(
    valueSubject2Class10,
    valueSubject2Class11,
    valueSubject2Class12
  );
  const pointSubject3 = fctMathValuePoint(
    valueSubject3Class10,
    valueSubject3Class11,
    valueSubject3Class12
  );

  const mathResultAll = function (
    mediumSubject1,
    mediumSubject2,
    mediumSubject3,
    pointPriorityzed
  ) {
    return mediumSubject1 + mediumSubject2 + mediumSubject3 + pointPriorityzed;
  };
  const resultSchoolReport = mathResultAll(
    pointSubject1,
    pointSubject2,
    pointSubject3,
    valuePointPriorityzed
  );
  const resultAll = Math.round(resultSchoolReport * 10) / 10;
  if (
    !valueSubject1Class10 ||
    !valueSubject1Class11 ||
    !valueSubject1Class12 ||
    !valueSubject2Class10 ||
    !valueSubject2Class11 ||
    !valueSubject2Class12 ||
    !valueSubject3Class10 ||
    !valueSubject3Class11 ||
    !valueSubject3Class12
  ) {
    resultBox = document.querySelector(
      ".result_container_body-body"
    ).textContent = "?";
    alert("Bạn nhập còn thiếu dữ liệu, hãy kiểm tra lại 👌");
  } else {
    resultBox = document.querySelector(
      ".result_container_body-body"
    ).textContent = resultAll;
  }
};
result.addEventListener("click", functionOnclickResult);
