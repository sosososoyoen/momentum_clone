const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos"
let toDos = [];
//새로고침할 대마다 localStorage에 있는 값들을 업데이트하고 싶음

function saveToDos(){
    //localStorage에 toDos 내용들을 저장   
    localStorage.setItem("todos",JSON.stringify(toDos));
}
//JSON.stringify() : 자바스크립트 코드를 string으로 만들어줌

//x버튼을 클릭하면 todolist가 사라짐
function deleteToDo(event){
    //버튼을 클릭하면 그 버튼의 부모 요소인 li 요소가 지워짐
    const list = event.target.parentElement;
    list.remove();
    //배열을 다시 업데이트 (위에서 삭제한 항목을 제외한 것들만 배열에)
    //제외할 항목은 id를 통해 구분
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(list.id))
    //parseInt()으로 list.id를 number로 바꿔준다(안그러면 string으로 인식해서 필터가 제대로 안돌아감)
    saveToDos();
    //배열을 업데이트했으니 다시 localstorage에 저장! 
}

//밑에 todolist가 생김
function paintToDo(newTodo) {
    //li 생성
    const list = document.createElement("li")
    //li의 아이디 = 배열에 저장된 todo 항목의 아이디
    list.id = newTodo.id
    const span = document.createElement("span")
    const button = document.createElement("button");
    button.classList.add("material-icons");
    button.innerText = "close";
    button.addEventListener("click", deleteToDo)
    list.appendChild(span);
    list.appendChild(button);
    span.innerText = newTodo.text;
    toDoList.appendChild(list);
}


//form 이벤트
function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo =toDoInput.value;
    toDoInput.value = "";
    //배열에 newtodo 저장
    //삭제할 때 구분할 수 있게 각 값마다 id를 설정해줄거임
    const newTodoObj = {
        text: newTodo,
        id: Date.now()
        //Date.now() 현재 시각을 밀리세컨드단위까지 숫자로 보여줌
    }
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit",handleToDoSubmit)

//localstorage에서 값을 가져옴 
const savedToDos = localStorage.getItem(TODOS_KEY);
//값이 없을 때
if(savedToDos !== null) {
    //JSON.parse() : string을 array로  
    //storage에 저장된 값을 가져옴
    const parsedToDos = JSON.parse(savedToDos);
    //toDos 배열에 저장된 값을 집어넣음
    toDos = parsedToDos;
    //toDos에 
    parsedToDos.forEach(paintToDo);
        
    
}
//forEach array의 각 item에 대해 function을 실행하게 해줌
//item:
//forEach: