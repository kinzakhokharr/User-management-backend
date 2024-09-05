const express = require("express");
const router = express.Router();

let users = [
  { id: 1, name: "Kinza Khokhar", email: "kinza@example.com", role: "Fullstack Developer" },
  { id: 2, name: "John Doe", email: "john@example.com", role: "Backend Developer" },
];

// Get all users
router.get("/", (req, res) => {
  res.json(users);
});

// Get by User Id
router.get("/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find((u) => u.id === userId);

  if (user) {
    res.json(user);
  } else {
    res.status(404).json({
      message: "User not Found!",
    });
  }
});

// Post (create ) user

router.post("/", (req, res) => {
  const { name, email, role } = req.body;

  if (!name || !email || !role) {
    return res.send(400).json({
      message: "Name, email and Role are Required",
    });
  }

  const newUser = {
    id: users.length + 1,
    name,
    email,
    role,
  };

  users.push(newUser);
  res.status(201).json(newUser);
});


// PUT (update) user by ID
router.put('/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const { name, email, role } = req.body;
  const userIndex = users.findIndex(u => u.id === userId);

  if (userIndex !== -1) {
    users[userIndex] = { id: userId, name, email, role };  // Update user data
    res.json({ message: 'User updated successfully', user: users[userIndex] });
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});




// DELETE user by ID
router.delete('/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const userIndex = users.findIndex(u => u.id === userId);

  if (userIndex !== -1) {
    users.splice(userIndex, 1);  // Remove user from the array
    res.json({ message: 'User deleted successfully' });
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});










module.exports = router;
