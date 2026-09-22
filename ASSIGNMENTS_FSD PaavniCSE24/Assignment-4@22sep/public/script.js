const form = document.getElementById("requestForm");

const requestsContainer =
    document.getElementById("requestsContainer");


// GET all requests
async function getRequests() {

    const response =
        await fetch("/api/requests");

    const requests =
        await response.json();

    displayRequests(requests);
}


// Display requests on webpage
function displayRequests(requests) {

    requestsContainer.innerHTML = "";

    if (requests.length === 0) {

        requestsContainer.innerHTML =
            "<p>No requests submitted yet.</p>";

        return;
    }

    requests.forEach(request => {

        const card =
            document.createElement("div");

        card.className = "request-card";

        card.innerHTML = `

            <h3>
                ${request.category}
                - ${request.priority}
            </h3>

            <p>
                <strong>Name:</strong>
                ${request.studentName}
            </p>

            <p>
                <strong>Email:</strong>
                ${request.email}
            </p>

            <p>
                <strong>Description:</strong>
                ${request.description}
            </p>

            <button
                class="edit-btn"
                onclick="editRequest(${request.id})">

                Edit

            </button>

            <button
                class="delete-btn"
                onclick="deleteRequest(${request.id})">

                Delete

            </button>
        `;

        requestsContainer.appendChild(card);
    });
}


// POST - Submit request
form.addEventListener("submit", async (event) => {

    event.preventDefault();

    const requestData = {

        studentName:
            document.getElementById("studentName").value,

        email:
            document.getElementById("email").value,

        category:
            document.getElementById("category").value,

        description:
            document.getElementById("description").value,

        priority:
            document.getElementById("priority").value
    };


    await fetch("/api/requests", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(requestData)
    });


    form.reset();

    getRequests();
});


// DELETE request
async function deleteRequest(id) {

    await fetch(`/api/requests/${id}`, {

        method: "DELETE"
    });

    getRequests();
}


// PUT - Edit request
async function editRequest(id) {

    const response =
        await fetch(`/api/requests/${id}`);

    const request =
        await response.json();


    const studentName =
        prompt(
            "Student Name:",
            request.studentName
        );

    const email =
        prompt(
            "Email:",
            request.email
        );

    const category =
        prompt(
            "Category:",
            request.category
        );

    const description =
        prompt(
            "Problem Description:",
            request.description
        );

    const priority =
        prompt(
            "Priority:",
            request.priority
        );


    await fetch(`/api/requests/${id}`, {

        method: "PUT",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({

            studentName,
            email,
            category,
            description,
            priority

        })
    });


    getRequests();
}


// Load requests when page opens
getRequests();