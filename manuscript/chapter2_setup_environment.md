# Chapter 2: Setting Up Your Development Environment

A well-configured development environment is essential for a seamless workflow, especially when building complex applications involving backend, frontend, and AI components. In this chapter, we will guide you through setting up your environment to work with various frameworks and tools discussed in this book.

---

## 1. Importance of a Proper Development Environment

A good development environment ensures:
- **Consistency:** All team members work in a standardized setup.
- **Efficiency:** Reduced time troubleshooting environment-related issues.
- **Scalability:** Easy replication of the environment for production.

---

## 2. Tools and Prerequisites

Before diving into framework-specific setups, ensure you have the following tools installed:

### General Tools:
1. **Python (Version 3.8 or higher)**
   - Download from [python.org](https://www.python.org/).
   - Verify installation:
     ```bash
     python --version
     ```

2. **Node.js and npm**
   - Download from [nodejs.org](https://nodejs.org/).
   - Verify installation:
     ```bash
     node --version
     npm --version
     ```

3. **Java (JDK 11 or higher)**
   - Download from [Oracle](https://www.oracle.com/java/technologies/javase-downloads.html) or [OpenJDK](https://openjdk.org/).
   - Verify installation:
     ```bash
     java -version
     ```

4. **Docker**
   - Install from [docker.com](https://www.docker.com/).
   - Verify installation:
     ```bash
     docker --version
     ```

5. **Integrated Development Environment (IDE):**
   - VS Code, PyCharm, IntelliJ IDEA, or your preferred IDE.

---

## 3. Framework-Specific Setup

### **3.1 Flask (Python)**

Below is a simple setup example for Flask:

```python
from flask import Flask

app = Flask(__name__)

@app.route("/")
def home():
    return "Hello, Flask Setup!"

if __name__ == "__main__":
    app.run(debug=True)
```

### Steps:
1. Save the code above as `flask_setup_example.py`.
2. Run the application:
   ```bash
   python flask_setup_example.py
   ```
3. Open [http://127.0.0.1:5000](http://127.0.0.1:5000) in your browser to see the output.

The full code is available here:
[flask_setup_example.py](../code/chapter2/flask_setup_example.py)

---

### **3.2 FastAPI (Python)**

Below is a simple setup example for FastAPI:

```python
from fastapi import FastAPI

app = FastAPI()

@app.get("/")
async def read_root():
    return {"message": "Hello, FastAPI Setup!"}
```

### Steps:
1. Save the code above as `fastapi_setup_example.py`.
2. Run the application:
   ```bash
   uvicorn fastapi_setup_example:app --reload
   ```
3. Open [http://127.0.0.1:8000](http://127.0.0.1:8000) in your browser to see the output.

The full code is available here:
[fastapi_setup_example.py](../code/chapter2/fastapi_setup_example.py)

---

### **3.3 Spring Boot (Java)**

Below is a simple setup example for Spring Boot:

1. Create a project using [Spring Initializr](https://start.spring.io/).
2. Add the following code in the main application class:
   ```java
   import org.springframework.boot.SpringApplication;
   import org.springframework.boot.autoconfigure.SpringBootApplication;
   import org.springframework.web.bind.annotation.GetMapping;
   import org.springframework.web.bind.annotation.RestController;

   @SpringBootApplication
   public class Application {
       public static void main(String[] args) {
           SpringApplication.run(Application.class, args);
       }

       @RestController
       class HelloController {
           @GetMapping("/")
           public String home() {
               return "Hello, Spring Boot Setup!";
           }
       }
   }
   ```
3. Run the application using:
   ```bash
   ./mvnw spring-boot:run
   ```

The full project setup can be accessed here:
[springboot_setup_example](../code/chapter2/springboot_setup_example/)

---

### **3.4 Node.js with Express.js**

Below is a simple setup example for Express.js:

```javascript
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello, Express Setup!');
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
```

### Steps:
1. Save the code above as `express_setup_example.js`.
2. Install Express.js:
   ```bash
   npm install express
   ```
3. Run the application:
   ```bash
   node express_setup_example.js
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the output.

The full code is available here:
[express_setup_example.js](../code/chapter2/express_setup_example.js)

---

## 4. Common Issues and Troubleshooting

1. **Python Virtual Environment Issues:**
   - Activate the virtual environment before installing dependencies:
     ```bash
     source myenv/bin/activate   # Linux/Mac
     myenv\Scripts\activate     # Windows
     ```

2. **Port Conflicts:**
   - If a port is in use, specify a new port (e.g., `app.run(port=8080)` in Flask).

3. **Node.js Errors:**
   - Ensure `node_modules` is installed:
     ```bash
     npm install
     ```

---

By the end of this chapter, your development environment should be ready to handle the examples and projects in this book. Let’s move on to exploring the fundamentals of backend development!
