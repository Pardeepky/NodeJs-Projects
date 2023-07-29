async function onSignup(event) {
    event.preventDefault();

    const expense = event.target.Expense.value;
    const description = event.target.Description.value;
    const category = event.target.Category.value;

    myObj = {
        expense,
        description,
        category,
    };

    if (expense && description && category) {
        try {
            const response = await axios.post(
                "http://localhost:4000/createExpense",
                myObj
            );
            console.log(response);
            event.target.reset();
            onScreenFunction(response.data);
        } catch (error) {
            console.error(error);
        }
    }
}
document.addEventListener("DOMContentLoaded", async () => {
    try {
        const response = await axios.get("http://localhost:4000/getExpense");
        response.data.forEach((element) => {
            onScreenFunction(element);
        });
    } catch (err) {
        console.error(err);
    }
});

async function onScreenFunction(data) {
    const ul = document.getElementById("listOnScreen");

    const li = document.createElement("li");
    li.innerHTML = `Expense:${data.expense}   Description:${data.description}   Category:${data.category}`;

    const delBtn = document.createElement("input");
    delBtn.value = "Delete";
    delBtn.type = "button";
    delBtn.className = "bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white m-2 py-1 px-1 border border-blue-500 hover:border-transparent rounded"
    delBtn.onclick = async () => {
        try {
            await axios.delete(`http://localhost:4000/deleteExpense/${data.id}`);
            ul.removeChild(li);
        } catch (err) {
            console.error(err);
        }
    };

    const editBtn = document.createElement("input");
    editBtn.value = "Edit";
    editBtn.type = "button";
    editBtn.className = 'bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white m-2 py-1 px-1 border border-red-500 hover:border-transparent rounded'
    editBtn.onclick = async () => {
        try {
            await axios.delete(`http://localhost:4000/deleteExpense/${data.id}`);
            ul.removeChild(li);
        } catch (err) {
            console.error(err);
        }
        document.getElementById("Expense").value = data.expense;
        document.getElementById("Description").value = data.description;
        document.getElementById("Category").value = data.category;
    };

    li.appendChild(editBtn);
    li.appendChild(delBtn);
    ul.appendChild(li);
}