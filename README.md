# Inventory and Billing Management System

This project is a backend system to manage inventory and sales for a small shop. The system allows users to add items to the inventory, create bills for sales transactions, and update inventory accordingly.

## Features

- Add new items to the inventory
- Retrieve a list of all items in the inventory
- Create a bill for a sale transaction, specifying the items sold and quantities
- Retrieve a list of all bills
- Get details of a specific bill
- Automatically update the inventory when a bill is created

## Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB**
- **Mongoose**

## Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js**: [Download and install Node.js](https://nodejs.org/)
- **MongoDB**: [Download and install MongoDB](https://www.mongodb.com/try/download/community) or use a cloud-based MongoDB service like MongoDB Atlas
- **Git**: [Download and install Git](https://git-scm.com/) (optional but recommended)

## Getting Started

### 1. Clone the Repository

Clone this repository to your local machine:

```bash
git clone <repository-url>
```
Navigate into the project directory:

```bash
cd <project-directory>
```

### 2. Install Dependencies

Install the necessary dependencies using npm:

```bash
npm install
```

### 3. Configure Environment Variables

Create a .env file in the root of the project and add the following variables:

```bash
PORT=3000
DATABASE=mongodb+srv://ajoyscorpion:ajoy@cluster0.1shoa.mongodb.net/DeNada?retryWrites=true&w=majority&appName=Cluster0
```

### 4. Run the Application

To start the application, run:

```bash
npm start
```

For development with automatic restarts, use:

```bash
npm run dev
```

You should see the server start and connect to MongoDB:

```yaml
connected to mongodb
Port Started at : 3000
```
