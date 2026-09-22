import express from "express";
import fs from "fs";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static("public"));

const file = "requests.json";

// Read data from requests.json
function readRequests() {
    const data = fs.readFileSync(file, "utf-8");
    return JSON.parse(data);
}

// Write data to requests.json
function writeRequests(requests) {
    fs.writeFileSync(
        file,
        JSON.stringify(requests, null, 2)
    );
}


// GET - Get all requests
app.get("/api/requests", (req, res) => {

    const requests = readRequests();

    res.json(requests);
});


// GET - Get request by ID
app.get("/api/requests/:id", (req, res) => {

    const requests = readRequests();

    const id = parseInt(req.params.id);

    const request = requests.find(
        item => item.id === id
    );

    if (!request) {
        return res.status(404).json({
            message: "Request not found"
        });
    }

    res.json(request);
});


// POST - Add new request
app.post("/api/requests", (req, res) => {

    const requests = readRequests();

    const newRequest = {
        id: Date.now(),
        studentName: req.body.studentName,
        email: req.body.email,
        category: req.body.category,
        description: req.body.description,
        priority: req.body.priority
    };

    requests.push(newRequest);

    writeRequests(requests);

    res.status(201).json(newRequest);
});


// PUT - Update request
app.put("/api/requests/:id", (req, res) => {

    const requests = readRequests();

    const id = parseInt(req.params.id);

    const index = requests.findIndex(
        item => item.id === id
    );

    if (index === -1) {
        return res.status(404).json({
            message: "Request not found"
        });
    }

    requests[index] = {
        ...requests[index],
        ...req.body,
        id: requests[index].id
    };

    writeRequests(requests);

    res.json(requests[index]);
});


// DELETE - Delete request
app.delete("/api/requests/:id", (req, res) => {

    const requests = readRequests();

    const id = parseInt(req.params.id);

    const newRequests = requests.filter(
        item => item.id !== id
    );

    if (newRequests.length === requests.length) {
        return res.status(404).json({
            message: "Request not found"
        });
    }

    writeRequests(newRequests);

    res.json({
        message: "Request deleted successfully"
    });
});


// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});