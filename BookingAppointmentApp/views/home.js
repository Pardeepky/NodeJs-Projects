async function onsignup(event) {
    event.preventDefault();

    const name = event.target.Name.value;
    const phone = event.target.Phone.value;
    const email = event.target.Email.value;

    myObj = {
        name,
        phone,
        email,
    };
    if (name && phone && email) {
        try {
            const response = await axios.post(
                "http://localhost:3000/createAppointment",
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
        const response = await axios.get("http://localhost:3000/getAppointments");
        console.log(response);
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
    li.innerHTML = `Name:${data.name}   Phone:${data.phone}   Email:${data.email}`;

    const delBtn = document.createElement("input");
    delBtn.value = "Delete";
    delBtn.type = "button";
    delBtn.onclick = async () => {
        try {
            await axios.delete(`http://localhost:3000/deleteAppointment/${data.id}`);
            ul.removeChild(li);
        } catch (err) {
            console.error(err);
        }
    };
    const editBtn = document.createElement("input");
    editBtn.value = "Edit";
    editBtn.type = "button";
    editBtn.onclick = async () => {
        try {
            await axios.delete(`http://localhost:3000/deleteAppointment/${data.id}`);
            ul.removeChild(li);
        } catch (err) {
            console.error(err);
        }
        document.getElementById("Name").value = data.name;
        document.getElementById("Phone").value = data.phone;
        document.getElementById("Email").value = data.email;
    };
    li.appendChild(editBtn);
    li.appendChild(delBtn);
    ul.appendChild(li);
}