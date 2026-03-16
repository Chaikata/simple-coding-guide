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
  }
];
