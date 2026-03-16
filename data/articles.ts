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
  }
];
