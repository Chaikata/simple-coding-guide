export type ContentBlock = {
  type: "paragraph" | "code";
  value: string;
};

export type Article = {
  slug: string;
  title: string;
  language: string;
  type: string;
  description: string;
  content: ContentBlock[];
};

export const articles: Article[] = [
  {
    "slug": "introduction-to-javascript-variables-and-data-types",
    "title": "Introduction to JavaScript Variables and Data Types",
    "language": "javascript",
    "type": "tutorials",
    "description": "Learn the basics of variables and data types in JavaScript, including how to declare variables and understand different data types.",
    "content": [
      {
        "type": "paragraph",
        "value": "JavaScript is a popular programming language used to make web pages interactive. One of the first things you need to learn in JavaScript is how to use variables and understand different data types. Variables are like containers that store information you can use and change in your program."
      },
      {
        "type": "paragraph",
        "value": "In JavaScript, you can declare variables using the keywords var, let, or const. The most common and modern way is to use let for variables that may change, and const for values that won't change. JavaScript supports several data types including numbers, strings (text), booleans (true/false), objects, and more."
      },
      {
        "type": "code",
        "value": "let name = 'Alice';  // string type\nconst age = 25;       // number type\nlet isStudent = true; // boolean type\n\nconsole.log(name);    // Output: Alice\nconsole.log(age);     // Output: 25\nconsole.log(isStudent); // Output: true"
      },
      {
        "type": "paragraph",
        "value": "To summarize, variables are named containers for storing data values. Using let or const, you can create variables of different data types such as strings, numbers, and booleans. Understanding variables and data types is fundamental to writing effective JavaScript programs."
      }
    ]
  },
  {
    "slug": "how-to-write-your-first-javascript-function",
    "title": "How to Write Your First JavaScript Function",
    "language": "javascript",
    "type": "tutorials",
    "description": "A beginner-friendly guide to creating simple functions in JavaScript.",
    "content": [
      {
        "type": "paragraph",
        "value": "Functions are one of the most important building blocks in JavaScript. They allow you to group code into reusable blocks, so you can run the same set of instructions whenever you want without rewriting the code. In this tutorial, you will learn how to write your very first JavaScript function."
      },
      {
        "type": "paragraph",
        "value": "A function in JavaScript is defined using the function keyword, followed by a name, parentheses (), and curly braces {}. Inside the curly braces, you write the code you want to run each time the function is called. Functions can also accept inputs, called parameters, and can return a value back to where they were called."
      },
      {
        "type": "code",
        "value": "function greet() {\n  console.log('Hello, world!');\n}\n\ngreet(); // This calls the function and prints 'Hello, world!'"
      },
      {
        "type": "paragraph",
        "value": "In the example above, the function greet is defined to print 'Hello, world!' to the console. You call the function by writing its name followed by parentheses. This runs the code inside the function. If you forget the parentheses, like just writing greet, the function won't run — it will only refer to the function definition itself."
      }
    ]
  },
  {
    "slug": "getting-started-with-typescript-setup-and-installation",
    "title": "Getting Started with TypeScript Setup and Installation",
    "language": "typescript",
    "type": "tutorials",
    "description": "Learn how to set up and install TypeScript for your first project, including fixing common errors.",
    "content": [
      {
        "type": "paragraph",
        "value": "TypeScript is a powerful programming language that builds on JavaScript by adding static types. This helps catch errors earlier and makes coding more efficient. In this tutorial, you'll learn how to install and set up TypeScript on your computer and create your very first TypeScript file."
      },
      {
        "type": "paragraph",
        "value": "First, you need to have Node.js installed, as TypeScript uses npm (Node Package Manager) to install packages. After confirming Node.js is installed, you can install the TypeScript compiler globally by running 'npm install -g typescript'. This allows you to use the 'tsc' command to compile TypeScript files into JavaScript."
      },
      {
        "type": "code",
        "value": "npm install -g typescript\n\nts --version\n// This command checks if TypeScript was installed correctly by printing the version number\n\n// Create a file named 'hello.ts' with the following content:\n\nconst message: string = 'Hello, TypeScript!';\nconsole.log(message);"
      },
      {
        "type": "paragraph",
        "value": "Once you have the 'hello.ts' file, compile it by running 'tsc hello.ts' in your terminal. This generates a 'hello.js' file you can run with Node.js using 'node hello.js'. If you encounter errors like 'tsc: command not found', it means TypeScript was either not installed correctly or your system's PATH variable does not include the npm global packages folder. Reinstall TypeScript or add the npm global directory to your PATH to fix this."
      }
    ]
  },
  {
    "slug": "understanding-basic-types-in-typescript-for-beginners",
    "title": "Understanding Basic Types in TypeScript for Beginners",
    "language": "typescript",
    "type": "tutorials",
    "description": "Learn the fundamental types in TypeScript and how to use them to write safer and clearer code.",
    "content": [
      {
        "type": "paragraph",
        "value": "TypeScript is a powerful programming language that builds on JavaScript by adding static types. These types help you catch errors early and make your code more readable. In this tutorial, we'll explore the basic types in TypeScript to get you started."
      },
      {
        "type": "paragraph",
        "value": "TypeScript provides several primitive types including number, string, boolean, and more. When you declare a variable with a specific type, TypeScript ensures you only use values matching that type. For example, if you declare a variable as a string, TypeScript will show an error if you try to assign a number to it."
      },
      {
        "type": "code",
        "value": "let age: number = 25;\nlet name: string = \"Alice\";\nlet isStudent: boolean = true;\n\n// This will cause an error:\n// age = \"twenty-five\"; // Error: Type 'string' is not assignable to type 'number'."
      },
      {
        "type": "paragraph",
        "value": "If you see the error 'Type 'string' is not assignable to type 'number'', it means you tried to assign a value of the wrong type to a variable. TypeScript expects a number but got a string instead. To fix this, make sure your variable is assigned a value matching its declared type. This helps prevent bugs caused by unintended value types."
      },
      {
        "type": "paragraph",
        "value": "Besides these basic types, TypeScript has others like any, which disables type checking (use with caution), arrays, tuples, and enums. Mastering basic types is the first step to writing strong, maintainable TypeScript code."
      }
    ]
  },
  {
    "slug": "how-to-fix-indentationerror-in-python",
    "title": "How to Fix IndentationError in Python",
    "language": "python",
    "type": "errors",
    "description": "Learn what IndentationError means in Python, why it happens, and how to fix it with simple examples.",
    "content": [
      {
        "type": "paragraph",
        "value": "Indentation is very important in Python because it tells the interpreter which lines of code belong together. If the indentation is incorrect, Python will raise an IndentationError. This error can be confusing for beginners, but it’s easy to fix once you understand what causes it."
      },
      {
        "type": "paragraph",
        "value": "An IndentationError happens when the spaces or tabs at the beginning of a line are not consistent or when a block of code is not properly indented. Python uses indentation to group statements into blocks like loops, functions, and conditionals. If the indentation level does not match what Python expects, it will raise this error."
      },
      {
        "type": "code",
        "value": "def greet():\nprint(\"Hello, world!\")  # This line causes IndentationError\n\ngreet()"
      },
      {
        "type": "paragraph",
        "value": "In the example above, the line that prints \"Hello, world!\" should be indented to show that it is inside the function greet(). To fix the IndentationError, add four spaces (or a tab, but be consistent) before the print statement:"
      },
      {
        "type": "code",
        "value": "def greet():\n    print(\"Hello, world!\")  # Correct indentation\n\ngreet()"
      },
      {
        "type": "paragraph",
        "value": "Remember to use the same type of indentation (spaces or tabs) consistently throughout your code. Most Python style guides recommend using 4 spaces per indentation level. Proper indentation helps keep your code organized and avoids IndentationErrors."
      }
    ]
  },
  {
    "slug": "troubleshooting-nameerror-python-beginners",
    "title": "Troubleshooting NameError in Python Beginners",
    "language": "python",
    "type": "errors",
    "description": "Learn what the NameError is, why it occurs, and how to fix it in Python programming.",
    "content": [
      {
        "type": "paragraph",
        "value": "If you are new to Python programming, you might come across an error called NameError. This error happens when Python does not recognize a name that you have used in your code. Understanding this error can help you write better programs without confusion."
      },
      {
        "type": "paragraph",
        "value": "A NameError occurs when you try to use a variable or function name that has not been defined or spelled correctly. Python looks for the name in the current program but cannot find it. This usually means you forgot to create the variable, made a typo, or are trying to use it before defining it."
      },
      {
        "type": "code",
        "value": "print(message)\n\n# This will cause a NameError because 'message' was not defined before using it.\n\nmessage = 'Hello, world!'\nprint(message)\n\n# Correct way: define the variable before using it."
      },
      {
        "type": "paragraph",
        "value": "To fix a NameError, make sure that every name you use is spelled correctly and defined before you use it in your code. If you get this error, check your variables and functions for mistakes, and ensure that they are properly created. This simple step keeps your code running smoothly."
      }
    ]
  },
  {
    "slug": "how-to-fix-sql-syntax-errors-for-beginners",
    "title": "How to Fix SQL Syntax Errors for Beginners",
    "language": "sql",
    "type": "errors",
    "description": "Learn common SQL syntax errors, what they mean, why they happen, and how to fix them with simple examples.",
    "content": [
      {
        "type": "paragraph",
        "value": "SQL syntax errors occur when the database cannot understand the command you have written because it does not follow the correct grammar rules of SQL. This is similar to making a spelling or grammar mistake in a sentence. For beginners, understanding these errors is crucial to writing effective SQL queries."
      },
      {
        "type": "paragraph",
        "value": "One common syntax error is a missing keyword or clause, such as forgetting \"FROM\" in a SELECT statement. Another is using incorrect punctuation, like missing commas or semicolons. For example, if you forget to include the table name after SELECT columns, the database will throw a syntax error. To fix these errors, carefully check your query for missing or misspelled keywords and ensure punctuation is used correctly."
      },
      {
        "type": "code",
        "value": "SELECT name, age\n-- Missing FROM keyword and table name\n\n-- Incorrect corrected query:\nSELECT name, age FROM users;"
      },
      {
        "type": "paragraph",
        "value": "To avoid SQL syntax errors, always double-check your keywords, punctuation, and query structure. Use a SQL editor with syntax highlighting and error messages to help quickly identify problems. With practice, you will become more comfortable writing correct SQL queries and understanding error messages."
      }
    ]
  },
  {
    "slug": "common-sql-connection-errors-and-how-to-resolve-them",
    "title": "Common SQL Connection Errors and How to Resolve Them",
    "language": "sql",
    "type": "errors",
    "description": "Learn about common SQL connection errors, what they mean, why they happen, and how to fix them.",
    "content": [
      {
        "type": "paragraph",
        "value": "Connecting to an SQL database is a fundamental step for developers working with data. However, beginners often run into connection errors that can be confusing. This article will help you understand some of the common SQL connection errors, why they occur, and how to fix them."
      },
      {
        "type": "paragraph",
        "value": "One common error is the \"Login failed for user\" error. It usually occurs when the username or password you use to connect to the database is incorrect or if the user does not have permission to access the database. To fix this, verify your credentials and ensure the user has the right permissions."
      },
      {
        "type": "code",
        "value": "/* Example of a connection string in SQL Server */\n-- Replace SERVER_NAME, DATABASE_NAME, USERNAME, and PASSWORD with your details\nDECLARE @conn_string NVARCHAR(4000) = 'Server=SERVER_NAME;Database=DATABASE_NAME;User Id=USERNAME;Password=PASSWORD;';\n-- Use this connection string in your application code"
      },
      {
        "type": "paragraph",
        "value": "Another frequent issue is the \"Cannot connect to server\" error. This happens when the SQL server is not reachable. It can be caused by network issues, incorrect server name, or the SQL Server service being stopped. Check your server name, ensure your network connection is stable, and make sure the SQL Server service is running."
      },
      {
        "type": "paragraph",
        "value": "A third error beginners may encounter is \"Timeout expired\" which means the connection attempt took too long and was aborted. This could be caused by server overload, slow network, or incorrect connection settings. Try increasing the timeout duration in your connection string or investigate any network delays."
      },
      {
        "type": "paragraph",
        "value": "Lastly, the \"SSL-related error\" sometimes appears if your connection requires encrypted communication but SSL is not properly configured. To fix this, ensure that your SQL Server supports SSL, and your client is set to use encryption."
      },
      {
        "type": "paragraph",
        "value": "Understanding these common SQL connection errors will make your debugging process easier and help you create stable database connections. Always double-check your credentials, server settings, network status, and security configurations to prevent these errors."
      }
    ]
  },
  {
    "slug": "javascript-basics-for-absolute-beginners",
    "title": "JavaScript Basics for Absolute Beginners",
    "language": "javascript",
    "type": "tutorials",
    "description": "Learn the foundational concepts of JavaScript with easy examples and explanations.",
    "content": [
      {
        "type": "paragraph",
        "value": "JavaScript is one of the most popular programming languages, mainly used to add interactivity to web pages. If you have never coded before, this tutorial will help you understand the very basics of JavaScript and get started with writing simple programs."
      },
      {
        "type": "paragraph",
        "value": "In JavaScript, you use variables to store data, like numbers or text. You can create variables using keywords like 'let' or 'const'. Here is a simple example that shows how to declare variables and output them."
      },
      {
        "type": "code",
        "value": "let name = \"Alice\";\nconst age = 25;\nconsole.log(\"Name:\", name);\nconsole.log(\"Age:\", age);"
      },
      {
        "type": "paragraph",
        "value": "In the above code, 'let name = \"Alice\";' creates a variable named 'name' and stores the text \"Alice\". We use 'const' for 'age' which means this value should not change later. The 'console.log()' function prints the values to the console, which is a place in your browser or code editor where you can see the output. Getting comfortable with variables and output will help you understand more complex topics in JavaScript."
      }
    ]
  },
  {
    "slug": "how-to-fix-undefined-is-not-a-function-error-in-javascript",
    "title": "How to Fix 'undefined is not a function' Error in JavaScript",
    "language": "javascript",
    "type": "errors",
    "description": "Learn what causes the 'undefined is not a function' error in JavaScript and how to fix it with simple examples.",
    "content": [
      {
        "type": "paragraph",
        "value": "When you start coding in JavaScript, you might encounter errors that can be confusing. One common error is \"undefined is not a function.\" This error means that you are trying to call something as a function, but JavaScript does not recognize it as a function."
      },
      {
        "type": "paragraph",
        "value": "This error usually happens when you try to call a method or function on a variable that is either undefined or does not actually have that method. For example, this can occur if you misspell a function name, forget to assign a function to a variable, or try to use a method that doesn't exist on an object."
      },
      {
        "type": "code",
        "value": "let greeting;\ngreeting(); // Error: undefined is not a function\n\n// Fix by assigning a function:\ngreeting = function() {\n  console.log('Hello!');\n};\ngreeting(); // This works and prints 'Hello!'"
      },
      {
        "type": "paragraph",
        "value": "To fix this error, always double-check that the variable you are calling is indeed a function. Make sure you spelled the function name correctly and that the function is properly assigned before you call it. Also, confirm that the methods you use exist on the objects you are working with."
      }
    ]
  },
  {
    "slug": "getting-started-with-typescript-for-beginners",
    "title": "Getting Started with TypeScript for Beginners",
    "language": "typescript",
    "type": "tutorials",
    "description": "A beginner-friendly guide to understanding and using TypeScript in your projects.",
    "content": [
      {
        "type": "paragraph",
        "value": "TypeScript is a programming language developed and maintained by Microsoft. It is a superset of JavaScript, which means it builds on JavaScript by adding static types. This helps you catch errors during development, making your code easier to understand and less error-prone."
      },
      {
        "type": "paragraph",
        "value": "In TypeScript, you can declare types for variables, function parameters, and return values. For example, instead of just using 'let name = \"John\"', you can specify 'let name: string = \"John\";'. This tells TypeScript that 'name' should only hold a string value. If you try to assign a different type, TypeScript will show an error."
      },
      {
        "type": "code",
        "value": "function greet(name: string): string {\n  return 'Hello, ' + name + '!';\n}\n\nlet userName: string = 'Alice';\nconsole.log(greet(userName));"
      },
      {
        "type": "paragraph",
        "value": "If you try to pass a number instead of a string to the 'greet' function, TypeScript will show an error. For example, calling 'greet(42)' will raise the error: 'Argument of type 'number' is not assignable to parameter of type 'string'.' This means that the function expects a string, but you gave it a number. To fix this, make sure you pass the correct type."
      },
      {
        "type": "paragraph",
        "value": "Starting with TypeScript helps improve your coding skills by making your intentions clear and reducing bugs. By adding simple type annotations and leveraging TypeScript's error checking, you can build reliable and maintainable applications more confidently."
      }
    ]
  },
  {
    "slug": "how-to-fix-cannot-find-name-error-in-typescript",
    "title": "How to Fix 'Cannot find name' Error in TypeScript",
    "language": "typescript",
    "type": "errors",
    "description": "Learn what the 'Cannot find name' error means in TypeScript, why it occurs, and simple ways to fix it.",
    "content": [
      {
        "type": "paragraph",
        "value": "When you start writing TypeScript code, you might encounter the error message 'Cannot find name'. This error can be confusing for beginners because it doesn't always tell you exactly what is wrong. In this article, we will explore what this error means, why it happens, and how you can fix it easily."
      },
      {
        "type": "paragraph",
        "value": "The 'Cannot find name' error occurs when TypeScript encounters a word (usually a variable, function, or type name) that it doesn't recognize. This can happen for several reasons: the name has not been declared or imported, there is a typo, or you forgot to install type definitions for external libraries. Essentially, TypeScript is telling you it doesn't know what this name refers to and can't use it."
      },
      {
        "type": "code",
        "value": "function greet() {\n  console.log(message);\n}\n\ngreet();"
      },
      {
        "type": "paragraph",
        "value": "In the example above, if you run TypeScript, it will say 'Cannot find name 'message''. This is because 'message' is used but never declared. To fix this, you should declare 'message' before using it, like this:"
      },
      {
        "type": "code",
        "value": "const message = \"Hello, world!\";\n\nfunction greet() {\n  console.log(message);\n}\n\ngreet();"
      },
      {
        "type": "paragraph",
        "value": "To summarize, the 'Cannot find name' error in TypeScript means the compiler can't find a declaration for the name you used. To fix this error, check for typos, declare the missing variables or functions, and if the name comes from an external library, make sure you have installed and imported the necessary type definitions. With these steps, you can quickly resolve the error and continue coding smoothly."
      }
    ]
  },
  {
    "slug": "introduction-to-python-variables-and-data-types",
    "title": "Introduction to Python Variables and Data Types",
    "language": "python",
    "type": "tutorials",
    "description": "Learn the basics of Python variables and data types to get started with programming.",
    "content": [
      {
        "type": "paragraph",
        "value": "When you start programming in Python, one of the first concepts to understand is variables and data types. Variables are like containers that store information, and data types tell Python what kind of information is stored."
      },
      {
        "type": "paragraph",
        "value": "In Python, you don't need to declare the type of a variable explicitly. You just assign a value to a variable, and Python figures out the data type automatically. Common data types include integers (whole numbers), floats (decimal numbers), strings (text), and booleans (True or False)."
      },
      {
        "type": "code",
        "value": "age = 25\nprice = 19.99\nname = \"Alice\"\nis_student = True\n\nprint(type(age))      # Output: <class 'int'>\nprint(type(price))    # Output: <class 'float'>\nprint(type(name))     # Output: <class 'str'>\nprint(type(is_student))  # Output: <class 'bool'>"
      },
      {
        "type": "paragraph",
        "value": "Sometimes, you might see an error like 'NameError: name 'x' is not defined'. This means you tried to use a variable before giving it a value. To fix it, make sure you assign a value to the variable before using it. For example, writing 'x = 10' before using 'x' in the code will prevent this error."
      },
      {
        "type": "paragraph",
        "value": "Understanding variables and data types is the foundation of programming in Python. After you feel comfortable with these concepts, you'll be able to store, manipulate, and use data efficiently in your programs."
      }
    ]
  },
  {
    "slug": "how-to-fix-syntaxerror-in-python-for-beginners",
    "title": "How to Fix SyntaxError in Python for Beginners",
    "language": "python",
    "type": "errors",
    "description": "A simple guide to understand and fix SyntaxError in Python programming.",
    "content": [
      {
        "type": "paragraph",
        "value": "When you start coding in Python, you might encounter an error called SyntaxError. This error means that there is a problem with the way you've written your code. Python could not understand it because the rules of the language were not followed properly."
      },
      {
        "type": "paragraph",
        "value": "A SyntaxError usually happens because of missing punctuation, incorrect indentation, or using Python keywords wrongly. For example, forgetting a colon at the end of a loop or function definition will cause this error. Python points to where it detected the problem, which helps you find and fix the mistake."
      },
      {
        "type": "code",
        "value": "for i in range(5)\n    print(i)"
      },
      {
        "type": "paragraph",
        "value": "In the example above, the code is missing a colon at the end of the for loop line. Python expects a colon ':' to know that the block of code is starting. To fix it, you simply add the colon like this: for i in range(5): print(i). Once fixed, the program will run without SyntaxError."
      }
    ]
  },
  {
    "slug": "introduction-to-sql-for-absolute-beginners",
    "title": "Introduction to SQL for Absolute Beginners",
    "language": "sql",
    "type": "tutorials",
    "description": "A beginner-friendly introduction to SQL, covering basic concepts and simple queries.",
    "content": [
      {
        "type": "paragraph",
        "value": "SQL, or Structured Query Language, is a powerful tool used to communicate with databases. It lets you create, read, update, and delete data stored in tables. If you are new to SQL, this tutorial will guide you through the basics so you can get started with writing simple queries."
      },
      {
        "type": "paragraph",
        "value": "The most common SQL commands you'll use are SELECT, INSERT, UPDATE, and DELETE. SELECT lets you retrieve data from a database. Databases organize data in tables, which are like spreadsheets with rows and columns. Each row represents a record, and each column represents a piece of information about that record."
      },
      {
        "type": "code",
        "value": "SELECT * FROM users;\n\n-- This query retrieves all columns (*) from the 'users' table."
      },
      {
        "type": "paragraph",
        "value": "This example query selects all data from a table named 'users'. If you run this query and see an error saying \"table not found,\" it means the database doesn't have a table named 'users'. To fix it, check your table name spelling or create the table first using a CREATE TABLE statement."
      }
    ]
  },
  {
    "slug": "troubleshooting-common-sql-connection-issues",
    "title": "Troubleshooting Common SQL Connection Issues",
    "language": "sql",
    "type": "errors",
    "description": "Learn how to identify, understand, and fix common SQL connection problems in beginner-friendly steps.",
    "content": [
      {
        "type": "paragraph",
        "value": "Connecting to a SQL database is one of the first steps in working with databases, but sometimes connection issues can arise. These problems can be frustrating for beginners. This article will help you understand the common SQL connection errors, why they happen, and how to fix them."
      },
      {
        "type": "paragraph",
        "value": "One common error is the 'Login failed for user' message. This usually means the username or password provided is incorrect or the user does not have permission to access the database. Another frequent problem is 'Cannot connect to server' which happens when the SQL server is not reachable due to network configuration, server not running, or wrong server address. Finally, the error 'Timeout expired' occurs when the connection attempt takes too long, possibly due to network issues or server overload."
      },
      {
        "type": "code",
        "value": "/* Example of a basic SQL Server connection string in T-SQL */\n-- Make sure to replace 'ServerName', 'DatabaseName', 'User', and 'Password' with your own info\n-- This string is used by your application to connect to SQL Server\n\nServer=ServerName;Database=DatabaseName;User Id=User;Password=Password;\n\n-- If you see an error here, check the username and password or server address."
      },
      {
        "type": "paragraph",
        "value": "To fix these issues, first verify your login credentials and permissions. Ensure the SQL server is running and the server name or IP address is correct. Check your network connection and firewall settings to confirm the SQL server port is open (default is 1433). Finally, increasing the connection timeout value might help if the network is slow. Understanding these causes and solutions will help you quickly troubleshoot and resolve SQL connection problems."
      }
    ]
  },
  {
    "slug": "how-to-write-your-first-javascript-program",
    "title": "How to Write Your First JavaScript Program",
    "language": "javascript",
    "type": "tutorials",
    "description": "A simple guide for beginners to write their first JavaScript program and understand basic concepts.",
    "content": [
      {
        "type": "paragraph",
        "value": "JavaScript is a popular programming language used to make web pages interactive. This tutorial will help you write your very first JavaScript program step by step, even if you have never coded before."
      },
      {
        "type": "paragraph",
        "value": "We will start by writing a simple program that displays a greeting message. To run JavaScript code, you can use a web browser's console or create an HTML file. The basic command to show a message is `console.log()`. This function prints the message to the console."
      },
      {
        "type": "code",
        "value": "console.log('Hello, world!');"
      },
      {
        "type": "paragraph",
        "value": "When you run this code, the message 'Hello, world!' appears in the console. If you see an error like 'console is not defined', it usually means your environment doesn't support it (for example, if you mistakenly used a JavaScript environment other than a browser or Node.js). Make sure to run the code inside a browser console or Node.js. This simple program is the first step towards writing more complex JavaScript code."
      }
    ]
  },
  {
    "slug": "how-to-fix-uncaught-referenceerror-in-javascript",
    "title": "How to Fix Uncaught ReferenceError in JavaScript",
    "language": "javascript",
    "type": "errors",
    "description": "Learn what Uncaught ReferenceError means in JavaScript, why it happens, and how to fix it with simple examples.",
    "content": [
      {
        "type": "paragraph",
        "value": "If you are new to JavaScript, you might have seen an error message that says Uncaught ReferenceError. This error can be confusing, but it is very common and easy to fix once you understand what it means."
      },
      {
        "type": "paragraph",
        "value": "An Uncaught ReferenceError happens when your code tries to use a variable or function that hasn't been declared or is not available in the current scope. JavaScript can't find the name you're referencing, so it throws this error. Common causes include typos in variable names, trying to use variables before declaring them, or forgetting to include external scripts."
      },
      {
        "type": "code",
        "value": "console.log(myVar);\n// Uncaught ReferenceError: myVar is not defined\n\nlet myVar = 10;\nconsole.log(myVar); // This works because myVar is declared"
      },
      {
        "type": "paragraph",
        "value": "To fix Uncaught ReferenceError, first check if the variable or function is spelled correctly. Then make sure it is declared before you use it. If the code depends on external scripts, ensure they are properly loaded. By following these steps, you can prevent this error and make your code run smoothly."
      }
    ]
  },
  {
    "slug": "how-to-set-up-typescript-in-your-project",
    "title": "How to Set Up TypeScript in Your Project",
    "language": "typescript",
    "type": "tutorials",
    "description": "A beginner-friendly guide to get started with TypeScript in your coding projects.",
    "content": [
      {
        "type": "paragraph",
        "value": "TypeScript is a powerful language that builds on JavaScript by adding static types. It helps catch errors early and makes your code easier to understand. In this tutorial, we'll walk through how to set up TypeScript in a new or existing project."
      },
      {
        "type": "paragraph",
        "value": "First, you need to install TypeScript and create a configuration file. The configuration file (tsconfig.json) tells the TypeScript compiler how to process your code. We'll also look at a simple example to confirm everything is working."
      },
      {
        "type": "code",
        "value": "npm install -D typescript\nnpx tsc --init\n// This creates a tsconfig.json file\n\n// Example TypeScript file: index.ts\nconst greeting: string = 'Hello, TypeScript!';\nconsole.log(greeting);\n\n// To compile run:\nnpx tsc\n// This converts index.ts to index.js"
      },
      {
        "type": "paragraph",
        "value": "After running these steps, your TypeScript files will compile to JavaScript. If you see errors during compilation, it usually means your code does not match the expected types. For example, if you try to assign a number to a string variable, TypeScript will alert you to fix the issue. Setting up TypeScript improves code quality and helps prevent bugs before running your code."
      }
    ]
  },
  {
    "slug": "how-to-fix-typescript-cannot-find-name-error",
    "title": "How to Fix TypeScript Cannot Find Name Error",
    "language": "typescript",
    "type": "errors",
    "description": "Learn what the 'Cannot find name' error in TypeScript means and how to fix it with simple examples.",
    "content": [
      {
        "type": "paragraph",
        "value": "When you start writing code in TypeScript, you might encounter the error message \"Cannot find name 'X'\". This is a common error that indicates the TypeScript compiler cannot find the definition or declaration of a variable, function, or type that you are trying to use."
      },
      {
        "type": "paragraph",
        "value": "The \"Cannot find name\" error happens because TypeScript needs you to declare all variables, functions, or types before you use them. This helps catch mistakes like typos or using items that haven’t been created yet. To fix this, you need to make sure you have declared the name properly or imported it if it comes from another file."
      },
      {
        "type": "code",
        "value": "function greet() {\n  console.log(message);\n}\n\ngreet();\n\n// This will cause error: Cannot find name 'message'.\n// Fix it by declaring the variable:\n\nconst message = \"Hello, world!\";"
      },
      {
        "type": "paragraph",
        "value": "In the example above, the error occurs because the variable 'message' is used before it is declared. To fix this, we declare 'message' with a string value before we use it in the 'greet' function. Always make sure to declare or import your names before using them, and TypeScript's error messages will help guide you to these simple fixes."
      }
    ]
  },
  {
    "slug": "python-basics-for-absolute-beginners",
    "title": "Python Basics for Absolute Beginners",
    "language": "python",
    "type": "tutorials",
    "description": "A simple introduction to Python programming for those who have never coded before.",
    "content": [
      {
        "type": "paragraph",
        "value": "Welcome to your first Python tutorial! Python is a popular programming language known for its simplicity and readability, making it perfect for beginners. In this tutorial, you will learn the most basic concepts to get started with Python programming."
      },
      {
        "type": "paragraph",
        "value": "Let's begin by understanding how to display text using Python. The most common way to show output is by using the print() function. This function prints whatever you pass inside the parentheses to the screen."
      },
      {
        "type": "code",
        "value": "print(\"Hello, world!\")"
      },
      {
        "type": "paragraph",
        "value": "If you run the above code, you should see the message Hello, world! on the screen. This is your first Python program! Now, if you get an error like SyntaxError: EOL while scanning string literal, it means you forgot to close a quote. Always make sure your strings are enclosed in matching quotes, either single ('') or double (\"\")."
      },
      {
        "type": "paragraph",
        "value": "Next, let's look at variables. Variables are used to store data so you can use it later. You can create a variable by giving it a name and assigning a value with the = sign."
      },
      {
        "type": "code",
        "value": "name = \"Alice\"\nage = 25\nprint(name)\nprint(age)"
      },
      {
        "type": "paragraph",
        "value": "In this example, we created two variables: name and age. We assigned a string to name and a number to age. When printing these variables, their stored values show up. If you get a NameError like NameError: name 'nme' is not defined, it usually means you misspelled your variable. Double-check your variable names to fix this."
      },
      {
        "type": "paragraph",
        "value": "Finally, let's see how to ask the user for input. Use the input() function, which shows a prompt and waits for the user to type something."
      },
      {
        "type": "code",
        "value": "user_name = input(\"What is your name? \")\nprint(\"Hello, \" + user_name + \"!\")"
      },
      {
        "type": "paragraph",
        "value": "When you run this code, Python waits for you to type your name. Then it prints a personalized greeting. If you forget the closing parenthesis in input function like input(\"What is your name?\" you will get a SyntaxError. Always check your parentheses and quotes carefully to avoid such errors."
      },
      {
        "type": "paragraph",
        "value": "To sum up, today you learned how to display output with print(), store data in variables, and get input from the user. These are the building blocks for writing any Python program. Practice these basics and soon you will be ready to explore more exciting Python features!"
      }
    ]
  },
  {
    "slug": "how-to-fix-indentationerror-in-python-for-beginners",
    "title": "How to Fix IndentationError in Python for Beginners",
    "language": "python",
    "type": "errors",
    "description": "Learn what causes IndentationError in Python and how to fix it with simple examples.",
    "content": [
      {
        "type": "paragraph",
        "value": "Python uses indentation (spaces or tabs at the beginning of a line) to define blocks of code. Unlike many other programming languages that use curly braces or keywords, Python’s structure relies on proper indentation. This makes the code easier to read but also means that even small mistakes in indenting can cause errors."
      },
      {
        "type": "paragraph",
        "value": "IndentationError happens when Python finds inconsistent or unexpected indentation. This means it’s expecting a certain level of indentation but finds something else instead. Common causes include mixing spaces and tabs, missing indentation after a colon (:), or incorrect alignment of code blocks."
      },
      {
        "type": "code",
        "value": "def greet():\nprint(\"Hello, world!\")  # This line should be indented\n\n# Corrected version:\n\ndef greet():\n    print(\"Hello, world!\")"
      },
      {
        "type": "paragraph",
        "value": "To fix an IndentationError, you need to make sure that all lines inside a block have the same level of indentation. Use either spaces or tabs consistently—Python’s official style guide recommends using 4 spaces per indentation level. Most code editors allow you to set this preference. Check your code blocks carefully after colons and before special statements to ensure proper indentation."
      }
    ]
  },
  {
    "slug": "introduction-to-sql-databases-for-beginners",
    "title": "Introduction to SQL Databases for Beginners",
    "language": "sql",
    "type": "tutorials",
    "description": "A beginner-friendly introduction to SQL databases, covering basic concepts and example queries.",
    "content": [
      {
        "type": "paragraph",
        "value": "SQL (Structured Query Language) is a programming language used to manage and manipulate databases. Databases store data in tables, making it easy to organize, retrieve, and update information efficiently. This article introduces you to the fundamentals of SQL databases and guides you through simple commands to get started."
      },
      {
        "type": "paragraph",
        "value": "A database consists of tables, and each table contains rows and columns. Each column has a specific type of data like text, numbers, or dates. Common SQL commands include SELECT to retrieve data, INSERT to add data, UPDATE to change data, and DELETE to remove data. SQL helps you interact with the database to perform these operations easily."
      },
      {
        "type": "code",
        "value": "CREATE TABLE Students (\n  ID INT PRIMARY KEY,\n  Name VARCHAR(100),\n  Age INT\n);\n\nINSERT INTO Students (ID, Name, Age) VALUES (1, 'Alice', 21);\nINSERT INTO Students (ID, Name, Age) VALUES (2, 'Bob', 22);\n\nSELECT * FROM Students;"
      },
      {
        "type": "paragraph",
        "value": "In the example, we created a table named 'Students' with three columns: ID, Name, and Age. The INSERT statements add two records into the table. The SELECT statement retrieves all records from the Students table. Understanding these basics will help you build and interact with your own databases. Remember, errors are common when learning SQL. For example, if you try to insert a record with a duplicate ID, the database will return an error because ID is a primary key and must be unique. To fix such an error, ensure that each ID you insert is unique."
      }
    ]
  },
  {
    "slug": "troubleshooting-common-sql-connection-errors",
    "title": "Troubleshooting Common SQL Connection Errors",
    "language": "sql",
    "type": "errors",
    "description": "Learn to identify and fix common SQL connection errors with clear explanations and examples.",
    "content": [
      {
        "type": "paragraph",
        "value": "Connecting to a SQL database is a fundamental step when working with databases in any application. However, beginners often encounter connection errors that can be confusing. This article explains the most common SQL connection errors, why they happen, and how to fix them."
      },
      {
        "type": "paragraph",
        "value": "One common error is \"SQL Server does not exist or access denied.\" This means the client cannot reach the SQL server. It usually happens because of incorrect server name, wrong port number, firewall blocking the connection, or SQL server not running. Another frequent error is \"Login failed for user.\", which occurs if the username or password is incorrect or the user doesn't have permission to access the database."
      },
      {
        "type": "code",
        "value": "-- Example: Connecting to a SQL Server with correct parameters\nDECLARE @server_name VARCHAR(50) = 'localhost';\nDECLARE @database_name VARCHAR(50) = 'ExampleDB';\nDECLARE @username VARCHAR(50) = 'myUser';\nDECLARE @password VARCHAR(50) = 'myPassword';\n\n-- Connection string (used in application code, e.g., C# or Python)\n-- Server=localhost;Database=ExampleDB;User Id=myUser;Password=myPassword;\n\n-- Check if server is reachable\nEXEC sp_serveroption @server_name, 'data access', 'true';"
      },
      {
        "type": "paragraph",
        "value": "To fix connection errors, start by verifying the server name and port number. Ensure the SQL service is running and your username and password are correct. Also, check firewall settings to allow traffic on the SQL port (default 1433). For permission issues, confirm that the user has the necessary roles assigned. By methodically checking these settings, you can resolve most common connection errors and successfully connect to your SQL database."
      }
    ]
  },
  {
    "slug": "how-to-use-functions-in-javascript-for-beginners",
    "title": "How to Use Functions in JavaScript for Beginners",
    "language": "javascript",
    "type": "tutorials",
    "description": "A simple guide to understanding and using functions in JavaScript, designed for beginners.",
    "content": [
      {
        "type": "paragraph",
        "value": "Functions are one of the most important building blocks in JavaScript. They allow you to group code into reusable blocks, making your programs easier to read and maintain. In this article, you will learn what functions are, how to create them, and how to use them effectively."
      },
      {
        "type": "paragraph",
        "value": "A function is a set of instructions that performs a specific task. You define a function once, and then you can run it (or 'call' it) as many times as you need. Functions can also take inputs, called parameters, and can return outputs. This helps make your code more organized and less repetitive."
      },
      {
        "type": "code",
        "value": "function greet(name) {\n  return 'Hello, ' + name + '!';\n}\n\nlet message = greet('Alice');\nconsole.log(message);  // Output: Hello, Alice!"
      },
      {
        "type": "paragraph",
        "value": "In the example above, the function named `greet` takes one parameter called `name`. When you call `greet` with an argument like `'Alice'`, it returns a greeting message. You can then print this message using `console.log`. If you forget to provide the parameter when calling the function, JavaScript will return `Hello, undefined!` because `name` is missing. To fix this, always make sure to provide the correct number of arguments when calling a function."
      }
    ]
  },
  {
    "slug": "javascript-syntax-error-common-causes-and-solutions",
    "title": "JavaScript Syntax Error: Common Causes and Solutions",
    "language": "javascript",
    "type": "errors",
    "description": "Learn about common JavaScript syntax errors, why they happen, and how to fix them.",
    "content": [
      {
        "type": "paragraph",
        "value": "When you start coding in JavaScript, running your code might result in syntax errors. These errors mean there is something wrong with how your code is written, preventing the JavaScript engine from understanding it."
      },
      {
        "type": "paragraph",
        "value": "A syntax error happens if you misspell keywords, forget parentheses, brackets, or punctuation marks like semicolons, or mix up the code structure. Let's explore some of the most common causes:"
      },
      {
        "type": "paragraph",
        "value": "1. Missing or extra curly braces: JavaScript uses { and } to group code blocks, like in functions or loops. If you forget to close a brace or add an extra one, a syntax error occurs."
      },
      {
        "type": "paragraph",
        "value": "2. Forgetting parentheses in function calls: Calling a function requires (). Missing these causes errors."
      },
      {
        "type": "paragraph",
        "value": "3. Missing quotes in strings: Strings need matching quotes (' ' or \" \"). If one quote is missing, the code breaks."
      },
      {
        "type": "paragraph",
        "value": "Here is an example with a common syntax error caused by a missing closing brace:"
      },
      {
        "type": "code",
        "value": "function greet() {\n  console.log('Hello World!');\n// Missing closing brace here"
      },
      {
        "type": "paragraph",
        "value": "This code triggers a syntax error because the closing brace } for the function is missing. JavaScript doesn't know where the function ends."
      },
      {
        "type": "paragraph",
        "value": "To fix it, simply add the missing brace:"
      },
      {
        "type": "code",
        "value": "function greet() {\n  console.log('Hello World!');\n}"
      },
      {
        "type": "paragraph",
        "value": "In summary, carefully checking your code for matching braces, parentheses, and quotes prevents most syntax errors. Use an editor with syntax highlighting to catch mistakes easily and read error messages to locate problems quickly."
      }
    ]
  },
  {
    "slug": "getting-started-with-typescript-basics",
    "title": "Getting Started with TypeScript Basics",
    "language": "typescript",
    "type": "tutorials",
    "description": "A beginner-friendly introduction to TypeScript covering basic concepts, syntax, and common errors.",
    "content": [
      {
        "type": "paragraph",
        "value": "TypeScript is a superset of JavaScript that adds static types to your code. This helps catch errors early and makes your code easier to understand and maintain. In this tutorial, you'll learn the basics of TypeScript and how to write simple typed programs."
      },
      {
        "type": "paragraph",
        "value": "Let’s start by declaring variables with explicit types. TypeScript uses a colon (:) followed by the type to declare the type of a variable. Common types include string, number, and boolean. You can also create functions with typed parameters and return values."
      },
      {
        "type": "code",
        "value": "let username: string = 'Alice';\nlet age: number = 30;\nlet isAdmin: boolean = true;\n\nfunction greet(name: string): string {\n  return `Hello, ${name}!`;\n}\n\nconsole.log(greet(username));"
      },
      {
        "type": "paragraph",
        "value": "This code shows variables with specific types and a function that accepts and returns a string. TypeScript ensures you can’t assign values with incompatible types. For example, if you try to assign a number to a string variable, TypeScript will give an error."
      },
      {
        "type": "paragraph",
        "value": "Common TypeScript error example: \nIf you write `let title: string = 123;`, TypeScript shows an error: \"Type 'number' is not assignable to type 'string'.\" This means that you tried to assign a number to a variable that expects a string. To fix it, change the value to a string like \"123\" or update the variable type to number if needed."
      },
      {
        "type": "paragraph",
        "value": "Starting with these basic types and error explanations, you can write safer JavaScript code with TypeScript. As you practice, you’ll explore more advanced features like interfaces, enums, and generics to build robust applications."
      }
    ]
  },
  {
    "slug": "resolving-typescript-property-does-not-exist-error",
    "title": "Resolving TypeScript Property Does Not Exist on Type Error",
    "language": "typescript",
    "type": "errors",
    "description": "Learn what causes the 'Property does not exist on type' error in TypeScript and how to fix it.",
    "content": [
      {
        "type": "paragraph",
        "value": "When working with TypeScript, you might encounter an error that says, \"Property 'X' does not exist on type 'Y'.\" This error can be confusing for beginners, but it's a helpful feature that ensures you only use properties that are defined on a specific object type."
      },
      {
        "type": "paragraph",
        "value": "This error happens because TypeScript checks the properties available on the type you're working with. If you try to access a property that TypeScript doesn't recognize on an object, it will throw this error to prevent potential bugs. To fix this, you need to ensure the object type includes the property, or tell TypeScript that the property does exist using techniques like type assertions, interfaces, or index signatures."
      },
      {
        "type": "code",
        "value": "interface Person {\n  name: string;\n  age: number;\n}\n\nconst person: Person = { name: \"Alice\", age: 25 };\n\n// This will cause the error:\n// console.log(person.address);\n\n// Fix 1: Add the missing property to the interface\ninterface PersonWithAddress extends Person {\n  address: string;\n}\n\nconst personWithAddress: PersonWithAddress = { name: \"Alice\", age: 25, address: \"123 Main St\" };\nconsole.log(personWithAddress.address); // Works fine\n\n// Fix 2: Use an index signature if properties are dynamic\ninterface FlexiblePerson {\n  name: string;\n  age: number;\n  [key: string]: any;  // Allows any extra properties\n}\n\nconst flexiblePerson: FlexiblePerson = { name: \"Bob\", age: 30, address: \"456 Park Ave\" };\nconsole.log(flexiblePerson.address); // Works because of index signature"
      },
      {
        "type": "paragraph",
        "value": "In summary, the \"Property does not exist on type\" error helps catch mistakes early in your code. To resolve it, double-check that your types include all the properties you want to use, or adjust your type definitions to be more flexible. This will make your code safer and easier to maintain."
      }
    ]
  },
  {
    "slug": "how-to-write-your-first-python-program",
    "title": "How to Write Your First Python Program",
    "language": "python",
    "type": "tutorials",
    "description": "A beginner-friendly guide to writing your first program in Python.",
    "content": [
      {
        "type": "paragraph",
        "value": "Welcome to your first step in learning Python! Python is a popular and beginner-friendly programming language used for everything from web development to data science. In this tutorial, we will guide you through writing your very first Python program."
      },
      {
        "type": "paragraph",
        "value": "Writing your first Python program is simple. You will write a short piece of code that tells the computer to display a message on the screen. This basic program helps you understand how Python code is written and executed. The key function you'll use is called \"print()\", which prints text or other output to the console."
      },
      {
        "type": "code",
        "value": "print(\"Hello, world!\")"
      },
      {
        "type": "paragraph",
        "value": "When you run this program, the computer will display the message Hello, world! on the screen. This means your code worked correctly. If you get an error like SyntaxError, it usually means there's a typo or missing symbol in your code. For example, forgetting the closing quotation mark means Python cannot understand where the text ends. To fix this, check that your quotes around the text are paired correctly and all parentheses are closed."
      },
      {
        "type": "paragraph",
        "value": "Now you've written and run your very first Python program! This simple example shows how Python reads and executes code line by line. As you continue learning, you will build on this basic knowledge to create more complex and useful programs."
      }
    ]
  },
  {
    "slug": "troubleshooting-attributeerror-in-python-explained",
    "title": "Troubleshooting AttributeError in Python Explained",
    "language": "python",
    "type": "errors",
    "description": "A beginner-friendly guide to understanding and fixing AttributeError in Python.",
    "content": [
      {
        "type": "paragraph",
        "value": "When learning Python, you might encounter an error called AttributeError. This error happens when you try to use or access an attribute (like a method or a variable) that does not exist on an object. Understanding this error will help you write better code and fix mistakes quickly."
      },
      {
        "type": "paragraph",
        "value": "AttributeError means Python could not find the attribute you wanted to use. This can happen for several reasons: you might have misspelled the attribute name, tried to use an attribute on the wrong type of object, or tried to access an attribute before creating it."
      },
      {
        "type": "code",
        "value": "class Dog:\n    def __init__(self, name):\n        self.name = name\n\n    def bark(self):\n        print('Woof!')\n\nmy_dog = Dog('Buddy')\n\n# Correct way to call bark method\nmy_dog.bark()\n\n# This will cause an AttributeError because 'meow' method doesn't exist\nmy_dog.meow()"
      },
      {
        "type": "paragraph",
        "value": "In the example above, the Dog class has a method called bark, but not meow. If you try to call meow on a Dog object, Python will raise an AttributeError. To fix this, double-check the method or attribute names, ensure you are using the correct object, and verify the attribute exists before calling it."
      }
    ]
  },
  {
    "slug": "sql-basics-for-absolute-beginners",
    "title": "SQL Basics for Absolute Beginners",
    "language": "sql",
    "type": "tutorials",
    "description": "Learn the fundamentals of SQL including basic queries, creating tables, and troubleshooting common errors.",
    "content": [
      {
        "type": "paragraph",
        "value": "SQL (Structured Query Language) is a powerful language used to manage and manipulate databases. If you are new to coding or databases, this tutorial will guide you through the basics of SQL so you can start writing your own queries."
      },
      {
        "type": "paragraph",
        "value": "One of the first things to understand is how to create a table in a database. A table stores data in rows and columns, similar to a spreadsheet. Each column has a data type, like text or numbers. After creating a table, you can insert data and run queries to get specific information."
      },
      {
        "type": "code",
        "value": "CREATE TABLE Students (\n  ID INT PRIMARY KEY,\n  Name VARCHAR(50),\n  Age INT\n);\n\nINSERT INTO Students (ID, Name, Age) VALUES (1, 'Alice', 20);\nINSERT INTO Students (ID, Name, Age) VALUES (2, 'Bob', 22);\n\n-- Select all data from the Students table\nSELECT * FROM Students;"
      },
      {
        "type": "paragraph",
        "value": "This example creates a table called 'Students' with three columns: ID, Name, and Age. It inserts two rows of data and then selects the entire table. If you get an error like \"ERROR 1064 (42000): You have an error in your SQL syntax,\" it usually means there is a typo or missing keyword. Double-check your spelling and punctuation such as commas and parentheses to fix it."
      }
    ]
  },
  {
    "slug": "troubleshooting-sql-deadlock-issues-made-simple",
    "title": "Troubleshooting SQL Deadlock Issues Made Simple",
    "language": "sql",
    "type": "errors",
    "description": "A beginner-friendly guide to understanding and fixing SQL deadlock errors.",
    "content": [
      {
        "type": "paragraph",
        "value": "When working with SQL databases, you might encounter an error called a deadlock. This happens when two or more transactions are waiting for each other to release locks, causing a standstill where nobody can proceed."
      },
      {
        "type": "paragraph",
        "value": "A deadlock occurs because SQL uses locks to manage access to data when multiple users or processes want to change the same records at the same time. If Transaction A locks one resource and waits for another locked by Transaction B, while Transaction B waits for the first resource, neither can continue. The database engine detects this and chooses one transaction to cancel, raising a deadlock error."
      },
      {
        "type": "code",
        "value": "BEGIN TRANSACTION;\n-- Transaction A locks row 1\nUPDATE Accounts SET Balance = Balance - 100 WHERE AccountID = 1;\n\n-- Simultaneously,\nBEGIN TRANSACTION;\n-- Transaction B locks row 2\nUPDATE Accounts SET Balance = Balance + 100 WHERE AccountID = 2;\n\n-- Then Transaction A tries to lock row 2, and Transaction B tries to lock row 1:\nUPDATE Accounts SET Balance = Balance + 100 WHERE AccountID = 2; -- Transaction A\nUPDATE Accounts SET Balance = Balance - 100 WHERE AccountID = 1; -- Transaction B"
      },
      {
        "type": "paragraph",
        "value": "To fix deadlocks, try to keep transactions short and access resources in the same order in all your SQL statements. Also, consider using less restrictive isolation levels or retry logic in your code to handle deadlock errors gracefully. By understanding and managing how your transactions lock resources, you can reduce the chance of deadlocks in your SQL databases."
      }
    ]
  },
  {
    "slug": "introduction-to-javascript-for-absolute-beginners",
    "title": "Introduction to JavaScript for Absolute Beginners",
    "language": "javascript",
    "type": "tutorials",
    "description": "A simple and clear introduction to JavaScript programming for those who have never coded before.",
    "content": [
      {
        "type": "paragraph",
        "value": "JavaScript is a popular programming language mainly used to make websites interactive. Whether you want to create animations, handle user inputs, or build games, JavaScript can help you do it directly in the browser."
      },
      {
        "type": "paragraph",
        "value": "To start writing JavaScript, you don’t need any special software. You can use a simple text editor and test your code in any web browser. JavaScript code consists of statements that tell the browser what to do, such as displaying messages or doing calculations."
      },
      {
        "type": "code",
        "value": "console.log('Hello, world!');"
      },
      {
        "type": "paragraph",
        "value": "The code above uses the `console.log` function to print a message to the console, which is a special place in the browser where you can see output or errors. To try this yourself, open your browser, press F12 or right-click and select 'Inspect', then go to the 'Console' tab and type the code. Press Enter to run it and see the message."
      }
    ]
  },
  {
    "slug": "common-causes-and-solutions-for-javascript-syntax-errors",
    "title": "Common Causes and Solutions for JavaScript Syntax Errors",
    "language": "javascript",
    "type": "errors",
    "description": "Learn about typical JavaScript syntax errors, why they occur, and how to fix them with simple examples.",
    "content": [
      {
        "type": "paragraph",
        "value": "When you start coding in JavaScript, syntax errors are a common hurdle. A syntax error happens when your code does not follow the rules of JavaScript language. This prevents your code from running because the JavaScript engine cannot understand what you wrote."
      },
      {
        "type": "paragraph",
        "value": "One common cause of syntax errors is missing or extra characters such as parentheses, curly braces, or semicolons. For example, forgetting to close a parenthesis can lead to an 'Unexpected token' error. Such errors occur because the JavaScript interpreter expects a certain structure and finds something else instead."
      },
      {
        "type": "code",
        "value": "function greet(name) {\n  console.log('Hello, ' + name;\n}\ngreet('World');"
      },
      {
        "type": "paragraph",
        "value": "In the example above, there is a missing closing parenthesis in the console.log statement. The correct version should be: console.log('Hello, ' + name);. Adding the missing parenthesis fixes the syntax error, allowing the code to run properly."
      }
    ]
  },
  {
    "slug": "understanding-typescript-data-types-and-variables",
    "title": "Understanding TypeScript Data Types and Variables",
    "language": "typescript",
    "type": "tutorials",
    "description": "A beginner-friendly guide to TypeScript data types and variables with examples and error explanations.",
    "content": [
      {
        "type": "paragraph",
        "value": "TypeScript is a powerful language that builds on JavaScript by adding static types. This means you can define the kind of data a variable can hold, which helps catch errors early and makes your code easier to understand. In this tutorial, we'll learn about the basic data types and how to declare variables in TypeScript."
      },
      {
        "type": "paragraph",
        "value": "In TypeScript, you can specify types for variables like numbers, strings, booleans, arrays, and more. When you assign a value that doesn't match the specified type, TypeScript will give you an error, helping prevent bugs before running your code."
      },
      {
        "type": "code",
        "value": "let age: number = 25;\nlet userName: string = \"Alice\";\nlet isLoggedIn: boolean = true;\n\n// An array of numbers\nlet scores: number[] = [90, 85, 100];\n\n// This will cause an error\n// age = \"twenty-five\"; // Error: Type 'string' is not assignable to type 'number'."
      },
      {
        "type": "paragraph",
        "value": "If you see an error like \"Type 'string' is not assignable to type 'number'\", it means you're trying to store a value in a variable of the wrong type. For example, assigning a string to a variable declared as a number. To fix this, make sure the value's type matches the variable’s type declaration."
      }
    ]
  },
  {
    "slug": "how-to-fix-typescript-cannot-find-module-error",
    "title": "How to Fix TypeScript Cannot Find Module Error",
    "language": "typescript",
    "type": "errors",
    "description": "Learn what causes the TypeScript 'cannot find module' error and how to fix it with simple steps.",
    "content": [
      {
        "type": "paragraph",
        "value": "When working with TypeScript, you might see an error message like \"Cannot find module 'module-name'\". This error happens when TypeScript cannot locate the file or package you are trying to import into your code."
      },
      {
        "type": "paragraph",
        "value": "This issue often occurs because the module does not exist at the specified path, the path is misspelled, TypeScript is missing type declarations, or your project configuration is incorrect. Fixing it usually means checking the module location, installing missing packages, or updating your TypeScript settings."
      },
      {
        "type": "code",
        "value": "import { greet } from './utils';\n\nconsole.log(greet('World'));"
      },
      {
        "type": "paragraph",
        "value": "In this example, if the file './utils.ts' is missing or the path is wrong, TypeScript will show the 'cannot find module' error. To fix this, make sure './utils.ts' exists and the path is correct. If importing a third-party package, run 'npm install package-name' to add it to your project. Also, you can add a 'types' folder or configure the 'typeRoots' in your tsconfig.json if TypeScript can't find type definitions."
      }
    ]
  },
  {
    "slug": "python-for-absolute-beginners-step-by-step",
    "title": "Python for Absolute Beginners: Step by Step",
    "language": "python",
    "type": "tutorials",
    "description": "An easy-to-understand introduction to Python programming for absolute beginners, including concepts, common errors, and examples.",
    "content": [
      {
        "type": "paragraph",
        "value": "Welcome to your first step in learning Python! This tutorial is designed specifically for absolute beginners with no prior programming experience. We will start from the very basics, helping you understand how Python works and write simple programs."
      },
      {
        "type": "paragraph",
        "value": "Python is a popular programming language known for its clear syntax and readability. The very first thing we'll learn is how to print messages to the screen using the print() function. This helps you see the output of your code immediately."
      },
      {
        "type": "code",
        "value": "print('Hello, world!')"
      },
      {
        "type": "paragraph",
        "value": "Running the above code will display the message Hello, world! This is your first Python program. If you encounter an error like SyntaxError: EOL while scanning string literal, it usually means you forgot to close the quotation marks. Always make sure your strings are enclosed properly in single ('') or double quotes (\"\")."
      },
      {
        "type": "paragraph",
        "value": "Next, let's learn about variables. Variables store values that you can use and change in your programs. For example, you can store a number and print it later."
      },
      {
        "type": "code",
        "value": "age = 25\nprint('I am', age, 'years old.')"
      },
      {
        "type": "paragraph",
        "value": "This code creates a variable named age and assigns it the value 25. Then it prints the message with the value of the variable included. If Python raises a NameError like name 'age' is not defined, it means you tried to use a variable that hasn't been created yet. Make sure you define your variable before using it."
      },
      {
        "type": "paragraph",
        "value": "Python also has different types of data like numbers, text(strings), and lists. Understanding these will help you write more complex programs."
      },
      {
        "type": "code",
        "value": "name = 'Alice'\nnumbers = [1, 2, 3, 4]\nprint('Name:', name)\nprint('Numbers:', numbers)"
      },
      {
        "type": "paragraph",
        "value": "In this example, name is a string that stores text, and numbers is a list that stores multiple values. Lists are useful to keep collections of items together."
      },
      {
        "type": "paragraph",
        "value": "To summarize, Python is beginner-friendly and a great choice to start coding. Begin with print statements, understand variables, and get familiar with data types. Don't worry about errors — they help you learn. Carefully read error messages: they explain what went wrong and how to fix your code. Keep practicing, and you'll get better quickly!"
      }
    ]
  },
  {
    "slug": "understanding-and-resolving-nameerror-in-python",
    "title": "Understanding and Resolving NameError in Python",
    "language": "python",
    "type": "errors",
    "description": "Learn what a NameError is in Python, why it happens, and how to fix it with clear examples.",
    "content": [
      {
        "type": "paragraph",
        "value": "When you start coding in Python, you might encounter different types of errors. One common error is the NameError. It happens when Python tries to use a variable or function name that it does not recognize. Understanding this error is important because it helps in debugging your code quickly."
      },
      {
        "type": "paragraph",
        "value": "A NameError means that you areTrying to use a name (like a variable or function) that has not been defined yet or is misspelled. Python raises this error because it doesn't know what you mean by that name. It often happens if you forget to create a variable before using it or if you make a typo in the name."
      },
      {
        "type": "code",
        "value": "print(my_var)\n\n# Output will be:\n# NameError: name 'my_var' is not defined\n\n# To fix this, define 'my_var' before using it:\nmy_var = 10\nprint(my_var)  # This will print 10 without errors"
      },
      {
        "type": "paragraph",
        "value": "To avoid a NameError, always make sure that every variable or function you use is defined before you use it. Check for typos in the names and make sure the scope of your variables is correct (for example, a variable defined inside a function isn't available outside it). By following these simple steps, you can fix and prevent NameErrors in your Python programs."
      }
    ]
  },
  {
    "slug": "introduction-to-sql-for-beginners",
    "title": "Introduction to SQL for Beginners",
    "language": "sql",
    "type": "tutorials",
    "description": "A beginner-friendly introduction to SQL, covering basic concepts and example queries.",
    "content": [
      {
        "type": "paragraph",
        "value": "SQL stands for Structured Query Language and is used to communicate with databases. If you want to store, retrieve, or manipulate data in a database, SQL is the language you will use. It is widely used in many applications and industries."
      },
      {
        "type": "paragraph",
        "value": "A basic SQL query lets you select data from a database table. The most common command is SELECT, which retrieves data based on specific conditions you provide. For beginners, understanding the structure of the SELECT statement is very important."
      },
      {
        "type": "code",
        "value": "SELECT first_name, last_name FROM employees WHERE department = 'Sales';"
      },
      {
        "type": "paragraph",
        "value": "This example retrieves the first and last names of employees who work in the Sales department. If you run this query and get an error like \"Unknown column 'first_name'\", it usually means the column name is misspelled or does not exist in the table. To fix this, check your database schema and ensure the column name matches exactly."
      },
      {
        "type": "paragraph",
        "value": "In summary, SQL is a powerful and essential language for working with databases. Starting with SELECT queries helps you access your data. Always check your column and table names carefully to avoid common errors."
      }
    ]
  },
  {
    "slug": "troubleshooting-null-value-issues-in-sql-queries",
    "title": "Troubleshooting Null Value Issues in SQL Queries",
    "language": "sql",
    "type": "errors",
    "description": "Learn what causes null value issues in SQL queries, why they happen, and how to fix them.",
    "content": [
      {
        "type": "paragraph",
        "value": "When writing SQL queries, encountering unexpected null values can be confusing, especially for beginners. Null values represent missing or unknown data, and they behave differently from normal values in SQL. Understanding how to handle nulls properly ensures your queries work as expected."
      },
      {
        "type": "paragraph",
        "value": "A common source of null value issues is using comparison operators like '=' or '<>' without considering that null is not equal to anything, even another null. This can cause your WHERE clauses or JOIN conditions to exclude rows you expect to see. Another frequent problem is arithmetic operations with null values which result in null, potentially leading to unexpected query results."
      },
      {
        "type": "code",
        "value": "SELECT employee_id, bonus_amount\nFROM bonuses\nWHERE bonus_amount <> 0;\n\n-- This query will not return rows where bonus_amount is NULL, because 'NULL <> 0' is unknown, not true.\n\n-- To correctly handle nulls, use IS NULL or IS NOT NULL:\nSELECT employee_id, bonus_amount\nFROM bonuses\nWHERE bonus_amount IS NOT NULL AND bonus_amount <> 0;"
      },
      {
        "type": "paragraph",
        "value": "In summary, null values require special attention when writing SQL queries. Use IS NULL or IS NOT NULL to check for nulls explicitly, and be aware that any comparison with null returns unknown, not true or false. Handling nulls correctly prevents bugs and ensures your query results reflect the data accurately."
      }
    ]
  },
  {
    "slug": "how-to-use-variables-and-data-types-in-javascript",
    "title": "How to Use Variables and Data Types in JavaScript",
    "language": "javascript",
    "type": "tutorials",
    "description": "A beginner-friendly guide to understanding variables and data types in JavaScript.",
    "content": [
      {
        "type": "paragraph",
        "value": "In JavaScript, variables are containers that store data values. They make your code flexible and reusable because you can store information and use it throughout your program."
      },
      {
        "type": "paragraph",
        "value": "JavaScript has several data types such as strings, numbers, booleans, and more. Understanding these data types helps you choose the right way to store and manipulate data. You declare variables using the keywords var, let, or const."
      },
      {
        "type": "code",
        "value": "let username = 'Alice';\nlet age = 25;\nconst isStudent = true;\n\nconsole.log(username); // Outputs: Alice\nconsole.log(age); // Outputs: 25\nconsole.log(isStudent); // Outputs: true"
      },
      {
        "type": "paragraph",
        "value": "In this example, we declared three variables with different data types. 'username' holds a string, 'age' holds a number, and 'isStudent' holds a boolean value. Remember, use const for values that won’t change and let for those that will. This helps prevent bugs in your code."
      }
    ]
  },
  {
    "slug": "how-to-fix-typeerror-in-javascript",
    "title": "How to Fix TypeError in JavaScript",
    "language": "javascript",
    "type": "errors",
    "description": "Learn what TypeError means in JavaScript, why it happens, and how to fix it with simple examples.",
    "content": [
      {
        "type": "paragraph",
        "value": "When you're learning JavaScript, you might come across an error called 'TypeError'. This error happens when you try to perform an operation on a value that is not of the expected type. Understanding this error will help you write better code and fix bugs faster."
      },
      {
        "type": "paragraph",
        "value": "A TypeError occurs because JavaScript expects a particular type of value but receives a wrong type instead. For example, if you try to call a function on something that is not a function or access a property on undefined, JavaScript will throw a TypeError. This prevents your program from running with invalid data."
      },
      {
        "type": "code",
        "value": "let name = null;\n\n// This will cause a TypeError because 'null' is not an object and has no properties\nconsole.log(name.length);\n\n// Fix: Make sure the variable is a string before accessing 'length'\nname = \"Alice\";\nconsole.log(name.length);"
      },
      {
        "type": "paragraph",
        "value": "To fix TypeErrors, you should check your variables and functions to make sure they have the expected types before using them. Use conditions or type checks like 'typeof' to avoid running code on values that don't support certain operations. This way, you can catch errors early and keep your program running smoothly."
      }
    ]
  },
  {
    "slug": "how-to-set-up-a-typescript-development-environment",
    "title": "How to Set Up a TypeScript Development Environment",
    "language": "typescript",
    "type": "tutorials",
    "description": "A beginner-friendly guide to setting up your development environment for TypeScript.",
    "content": [
      {
        "type": "paragraph",
        "value": "TypeScript is a powerful programming language that builds on JavaScript by adding static types. Setting up a proper development environment helps you write code more efficiently and catch errors early. In this tutorial, we'll walk through the basic steps to set up TypeScript on your computer."
      },
      {
        "type": "paragraph",
        "value": "The first thing you need is Node.js, which includes npm (Node Package Manager). npm lets you install the TypeScript compiler globally on your machine. After installing Node.js, open your terminal and type the following command to install TypeScript:"
      },
      {
        "type": "code",
        "value": "npm install -g typescript"
      },
      {
        "type": "paragraph",
        "value": "The '-g' flag installs TypeScript globally, so you can use the 'tsc' command anywhere. To check if the installation worked, run 'tsc --version' in your terminal. This should show the installed TypeScript version."
      },
      {
        "type": "paragraph",
        "value": "Next, you create a TypeScript configuration file to customize how your TypeScript code is compiled to JavaScript. This file is named 'tsconfig.json'. You can generate a basic one by running:"
      },
      {
        "type": "code",
        "value": "tsc --init"
      },
      {
        "type": "paragraph",
        "value": "This command creates 'tsconfig.json' with default settings. You can edit this file later to enable strict type-checking or specify output directories."
      },
      {
        "type": "paragraph",
        "value": "Let's create a simple TypeScript file named 'index.ts' with the following code:"
      },
      {
        "type": "code",
        "value": "function greet(name: string) {\n  return `Hello, ${name}!`;\n}\n\nconsole.log(greet('World'));"
      },
      {
        "type": "paragraph",
        "value": "To compile this code to JavaScript, run this command:"
      },
      {
        "type": "code",
        "value": "tsc index.ts"
      },
      {
        "type": "paragraph",
        "value": "This generates an 'index.js' file you can run with Node.js by typing 'node index.js'."
      },
      {
        "type": "paragraph",
        "value": "A common error beginners face is a message like 'tsc: command not found'. This means TypeScript is not installed globally, or your system's PATH variable does not include the folder where npm installs global packages. To fix this, make sure you installed TypeScript properly with 'npm install -g typescript' and that your PATH includes npm’s bin folder."
      },
      {
        "type": "paragraph",
        "value": "By following these steps, you've set up a basic TypeScript development environment. You can now write typed, error-checked JavaScript code and enjoy the benefits of this popular language."
      }
    ]
  },
  {
    "slug": "how-to-fix-typescript-compile-errors-for-beginners",
    "title": "How to Fix TypeScript Compile Errors for Beginners",
    "language": "typescript",
    "type": "errors",
    "description": "A beginner-friendly guide to understanding and fixing common TypeScript compile errors.",
    "content": [
      {
        "type": "paragraph",
        "value": "TypeScript helps you catch errors early by checking your code before it runs. But if you are new to TypeScript, compile errors can be confusing. This guide will explain what common errors mean, why they happen, and how to fix them."
      },
      {
        "type": "paragraph",
        "value": "One common error is the 'Type X is not assignable to type Y' error. It means the variable or function you wrote is expecting a certain type, but you gave it a different one. For example, if a function expects a number but you send a string, TypeScript will report this error to prevent bugs."
      },
      {
        "type": "code",
        "value": "function double(x: number) {\n  return x * 2;\n}\n\nconst result = double(\"hello\");  // Error: Argument of type 'string' is not assignable to parameter of type 'number'."
      },
      {
        "type": "paragraph",
        "value": "To fix this error, ensure you pass values of the correct type. In this case, change the argument to a number: double(5). This helps TypeScript ensure your program works as expected and reduces runtime errors."
      }
    ]
  },
  {
    "slug": "python-for-absolute-beginners-getting-started-guide",
    "title": "Python for Absolute Beginners: Getting Started Guide",
    "language": "python",
    "type": "tutorials",
    "description": "A friendly introduction to Python programming for complete beginners.",
    "content": [
      {
        "type": "paragraph",
        "value": "Python is a popular programming language known for its readability and simplicity, making it a great choice for beginners. In this guide, you'll learn the basics of Python, how to write your first program, and understand some common errors you might encounter."
      },
      {
        "type": "paragraph",
        "value": "To get started, you need to have Python installed on your computer. You can download it from python.org. Once installed, you can write Python code using a text editor or an Integrated Development Environment (IDE) like IDLE, which comes bundled with Python. Let's start with a simple program that prints a message on the screen."
      },
      {
        "type": "code",
        "value": "print(\"Hello, World!\")"
      },
      {
        "type": "paragraph",
        "value": "When you run this code, it will display the message Hello, World! on the screen. The print function tells Python to show whatever is inside the parentheses. If you face an error such as SyntaxError: EOL while scanning string literal, it usually means you forgot to close the quotes around your text. Make sure every opening quote has a matching closing quote."
      },
      {
        "type": "paragraph",
        "value": "Now you know how to display text using Python. This simple exercise helps you become comfortable with writing and running Python code. Keep practicing by changing the message inside the quotes, and soon you'll be ready to explore variables, data types, and more!"
      }
    ]
  },
  {
    "slug": "how-to-fix-syntaxerror-in-python-code",
    "title": "How to Fix SyntaxError in Python Code",
    "language": "python",
    "type": "errors",
    "description": "Learn what SyntaxError means in Python, why it happens, and how to fix it with simple examples.",
    "content": [
      {
        "type": "paragraph",
        "value": "When you start writing Python code, you might encounter an error called SyntaxError. This error means that there's something wrong with the way your code is written – Python can't understand it because it doesn't follow the correct rules (syntax)."
      },
      {
        "type": "paragraph",
        "value": "A SyntaxError happens when you forget something like a missing parenthesis, a colon, or a quotation mark, or when your code structure isn't correct. Python checks your program from top to bottom and if it finds a mistake, it stops running and shows you the SyntaxError along with a message telling you where the problem is."
      },
      {
        "type": "code",
        "value": "print('Hello world'\n\n# This will cause a SyntaxError because the closing parenthesis is missing"
      },
      {
        "type": "paragraph",
        "value": "To fix the above error, make sure all parentheses, quotes, and colons are properly closed or placed. The fixed code looks like this:\n\nprint('Hello world')\n\nAlways carefully check for missing or extra characters and follow Python's syntax rules. This will help you avoid SyntaxError and make your code run smoothly."
      }
    ]
  },
  {
    "slug": "how-to-write-your-first-sql-query",
    "title": "How to Write Your First SQL Query",
    "language": "sql",
    "type": "tutorials",
    "description": "A beginner-friendly guide to writing your very first SQL query to retrieve data from a database.",
    "content": [
      {
        "type": "paragraph",
        "value": "SQL (Structured Query Language) is a language used to communicate with databases. If you have data stored in a database, SQL lets you ask questions and get answers from that data. Writing your first SQL query is an exciting step to start managing and analyzing data."
      },
      {
        "type": "paragraph",
        "value": "The most basic SQL query uses the SELECT statement. It tells the database what data you want to see. You usually specify which columns to retrieve and from which table. For example, if you have a table named 'students' and want to see the names of all students, you would write a query selecting the name column from that table."
      },
      {
        "type": "code",
        "value": "SELECT name FROM students;"
      },
      {
        "type": "paragraph",
        "value": "This query asks the database to return all the values in the 'name' column from the 'students' table. When running your SQL query, if you get an error like 'table does not exist' or 'column not found,' it usually means either the table or column name is misspelled or does not exist in your database. Double-check the names and try again. As you practice writing and running queries, you will get more comfortable exploring your database using SQL."
      }
    ]
  },
  {
    "slug": "resolving-null-value-errors-in-sql-queries",
    "title": "Resolving Null Value Errors in SQL Queries",
    "language": "sql",
    "type": "errors",
    "description": "A beginner-friendly guide to understanding and fixing null value errors in SQL queries.",
    "content": [
      {
        "type": "paragraph",
        "value": "When working with SQL databases, you might encounter errors related to null values. Null values represent missing or unknown data in a database. Understanding how to handle these null values is important to avoid errors and ensure your queries run smoothly."
      },
      {
        "type": "paragraph",
        "value": "A common error is trying to perform operations on columns that contain null values without checking for them. For example, if you try to compare or calculate with a null value, SQL may return unexpected results or an error. This happens because null is not a regular value; it means 'no data' or 'unknown'."
      },
      {
        "type": "code",
        "value": "SELECT * FROM employees WHERE department_id = NULL;\n\n-- This query will not work as expected because NULL cannot be compared using '=' operator.\n-- Correct way to check for NULL is using IS NULL:\nSELECT * FROM employees WHERE department_id IS NULL;"
      },
      {
        "type": "paragraph",
        "value": "To fix null value errors, always use IS NULL or IS NOT NULL when checking for nulls. Also, use functions like COALESCE or IFNULL to handle null values in calculations or when selecting columns. These functions let you replace null values with a default value, preventing errors during query execution."
      }
    ]
  }
];
