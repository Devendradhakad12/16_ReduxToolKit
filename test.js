let todo = [{ id: 1, text: "hello" },{ id: 2, text: "namste" }];
 todo.filter((i) => i.id === 2)[0].text="gello"
todo = [...todo]
console.log(todo)