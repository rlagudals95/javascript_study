function printMessage(text) {
  let message = text;
  if (text == null || text == undefined) {
    message = "Nothing to display";
  }
  console.log(message);
}

// good code

function printMessage(text) {
  const message = text ?? "Nothing to display"; // ?? => null or undefined인 경우
  // text || "Nothing to display"; >> false인 경우에 모두다 오른쪽 코드 출력
  console.log(message);
}

// 함수의 값이 null or undefined인 경우에도 활용가능

const result = getInitialState() ?? fetchFromServer();

function getInitialState() {
  return null;
}

function fetchFromServer() {
  return "hello";
}
