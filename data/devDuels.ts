export type DevDuelDifficulty = "beginner" | "intermediate" | "advanced";

export type DevDuelChallenge = {
  slug: string;
  title: string;
  language: "javascript" | "python" | "sql" | "cpp";
  difficulty: DevDuelDifficulty;
  category: string;
  description: string;
  prompt: string;
  guidance: string[];
  hints: string[];
  starterCode?: string;
  expectedOutput?: string;
  concepts: string[];
  estimatedTime: string;
  relatedTutorialSlugs?: string[];
  isFeatured?: boolean;
};

export const supportedDevDuelLanguages = [
  {
    slug: "javascript",
    name: "JavaScript",
    description: "Practice fundamentals, arrays, functions, async logic, and debugging.",
  },
  {
    slug: "python",
    name: "Python",
    description: "Sharpen syntax, loops, functions, lists, dictionaries, and more.",
  },
  {
    slug: "sql",
    name: "SQL",
    description: "Train with filtering, joins, grouping, subqueries, and window functions.",
  },
  {
    slug: "cpp",
    name: "C++",
    description: "Work on variables, loops, functions, OOP, and problem-solving.",
  },
] as const;

export const devDuels: DevDuelChallenge[] = [
  {
    "slug": "sum-two-values",
    "title": "Sum Two Values",
    "language": "javascript",
    "difficulty": "beginner",
    "category": "functions",
    "description": "Write a function that returns the sum of two numbers.",
    "prompt": "Create a function called addNumbers that takes two parameters and returns their sum.",
    "guidance": [
      "Create a function with two parameters.",
      "Use the return keyword.",
      "Test the function with simple numeric values."
    ],
    "hints": [
      "The function should accept two inputs.",
      "You want to return a + b."
    ],
    "starterCode": "function addNumbers(a, b) {\n  // your code here\n}",
    "expectedOutput": "addNumbers(2, 3) should return 5.",
    "concepts": [
      "functions",
      "parameters",
      "return values"
    ],
    "estimatedTime": "5 minutes",
    "isFeatured": true
  },
  {
    "slug": "count-even-numbers",
    "title": "Count Even Numbers",
    "language": "python",
    "difficulty": "beginner",
    "category": "loops",
    "description": "Count how many even numbers appear in a list.",
    "prompt": "Write a function called count_even_numbers that receives a list of integers and returns how many of them are even.",
    "guidance": [
      "Loop through each number in the list.",
      "Check whether the number is divisible by 2.",
      "Increase a counter when the number is even."
    ],
    "hints": [
      "Use the modulo operator.",
      "You can start a counter at 0."
    ],
    "starterCode": "def count_even_numbers(numbers):\n    # your code here\n    pass",
    "expectedOutput": "count_even_numbers([1, 2, 3, 4, 6]) should return 3.",
    "concepts": [
      "loops",
      "conditionals",
      "lists"
    ],
    "estimatedTime": "7 minutes",
    "isFeatured": true
  },
  {
    "slug": "find-second-highest-salary",
    "title": "Find the Second Highest Salary",
    "language": "sql",
    "difficulty": "intermediate",
    "category": "subqueries",
    "description": "Return the second highest salary from an employees table.",
    "prompt": "Write a SQL query that returns the second highest salary from an employees table.",
    "guidance": [
      "Think about ordering salaries from highest to lowest.",
      "You may need DISTINCT if duplicate salaries exist.",
      "A subquery can help isolate the answer."
    ],
    "hints": [
      "Try combining DISTINCT with ORDER BY.",
      "LIMIT and OFFSET may help depending on SQL dialect."
    ],
    "expectedOutput": "The query should return the second highest unique salary value.",
    "concepts": [
      "subqueries",
      "sorting",
      "distinct"
    ],
    "estimatedTime": "10 minutes",
    "isFeatured": true
  },
  {
    "slug": "reverse-string-without-built-ins",
    "title": "Reverse a String Without Built-Ins",
    "language": "cpp",
    "difficulty": "intermediate",
    "category": "strings",
    "description": "Reverse a string manually without using built-in reverse helpers.",
    "prompt": "Write a C++ function that takes a string and returns it reversed without using a built-in reverse function.",
    "guidance": [
      "Use a loop from the end of the string to the beginning.",
      "Build a new result string.",
      "Return the final reversed string."
    ],
    "hints": [
      "Start at index length - 1.",
      "Append characters one by one to a new string."
    ],
    "starterCode": "#include <string>\nusing namespace std;\n\nstring reverseString(string text) {\n    // your code here\n}",
    "expectedOutput": "reverseString(\"code\") should return \"edoc\".",
    "concepts": [
      "strings",
      "loops",
      "indexing"
    ],
    "estimatedTime": "12 minutes",
    "isFeatured": true
  },
  {
    "slug": "calculate-the-factorial-of-a-number-in-c",
    "title": "Calculate the Factorial of a Number in C++",
    "language": "cpp",
    "difficulty": "beginner",
    "category": "functions",
    "description": "Learn how to write a function that calculates the factorial of a given non-negative integer using C++.",
    "prompt": "Write a function named factorial that takes a single integer parameter n and returns the factorial of n. The factorial of a non-negative integer n is the product of all positive integers less than or equal to n. If n is 0, the factorial is 1. Your function should handle input values from 0 to 12.",
    "guidance": [
      "Remember that factorial of 0 is defined as 1.",
      "Use a loop or recursion to multiply the numbers from 1 to n.",
      "Check for valid input (non-negative integers)."
    ],
    "hints": [
      "Consider using a for loop that multiplies the numbers from 1 through n.",
      "Think about what the result should be if n is 0.",
      "You can use an integer type to store the intermediate results."
    ],
    "starterCode": "int factorial(int n) {\n    // Your code here\n    return 1;\n}\n\nint main() {\n    int number = 5;\n    int result = factorial(number);\n    std::cout << \"Factorial of \" << number << \" is \" << result << std::endl;\n    return 0;\n}",
    "expectedOutput": "Factorial of 5 is 120",
    "concepts": [
      "functions",
      "loops",
      "control flow"
    ],
    "estimatedTime": "10 minutes",
    "isFeatured": false
  },
  {
    "slug": "calculate-total-sales-per-employee-using-sql-group-by",
    "title": "Calculate Total Sales Per Employee Using SQL GROUP BY",
    "language": "sql",
    "difficulty": "beginner",
    "category": "aggregations",
    "description": "Learn how to aggregate sales data by employee using the SQL GROUP BY clause and aggregate functions in this beginner-friendly challenge.",
    "prompt": "Given a table named Sales with columns employee_id (integer), sale_amount (decimal), and sale_date (date), write a SQL query to calculate the total sales amount for each employee. Your query should return two columns: employee_id and total_sales. Order the results by total_sales in descending order.",
    "guidance": [
      "Use the SUM() aggregate function to calculate total sales for each employee.",
      "Group the results by employee_id using GROUP BY clause.",
      "Order the results by total_sales in descending order to see the top performers first."
    ],
    "hints": [
      "The syntax for GROUP BY is: GROUP BY column_name",
      "Use ORDER BY total_sales DESC to sort highest to lowest.",
      "Remember to name the aggregated column using AS, e.g., SUM(sale_amount) AS total_sales."
    ],
    "starterCode": "SELECT employee_id, \n       -- Calculate total sales here\nFROM Sales\nGROUP BY employee_id\nORDER BY total_sales DESC;",
    "expectedOutput": "employee_id | total_sales\n----------- | -----------\n1           | 4500.00\n2           | 3200.50\n3           | 2100.75",
    "concepts": [
      "GROUP BY",
      "SUM()",
      "ORDER BY"
    ],
    "estimatedTime": "10 minutes",
    "isFeatured": true
  },
  {
    "slug": "calculate-total-sales-per-product-using-sql-aggregate-functions",
    "title": "Calculate Total Sales per Product Using SQL Aggregate Functions",
    "language": "sql",
    "difficulty": "beginner",
    "category": "aggregate functions",
    "description": "Write an SQL query to find the total sales for each product using aggregate functions.",
    "prompt": "Given a table named Sales with columns ProductID, Quantity, and Price, write an SQL query to calculate the total sales amount (Quantity * Price) for each product. The output should include ProductID and the total sales amount labeled as TotalSales. Order the results by TotalSales in descending order.",
    "guidance": [
      "Use the SUM() aggregate function to calculate total sales per product.",
      "Multiply Quantity by Price for each sale before summing.",
      "Group the results by ProductID."
    ],
    "hints": [
      "Remember to use GROUP BY when applying aggregate functions on grouped data.",
      "Calculate the total sales per row by multiplying Quantity and Price inside the SUM function."
    ],
    "starterCode": "SELECT ProductID, SUM(Quantity * Price) AS TotalSales\nFROM Sales\nGROUP BY ProductID\nORDER BY TotalSales DESC;",
    "expectedOutput": "ProductID | TotalSales\n----------|-----------\n101       | 5500.00\n102       | 4200.00\n103       | 3300.00",
    "concepts": [
      "SUM()",
      "GROUP BY",
      "ORDER BY",
      "Aggregate Functions"
    ],
    "estimatedTime": "10 minutes",
    "isFeatured": false
  },
  {
    "slug": "find-the-top-3-customers-by-total-purchase-amount",
    "title": "Find the Top 3 Customers by Total Purchase Amount",
    "language": "sql",
    "difficulty": "beginner",
    "category": "queries",
    "description": "Write an SQL query to identify the top 3 customers who have spent the most in total purchases, using a sample sales database.",
    "prompt": "Given a table named 'Sales' with columns 'CustomerID', 'OrderID', and 'Amount', write an SQL query to return the top 3 customers ranked by their total purchase amount in descending order. The result should include 'CustomerID' and 'TotalSpent'.",
    "guidance": [
      "Aggregate the sales amounts by CustomerID using a GROUP BY clause.",
      "Use the SUM() function to calculate total amount spent per customer.",
      "Order your results by the total spent in descending order.",
      "Limit the output to only the top 3 customers."
    ],
    "hints": [
      "Try using GROUP BY CustomerID and SUM(Amount).",
      "Use ORDER BY with DESC to sort from highest to lowest total spent.",
      "LIMIT 3 will give you only the top 3 results."
    ],
    "starterCode": "SELECT CustomerID, SUM(Amount) as TotalSpent\nFROM Sales\n-- Your code here\n",
    "expectedOutput": "CustomerID | TotalSpent\n-----------|-----------\n101        | 4500\n203        | 3800\n150        | 3200",
    "concepts": [
      "GROUP BY",
      "SUM()",
      "ORDER BY",
      "LIMIT"
    ],
    "estimatedTime": "10 minutes",
    "isFeatured": false
  },
  {
    "slug": "sum-all-numbers-in-an-array-using-javascript",
    "title": "Sum All Numbers in an Array Using JavaScript",
    "language": "javascript",
    "difficulty": "beginner",
    "category": "functions",
    "description": "Write a JavaScript function that takes an array of numbers and returns the sum of all the elements. This challenge helps you practice array iteration and basic function usage.",
    "prompt": "Create a function named sumArray that accepts a single argument — an array of numbers. Your function should calculate and return the sum of all numbers in the array. If the array is empty, return 0.",
    "guidance": [
      "Use a loop (for loop or forEach) to iterate over each element in the array.",
      "Initialize a variable to hold the sum before the loop starts.",
      "Add each number in the array to the sum variable inside the loop.",
      "Return the total sum after processing all elements."
    ],
    "hints": [
      "Consider using a for loop to iterate through the array elements.",
      "Remember that the sum variable should start at zero before adding any numbers.",
      "You can also explore the Array.reduce() method for a more concise solution."
    ],
    "starterCode": "function sumArray(numbers) {\n  // Your code here\n}",
    "expectedOutput": "sumArray([1, 2, 3, 4]) returns 10\nsumArray([]) returns 0\nsumArray([10, -5, 7]) returns 12",
    "concepts": [
      "arrays",
      "loops",
      "functions",
      "basic arithmetic"
    ],
    "estimatedTime": "10 minutes",
    "isFeatured": false
  },
  {
    "slug": "reverse-a-string-using-a-javascript-function",
    "title": "Reverse a String Using a JavaScript Function",
    "language": "javascript",
    "difficulty": "beginner",
    "category": "functions",
    "description": "Create a function that takes a string as input and returns the string reversed. This challenge will help you understand basic string manipulation and working with array methods in JavaScript.",
    "prompt": "Write a JavaScript function named reverseString that accepts a single parameter (a string) and returns the string with its characters in reverse order. For example, if the input is 'hello', the function should return 'olleh'.",
    "guidance": [
      "Think about how you can convert the string into an array to use array methods.",
      "Consider using built-in JavaScript methods like split(), reverse(), and join() for a simple solution.",
      "Remember that strings are immutable, so you cannot reverse them directly."
    ],
    "hints": [
      "Use the split('') method to convert the string into an array of characters.",
      "Use the reverse() method to reverse the array elements.",
      "Use the join('') method to combine the reversed array back into a string."
    ],
    "starterCode": "function reverseString(str) {\n  // Your code here\n}",
    "expectedOutput": "reverseString('hello') // 'olleh'\nreverseString('DevDuel') // 'leuveD'\nreverseString('JavaScript') // 'tpircSavaJ'",
    "concepts": [
      "string manipulation",
      "array methods",
      "functions"
    ],
    "estimatedTime": "10 minutes",
    "isFeatured": false
  },
  {
    "slug": "beginner-challenge-create-a-function-to-capitalize-the-first-letter-of-each-word",
    "title": "Beginner Challenge: Create a Function to Capitalize the First Letter of Each Word",
    "language": "javascript",
    "difficulty": "beginner",
    "category": "functions",
    "description": "Practice string manipulation by writing a JavaScript function that capitalizes the first letter of every word in a given sentence.",
    "prompt": "Write a function named 'capitalizeWords' that takes a single string as input and returns a new string with the first letter of each word capitalized. Words are separated by spaces. For example, 'hello world' should become 'Hello World'.",
    "guidance": [
      "Split the input string into an array of words using the space character as the separator.",
      "Capitalize the first character of each word and concatenate it with the rest of the word.",
      "Join the capitalized words back together with spaces to form the final string."
    ],
    "hints": [
      "You can use the 'split' method on strings to create an array of words.",
      "Use 'charAt(0)' to get the first letter of each word, and 'toUpperCase()' to capitalize it.",
      "Remember to add the rest of the word after the capitalized first letter."
    ],
    "starterCode": "function capitalizeWords(str) {\n  // Your code here\n}",
    "expectedOutput": "capitalizeWords('hello world') // 'Hello World'",
    "concepts": [
      "string manipulation",
      "functions",
      "arrays"
    ],
    "estimatedTime": "10 minutes",
    "isFeatured": true
  },
  {
    "slug": "sum-all-odd-numbers-in-a-list",
    "title": "Sum All Odd Numbers in a List",
    "language": "python",
    "difficulty": "beginner",
    "category": "functions",
    "description": "Write a function that calculates the sum of all odd numbers in a given list of integers.",
    "prompt": "Create a function called sum_odd_numbers that takes a list of integers as input and returns the sum of all the odd numbers in the list. If there are no odd numbers, the function should return 0.",
    "guidance": [
      "Iterate through each number in the list to check if it is odd.",
      "Use the modulus operator (%) to determine whether a number is odd.",
      "Keep a running total of all odd numbers encountered.",
      "Return the total after processing the entire list."
    ],
    "hints": [
      "Recall that an odd number has a remainder of 1 when divided by 2 (number % 2 == 1).",
      "Start by initializing a variable (like total) to 0 to accumulate the sum.",
      "You can use a for loop to go through all elements in the list."
    ],
    "starterCode": "def sum_odd_numbers(numbers):\n    # Initialize the sum\n    total = 0\n    # Your code here\n    return total",
    "expectedOutput": "sum_odd_numbers([1, 2, 3, 4, 5]) -> 9\nsum_odd_numbers([2, 4, 6, 8]) -> 0\nsum_odd_numbers([7, 11, 13]) -> 31",
    "concepts": [
      "loops",
      "conditional statements",
      "functions",
      "modulus operator"
    ],
    "estimatedTime": "10 minutes",
    "isFeatured": true
  },
  {
    "slug": "find-customers-who-made-purchases-above-100-using-sql",
    "title": "Find Customers Who Made Purchases Above $100 Using SQL",
    "language": "sql",
    "difficulty": "beginner",
    "category": "queries",
    "description": "Practice writing a SQL query to identify customers who have made purchases greater than $100 from a sales table.",
    "prompt": "Given a table named 'Sales' with columns 'CustomerID', 'PurchaseDate', and 'Amount', write a SQL query to find all unique customers who have made any purchase with an amount greater than 100. Return the CustomerID values without duplicates.",
    "guidance": [
      "Use the WHERE clause to filter purchases with Amount greater than 100.",
      "Use SELECT DISTINCT to get unique CustomerID values without duplicates.",
      "Make sure the output contains only the CustomerID column."
    ],
    "hints": [
      "Remember that DISTINCT helps to remove duplicate rows in the result.",
      "You can write a simple WHERE condition like 'Amount > 100'."
    ],
    "starterCode": "SELECT DISTINCT CustomerID\nFROM Sales\nWHERE ",
    "expectedOutput": "CustomerID\n----------\n123\n456\n789",
    "concepts": [
      "SELECT DISTINCT",
      "WHERE clause",
      "Filtering data"
    ],
    "estimatedTime": "10 minutes",
    "isFeatured": false
  },
  {
    "slug": "find-the-largest-number-in-an-array",
    "title": "Find the Largest Number in an Array",
    "language": "javascript",
    "difficulty": "beginner",
    "category": "functions",
    "description": "Write a function to identify the largest number within an array of integers.",
    "prompt": "Create a function named findLargestNumber that accepts an array of integers and returns the largest number in the array. If the array is empty, return null.",
    "guidance": [
      "Consider looping through the array to compare each number.",
      "Use a variable to keep track of the current largest number found."
    ],
    "hints": [
      "Initialize the largest number variable to the first element of the array.",
      "Remember to check if the array is empty before processing."
    ],
    "starterCode": "function findLargestNumber(numbers) {\n  // Your code here\n}",
    "expectedOutput": "findLargestNumber([3, 5, 7, 2, 8]) // 8\nfindLargestNumber([]) // null",
    "concepts": [
      "arrays",
      "loops",
      "conditionals",
      "functions"
    ],
    "estimatedTime": "10 minutes",
    "isFeatured": false
  },
  {
    "slug": "sql-beginner-challenge-calculate-total-sales-per-customer",
    "title": "SQL Beginner Challenge: Calculate Total Sales per Customer",
    "language": "sql",
    "difficulty": "beginner",
    "category": "aggregation",
    "description": "Practice basic SQL aggregation by calculating the total sales amount for each customer in a sales database.",
    "prompt": "Given a Sales table with columns CustomerID, ProductID, Quantity, and Price, write an SQL query to find the total sales amount per customer. The total sales amount is calculated by multiplying Quantity by Price for each row, summed up for each customer.",
    "guidance": [
      "Use the SUM() aggregate function to calculate the total sales for each customer.",
      "Group the results by CustomerID to get totals per customer."
    ],
    "hints": [
      "Remember to multiply Quantity by Price before summing.",
      "Use GROUP BY clause for aggregation per customer."
    ],
    "starterCode": "SELECT CustomerID, \n       -- Calculate total sales amount here\nFROM Sales\nGROUP BY CustomerID;",
    "expectedOutput": "CustomerID | TotalSales\n-----------------------\n1          | 150.00\n2          | 230.50\n3          | 75.25",
    "concepts": [
      "SQL Aggregation",
      "GROUP BY clause",
      "Basic SQL functions"
    ],
    "estimatedTime": "10 minutes",
    "isFeatured": true
  },
  {
    "slug": "find-employees-with-salaries-above-department-average",
    "title": "Find Employees with Salaries Above Department Average",
    "language": "sql",
    "difficulty": "beginner",
    "category": "queries",
    "description": "Write an SQL query to find employees whose salaries are higher than the average salary of their respective departments.",
    "prompt": "Given two tables, Employees(employee_id, employee_name, department_id, salary) and Departments(department_id, department_name), write an SQL query to return the employee_id, employee_name, and salary of employees whose salary is greater than the average salary in their department.",
    "guidance": [
      "Calculate the average salary per department using GROUP BY.",
      "Use a subquery or JOIN to compare each employee's salary with their department's average.",
      "Select only those employees whose salary is greater than the department average."
    ],
    "hints": [
      "Use the GROUP BY clause to find average salary for each department.",
      "A JOIN between Employees and the subquery with averages can help filter.",
      "Remember to compare salary values with the calculated average per department."
    ],
    "starterCode": "SELECT employee_id, employee_name, salary FROM Employees WHERE salary > (SELECT AVG(salary) FROM Employees WHERE department_id = Employees.department_id);",
    "expectedOutput": "A table listing employee_id, employee_name, and salary of employees earning more than their department's average salary.",
    "concepts": [
      "aggregate functions",
      "subqueries",
      "JOINs",
      "GROUP BY"
    ],
    "estimatedTime": "10 minutes",
    "isFeatured": false
  },
  {
    "slug": "simple-to-do-list-app-in-javascript",
    "title": "Simple To-Do List App in JavaScript",
    "language": "javascript",
    "difficulty": "beginner",
    "category": "mini-projects",
    "description": "Create a basic to-do list application where users can add tasks, mark them as completed, and see the updated list.",
    "prompt": "Build a function that manages a to-do list. Your function should allow adding new tasks and marking tasks as completed by their name. It should return an updated array of task objects, where each task has a name and a completed status (true/false). Initially, all tasks are incomplete. Given an initial list of tasks, implement two functions: addTask(taskName) and completeTask(taskName).",
    "guidance": [
      "Use an array to store task objects with properties 'name' and 'completed'.",
      "The addTask function should add a new task with 'completed' set to false.",
      "The completeTask function should find the task by name and change its completed status to true."
    ],
    "hints": [
      "Remember to check if a task already exists before adding it.",
      "Use array methods like push() and find() or findIndex() to help manipulate the tasks."
    ],
    "starterCode": "const tasks = [];\n\nfunction addTask(taskName) {\n  // your code here\n}\n\nfunction completeTask(taskName) {\n  // your code here\n}",
    "expectedOutput": "[{ name: 'Buy milk', completed: true }, { name: 'Walk dog', completed: false }]",
    "concepts": [
      "arrays",
      "objects",
      "functions"
    ],
    "estimatedTime": "10 minutes",
    "isFeatured": true
  },
  {
    "slug": "build-a-task-tracker-with-priority-sorting",
    "title": "Build a Task Tracker with Priority Sorting",
    "language": "javascript",
    "difficulty": "intermediate",
    "category": "mini-projects",
    "description": "Create a JavaScript function to manage and sort a list of tasks with priorities and deadlines. This mini-project simulates a simple task tracker with sorting and filtering.",
    "prompt": "Write a function named `manageTasks` that accepts two parameters: an array of task objects and an options object. Each task object has `id`, `title`, `priority` (integer from 1 to 5, 1 being highest), and `dueDate` (ISO date string). The options object may specify `sortBy` (either 'priority' or 'dueDate'), and an optional filter `minPriority` to only include tasks with priority less than or equal to that value (e.g., minPriority=3 means include priority 1, 2, or 3). The function should filter and then sort the tasks accordingly and return the final array of tasks.\n\nExample usage:\n\nmanageTasks(tasks, { sortBy: 'dueDate', minPriority: 3 })\n\nshould return tasks with priority 1, 2, or 3, sorted by dueDate ascending.\n\nImplement robust comparison and filtering logic inside your function.",
    "guidance": [
      "First, filter the tasks based on the minPriority if provided.",
      "Next, sort the filtered list by the chosen key: priority or dueDate.",
      "Remember that priority sorting is ascending (1 is highest), and dueDate sorting is ascending (earliest date first).",
      "Ensure that dueDate strings are converted to Date objects for accurate comparison."
    ],
    "hints": [
      "Use Array.filter() to implement the filtering by priority.",
      "Use Array.sort() with a custom comparator function for sorting.",
      "The Date.parse() or new Date() constructor can help convert date strings for comparison."
    ],
    "starterCode": "function manageTasks(tasks, options) {\n  // Your code here\n}",
    "expectedOutput": "[\n  { id: 5, title: 'Finish report', priority: 2, dueDate: '2024-06-10' },\n  { id: 3, title: 'Update docs', priority: 3, dueDate: '2024-06-15' }\n]",
    "concepts": [
      "arrays",
      "objects",
      "filtering",
      "sorting",
      "date manipulation"
    ],
    "estimatedTime": "15 minutes",
    "isFeatured": false
  },
  {
    "slug": "fix-bug-in-complex-recursive-depth-first-search-algorithm-for-graph-cycle-detection",
    "title": "Fix Bug in Complex Recursive Depth-First Search Algorithm for Graph Cycle Detection",
    "language": "python",
    "difficulty": "advanced",
    "category": "debugging",
    "description": "Identify and correct the logical errors in a recursive depth-first search (DFS) implementation designed to detect cycles in a directed graph. The provided code attempts to return True if a cycle exists, but it fails in some cases. Your task is to debug and fix the code while preserving its overall structure and efficiency.",
    "prompt": "You are provided with a Python function 'has_cycle' that implements a recursive DFS to detect cycles in a directed graph represented as an adjacency list. The function should return True if the graph contains at least one cycle, and False otherwise. However, some test cases reveal it returns incorrect results. Review the code, identify the bugs, and fix them so that cycle detection works correctly for any directed graph input.",
    "guidance": [
      "Understand how DFS with recursion stack tracking is used to detect cycles in directed graphs.",
      "Check how nodes are marked as visited and how the recursion stack is updated and cleared.",
      "Make sure the function returns appropriately once a cycle is detected to avoid unnecessary traversals.",
      "Test on simple graphs with cycles and without cycles to verify correctness."
    ],
    "hints": [
      "Pay close attention to how the recursion stack is managed—nodes must be removed after exploring all their neighbors.",
      "Be cautious about when and where the function returns True when a cycle is found to prevent premature termination.",
      "Consider whether the 'visited' and 'recStack' data structures are being used consistently throughout the recursion."
    ],
    "starterCode": "def has_cycle(graph):\n    visited = set()\n    recStack = set()\n\n    def dfs(node):\n        if node in recStack:\n            return True\n        if node in visited:\n            return False\n\n        visited.add(node)\n        recStack.add(node)\n\n        for neighbour in graph.get(node, []):\n            dfs(neighbour)\n\n        recStack.remove(node)\n        return False\n\n    for vertex in graph:\n        if dfs(vertex):\n            return True\n    return False",
    "expectedOutput": "has_cycle({'A': ['B'], 'B': ['C'], 'C': ['A']}) -> True\nhas_cycle({'A': ['B'], 'B': ['C'], 'C': []}) -> False",
    "concepts": [
      "graph theory",
      "depth-first search",
      "recursion",
      "cycle detection"
    ],
    "estimatedTime": "15 minutes",
    "isFeatured": false
  },
  {
    "slug": "fix-the-bug-in-array-sum-function",
    "title": "Fix the Bug in Array Sum Function",
    "language": "javascript",
    "difficulty": "beginner",
    "category": "debugging",
    "description": "The provided JavaScript function is supposed to sum all numbers in an array, but it contains bugs. Your task is to identify and fix the bugs so the function correctly returns the sum of the array elements.",
    "prompt": "Below is a JavaScript function intended to sum all numbers in an array. However, the function is returning incorrect results or errors. Fix the bugs in the function to make it return the correct sum of any numeric array passed to it.",
    "guidance": [
      "Check the function parameters and ensure they are used correctly.",
      "Look at how the loop iterates through the array elements.",
      "Make sure the sum variable is initialized properly before use."
    ],
    "hints": [
      "Remember to initialize the sum variable before adding values to it.",
      "Check that the for loop condition correctly iterates over the array indices.",
      "Ensure the function returns the computed sum after the loop."
    ],
    "starterCode": "function sumArray(arr) {\n  let sum = 0;\n  for (let i = 1; i <= arr.length; i++) {\n    sum += arr[i];\n  }\n  // missing return statement\n}",
    "expectedOutput": "sumArray([1, 2, 3, 4]) // 10\nsumArray([10, -5, 7]) // 12\nsumArray([]) // 0",
    "concepts": [
      "loops",
      "arrays",
      "function return values",
      "variable initialization"
    ],
    "estimatedTime": "10 minutes",
    "isFeatured": false
  },
  {
    "slug": "refactor-messy-inventory-management-code",
    "title": "Refactor Messy Inventory Management Code",
    "language": "cpp",
    "difficulty": "intermediate",
    "category": "code-quality",
    "description": "Improve the structure and readability of a cluttered C++ function that manages inventory updates while preserving its original behavior.",
    "prompt": "You are given a function that updates the stock quantities of items in an inventory based on incoming orders. The current implementation is messy, with nested conditionals, duplicated code, and unclear variable names. Refactor the code to improve its readability, maintainability, and remove duplication without changing its behavior. Ensure the function still correctly updates the inventory and handles orders as expected.",
    "guidance": [
      "Focus on simplifying nested if-else statements and reducing code duplication.",
      "Use meaningful variable names to enhance code clarity.",
      "Consider breaking down the function into smaller helper functions if helpful."
    ],
    "hints": [
      "Identify and extract repeated code blocks into separate functions or loops.",
      "Use standard library features such as range-based for loops and references to clean up iteration."
    ],
    "starterCode": "void updateInventory(std::map<std::string, int> &inventory, const std::vector<std::pair<std::string, int>> &orders) {\n    for (size_t i = 0; i < orders.size(); i++) {\n        std::string item = orders[i].first;\n        int qty = orders[i].second;\n        if (inventory.find(item) != inventory.end()) {\n            if (qty > 0) {\n                int currentStock = inventory[item];\n                if (currentStock >= qty) {\n                    inventory[item] = currentStock - qty;\n                } else {\n                    inventory[item] = 0;\n                }\n            } else {\n                if (qty < 0) {\n                    inventory[item] = inventory[item] + (-qty);\n                } // else do nothing for zero qty\n            }\n        } else {\n            if (qty < 0) {\n                inventory[item] = -qty;\n            } else {\n                // do nothing if positive qty but item not found\n            }\n        }\n    }\n}",
    "expectedOutput": "After refactoring, the function behaves identically to the original implementation, correctly updating inventory quantities based on the orders vector.",
    "concepts": [
      "code refactoring",
      "std::map",
      "loops",
      "conditional logic"
    ],
    "estimatedTime": "10 minutes",
    "isFeatured": false
  },
  {
    "slug": "predict-the-output-of-a-recursive-generator-with-complex-state",
    "title": "Predict the Output of a Recursive Generator with Complex State",
    "language": "python",
    "difficulty": "advanced",
    "category": "logic",
    "description": "Analyze the output of a Python function that uses recursion, generators, and mutable state to yield a sequence of numbers based on intricate control flow.",
    "prompt": "Consider the following Python function that recursively generates a sequence of numbers using a generator and a mutable dictionary as state. What will be the printed output when the function run_sequence(3, {}) is called and fully iterated?\n\nAnalyze carefully how the function manages its state and the order in which numbers are yielded.\n\nProvide the exact output sequence as a list of integers separated by spaces.",
    "guidance": [
      "Focus on how recursive calls affect the shared mutable dictionary state.",
      "Follow the generator's yield sequence carefully, considering the order of yielding before and after recursion.",
      "Remember Python generators pause at yield statements and resume where they left off."
    ],
    "hints": [
      "Trace through the calls starting from n=3 down to n=0 to see how the state dictionary changes.",
      "Note when the function yields values around the recursive calls (before or after).",
      "Pay attention to the key 'count' in the state dictionary and how it increments."
    ],
    "starterCode": "def run_sequence(n, state):\n    if 'count' not in state:\n        state['count'] = 0\n    if n == 0:\n        yield 0\n        return\n    state['count'] += 1\n    yield state['count']\n    yield from run_sequence(n-1, state)\n    state['count'] += 1\n    yield state['count']\n\nprint(' '.join(str(x) for x in run_sequence(3, {})))",
    "expectedOutput": "1 2 3 0 4 5 6",
    "concepts": [
      "recursion",
      "generators",
      "mutable state",
      "yield behavior"
    ],
    "estimatedTime": "10 minutes",
    "isFeatured": false
  },
  {
    "slug": "fix-the-broken-select-query-to-retrieve-employee-names",
    "title": "Fix the Broken SELECT Query to Retrieve Employee Names",
    "language": "sql",
    "difficulty": "beginner",
    "category": "debugging",
    "description": "A simple SQL query intended to retrieve all employee names is not working correctly. Your task is to identify and fix the syntax errors so the query runs successfully and returns the correct results.",
    "prompt": "You have a table called Employees with columns id, name, and department. The following SQL query is intended to select all employee names, but it contains errors and does not run properly. Fix the query so it executes correctly and returns the correct list of employee names.",
    "guidance": [
      "Check for common SQL syntax issues such as missing or misplaced keywords or punctuation.",
      "Ensure the SELECT statement includes the correct column name.",
      "Verify the table name is spelled correctly and referenced properly."
    ],
    "hints": [
      "SELECT queries usually start with the keyword SELECT followed by the column(s) you want to retrieve.",
      "Check if commas and FROM keyword are used correctly.",
      "Make sure column and table names are spelled exactly as they appear in the database."
    ],
    "starterCode": "SELEC name FROM Employee;",
    "expectedOutput": "A list of all employee names from the Employees table, for example:\nJohn Doe\nJane Smith\nAlice Johnson",
    "concepts": [
      "Basic SQL syntax",
      "SELECT statement",
      "Column and table naming"
    ],
    "estimatedTime": "10 minutes",
    "isFeatured": true
  },
  {
    "slug": "build-a-json-data-filter-and-sorter",
    "title": "Build a JSON Data Filter and Sorter",
    "language": "javascript",
    "difficulty": "intermediate",
    "category": "mini-projects",
    "description": "Create a JavaScript function that accepts an array of JSON objects representing products, filters them based on multiple criteria, and then sorts the filtered results by a specified property.",
    "prompt": "You are given an array of product objects, each with properties like name, category, price, and rating. Write a function `filterAndSortProducts(products, filters, sortBy, sortOrder)` that filters this array according to the given filter criteria (category and minimum rating), and then sorts the filtered results by price or rating in ascending or descending order.\n\n- `products`: Array of product objects.\n- `filters`: Object with optional keys `category` (string) and `minRating` (number).\n- `sortBy`: string, either \"price\" or \"rating\".\n- `sortOrder`: string, either \"asc\" or \"desc\".\n\nReturn the filtered and sorted array.\n\nExample:\n\nconst products = [\n  {name: \"Product A\", category: \"electronics\", price: 99.99, rating: 4.5},\n  {name: \"Product B\", category: \"clothing\", price: 29.99, rating: 4.2},\n  {name: \"Product C\", category: \"electronics\", price: 199.99, rating: 4.8},\n];\n\nfilterAndSortProducts(products, {category: \"electronics\", minRating: 4.5}, \"price\", \"asc\");\n\nShould return Product A and Product C, sorted by price ascending.",
    "guidance": [
      "Use Array.filter() with conditions based on the filters object to narrow down the products.",
      "Use Array.sort() to sort the filtered products according to the specified property and order.",
      "Handle cases where filters or sort parameters may be missing or undefined."
    ],
    "hints": [
      "Remember to check if filter criteria exist before applying them.",
      "For sorting in descending order, reverse the comparison results.",
      "Use optional chaining or default parameters to avoid errors when accessing filters."
    ],
    "starterCode": "function filterAndSortProducts(products, filters, sortBy, sortOrder) {\n  // Your code here\n}\n\nconst products = [\n  {name: \"Product A\", category: \"electronics\", price: 99.99, rating: 4.5},\n  {name: \"Product B\", category: \"clothing\", price: 29.99, rating: 4.2},\n  {name: \"Product C\", category: \"electronics\", price: 199.99, rating: 4.8},\n];",
    "expectedOutput": "[\n  {name: \"Product A\", category: \"electronics\", price: 99.99, rating: 4.5},\n  {name: \"Product C\", category: \"electronics\", price: 199.99, rating: 4.8}\n]",
    "concepts": [
      "Array filtering",
      "Array sorting",
      "Objects and properties",
      "Conditional logic"
    ],
    "estimatedTime": "10 minutes",
    "isFeatured": false
  },
  {
    "slug": "build-a-sql-function-to-calculate-running-median-over-a-dynamic-window",
    "title": "Build a SQL Function to Calculate Running Median Over a Dynamic Window",
    "language": "sql",
    "difficulty": "advanced",
    "category": "queries",
    "description": "In this challenge, you will create a SQL function that calculates the running median value of a numeric column over a dynamic sliding window based on timestamps. This requires advanced use of window functions, array manipulation, and median calculation within SQL.",
    "prompt": "Create a SQL function named `running_median` that accepts a table name, a numeric column name, a timestamp column name, and an integer window size (in terms of the number of rows). The function should return the original table appended with an additional column `median_val` that contains the median of the numeric column over the previous `window_size` rows ordered by the timestamp column (including the current row). Implement this using standard SQL with window functions, arrays, or any relevant constructs available in your SQL dialect. Your solution must handle dynamic input parameters for column and table names where possible (or describe assumptions if not possible).",
    "guidance": [
      "Use window functions like ROWS BETWEEN to define sliding windows based on row counts.",
      "Since SQL does not have a built-in median aggregate in all dialects, consider using arrays and percentile_cont or manual calculation using array slicing.",
      "Think about performance optimizations for large datasets and how to minimize repeated calculations."
    ],
    "hints": [
      "percentile_cont(0.5) WITHIN GROUP (ORDER BY column) can be used in some SQL dialects to approximate median within a window.",
      "If dynamic table and column names cannot be parameterized in your SQL environment, create the function targeting fixed columns or symbolize with identifiers.",
      "You can aggregate values into arrays over the window, then select the middle element(s) to find the median."
    ],
    "starterCode": "CREATE FUNCTION running_median(window_size INTEGER)\nRETURNS TABLE(id INT, event_time TIMESTAMP, value NUMERIC, median_val NUMERIC) AS $$\nBEGIN\n  -- Implement your logic here assuming a fixed table named 'events' with columns 'id', 'event_time', and 'value'\n  RETURN QUERY\n  SELECT\n    id,\n    event_time,\n    value,\n    -- placeholder for median calculation\n    NULL::NUMERIC AS median_val\n  FROM events\n  ORDER BY event_time;\nEND;\n$$ LANGUAGE plpgsql;",
    "expectedOutput": "A result set from the 'events' table including a new column 'median_val' where each row's value is the median of the 'value' column over the last 'window_size' rows ordered by 'event_time'.",
    "concepts": [
      "Window Functions",
      "Median Calculation",
      "Aggregate Functions",
      "Array Manipulation in SQL"
    ],
    "estimatedTime": "15 minutes",
    "isFeatured": true
  },
  {
    "slug": "predict-the-output-of-a-simple-loop-and-conditional-in-c",
    "title": "Predict the Output of a Simple Loop and Conditional in C++",
    "language": "cpp",
    "difficulty": "beginner",
    "category": "logic",
    "description": "Analyze the given C++ code involving a loop and conditional statements, and predict the exact output it produces when run.",
    "prompt": "Consider the following C++ code snippet. What will be the output when this code runs?\n\nint main() {\n    for (int i = 1; i <= 5; i++) {\n        if (i % 2 == 0) {\n            std::cout << i << \" is even\\n\";\n        } else {\n            std::cout << i << \" is odd\\n\";\n        }\n    }\n    return 0;\n}\n\nWrite down the exact text output the program prints.",
    "guidance": [
      "Carefully check the loop's start and end conditions to know which numbers it processes.",
      "Remember how the modulo operator (%) determines if a number is even or odd.",
      "Each iteration prints one line; count how many lines will be output."
    ],
    "hints": [
      "The loop variable 'i' starts at 1 and increases by 1 until it reaches 5.",
      "If 'i % 2 == 0' evaluates to true, the number is even; otherwise, it's odd."
    ],
    "starterCode": "int main() {\n    for (int i = 1; i <= 5; i++) {\n        if (i % 2 == 0) {\n            std::cout << i << \" is even\\n\";\n        } else {\n            std::cout << i << \" is odd\\n\";\n        }\n    }\n    return 0;\n}",
    "expectedOutput": "1 is odd\n2 is even\n3 is odd\n4 is even\n5 is odd",
    "concepts": [
      "loops",
      "conditionals",
      "modulo operator"
    ],
    "estimatedTime": "10 minutes",
    "isFeatured": false
  },
  {
    "slug": "design-and-query-a-library-management-data-model",
    "title": "Design and Query a Library Management Data Model",
    "language": "sql",
    "difficulty": "intermediate",
    "category": "data-modeling",
    "description": "Create a SQL data model for a library management system and write queries to retrieve meaningful information about books, authors, borrowers, and loans.",
    "prompt": "You are tasked with designing a simple relational database schema for a library management system. Your database must include tables for Books, Authors, Borrowers, and Loans. Each book can have multiple authors, and each borrower can have multiple loans. After creating the schema and inserting sample data, write a SQL query to find the names of all borrowers who currently have at least one book on loan that was authored by 'Jane Austen'. Include the book title, borrower name, and loan date in your results.",
    "guidance": [
      "Design tables with appropriate primary keys and foreign keys to represent the relationships.",
      "Consider a junction table for the many-to-many relationship between Books and Authors.",
      "Write a query using JOINs to connect Borrowers, Loans, Books, and Authors.",
      "Filter loans to include only those not yet returned (assume a NULL return date)."
    ],
    "hints": [
      "The many-to-many relationship between Books and Authors requires a separate linking table.",
      "Use INNER JOINs to combine the data across multiple tables.",
      "Filter on author name in the WHERE clause and check for NULL return_date to find current loans."
    ],
    "starterCode": "CREATE TABLE Authors (\n  author_id INT PRIMARY KEY,\n  name VARCHAR(100) NOT NULL\n);\n\nCREATE TABLE Books (\n  book_id INT PRIMARY KEY,\n  title VARCHAR(200) NOT NULL\n);\n\nCREATE TABLE BookAuthors (\n  book_id INT,\n  author_id INT,\n  PRIMARY KEY (book_id, author_id),\n  FOREIGN KEY (book_id) REFERENCES Books(book_id),\n  FOREIGN KEY (author_id) REFERENCES Authors(author_id)\n);\n\nCREATE TABLE Borrowers (\n  borrower_id INT PRIMARY KEY,\n  name VARCHAR(100) NOT NULL\n);\n\nCREATE TABLE Loans (\n  loan_id INT PRIMARY KEY,\n  book_id INT,\n  borrower_id INT,\n  loan_date DATE,\n  return_date DATE,\n  FOREIGN KEY (book_id) REFERENCES Books(book_id),\n  FOREIGN KEY (borrower_id) REFERENCES Borrowers(borrower_id)\n);",
    "expectedOutput": "A result set containing columns: title, name, loan_date for all borrowers who have an active loan (return_date IS NULL) of a book authored by 'Jane Austen'. For example:\n\n| title                 | name            | loan_date  |\n|-----------------------|-----------------|------------|\n| Pride and Prejudice   | Emily Clark     | 2024-03-01 |\n| Sense and Sensibility | John Doe        | 2024-04-15 |",
    "concepts": [
      "SQL JOINs",
      "many-to-many relationships",
      "foreign keys",
      "query filtering"
    ],
    "estimatedTime": "15 minutes",
    "isFeatured": true
  },
  {
    "slug": "fix-the-memory-leak-and-logic-bug-in-a-recursive-deep-clone-function",
    "title": "Fix the Memory Leak and Logic Bug in a Recursive Deep Clone Function",
    "language": "javascript",
    "difficulty": "advanced",
    "category": "debugging",
    "description": "This challenge provides a broken implementation of a deep clone function in JavaScript. The function is supposed to recursively clone any object or array, preserving nested structures without reference sharing. However, the current implementation has both a logic bug causing incorrect cloning of nested structures and a memory leak due to undetected circular references. Your task is to fix these issues and optimize the function for deep cloning complex objects.",
    "prompt": "You're given a deepClone function intended to recursively clone objects and arrays. However, it fails for complex nested objects, especially those containing circular references. It reuses references incorrectly, can cause infinite recursion, and leaks memory. Fix the deepClone function to correctly and safely deep clone any input (object or array), handle circular references gracefully, and ensure no memory leaks occur.",
    "guidance": [
      "Detect and keep track of already cloned objects to resolve circular references.",
      "Ensure arrays and objects are cloned properly without referencing the original.",
      "Avoid global variables or growing state that causes memory leaks.",
      "Use a helper parameter (like a WeakMap) to store references during recursion."
    ],
    "hints": [
      "Use a WeakMap to map original objects to their clones during recursion to avoid infinite loops.",
      "Return primitive types immediately without cloning, since they are immutable.",
      "Avoid recreating large objects repeatedly without garbage collection support."
    ],
    "starterCode": "function deepClone(obj) {\n  if (obj === null || typeof obj !== 'object') {\n    return obj;\n  }\n\n  if (Array.isArray(obj)) {\n    let cloneArr = [];\n    for (let i = 0; i < obj.length; i++) {\n      cloneArr[i] = deepClone(obj[i]);\n    }\n    return cloneArr;\n  } else {\n    let cloneObj = {};\n    for (let key in obj) {\n      cloneObj[key] = deepClone(obj[key]);\n    }\n    return cloneObj;\n  }\n}",
    "expectedOutput": "const circularObj = {};\ncircularObj.self = circularObj;\nconst cloned = deepClone(circularObj);\nconsole.log(cloned !== circularObj); // true\nconsole.log(cloned.self === cloned); // true\n\nconst original = { a: 1, b: { c: 2 } };\nconst copy = deepClone(original);\nconsole.log(copy !== original); // true\nconsole.log(copy.b !== original.b); // true\nconsole.log(copy.b.c === 2); // true",
    "concepts": [
      "recursion",
      "deep cloning",
      "memory management",
      "circular references",
      "WeakMap"
    ],
    "estimatedTime": "15 minutes",
    "isFeatured": false
  },
  {
    "slug": "build-a-function-to-check-even-or-odd-numbers",
    "title": "Build a Function to Check Even or Odd Numbers",
    "language": "python",
    "difficulty": "beginner",
    "category": "functions",
    "description": "Create a simple Python function that takes an integer as input and returns whether the number is 'Even' or 'Odd'. This helps beginners practice conditionals and function definitions.",
    "prompt": "Write a function named check_even_odd that accepts one integer parameter and returns the string 'Even' if the number is even, or 'Odd' if the number is odd.",
    "guidance": [
      "Define a function using def and specify one parameter.",
      "Use the modulo operator (%) to check if the number is divisible by 2.",
      "Return 'Even' if the number modulo 2 equals zero; otherwise, return 'Odd'."
    ],
    "hints": [
      "The modulo operator (%) gives the remainder when dividing two numbers.",
      "If number % 2 == 0, the number is even; else it is odd."
    ],
    "starterCode": "def check_even_odd(num):\n    # Your code here\n    pass",
    "expectedOutput": "check_even_odd(10)  # Output: 'Even'\ncheck_even_odd(7)   # Output: 'Odd'",
    "concepts": [
      "functions",
      "conditionals",
      "modulo operator"
    ],
    "estimatedTime": "10 minutes",
    "isFeatured": false
  },
  {
    "slug": "predict-the-output-of-a-complex-array-and-object-transformation",
    "title": "Predict the Output of a Complex Array and Object Transformation",
    "language": "javascript",
    "difficulty": "intermediate",
    "category": "logic",
    "description": "Analyze the provided JavaScript code snippet that manipulates arrays and objects with multiple steps. Predict the exact output produced by the code.",
    "prompt": "Given the following JavaScript code that processes an array of user objects, determine what the console.log output will be when the code is executed. Focus on understanding the transformations, map/filter usage, and combined operations on the data.",
    "guidance": [
      "Examine how the map() and filter() methods transform the array step-by-step.",
      "Pay attention to how object properties are accessed and modified within callback functions.",
      "Consider the order of operations and how chaining affects the intermediate results."
    ],
    "hints": [
      "Remember that map() returns a new array based on the return value of its callback.",
      "Filtering affects which elements continue in the chain, so consider which users are excluded.",
      "Look carefully at nested properties and increments inside the map callbacks."
    ],
    "starterCode": "const users = [\n  { id: 1, name: 'Alice', scores: [10, 20, 30] },\n  { id: 2, name: 'Bob', scores: [5, 15] },\n  { id: 3, name: 'Charlie', scores: [] },\n  { id: 4, name: 'David', scores: [8, 8, 8] }\n];\n\nconst processedUsers = users\n  .map(user => ({\n    ...user,\n    totalScore: user.scores.reduce((a, b) => a + b, 0),\n    averageScore: user.scores.length ? user.scores.reduce((a, b) => a + b, 0) / user.scores.length : 0\n  }))\n  .filter(user => user.totalScore >= 20)\n  .map(user => ({\n    id: user.id * 2,\n    name: user.name.toUpperCase(),\n    totalScore: user.totalScore + 5,\n    averageScore: parseFloat(user.averageScore.toFixed(2))\n  }));\n\nconsole.log(processedUsers);",
    "expectedOutput": "[\n  { id: 2, name: 'ALICE', totalScore: 65, averageScore: 20 },\n  { id: 8, name: 'DAVID', totalScore: 29, averageScore: 8 }\n]",
    "concepts": [
      "Array map()",
      "Array filter()",
      "Array reduce()",
      "Object destructuring and spread syntax"
    ],
    "estimatedTime": "10 minutes",
    "isFeatured": false
  },
  {
    "slug": "fix-the-infinite-recursion-bug-in-a-python-memoization-function",
    "title": "Fix the Infinite Recursion Bug in a Python Memoization Function",
    "language": "python",
    "difficulty": "advanced",
    "category": "debugging",
    "description": "Identify and fix a subtle bug causing infinite recursion in a Python function designed to compute Fibonacci numbers with memoization. The code uses a dictionary cache but incorrectly implements memoization logic, leading to recursion errors. Your task is to debug the function to correctly utilize memoization and efficiently compute Fibonacci values.",
    "prompt": "The provided Python function is intended to compute the nth Fibonacci number using memoization to optimize repeated calculations. However, it produces a RuntimeError due to infinite recursion. Identify and fix the bug causing this infinite recursion so that the function returns the correct Fibonacci number efficiently. Preserve the memoization approach in your fix.",
    "guidance": [
      "Review how the function uses the cache dictionary to store computed Fibonacci values.",
      "Check the base cases to ensure proper termination of recursion.",
      "Ensure that the recursive results are stored in the cache before returning."
    ],
    "hints": [
      "The cache assignment might be placed incorrectly or missing before the recursive return.",
      "If you omit storing the computed result in the cache, recursive calls will never resolve.",
      "Confirm that the function checks the cache before computing new Fibonacci values."
    ],
    "starterCode": "def fib(n, cache={}):\n    if n == 0:\n        return 0\n    if n == 1:\n        return 1\n    if n not in cache:\n        return fib(n - 1, cache) + fib(n - 2, cache)\n    return cache[n]",
    "expectedOutput": "fib(10) should return 55",
    "concepts": [
      "recursion",
      "memoization",
      "dictionary caching",
      "debugging infinite recursion"
    ],
    "estimatedTime": "15 minutes",
    "isFeatured": false
  },
  {
    "slug": "build-a-function-to-check-if-a-number-is-even",
    "title": "Build a Function to Check if a Number is Even",
    "language": "javascript",
    "difficulty": "beginner",
    "category": "functions",
    "description": "Create a simple JavaScript function that takes a number as input and returns true if the number is even, and false if it is odd.",
    "prompt": "Write a function named isEven that accepts one parameter, a number. The function should return true if the number is even, and false if the number is odd.",
    "guidance": [
      "Recall that a number is even if it is divisible by 2 with no remainder.",
      "Use the modulus operator (%) to find the remainder when dividing the number by 2.",
      "Return true if the remainder is 0; otherwise, return false."
    ],
    "hints": [
      "Try using 'number % 2' — what does it return for even numbers?",
      "Remember that the function should return a boolean value, true or false.",
      "Test your function with both even and odd numbers to verify it works correctly."
    ],
    "starterCode": "function isEven(number) {\n  // Your code here\n}",
    "expectedOutput": "isEven(4) // true\nisEven(7) // false",
    "concepts": [
      "functions",
      "conditionals",
      "modulus operator"
    ],
    "estimatedTime": "10 minutes",
    "isFeatured": false
  },
  {
    "slug": "refactor-and-simplify-nested-loops-for-data-aggregation",
    "title": "Refactor and Simplify Nested Loops for Data Aggregation",
    "language": "python",
    "difficulty": "intermediate",
    "category": "code-quality",
    "description": "Improve the structure and readability of a Python function that aggregates sales data from multiple stores and products, while preserving its original behavior.",
    "prompt": "You are given a function that processes sales data from several stores to calculate the total sales per product category. The current implementation uses multiple nested loops, redundant conditions, and some repeated code blocks, making it hard to maintain and understand. Refactor the function to simplify the logic, reduce nesting, and improve readability without changing the output.",
    "guidance": [
      "Focus on removing unnecessary loops or conditions and consolidate repeated code.",
      "Use intermediate variables or helper functions if it makes the code clearer.",
      "Ensure that the function behavior and final output remain exactly the same after refactoring."
    ],
    "hints": [
      "Look for places where you can use dictionary methods like get() to avoid explicit conditionals.",
      "Consider looping over data just once where possible, using data structures to hold intermediate results.",
      "Use descriptive variable names and consider list/dictionary comprehensions where applicable."
    ],
    "starterCode": "def calculate_total_sales(data):\n    result = {}\n    for store in data:\n        for product in store['products']:\n            category = product['category']\n            if category in result:\n                if product['name'] in result[category]:\n                    result[category][product['name']] += product['sales']\n                else:\n                    result[category][product['name']] = product['sales']\n            else:\n                result[category] = {}\n                if product['name'] in result[category]:\n                    result[category][product['name']] += product['sales']\n                else:\n                    result[category][product['name']] = product['sales']\n    return result",
    "expectedOutput": "{'Electronics': {'TV': 350, 'Radio': 80}, 'Books': {'Novel': 120, 'Comics': 75}}",
    "concepts": [
      "refactoring",
      "nested loops",
      "dictionaries",
      "code readability"
    ],
    "estimatedTime": "10 minutes",
    "isFeatured": false
  },
  {
    "slug": "predict-output-of-complex-recursive-and-bitwise-operations-in-c",
    "title": "Predict Output of Complex Recursive and Bitwise Operations in C++",
    "language": "cpp",
    "difficulty": "advanced",
    "category": "logic",
    "description": "Analyze a complex C++ program that uses recursion combined with bitwise operations and tricky short-circuit logic. Predict the exact output produced by the program without running it.",
    "prompt": "Given the following C++ code, determine the exact output printed to stdout.\n\nExplain the reasoning behind the output considering recursion, bitwise operations, and short-circuit evaluation.\n\n#include <iostream>\n\nint func(int x) {\n    static int state = 1;\n    if (x <= 0) return 0;\n    int result = 0;\n    if ((x & 1) && (state++ < 4)) {\n        result += func(x - 2);\n        result += state;\n    } else {\n        result += func(x - 1);\n        result += state * 2;\n    }\n    return result;\n}\n\nint main() {\n    std::cout << func(5) << std::endl;\n    return 0;\n}",
    "guidance": [
      "Trace the recursive calls carefully, keeping track of the static state variable's value at each stage.",
      "Pay special attention to short-circuit evaluation of the condition in the if statement.",
      "Remember how bitwise AND (&) works to check the parity of x.",
      "Consider the order of operations inside each recursive call."
    ],
    "hints": [
      "The static 'state' variable persists and increments only under certain conditions — track that closely.",
      "When x is odd, the first condition short-circuits if 'state < 4' is false.",
      "Calculate smaller inputs first to build the solution upwards."
    ],
    "starterCode": "#include <iostream>\n\nint func(int x) {\n    static int state = 1;\n    if (x <= 0) return 0;\n    int result = 0;\n    if ((x & 1) && (state++ < 4)) {\n        result += func(x - 2);\n        result += state;\n    } else {\n        result += func(x - 1);\n        result += state * 2;\n    }\n    return result;\n}\n\nint main() {\n    std::cout << func(5) << std::endl;\n    return 0;\n}",
    "expectedOutput": "14",
    "concepts": [
      "recursion",
      "bitwise operations",
      "static variables",
      "short-circuit evaluation"
    ],
    "estimatedTime": "10 minutes",
    "isFeatured": true
  },
  {
    "slug": "predict-the-output-of-nested-list-comprehensions-with-conditional-logic",
    "title": "Predict the Output of Nested List Comprehensions with Conditional Logic",
    "language": "python",
    "difficulty": "intermediate",
    "category": "logic",
    "description": "Analyze nested list comprehensions with conditional statements and predict the final output of the given Python code snippet.",
    "prompt": "Consider the following Python code that uses nested list comprehensions combined with conditional and arithmetic logic. Predict the exact output printed by the code:\n\nfor i in range(3):\n    result = [j * i if j % 2 == 0 else j + i for j in range(5)]\n    print(result)\n\nWhat is the output of the above code?",
    "guidance": [
      "Carefully evaluate the nested list comprehension inside the loop for each value of i from 0 to 2.",
      "For each element j in the inner range, decide which expression applies based on whether j is even or odd.",
      "Calculate the final derived list for each iteration and consider how the results change with different values of i."
    ],
    "hints": [
      "Recall that 'j % 2 == 0' checks if j is even.",
      "For even j, the expression is 'j * i'; for odd j, it is 'j + i'.",
      "Track the values of i and j step-by-step for clarity."
    ],
    "starterCode": "for i in range(3):\n    result = [j * i if j % 2 == 0 else j + i for j in range(5)]\n    print(result)",
    "expectedOutput": "[0, 1, 0, 3, 0]\n[0, 2, 2, 4, 4]\n[0, 3, 4, 5, 8]",
    "concepts": [
      "list comprehensions",
      "conditional expressions",
      "loops",
      "modulo operator"
    ],
    "estimatedTime": "10 minutes",
    "isFeatured": false
  },
  {
    "slug": "fix-bug-in-complex-sql-query-summarizing-sales-data",
    "title": "Fix Bug in Complex SQL Query Summarizing Sales Data",
    "language": "sql",
    "difficulty": "advanced",
    "category": "debugging",
    "description": "Debug and fix the provided SQL query that intends to summarize monthly sales data by product category but produces incorrect results due to logical errors and misused joins.",
    "prompt": "You are given a SQL query designed to calculate the total sales and average sales per product category per month from sales and product tables. However, the query currently returns incorrect totals, duplicates rows, or omits some data. Identify and fix the bugs in the SQL query so that it correctly aggregates total and average sales grouped by category and month.\n\nThe schema consists of:\n- sales(sale_id INT, product_id INT, sale_date DATE, sale_amount DECIMAL)\n- products(product_id INT, category VARCHAR)\n\nYour fixed query must return columns: category, month (formatted as 'YYYY-MM'), total_sales, avg_sales_per_product\n\nCarefully review joins and grouping logic to ensure accuracy.",
    "guidance": [
      "Check if joins between sales and products tables are causing unintended row multiplication or missing rows.",
      "Validate the GROUP BY clause includes all non-aggregated columns to ensure correct aggregation.",
      "Pay attention to the grouping by month: use proper date function to extract month in 'YYYY-MM' format."
    ],
    "hints": [
      "INNER JOIN might exclude categories with zero sales; consider if that's expected.",
      "Aggregates must be calculated per category and month, so group accordingly and extract month from sale_date with DATE_FORMAT or TO_CHAR depending on your SQL dialect.",
      "Avoid joining tables multiple times or creating cartesian products."
    ],
    "starterCode": "SELECT p.category,\n       DATE_FORMAT(s.sale_date, '%Y-%m') AS month,\n       SUM(s.sale_amount) AS total_sales,\n       AVG(s.sale_amount) AS avg_sales_per_product\nFROM sales s\nJOIN products p ON s.product_id = p.product_id\nGROUP BY p.category;",
    "expectedOutput": "category | month  | total_sales | avg_sales_per_product\n---------|--------|-------------|-----------------------\nBooks    | 2024-04| 10500.00    | 350.00               \nElectronics | 2024-04 | 25000.00  | 1250.00              \nClothing | 2024-04| 7000.00     | 233.33",
    "concepts": [
      "SQL Joins",
      "Aggregation and GROUP BY",
      "Date Formatting in SQL"
    ],
    "estimatedTime": "15 minutes",
    "isFeatured": false
  },
  {
    "slug": "fix-the-bug-in-sql-query-to-filter-active-users",
    "title": "Fix the Bug in SQL Query to Filter Active Users",
    "language": "sql",
    "difficulty": "beginner",
    "category": "debugging",
    "description": "Identify and fix the bug in the provided SQL query that is supposed to retrieve only active users from the users table.",
    "prompt": "The following SQL query is intended to select all users where the status is 'active'. However, it is returning all users regardless of their status. Find and fix the bug so that only active users are retrieved.",
    "guidance": [
      "Check the WHERE clause syntax carefully.",
      "Make sure the string comparison is done correctly.",
      "Test the query after fixing to ensure only active users are listed."
    ],
    "hints": [
      "Remember that string literals in SQL need to be enclosed in single quotes.",
      "Look for any misplaced or missing quotation marks around 'active'.",
      "Check if the condition is using '=' or '==' incorrectly."
    ],
    "starterCode": "SELECT * FROM users WHERE status = active;",
    "expectedOutput": "Only rows where the status column equals 'active' should be returned.",
    "concepts": [
      "SQL WHERE clause",
      "String comparison",
      "Basic SELECT query"
    ],
    "estimatedTime": "10 minutes",
    "isFeatured": false
  },
  {
    "slug": "fix-incorrect-join-and-aggregation-in-sales-report-query",
    "title": "Fix Incorrect Join and Aggregation in Sales Report Query",
    "language": "sql",
    "difficulty": "intermediate",
    "category": "debugging",
    "description": "A SQL query intended to generate a monthly sales report per product category uses incorrect join syntax and aggregation logic. Fix the query to produce accurate total sales per category per month.",
    "prompt": "You are given a broken SQL query that aims to report the total sales amount for each product category grouped by month. However, the results show incorrect totals and duplicate rows. Identify and fix the join and aggregation issues to return the correct monthly sales totals per category.\n\nThe database schema includes the following tables:\n- sales(sale_id, product_id, sale_date, amount)\n- products(product_id, product_name, category_id)\n- categories(category_id, category_name)\n\nBroken Query:\n\nSELECT\n  c.category_name,\n  DATE_FORMAT(s.sale_date, '%Y-%m') AS sale_month,\n  SUM(s.amount) AS total_sales\nFROM\n  sales s\nJOIN\n  products p,\n  categories c\n  ON s.product_id = p.product_id\n  AND p.category_id = c.category_id\nGROUP BY\n  c.category_name, sale_month\nORDER BY\n  sale_month, c.category_name;\n\nFix the query so it properly joins the tables and correctly aggregates total sales per category by month.",
    "guidance": [
      "Check the JOIN syntax to ensure all tables join correctly in a single JOIN clause tree.",
      "Verify that aggregation (SUM) and GROUP BY expressions correspond correctly to the selected columns.",
      "Test the query on sample data to confirm duplicate rows are eliminated and totals are accurate."
    ],
    "hints": [
      "Replace the misplaced commas in the FROM and JOIN clauses with explicit JOIN statements.",
      "Make sure each JOIN has the appropriate ON condition mapping keys between tables.",
      "GROUP BY all non-aggregated select expressions exactly as they appear."
    ],
    "starterCode": "SELECT\n  c.category_name,\n  DATE_FORMAT(s.sale_date, '%Y-%m') AS sale_month,\n  SUM(s.amount) AS total_sales\nFROM\n  sales s\nJOIN\n  products p,\n  categories c\n  ON s.product_id = p.product_id\n  AND p.category_id = c.category_id\nGROUP BY\n  c.category_name, sale_month\nORDER BY\n  sale_month, c.category_name;",
    "expectedOutput": "category_name | sale_month | total_sales\n------------- | ---------- | -----------\nBooks         | 2024-01    | 15000.00\nBooks         | 2024-02    | 12000.00\nElectronics   | 2024-01    | 35000.00\nElectronics   | 2024-02    | 42000.00",
    "concepts": [
      "SQL JOIN",
      "GROUP BY and Aggregations",
      "Date Formatting"
    ],
    "estimatedTime": "10 minutes",
    "isFeatured": false
  },
  {
    "slug": "build-a-decorator-to-cache-function-results-with-expiry",
    "title": "Build a Decorator to Cache Function Results with Expiry",
    "language": "python",
    "difficulty": "advanced",
    "category": "functions",
    "description": "Create a Python decorator function that caches the results of an expensive function call, with support for automatic expiration of cached values after a given time-to-live (TTL).",
    "prompt": "Write a Python decorator named 'cache_with_expiry' that takes one parameter ttl (in seconds). When applied to a function, it caches its return values keyed by arguments, so repeated calls with the same arguments return cached results without recomputing. The cached results should expire and be removed if the TTL has passed since caching. Your solution should handle positional and keyword arguments properly, and ensure that different argument sets cache independently.",
    "guidance": [
      "Use a dictionary to store cached results with a key generated from the function arguments.",
      "Store both the cached result and the timestamp when it was cached to check expiry.",
      "Ensure that the decorator supports functions with any combination of positional and keyword arguments.",
      "Use 'functools.wraps' to preserve the original function's metadata."
    ],
    "hints": [
      "Consider using 'time.time()' to get the current timestamp in seconds.",
      "To create a hashable key from function arguments, consider using a tuple for positional args and a frozenset for keyword args.",
      "Remember to invalidate (remove) cached entries when their TTL has expired before returning cached results."
    ],
    "starterCode": "import time\nimport functools\n\ndef cache_with_expiry(ttl):\n    def decorator(func):\n        cache = {}\n\n        @functools.wraps(func)\n        def wrapper(*args, **kwargs):\n            # Your caching logic here\n            pass\n\n        return wrapper\n    return decorator",
    "expectedOutput": "When decorating a function that returns a time-dependent value, repeated calls with the same arguments within ttl seconds return the cached value instantly, but calls after ttl seconds recompute the value.",
    "concepts": [
      "decorators",
      "caching",
      "function arguments",
      "time-based expiration"
    ],
    "estimatedTime": "15 minutes",
    "isFeatured": true
  },
  {
    "slug": "refactor-and-simplify-a-function-to-calculate-total-price",
    "title": "Refactor and Simplify a Function to Calculate Total Price",
    "language": "javascript",
    "difficulty": "beginner",
    "category": "code-quality",
    "description": "Improve the readability and maintainability of a simple JavaScript function that calculates the total price of items including tax. The functionality should remain the same while making the code cleaner.",
    "prompt": "You are given a function that calculates the total price for a purchase including tax. The current function works correctly but is written in a verbose and less readable way. Refactor the function to make it simpler and easier to understand, without changing its behavior.",
    "guidance": [
      "Keep the function's input parameters and output the same.",
      "Remove unnecessary variables and simplify expressions where possible.",
      "Use descriptive variable names to clarify meaning."
    ],
    "hints": [
      "Look for opportunities to combine multiple statements into one expression.",
      "Consider removing redundant intermediate variables.",
      "Use arithmetic operations directly in the return statement if possible."
    ],
    "starterCode": "function calculateTotalPrice(price, taxRate) {\n  let taxAmount = price * taxRate;\n  let total = price + taxAmount;\n  return total;\n}",
    "expectedOutput": "calculateTotalPrice(100, 0.15) === 115",
    "concepts": [
      "functions",
      "variables",
      "arithmetic operations",
      "code readability"
    ],
    "estimatedTime": "10 minutes",
    "isFeatured": false
  },
  {
    "slug": "fix-the-incorrect-sql-query-filtering-by-date",
    "title": "Fix the Incorrect SQL Query Filtering by Date",
    "language": "sql",
    "difficulty": "beginner",
    "category": "debugging",
    "description": "Identify and fix the bug in the provided SQL query that aims to filter orders placed after January 1, 2023. The original query incorrectly returns all rows due to a syntax mistake in the WHERE clause.",
    "prompt": "You are given a SQL query intended to select all orders made after January 1st, 2023 from the 'Orders' table. However, the current query returns all orders regardless of the order date. Find the bug and fix the query so it correctly filters the results.",
    "guidance": [
      "Check the syntax of the WHERE clause and ensure the date comparison operator is used correctly.",
      "Verify how date literals are formatted in SQL and whether they are quoted properly."
    ],
    "hints": [
      "In SQL, date values should be enclosed in single quotes.",
      "Make sure you are using a comparison operator (>, >=, etc.) correctly with the column name and date."
    ],
    "starterCode": "SELECT * FROM Orders WHERE OrderDate > 2023-01-01;",
    "expectedOutput": "Only orders with OrderDate after 2023-01-01 should be returned.",
    "concepts": [
      "WHERE clause",
      "Date comparison",
      "SQL syntax"
    ],
    "estimatedTime": "10 minutes",
    "isFeatured": false
  },
  {
    "slug": "build-a-todo-list-manager-with-filtering-and-prioritization",
    "title": "Build a Todo List Manager with Filtering and Prioritization",
    "language": "javascript",
    "difficulty": "intermediate",
    "category": "mini-projects",
    "description": "Create a JavaScript function that manages a list of todo items, allowing for adding, removing, updating status, and filtering tasks based on their priority and completion status.",
    "prompt": "Write a function called `manageTodos` that maintains an internal list of todo items. Each todo item should have an id, description, priority (low, medium, high), and a completed status (true/false). The function should accept two arguments: a command string ('add', 'remove', 'toggle', 'filter') and a payload object that changes based on the command:\n\n- 'add': the payload includes description and priority; assign a unique id and set completed to false.\n- 'remove': the payload includes the id of the todo to remove.\n- 'toggle': the payload includes the id of the todo; toggle its completed status.\n- 'filter': the payload includes optional filters priority and/or completed, and returns a filtered array of todos matching these criteria.\n\nImplement proper internal state handling so repeated calls to `manageTodos` modify or query the same todo list.\n\nExample usage:\nmanageTodos('add', { description: 'Write code', priority: 'high' });\nmanageTodos('toggle', { id: 1 });\nmanageTodos('filter', { completed: false, priority: 'high' });",
    "guidance": [
      "Use a closure or module pattern to encapsulate the todo list as a private variable.",
      "Ensure unique ids are generated for each new todo item.",
      "Implement the filter command to handle one or both filters gracefully.",
      "Make sure to update the completed status correctly when toggling."
    ],
    "hints": [
      "Consider using an array to store todos and find items by id using findIndex.",
      "Use default parameter values to make filters optional when filtering.",
      "Use a simple incremental counter or Date.now() for unique id generation."
    ],
    "starterCode": "function manageTodos() {\n  const todos = [];\n  let idCounter = 1;\n\n  return function(command, payload) {\n    // Your implementation here\n  };\n}\n\nconst todoManager = manageTodos();\n\n// Example calls\n// todoManager('add', { description: 'Learn JavaScript', priority: 'medium' });\n",
    "expectedOutput": "[{ id: 1, description: 'Write code', priority: 'high', completed: false }]",
    "concepts": [
      "closures",
      "arrays",
      "objects",
      "state management"
    ],
    "estimatedTime": "15 minutes",
    "isFeatured": true
  },
  {
    "slug": "fix-bug-in-async-data-aggregation-and-error-handling-function",
    "title": "Fix Bug in Async Data Aggregation and Error Handling Function",
    "language": "javascript",
    "difficulty": "advanced",
    "category": "debugging",
    "description": "Debug and fix a complex asynchronous JavaScript function designed to fetch and aggregate data from multiple APIs with error handling. The current implementation contains subtle bugs causing unhandled promise rejections and incorrect data aggregation.",
    "prompt": "You are given a function fetchAndAggregateData that asynchronously fetches data from three different APIs and combines the results into a single array. The function is supposed to handle errors gracefully by continuing to fetch data from other APIs even if one fails, but currently, it does not work as expected. Your task is to identify and fix all bugs so that the function properly fetches, aggregates, and handles errors without stopping prematurely or producing incorrect results.",
    "guidance": [
      "Check how promises are awaited and handled inside try/catch blocks.",
      "Ensure error handling does not block fetching from remaining APIs.",
      "Verify that all fetched data is combined correctly in the result."
    ],
    "hints": [
      "Look for promise handling in parallel versus sequential execution.",
      "Consider using Promise.allSettled to handle multiple async calls with independent error handling.",
      "Watch out for cases where variable reassignment or overwriting causes data loss."
    ],
    "starterCode": "async function fetchAndAggregateData() {\n  const apiEndpoints = [\n    'https://api.example.com/data1',\n    'https://api.example.com/data2',\n    'https://api.example.com/data3'\n  ];\n  let aggregatedData = [];\n  for (const url of apiEndpoints) {\n    try {\n      const response = await fetch(url);\n      if (!response.ok) {\n        throw new Error('Network response was not ok');\n      }\n      const data = await response.json();\n      aggregatedData = data;\n    } catch (error) {\n      console.error('Failed to fetch from:', url, error);\n    }\n  }\n  return aggregatedData;\n}",
    "expectedOutput": "An array containing combined data from all successful API fetches; errors logged but do not prevent aggregation of other successful results.",
    "concepts": [
      "asynchronous programming",
      "error handling",
      "promises",
      "API integration",
      "data aggregation"
    ],
    "estimatedTime": "15 minutes",
    "isFeatured": true
  },
  {
    "slug": "fix-the-bug-in-a-c-function-to-calculate-factorial",
    "title": "Fix the Bug in a C++ Function to Calculate Factorial",
    "language": "cpp",
    "difficulty": "beginner",
    "category": "debugging",
    "description": "Identify and fix the bug in a simple C++ function intended to calculate the factorial of a given number. The function currently produces incorrect output for some inputs.",
    "prompt": "The following C++ function is supposed to calculate the factorial of a non-negative integer n (where n! = n * (n-1) * ... * 1 and 0! = 1). However, when tested, it produces incorrect results for inputs greater than 1. Find and fix the bug in the function so that it correctly calculates the factorial.",
    "guidance": [
      "Carefully check the initialization of variables used for the factorial calculation.",
      "Review the loop structure to ensure it iterates over the correct range.",
      "Remember the factorial of 0 is 1 by definition."
    ],
    "hints": [
      "Is the variable holding the factorial value initialized correctly before the loop starts?",
      "Check whether the loop boundaries include all the numbers needed for the factorial calculation."
    ],
    "starterCode": "int factorial(int n) {\n    int result = 0;\n    for (int i = 1; i < n; ++i) {\n        result = result * i;\n    }\n    return result;\n}",
    "expectedOutput": "factorial(0) -> 1\nfactorial(1) -> 1\nfactorial(5) -> 120",
    "concepts": [
      "variables initialization",
      "for loop",
      "basic arithmetic operations",
      "function return"
    ],
    "estimatedTime": "10 minutes",
    "isFeatured": true
  },
  {
    "slug": "predict-the-output-list-and-dictionary-comprehension-logic",
    "title": "Predict the Output: List and Dictionary Comprehension Logic",
    "language": "python",
    "difficulty": "intermediate",
    "category": "logic",
    "description": "Analyze the given Python code containing nested list and dictionary comprehensions along with conditional logic, and predict the exact output it produces.",
    "prompt": "Given the Python code below, carefully read through the nested list and dictionary comprehensions and internal logic. Predict what the output will be when the code is executed.\n\nExplain your reasoning if asked, but for now, only provide the exact printed output:\n\npython\nresult = {i: [j**2 if j % 2 == 0 else j**3 for j in range(i)] for i in range(5)}\nprint(result)",
    "guidance": [
      "Break down the comprehension step-by-step: start with the outer dictionary comprehension and analyze what keys and values it produces.",
      "Focus on the inner list comprehension and understand how it transforms the list of numbers for each key.",
      "Pay attention to the conditional inside the list comprehension and how it changes the value depending on even or odd numbers."
    ],
    "hints": [
      "Recall that i in the outer comprehension goes from 0 to 4 inclusive, creating dictionary keys.",
      "Examine carefully what happens when i is 0—what would range(0) return?",
      "For list elements, even j values are squared (j**2), odd j values are cubed (j**3)."
    ],
    "starterCode": "result = {i: [j**2 if j % 2 == 0 else j**3 for j in range(i)] for i in range(5)}\nprint(result)",
    "expectedOutput": "{0: [], 1: [0], 2: [0, 1], 3: [0, 1, 4], 4: [0, 1, 4, 27]}",
    "concepts": [
      "dictionary comprehension",
      "list comprehension",
      "conditional expressions",
      "loops"
    ],
    "estimatedTime": "10 minutes",
    "isFeatured": false
  },
  {
    "slug": "build-an-advanced-debounce-function-with-immediate-and-cancel-options",
    "title": "Build an Advanced Debounce Function with Immediate and Cancel Options",
    "language": "javascript",
    "difficulty": "advanced",
    "category": "functions",
    "description": "Create a robust debounce utility function in JavaScript that delays invoking a function until after a specified wait time elapses since the last call. Support both immediate execution on the leading edge and the ability to cancel a pending invocation.",
    "prompt": "Write a function named debounce that accepts three parameters: a function func, a delay time in milliseconds wait, and an options object. The options object can have two boolean properties: 'immediate' and 'cancelable'. The debounce function should return a new debounced version of func with the following behavior:\n\n1. When called repeatedly, the original func should only be invoked once, either after wait milliseconds have elapsed since the last call (trailing edge), or immediately if immediate is true (leading edge).\n2. If immediate is true, the first call to the debounced function should invoke func immediately, then ignore subsequent calls until wait elapses.\n3. If cancelable is true, the debounced function should have a method called cancel that can be called to cancel any pending invocation.\n\nImplement this debounce function fully so that it can be used to limit the rate at which a function runs, with flexible configuration for immediate triggers and canceling.\n\nExample usage:\n\nconst debounced = debounce(() => console.log('Triggered!'), 1000, { immediate: true, cancelable: true });\ndebounced();\ndebounced.cancel(); // should cancel any scheduled call if exists",
    "guidance": [
      "Use a closure to store timing state between calls.",
      "Use setTimeout and clearTimeout to manage the delay.",
      "Implement the cancel method conditionally based on the options object."
    ],
    "hints": [
      "Store a reference to the timeout ID so you can clear it.",
      "To support immediate invocation, track if the function was already called within the wait period.",
      "Attach the cancel method as a property of the returned function."
    ],
    "starterCode": "function debounce(func, wait, options = {}) {\n  // Your implementation here\n}",
    "expectedOutput": "Upon calling debounced(), the func logs 'Triggered!' immediately if immediate is true; subsequent calls within wait ms do not invoke func. Calling debounced.cancel() stops any pending invocation representing no output afterward.",
    "concepts": [
      "closures",
      "asynchronous timing",
      "function properties",
      "higher-order functions"
    ],
    "estimatedTime": "15 minutes",
    "isFeatured": true
  },
  {
    "slug": "refactor-sql-query-for-sales-aggregation-optimization",
    "title": "Refactor SQL Query for Sales Aggregation Optimization",
    "language": "sql",
    "difficulty": "intermediate",
    "category": "optimization",
    "description": "Improve the given SQL query that calculates total and average sales per product category. The original query uses multiple subqueries and redundant joins, causing inefficiencies. Refactor it to be cleaner and more performant while preserving the exact results.",
    "prompt": "You are given a query that computes total and average sales amount for each product category by joining orders, order_items, and products tables. The original query uses nested subqueries and redundant joins, making it hard to maintain and inefficient. Your task is to refactor the query to optimize it without changing its behavior or output.\n\nTables: \n- orders(order_id, order_date)\n- order_items(order_item_id, order_id, product_id, quantity, price)\n- products(product_id, category)\n\nOriginal query:\nSELECT category,\n       (SELECT SUM(oi.quantity * oi.price)\n        FROM order_items oi\n        JOIN orders o ON oi.order_id = o.order_id\n        JOIN products p2 ON oi.product_id = p2.product_id\n        WHERE p2.category = p.category) AS total_sales,\n       (SELECT AVG(oi.quantity * oi.price)\n        FROM order_items oi\n        JOIN products p3 ON oi.product_id = p3.product_id\n        WHERE p3.category = p.category) AS avg_sales\nFROM products p\nGROUP BY category;",
    "guidance": [
      "Focus on reducing the use of correlated subqueries by leveraging JOINs and GROUP BY clauses.",
      "Use aggregation functions directly in a single query rather than nested subqueries.",
      "Ensure that the refactored query produces the same output with category, total_sales, and avg_sales columns."
    ],
    "hints": [
      "Try starting with joining order_items to products first, then group by category.",
      "Calculate total and average sales directly in the SELECT clause using SUM and AVG.",
      "Avoid joining the orders table if it doesn't add filtering or aggregation benefits."
    ],
    "starterCode": "SELECT category,\n       (SELECT SUM(oi.quantity * oi.price)\n        FROM order_items oi\n        JOIN orders o ON oi.order_id = o.order_id\n        JOIN products p2 ON oi.product_id = p2.product_id\n        WHERE p2.category = p.category) AS total_sales,\n       (SELECT AVG(oi.quantity * oi.price)\n        FROM order_items oi\n        JOIN products p3 ON oi.product_id = p3.product_id\n        WHERE p3.category = p.category) AS avg_sales\nFROM products p\nGROUP BY category;",
    "expectedOutput": "category | total_sales | avg_sales\n----------------------------------\nBooks    | 15000       | 75.0\nClothing | 23000       | 115.0\nToys     | 12000       | 60.0",
    "concepts": [
      "SQL joins",
      "aggregate functions",
      "query optimization",
      "subquery refactoring"
    ],
    "estimatedTime": "10 minutes",
    "isFeatured": true
  },
  {
    "slug": "predict-the-output-of-recursive-memoized-logic-on-nested-tuples",
    "title": "Predict the Output of Recursive Memoized Logic on Nested Tuples",
    "language": "python",
    "difficulty": "advanced",
    "category": "logic",
    "description": "Analyze a Python function that performs recursive computations with memoization on a nested tuple input. Predict the final output when the function is called with a complex nested structure.",
    "prompt": "Given the following Python function, predict the exact output when the function advanced_calc is called with the nested tuple input provided. Explain the reasoning behind the output based on the recursive calls and memoization logic.",
    "guidance": [
      "Follow the recursion closely and track memoization cache changes step-by-step.",
      "Understand how the function treats integers vs tuples differently in recursion."
    ],
    "hints": [
      "Memoization prevents recalculating results for same sub-tuples, so focus on unique sub-tuples.",
      "Notice that the function sums either integer values or recursively computed sums after transformations on tuple elements."
    ],
    "starterCode": "def advanced_calc(t, memo={}):\n    if t in memo:\n        return memo[t]\n    if isinstance(t, int):\n        memo[t] = t*2\n        return memo[t]\n    total = 0\n    for i in t:\n        if isinstance(i, int):\n            total += i + 1\n        else:\n            total += advanced_calc(tuple(reversed(i)), memo)\n    memo[t] = total\n    return total\n\nnested_tuple = (1, (2, 3), (4, (5, 6)))\nprint(advanced_calc(nested_tuple))",
    "expectedOutput": "27",
    "concepts": [
      "recursion",
      "memoization",
      "nested data structures",
      "tuple manipulation"
    ],
    "estimatedTime": "10 minutes",
    "isFeatured": false
  },
  {
    "slug": "build-a-movie-recommendation-engine-based-on-user-ratings",
    "title": "Build a Movie Recommendation Engine Based on User Ratings",
    "language": "python",
    "difficulty": "intermediate",
    "category": "mini-projects",
    "description": "Create a Python mini-project that recommends movies to a user based on their past ratings and similarity to other users' ratings. Implement basic collaborative filtering logic without external libraries.",
    "prompt": "You are given a dataset containing user ratings for various movies. Each entry consists of a user ID, a movie ID, and a rating from 1 to 5. Your task is to build a function that, given a target user ID, recommends the top 3 movies that the user hasn't rated yet, based on movie ratings similarity from other users. Use user-based collaborative filtering: find users similar to the target user by comparing their ratings and aggregate ratings for movies the target user hasn't seen to generate recommendations.",
    "guidance": [
      "Create a user-movie ratings matrix from the input list for easier comparison.",
      "Calculate similarity between users using a metric like Pearson correlation or cosine similarity based on their common rated movies.",
      "Aggregate ratings of similar users to recommend movies not rated by the target user.",
      "Return the top 3 movies sorted by predicted rating."
    ],
    "hints": [
      "Focus on users who have rated several of the same movies as the target user for better similarity estimates.",
      "Normalize ratings if you choose to use Pearson correlation to account for user rating bias.",
      "You can handle ties by sorting movies with the same recommendation score by movie ID."
    ],
    "starterCode": "def recommend_movies(ratings, target_user_id):\n    # ratings: List of tuples (user_id, movie_id, rating)\n    # TODO: Implement the recommendation engine\n    pass\n\n# Example input:\nrating_data = [\n    (1, 101, 5), (1, 102, 3), (1, 103, 4),\n    (2, 101, 4), (2, 102, 5), (2, 104, 2),\n    (3, 101, 2), (3, 103, 5), (3, 104, 4),\n    (4, 102, 5), (4, 103, 3), (4, 104, 5)\n]\n\nprint(recommend_movies(rating_data, 1))",
    "expectedOutput": "[104, 105, 106]  # Example output assuming 104 is recommended top, others can vary",
    "concepts": [
      "collaborative filtering",
      "matrix operations",
      "similarity metrics",
      "data structures"
    ],
    "estimatedTime": "30 minutes",
    "isFeatured": true
  },
  {
    "slug": "implement-a-thread-safe-memoization-function-in-c",
    "title": "Implement a Thread-Safe Memoization Function in C++",
    "language": "cpp",
    "difficulty": "advanced",
    "category": "functions",
    "description": "Build a reusable templated function that memoizes results of expensive computations in a thread-safe manner using modern C++ features.",
    "prompt": "Implement a templated function named `memoize` that accepts a callable (function, lambda, or functor) and returns a new callable which caches the results of prior calls to improve performance on repeated inputs. The memoization cache should be thread-safe, allowing concurrent access from multiple threads without data races or undefined behavior. Your solution should support callables with one or more parameters of arbitrary types, and should use efficient synchronization mechanisms from the C++ Standard Library. Avoid global/static variables to ensure reusability in multiple contexts.",
    "guidance": [
      "Use templates to allow memoizing functions with different signatures and parameter types.",
      "Use a suitable container such as `std::unordered_map` or `std::map` to store cached results keyed by the function arguments.",
      "To allow multiple arguments and arbitrary types as keys, consider using `std::tuple` combined with a hash function.",
      "Use synchronization primitives like `std::mutex` or `std::shared_mutex` to protect access to the cache for thread safety."
    ],
    "hints": [
      "Provide a custom hash function or specialize `std::hash` for `std::tuple` if you use it as a key in an unordered map.",
      "Consider using `std::lock_guard` or `std::shared_lock` for scoped locking.",
      "Use perfect forwarding for the input parameters to preserve value categories."
    ],
    "starterCode": "template<typename Func>\nauto memoize(Func&& f) {\n    // Your implementation here\n}",
    "expectedOutput": "The returned callable caches results to quickly return cached values on repeated calls, and is safe for concurrent use (verified by testing with multi-threaded calls).",
    "concepts": [
      "templates",
      "thread safety",
      "memoization",
      "concurrency primitives"
    ],
    "estimatedTime": "20 minutes",
    "isFeatured": false
  },
  {
    "slug": "fix-the-bug-in-counting-even-numbers-in-an-array",
    "title": "Fix the Bug in Counting Even Numbers in an Array",
    "language": "cpp",
    "difficulty": "beginner",
    "category": "debugging",
    "description": "Identify and fix the bug in the given C++ function that is supposed to count the number of even numbers in an integer array.",
    "prompt": "The function countEvens takes an integer array and its size as input and should return the count of even numbers in the array. However, it currently returns incorrect results. Debug the function to make it work correctly.",
    "guidance": [
      "Check how the function iterates over the array.",
      "Verify the condition used to identify even numbers.",
      "Ensure the counter is updated properly within the loop."
    ],
    "hints": [
      "Remember that an even number is divisible by 2 with zero remainder.",
      "Make sure the loop uses the correct index and does not go out of bounds."
    ],
    "starterCode": "int countEvens(int arr[], int size) {\n    int count = 0;\n    for (int i = 1; i <= size; i++) {\n        if (arr[i] % 2 == 1) {\n            count++;\n        }\n    }\n    return count;\n}",
    "expectedOutput": "For array {1, 2, 3, 4, 5, 6}, countEvens should return 3.",
    "concepts": [
      "loops",
      "arrays",
      "conditionals",
      "modulus operator"
    ],
    "estimatedTime": "10 minutes",
    "isFeatured": false
  },
  {
    "slug": "predict-the-output-nested-array-and-object-manipulation-in-javascript",
    "title": "Predict the Output: Nested Array and Object Manipulation in JavaScript",
    "language": "javascript",
    "difficulty": "intermediate",
    "category": "logic",
    "description": "Analyze the given JavaScript code that involves nested arrays and objects with multiple transformations. Predict what the final output will be after all operations are executed.",
    "prompt": "Examine the following JavaScript function. It takes an array of user objects, performs nested array filtering, mapping and object property updates. Predict the exact output of the function when called with the provided sample data.",
    "guidance": [
      "Follow each step of the array transformations carefully, watching for side effects on objects.",
      "Track filter and map operations distinctly and note how they change the array length or values.",
      "Remember that objects are passed by reference, so modifying user objects inside map affects the final result."
    ],
    "hints": [
      "Pay attention to the filter condition on user.scores and which users are included.",
      "Notice how the map function updates the age property and how that affects the output.",
      "Remember the difference between shallow copying and mutating objects when working with arrays."
    ],
    "starterCode": "function processUsers(users) {\n  return users\n    .filter(user => user.scores.some(score => score > 80))\n    .map(user => {\n      user.age += 1;\n      user.scores = user.scores.filter(score => score > 50);\n      return user;\n    });\n}\n\nconst users = [\n  { name: 'Alice', age: 30, scores: [45, 82, 77] },\n  { name: 'Bob', age: 25, scores: [55, 49, 68] },\n  { name: 'Charlie', age: 35, scores: [95, 92, 88] },\n  { name: 'Diana', age: 20, scores: [40, 42, 47] }\n];\n\nconsole.log(processUsers(users));",
    "expectedOutput": "[\n  { name: 'Alice', age: 31, scores: [82, 77] },\n  { name: 'Bob', age: 26, scores: [55, 68] },\n  { name: 'Charlie', age: 36, scores: [95, 92, 88] }\n]",
    "concepts": [
      "array filter",
      "array map",
      "object mutation",
      "nested array manipulation"
    ],
    "estimatedTime": "10 minutes",
    "isFeatured": false
  },
  {
    "slug": "refactor-messy-code-to-improve-readability-and-maintainability",
    "title": "Refactor Messy Code to Improve Readability and Maintainability",
    "language": "python",
    "difficulty": "beginner",
    "category": "code-quality",
    "description": "You are given a Python function that calculates the sum of even numbers from a list. The current implementation works correctly but is hard to read and maintain. Your task is to refactor the code to make it cleaner and more Pythonic while keeping the behavior the same.",
    "prompt": "Refactor the given function to improve readability and maintainability. Make sure the function still returns the sum of all even numbers from the list it receives as input.",
    "guidance": [
      "Use meaningful variable names to improve clarity.",
      "Consider using Python's built-in functions or list comprehensions to simplify the logic.",
      "Avoid unnecessary code or variables.",
      "Make sure the function still works correctly for an empty list or list with no even numbers."
    ],
    "hints": [
      "Try using a list comprehension to filter even numbers from the list.",
      "The sum() function can add all numbers in a list or iterable.",
      "Remember to use the modulus operator (%) to check if a number is even."
    ],
    "starterCode": "def sum_even_numbers(numbers):\n    result = 0\n    for i in range(len(numbers)):\n        if numbers[i] % 2 == 0:\n            result += numbers[i]\n    return result",
    "expectedOutput": "For input [1, 2, 3, 4, 5, 6], the function should return 12.",
    "concepts": [
      "functions",
      "loops",
      "conditionals",
      "list comprehensions",
      "code readability"
    ],
    "estimatedTime": "10 minutes",
    "isFeatured": false
  },
  {
    "slug": "build-a-function-to-rotate-elements-in-an-array",
    "title": "Build a Function to Rotate Elements in an Array",
    "language": "cpp",
    "difficulty": "intermediate",
    "category": "functions",
    "description": "Write a C++ function that rotates the elements of an array to the right by a given number of steps. The rotation should handle cases where the number of steps is larger than the array size.",
    "prompt": "Create a function named rotateArray that takes a vector of integers and an integer k representing the number of rotation steps. The function should rotate the array to the right by k steps in-place, meaning elements shifted off the end reappear at the front. Return the rotated vector after performing the operation. For example, given nums = {1, 2, 3, 4, 5, 6, 7} and k = 3, the function should return {5, 6, 7, 1, 2, 3, 4}.",
    "guidance": [
      "Consider how to handle the case when k is larger than the size of the vector.",
      "Think about using vector slicing or three-step reversal to achieve the rotation efficiently."
    ],
    "hints": [
      "Using modulo (k % nums.size()) can simplify handling rotations greater than the vector length.",
      "One approach is to reverse the entire vector, then reverse the first k elements and finally reverse the remaining elements."
    ],
    "starterCode": "#include <vector>\nusing namespace std;\n\nvector<int> rotateArray(vector<int>& nums, int k) {\n    // Your code here\n}",
    "expectedOutput": "rotateArray({1, 2, 3, 4, 5, 6, 7}, 3) -> {5, 6, 7, 1, 2, 3, 4}\nrotateArray({-1, -100, 3, 99}, 2) -> {3, 99, -1, -100}",
    "concepts": [
      "arrays",
      "in-place modification",
      "modular arithmetic",
      "vector operations"
    ],
    "estimatedTime": "10 minutes",
    "isFeatured": false
  },
  {
    "slug": "predict-the-output-of-a-recursive-cte-with-aggregations-and-window-functions",
    "title": "Predict the Output of a Recursive CTE with Aggregations and Window Functions",
    "language": "sql",
    "difficulty": "advanced",
    "category": "query-analysis",
    "description": "Analyze the output of an advanced SQL query using recursive common table expressions (CTEs), aggregations, and window functions. Predict the final result set given the schema and sample data.",
    "prompt": "Given the following schema and sample data representing employees and their managers, analyze the provided recursive CTE query. Determine the output—specifically, the final columns and rows returned by the query.\n\n-- Employees Table\nCREATE TABLE Employees(\n  EmployeeID INT PRIMARY KEY,\n  ManagerID INT NULL,\n  Salary INT NOT NULL\n);\n\nINSERT INTO Employees (EmployeeID, ManagerID, Salary) VALUES\n(1, NULL, 100000),\n(2, 1, 80000),\n(3, 1, 90000),\n(4, 2, 70000),\n(5, 2, 60000),\n(6, 3, 85000),\n(7, 3, 65000);\n\n-- Query to analyze\nWITH RECURSIVE HierarchyCTE AS (\n  SELECT EmployeeID, ManagerID, Salary, 1 AS Level\n  FROM Employees\n  WHERE ManagerID IS NULL\n  \n  UNION ALL\n  \n  SELECT e.EmployeeID, e.ManagerID, e.Salary, h.Level + 1\n  FROM Employees e\n  JOIN HierarchyCTE h ON e.ManagerID = h.EmployeeID\n),\nAggregated AS (\n  SELECT\n    ManagerID,\n    COUNT(EmployeeID) AS TeamSize,\n    AVG(Salary) AS AvgSalary\n  FROM HierarchyCTE\n  GROUP BY ManagerID\n),\nRanked AS (\n  SELECT\n    h.EmployeeID,\n    h.ManagerID,\n    h.Level,\n    a.TeamSize,\n    a.AvgSalary,\n    RANK() OVER (PARTITION BY h.ManagerID ORDER BY a.TeamSize DESC) AS TeamRank\n  FROM HierarchyCTE h\n  LEFT JOIN Aggregated a ON h.EmployeeID = a.ManagerID\n)\nSELECT * FROM Ranked\nORDER BY Level, TeamRank, EmployeeID;",
    "guidance": [
      "Understand how the recursive CTE builds the hierarchy levels starting from the top manager (ManagerID IS NULL).",
      "Consider how the Aggregated CTE calculates team size and average salary grouped by manager.",
      "Analyze how the window function RANK() operates partitioned by ManagerID and ordered by team size descending.",
      "Trace the joins carefully to see how employees are linked with their team aggregation."
    ],
    "hints": [
      "Remember the base case of the recursion includes only EmployeeID 1 (top-level manager).",
      "Note the LEFT JOIN in Ranked means some employees might have NULLs for aggregated data if they aren't managers themselves.",
      "RANK() resets for each ManagerID partition; employees with the same manager get ranked according to their team size."
    ],
    "starterCode": "CREATE TABLE Employees(\n  EmployeeID INT PRIMARY KEY,\n  ManagerID INT NULL,\n  Salary INT NOT NULL\n);\n\nINSERT INTO Employees (EmployeeID, ManagerID, Salary) VALUES\n(1, NULL, 100000),\n(2, 1, 80000),\n(3, 1, 90000),\n(4, 2, 70000),\n(5, 2, 60000),\n(6, 3, 85000),\n(7, 3, 65000);\n\nWITH RECURSIVE HierarchyCTE AS (\n  SELECT EmployeeID, ManagerID, Salary, 1 AS Level\n  FROM Employees\n  WHERE ManagerID IS NULL\n  \n  UNION ALL\n  \n  SELECT e.EmployeeID, e.ManagerID, e.Salary, h.Level + 1\n  FROM Employees e\n  JOIN HierarchyCTE h ON e.ManagerID = h.EmployeeID\n),\nAggregated AS (\n  SELECT\n    ManagerID,\n    COUNT(EmployeeID) AS TeamSize,\n    AVG(Salary) AS AvgSalary\n  FROM HierarchyCTE\n  GROUP BY ManagerID\n),\nRanked AS (\n  SELECT\n    h.EmployeeID,\n    h.ManagerID,\n    h.Level,\n    a.TeamSize,\n    a.AvgSalary,\n    RANK() OVER (PARTITION BY h.ManagerID ORDER BY a.TeamSize DESC) AS TeamRank\n  FROM HierarchyCTE h\n  LEFT JOIN Aggregated a ON h.EmployeeID = a.ManagerID\n)\nSELECT * FROM Ranked\nORDER BY Level, TeamRank, EmployeeID;",
    "expectedOutput": "EmployeeID | ManagerID | Level | TeamSize | AvgSalary | TeamRank\n-----------|-----------|-------|----------|-----------|---------\n1          | NULL      | 1     | 2        | 73333.33  | 1\n2          | 1         | 2     | 2        | 65000     | 1\n3          | 1         | 2     | 2        | 75000     | 1\n4          | 2         | 3     | NULL     | NULL      | 1\n5          | 2         | 3     | NULL     | NULL      | 1\n6          | 3         | 3     | NULL     | NULL      | 1\n7          | 3         | 3     | NULL     | NULL      | 1",
    "concepts": [
      "Recursive CTE",
      "Aggregation",
      "Window Functions",
      "Hierarchical Queries"
    ],
    "estimatedTime": "10 minutes",
    "isFeatured": false
  },
  {
    "slug": "simple-contact-list-manager-in-c",
    "title": "Simple Contact List Manager in C++",
    "language": "cpp",
    "difficulty": "beginner",
    "category": "mini-projects",
    "description": "Create a basic contact list manager where users can add, display, and search contacts using console input and output.",
    "prompt": "Build a simple console application in C++ that manages a list of contacts. Each contact should have a name and a phone number. The program should allow users to: 1) Add a new contact, 2) Display all contacts, and 3) Search contacts by name and display matching results. Implement a simple menu loop to let the user choose these actions until they decide to exit.",
    "guidance": [
      "Use a struct or class to represent a contact with name and phone number fields.",
      "Store contacts in a simple container such as a vector.",
      "Use a loop to repeatedly show the menu and execute the selected operation.",
      "Use basic string input/output and simple loops to display and search contacts."
    ],
    "hints": [
      "Consider using std::vector to hold all your contacts for easy addition and iteration.",
      "For searching, loop through the vector and compare contact names with the search input using string operations."
    ],
    "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n\nstruct Contact {\n    std::string name;\n    std::string phone;\n};\n\nint main() {\n    std::vector<Contact> contacts;\n    int choice = 0;\n    while (choice != 4) {\n        std::cout << \"Menu:\\n1. Add Contact\\n2. Display Contacts\\n3. Search Contact\\n4. Exit\\nEnter choice: \";\n        std::cin >> choice;\n        std::cin.ignore(); // clear newline\n\n        if (choice == 1) {\n            // Add contact\n        } else if (choice == 2) {\n            // Display all contacts\n        } else if (choice == 3) {\n            // Search contacts\n        } else if (choice == 4) {\n            std::cout << \"Exiting...\" << std::endl;\n        } else {\n            std::cout << \"Invalid choice. Try again.\" << std::endl;\n        }\n    }\n    return 0;\n}\n",
    "expectedOutput": "Menu:\n1. Add Contact\n2. Display Contacts\n3. Search Contact\n4. Exit\nEnter choice: 1\nEnter name: Alice\nEnter phone: 12345\nMenu:\n1. Add Contact\n2. Display Contacts\n3. Search Contact\n4. Exit\nEnter choice: 2\nContacts List:\nName: Alice, Phone: 12345\nMenu:\n1. Add Contact\n2. Display Contacts\n3. Search Contact\n4. Exit\nEnter choice: 3\nEnter name to search: Alice\nFound: Name: Alice, Phone: 12345\nMenu:\n1. Add Contact\n2. Display Contacts\n3. Search Contact\n4. Exit\nEnter choice: 4\nExiting...",
    "concepts": [
      "structs",
      "vectors",
      "loops",
      "conditional statements"
    ],
    "estimatedTime": "10 minutes",
    "isFeatured": true
  },
  {
    "slug": "create-a-function-to-calculate-moving-average-of-a-list",
    "title": "Create a Function to Calculate Moving Average of a List",
    "language": "python",
    "difficulty": "intermediate",
    "category": "functions",
    "description": "Write a Python function that computes the moving average over a specified window size for a list of numerical values.",
    "prompt": "Write a function named moving_average that takes two parameters: a list of numbers and an integer window size n. The function should return a list of the moving averages calculated over the window n across the list. Each moving average is the average of n consecutive elements. If the window size is larger than the list, return an empty list.",
    "guidance": [
      "Iterate through the list by slices of length n to compute each window's average.",
      "Handle edge cases like an empty list or window size larger than the list length.",
      "Consider using list comprehension for a clean and concise solution."
    ],
    "hints": [
      "Use slicing: list[i:i+n] to get the current window of elements.",
      "Sum the elements in the slice and divide by n to get the average.",
      "Think about how many moving averages you will calculate based on the list length and window size."
    ],
    "starterCode": "def moving_average(numbers, n):\n    # Your code here\n    pass",
    "expectedOutput": "moving_average([1, 2, 3, 4, 5], 3) -> [2.0, 3.0, 4.0]",
    "concepts": [
      "list slicing",
      "loops",
      "functions",
      "averages"
    ],
    "estimatedTime": "10 minutes",
    "isFeatured": false
  },
  {
    "slug": "refactor-complex-c-class-for-improved-readability-and-maintainability",
    "title": "Refactor Complex C++ Class for Improved Readability and Maintainability",
    "language": "cpp",
    "difficulty": "advanced",
    "category": "code-quality",
    "description": "Given a complex and messy C++ class implementation, refactor the code to improve readability, maintainability, and follow best OOP practices without changing the program's behavior.",
    "prompt": "You are provided with a C++ class that manages an inventory of items. The implementation works correctly but is cluttered with deeply nested conditionals, duplicated code, and poor separation of concerns. Refactor the class to improve clarity, structure, and code quality while keeping all existing functionality intact. Avoid changing method signatures and external behavior. Your refactor should focus on reducing code duplication, improving naming, simplifying complex logic, and enhancing code modularity.",
    "guidance": [
      "Identify and extract repeated code snippets into helper functions or private methods.",
      "Replace deeply nested if-else blocks with early returns or guard clauses to simplify flow.",
      "Review variable and method names, improving clarity and intent.",
      "Consider applying design principles such as Single Responsibility Principle to enhance modularity."
    ],
    "hints": [
      "Look for patterns where several branches execute similar code with slight variations; these can be unified.",
      "Extracting small functions not only improves readability but also helps isolate logical units for testing.",
      "Try replacing boolean flags and counters that track states across methods with well-defined state representations."
    ],
    "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n\nclass Inventory {\npublic:\n    Inventory() {}\n\n    void addItem(std::string name, int quantity) {\n        if (quantity > 0) {\n            int index = -1;\n            for (int i = 0; i < items.size(); ++i) {\n                if (items[i] == name) {\n                    index = i;\n                    break;\n                }\n            }\n            if (index == -1) {\n                items.push_back(name);\n                quantities.push_back(quantity);\n            } else {\n                quantities[index] += quantity;\n            }\n        } else {\n            std::cout << \"Invalid quantity\\n\";\n        }\n    }\n\n    void removeItem(std::string name, int quantity) {\n        if (quantity <= 0) {\n            std::cout << \"Cannot remove non-positive quantity\\n\";\n            return;\n        }\n        for (int i = 0; i < items.size(); ++i) {\n            if (items[i] == name) {\n                if (quantities[i] < quantity) {\n                    std::cout << \"Not enough quantity to remove\\n\";\n                } else {\n                    quantities[i] -= quantity;\n                    if (quantities[i] == 0) {\n                        items.erase(items.begin() + i);\n                        quantities.erase(quantities.begin() + i);\n                    }\n                }\n                return;\n            }\n        }\n        std::cout << \"Item not found\" << std::endl;\n    }\n\n    void printInventory() {\n        if (items.size() == 0) {\n            std::cout << \"Inventory is empty\" << std::endl;\n        } else {\n            for (size_t i = 0; i < items.size(); ++i) {\n                std::cout << items[i] << \": \" << quantities[i] << std::endl;\n            }\n        }\n    }\n\nprivate:\n    std::vector<std::string> items;\n    std::vector<int> quantities;\n};\n\nint main() {\n    Inventory inv;\n    inv.addItem(\"apple\", 10);\n    inv.addItem(\"banana\", 5);\n    inv.removeItem(\"apple\", 3);\n    inv.printInventory();\n    inv.removeItem(\"banana\", 6);\n    inv.printInventory();\n    return 0;\n}",
    "expectedOutput": "apple: 7\nbanana: 5\nNot enough quantity to remove\napple: 7\nbanana: 5",
    "concepts": [
      "Code Refactoring",
      "C++ Best Practices",
      "Object-Oriented Programming",
      "Code Maintenance"
    ],
    "estimatedTime": "15 minutes",
    "isFeatured": true
  },
  {
    "slug": "build-a-simple-to-do-list-app",
    "title": "Build a Simple To-Do List App",
    "language": "javascript",
    "difficulty": "beginner",
    "category": "mini-projects",
    "description": "Create a basic to-do list application in JavaScript where users can add, view, and remove tasks. This project helps beginners practice working with arrays, functions, and DOM manipulation.",
    "prompt": "Write a JavaScript function to manage a to-do list. Your code should allow adding new tasks to the list, displaying all current tasks, and removing a task by its name. You do not need to handle user input from HTML elements; focus on manipulating the task list using functions and arrays.",
    "guidance": [
      "Use an array to store the tasks.",
      "Create functions: addTask(task), removeTask(task), and getTasks() to manage the list.",
      "Use simple loops or array methods to find and remove tasks."
    ],
    "hints": [
      "To add a task, use the array push() method.",
      "To remove a task, find its index with indexOf() and then use splice().",
      "getTasks() should return a copy of the array or the array itself to display current tasks."
    ],
    "starterCode": "const tasks = [];\n\nfunction addTask(task) {\n  // Your code here\n}\n\nfunction removeTask(task) {\n  // Your code here\n}\n\nfunction getTasks() {\n  // Your code here\n}",
    "expectedOutput": "addTask('Learn JavaScript');\naddTask('Write a blog post');\nconsole.log(getTasks());\n// Output: ['Learn JavaScript', 'Write a blog post']\n\nremoveTask('Learn JavaScript');\nconsole.log(getTasks());\n// Output: ['Write a blog post']",
    "concepts": [
      "Arrays",
      "Functions",
      "Array methods",
      "Basic algorithmic thinking"
    ],
    "estimatedTime": "10 minutes",
    "isFeatured": true
  },
  {
    "slug": "predict-the-output-of-an-sql-query-with-subqueries-and-joins",
    "title": "Predict the Output of an SQL Query with Subqueries and Joins",
    "language": "sql",
    "difficulty": "intermediate",
    "category": "query-analysis",
    "description": "Analyze the given SQL query involving JOINs and a correlated subquery, and predict the final output based on a provided sample database schema and data.",
    "prompt": "Given the following schema and data for two tables, `employees` and `departments`, analyze the accompanying SQL query and predict its output.\n\nTables:\n\nemployees:\n| id | name    | department_id | salary |\n|----|---------|---------------|--------|\n| 1  | Alice   | 10            | 70000  |\n| 2  | Bob     | 20            | 48000  |\n| 3  | Charlie | 10            | 55000  |\n| 4  | Diana   | 30            | 62000  |\n| 5  | Edward  | 20            | 49000  |\n\n\ndepartments:\n| id | name           |\n|----|----------------|\n| 10 | Sales          |\n| 20 | Engineering    |\n| 30 | Human Resources|\n\nSQL Query:\n\nSELECT d.name AS department, e.name AS employee, e.salary\nFROM employees e\nJOIN departments d ON e.department_id = d.id\nWHERE e.salary > (\n    SELECT AVG(salary)\n    FROM employees\n    WHERE department_id = e.department_id\n)\nORDER BY d.name, e.salary DESC;",
    "guidance": [
      "Understand how the JOIN operation combines employee and department data.",
      "Focus on the subquery which calculates the average salary per employee's department.",
      "Identify which employees' salaries are higher than their department average.",
      "Pay attention to the ORDER BY clause for the final sorted output."
    ],
    "hints": [
      "The subquery is correlated — it references the outer query's department_id.",
      "Calculate the average salary per department first to compare each employee's salary to it.",
      "Check each employee against their department average salary individually."
    ],
    "starterCode": "/* Tables and sample data are described above */\n\nSELECT d.name AS department, e.name AS employee, e.salary\nFROM employees e\nJOIN departments d ON e.department_id = d.id\nWHERE e.salary > (\n    SELECT AVG(salary)\n    FROM employees\n    WHERE department_id = e.department_id\n)\nORDER BY d.name, e.salary DESC;",
    "expectedOutput": "| department    | employee | salary |\n|---------------|----------|--------|\n| Engineering   | Edward   | 49000  |\n| Human Resources| Diana   | 62000  |\n| Sales         | Alice    | 70000  |",
    "concepts": [
      "Correlated subqueries",
      "JOIN operations",
      "Aggregation functions",
      "Ordering results"
    ],
    "estimatedTime": "10 minutes",
    "isFeatured": true
  },
  {
    "slug": "implement-a-custom-memoized-recursive-function-for-large-fibonacci-numbers",
    "title": "Implement a Custom Memoized Recursive Function for Large Fibonacci Numbers",
    "language": "cpp",
    "difficulty": "advanced",
    "category": "functions",
    "description": "Write an optimized C++ function to compute Fibonacci numbers using memoization. The function must efficiently handle very large inputs by caching intermediate results to avoid exponential time complexity, showcasing mastery of recursion, dynamic programming, and function optimization.",
    "prompt": "Create a C++ function named fibonacciMemo that takes a single unsigned integer n and returns the nth Fibonacci number as an unsigned long long. The function must be implemented using recursion and memoization (caching previously computed values) to handle large n values (e.g., n up to 90) efficiently without excessive computation or stack overflow. Avoid global variables for caching; encapsulate memoization logic within the function or helper structures.",
    "guidance": [
      "Use a data structure like std::unordered_map or std::vector to store already computed Fibonacci numbers to avoid redundant calculations.",
      "Define a helper function or use lambda recursion with a memo container passed by reference to keep track of the intermediate results.",
      "Ensure the function handles base cases (n = 0 and n = 1) correctly to avoid infinite recursion."
    ],
    "hints": [
      "Remember that naive recursive Fibonacci computation has exponential time complexity; memoization reduces this to linear.",
      "Using std::unordered_map for memoization works but might be slower than std::vector when n is known and limited.",
      "Be cautious with unsigned long long overflow for very large Fibonacci numbers; this challenge assumes n within the 64-bit result range."
    ],
    "starterCode": "unsigned long long fibonacciMemo(unsigned int n) {\n    // Implement this function\n}",
    "expectedOutput": "fibonacciMemo(10) == 55\nfibonacciMemo(50) == 12586269025\nfibonacciMemo(90) == 2880067194370816120",
    "concepts": [
      "recursion",
      "memoization",
      "dynamic programming",
      "C++ functions"
    ],
    "estimatedTime": "15 minutes",
    "isFeatured": false
  },
  {
    "slug": "refactor-messy-loop-and-conditionals-in-c",
    "title": "Refactor Messy Loop and Conditionals in C++",
    "language": "cpp",
    "difficulty": "beginner",
    "category": "code-quality",
    "description": "Improve the readability and maintainability of a C++ function that calculates the sum of even numbers in a vector. Keep its behavior exactly the same while cleaning up the code.",
    "prompt": "You are given a function that calculates the sum of all even numbers in a vector of integers. The current code works correctly but is hard to read and uses unnecessary variables and convoluted logic. Refactor the function to make it simpler, clearer, and more idiomatic without changing its output or behavior.",
    "guidance": [
      "Focus on simplifying loops and conditionals without altering the logic.",
      "Eliminate unnecessary variables and redundant code.",
      "Use meaningful variable names and consistent formatting."
    ],
    "hints": [
      "Check if the loop can be replaced or simplified with range-based for loops.",
      "Use the modulus operator (%) for checking even numbers.",
      "Consider accumulating the sum directly during iteration, avoiding extra assignments."
    ],
    "starterCode": "int sumEvenNumbers(const std::vector<int>& numbers) {\n    int i = 0;\n    int sum = 0;\n    while(i < (int)numbers.size()) {\n        int current = numbers[i];\n        if(current % 2 == 0) {\n            sum = sum + current;\n        } else {\n            sum = sum + 0;\n        }\n        i = i + 1;\n    }\n    return sum;\n}",
    "expectedOutput": "For input vector {1, 2, 3, 4, 5, 6}, the function should return 12.",
    "concepts": [
      "loops",
      "conditionals",
      "functions",
      "code readability"
    ],
    "estimatedTime": "10 minutes",
    "isFeatured": false
  },
  {
    "slug": "fix-the-array-filtering-bug-to-return-unique-even-numbers",
    "title": "Fix the Array Filtering Bug to Return Unique Even Numbers",
    "language": "javascript",
    "difficulty": "intermediate",
    "category": "debugging",
    "description": "A function meant to filter even numbers from an array and remove duplicates is currently returning incorrect results. Debug the code to ensure it returns only unique even numbers in ascending order.",
    "prompt": "You are given a function getUniqueEvenNumbers that takes an array of integers and is expected to return an array of unique even numbers sorted in ascending order. However, the provided code currently has bugs that prevent it from functioning correctly. Your task is to fix the bugs so that the function returns the correct output. For example, input [1, 2, 2, 3, 4, 4, 5, 6] should return [2, 4, 6].",
    "guidance": [
      "Check how the function filters even numbers and removes duplicates.",
      "Ensure the output array only contains unique even numbers sorted in ascending order."
    ],
    "hints": [
      "Remember that Array.filter is helpful for filtering based on conditions.",
      "Use a Set or similar approach to remove duplicates from an array.",
      "Make sure sort is applied correctly to numbers (not as strings)."
    ],
    "starterCode": "function getUniqueEvenNumbers(arr) {\n  // Filter even numbers\n  const evens = arr.filter(num => num % 2 === 0);\n\n  // Remove duplicates\n  const uniqueEvens = evens.filter((num, index) => evens.indexOf(num) === index);\n\n  // Sort numbers ascending (bug: sorting as strings)\n  uniqueEvens.sort();\n\n  return uniqueEvens;\n}\n\n// Example usage:\nconsole.log(getUniqueEvenNumbers([1, 2, 2, 3, 4, 4, 5, 6]));",
    "expectedOutput": "[2, 4, 6]",
    "concepts": [
      "array filtering",
      "removing duplicates",
      "sorting arrays",
      "debugging"
    ],
    "estimatedTime": "10 minutes",
    "isFeatured": false
  },
  {
    "slug": "refactor-legacy-data-processor-for-improved-readability-and-performance",
    "title": "Refactor Legacy Data Processor for Improved Readability and Performance",
    "language": "python",
    "difficulty": "advanced",
    "category": "code-quality",
    "description": "You are provided with a legacy Python function that processes a list of user records to generate a summary report. Although the function works correctly, it is difficult to read, contains redundant computations, and has inefficient constructs. Your task is to refactor this code to improve readability, maintain the same behavior, and optimize performance while adhering to Python best practices.",
    "prompt": "Below is a legacy Python function named process_user_data which takes a list of user dictionaries and returns a summary dictionary with average age, count of active users, and a list of usernames sorted alphabetically. Refactor this function to improve code clarity and efficiency without changing its behavior. Pay particular attention to redundant code blocks, repeated calculations, and code structure. Ensure your version is idiomatic Python and easy to understand.",
    "guidance": [
      "Identify and eliminate repeated computations or redundant loops.",
      "Consider using built-in Python functions and comprehensions for clarity and performance.",
      "Maintain clear naming and structure for variable and function usage."
    ],
    "hints": [
      "Avoid recalculating the length of lists multiple times; store results when possible.",
      "Use generator expressions or list comprehensions for filtering and mapping data.",
      "Utilize built-in functions like sum(), sorted(), and len() efficiently."
    ],
    "starterCode": "def process_user_data(users):\n    total_age = 0\n    count_active = 0\n    usernames = []\n\n    for i in range(len(users)):\n        if users[i]['active'] == True:\n            count_active += 1\n        total_age += users[i]['age']\n\n    for i in range(len(users)):\n        usernames.append(users[i]['username'])\n\n    average_age = total_age / len(users)\n\n    usernames.sort()\n\n    result = {\n        'average_age': average_age,\n        'active_user_count': count_active,\n        'sorted_usernames': usernames\n    }\n\n    return result",
    "expectedOutput": "{\n  'average_age': 29.6,\n  'active_user_count': 3,\n  'sorted_usernames': ['alice', 'bob', 'charlie', 'diana', 'eve']\n}\n\n# For input example users: [\n#   {'username': 'alice', 'age': 31, 'active': True},\n#   {'username': 'bob', 'age': 22, 'active': False},\n#   {'username': 'charlie', 'age': 29, 'active': True},\n#   {'username': 'diana', 'age': 35, 'active': True},\n#   {'username': 'eve', 'age': 22, 'active': False}\n# ]",
    "concepts": [
      "code refactoring",
      "performance optimization",
      "Python built-in functions",
      "list comprehensions"
    ],
    "estimatedTime": "15 minutes",
    "isFeatured": false
  },
  {
    "slug": "refactor-nested-loops-and-conditionals-for-student-grade-processing",
    "title": "Refactor Nested Loops and Conditionals for Student Grade Processing",
    "language": "python",
    "difficulty": "intermediate",
    "category": "code-quality",
    "description": "Improve the readability and efficiency of a Python function that processes student grades to calculate averages and determine pass/fail status.",
    "prompt": "You are given a Python function that processes a list of student dictionaries containing their names and grades across subjects. The function calculates the average grade for each student and assigns a 'passed' or 'failed' status based on a threshold of 60. However, the current implementation uses nested loops and multiple conditionals making it hard to maintain and less efficient. Refactor the function to improve code clarity, remove redundant checks, and use Pythonic structures such as list comprehensions and helper functions without changing its behavior.",
    "guidance": [
      "Avoid nested loops by utilizing built-in functions like sum() and len() to calculate averages.",
      "Use list comprehensions or map functions to simplify list manipulation.",
      "Extract repetitive logic into helper functions to enhance readability."
    ],
    "hints": [
      "Consider calculating the average grade with a single expression rather than nested loops.",
      "Use Python's ternary operator to assign the pass/fail status concisely."
    ],
    "starterCode": "def process_student_grades(students):\n    results = []\n    for student in students:\n        total = 0\n        count = 0\n        for subject, grade in student['grades'].items():\n            if grade is not None:\n                total += grade\n                count += 1\n        if count > 0:\n            average = total / count\n        else:\n            average = 0\n        if average >= 60:\n            status = 'passed'\n        else:\n            status = 'failed'\n        results.append({'name': student['name'], 'average': average, 'status': status})\n    return results",
    "expectedOutput": "[\n  {'name': 'Alice', 'average': 75.0, 'status': 'passed'},\n  {'name': 'Bob', 'average': 58.75, 'status': 'failed'},\n  {'name': 'Charlie', 'average': 91.0, 'status': 'passed'}\n]",
    "concepts": [
      "refactoring",
      "list comprehensions",
      "helper functions",
      "conditional expressions"
    ],
    "estimatedTime": "10 minutes",
    "isFeatured": false
  },
  {
    "slug": "design-and-implement-a-scalable-e-commerce-order-tracking-data-model",
    "title": "Design and Implement a Scalable E-Commerce Order Tracking Data Model",
    "language": "sql",
    "difficulty": "advanced",
    "category": "data-modeling",
    "description": "Build a comprehensive SQL data model supporting order tracking, including customers, products, orders, shipments, and status history, ensuring efficient querying for complex business insights.",
    "prompt": "You are tasked with creating a scalable, normalized data model suitable for an e-commerce platform's order tracking system. Your model must include tables for Customers, Products, Orders, Order Items, Shipments, and Order Status History. Each order can contain multiple products, and each shipment can include multiple orders or partial shipments. Additionally, you must track each status change of an order over time to support historical queries.\n\nUsing standard SQL (DDL), create the full schema with appropriate primary keys, foreign keys, indexing considerations, and constraints to maintain data integrity. Think carefully about the relationships between tables and the historical tracking of status updates. Your model should optimize for queries such as retrieving all shipments for a customer, the status history of a particular order, and identifying delayed shipments.\n\nConsider edge cases like split shipments and orders with multiple status changes. The resulting schema should be normalized to at least 3NF and allow for efficient inserts and queries.",
    "guidance": [
      "Focus on designing clear one-to-many and many-to-many relationships with junction tables where needed.",
      "Use status history tables to track changes with timestamps rather than overwriting existing order status.",
      "Add indexes on foreign keys and commonly queried columns to optimize performance."
    ],
    "hints": [
      "A junction table like OrderItems is necessary to model multiple products per order.",
      "To track multiple shipments per order, consider a Shipments table with a linking table between Orders and Shipments.",
      "Use a dedicated OrderStatusHistory table with an order_id, status, and timestamp column for status tracking."
    ],
    "starterCode": "CREATE TABLE Customers (\n  customer_id INT PRIMARY KEY,\n  customer_name VARCHAR(255),\n  email VARCHAR(255) UNIQUE\n);\n\n-- Define Products, Orders, OrderItems, Shipments, and OrderStatusHistory tables as part of the task.",
    "expectedOutput": "A set of SQL CREATE TABLE statements defining Customers, Products, Orders, OrderItems, Shipments, and OrderStatusHistory with keys, constraints, and indexes.",
    "concepts": [
      "SQL schema design",
      "Data normalization",
      "Relational modeling",
      "Indexing and constraints"
    ],
    "estimatedTime": "40 minutes",
    "isFeatured": true
  },
  {
    "slug": "fix-the-bug-in-the-sum-of-even-numbers-function",
    "title": "Fix the Bug in the Sum of Even Numbers Function",
    "language": "python",
    "difficulty": "beginner",
    "category": "debugging",
    "description": "A simple Python function is intended to sum all even numbers from a list, but it contains a bug. Your task is to identify and fix the bug so the function returns the correct sum of even numbers.",
    "prompt": "The function sum_even_numbers(nums) is supposed to take a list of integers and return the sum of all even numbers in the list. However, it currently returns the wrong result. Fix the bug in the function so it returns the correct sum.",
    "guidance": [
      "Check how the function is checking if a number is even.",
      "Ensure the function correctly accumulates the sum of even numbers only.",
      "Test the function with different lists to confirm the fix."
    ],
    "hints": [
      "Recall that even numbers are divisible by 2 with no remainder.",
      "Look carefully at the if condition that checks for even numbers."
    ],
    "starterCode": "def sum_even_numbers(nums):\n    total = 0\n    for num in nums:\n        if num % 2 == 1:\n            total += num\n    return total",
    "expectedOutput": "sum_even_numbers([1, 2, 3, 4, 5, 6]) should return 12",
    "concepts": [
      "modulus operator",
      "for loops",
      "conditional statements",
      "accumulators"
    ],
    "estimatedTime": "10 minutes",
    "isFeatured": false
  },
  {
    "slug": "build-a-function-to-merge-and-sort-two-arrays",
    "title": "Build a Function to Merge and Sort Two Arrays",
    "language": "cpp",
    "difficulty": "intermediate",
    "category": "functions",
    "description": "Write a C++ function that takes two integer arrays as inputs, merges them into a single array, removes duplicates, and returns the sorted result.",
    "prompt": "Create a function named mergeAndSort that accepts two vectors of integers. The function should merge both vectors into one, eliminate any duplicate values, and return a new vector sorted in ascending order.",
    "guidance": [
      "Use STL containers like std::vector and algorithms to manage the arrays efficiently.",
      "Think about how to remove duplicates after merging before sorting the array."
    ],
    "hints": [
      "Consider using std::set or sorting the merged vector then removing duplicates with std::unique.",
      "Remember that std::sort and std::unique require including the <algorithm> header."
    ],
    "starterCode": "#include <vector>\n\nstd::vector<int> mergeAndSort(const std::vector<int>& arr1, const std::vector<int>& arr2) {\n    // Your implementation here\n    return {};\n}",
    "expectedOutput": "[1, 2, 3, 4, 5, 6, 7]",
    "concepts": [
      "vectors",
      "sorting",
      "duplicates removal"
    ],
    "estimatedTime": "10 minutes",
    "isFeatured": false
  },
  {
    "slug": "advanced-dynamic-form-builder-with-validation-in-javascript",
    "title": "Advanced Dynamic Form Builder with Validation in JavaScript",
    "language": "javascript",
    "difficulty": "advanced",
    "category": "mini-projects",
    "description": "Build a reusable dynamic form builder function that generates interactive forms based on a JSON schema, including custom validations and conditional field visibility.",
    "prompt": "Create a function named buildDynamicForm(schema) that accepts a JSON schema representing a form configuration and dynamically generates a HTML form. The function should render input fields, apply custom validation rules, handle conditional field visibility based on other inputs, and provide real-time validation feedback. When the form is submitted, the data should be returned as an object if all validations pass, or show appropriate error messages otherwise. The schema will include field types, labels, validation criteria (e.g., required, min/max length, regex), and dependencies for conditional display.",
    "guidance": [
      "Parse the JSON schema to dynamically create form elements including text inputs, selects, checkboxes, etc.",
      "Implement validation logic that runs on input change and on form submission to provide immediate feedback.",
      "Manage conditional logic to hide or show fields dynamically based on other field values using event listeners.",
      "Structure your code to support extensibility for adding new field types and validation rules in the future."
    ],
    "hints": [
      "Use event delegation or direct listeners to handle input changes for validation and conditional fields.",
      "Consider maintaining a state object mapping each field's current value for easy validation and conditional checks.",
      "Leverage HTML5 validation attributes where possible and supplement with custom functions for complex rules."
    ],
    "starterCode": "function buildDynamicForm(schema) {\n  const form = document.createElement('form');\n  // Your code to dynamically build form elements\n  // Add validation and conditional logic\n  form.addEventListener('submit', (event) => {\n    event.preventDefault();\n    // Validate and gather data\n    // Show errors or return form data\n  });\n  return form;\n}",
    "expectedOutput": "A fully functional HTML form generated from the provided schema, that enforces validations, shows/hides fields conditionally, and returns form data as an object on successful submission.",
    "concepts": [
      "dynamic DOM manipulation",
      "custom validation logic",
      "event handling",
      "state management"
    ],
    "estimatedTime": "45 minutes",
    "isFeatured": false
  },
  {
    "slug": "fix-the-sql-query-to-correctly-calculate-average-salary",
    "title": "Fix the SQL Query to Correctly Calculate Average Salary",
    "language": "sql",
    "difficulty": "beginner",
    "category": "debugging",
    "description": "This challenge requires you to debug a simple SQL query that attempts to calculate the average salary from an employees table, but the query contains syntax errors that prevent it from running correctly.",
    "prompt": "You are given a broken SQL query that is supposed to return the average salary from the employees table. The query currently throws a syntax error. Identify and fix the errors so that the query runs successfully and returns the correct average salary.",
    "guidance": [
      "Check the function name spelling and syntax used for calculating averages.",
      "Ensure all necessary keywords like SELECT and FROM are included correctly.",
      "Verify that the table and column names are referenced correctly and consistently."
    ],
    "hints": [
      "The SQL aggregate function to calculate average is spelled 'AVG', not 'average'.",
      "Every SELECT query must specify columns after SELECT and a source table after FROM.",
      "Pay attention to commas and parentheses placement in your query."
    ],
    "starterCode": "SELECT average(salary FROM employees;",
    "expectedOutput": "A single numeric value representing the average salary from the employees table.",
    "concepts": [
      "SQL syntax basics",
      "Aggregate functions",
      "Basic SELECT queries"
    ],
    "estimatedTime": "10 minutes",
    "isFeatured": false
  },
  {
    "slug": "create-a-sql-function-to-calculate-running-sales-total-per-customer",
    "title": "Create a SQL Function to Calculate Running Sales Total per Customer",
    "language": "sql",
    "difficulty": "intermediate",
    "category": "queries",
    "description": "Build a SQL function that calculates the running total of sales for each customer ordered by the sale date.",
    "prompt": "Write a SQL function named calculate_running_total that takes no parameters and returns a table showing each customer's sales transactions with a running total of their sales amount ordered by sale_date. The input table 'sales' has columns: customer_id (INT), sale_date (DATE), and amount (DECIMAL). Your function should output columns: customer_id, sale_date, amount, running_total. The running_total is the cumulative sum of the amount for each customer ordered by sale_date.",
    "guidance": [
      "Use window functions with PARTITION BY to sum the amount per customer.",
      "Order the running total calculation by sale_date to maintain correct cumulative sums.",
      "Return the results as a table with all specified columns."
    ],
    "hints": [
      "Consider using the SQL window function SUM() OVER (PARTITION BY customer_id ORDER BY sale_date).",
      "Make sure the function returns a table with the correct columns and types.",
      "Pay attention to the order of rows when calculating the running total."
    ],
    "starterCode": "CREATE FUNCTION calculate_running_total()\nRETURNS TABLE (\n  customer_id INT,\n  sale_date DATE,\n  amount DECIMAL(10,2),\n  running_total DECIMAL(10,2)\n) AS $$\nBEGIN\n  RETURN QUERY\n  -- your query here\n;\nEND;\n$$ LANGUAGE plpgsql;",
    "expectedOutput": "customer_id | sale_date  | amount  | running_total\n------------|------------|---------|--------------\n1           | 2023-01-01 | 100.00  | 100.00\n1           | 2023-01-05 | 50.00   | 150.00\n2           | 2023-01-02 | 200.00  | 200.00\n2           | 2023-01-10 | 100.00  | 300.00",
    "concepts": [
      "window functions",
      "running total",
      "SQL function",
      "partition by"
    ],
    "estimatedTime": "10 minutes",
    "isFeatured": true
  },
  {
    "slug": "refactor-and-optimize-complex-data-processing-function",
    "title": "Refactor and Optimize Complex Data Processing Function",
    "language": "python",
    "difficulty": "advanced",
    "category": "code-quality",
    "description": "Given a large-function script that processes a nested data structure with redundant loops and poor readability, refactor the code to improve maintainability, reduce complexity, and optimize performance without changing its output.",
    "prompt": "You are provided a Python function `process_data(data)` that takes a list of dictionaries with nested data. The function performs multiple nested loops, redundant computations, and has low readability due to variable naming and structure.\n\nYour task is to refactor this function to:\n- Improve readability and maintainability by using meaningful variable names and modularizing repeated logic into helper functions.\n- Optimize performance by minimizing redundant iterations and using efficient data access techniques.\n- Keep the behavior of the function exactly the same, ensuring output correctness.\n\nSubmit the refactored version of the function only.",
    "guidance": [
      "Break down the monolithic function into smaller helper functions with single responsibilities.",
      "Use list comprehensions or generator expressions where appropriate to simplify loops.",
      "Avoid redundant loops by combining data processing steps when possible.",
      "Rename variables to clearly indicate their purpose and data content."
    ],
    "hints": [
      "Consider using dictionary lookups to replace repeated searches through the list.",
      "Extract reusable blocks of code into separate functions for clarity.",
      "Use pythonic constructs like enumerate and zip to simplify nested loops."
    ],
    "starterCode": "def process_data(data):\n    result = []\n    for i in range(len(data)):\n        temp = []\n        for j in range(len(data[i]['items'])):\n            item = data[i]['items'][j]\n            if item['value'] > 10:\n                acc = 0\n                for k in range(len(item['subitems'])):\n                    subitem = item['subitems'][k]\n                    acc += subitem['metric']\n                temp.append({'name': item['name'], 'total_metric': acc})\n        result.append({'id': data[i]['id'], 'processed': temp})\n    return result",
    "expectedOutput": "[{'id': 1, 'processed': [{'name': 'itemA', 'total_metric': 25}]}, {'id': 2, 'processed': []}]",
    "concepts": [
      "code refactoring",
      "performance optimization",
      "code readability",
      "nested data processing"
    ],
    "estimatedTime": "15 minutes",
    "isFeatured": true
  },
  {
    "slug": "build-a-function-to-calculate-the-area-of-a-rectangle",
    "title": "Build a Function to Calculate the Area of a Rectangle",
    "language": "cpp",
    "difficulty": "beginner",
    "category": "functions",
    "description": "Write a simple C++ function that calculates the area of a rectangle given its width and height.",
    "prompt": "Create a function named calculateArea that takes two integers, width and height, and returns the area of the rectangle (width * height). The function should return an integer representing the area.",
    "guidance": [
      "Define a function with the name calculateArea that accepts two integer parameters.",
      "Use the return statement to send back the product of width and height.",
      "Make sure your function has the correct return type."
    ],
    "hints": [
      "The area of a rectangle is width multiplied by height.",
      "The function signature should look like: int calculateArea(int width, int height)."
    ],
    "starterCode": "int calculateArea(int width, int height) {\n    // Your code here\n}",
    "expectedOutput": "calculateArea(5, 10) should return 50\ncalculateArea(3, 7) should return 21",
    "concepts": [
      "functions",
      "return statement"
    ],
    "estimatedTime": "10 minutes",
    "isFeatured": true
  },
  {
    "slug": "predict-the-output-of-nested-array-and-object-destructuring-with-defaults",
    "title": "Predict the Output of Nested Array and Object Destructuring with Defaults",
    "language": "javascript",
    "difficulty": "intermediate",
    "category": "logic",
    "description": "Analyze the given JavaScript code involving nested array and object destructuring with default values and predict the final output.",
    "prompt": "Consider the following JavaScript snippet. Predict the output printed to the console without running the code:\n\nconst data = [\n  { id: 1, values: [10, 20] },\n  { id: 2 },\n  { id: 3, values: [30] }\n];\n\nconst [\n  { values: [a, b] = [0, 0] },\n  { values: [c, d] = [5, 5] },\n  { values: [e, f] = [7, 7] }\n] = data;\n\nconsole.log(a, b, c, d, e, f);\n\nWhat values are logged to the console?",
    "guidance": [
      "Review how destructuring assignment works with nested arrays and objects",
      "Recall that default values in destructuring only apply when the property being destructured is undefined",
      "Look at each element of 'data' and consider what happens when that element does or does not have the 'values' property"
    ],
    "hints": [
      "For the second object in the array, 'values' is missing, so the default array [5,5] is used during destructuring",
      "For the first object, 'values' is present, so the default [0,0] is ignored",
      "Remember that when destructuring arrays, missing elements default to 'undefined' unless a default is provided"
    ],
    "starterCode": "const data = [\n  { id: 1, values: [10, 20] },\n  { id: 2 },\n  { id: 3, values: [30] }\n];\n\nconst [\n  { values: [a, b] = [0, 0] },\n  { values: [c, d] = [5, 5] },\n  { values: [e, f] = [7, 7] }\n] = data;\n\nconsole.log(a, b, c, d, e, f);",
    "expectedOutput": "10 20 5 5 30 undefined",
    "concepts": [
      "JavaScript destructuring",
      "default values in destructuring",
      "arrays and objects"
    ],
    "estimatedTime": "10 minutes",
    "isFeatured": true
  },
  {
    "slug": "predict-the-output-of-a-complex-recursive-and-memoized-function",
    "title": "Predict the Output of a Complex Recursive and Memoized Function",
    "language": "javascript",
    "difficulty": "advanced",
    "category": "logic",
    "description": "Analyze the provided JavaScript function that uses recursion, memoization, and bitwise operations to determine its output when called with a specific input.",
    "prompt": "Consider the following JavaScript code snippet. Predict the output when executing `mysteryFunction(10)`. Explain your reasoning about how the recursion and memoization influence the outcome.",
    "guidance": [
      "Trace the recursion flow and understand how memoization caches results to avoid repeated calculations.",
      "Pay attention to bitwise operations and how they alter the function parameters and results.",
      "Focus on how the combination of recursion and bitwise shifts affects the base cases and final returned values."
    ],
    "hints": [
      "Memoization drastically reduces the number of calls by caching results.",
      "Bitwise operations change the value and effectively partition subproblems in recursion.",
      "Consider writing down or using a tree diagram to visualize recursive calls and returns."
    ],
    "starterCode": "function mysteryFunction(n, memo = {}) {\n  if (n <= 1) return n;\n  if (memo[n]) return memo[n];\n\n  const left = mysteryFunction(n >> 1, memo);\n  const right = mysteryFunction(n >> 2, memo);\n  memo[n] = left + right + (n & 1);\n\n  return memo[n];\n}\n\nconsole.log(mysteryFunction(10));",
    "expectedOutput": "6",
    "concepts": [
      "recursion",
      "memoization",
      "bitwise operations"
    ],
    "estimatedTime": "10 minutes",
    "isFeatured": false
  },
  {
    "slug": "build-a-function-to-rotate-a-vector-by-k-positions",
    "title": "Build a Function to Rotate a Vector by k Positions",
    "language": "cpp",
    "difficulty": "intermediate",
    "category": "functions",
    "description": "Write a C++ function that takes a vector of integers and an integer k, and returns the vector rotated to the right by k positions. This exercise tests your understanding of vector manipulation, modular arithmetic, and function implementation.",
    "prompt": "Create a function named rotateVector that accepts a vector<int> and an integer k. The function should return a new vector where the elements are rotated to the right by k positions. For example, rotating [1, 2, 3, 4, 5] by 2 positions results in [4, 5, 1, 2, 3]. Make sure the function handles cases where k is greater than the length of the vector.",
    "guidance": [
      "Use modular arithmetic to handle rotation values greater than the vector size.",
      "Consider creating a new vector and placing elements at their rotated positions.",
      "Avoid modifying the input vector directly if you want to preserve immutability."
    ],
    "hints": [
      "To find the new position for an element originally at index i, use (i + k) % size.",
      "Think about how to split and recombine the vector into two parts to achieve rotation efficiently."
    ],
    "starterCode": "#include <vector>\nusing namespace std;\n\nvector<int> rotateVector(const vector<int>& nums, int k) {\n    // Your code here\n}",
    "expectedOutput": "[4, 5, 1, 2, 3]",
    "concepts": [
      "vectors",
      "modular arithmetic",
      "function implementation"
    ],
    "estimatedTime": "10 minutes",
    "isFeatured": false
  },
  {
    "slug": "fix-the-bug-in-a-simple-temperature-converter",
    "title": "Fix the Bug in a Simple Temperature Converter",
    "language": "cpp",
    "difficulty": "beginner",
    "category": "debugging",
    "description": "Debug a basic C++ function that is supposed to convert temperatures from Celsius to Fahrenheit but currently produces incorrect results.",
    "prompt": "You are given a function meant to convert temperature values from Celsius to Fahrenheit using the formula F = (C * 9/5) + 32. However, the current implementation returns incorrect values. Identify and fix the bug so the function returns the correct Fahrenheit temperature for any Celsius input.",
    "guidance": [
      "Review the arithmetic operations and their order in the formula.",
      "Watch out for integer division pitfalls in C++.",
      "Test the function with common values like 0°C (should return 32°F) and 100°C (should return 212°F)."
    ],
    "hints": [
      "Check if the division 9/5 is computed as integer division which may cause truncation.",
      "Make sure multiplication and addition are done in the right order without losing precision."
    ],
    "starterCode": "double celsiusToFahrenheit(int celsius) {\n    return celsius * 9 / 5 + 32;\n}",
    "expectedOutput": "celsiusToFahrenheit(0) should return 32\ncelsiusToFahrenheit(100) should return 212",
    "concepts": [
      "arithmetic operations",
      "operator precedence",
      "data types and integer division"
    ],
    "estimatedTime": "10 minutes",
    "isFeatured": true
  },
  {
    "slug": "refactor-complex-sql-query-for-improved-performance-and-readability",
    "title": "Refactor Complex SQL Query for Improved Performance and Readability",
    "language": "sql",
    "difficulty": "advanced",
    "category": "optimization",
    "description": "You are given a large and complex SQL query that fetches sales summary data with multiple subqueries and redundant joins. Refactor the query to improve its readability and optimize performance while ensuring the output remains exactly the same.",
    "prompt": "Given the following SQL query, refactor it to improve clarity and reduce execution time without altering the results. Focus on eliminating unnecessary subqueries, optimizing joins, and leveraging window functions or CTEs if appropriate. The query aggregates sales data by product category and month, combining information from orders, products, and customers tables.",
    "guidance": [
      "Identify and remove redundant subqueries and joins that can be combined or simplified.",
      "Consider using Common Table Expressions (CTEs) to break down complex parts for better readability.",
      "Use window functions to replace subqueries where possible for efficiency."
    ],
    "hints": [
      "Check if some joins or filters can be pushed earlier to limit data processed.",
      "Look for repeated aggregations that can be calculated once and reused.",
      "Review the use of GROUP BY and see if aggregations can be combined."
    ],
    "starterCode": "SELECT\n  c.category_name,\n  DATE_TRUNC('month', o.order_date) AS order_month,\n  (SELECT COUNT(*) FROM orders WHERE product_id = p.product_id AND DATE_TRUNC('month', order_date) = DATE_TRUNC('month', o.order_date)) AS total_orders,\n  (SELECT SUM(quantity) FROM order_items oi WHERE oi.product_id = p.product_id AND oi.order_id IN (SELECT order_id FROM orders WHERE DATE_TRUNC('month', order_date) = DATE_TRUNC('month', o.order_date))) AS total_quantity,\n  (SELECT SUM(oi.price * oi.quantity) FROM order_items oi WHERE oi.product_id = p.product_id AND oi.order_id IN (SELECT order_id FROM orders WHERE DATE_TRUNC('month', order_date) = DATE_TRUNC('month', o.order_date))) AS total_revenue\nFROM orders o\nJOIN products p ON o.product_id = p.product_id\nJOIN categories c ON p.category_id = c.category_id\nGROUP BY c.category_name, order_month\nORDER BY c.category_name, order_month;",
    "expectedOutput": "Table with columns: category_name, order_month (first day of month), total_orders, total_quantity, total_revenue showing aggregated sales data per category per month, sorted by category_name and order_month.",
    "concepts": [
      "SQL query optimization",
      "Common Table Expressions (CTEs)",
      "Window functions",
      "Query refactoring"
    ],
    "estimatedTime": "15 minutes",
    "isFeatured": false
  },
  {
    "slug": "create-a-sql-function-to-calculate-moving-average-sales-over-dynamic-time-windows",
    "title": "Create a SQL Function to Calculate Moving Average Sales Over Dynamic Time Windows",
    "language": "sql",
    "difficulty": "advanced",
    "category": "queries",
    "description": "Build a SQL function that calculates the moving average of daily sales for a specified product over a dynamic number of previous days. The function should handle gaps in dates and provide efficient performance for large sales datasets.",
    "prompt": "Write a SQL function named `moving_average_sales` that takes three parameters: a product ID, a date, and a window size N (integer). The function returns the average of the sales quantity for that product over the N days ending on the given date (inclusive). Assume the existence of a `sales` table with columns: `product_id` (int), `sale_date` (date), and `quantity` (int). Your function should handle cases where some dates in the window have no sales records by treating missing days as zero sales. Optimize the function for large datasets.",
    "guidance": [
      "Use window functions or aggregation with date range filtering to calculate sums over the specified date window.",
      "Handle missing dates by generating all dates within the window for the product and joining with the sales data.",
      "Ensure the function is optimized with indexes on `product_id` and `sale_date`."
    ],
    "hints": [
      "Consider using a calendar table or generate_series function (if available) to fill in missing dates within the window.",
      "Filtering the sales data before aggregation improves query performance.",
      "Use COALESCE to treat NULL sales quantities as zero when calculating the average."
    ],
    "starterCode": "CREATE OR REPLACE FUNCTION moving_average_sales(p_product_id INT, p_date DATE, p_window INT) RETURNS NUMERIC AS $$\nBEGIN\n  -- Your implementation here\n  RETURN 0;\nEND;\n$$ LANGUAGE plpgsql;",
    "expectedOutput": "For example, moving_average_sales(101, '2024-06-30', 7) returns the average sales quantity for product 101 from 2024-06-24 to 2024-06-30 inclusive.",
    "concepts": [
      "window functions",
      "date range queries",
      "aggregation",
      "SQL functions"
    ],
    "estimatedTime": "15 minutes",
    "isFeatured": false
  },
  {
    "slug": "build-a-expense-tracker-with-category-summaries",
    "title": "Build a Expense Tracker with Category Summaries",
    "language": "python",
    "difficulty": "intermediate",
    "category": "mini-projects",
    "description": "Create a Python function that manages a list of expenses and produces a summary by category, enabling users to track their spending habits effectively.",
    "prompt": "Write a function `expense_summary` that takes a list of expenses, where each expense is represented as a dictionary with keys `amount` (a float) and `category` (a string). Your function should return a dictionary that summarizes the total spending per category. Additionally, include a key 'total' in the output dictionary representing the total amount spent across all categories.\n\nFor example, given the input:\n\n[{'amount': 15.50, 'category': 'food'}, {'amount': 20.00, 'category': 'transport'}, {'amount': 5.00, 'category': 'food'}]\n\nyour function should return:\n\n{'food': 20.50, 'transport': 20.00, 'total': 40.50}\n\nMake sure your code is efficient and handles the case when the input list is empty.",
    "guidance": [
      "Loop through each expense to aggregate amounts by category using a dictionary.",
      "Keep a running total of all expenses to include in the result under the 'total' key.",
      "Consider edge cases like empty input lists and ensure your function returns an empty summary with a total of 0."
    ],
    "hints": [
      "Use the dict.get() method to simplify adding amounts to categories in the summary.",
      "Initialize the total spending variable outside the loop and update it for each expense.",
      "To handle empty input, the default output should be {'total': 0} with no category keys."
    ],
    "starterCode": "def expense_summary(expenses):\n    # Implement your solution here\n    pass",
    "expectedOutput": "{'food': 20.50, 'transport': 20.00, 'total': 40.50}",
    "concepts": [
      "dictionaries",
      "list iteration",
      "aggregation",
      "handling edge cases"
    ],
    "estimatedTime": "10 minutes",
    "isFeatured": false
  },
  {
    "slug": "fix-the-aggregation-bug-in-employee-salary-report-query",
    "title": "Fix the Aggregation Bug in Employee Salary Report Query",
    "language": "sql",
    "difficulty": "advanced",
    "category": "debugging",
    "description": "An SQL query intended to generate a report summarizing total salaries by department and job title has incorrect aggregation logic causing wrong results. Your task is to identify and fix the bugs in the query to produce accurate aggregation.",
    "prompt": "Given the following broken SQL query that aims to calculate total salaries grouped by department and job title from the Employees table, identify the bug(s) and correct the query so it produces the correct aggregated sums for each department and job title combination.",
    "guidance": [
      "Check for missing or incorrect GROUP BY clauses that affect aggregation behavior.",
      "Review JOIN conditions and SELECT columns to ensure consistent grouping.",
      "Validate that aggregate functions like SUM() include only relevant columns."
    ],
    "hints": [
      "Look for columns in the SELECT clause that are neither aggregated nor included in GROUP BY.",
      "Check if any JOINs cause row multiplication affecting totals.",
      "Consider using GROUP BY on all non-aggregated columns to fix issues."
    ],
    "starterCode": "SELECT d.department_name, e.job_title, SUM(e.salary) total_salary\nFROM Employees e\nJOIN Departments d ON e.department_id = d.id\nWHERE e.hire_date > '2020-01-01'\nORDER BY d.department_name, e.job_title;",
    "expectedOutput": "A result table with columns: department_name, job_title, total_salary, where total_salary is the sum of salary for each department-job_title group accurately aggregated.",
    "concepts": [
      "SQL aggregation",
      "GROUP BY clause",
      "JOIN operations",
      "Aggregate functions"
    ],
    "estimatedTime": "15 minutes",
    "isFeatured": true
  },
  {
    "slug": "build-a-function-to-flatten-a-nested-list-of-integers",
    "title": "Build a Function to Flatten a Nested List of Integers",
    "language": "python",
    "difficulty": "intermediate",
    "category": "functions",
    "description": "Create a Python function that takes a nested list of integers and returns a flat list containing all the integers in their original order.",
    "prompt": "Write a function named flatten_list that accepts a single parameter: a list which can contain integers or other lists (which themselves may contain integers or other lists, and so on). Your function should return a new flat list containing all the integers from the nested structure in the same left-to-right order.",
    "guidance": [
      "Use recursion to handle arbitrarily nested lists.",
      "Check the type of each element to decide if it’s an integer or a sublist."
    ],
    "hints": [
      "Use isinstance(element, list) to check if an element is a list.",
      "If an element is an integer, append it to the result list; if it's a list, recursively call flatten_list on it."
    ],
    "starterCode": "def flatten_list(nested_list):\n    # Your code here\n    pass",
    "expectedOutput": "flatten_list([1, [2, [3, 4], 5], 6])  # returns [1, 2, 3, 4, 5, 6]",
    "concepts": [
      "recursion",
      "list manipulation"
    ],
    "estimatedTime": "10 minutes",
    "isFeatured": true
  },
  {
    "slug": "predict-the-output-of-a-simple-sql-select-with-where-clause",
    "title": "Predict the Output of a Simple SQL SELECT with WHERE Clause",
    "language": "sql",
    "difficulty": "beginner",
    "category": "query-analysis",
    "description": "Analyze a basic SQL query that filters data using a WHERE clause and predict what the output will be based on the given data.",
    "prompt": "Given the following table 'Employees' and SQL query, what will be the result of the query? Describe which rows are returned and why.\n\nTable: Employees\n| id | name    | department | salary |\n|----|---------|------------|--------|\n| 1  | Alice   | Sales      | 50000  |\n| 2  | Bob     | Marketing  | 60000  |\n| 3  | Charlie | Sales      | 70000  |\n| 4  | David   | HR         | 45000  |\n\nQuery:\nSELECT name, salary FROM Employees WHERE department = 'Sales' AND salary > 55000;",
    "guidance": [
      "Look carefully at which conditions the query filters on in the WHERE clause.",
      "Identify each row in the table that meets both conditions: department must be 'Sales' and salary must be greater than 55000."
    ],
    "hints": [
      "Remember that both conditions in the WHERE clause must be true for a row to be included.",
      "Check each employee's department and salary one by one against the filter."
    ],
    "starterCode": "SELECT name, salary FROM Employees WHERE department = 'Sales' AND salary > 55000;",
    "expectedOutput": "| name    | salary |\n|---------|--------|\n| Charlie | 70000  |",
    "concepts": [
      "SELECT statement",
      "WHERE clause filtering"
    ],
    "estimatedTime": "10 minutes",
    "isFeatured": false
  },
  {
    "slug": "predict-the-output-of-a-nested-list-and-dictionary-manipulation",
    "title": "Predict the Output of a Nested List and Dictionary Manipulation",
    "language": "python",
    "difficulty": "intermediate",
    "category": "logic",
    "description": "Analyze the given Python code that manipulates nested lists and dictionaries, and predict its exact printed output.",
    "prompt": "Examine the provided Python code snippet carefully. The code defines nested lists and dictionaries, modifies some values, and prints results after these changes. Your task is to determine exactly what the output will be when this code runs.",
    "guidance": [
      "Follow the flow of the code step-by-step, focusing on how lists and dictionaries are modified.",
      "Keep track of variable references, especially how changes to one object affect others that reference the same object."
    ],
    "hints": [
      "Remember that lists and dictionaries are mutable objects and assignments can create references, not copies.",
      "Look closely at the order of operations—the modifications after initializations affect later prints."
    ],
    "starterCode": "data = [{'a': [1, 2, 3]}, {'b': [4, 5]}]\nref = data[0]['a']\nref.append(4)\ndata[1]['b'] = ref\nprint(data)\nprint(ref)",
    "expectedOutput": "[{'a': [1, 2, 3, 4]}, {'b': [1, 2, 3, 4]}]\n[1, 2, 3, 4]",
    "concepts": [
      "mutable objects",
      "list and dictionary references",
      "object mutation"
    ],
    "estimatedTime": "10 minutes",
    "isFeatured": false
  },
  {
    "slug": "build-a-function-to-group-objects-by-a-key",
    "title": "Build a Function to Group Objects by a Key",
    "language": "javascript",
    "difficulty": "intermediate",
    "category": "functions",
    "description": "Create a JavaScript function that groups an array of objects by a specified key, returning an object where each key maps to an array of items sharing that key's value.",
    "prompt": "Write a function named 'groupBy' that takes two parameters: an array of objects, and a string that represents the key to group by. The function should return an object where each property is a unique value from the specified key in the objects, and the corresponding value is an array of all objects that have that key value.\n\nExample:\ngroupBy([{age: 23, name: 'Alice'}, {age: 23, name: 'Bob'}, {age: 30, name: 'Charlie'}], 'age')\nshould return:\n{\n  23: [{age: 23, name: 'Alice'}, {age: 23, name: 'Bob'}],\n  30: [{age: 30, name: 'Charlie'}]\n}\n\nMake sure your function works for any key and array size.",
    "guidance": [
      "Iterate through each object in the input array.",
      "Check if the grouping key's value already exists in the result object.",
      "If it does, push the current object into the appropriate array; otherwise, create a new array with the current object."
    ],
    "hints": [
      "Use the array 'reduce' method to accumulate grouped results efficiently.",
      "Remember that object properties can be accessed dynamically using bracket notation.",
      "Check if the key exists by using 'hasOwnProperty' or a simple truthy check."
    ],
    "starterCode": "function groupBy(array, key) {\n  const result = {};\n  // Your code here\n  return result;\n}",
    "expectedOutput": "{\n  23: [ { age: 23, name: 'Alice' }, { age: 23, name: 'Bob' } ],\n  30: [ { age: 30, name: 'Charlie' } ]\n}",
    "concepts": [
      "arrays",
      "objects",
      "iteration",
      "higher-order functions"
    ],
    "estimatedTime": "10 minutes",
    "isFeatured": false
  },
  {
    "slug": "build-a-function-to-serialize-and-deserialize-nested-dictionaries-with-custom-rules",
    "title": "Build a Function to Serialize and Deserialize Nested Dictionaries with Custom Rules",
    "language": "python",
    "difficulty": "advanced",
    "category": "functions",
    "description": "Create a Python function to serialize a nested dictionary into a custom string format and another function to revert it back, handling complex nesting and type conversions.",
    "prompt": "Write two functions: serialize_dict and deserialize_dict. The serialize_dict function takes a nested dictionary and converts it into a custom string format where keys and values are joined by '=', pairs are separated by ';', and nested dictionaries are enclosed in parentheses, preserving nesting structure. The deserialize_dict function takes such a string and reconstructs the original dictionary, converting numeric strings back to integers or floats as appropriate. For example, given {'a': 1, 'b': {'c': 2, 'd': 3}}, serialize_dict should return 'a=1;b=(c=2;d=3)'. Then deserialize_dict('a=1;b=(c=2;d=3)') should return the original nested dictionary.",
    "guidance": [
      "Think recursively to handle arbitrarily deep nested dictionaries during serialization and deserialization.",
      "Ensure to properly distinguish between string values and nested dictionaries during both operations.",
      "Implement numeric detection to convert strings back to integers or floats in deserialization."
    ],
    "hints": [
      "You can use recursion inside both functions to process nested dictionaries.",
      "Use parentheses to mark boundaries of nested dictionaries during serialization.",
      "When deserializing, carefully parse substrings to isolate keys and values and convert numeric strings."
    ],
    "starterCode": "def serialize_dict(d):\n    # Implement this function\n    pass\n\ndef deserialize_dict(s):\n    # Implement this function\n    pass",
    "expectedOutput": "{\"a\": 1, \"b\": {\"c\": 2, \"d\": 3}}",
    "concepts": [
      "recursion",
      "string parsing",
      "data serialization",
      "type conversion"
    ],
    "estimatedTime": "15 minutes",
    "isFeatured": true
  },
  {
    "slug": "refactor-and-improve-readability-of-a-data-filtering-function",
    "title": "Refactor and Improve Readability of a Data Filtering Function",
    "language": "python",
    "difficulty": "intermediate",
    "category": "code-quality",
    "description": "Refactor a given Python function that filters and processes a list of dictionaries to improve its code quality, readability, and maintainability without altering its output behavior.",
    "prompt": "You are given a Python function that takes a list of user dictionaries and filters out those who are inactive or under 18, then returns a new list containing usernames in uppercase. The function works correctly but is hard to read and maintain. Refactor the function to improve its readability, logic clarity, and structure without changing the functionality or output.",
    "guidance": [
      "Break complex statements into smaller, descriptive helper functions if appropriate.",
      "Use list comprehensions or built-in functions for filtering and mapping clearly.",
      "Add meaningful variable names and remove redundant code or checks."
    ],
    "hints": [
      "Consider combining filtering criteria into one step using list comprehensions.",
      "Avoid mutating input data; work with copies or create new objects if needed.",
      "Use built-in functions like map or filter for clearer intent."
    ],
    "starterCode": "def process_users(users):\n    result = []\n    for u in users:\n        if u['active'] == True:\n            if u['age'] >=18:\n                result.append(u['username'].upper())\n    return result",
    "expectedOutput": "['ALICE', 'CHARLIE']",
    "concepts": [
      "code refactoring",
      "list comprehensions",
      "conditional filtering",
      "string manipulation"
    ],
    "estimatedTime": "10 minutes",
    "isFeatured": true
  },
  {
    "slug": "refactor-complex-data-processing-function-for-improved-readability-and-performance",
    "title": "Refactor Complex Data Processing Function for Improved Readability and Performance",
    "language": "javascript",
    "difficulty": "advanced",
    "category": "code-quality",
    "description": "Given a verbose and inefficient JavaScript function that processes and transforms a large dataset, refactor the code to enhance readability, maintainability, and performance without altering its output.",
    "prompt": "You are provided with a JavaScript function that processes an array of user objects, performing multiple filtering, mapping, and aggregation steps in a convoluted way. Your task is to refactor this function to improve code clarity, remove redundancy, and optimize performance, while making sure the final output remains exactly the same. Avoid changing the function signature or expected data structure of the output.",
    "guidance": [
      "Analyze the original function to understand its transformation steps and output format thoroughly before refactoring.",
      "Look for repeated computations that can be memoized or computed once and reused.",
      "Consider leveraging modern ES6+ features such as destructuring, arrow functions, and array methods to make the code cleaner and more expressive.",
      "Ensure no change in output data; use thorough testing to validate correctness after refactoring."
    ],
    "hints": [
      "Break down large chained operations into smaller named helper functions or intermediate variables to improve readability.",
      "Use 'reduce' where appropriate to combine multiple steps efficiently.",
      "Avoid mutation of input data; use pure functions and immutable patterns where possible."
    ],
    "starterCode": "function processUsers(users) {\n  let result = [];\n  for (let i = 0; i < users.length; i++) {\n    if (users[i].isActive) {\n      let user = users[i];\n      let scoreSum = 0;\n      for (let j = 0; j < user.scores.length; j++) {\n        if (user.scores[j] > 50) {\n          scoreSum += user.scores[j];\n        }\n      }\n      if (scoreSum > 200) {\n        let nameParts = user.name.split(' ');\n        result.push({\n          firstName: nameParts[0],\n          lastName: nameParts.length > 1 ? nameParts.slice(1).join(' ') : '',\n          averageScore: scoreSum / user.scores.length\n        });\n      }\n    }\n  }\n  return result;\n}",
    "expectedOutput": "[\n  { firstName: 'Alice', lastName: 'Smith', averageScore: 72.5 },\n  { firstName: 'Bob', lastName: '', averageScore: 80 }\n]",
    "concepts": [
      "code refactoring",
      "array manipulation",
      "performance optimization",
      "functional programming",
      "ES6 features"
    ],
    "estimatedTime": "15 minutes",
    "isFeatured": false
  },
  {
    "slug": "advanced-data-pipeline-build-a-custom-etl-framework-in-python",
    "title": "Advanced Data Pipeline: Build a Custom ETL Framework in Python",
    "language": "python",
    "difficulty": "advanced",
    "category": "mini-projects",
    "description": "Create a scalable, modular Extract-Transform-Load (ETL) mini-project that reads data from multiple formats, applies complex transformations, and loads the result into a target data structure.",
    "prompt": "Build a Python function `run_etl_pipeline(sources, transform_functions, destination)` that handles an advanced ETL process:\n\n1. **Extraction**: The `sources` parameter is a list of dictionaries, each specifying a data source. Each source dictionary includes a `type` key ('csv', 'json', 'api') and a `data` key with either a string path or a raw JSON string or API endpoint URL.\n\n2. **Transformation**: The `transform_functions` parameter is a list of user-defined functions that take and return Python data objects (e.g., lists of dicts). Apply these functions sequentially to the combined extracted data.\n\n3. **Loading**: The `destination` parameter specifies the output location and format (e.g., dictionary with keys like `type`: 'memory', 'csv', or 'json' and a `target` value for file path or memory object).\n\nYour ETL pipeline should:\n- Extract data from multiple sources of different types.\n- Handle data merging without data duplication.\n- Apply complex transformations (e.g., filtering, aggregation, enrichment).\n- Load the resulting data according to destination specifications.\n\nReturn the final loaded data if destination is 'memory'.",
    "guidance": [
      "Implement modular extraction functions for each source type, ensuring consistent output format.",
      "Ensure transformation functions are applied in order to the full combined dataset.",
      "Build a flexible loader to export or store data based on the destination configuration."
    ],
    "hints": [
      "Use Python's csv, json, and requests libraries to handle different types of data extraction.",
      "Normalize all extracted data into a common structure such as a list of dictionaries before transformations.",
      "For the loader, consider writing to files or returning data directly based on the destination type."
    ],
    "starterCode": "import csv\nimport json\nimport requests\n\ndef extract_csv(path):\n    data = []\n    with open(path, 'r') as f:\n        reader = csv.DictReader(f)\n        for row in reader:\n            data.append(row)\n    return data\n\ndef extract_json(json_str):\n    return json.loads(json_str)\n\ndef extract_api(url):\n    response = requests.get(url)\n    response.raise_for_status()\n    return response.json()\n\ndef run_etl_pipeline(sources, transform_functions, destination):\n    # Your implementation here\n    pass",
    "expectedOutput": "If destination['type'] is 'memory', the function returns a list of dictionaries representing the transformed data.",
    "concepts": [
      "ETL pipeline design",
      "modular programming",
      "data extraction and parsing",
      "data transformation",
      "file and API handling"
    ],
    "estimatedTime": "90 minutes",
    "isFeatured": false
  },
  {
    "slug": "predict-the-output-of-a-simple-number-check-function",
    "title": "Predict the Output of a Simple Number Check Function",
    "language": "python",
    "difficulty": "beginner",
    "category": "logic",
    "description": "Analyze a Python function that checks if a number is positive, negative, or zero, and predict its output for given inputs.",
    "prompt": "Below is a Python function that takes a number as input and returns a string indicating if the number is positive, negative, or zero. Predict the output of the function calls for the numbers: 10, -5, and 0.",
    "guidance": [
      "Read through the function to understand how it classifies numbers based on conditions.",
      "Trace the function's behavior for each input to determine the return value."
    ],
    "hints": [
      "Remember that zero is neither positive nor negative.",
      "Check the order of the if, elif, and else conditions carefully."
    ],
    "starterCode": "def check_number(num):\n    if num > 0:\n        return \"Positive\"\n    elif num < 0:\n        return \"Negative\"\n    else:\n        return \"Zero\"\n\nprint(check_number(10))\nprint(check_number(-5))\nprint(check_number(0))",
    "expectedOutput": "Positive\nNegative\nZero",
    "concepts": [
      "conditionals",
      "functions"
    ],
    "estimatedTime": "10 minutes",
    "isFeatured": true
  },
  {
    "slug": "refactor-a-function-to-cleanly-aggregate-user-purchases",
    "title": "Refactor a Function to Cleanly Aggregate User Purchases",
    "language": "javascript",
    "difficulty": "intermediate",
    "category": "code-quality",
    "description": "The provided JavaScript function processes an array of user purchase objects to calculate total spending per user. The existing code works but is messy and repetitive. Refactor it for clarity, reusability, and improved readability without changing its behavior.",
    "prompt": "You are given a function that takes an array of purchase objects. Each object has two properties: userId (string) and amount (number). The function processes the array and returns an object mapping each userId to the total sum of their purchases.\n\nYour task is to refactor the function to improve its readability, reduce repetition, and adhere to best code practices while keeping the exact same output and behavior.\n\nDo not change how the function handles invalid or missing data (assume input is valid).",
    "guidance": [
      "Break down complex loops or repeated code into smaller helper functions if needed.",
      "Use descriptive variable names and avoid unnecessary temporary variables.",
      "Aim for clear and concise logic using JavaScript array methods to improve readability."
    ],
    "hints": [
      "Consider using Array.prototype.reduce() to accumulate totals.",
      "Avoid mutating the input array; build the output immutably if possible.",
      "You can use object destructuring to access properties cleanly."
    ],
    "starterCode": "function calculateTotals(purchases) {\n  let totals = {};\n  for (let i = 0; i < purchases.length; i++) {\n    let user = purchases[i].userId;\n    let amount = purchases[i].amount;\n    if (totals[user] === undefined) {\n      totals[user] = 0;\n    }\n    totals[user] = totals[user] + amount;\n  }\n  return totals;\n}",
    "expectedOutput": "calculateTotals([{ userId: 'alice', amount: 30 }, { userId: 'bob', amount: 20 }, { userId: 'alice', amount: 10 }]) // returns { alice: 40, bob: 20 }",
    "concepts": [
      "JavaScript arrays",
      "Object manipulation",
      "Array reduce method",
      "Code readability"
    ],
    "estimatedTime": "10 minutes",
    "isFeatured": true
  },
  {
    "slug": "refactor-and-optimize-complex-sales-reporting-sql-query",
    "title": "Refactor and Optimize Complex Sales Reporting SQL Query",
    "language": "sql",
    "difficulty": "advanced",
    "category": "optimization",
    "description": "Optimize a poorly written, inefficient SQL query that aggregates sales data by region and product category while filtering on multiple conditions. Improve readability, performance and ensure the output remains correct.",
    "prompt": "You are given a complex query that calculates total sales, average order amount, and number of unique customers by region and product category for the last fiscal year. The existing query uses multiple nested subqueries, redundant joins, and lacks proper indexing hints, causing slow performance on large datasets.\n\nRefactor the query to:\n1. Remove unnecessary subqueries and joins.\n2. Utilize efficient JOIN types and filtering methods.\n3. Add appropriate aggregation and grouping logic.\n4. Ensure the query returns the same results but executes faster.\n\nThe database schema includes the following tables:\n- sales(order_id, customer_id, product_id, amount, order_date)\n- customers(customer_id, region)\n- products(product_id, category)\n\nOutput columns should be: region, category, total_sales, avg_order_amount, unique_customers.",
    "guidance": [
      "Focus on simplifying JOINs and removing redundant intermediate aggregations.",
      "Consider using window functions or CTEs for clarity and performance.",
      "Make sure filtering on order_date is applied as early as possible."
    ],
    "hints": [
      "Try replacing nested subqueries with Common Table Expressions (CTEs) to improve readability and allow SQL engine optimization.",
      "Use INNER JOIN instead of LEFT JOIN if you are certain all referenced rows exist, to improve join efficiency.",
      "Apply WHERE filters before joining and aggregating to reduce dataset size early."
    ],
    "starterCode": "SELECT\n  c.region,\n  p.category,\n  SUM(s.amount) AS total_sales,\n  AVG(s.amount) AS avg_order_amount,\n  COUNT(DISTINCT s.customer_id) AS unique_customers\nFROM sales s\nJOIN customers c ON s.customer_id = c.customer_id\nJOIN products p ON s.product_id = p.product_id\nWHERE s.order_date BETWEEN '2023-01-01' AND '2023-12-31'\nGROUP BY c.region, p.category;",
    "expectedOutput": "region | category    | total_sales | avg_order_amount | unique_customers\n-------+-------------+-------------+------------------+------------------\nNorth  | Electronics |  1250000.00 |           250.00 |              500\nSouth  | Furniture   |   850000.00 |           170.00 |              400\nEast   | Toys        |   765000.00 |           255.00 |              300\nWest   | Clothing    |   980000.00 |           245.00 |              450",
    "concepts": [
      "SQL optimization",
      "Joins and subqueries",
      "Aggregation and grouping",
      "Query refactoring"
    ],
    "estimatedTime": "15 minutes",
    "isFeatured": true
  },
  {
    "slug": "build-a-simple-inventory-management-system-in-c",
    "title": "Build a Simple Inventory Management System in C++",
    "language": "cpp",
    "difficulty": "intermediate",
    "category": "mini-projects",
    "description": "Create a console-based inventory management mini-project using C++. Implement features to add, update, delete, and display items stored in an inventory using vectors and classes.",
    "prompt": "Design a simple inventory management system in C++. You will create an Item class representing an inventory item, including item id, name, quantity, and price. Implement an Inventory class that stores multiple items and supports the following operations:\n\n1. Add a new item to the inventory.\n2. Update the quantity or price of an existing item by item id.\n3. Remove an item from the inventory by item id.\n4. Display all items currently in the inventory.\n\nYour program should handle invalid input gracefully and prevent duplicate item ids.",
    "guidance": [
      "Use a vector<Item> to store the inventory items inside the Inventory class.",
      "Implement member functions in Inventory to perform add, update, delete, and display operations.",
      "Use loops and conditionals to search items by id and check for duplicates."
    ],
    "hints": [
      "Use std::find_if with a lambda or a simple for loop to look for items by id.",
      "Remember to check if an item id already exists before adding a new item.",
      "Keep your Item class members private and use public getter and setter functions."
    ],
    "starterCode": "class Item {\nprivate:\n    int id;\n    std::string name;\n    int quantity;\n    double price;\n\npublic:\n    Item(int id, const std::string& name, int quantity, double price);\n    int getId() const;\n    void setQuantity(int quantity);\n    void setPrice(double price);\n    void display() const;\n};\n\nclass Inventory {\nprivate:\n    std::vector<Item> items;\n\npublic:\n    void addItem(const Item& item);\n    void updateItem(int id, int quantity, double price);\n    void removeItem(int id);\n    void displayItems() const;\n};",
    "expectedOutput": "After adding, updating, deleting items, displaying items should print a list such as:\nItem ID: 101, Name: Pencil, Quantity: 50, Price: 0.50\nItem ID: 102, Name: Notebook, Quantity: 20, Price: 2.00",
    "concepts": [
      "classes and objects",
      "std::vector",
      "loops and conditionals",
      "basic error handling"
    ],
    "estimatedTime": "20 minutes",
    "isFeatured": true
  },
  {
    "slug": "predict-the-output-of-a-complex-window-function-and-cte-sql-query",
    "title": "Predict the Output of a Complex Window Function and CTE SQL Query",
    "language": "sql",
    "difficulty": "advanced",
    "category": "query-analysis",
    "description": "Analyze the given SQL query involving multiple CTEs and window functions to determine the exact output produced by the final SELECT statement.",
    "prompt": "Given the following SQL query using common table expressions (CTEs) and window functions, predict the exact output table returned by the final SELECT statement. Focus on understanding the window frame specifications, partitioning, ordering, and how these influence the ranking and aggregation results.",
    "guidance": [
      "Carefully trace the intermediate results created by each CTE before the final SELECT.",
      "Pay attention to how window functions like ROW_NUMBER() and SUM() OVER() are partitioned and ordered.",
      "Consider the effect of filtering conditions applied after CTEs and before the final output."
    ],
    "hints": [
      "Start by evaluating the first CTE results, then move on to how the window functions modify the data.",
      "Remember that ROW_NUMBER() resets for each partition defined in the OVER clause.",
      "The combination of WHERE clauses after the CTEs may exclude certain rows, affecting the final output."
    ],
    "starterCode": "\nWITH Sales AS (\n    SELECT\n        salesperson_id,\n        region,\n        sale_amount,\n        sale_date\n    FROM sales_data\n),\nRankedSales AS (\n    SELECT\n        salesperson_id,\n        region,\n        sale_amount,\n        sale_date,\n        ROW_NUMBER() OVER (PARTITION BY region ORDER BY sale_amount DESC, sale_date ASC) AS region_rank,\n        SUM(sale_amount) OVER (PARTITION BY region ORDER BY sale_date ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) AS running_total\n    FROM Sales\n),\nFilteredSales AS (\n    SELECT * FROM RankedSales\n    WHERE region_rank <= 3\n)\nSELECT region, salesperson_id, sale_amount, region_rank, running_total\nFROM FilteredSales\nORDER BY region, region_rank;",
    "expectedOutput": "A result set displaying the top 3 sales (by sale_amount descending and sale_date ascending as tie-breaker) for each region from the sales_data table, containing columns: region, salesperson_id, sale_amount, region_rank (1 to 3), and running_total (cumulative sum of sale_amount ordered by sale_date within each region). Rows should be ordered by region alphabetically, then by region_rank ascending.",
    "concepts": [
      "CTEs",
      "Window Functions",
      "ROW_NUMBER",
      "Aggregation",
      "Partitioning and Ordering"
    ],
    "estimatedTime": "10 minutes",
    "isFeatured": false
  },
  {
    "slug": "fix-the-incorrect-join-logic-in-customer-orders-query",
    "title": "Fix the Incorrect JOIN Logic in Customer Orders Query",
    "language": "sql",
    "difficulty": "intermediate",
    "category": "debugging",
    "description": "Debug and fix a SQL query that attempts to retrieve customer names alongside their total order counts, but currently returns incorrect results due to improper JOIN usage and grouping.",
    "prompt": "You are given a query that tries to list each customer's name along with the total number of orders they have placed. However, the results are inaccurate: some customers appear multiple times, and order counts are incorrect. Identify the issues in the provided SQL query, fix the JOIN logic and grouping, and produce a correct query that returns each customer name exactly once with the correct total order count.",
    "guidance": [
      "Check whether the JOIN between customers and orders is appropriate for the desired result.",
      "Look carefully at the GROUP BY clause to ensure it's grouping by the correct columns."
    ],
    "hints": [
      "INNER JOIN might exclude customers with no orders; consider whether you want to include them.",
      "GROUP BY should include all selected non-aggregated columns to avoid duplicate rows."
    ],
    "starterCode": "SELECT c.customer_name, COUNT(o.order_id) AS total_orders\nFROM customers c\nJOIN orders o ON c.customer_id = o.customer_id\nGROUP BY o.customer_id;",
    "expectedOutput": "A result set where each row contains a distinct customer_name and a total_orders count representing how many orders that customer placed. Customers with no orders should appear with a count of 0 if you adjust the JOIN accordingly.",
    "concepts": [
      "SQL JOINs",
      "GROUP BY",
      "Aggregate Functions",
      "Debugging SQL Queries"
    ],
    "estimatedTime": "10 minutes",
    "isFeatured": false
  },
  {
    "slug": "fix-bug-in-advanced-debounce-function-implementation",
    "title": "Fix Bug in Advanced Debounce Function Implementation",
    "language": "javascript",
    "difficulty": "advanced",
    "category": "debugging",
    "description": "Identify and fix the bug in the provided advanced debounce function implementation that prevents it from correctly delaying callback execution and handling immediate invocations.",
    "prompt": "You are given a debounce function that is intended to delay the invocation of a callback until after a specified wait time has elapsed since the last time the debounced function was called. It also supports an 'immediate' flag to trigger the callback at the start instead of the end of the delay period. However, the existing implementation contains a logical bug causing unexpected multiple invocations or no invocation at all in certain edge cases. Your task is to find and fix the bug so the debounce function works as expected in all scenarios.",
    "guidance": [
      "Carefully analyze how the timer is being managed and reset inside the function.",
      "Pay special attention to the behavior when the 'immediate' flag is set to true.",
      "Check how the context and arguments are preserved for callback invocation."
    ],
    "hints": [
      "The current implementation incorrectly handles the clearing of the timer which leads to missed or repeated calls.",
      "Review where the timer is reset and when the callback is finally invoked.",
      "Remember that when 'immediate' is true, the callback should trigger on the leading edge, not the trailing edge."
    ],
    "starterCode": "function debounce(func, wait, immediate) {\n  let timeout;\n  return function() {\n    const context = this,\n          args = arguments;\n    const later = function() {\n      timeout = null;\n      if (!immediate) func.apply(context, args);\n    };\n    const callNow = immediate && !timeout;\n    clearTimeout(timeout);\n    timeout = setTimeout(later, wait);\n    if (callNow) func.apply(context, args);\n  };\n}\n\n// Example usage:\n// const debouncedLog = debounce(() => console.log('Called!'), 1000, true);\n// debouncedLog();\n// debouncedLog();\n// Expected output: 'Called!' only once immediately on first call",
    "expectedOutput": "'Called!' printed only once on first call when immediate is true, and exactly once after delay when immediate is false.",
    "concepts": [
      "debounce",
      "timers",
      "closures",
      "function context (this)"
    ],
    "estimatedTime": "10 minutes",
    "isFeatured": false
  },
  {
    "slug": "refactor-a-function-to-cleanly-process-and-summarize-sales-data",
    "title": "Refactor a Function to Cleanly Process and Summarize Sales Data",
    "language": "python",
    "difficulty": "intermediate",
    "category": "code-quality",
    "description": "Improve the clarity, efficiency, and readability of a Python function that processes a list of sales records and returns a summary of total sales by product category.",
    "prompt": "You are given a function that takes a list of sales records as input. Each record is a dictionary with keys: 'product', 'category', and 'amount'. The function calculates the total sales per category but is written in a convoluted way with redundant computations and unclear variable names.\n\nRefactor the function to keep the exact same behavior but improve its readability, maintainability, and efficiency. Ensure the function is Pythonic and avoids unnecessary loops or computations.",
    "guidance": [
      "Use clear and meaningful variable names.",
      "Leverage appropriate Python data structures for aggregation (e.g., dictionaries or collections).",
      "Avoid recalculating or looping over the same data multiple times.",
      "Aim to write code that is easy to read and understand."
    ],
    "hints": [
      "Consider using a dictionary to accumulate totals per category as you iterate through the sales records.",
      "The built-in dict.get() method can help simplify updating totals without explicit conditional checks.",
      "Avoid nested loops or multiple passes over the data when one will suffice."
    ],
    "starterCode": "def summarize_sales(sales):\n    categories = []\n    for record in sales:\n        if record['category'] not in categories:\n            categories.append(record['category'])\n\n    totals = {}\n    for cat in categories:\n        total_amount = 0\n        for record in sales:\n            if record['category'] == cat:\n                total_amount += record['amount']\n        totals[cat] = total_amount\n    return totals",
    "expectedOutput": "{\"electronics\": 4500, \"clothing\": 3400}",
    "concepts": [
      "data aggregation",
      "dictionary operations",
      "code readability",
      "loop optimization"
    ],
    "estimatedTime": "10 minutes",
    "isFeatured": false
  },
  {
    "slug": "simple-task-tracker-mini-project-in-c",
    "title": "Simple Task Tracker Mini-Project in C++",
    "language": "cpp",
    "difficulty": "beginner",
    "category": "mini-projects",
    "description": "Build a basic console-based task tracker app in C++ that allows users to add, view, and remove tasks. Practice working with vectors, loops, and conditionals while creating a helpful daily tool.",
    "prompt": "Create a simple task tracker program in C++ with the following features: \n1. Display a menu to the user with options to add a task, remove a task by its number, view all tasks, and exit.\n2. Use a vector<string> to store the tasks.\n3. After adding or removing a task, show the updated list.\n4. The program should keep running until the user chooses to exit.\n\nYour program should handle invalid input gracefully and provide clear prompts to the user.",
    "guidance": [
      "Use a vector to store the tasks dynamically as the user adds them.",
      "Use a loop to repeatedly show the menu and process user choices.",
      "Remember to check if the task number for removal is valid before deleting."
    ],
    "hints": [
      "Use std::getline to read the whole line for task descriptions.",
      "You can use vector::erase(tasks.begin() + index) to remove a task at a specific position.",
      "Displaying the tasks with their indices helps users know which number to remove."
    ],
    "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n\nint main() {\n    std::vector<std::string> tasks;\n    int choice;\n    do {\n        std::cout << \"Task Tracker Menu:\\n\";\n        std::cout << \"1. Add Task\\n\";\n        std::cout << \"2. Remove Task\\n\";\n        std::cout << \"3. View All Tasks\\n\";\n        std::cout << \"4. Exit\\n\";\n        std::cout << \"Choose an option: \";\n        std::cin >> choice;\n        std::cin.ignore(); // to ignore newline after number input\n\n        if (choice == 1) {\n            // Add task logic\n        } else if (choice == 2) {\n            // Remove task logic\n        } else if (choice == 3) {\n            // View tasks logic\n        }\n    } while (choice != 4);\n    std::cout << \"Goodbye!\" << std::endl;\n    return 0;\n}",
    "expectedOutput": "Task Tracker Menu:\n1. Add Task\n2. Remove Task\n3. View All Tasks\n4. Exit\nChoose an option: 1\nEnter a new task: Buy groceries\nTask added.\n\nTask Tracker Menu:\n1. Add Task\n2. Remove Task\n3. View All Tasks\n4. Exit\nChoose an option: 3\nTasks:\n1. Buy groceries\n\nTask Tracker Menu:\n1. Add Task\n2. Remove Task\n3. View All Tasks\n4. Exit\nChoose an option: 4\nGoodbye!",
    "concepts": [
      "vectors",
      "loops",
      "conditionals",
      "input/output"
    ],
    "estimatedTime": "10 minutes",
    "isFeatured": false
  },
  {
    "slug": "build-a-function-to-compute-running-median-from-a-stream-of-integers",
    "title": "Build a Function to Compute Running Median from a Stream of Integers",
    "language": "cpp",
    "difficulty": "intermediate",
    "category": "functions",
    "description": "Write a C++ function that accepts a vector of integers representing a stream of numbers and returns a vector containing the running median after each new number is added.",
    "prompt": "Create a function named `runningMedian` that takes a const reference to a vector of integers. For each new integer added from the stream, the function should compute the median of all numbers seen so far and append it to a result vector. Return the vector of running medians. The median of a list is the middle number after sorting; if the size is even, the median is the average of the two middle numbers (as a double).",
    "guidance": [
      "Use appropriate data structures to efficiently maintain the elements seen so far in sorted order.",
      "Consider how to find the median quickly after each insertion without sorting the entire list every time.",
      "Make sure to handle both odd- and even-sized sets correctly when computing the median.",
      "Return the medians as vector<double> to handle fractional medians."
    ],
    "hints": [
      "Use two heaps (priority queues) — a max heap for the lower half, a min heap for the upper half — to track medians efficiently.",
      "Balance the heaps so they differ in size by no more than one element.",
      "The median can be derived from the top elements of the two heaps depending on their sizes."
    ],
    "starterCode": "#include <vector>\n#include <queue>\n\nstd::vector<double> runningMedian(const std::vector<int>& stream) {\n    // Implement your solution here\n}",
    "expectedOutput": "For input: {2, 1, 5, 7, 2, 0, 5}\nOutput: {2.0, 1.5, 2.0, 3.5, 2.0, 2.0, 2.0}",
    "concepts": [
      "heaps",
      "priority_queue",
      "median calculation",
      "stream processing"
    ],
    "estimatedTime": "15 minutes",
    "isFeatured": false
  },
  {
    "slug": "implement-a-memoized-recursive-function-to-compute-the-nth-catalan-number",
    "title": "Implement a Memoized Recursive Function to Compute the nth Catalan Number",
    "language": "cpp",
    "difficulty": "advanced",
    "category": "functions",
    "description": "Create an efficient C++ function that calculates the nth Catalan number using recursion with memoization. Catalan numbers appear in various combinatorial problems and grow quickly, so naive recursion is inefficient for larger inputs.",
    "prompt": "Write a C++ function named `catalan` that takes an integer `n` and returns the nth Catalan number. Your solution must use recursion combined with memoization to optimize repeated subproblems. The Catalan numbers are defined as: C0 = 1 and for n > 0: Cn = sum of Ci * C(n-1-i) for i from 0 to n-1. Implement memoization either internally (static or global) or by passing a data structure as argument.",
    "guidance": [
      "Use a helper function or static data structure to cache results for previously computed values.",
      "Recall the recursive formula: Cn = Σ (Ci * C(n - 1 - i)) for i in [0 .. n-1] with C0 = 1.",
      "Optimize to avoid recomputation that leads to exponential time complexity."
    ],
    "hints": [
      "Consider using a std::unordered_map or std::vector for memoization storage indexed by n.",
      "Make sure to handle the base case correctly to stop infinite recursion.",
      "Memoization can radically improve performance from exponential to polynomial."
    ],
    "starterCode": "long long catalan(int n) {\n    // Implement your memoized recursive solution here\n}",
    "expectedOutput": "catalan(0) = 1\ncatalan(5) = 42\ncatalan(10) = 16796",
    "concepts": [
      "recursion",
      "memoization",
      "dynamic programming",
      "combinatorics"
    ],
    "estimatedTime": "15 minutes",
    "isFeatured": true
  },
  {
    "slug": "create-a-sql-function-to-calculate-running-median-by-group",
    "title": "Create a SQL Function to Calculate Running Median by Group",
    "language": "sql",
    "difficulty": "advanced",
    "category": "queries",
    "description": "Build an advanced SQL function that calculates the running median of a numeric column grouped by a category column over a dynamic order, using window functions and optimized querying.",
    "prompt": "Write a SQL function named `running_median_by_group` that takes a table name, a numeric column name, a grouping column name, and an ordering column name as parameters. The function should return a result set showing each row with an additional column containing the median of the numeric column calculated over all previous rows (including the current row) within the same group, ordered by the specified ordering column. The function should efficiently handle large datasets with multiple groups and dynamic input parameters.",
    "guidance": [
      "Use window functions to partition data by the grouping column and order by the ordering column.",
      "Calculate the median dynamically by selecting the middle value(s) over the window frame for each row.",
      "Ensure the function works with varying table and column names provided as parameters."
    ],
    "hints": [
      "To compute a median in SQL, consider using percentile_cont(0.5) within a window function.",
      "Dynamic SQL execution may be necessary to allow flexible table and column names.",
      "Test the function on smaller datasets before scaling."
    ],
    "starterCode": "CREATE OR REPLACE FUNCTION running_median_by_group(\n    tbl_name TEXT,\n    num_col TEXT,\n    grp_col TEXT,\n    order_col TEXT\n) RETURNS TABLE(*) AS $$\nDECLARE\n    sql_query TEXT;\nBEGIN\n    sql_query := FORMAT(\n        'SELECT *,\n         percentile_cont(0.5) WITHIN GROUP (ORDER BY %1$I) OVER (PARTITION BY %2$I ORDER BY %3$I ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) AS running_median\n         FROM %4$I', num_col, grp_col, order_col, tbl_name\n    );\n    RETURN QUERY EXECUTE sql_query;\nEND;\n$$ LANGUAGE plpgsql;",
    "expectedOutput": "Returns the original table rows with an additional 'running_median' column representing the median of the numeric column calculated cumulatively within each group, ordered by the specified column.",
    "concepts": [
      "window functions",
      "dynamic SQL",
      "median calculation",
      "SQL functions"
    ],
    "estimatedTime": "15 minutes",
    "isFeatured": false
  },
  {
    "slug": "basic-calculator-cli-mini-project-in-c",
    "title": "Basic Calculator CLI Mini-Project in C++",
    "language": "cpp",
    "difficulty": "beginner",
    "category": "mini-projects",
    "description": "Create a simple command-line calculator program in C++ that performs basic arithmetic operations like addition, subtraction, multiplication, and division based on user input.",
    "prompt": "Write a C++ program that asks the user to input two numbers and an operation (+, -, *, /). The program should then calculate and display the result of applying the chosen operation to the two numbers. Make sure to handle division by zero gracefully by displaying an error message.",
    "guidance": [
      "Use basic variables to store user inputs for numbers and the operator.",
      "Use if-else or switch-case statements to decide the operation.",
      "Check for division by zero before performing division to avoid errors."
    ],
    "hints": [
      "Use the 'cin' object to get input from the user.",
      "Remember to include checks for invalid operators.",
      "Use 'cout' to display the result or error messages."
    ],
    "starterCode": "#include <iostream>\nusing namespace std;\n\nint main() {\n    double num1, num2;\n    char op;\n\n    cout << \"Enter first number: \";\n    cin >> num1;\n    cout << \"Enter an operator (+, -, *, /): \";\n    cin >> op;\n    cout << \"Enter second number: \";\n    cin >> num2;\n\n    // Your code here\n\n    return 0;\n}",
    "expectedOutput": "Example run:\nEnter first number: 8\nEnter an operator (+, -, *, /): /\nEnter second number: 2\nResult: 4",
    "concepts": [
      "variables",
      "conditional statements",
      "input/output",
      "basic arithmetic"
    ],
    "estimatedTime": "10 minutes",
    "isFeatured": true
  },
  {
    "slug": "build-a-personal-expense-tracker-mini-project",
    "title": "Build a Personal Expense Tracker Mini Project",
    "language": "python",
    "difficulty": "intermediate",
    "category": "mini-projects",
    "description": "Create a Python program that allows users to add, view, and analyze their personal expenses over time, helping them track spending habits.",
    "prompt": "Build a Python function named `expense_tracker` that manages personal expenses. The function should allow users to add new expenses (including date, category, and amount), view all expenses, and get a summary of total spending by category. The program should store expenses in a list of dictionaries, where each dictionary represents one expense. Provide options to add an expense, view all expenses, and show total expenses grouped by category. Your function should continue prompting the user until they choose to exit.",
    "guidance": [
      "Use a list of dictionaries to store expenses, with keys such as 'date', 'category', and 'amount'.",
      "Implement a simple text-based menu to allow users to select actions like adding expenses, viewing expenses, and summarizing spending.",
      "For summarizing, iterate over the expenses and accumulate totals per category."
    ],
    "hints": [
      "Consider using a while loop to keep the menu running until the user opts to exit.",
      "To group and sum amounts by category, you can use a dictionary with categories as keys and sums as values.",
      "Remember to convert amount input to a float for proper mathematical operations."
    ],
    "starterCode": "def expense_tracker():\n    expenses = []\n    while True:\n        print('1. Add Expense')\n        print('2. View Expenses')\n        print('3. Summary by Category')\n        print('4. Exit')\n        choice = input('Choose an option: ')\n        if choice == '1':\n            # Add your code to add an expense here\n            pass\n        elif choice == '2':\n            # Add your code to display all expenses here\n            pass\n        elif choice == '3':\n            # Add your code to summarize expenses here\n            pass\n        elif choice == '4':\n            break\n        else:\n            print('Invalid option, please try again.')",
    "expectedOutput": "After adding some expenses and choosing 'View Expenses', the output should list all inputs, e.g., date, category, and amount. Choosing 'Summary by Category' should show total amounts spent in each category, e.g., Food: 150.00, Transport: 75.50.",
    "concepts": [
      "lists and dictionaries",
      "loop and conditionals",
      "data aggregation",
      "user input handling"
    ],
    "estimatedTime": "15 minutes",
    "isFeatured": true
  },
  {
    "slug": "advanced-multithreaded-file-processing-and-data-aggregation-in-c",
    "title": "Advanced Multithreaded File Processing and Data Aggregation in C++",
    "language": "cpp",
    "difficulty": "advanced",
    "category": "mini-projects",
    "description": "Create a performant C++ application that reads multiple large text files concurrently, processes the extracted data to compute aggregate statistics, and outputs a sorted summary report.",
    "prompt": "Build a C++ program that accepts a list of file paths, reads each file in parallel using multithreading, extracts integer values from each line, and calculates the total sum, average, maximum, and minimum values across all files. Finally, output a summary report sorted by file name that includes these statistics for each file and a combined aggregate for all files.",
    "guidance": [
      "Use C++11 or later thread support libraries (e.g., std::thread, std::mutex) for concurrent file reading.",
      "Design thread-safe data structures or use synchronization primitives to aggregate data safely.",
      "Optimize file reading and parsing to handle large files without excessive memory usage."
    ],
    "hints": [
      "Consider having each thread process its file and store statistics locally before merging results.",
      "Use locks or atomic operations only when updating shared aggregate data to avoid performance bottlenecks.",
      "Use standard algorithms from <algorithm> for computing min, max, and sorting results."
    ],
    "starterCode": "#include <iostream>\n#include <fstream>\n#include <vector>\n#include <string>\n#include <thread>\n#include <mutex>\n#include <map>\n#include <numeric>\n#include <limits>\n\nstruct Statistics {\n    long long sum = 0;\n    int count = 0;\n    int max = std::numeric_limits<int>::min();\n    int min = std::numeric_limits<int>::max();\n};\n\nstd::mutex mtx;\nstd::map<std::string, Statistics> fileStats;\nStatistics totalStats;\n\nvoid processFile(const std::string& filename) {\n    std::ifstream file(filename);\n    if (!file.is_open()) {\n        std::cerr << \"Failed to open \" << filename << std::endl;\n        return;\n    }\n    Statistics localStats;\n    std::string line;\n    while (std::getline(file, line)) {\n        try {\n            int number = std::stoi(line);\n            localStats.sum += number;\n            localStats.count++;\n            if (number > localStats.max) localStats.max = number;\n            if (number < localStats.min) localStats.min = number;\n        } catch (...) {\n            continue; // ignore lines that aren't integers\n        }\n    }\n    std::lock_guard<std::mutex> lock(mtx);\n    fileStats[filename] = localStats;\n    totalStats.sum += localStats.sum;\n    totalStats.count += localStats.count;\n    if (localStats.max > totalStats.max) totalStats.max = localStats.max;\n    if (localStats.min < totalStats.min) totalStats.min = localStats.min;\n}\n\nint main(int argc, char* argv[]) {\n    if (argc < 2) {\n        std::cerr << \"Usage: \" << argv[0] << \" <file1> [file2 ...]\" << std::endl;\n        return 1;\n    }\n    std::vector<std::thread> threads;\n    for (int i = 1; i < argc; ++i) {\n        threads.emplace_back(processFile, argv[i]);\n    }\n    for (auto& t : threads) {\n        t.join();\n    }\n\n    // Output sorted summary report\n    std::cout << \"File Stats (sorted by file name):\" << std::endl;\n    for (auto& [filename, stats] : fileStats) {\n        double avg = stats.count ? static_cast<double>(stats.sum) / stats.count : 0;\n        std::cout << filename << \": sum=\" << stats.sum << \", avg=\" << avg\n                  << \", max=\" << stats.max << \", min=\" << stats.min << std::endl;\n    }\n    double totalAvg = totalStats.count ? static_cast<double>(totalStats.sum) / totalStats.count : 0;\n    std::cout << \"Combined: sum=\" << totalStats.sum << \", avg=\" << totalAvg\n              << \", max=\" << totalStats.max << \", min=\" << totalStats.min << std::endl;\n    return 0;\n}\n",
    "expectedOutput": "File Stats (sorted by file name):\nfile1.txt: sum=123456, avg=123.45, max=999, min=1\nfile2.txt: sum=234567, avg=234.56, max=999, min=2\n...\nCombined: sum=358023, avg=179.01, max=999, min=1",
    "concepts": [
      "Multithreading",
      "File I/O",
      "Data Aggregation",
      "Synchronization",
      "Sorting"
    ],
    "estimatedTime": "90 minutes",
    "isFeatured": false
  },
  {
    "slug": "create-a-function-to-calculate-the-square-of-a-number",
    "title": "Create a Function to Calculate the Square of a Number",
    "language": "python",
    "difficulty": "beginner",
    "category": "functions",
    "description": "Write a Python function that takes a single number as input and returns its square. This is a fundamental exercise to practice defining functions and using arithmetic operators.",
    "prompt": "Build a function named square_number that accepts one parameter (a number) and returns the square of that number. For example, if the input is 4, the function should return 16.",
    "guidance": [
      "Define a function using the def keyword.",
      "Use the parameter inside the function to perform multiplication.",
      "Return the result using the return statement."
    ],
    "hints": [
      "Remember that squaring a number means multiplying it by itself.",
      "If your function parameter is n, then the square is n * n."
    ],
    "starterCode": "def square_number(n):\n    # Your code here",
    "expectedOutput": "square_number(5) should return 25\nsquare_number(10) should return 100",
    "concepts": [
      "functions",
      "arithmetic operators",
      "return statement"
    ],
    "estimatedTime": "10 minutes",
    "isFeatured": true
  },
  {
    "slug": "fix-the-bug-in-function-to-calculate-total-price-with-tax",
    "title": "Fix the Bug in Function to Calculate Total Price with Tax",
    "language": "python",
    "difficulty": "beginner",
    "category": "debugging",
    "description": "A simple Python function is intended to calculate the total price of an item after adding tax. However, the function contains a bug causing incorrect results. Your task is to find and fix the bug so the function returns the correct total price.",
    "prompt": "The function calculate_total_price is supposed to take a price and a tax rate, then return the total price including tax. However, it currently returns the wrong value. Identify the bug in the code below and fix it so the function returns the correct total price including tax.",
    "guidance": [
      "Check the calculation logic inside the function carefully.",
      "Remember that tax should be *added* to the original price, not subtracted or incorrectly multiplied.",
      "Test your fixed function with different price and tax values."
    ],
    "hints": [
      "Think about how to correctly calculate the total including tax: total = price + (price * tax_rate).",
      "Check the operator precedence and parentheses in the expression.",
      "Make sure the tax_rate is treated as a decimal (e.g., 0.1 for 10%)."
    ],
    "starterCode": "def calculate_total_price(price, tax_rate):\n    # This function should return price including tax\n    total = price * tax_rate + price\n    return total\n\n# Example usage:\nprint(calculate_total_price(100, 0.1))  # Expected output: 110.0",
    "expectedOutput": "110.0",
    "concepts": [
      "basic arithmetic operations",
      "function definitions",
      "operator precedence",
      "return statements"
    ],
    "estimatedTime": "10 minutes",
    "isFeatured": false
  },
  {
    "slug": "build-a-to-do-list-with-javascript-using-objects-and-arrays",
    "title": "Build a To-Do List with JavaScript Using Objects and Arrays",
    "language": "javascript",
    "difficulty": "intermediate",
    "category": "mini-projects",
    "description": "Create a simple interactive to-do list mini-project where users can add, remove, and mark tasks as completed. This challenge focuses on manipulating arrays of objects and implementing multi-step logic to manage a list of tasks.",
    "prompt": "Write a function named manageTodoList that accepts two parameters: the current array of to-do items (each an object with properties id, task, and completed) and an action object describing what to do. The action object will have a type (add, remove, toggle) and relevant data for that action. Your function should return a new updated array of to-dos based on the action performed. For 'add', add a new task with a unique id and completed = false. For 'remove', remove the task by id. For 'toggle', toggle the completed status of the specified task id.",
    "guidance": [
      "Use array methods like map, filter, and concat to produce new arrays instead of mutating the original.",
      "Generate unique ids for new tasks by incrementing from the highest existing id or using a timestamp.",
      "Use switch or if-else statements to handle different action types clearly."
    ],
    "hints": [
      "Remember not to mutate the original tasks array directly; always return a new array.",
      "For toggling task completion, map over the array and update the matching task by id.",
      "When adding, create a new task object with the given task string and completed set to false."
    ],
    "starterCode": "function manageTodoList(todos, action) {\n  switch (action.type) {\n    case 'add':\n      // Your code here\n      break;\n    case 'remove':\n      // Your code here\n      break;\n    case 'toggle':\n      // Your code here\n      break;\n    default:\n      return todos;\n  }\n}",
    "expectedOutput": "manageTodoList([{id: 1, task: 'Learn JS', completed: false}], {type: 'add', task: 'Write code'})\n// Returns: [\n//   {id: 1, task: 'Learn JS', completed: false},\n//   {id: 2, task: 'Write code', completed: false}\n// ]",
    "concepts": [
      "arrays",
      "objects",
      "immutability",
      "control flow"
    ],
    "estimatedTime": "15 minutes",
    "isFeatured": false
  },
  {
    "slug": "refactor-a-repetitive-sql-query-to-use-better-aggregation",
    "title": "Refactor a Repetitive SQL Query to Use Better Aggregation",
    "language": "sql",
    "difficulty": "beginner",
    "category": "optimization",
    "description": "Improve a basic SQL query by refactoring repetitive SELECT statements with better use of aggregation and GROUP BY to optimize the code while maintaining the original result.",
    "prompt": "You have a table named Sales with columns: region (text), product (text), and amount (integer). The current query selects total sales for each product but repeats almost the same SELECT statements for each product individually. Refactor the query to output the same result—a list of products and their total sales—using a single query without repetition.",
    "guidance": [
      "Identify repetitive code segments that can be combined.",
      "Use GROUP BY and aggregation functions like SUM to simplify the query."
    ],
    "hints": [
      "Think about how GROUP BY works to aggregate multiple rows into summary results.",
      "Try to write a query that scans the table just once instead of multiple times."
    ],
    "starterCode": "SELECT 'Apple' AS product, SUM(amount) AS total_sales FROM Sales WHERE product = 'Apple'\nUNION ALL\nSELECT 'Banana' AS product, SUM(amount) AS total_sales FROM Sales WHERE product = 'Banana'\nUNION ALL\nSELECT 'Cherry' AS product, SUM(amount) AS total_sales FROM Sales WHERE product = 'Cherry';",
    "expectedOutput": "product | total_sales\n--------|------------\nApple   | 1000\nBanana  | 850\nCherry  | 400",
    "concepts": [
      "GROUP BY",
      "SUM()",
      "UNION ALL",
      "Query Optimization"
    ],
    "estimatedTime": "10 minutes",
    "isFeatured": false
  },
  {
    "slug": "fix-a-bug-in-an-sql-query-for-aggregated-sales-performance-with-window-functions",
    "title": "Fix a Bug in an SQL Query for Aggregated Sales Performance with Window Functions",
    "language": "sql",
    "difficulty": "advanced",
    "category": "debugging",
    "description": "Identify and fix the bug in a complex SQL query that attempts to calculate monthly sales performance rankings by salesperson, using window functions and joins.",
    "prompt": "You are given a broken SQL query that is intended to rank salespersons based on their total monthly sales. The query uses window functions over joined tables but currently returns incorrect ranks and missing sales totals for some salespersons. Your task is to identify and correct the bugs so the query correctly returns salesperson_id, month, total_sales, and rank within each month sorted by total_sales descending.",
    "guidance": [
      "Check if the joins between sales and salesperson tables are correct and do not create duplicates that distort aggregation.",
      "Inspect the window function PARTITION BY logic to ensure rankings reset for each month properly.",
      "Verify that aggregation sums total sales correctly before applying the rank function."
    ],
    "hints": [
      "Look for misplaced GROUP BY clauses that can cause incorrect sums or rankings.",
      "Confirm if the window function ORDER BY clause orders by the correct alias or aggregated column.",
      "Review if any filtering conditions exclude salespersons or months incorrectly."
    ],
    "starterCode": "SELECT s.salesperson_id, DATE_TRUNC('month', sa.sale_date) AS month,\n       SUM(sa.amount) AS total_sales,\n       RANK() OVER (PARTITION BY DATE_TRUNC('month', sa.sale_date) ORDER BY SUM(sa.amount) DESC) AS rank\nFROM sales sa\nJOIN salesperson s ON s.salesperson_id = sa.salesperson_id\nGROUP BY s.salesperson_id, month\nORDER BY month, rank;",
    "expectedOutput": "salesperson_id |    month    | total_sales | rank\n---------------|-------------|-------------|------\n1              | 2024-01-01  | 125000      | 1\n3              | 2024-01-01  | 98000       | 2\n2              | 2024-01-01  | 86000       | 3\n1              | 2024-02-01  | 140000      | 1\n3              | 2024-02-01  | 79000       | 2\n...             | ...         | ...         | ...",
    "concepts": [
      "window functions",
      "SQL aggregation",
      "joins",
      "debugging"
    ],
    "estimatedTime": "15 minutes",
    "isFeatured": true
  },
  {
    "slug": "create-a-simple-to-do-list-manager",
    "title": "Create a Simple To-Do List Manager",
    "language": "python",
    "difficulty": "beginner",
    "category": "mini-projects",
    "description": "Build a basic to-do list manager function that allows adding tasks, marking them as complete, and viewing remaining tasks.",
    "prompt": "Write a Python function called manage_todo_list that accepts two parameters: a list of current tasks (each task is a dictionary with keys 'task' and 'completed'), and a command dictionary with keys 'action' and optionally 'task'. The function should support three actions: 'add' to add a new task (provided in the command dictionary), 'complete' to mark an existing task as completed by its name, and 'view' to return a list of task names that are not yet completed. If an action is unrecognized, return the string 'Invalid action'.",
    "guidance": [
      "Use simple loops and conditionals to process the tasks list based on the command.",
      "Make sure to handle cases where the task to complete may not exist.",
      "Return the list of incomplete task names only for the 'view' action."
    ],
    "hints": [
      "To mark a task complete, loop through the tasks to find the matching task name.",
      "Remember that 'add' action requires a new task name in the command dictionary.",
      "Return values should match the action: return updated tasks list for 'add' and 'complete', and a list of task names for 'view'."
    ],
    "starterCode": "def manage_todo_list(tasks, command):\n    # Your code here\n    pass",
    "expectedOutput": "For input tasks = [{'task': 'buy milk', 'completed': False}], command = {'action': 'add', 'task': 'walk dog'}\n=> returns [{'task': 'buy milk', 'completed': False}, {'task': 'walk dog', 'completed': False}]\n\nFor command = {'action': 'complete', 'task': 'buy milk'}\n=> returns [{'task': 'buy milk', 'completed': True}, {'task': 'walk dog', 'completed': False}]\n\nFor command = {'action': 'view'}\n=> returns ['walk dog']",
    "concepts": [
      "lists",
      "dictionaries",
      "loops",
      "conditionals",
      "functions"
    ],
    "estimatedTime": "10 minutes",
    "isFeatured": false
  },
  {
    "slug": "advanced-portfolio-management-system-in-c",
    "title": "Advanced Portfolio Management System in C++",
    "language": "cpp",
    "difficulty": "advanced",
    "category": "mini-projects",
    "description": "Create a mini-project to design and implement a portfolio management system that tracks multiple investment assets, calculates real-time portfolio value, and supports transaction history and performance analysis.",
    "prompt": "Build a C++ portfolio management system that allows users to add multiple assets (stocks, bonds, ETFs), record buy/sell transactions, and calculate real-time portfolio metrics such as total value, return on investment (ROI), and asset allocation percentages. Your system should also handle transaction history with timestamps and provide functions to generate portfolio performance reports over a given period.",
    "guidance": [
      "Design appropriate classes to represent Assets, Transactions, and the Portfolio itself.",
      "Implement methods for adding/removing assets and recording buy/sell transactions with timestamps.",
      "Calculate portfolio metrics dynamically considering current prices and historical transactions.",
      "Ensure your system can generate reports summarizing portfolio performance over specified time ranges."
    ],
    "hints": [
      "Use a map or unordered_map keyed by asset symbol for efficient lookups.",
      "Store transactions in a vector or list and consider sorting/filtering by date when generating reports.",
      "Use appropriate data structures and member functions to maintain data encapsulation and modularity."
    ],
    "starterCode": "#include <iostream>\n#include <string>\n#include <vector>\n#include <unordered_map>\n#include <ctime>\n\nstruct Transaction {\n    enum Type { BUY, SELL } type;\n    std::string assetSymbol;\n    int quantity;\n    double pricePerUnit;\n    std::time_t timestamp;\n};\n\nclass Asset {\npublic:\n    Asset(const std::string& symbol, double currentPrice);\n    std::string getSymbol() const;\n    double getCurrentPrice() const;\n    void setCurrentPrice(double price);\nprivate:\n    std::string symbol;\n    double currentPrice;\n};\n\nclass Portfolio {\npublic:\n    void addAsset(const Asset& asset);\n    void recordTransaction(const Transaction& transaction);\n    double getTotalValue() const;\n    double getROI() const;\n    void printPerformanceReport(std::time_t startTime, std::time_t endTime) const;\n\nprivate:\n    std::unordered_map<std::string, Asset> assets;\n    std::vector<Transaction> transactions;\n};",
    "expectedOutput": "Expected outputs vary depending on implementation and usage but include correctly computed portfolio total value, ROI percentages, and formatted performance reports with asset allocations and summaries.",
    "concepts": [
      "classes and objects",
      "data structures (maps, vectors)",
      "time handling",
      "financial calculations"
    ],
    "estimatedTime": "120 minutes",
    "isFeatured": false
  },
  {
    "slug": "refactor-sql-query-to-optimize-simple-select-with-case",
    "title": "Refactor SQL Query to Optimize Simple SELECT with CASE",
    "language": "sql",
    "difficulty": "beginner",
    "category": "optimization",
    "description": "Improve the readability and efficiency of a beginner-level SQL query that uses multiple CASE statements to classify product sales data without changing its behavior.",
    "prompt": "You are given a SQL query that retrieves product sales data and categorizes the sales amount using multiple CASE statements, but the query has redundant conditions and can be simplified. Refactor the query to eliminate unnecessary repetition and improve clarity while keeping the exact same output results.",
    "guidance": [
      "Look for repeated CASE conditions that can be simplified or combined.",
      "Ensure that the refactored query returns exactly the same results as the original.",
      "Focus on improving readability by reducing nested or duplicated conditions."
    ],
    "hints": [
      "Try using one CASE statement with multiple WHEN clauses instead of multiple CASE statements.",
      "Look for common conditions inside CASE expressions that can be merged."
    ],
    "starterCode": "SELECT product_id, sales_amount,\n  CASE WHEN sales_amount > 1000 THEN 'High'\n       ELSE 'Low'\n  END AS sales_category,\n  CASE WHEN sales_amount > 1000 THEN 'High'\n       WHEN sales_amount BETWEEN 500 AND 1000 THEN 'Medium'\n       ELSE 'Low'\n  END AS sales_class\nFROM product_sales;",
    "expectedOutput": "product_id | sales_amount | sales_category | sales_class\n-----------+--------------+----------------+------------\n1          | 1200         | High           | High\n2          | 700          | Low            | Medium\n3          | 300          | Low            | Low",
    "concepts": [
      "CASE statements",
      "SQL query refactoring",
      "query readability"
    ],
    "estimatedTime": "10 minutes",
    "isFeatured": true
  },
  {
    "slug": "fix-the-sql-query-to-retrieve-employees-with-salary-over-50000",
    "title": "Fix the SQL Query to Retrieve Employees with Salary Over 50000",
    "language": "sql",
    "difficulty": "beginner",
    "category": "debugging",
    "description": "In this challenge, you are given a broken SQL query intended to select all employees earning more than 50000. Your task is to identify and fix the bugs so that the query returns the correct results.",
    "prompt": "The following SQL query is supposed to retrieve all employees whose salary is greater than 50000 from the employees table. However, it contains syntax and logical errors that prevent it from working properly. Fix the query so it executes correctly and returns the correct rows.",
    "guidance": [
      "Check the SELECT statement syntax for missing or misplaced keywords.",
      "Ensure that the WHERE clause condition correctly compares the salary column to 50000.",
      "Verify the table name and column names match the given schema."
    ],
    "hints": [
      "Remember that column names must be spelled correctly and consistently.",
      "The comparison operator should be a standard SQL operator like >, <, =, etc."
    ],
    "starterCode": "SELECT * FORM employees WHERE salary => 50000;",
    "expectedOutput": "All rows from employees table where salary is greater than 50000",
    "concepts": [
      "SQL SELECT statement",
      "WHERE clause",
      "Comparison operators"
    ],
    "estimatedTime": "10 minutes",
    "isFeatured": true
  },
  {
    "slug": "refactor-a-function-to-compute-unique-elements-frequency",
    "title": "Refactor a Function to Compute Unique Elements Frequency",
    "language": "python",
    "difficulty": "intermediate",
    "category": "code-quality",
    "description": "Improve the provided Python function that calculates the frequency of unique elements in a list. Refactor the code for better readability, efficiency, and Pythonic style without changing its behavior.",
    "prompt": "You are given a Python function that takes a list of elements and returns a dictionary with the frequency count of each unique element. The current function works correctly but is verbose and not optimized. Your task is to refactor the code for clarity, conciseness, and performance, using best Python practices while preserving the original functionality.",
    "guidance": [
      "Consider using Python collections or built-in library functions to simplify frequency counting.",
      "Avoid unnecessary loops or repeated operations like multiple .count() calls on the list.",
      "Make sure the output dictionary key order is maintained if possible, or clearly document if it changes."
    ],
    "hints": [
      "Look into the collections.Counter class for an efficient frequency dictionary.",
      "Try to avoid counting elements multiple times by iterating the list once.",
      "Consider readability improvements such as meaningful variable names and removing redundant code."
    ],
    "starterCode": "def count_frequencies(lst):\n    freq = {}\n    for item in lst:\n        if item not in freq:\n            freq[item] = lst.count(item)\n    return freq",
    "expectedOutput": "{'apple': 3, 'banana': 2, 'orange': 1}  # e.g. input ['apple', 'banana', 'apple', 'orange', 'banana', 'apple']",
    "concepts": [
      "dictionary",
      "collections.Counter",
      "code refactoring",
      "algorithm efficiency"
    ],
    "estimatedTime": "10 minutes",
    "isFeatured": true
  },
  {
    "slug": "debugging-an-inefficient-employee-salary-ranking-query",
    "title": "Debugging an Inefficient Employee Salary Ranking Query",
    "language": "sql",
    "difficulty": "advanced",
    "category": "debugging",
    "description": "Fix a broken SQL query that attempts to rank employees by salary within each department but produces incorrect rankings and poor performance due to improper use of window functions and filters.",
    "prompt": "The current SQL query tries to rank employees by their salary within their department using ROW_NUMBER(), but it returns incorrect rankings and duplicates when employees have the same salary. Additionally, it filters on row numbers incorrectly causing performance issues. Your task is to identify and fix the bugs in the query so it correctly ranks employees by salary descending per department, handles ties with DENSE_RANK(), and optimizes the filtering to avoid unnecessary computations.",
    "guidance": [
      "Review the window function used: understand differences between ROW_NUMBER(), RANK(), and DENSE_RANK().",
      "Check where the filtering on rank is applied; applying filters on window functions in the WHERE clause breaks the logic.",
      "Consider moving the filtering to an outer query or use a CTE to improve readability and performance."
    ],
    "hints": [
      "ROW_NUMBER() assigns unique ranks even if salaries are the same; consider using DENSE_RANK() or RANK() for correct tie handling.",
      "Do not filter on window function results directly in the WHERE clause; use a subquery or CTE instead.",
      "Use ORDER BY inside the window function correctly to rank salaries in descending order."
    ],
    "starterCode": "SELECT employee_id, department_id, salary, ROW_NUMBER() OVER (PARTITION BY department_id ORDER BY salary) AS salary_rank\nFROM employees\nWHERE salary_rank <= 3;",
    "expectedOutput": "Should return top 3 employees by highest salary per department with correct ranking, including ties sharing the same rank.",
    "concepts": [
      "Window Functions",
      "SQL Ranking Functions",
      "Query Optimization"
    ],
    "estimatedTime": "15 minutes",
    "isFeatured": false
  },
  {
    "slug": "build-an-optimized-debounced-function-creator-in-javascript",
    "title": "Build an Optimized Debounced Function Creator in JavaScript",
    "language": "javascript",
    "difficulty": "advanced",
    "category": "functions",
    "description": "Create a higher-order function that returns a debounced version of a given input function, ensuring optimized invocation timing and immediate execution control.",
    "prompt": "Write a function named 'createDebouncedFunction' that accepts two parameters: a callback function 'fn' and a delay time in milliseconds 'delay'. It should return a new function that when called, delays the invocation of 'fn' until after 'delay' milliseconds have elapsed since the last time the returned function was called. Additionally, this returned function should have two methods attached: 'cancel' to cancel any pending invocation, and 'flush' to immediately invoke the delayed function if pending. Ensure the implementation handles the context and arguments correctly when invoking 'fn'.",
    "guidance": [
      "Use closures to keep track of the timer and ensure that multiple calls reset the timer correctly.",
      "Attach 'cancel' and 'flush' methods as properties of the returned debounced function for external control.",
      "Preserve the 'this' context and arguments when invoking the original callback function."
    ],
    "hints": [
      "Use 'setTimeout' and 'clearTimeout' to implement the delay functionality.",
      "Store the timer id in a variable scoped inside 'createDebouncedFunction'.",
      "Use 'apply' or 'call' to invoke 'fn' with proper context and arguments."
    ],
    "starterCode": "function createDebouncedFunction(fn, delay) {\n  // Your code here\n}",
    "expectedOutput": "const debounced = createDebouncedFunction(console.log, 1000);\ndebounced('Hello');\n// If no new calls happen within 1000ms, logs: Hello\n// debounced.cancel() cancels pending call\n// debounced.flush() immediately calls the pending invocation",
    "concepts": [
      "closures",
      "higher-order functions",
      "timers",
      "function context and arguments"
    ],
    "estimatedTime": "15 minutes",
    "isFeatured": false
  },
  {
    "slug": "predict-the-output-of-a-complex-nested-loop-with-conditional-logic-in-c",
    "title": "Predict the Output of a Complex Nested Loop with Conditional Logic in C++",
    "language": "cpp",
    "difficulty": "intermediate",
    "category": "logic",
    "description": "Analyze the given C++ code that uses nested loops with conditional statements to manipulate variables. Predict the output without running the code.",
    "prompt": "Examine the following C++ program carefully. The program uses nested loops and conditional if-else statements to update values of variables 'a' and 'b'. Predict the output of the program when executed. Provide a detailed explanation of your reasoning.",
    "guidance": [
      "Trace the values of 'a' and 'b' after each iteration of the inner and outer loops.",
      "Pay special attention to the conditional statements and how they affect the increments or decrements of the variables."
    ],
    "hints": [
      "Focus on how many times the inner loop runs and under what conditions the values of 'a' and 'b' change.",
      "Remember that post-increment and pre-increment operators can affect the value in subtle ways."
    ],
    "starterCode": "#include <iostream>\n\nint main() {\n    int a = 0, b = 0;\n    for (int i = 1; i <= 3; i++) {\n        for (int j = 1; j <= 4; j++) {\n            if (i % 2 == 0) {\n                a += j;\n                b += i;\n            } else {\n                if (j % 2 == 0) {\n                    a -= i;\n                } else {\n                    b += j;\n                }\n            }\n        }\n    }\n    std::cout << \"a = \" << a << \", b = \" << b << std::endl;\n    return 0;\n}\n",
    "expectedOutput": "a = 2, b = 28",
    "concepts": [
      "nested loops",
      "conditional statements",
      "variable manipulation",
      "arithmetic operations"
    ],
    "estimatedTime": "10 minutes",
    "isFeatured": true
  },
  {
    "slug": "fix-the-bug-in-advanced-asynchronous-array-processing-function",
    "title": "Fix the Bug in Advanced Asynchronous Array Processing Function",
    "language": "javascript",
    "difficulty": "advanced",
    "category": "debugging",
    "description": "Identify and fix the bug in the asynchronous function that processes an array of URLs to fetch JSON data and extract specific fields. The current implementation leads to incorrect results and unhandled errors.",
    "prompt": "You are given a broken asynchronous JavaScript function `fetchAndExtract` that accepts an array of URLs and a key string. It should fetch JSON data from each URL, extract the value corresponding to the given key, and return an array of those values. The function is intended to process requests in parallel but currently returns incorrect results or throws unhandled errors. Identify and fix the issues to make sure it works reliably with proper error handling and returns the extracted values in the same order as the input URLs.",
    "guidance": [
      "Check how asynchronous promises are created and handled within the function.",
      "Ensure the function handles errors gracefully for failed fetches without breaking the whole operation.",
      "Make sure the values are returned in the same order as the input URLs regardless of fetch response times."
    ],
    "hints": [
      "Look carefully at how Promise.all and async/await are used; mixing them improperly can cause bugs.",
      "Consider wrapping each fetch in a try-catch block or using Promise.allSettled for robust error handling."
    ],
    "starterCode": "async function fetchAndExtract(urls, key) {\n  const results = [];\n  urls.forEach(async (url) => {\n    const response = await fetch(url);\n    const data = await response.json();\n    results.push(data[key]);\n  });\n  return results;\n}",
    "expectedOutput": "For input urls ['https://api.example.com/user/1', 'https://api.example.com/user/2'] and key 'name', the function should return ['Alice', 'Bob'] (assuming those are the names in the fetched JSON data).",
    "concepts": [
      "asynchronous programming",
      "Promise handling",
      "error handling",
      "arrays"
    ],
    "estimatedTime": "15 minutes",
    "isFeatured": false
  },
  {
    "slug": "c-student-grade-management-system",
    "title": "C++ Student Grade Management System",
    "language": "cpp",
    "difficulty": "intermediate",
    "category": "mini-projects",
    "description": "Build a mini-project that manages student grades by storing names and scores, calculating averages, and allowing queries for top students.",
    "prompt": "Create a C++ program that implements a simple Student Grade Management System. Your program should allow adding multiple students with their names and a list of their scores in different subjects. Implement functionality to calculate each student's average score and find the top student(s) with the highest average score. The program should support the following operations: 1) Add a student with scores, 2) Calculate and display the average score for each student, 3) Display the student(s) with the highest average score. Use appropriate data structures to store student data efficiently.",
    "guidance": [
      "Use a struct or class to represent a student with a name and a vector of scores.",
      "Keep all student records in a vector or map for easy iteration and lookup.",
      "Write separate functions for adding students, calculating averages, and finding top scorers."
    ],
    "hints": [
      "Consider using std::vector to store multiple scores per student.",
      "To find the top student(s), keep track of the highest average while iterating through all students.",
      "Use float or double for average scores to maintain precision."
    ],
    "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <limits>\n\nstruct Student {\n    std::string name;\n    std::vector<int> scores;\n};\n\nclass GradeManager {\n    std::vector<Student> students;\npublic:\n    void addStudent(const std::string& name, const std::vector<int>& scores) {\n        // TODO: Add student to the records\n    }\n\n    void printAverages() {\n        // TODO: Calculate and print average scores\n    }\n\n    void printTopStudents() {\n        // TODO: Find and print the student(s) with the highest average\n    }\n};\n\nint main() {\n    GradeManager gm;\n    // Example usage:\n    gm.addStudent(\"Alice\", {85, 90, 78});\n    gm.addStudent(\"Bob\", {92, 88, 95});\n    gm.addStudent(\"Charlie\", {70, 80, 65});\n    gm.printAverages();\n    gm.printTopStudents();\n    return 0;\n}",
    "expectedOutput": "Alice: Average score = 84.33\nBob: Average score = 91.67\nCharlie: Average score = 71.67\nTop student(s):\nBob with average score = 91.67",
    "concepts": [
      "Classes and Structs",
      "Vectors",
      "Basic Algorithms (averaging, max finding)"
    ],
    "estimatedTime": "10 minutes",
    "isFeatured": true
  },
  {
    "slug": "design-and-optimize-a-sales-database-schema-with-advanced-queries",
    "title": "Design and Optimize a Sales Database Schema with Advanced Queries",
    "language": "sql",
    "difficulty": "advanced",
    "category": "data-modeling",
    "description": "Create a normalized database schema for a retail sales system that handles customers, products, orders, and shipments. Then, write optimized SQL queries to retrieve key business insights including sales trends, customer segmentation, and shipment statuses.",
    "prompt": "You are tasked with building a comprehensive sales database system for an e-commerce platform. Your mini project has two parts:\n\nPart 1: Design a normalized relational schema to manage customers, products, categories, orders, order items, and shipments. Ensure minimal redundancy and support for historical data tracking.\n\nPart 2: Using your schema, write the following optimized SQL queries:\n- Retrieve the top 5 customers by total purchase value in the last 12 months,\n- Identify products that have not been ordered in the last 6 months,\n- Generate a monthly summary report showing total revenue, number of orders, and shipment delays.\n\nDeliver the DDL statements for your schema and the SQL queries requested.",
    "guidance": [
      "Normalize tables to at least 3NF to reduce data redundancy and improve data integrity.",
      "Include appropriate primary keys, foreign keys, and indexes to optimize query performance.",
      "Use window functions and aggregation to efficiently calculate rankings and summary statistics."
    ],
    "hints": [
      "Consider a separate table to represent order items since orders can contain multiple products.",
      "Track shipment status and estimated delivery dates to analyze delays effectively.",
      "Use DATE functions to filter data based on recent timeframes like last 6 or 12 months."
    ],
    "starterCode": "/* Sample table structure for customers and products */\nCREATE TABLE customers (\n  customer_id SERIAL PRIMARY KEY,\n  first_name VARCHAR(50),\n  last_name VARCHAR(50),\n  email VARCHAR(100) UNIQUE,\n  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP\n);\n\nCREATE TABLE products (\n  product_id SERIAL PRIMARY KEY,\n  name VARCHAR(100),\n  category_id INT,\n  price NUMERIC(10,2),\n  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP\n);\n\n/* Add additional tables such as categories, orders, order_items, and shipments */",
    "expectedOutput": "/* Expected results from queries might include: */\n-- Top 5 customers with total purchase amount ordered from highest to lowest\ncustomer_id | total_spent\n------------|------------\n23          | 12500.00\n7           | 9800.50\n...\n\n-- List of unused products in the last 6 months\nproduct_id | name\n-----------|------\n14         | Vintage Vase\n33         | Leather Bag\n...\n\n-- Monthly sales report\nmonth    | total_revenue | order_count | avg_shipment_delay\n---------|---------------|-------------|--------------------\n2023-01  | 150000.00     | 1200        | 2.3\n2023-02  | 175000.00     | 1350        | 1.9\n...",
    "concepts": [
      "Normalized schema design",
      "Relational database modeling",
      "SQL aggregation and window functions",
      "Performance optimization with indexes"
    ],
    "estimatedTime": "60 minutes",
    "isFeatured": true
  },
  {
    "slug": "refactor-a-function-to-calculate-average-scores-with-better-readability-and-efficiency",
    "title": "Refactor a Function to Calculate Average Scores with Better Readability and Efficiency",
    "language": "javascript",
    "difficulty": "intermediate",
    "category": "code-quality",
    "description": "Improve a messy JavaScript function that calculates average scores from an array of student objects, making the code cleaner, more efficient, and easier to understand without changing its behavior.",
    "prompt": "You are given a function that calculates the average score of students from an array of student objects. The function works correctly but is hard to read, contains redundant operations, and could be optimized. Refactor the function to improve readability, remove unnecessary steps, and maintain the same output behavior. Do not change the function signature or the way it receives input.",
    "guidance": [
      "Focus on simplifying loops and conditionals.",
      "Use built-in array methods where appropriate to improve clarity.",
      "Ensure the function handles empty input arrays gracefully."
    ],
    "hints": [
      "Consider using Array.prototype.reduce to aggregate total scores.",
      "Avoid recalculating constants or repeatedly parsing the same data.",
      "Use meaningful variable names and remove unused variables."
    ],
    "starterCode": "function calculateAverage(students) {\n  let total = 0;\n  let count = 0;\n\n  for (let i = 0; i < students.length; i++) {\n    if (students[i].score != null) {\n      total += Number(students[i].score);\n      count++;\n    }\n  }\n\n  if (count === 0) {\n    return 0;\n  }\n\n  let average = total / count;\n  return average.toFixed(2) * 1; // Convert string to number\n}",
    "expectedOutput": "calculateAverage([{name: 'Alice', score: 85}, {name: 'Bob', score: 90}, {name: 'Carol', score: 95}]) // 90",
    "concepts": [
      "code refactoring",
      "array methods",
      "code readability",
      "JavaScript basics"
    ],
    "estimatedTime": "10 minutes",
    "isFeatured": true
  },
  {
    "slug": "build-a-real-time-collaborative-text-editor-with-operational-transformation-in-javascript",
    "title": "Build a Real-Time Collaborative Text Editor with Operational Transformation in JavaScript",
    "language": "javascript",
    "difficulty": "advanced",
    "category": "mini-projects",
    "description": "Create a real-time collaborative text editor that allows multiple users to edit a shared document simultaneously using Operational Transformation (OT) to handle concurrent changes and keep the document state consistent across clients.",
    "prompt": "Build a JavaScript application that implements a real-time collaborative text editor supporting multiple users editing the same document concurrently. Use Operational Transformation (OT) to merge concurrent text changes without conflicts, ensuring all users see a consistent document state. Your code should manage insertion and deletion operations, apply transformations to concurrent operations, and broadcast updates to connected clients. The application should expose functions for applying local edits, receiving remote operations, and maintaining the current document state. Assume a simplified environment without UI rendering; focus on the core OT algorithm and state synchronization logic.",
    "guidance": [
      "Implement data structures to represent text operations (insert, delete) and define how to transform operations against each other.",
      "Maintain a consistent document state and apply incoming remote operations after transforming them based on local changes.",
      "Design functions for applying local edits and integrating remote edits to handle concurrent changes robustly."
    ],
    "hints": [
      "Start by defining the operation format, e.g., {type: 'insert'|'delete', position: number, char?: string}.",
      "Research simple Operational Transformation algorithms such as Jupiter OT for text documents.",
      "Test your implementation by simulating sequences of local and remote operations with overlapping edits."
    ],
    "starterCode": "class TextEditorOT {\n  constructor() {\n    this.document = '';\n    this.history = [];\n  }\n\n  // Apply a local edit operation (insert/delete)\n  applyLocalOperation(op) {\n    // Your code here\n  }\n\n  // Receive and integrate a remote operation\n  applyRemoteOperation(op) {\n    // Your code here\n  }\n\n  // Transform an operation against another concurrent operation\n  transform(op1, op2) {\n    // Your code here\n  }\n\n  getDocument() {\n    return this.document;\n  }\n}",
    "expectedOutput": "After applying the following operations:\n1) Local insert 'A' at position 0\n2) Remote insert 'B' at position 0 concurrently\nThe document should be consistent for all users as either 'AB' or 'BA' depending on transformation order, demonstrating conflict resolution.\nFinal document example: 'AB'",
    "concepts": [
      "Operational Transformation",
      "Concurrency Control",
      "Data Structures",
      "Text Processing"
    ],
    "estimatedTime": "120 minutes",
    "isFeatured": false
  },
  {
    "slug": "build-a-high-performance-memoized-recursive-function-for-multivariate-fibonacci-sequence",
    "title": "Build a High-Performance Memoized Recursive Function for Multivariate Fibonacci Sequence",
    "language": "python",
    "difficulty": "advanced",
    "category": "functions",
    "description": "Create a Python function that computes terms of a custom multivariate Fibonacci sequence with dynamic step parameters and optimized with memoization for high performance.",
    "prompt": "Design and implement a Python function `multi_fib(n, k)` that returns the nth term of a generalized Fibonacci sequence where each term is the sum of the previous k terms. For example, if k=2, it's the classic Fibonacci sequence; if k=3, each term is the sum of the previous three terms, and so forth. The base cases for indices less than or equal to zero should be 0, and for indices 1 through k, the terms should each be 1. Ensure your function uses memoization to optimize performance for large n and k values.",
    "guidance": [
      "Implement base cases clearly to handle indices less than or equal to zero, and initial terms up to k.",
      "Use memoization (caching) to avoid recomputing previously calculated terms and achieve optimal time complexity.",
      "Ensure your function can handle large values of n and k efficiently without exceeding recursion limits."
    ],
    "hints": [
      "Use a dictionary or functools.lru_cache for memoizing recursive calls.",
      "Think carefully about the recursive relation: multi_fib(n, k) = sum of multi_fib(n-1, k) + multi_fib(n-2, k) + ... + multi_fib(n-k, k).",
      "Consider iteration instead of pure recursion if recursion depth is a concern."
    ],
    "starterCode": "def multi_fib(n, k):\n    # Your implementation here\n    pass",
    "expectedOutput": "multi_fib(6, 3) -> 13\nmulti_fib(10, 2) -> 55\nmulti_fib(5, 5) -> 16",
    "concepts": [
      "recursion",
      "memoization",
      "dynamic programming",
      "mathematical sequences"
    ],
    "estimatedTime": "15 minutes",
    "isFeatured": false
  },
  {
    "slug": "refactor-sql-query-to-remove-redundant-subquery",
    "title": "Refactor SQL Query to Remove Redundant Subquery",
    "language": "sql",
    "difficulty": "beginner",
    "category": "optimization",
    "description": "Optimize a basic SQL query by refactoring it to remove an unnecessary subquery, improving readability and performance without changing the output.",
    "prompt": "You are given a SQL query that selects employees from the 'employees' table with a salary greater than 50000. However, the query uses a redundant subquery structure. Refactor the query to achieve the same results but without the unnecessary subquery, making it cleaner and more efficient.",
    "guidance": [
      "Analyze the query to identify where the subquery is not needed.",
      "Rewrite the query using a straightforward WHERE clause.",
      "Ensure the output remains the same before and after refactoring."
    ],
    "hints": [
      "Is the subquery filtering data in a way that can be done directly in the WHERE clause?",
      "Consider if flattening the query improves readability without changing results."
    ],
    "starterCode": "SELECT * FROM (SELECT * FROM employees) AS emp WHERE salary > 50000;",
    "expectedOutput": "All rows from 'employees' where salary is greater than 50000, the same as the original query but retrieved using a simpler query structure.",
    "concepts": [
      "simple SELECT",
      "WHERE clause",
      "subqueries",
      "query optimization"
    ],
    "estimatedTime": "10 minutes",
    "isFeatured": false
  },
  {
    "slug": "fix-bug-in-list-squaring-function-with-incorrect-loop",
    "title": "Fix Bug in List Squaring Function with Incorrect Loop",
    "language": "python",
    "difficulty": "intermediate",
    "category": "debugging",
    "description": "This debugging challenge requires identifying and fixing a bug in a Python function that squares each element of a list but returns incorrect results due to loop errors.",
    "prompt": "The provided function `square_elements` is intended to take a list of integers and return a new list where each element is squared. However, the current implementation returns an incorrect list or throws an error. Diagnose the bug, fix the code, and ensure the function works as expected for any input list of integers.",
    "guidance": [
      "Review how the loop iterates through the list indices or elements.",
      "Check if the function returns the new list at the appropriate time.",
      "Make sure to avoid modifying the original list if not intended."
    ],
    "hints": [
      "Consider whether the for-loop is iterating over the correct variable and range.",
      "Check if the return statement is inside the loop, potentially causing premature returns."
    ],
    "starterCode": "def square_elements(numbers):\n    result = []\n    for i in range(len(numbers)):\n        result.append(numbers[i] * numbers[i])\n        return result",
    "expectedOutput": "[1, 4, 9, 16]",
    "concepts": [
      "loops",
      "lists",
      "function return values"
    ],
    "estimatedTime": "10 minutes",
    "isFeatured": false
  },
  {
    "slug": "design-and-query-a-multi-level-employee-management-hierarchy",
    "title": "Design and Query a Multi-Level Employee Management Hierarchy",
    "language": "sql",
    "difficulty": "advanced",
    "category": "data-modeling",
    "description": "Create a relational data model to represent an organization's employee hierarchy with multiple reporting levels and implement complex SQL queries to retrieve hierarchical reports and aggregate statistics.",
    "prompt": "You are tasked with designing a database schema to represent employees in a company, where each employee may report to one manager, and managers can themselves report to higher-level managers, forming a multi-level hierarchy. Build the necessary tables and write SQL queries to achieve the following:\n\n1. Create a table named `Employees` with columns `employee_id` (primary key), `name`, `position`, `manager_id` (foreign key referencing `employee_id`, nullable).\n\n2. Insert sample data representing at least 10 employees spanning at least 3 hierarchical levels.\n\n3. Write a recursive SQL query (using Common Table Expressions) to fetch the full hierarchy tree starting from the top-level manager (CEO) down to all subordinates, showing their levels in the hierarchy.\n\n4. Write a query to calculate the total number of direct and indirect reports for each manager.\n\nDeliverables:\n- The `CREATE TABLE` statement for `Employees`.\n- Sample `INSERT` statements for your data.\n- SQL query for fetching the full employee hierarchy with levels.\n- SQL query for counting total reports per manager.",
    "guidance": [
      "Use a self-referencing foreign key for `manager_id` to model the hierarchy in a single table.",
      "Leverage recursive Common Table Expressions (CTEs) to traverse multiple levels of the hierarchy.",
      "Aggregate results carefully to count all subordinates (direct and indirect) per manager."
    ],
    "hints": [
      "Make sure the `manager_id` column allows NULLs to accommodate the top-level manager who has no manager.",
      "In your recursive CTE, start from employees with NULL `manager_id` to get the root of the hierarchy.",
      "Use `COUNT` combined with `GROUP BY` to calculate the number of subordinates per manager."
    ],
    "starterCode": "CREATE TABLE Employees (\n  employee_id INT PRIMARY KEY,\n  name VARCHAR(100),\n  position VARCHAR(100),\n  manager_id INT NULL,\n  FOREIGN KEY (manager_id) REFERENCES Employees(employee_id)\n);\n\n-- Insert sample data here\n",
    "expectedOutput": "For the hierarchical query:\nemployee_id | name       | position       | level\n-------------------------------------------------\n1           | Alice      | CEO            | 1\n2           | Bob        | VP Engineering | 2\n3           | Carol      | VP Marketing   | 2\n4           | Dave       | Engineering Mgr| 3\n5           | Eve        | Marketing Mgr  | 3\n... (remaining employees)\n\nFor the reports count query:\nmanager_id | total_reports\n-------------------------\n1          | 9\n2          | 4\n3          | 2\n4          | 1\n5          | 0\n... (remaining managers)",
    "concepts": [
      "recursive Common Table Expressions",
      "self-referencing foreign keys",
      "hierarchical data modeling",
      "SQL aggregation"
    ],
    "estimatedTime": "45 minutes",
    "isFeatured": true
  },
  {
    "slug": "fix-the-function-to-calculate-the-sum-of-an-array",
    "title": "Fix the Function to Calculate the Sum of an Array",
    "language": "javascript",
    "difficulty": "beginner",
    "category": "debugging",
    "description": "There's a simple bug in the function that calculates the sum of numbers in an array. Your task is to identify and fix the issue so that the function returns the correct sum.",
    "prompt": "The function sumArray is supposed to return the sum of all elements in the given array. However, the current implementation returns an incorrect result. Identify the problem in the code and fix it so it works correctly for any array of numbers.",
    "guidance": [
      "Check how the accumulator variable is initialized and updated inside the loop.",
      "Make sure the loop iterates over all elements in the array correctly."
    ],
    "hints": [
      "Remember that the accumulator should start at 0 when summing numbers.",
      "Verify that the loop condition allows processing every element in the array."
    ],
    "starterCode": "function sumArray(arr) {\n  let sum = 1;\n  for (let i = 0; i <= arr.length; i++) {\n    sum += arr[i];\n  }\n  return sum;\n}",
    "expectedOutput": "sumArray([1, 2, 3, 4]) // returns 10",
    "concepts": [
      "loops",
      "variables",
      "functions",
      "array traversal"
    ],
    "estimatedTime": "10 minutes",
    "isFeatured": false
  },
  {
    "slug": "refactor-a-complex-c-matrix-multiplication-with-thread-safety-and-performance-in-mind",
    "title": "Refactor a Complex C++ Matrix Multiplication with Thread Safety and Performance in Mind",
    "language": "cpp",
    "difficulty": "advanced",
    "category": "code-quality",
    "description": "Improve a messy and inefficient C++ matrix multiplication code by refactoring it to enhance readability, performance, and thread safety while preserving its original functionality.",
    "prompt": "You are provided with a C++ function that multiplies two matrices in a nested loop structure. The code is functional but suffers from poor readability, redundant computations, and lacks thread safety for concurrent matrix multiplication tasks. Refactor this function to improve its code quality by applying appropriate C++ best practices for readability, performance optimization (such as reducing unnecessary operations), and ensure that the multiplication can safely run in multithreaded contexts. Do not change the core logic or output of the function.\n\nYour refactoring should include:\n- Clear variable naming and organization\n- Avoid redundant computations or memory usage\n- Use const correctness as appropriate\n- Make the function safely callable in parallel from multiple threads\n\nYou can assume the input matrices are valid (non-empty and rectangular) and use standard containers or pointers as you prefer, but clarify your choice in comments.",
    "guidance": [
      "Identify and eliminate redundant variable assignments and computations inside loops.",
      "Use const references or pointers for input parameters where mutation is not needed.",
      "Avoid shared mutable state or use local variables only to enable thread safety.",
      "Consider using standard library containers (like std::vector) with size information passed explicitly."
    ],
    "hints": [
      "Check if any variable is unnecessarily being assigned inside inner loops multiple times.",
      "Mark input matrices as const references to prevent accidental mutation.",
      "Avoid static or global variables that could cause race conditions when used in concurrent environments."
    ],
    "starterCode": "void multiplyMatrices(const int* A, int rowsA, int colsA, const int* B, int rowsB, int colsB, int* result) {\n    for (int i = 0; i < rowsA; ++i) {\n        for (int j = 0; j < colsB; ++j) {\n            int sum = 0;\n            for (int k = 0; k < colsA; ++k) {\n                int a_val = A[i * colsA + k];\n                int b_val = B[k * colsB + j];\n                sum += a_val * b_val;\n            }\n            result[i * colsB + j] = sum;\n        }\n    }\n}",
    "expectedOutput": "No change in matrix multiplication result for any valid inputs; the refactored function produces the same output as the original but with cleaner, safer, and more efficient code.",
    "concepts": [
      "C++ refactoring",
      "performance optimization",
      "thread safety",
      "const correctness"
    ],
    "estimatedTime": "15 minutes",
    "isFeatured": false
  },
  {
    "slug": "create-a-sql-function-to-return-the-total-number-of-orders-for-a-customer",
    "title": "Create a SQL Function to Return the Total Number of Orders for a Customer",
    "language": "sql",
    "difficulty": "beginner",
    "category": "queries",
    "description": "Write a simple SQL function that takes a customer ID as input and returns the total count of orders placed by that customer.",
    "prompt": "You have a table named Orders with columns OrderID, CustomerID, and OrderDate. Write a SQL function named GetCustomerOrderCount that accepts a CustomerID as input and returns the total number of orders placed by that customer. Your function should return an integer representing this count.",
    "guidance": [
      "Use the COUNT aggregate function to count the number of orders for the given CustomerID.",
      "Filter the Orders table by CustomerID inside your function.",
      "Ensure your function returns an integer value."
    ],
    "hints": [
      "Start by writing a SELECT COUNT(*) query filtered by CustomerID.",
      "Remember to define the input parameter and return type for your function."
    ],
    "starterCode": "CREATE FUNCTION GetCustomerOrderCount(@CustomerID INT)\nRETURNS INT\nAS\nBEGIN\n    -- Your code here\nEND;",
    "expectedOutput": "For example, calling GetCustomerOrderCount(5) returns 12 if customer with ID 5 has 12 orders.",
    "concepts": [
      "SQL functions",
      "SELECT query",
      "COUNT aggregate"
    ],
    "estimatedTime": "10 minutes",
    "isFeatured": false
  },
  {
    "slug": "design-and-query-a-movie-rental-database-schema",
    "title": "Design and Query a Movie Rental Database Schema",
    "language": "sql",
    "difficulty": "intermediate",
    "category": "data-modeling",
    "description": "Build a normalized relational schema for a movie rental system including customers, movies, rentals, and payments, then write SQL queries to retrieve key business insights.",
    "prompt": "You are tasked with designing a simple movie rental database schema that must include tables for Customers, Movies, Rentals, and Payments. Each customer can rent multiple movies, and each rental can have multiple payments (for instance, partial payments or late fees). After creating tables with appropriate keys and relationships, write SQL queries to:\n1. List all customers who have rented more than 3 movies.\n2. Find the total amount paid by each customer.\n3. Identify movies that have never been rented.\n\nYour solution should define the schema using CREATE TABLE statements with relevant constraints, then provide the SQL queries fulfilling the requirements.",
    "guidance": [
      "Use primary and foreign keys to enforce relationships between customers, movies, rentals, and payments tables.",
      "Consider including columns for rental date, return date, and payment amount to enrich your data.",
      "Use JOINs and GROUP BY clauses to aggregate data according to the queries."
    ],
    "hints": [
      "Ensure the Rentals table includes foreign keys to the Customers and Movies tables to link data correctly.",
      "Use LEFT JOIN when querying movies that have never been rented to include movies with no corresponding rental records.",
      "Aggregate payments by customer using SUM and GROUP BY to find total payments."
    ],
    "starterCode": "CREATE TABLE Customers (\n  customer_id INT PRIMARY KEY,\n  name VARCHAR(100),\n  email VARCHAR(100)\n);\n\nCREATE TABLE Movies (\n  movie_id INT PRIMARY KEY,\n  title VARCHAR(200),\n  genre VARCHAR(50)\n);\n\n-- Define Rentals and Payments tables with appropriate keys and columns",
    "expectedOutput": "Query1 Example Output:\n| customer_id | name       | rental_count |\n|-------------|------------|--------------|\n| 101         | Alice Lee  | 5            |\n| 103         | Bob Smith  | 4            |\n\nQuery2 Example Output:\n| customer_id | total_paid |\n|-------------|------------|\n| 101         | 150.00     |\n| 102         | 80.00      |\n\nQuery3 Example Output:\n| movie_id | title               |\n|----------|---------------------|\n| 12       | The Forgotten Movie |\n| 15       | Hidden Gems         |",
    "concepts": [
      "database schema design",
      "primary and foreign keys",
      "SQL JOINs and aggregation"
    ],
    "estimatedTime": "15 minutes",
    "isFeatured": false
  },
  {
    "slug": "create-a-sql-function-to-calculate-employee-tenure-in-years",
    "title": "Create a SQL Function to Calculate Employee Tenure in Years",
    "language": "sql",
    "difficulty": "intermediate",
    "category": "queries",
    "description": "Write a SQL function that calculates the tenure of an employee in years based on their hire date and an optional end date. The function should return the number of full years the employee has worked.",
    "prompt": "Create a SQL function named CalculateTenure that takes two parameters: hire_date (DATE) and end_date (DATE, nullable). The function should return the number of full years the employee has worked. If end_date is NULL, use the current date as the end date. Calculate the tenure as full years, ignoring partial years.",
    "guidance": [
      "Consider how to handle cases where end_date is NULL (use current date).",
      "Make sure to correctly calculate full years between dates, not just the difference in days.",
      "Use built-in date functions and conditionals in your SQL dialect to implement the logic."
    ],
    "hints": [
      "You can use the DATEDIFF or equivalent function but be careful to only count full years.",
      "Use CASE or IF statements to set the end date to current date when NULL.",
      "Try extracting the year, month, and day parts to compare and adjust for partial years."
    ],
    "starterCode": "CREATE FUNCTION CalculateTenure(hire_date DATE, end_date DATE) RETURNS INT BEGIN\n  -- Your code here\nEND;",
    "expectedOutput": "CalculateTenure('2015-06-15', '2020-06-14') returns 4\nCalculateTenure('2015-06-15', '2020-06-15') returns 5\nCalculateTenure('2015-06-15', NULL) returns tenure up to today",
    "concepts": [
      "SQL functions",
      "Date calculations",
      "Conditional logic"
    ],
    "estimatedTime": "10 minutes",
    "isFeatured": false
  },
  {
    "slug": "design-and-query-an-employee-hierarchy-data-model",
    "title": "Design and Query an Employee Hierarchy Data Model",
    "language": "sql",
    "difficulty": "advanced",
    "category": "data-modeling",
    "description": "Create a normalized data model to represent an employee hierarchy within a company, then write an advanced SQL query to retrieve hierarchical reports and aggregated information.",
    "prompt": "Your company wants to maintain an employee organizational chart with multiple levels of management. Design a SQL data model that supports: employees, their managers (who are also employees), departments, and salaries. Each employee belongs to exactly one department and has a single manager except for the CEO, who has none. Then write an efficient SQL query that returns each employee's name, their manager's name, their department, and the total count of direct and indirect reports under them (i.e., total employees in their hierarchy tree). Make sure your design supports fast hierarchical queries and avoids data redundancy.",
    "guidance": [
      "Use a self-referencing table for employees to represent manager relationships.",
      "Ensure proper normalization by separating departments into their own table.",
      "Use recursive Common Table Expressions (CTEs) to calculate hierarchical counts efficiently.",
      "Optimize indexes on manager foreign keys for recursive queries."
    ],
    "hints": [
      "Use a 'manager_id' column in the employees table referencing the employee's own ID.",
      "The CEO's 'manager_id' can be NULL to indicate no manager.",
      "Leverage recursive CTEs with UNION ALL to traverse the entire report tree."
    ],
    "starterCode": "CREATE TABLE departments (\n  department_id INT PRIMARY KEY,\n  department_name VARCHAR(100) NOT NULL\n);\n\nCREATE TABLE employees (\n  employee_id INT PRIMARY KEY,\n  employee_name VARCHAR(100) NOT NULL,\n  manager_id INT REFERENCES employees(employee_id),\n  department_id INT REFERENCES departments(department_id),\n  salary DECIMAL(10, 2) NOT NULL\n);",
    "expectedOutput": "A result set with columns: employee_name, manager_name, department_name, total_reports_count - where total_reports_count indicates the number of all employees reporting directly or indirectly under that employee.",
    "concepts": [
      "recursive CTE",
      "self-referencing foreign key",
      "data normalization",
      "hierarchical queries"
    ],
    "estimatedTime": "30 minutes",
    "isFeatured": true
  },
  {
    "slug": "advanced-c-code-refactor-optimize-and-modernize-complex-class-implementation",
    "title": "Advanced C++ Code Refactor: Optimize and Modernize Complex Class Implementation",
    "language": "cpp",
    "difficulty": "advanced",
    "category": "code-quality",
    "description": "Given a legacy C++ class with complex logic, repetitive code, and poor maintainability, your task is to refactor it for readability, efficiency, and modern C++ best practices without altering its external behavior.",
    "prompt": "You are provided with a complex C++ class that performs multiple operations with several duplicated code blocks, manual memory management, and non-idiomatic constructs. Refactor the class using modern C++ features such as smart pointers, STL algorithms, and remove code duplication. Improve the class design for readability and maintainability, but ensure the external interface and behavior remain unchanged. Provide only the refactored class implementation.",
    "guidance": [
      "Focus on eliminating duplicated code by introducing helper functions or templates where appropriate.",
      "Replace raw pointers and manual memory management with smart pointers to ensure exception safety.",
      "Leverage STL algorithms and range-based loops to simplify iterations and conditional logic.",
      "Maintain the original class interface and ensure all unit tests (if any) still pass after your refactor."
    ],
    "hints": [
      "Consider using std::unique_ptr or std::shared_ptr instead of raw pointers for resource management.",
      "Use std::transform, std::accumulate, or std::any_of to replace manual loops where appropriate.",
      "Look out for patterns of repeated code blocks that can be abstracted into smaller functions."
    ],
    "starterCode": "class DataProcessor {\n  int* data;\n  size_t size;\n\npublic:\n  DataProcessor(size_t n) : size(n) {\n    data = new int[size];\n    for (size_t i = 0; i < size; ++i) {\n      data[i] = i * 2;\n    }\n  }\n\n  ~DataProcessor() {\n    delete[] data;\n  }\n\n  void process() {\n    for (size_t i = 0; i < size; ++i) {\n      if (data[i] % 2 == 0) {\n        data[i] = data[i] / 2;\n      } else {\n        data[i] = data[i] * 3;\n      }\n    }\n  }\n\n  int sum() const {\n    int total = 0;\n    for (size_t i = 0; i < size; ++i) {\n      total += data[i];\n    }\n    return total;\n  }\n\n  bool contains(int val) const {\n    for (size_t i = 0; i < size; ++i) {\n      if (data[i] == val) {\n        return true;\n      }\n    }\n    return false;\n  }\n};",
    "expectedOutput": "Class behavior remains unchanged: for example,\nDataProcessor dp(5);\ndp.process();\nstd::cout << dp.sum();  // Outputs 12\nstd::cout << dp.contains(3);  // Outputs 1 (true)\nstd::cout << dp.contains(10); // Outputs 0 (false)",
    "concepts": [
      "Modern C++",
      "Smart pointers",
      "STL algorithms",
      "Code refactoring"
    ],
    "estimatedTime": "20 minutes",
    "isFeatured": true
  },
  {
    "slug": "refactor-a-simple-grade-calculator-for-clarity",
    "title": "Refactor a Simple Grade Calculator for Clarity",
    "language": "cpp",
    "difficulty": "beginner",
    "category": "code-quality",
    "description": "Improve the readability and structure of a basic C++ grade calculation function without changing its behavior.",
    "prompt": "You are given a function that calculates and returns a letter grade based on a numerical score. The current implementation works correctly but is hard to read and understand due to poor formatting and nested conditionals. Refactor the function to improve clarity and maintainability while keeping the same output for any input.",
    "guidance": [
      "Focus on simplifying nested conditionals where possible.",
      "Use clear and consistent variable names and formatting.",
      "Avoid redundant code and conditions."
    ],
    "hints": [
      "Consider using else-if statements instead of multiple nested ifs.",
      "Returning as soon as you determine the grade can reduce complexity."
    ],
    "starterCode": "char calculateGrade(int score) {\n    if(score >= 90) {\n        return 'A';\n    } else {\n        if(score >= 80) {\n            return 'B';\n        } else {\n            if(score >= 70) {\n                return 'C';\n            } else {\n                if(score >= 60) {\n                    return 'D';\n                } else {\n                    return 'F';\n                }\n            }\n        }\n    }\n}",
    "expectedOutput": "Input: 85 -> Output: B\nInput: 72 -> Output: C\nInput: 59 -> Output: F",
    "concepts": [
      "conditional statements",
      "code readability",
      "refactoring",
      "functions"
    ],
    "estimatedTime": "10 minutes",
    "isFeatured": false
  },
  {
    "slug": "predict-the-output-multi-dimensional-array-and-pointer-arithmetic-in-c",
    "title": "Predict the Output: Multi-dimensional Array and Pointer Arithmetic in C++",
    "language": "cpp",
    "difficulty": "intermediate",
    "category": "logic",
    "description": "Analyze the provided C++ code snippet involving multi-dimensional arrays and pointer arithmetic. Predict the output without running the code.",
    "prompt": "Consider the following C++ code snippet:\n\nint main() {\n    int arr[2][3] = {{1, 2, 3}, {4, 5, 6}};\n    int *ptr = &arr[0][0];\n    \n    std::cout << *(ptr + 4) << \" \";\n    std::cout << *(*(arr + 1) + 1) << \" \";\n    std::cout << arr[1][2] << \" \";\n    std::cout << *(arr[0] + 2) << std::endl;\n    \n    return 0;\n}\n\nWhat will be the output of this code?",
    "guidance": [
      "Remember how multi-dimensional arrays are laid out contiguously in memory in row-major order.",
      "Understand pointer arithmetic and how incrementing an int pointer moves it to the next integer element."
    ],
    "hints": [
      "The expression *(ptr + 4) accesses the 5th element from the beginning of the array.",
      "The expression *(*(arr + 1) + 1) accesses the element in the second row, second column."
    ],
    "starterCode": "int main() {\n    int arr[2][3] = {{1, 2, 3}, {4, 5, 6}};\n    int *ptr = &arr[0][0];\n    \n    std::cout << *(ptr + 4) << \" \";\n    std::cout << *(*(arr + 1) + 1) << \" \";\n    std::cout << arr[1][2] << \" \";\n    std::cout << *(arr[0] + 2) << std::endl;\n    \n    return 0;\n}",
    "expectedOutput": "5 5 6 3",
    "concepts": [
      "pointer arithmetic",
      "multi-dimensional arrays"
    ],
    "estimatedTime": "10 minutes",
    "isFeatured": false
  },
  {
    "slug": "refactor-complex-nested-callbacks-into-clean-async-await-flow",
    "title": "Refactor Complex Nested Callbacks into Clean Async/Await Flow",
    "language": "javascript",
    "difficulty": "advanced",
    "category": "code-quality",
    "description": "Refactor a nested callback-based event processing function into clean, modular, and maintainable async/await style JavaScript code without changing the behavior or output.",
    "prompt": "You are provided with a function that processes a series of data events using nested callbacks. The current code is hard to read, difficult to maintain, and prone to errors due to callback nesting (callback hell). Refactor this function to use modern JavaScript async/await patterns while preserving its original asynchronous flow and output. Ensure the refactored code is easier to read, modular, and uses error handling effectively. Do not change the logic or the final result the function produces.",
    "guidance": [
      "Break down the nested callback logic into smaller, reusable async functions.",
      "Use try/catch blocks to handle asynchronous errors gracefully within async functions.",
      "Replace callbacks with Promises where needed to leverage async/await syntax."
    ],
    "hints": [
      "Consider converting the original callback functions into Promise-returning functions to enable awaiting them.",
      "Ensure that you properly await asynchronous operations to maintain execution order.",
      "Check that error handling replicates the original behavior by propagating or catching exceptions appropriately."
    ],
    "starterCode": "function processEvents(events, onComplete) {\n  let results = [];\n  let index = 0;\n\n  function processNext() {\n    if (index >= events.length) {\n      onComplete(null, results);\n      return;\n    }\n\n    simulateAsyncEvent(events[index], (err, result) => {\n      if (err) {\n        onComplete(err);\n        return;\n      }\n      results.push(result);\n      index++;\n      processNext();\n    });\n  }\n\n  processNext();\n}\n\n// Simulates async event processing\nfunction simulateAsyncEvent(event, callback) {\n  setTimeout(() => {\n    if (event === 'error') {\n      callback(new Error('Event processing failed'));\n    } else {\n      callback(null, event.toUpperCase());\n    }\n  }, 100);\n}",
    "expectedOutput": "Calling processEvents(['a', 'b', 'c'], callback) should result in callback(null, ['A', 'B', 'C'])\nCalling processEvents(['a', 'error', 'c'], callback) should result in callback(Error('Event processing failed'))",
    "concepts": [
      "async/await",
      "callbacks",
      "promises",
      "error handling"
    ],
    "estimatedTime": "15 minutes",
    "isFeatured": true
  },
  {
    "slug": "build-a-simple-to-do-list-application-in-c",
    "title": "Build a Simple To-Do List Application in C++",
    "language": "cpp",
    "difficulty": "beginner",
    "category": "mini-projects",
    "description": "Create a beginner-friendly console-based to-do list app where users can add, view, and remove tasks.",
    "prompt": "Write a C++ program that allows a user to manage a simple to-do list. The program should repeatedly prompt the user to choose an action: add a new task, list all tasks, remove a task by number, or exit the program. Tasks should be stored in a dynamic structure, and the user can perform multiple actions until they choose to exit.",
    "guidance": [
      "Use a vector to store the list of tasks dynamically.",
      "Implement a loop to continuously ask for user input until they want to exit.",
      "Use functions to separate adding, listing, and removing tasks."
    ],
    "hints": [
      "Consider using std::getline() to read the full task string from the user.",
      "When removing a task, make sure to validate the user's input to avoid out-of-range errors.",
      "Use a simple menu system with numbered options to interact with the user."
    ],
    "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n\nint main() {\n    std::vector<std::string> tasks;\n    int choice;\n    while (true) {\n        std::cout << \"\\nTo-Do List Menu:\\n1. Add Task\\n2. List Tasks\\n3. Remove Task\\n4. Exit\\nChoose an option: \";\n        std::cin >> choice;\n        std::cin.ignore(); // Clear newline from input buffer\n\n        if (choice == 1) {\n            // Add task\n        } else if (choice == 2) {\n            // List tasks\n        } else if (choice == 3) {\n            // Remove task\n        } else if (choice == 4) {\n            std::cout << \"Exiting program.\\n\";\n            break;\n        } else {\n            std::cout << \"Invalid option. Please try again.\\n\";\n        }\n    }\n    return 0;\n}",
    "expectedOutput": "User selects 1, adds \"Buy groceries\".\nUser selects 2, sees:\n1. Buy groceries\nUser selects 1, adds \"Finish homework\".\nUser selects 2, sees:\n1. Buy groceries\n2. Finish homework\nUser selects 3, enters 1.\nUser selects 2, sees:\n1. Finish homework\nUser selects 4, program exits.",
    "concepts": [
      "vectors",
      "loops",
      "input/output",
      "functions"
    ],
    "estimatedTime": "10 minutes",
    "isFeatured": false
  },
  {
    "slug": "build-a-task-management-cli-mini-project",
    "title": "Build a Task Management CLI Mini Project",
    "language": "javascript",
    "difficulty": "intermediate",
    "category": "mini-projects",
    "description": "Create a simple command-line task manager in JavaScript that allows users to add, remove, list, and mark tasks as complete. This mini-project will help you practice array manipulation, object handling, and implementing multi-step logic.",
    "prompt": "Write a JavaScript function 'taskManager' that returns an object with methods to manage a list of tasks. The task manager should support the following methods: addTask(description), removeTask(index), markComplete(index), and listTasks(). Tasks should be stored as objects with properties: id, description, and completed (boolean). The listTasks method should output all tasks showing their id, description, and status (Completed or Pending). Ensure the task ids increment automatically starting from 1.",
    "guidance": [
      "Use an array to store the tasks inside your task manager object.",
      "Each task should be an object with id, description, and completed properties.",
      "Increment task ids automatically as new tasks are added.",
      "Update the completed property when marking a task as complete."
    ],
    "hints": [
      "Use closures to keep the task list private within the taskManager function.",
      "Remember array methods like push(), splice(), and map() for managing tasks.",
      "Format the output of listTasks for clear readability."
    ],
    "starterCode": "function taskManager() {\n  // Your code here\n}\n\nconst manager = taskManager();\nmanager.addTask('Finish homework');\nmanager.addTask('Clean room');\nmanager.listTasks();",
    "expectedOutput": "1. Finish homework - Pending\n2. Clean room - Pending",
    "concepts": [
      "closures",
      "arrays",
      "objects",
      "methods"
    ],
    "estimatedTime": "15 minutes",
    "isFeatured": false
  },
  {
    "slug": "advanced-c-mini-project-multi-threaded-task-scheduler-with-prioritization",
    "title": "Advanced C++ Mini-Project: Multi-Threaded Task Scheduler with Prioritization",
    "language": "cpp",
    "difficulty": "advanced",
    "category": "mini-projects",
    "description": "Build an advanced multi-threaded task scheduler in C++ that accepts tasks with different priorities, efficiently manages a thread pool, and executes tasks in priority order. The scheduler should support adding, cancelling, and monitoring tasks in real-time.",
    "prompt": "Create a multi-threaded task scheduler class in C++ with the following requirements: \n\n1. The scheduler manages a fixed-size thread pool created at initialization.\n2. Users can submit tasks (as std::function<void()>) with an integer priority (higher number = higher priority).\n3. The scheduler maintains a priority queue of pending tasks and ensures higher priority tasks are executed first.\n4. Provide methods to add new tasks, cancel pending tasks by ID, and query the status of submitted tasks.\n5. The scheduler should handle concurrent submissions and safe shutdown.\n\nImplement the scheduler ensuring thread safety, proper synchronization, and efficient execution without busy waiting.",
    "guidance": [
      "Use a thread-safe priority queue structure to manage tasks based on priority.",
      "Synchronize access to shared resources using mutexes and condition variables.",
      "Design task IDs and status tracking for cancellation and monitoring.",
      "Gracefully handle shutdown to join all worker threads without losing tasks."
    ],
    "hints": [
      "Consider std::priority_queue for managing tasks sorted by priority alongside a custom comparator.",
      "Use std::mutex and std::condition_variable to control access and coordinate worker threads waiting for tasks.",
      "Assign unique IDs to tasks upon submission using atomic counters for easy tracking and cancellation."
    ],
    "starterCode": "#include <iostream>\n#include <queue>\n#include <vector>\n#include <thread>\n#include <mutex>\n#include <condition_variable>\n#include <functional>\n#include <atomic>\n#include <unordered_map>\n\nclass TaskScheduler {\npublic:\n    TaskScheduler(size_t numThreads);\n    ~TaskScheduler();\n\n    int submitTask(std::function<void()> task, int priority);\n    bool cancelTask(int taskId);\n    bool isTaskRunning(int taskId);\n    void shutdown();\n\nprivate:\n    struct Task {\n        int id;\n        int priority;\n        std::function<void()> func;\n        bool operator<(const Task& other) const {\n            // For priority queue: higher priority should come first\n            return priority < other.priority;\n        }\n    };\n\n    void workerThread();\n\n    std::priority_queue<Task> taskQueue;\n    std::unordered_map<int, bool> runningTasks;\n    std::mutex mtx;\n    std::condition_variable cv;\n    std::vector<std::thread> workers;\n    std::atomic<int> nextTaskId;\n    bool shuttingDown;\n};\n\n// Implementations of methods to be done by the user",
    "expectedOutput": "The program will successfully schedule and execute tasks with correct prioritization, outputting task execution order that matches descending priority, and demonstrate task cancellation and monitoring features.",
    "concepts": [
      "multithreading",
      "thread synchronization",
      "priority queue",
      "task scheduling",
      "concurrent programming"
    ],
    "estimatedTime": "90 minutes",
    "isFeatured": false
  },
  {
    "slug": "create-a-simple-employee-department-summary-query",
    "title": "Create a Simple Employee Department Summary Query",
    "language": "sql",
    "difficulty": "beginner",
    "category": "data-modeling",
    "description": "Build a SQL query to summarize employee data by department with basic aggregation and grouping techniques.",
    "prompt": "You are given two tables: Employees and Departments.\n\n- Employees(employee_id, name, department_id, salary)\n- Departments(department_id, department_name)\n\nWrite a SQL query to display each department's name alongside the number of employees working there and the average salary of these employees. Include all departments even if they have no employees (show zero count and NULL for average salary in that case). Order the results by department name alphabetically.",
    "guidance": [
      "Use a LEFT JOIN to ensure all departments appear even if no employees are assigned.",
      "Group rows by department_id and department_name for aggregation.",
      "Use COUNT() to get the total employees and AVG() for the average salary."
    ],
    "hints": [
      "Remember to use COALESCE to convert NULL counts to zero if needed.",
      "Use GROUP BY clause to aggregate data per department."
    ],
    "starterCode": "SELECT d.department_name,\n       COUNT(e.employee_id) AS employee_count,\n       AVG(e.salary) AS average_salary\nFROM Departments d\nLEFT JOIN Employees e ON d.department_id = e.department_id\nGROUP BY d.department_id, d.department_name\nORDER BY d.department_name;",
    "expectedOutput": "A table with columns: department_name, employee_count, average_salary\nExample:\n\n| department_name | employee_count | average_salary |\n|-----------------|----------------|----------------|\n| Accounting      | 3              | 55000          |\n| HR              | 2              | 47000          |\n| IT              | 0              | NULL           |",
    "concepts": [
      "SQL JOIN",
      "GROUP BY",
      "Aggregation functions"
    ],
    "estimatedTime": "10 minutes",
    "isFeatured": false
  },
  {
    "slug": "create-a-sql-function-to-calculate-customer-lifetime-value-clv",
    "title": "Create a SQL Function to Calculate Customer Lifetime Value (CLV)",
    "language": "sql",
    "difficulty": "advanced",
    "category": "queries",
    "description": "Write a SQL function that calculates the Customer Lifetime Value (CLV) based on customer transactions, applying discounting over time and accounting for customer churn rate.",
    "prompt": "You have a table named transactions with the following schema:\n\ntransactions(\n  customer_id INT,\n  transaction_date DATE,\n  amount DECIMAL(10,2)\n)\n\nWrite a SQL function named calculate_clv that calculates the discounted Customer Lifetime Value (CLV) for a given customer_id. The function should take these parameters:\n- customer_id (INT): the ID of the customer\n- churn_rate (DECIMAL): the monthly churn rate as a decimal (e.g., 0.05 for 5%)\n- discount_rate (DECIMAL): the monthly discount rate as a decimal (e.g., 0.01 for 1%)\n\nThe CLV formula to apply to each transaction is:\n  discounted_value = amount / POWER(1 + discount_rate, months_since_first_purchase)\n\nThe function must:\n1. Identify the first transaction date for the specified customer.\n2. Compute the months elapsed since that first purchase for each transaction.\n3. Calculate the discounted transaction amounts.\n4. Sum the discounted amounts.\n5. Apply the churn rate to estimate the expected future value beyond observed transactions, assuming a geometric series continuation with churn_rate.\n\nReturn the final CLV as a DECIMAL.\n\nExample call:\nSELECT calculate_clv(123, 0.05, 0.01);",
    "guidance": [
      "Use DATE_DIFF or equivalent to calculate months between transaction_date and first purchase.",
      "Apply the discount factor POWER(1 + discount_rate, months_elapsed) to each transaction amount.",
      "Incorporate the churn rate to extend CLV beyond observed transactions as a geometric series."
    ],
    "hints": [
      "Calculate the months_since_first_purchase as an integer count from first transaction date.",
      "The infinite sum for future values after observed transactions can be approximated as discounted_sum / (churn_rate + discount_rate).",
      "Test your function with different churn and discount rates to validate calculations."
    ],
    "starterCode": "CREATE FUNCTION calculate_clv(\n  input_customer_id INT,\n  churn_rate DECIMAL(5,4),\n  discount_rate DECIMAL(5,4)\n) RETURNS DECIMAL(18,2) AS $$\nDECLARE\n  first_purchase DATE;\n  clv DECIMAL(18,2) := 0;\nBEGIN\n  -- Your implementation here\n  RETURN clv;\nEND;\n$$ LANGUAGE plpgsql;",
    "expectedOutput": "A decimal value representing the calculated Customer Lifetime Value (CLV) for the given customer, e.g., 1250.75",
    "concepts": [
      "window functions",
      "date/time calculation",
      "discounted cash flow",
      "user-defined functions",
      "geometric series"
    ],
    "estimatedTime": "15 minutes",
    "isFeatured": true
  },
  {
    "slug": "fix-the-bug-in-array-filtering-and-object-mapping-function",
    "title": "Fix the Bug in Array Filtering and Object Mapping Function",
    "language": "javascript",
    "difficulty": "intermediate",
    "category": "debugging",
    "description": "Identify and fix the bug in a JavaScript function designed to filter an array of user objects and map them to a list of their names based on age criteria.",
    "prompt": "The provided JavaScript function filterAndExtractNames is intended to take an array of user objects and return an array of names of users whose age is 18 or older. However, the function currently returns incorrect or unexpected output. Your task is to debug and fix the code so it behaves as specified.",
    "guidance": [
      "Check how the array is filtered by age and ensure the condition is correct.",
      "Verify the method used to extract names after filtering is properly applied on the filtered array."
    ],
    "hints": [
      "Verify the filtering condition uses the correct comparison operator (>=).",
      "Ensure the map function is used on the filtered result rather than the original array."
    ],
    "starterCode": "function filterAndExtractNames(users) {\n  return users.map(user => user.name).filter(user => user.age >= 18);\n}\n\n// Example input\nconst users = [\n  { name: 'Alice', age: 17 },\n  { name: 'Bob', age: 22 },\n  { name: 'Charlie', age: 18 },\n  { name: 'David', age: 15 }\n];\n\nconsole.log(filterAndExtractNames(users));",
    "expectedOutput": "[ 'Bob', 'Charlie' ]",
    "concepts": [
      "array filtering",
      "array mapping",
      "callback functions",
      "conditional logic"
    ],
    "estimatedTime": "10 minutes",
    "isFeatured": true
  },
  {
    "slug": "fix-the-bug-in-a-simple-function-that-adds-two-numbers",
    "title": "Fix the Bug in a Simple Function That Adds Two Numbers",
    "language": "javascript",
    "difficulty": "beginner",
    "category": "debugging",
    "description": "Identify and fix the bug in a JavaScript function designed to add two numbers and return the result. This challenge tests understanding of basic function syntax and return statements.",
    "prompt": "The following function is intended to take two numbers as input parameters, add them together, and return the sum. However, it currently does not work correctly. Find and fix the bug so the function behaves as expected.",
    "guidance": [
      "Check the syntax of the function, especially the return statement.",
      "Verify if the function parameters are used correctly within the function body."
    ],
    "hints": [
      "Is there a missing keyword or syntax error in the function?",
      "Make sure the function actually returns the result of the addition."
    ],
    "starterCode": "function addNumbers(a, b) {\n  let sum = a + b;\n  sum;\n}",
    "expectedOutput": "addNumbers(3, 4) should return 7",
    "concepts": [
      "function syntax",
      "return statement"
    ],
    "estimatedTime": "10 minutes",
    "isFeatured": false
  },
  {
    "slug": "build-a-task-manager-cli-application-in-python",
    "title": "Build a Task Manager CLI Application in Python",
    "language": "python",
    "difficulty": "intermediate",
    "category": "mini-projects",
    "description": "Create a command-line task manager in Python that allows users to add, complete, delete, and list tasks with due dates and priorities.",
    "prompt": "Write a Python program that manages a list of tasks. Each task should have a description, a due date (YYYY-MM-DD format), a priority level (low, medium, high), and a completion status. Implement functionality to:\n\n1. Add a new task.\n2. Mark a task as completed.\n3. Delete a task.\n4. List all tasks sorted by due date and then by priority (high to low).\n\nThe program should interact with the user through simple text input commands and print the updated task list after each operation.",
    "guidance": [
      "Use a list of dictionaries or custom objects to store tasks.",
      "Parse date strings into Python date objects for accurate sorting.",
      "Define functions for each command (add, complete, delete, list) to keep the code organized."
    ],
    "hints": [
      "Use the datetime module to handle and compare due dates.",
      "Map priority levels to numeric values (e.g., high=3, medium=2, low=1) to facilitate sorting.",
      "Keep track of task indices so users can reference them when completing or deleting."
    ],
    "starterCode": "from datetime import datetime\n\ntasks = []\n\ndef add_task(description, due_date_str, priority):\n    due_date = datetime.strptime(due_date_str, '%Y-%m-%d')\n    priorities = {'low': 1, 'medium': 2, 'high': 3}\n    task = {\n        'description': description,\n        'due_date': due_date,\n        'priority': priorities.get(priority.lower(), 1),\n        'completed': False\n    }\n    tasks.append(task)\n\ndef list_tasks():\n    sorted_tasks = sorted(tasks, key=lambda x: (x['due_date'], -x['priority']))\n    for i, task in enumerate(sorted_tasks):\n        status = 'Done' if task['completed'] else 'Pending'\n        print(f'{i}. {task[\"description\"]} - Due: {task[\"due_date\"].date()} - Priority: {task[\"priority\"]} - Status: {status}')\n\n# Implement functions complete_task(index) and delete_task(index) and input loop here\n\n# Example usage:\n# add_task('Complete Dev Duel challenge', '2024-07-15', 'High')\n# list_tasks()",
    "expectedOutput": "0. Complete Dev Duel challenge - Due: 2024-07-15 - Priority: 3 - Status: Pending",
    "concepts": [
      "datetime handling",
      "list sorting",
      "dictionary usage",
      "command-line interaction"
    ],
    "estimatedTime": "15 minutes",
    "isFeatured": true
  },
  {
    "slug": "build-an-optimized-memoized-deep-nested-object-flattener",
    "title": "Build an Optimized Memoized Deep Nested Object Flattener",
    "language": "javascript",
    "difficulty": "advanced",
    "category": "functions",
    "description": "Create a highly efficient JavaScript function that flattens deeply nested objects into a single-level object with dot-separated keys. Implement memoization to cache and reuse results for previously processed inputs to optimize performance for repeated calls with identical objects.",
    "prompt": "Write a function `flattenObject(obj)` that takes an arbitrarily deep nested JavaScript object and returns a new object with all nested keys flattened into a single level, where nested keys are joined by dots ('.'). For example: `flattenObject({a: {b: 2}})` should return `{ 'a.b': 2 }`. Implement memoization in the function so that if it is called multiple times with the exact same input object reference, it instantly returns the cached flattened result without recomputation. Your solution should handle objects containing nested arrays as values by treating array indices as keys in the flattening process (e.g., `{a: [1, 2]}` becomes `{ 'a.0': 1, 'a.1': 2 }`).",
    "guidance": [
      "Recursively traverse the object to access all nested properties and build dot-separated keys.",
      "Use a WeakMap to memoize results keyed by the input object reference to avoid memory leaks.",
      "Handle arrays by using their indices as keys when flattening."
    ],
    "hints": [
      "To memoize based on object references, a WeakMap is ideal since it prevents retaining objects unnecessarily.",
      "Check the data type of each value to determine whether to recurse (for objects and arrays) or set the key-value pair.",
      "Remember that non-object values (including null) should not be traversed and are terminal values in the flattening."
    ],
    "starterCode": "function flattenObject(obj) {\n  // Your implementation here\n}",
    "expectedOutput": "flattenObject({ a: { b: 1, c: [2, 3] }, d: 4 }) // { 'a.b': 1, 'a.c.0': 2, 'a.c.1': 3, d: 4 }",
    "concepts": [
      "recursion",
      "memoization",
      "object traversal",
      "JavaScript WeakMap"
    ],
    "estimatedTime": "15 minutes",
    "isFeatured": false
  },
  {
    "slug": "simple-budget-tracker",
    "title": "Simple Budget Tracker",
    "language": "cpp",
    "difficulty": "beginner",
    "category": "mini-projects",
    "description": "Create a basic C++ program that helps track expenses and calculate the remaining budget. Users will input their total budget and then enter expenses one by one. The program will output the remaining budget after each expense and a summary at the end.",
    "prompt": "Write a C++ program that allows the user to:\n1. Enter their total budget.\n2. Enter multiple expenses one by one. After each expense, the program should display the remaining budget.\n3. When the user types 0 as the expense amount, stop taking inputs and display the total expenses and the final remaining budget.\n\nMake sure to handle cases where the expense might exceed the remaining budget by displaying a warning message and not subtracting that expense.",
    "guidance": [
      "Use a loop to repeatedly take expense inputs until the user enters 0.",
      "Keep track of expenses using a variable and update the remaining budget after each valid expense.",
      "Use conditionals to ensure expenses that exceed the remaining budget are rejected with a warning."
    ],
    "hints": [
      "Remember to initialize your variables such as total budget and total expenses.",
      "Use a while loop or a do-while loop to keep asking for expenses.",
      "Check if the expense entered is greater than the remaining budget before subtracting."
    ],
    "starterCode": "#include <iostream>\nusing namespace std;\n\nint main() {\n    double totalBudget, expense, totalExpenses = 0;\n    cout << \"Enter your total budget: \";\n    cin >> totalBudget;\n\n    // Your code to input expenses and calculate remaining budget goes here\n\n    return 0;\n}",
    "expectedOutput": "Enter your total budget: 500\nEnter an expense (0 to finish): 100\nRemaining budget: 400\nEnter an expense (0 to finish): 200\nRemaining budget: 200\nEnter an expense (0 to finish): 250\nExpense exceeds remaining budget. Try a smaller amount.\nEnter an expense (0 to finish): 150\nRemaining budget: 50\nEnter an expense (0 to finish): 0\nTotal expenses: 450\nFinal remaining budget: 50",
    "concepts": [
      "variables",
      "loops",
      "conditionals",
      "input/output"
    ],
    "estimatedTime": "10 minutes",
    "isFeatured": true
  },
  {
    "slug": "create-a-deep-object-merge-function",
    "title": "Create a Deep Object Merge Function",
    "language": "javascript",
    "difficulty": "intermediate",
    "category": "functions",
    "description": "Build a JavaScript function that takes two objects and merges them deeply, combining nested objects instead of overwriting them.",
    "prompt": "Write a function called `deepMerge` that takes two objects as arguments and returns a new object that is a deep merge of the two. If both objects share the same key and their values are objects themselves, merge those objects recursively. For other types of values, the value from the second object should overwrite the first. Your function should not mutate the original input objects.",
    "guidance": [
      "Check if a value is an object before recursively merging.",
      "Use a helper function or recursion to process nested objects.",
      "Avoid mutating the original objects; always create new objects during merging."
    ],
    "hints": [
      "Use `typeof` and `Array.isArray` checks to distinguish objects from other types and arrays.",
      "Remember that arrays should be overwritten, not deeply merged.",
      "Spread syntax (`{...obj}`) can help create shallow copies for immutability."
    ],
    "starterCode": "function deepMerge(obj1, obj2) {\n  // Your code here\n}",
    "expectedOutput": "deepMerge({a: 1, b: {x: 2}}, {b: {y: 3}, c: 4}) // returns {a: 1, b: {x: 2, y: 3}, c: 4}",
    "concepts": [
      "recursion",
      "object manipulation",
      "immutability"
    ],
    "estimatedTime": "15 minutes",
    "isFeatured": true
  },
  {
    "slug": "predict-the-output-of-complex-closure-and-async-workflows-in-javascript",
    "title": "Predict the Output of Complex Closure and Async Workflows in JavaScript",
    "language": "javascript",
    "difficulty": "advanced",
    "category": "logic",
    "description": "Analyze a JavaScript code snippet combining closures, async/await, Promises, and loops, then predict the exact order and content of its console output.",
    "prompt": "Examine the following JavaScript code that uses nested functions, closures, async/await, and Promise-based delays. Predict exactly what strings will be logged to the console and in which order, after the function runSequence() is invoked.",
    "guidance": [
      "Focus on understanding how closures capture variables in loops.",
      "Consider the effects of async/await with Promise delays within loops.",
      "Remember the event loop behavior and microtask queue processing order."
    ],
    "hints": [
      "Variables declared with var inside loops can cause unexpected captures due to function scoping.",
      "The await keyword pauses execution within async functions but does not block the main thread.",
      "Promises resolved inside loops execute their .then() callbacks as microtasks after the current call stack completes."
    ],
    "starterCode": "function delay(ms) {\n  return new Promise(resolve => setTimeout(resolve, ms));\n}\n\nasync function runSequence() {\n  for (var i = 0; i < 3; i++) {\n    delay(10).then(() => console.log('Then', i));\n    (async function(j) {\n      await delay(5);\n      console.log('Await', j);\n    })(i);\n  }\n  console.log('Loop done');\n}\n\nrunSequence();",
    "expectedOutput": "Loop done\nAwait 0\nAwait 1\nAwait 2\nThen 3\nThen 3\nThen 3",
    "concepts": [
      "closures",
      "async/await",
      "Promise",
      "event loop",
      "variable scoping"
    ],
    "estimatedTime": "10 minutes",
    "isFeatured": false
  },
  {
    "slug": "create-a-simple-student-grades-table-and-query",
    "title": "Create a Simple Student Grades Table and Query",
    "language": "sql",
    "difficulty": "beginner",
    "category": "data-modeling",
    "description": "Build a beginner-level SQL project to create a basic data model for student grades. Define a table, insert sample data, and write a query to retrieve student names with their corresponding grades.",
    "prompt": "You are tasked with creating a simple data model to store student grades in a class. First, create a table named `StudentGrades` with the following columns: `StudentID` (integer, primary key), `StudentName` (text), and `Grade` (integer). Then, insert at least 5 students with their grades. Finally, write a query to select all students who scored 80 or above, showing their names and grades in ascending order by grade.",
    "guidance": [
      "Focus on defining the table with appropriate data types and a primary key.",
      "Insert sample data for at least 5 students.",
      "Write a SELECT query with a WHERE condition to filter grades >= 80 and ORDER BY grade ascending."
    ],
    "hints": [
      "Use CREATE TABLE syntax with column definitions including INT and VARCHAR or TEXT.",
      "INSERT INTO can be used multiple times to add student records.",
      "Use SELECT with WHERE and ORDER BY clauses to retrieve filtered and sorted results."
    ],
    "starterCode": "CREATE TABLE StudentGrades (\n  StudentID INT PRIMARY KEY,\n  StudentName TEXT,\n  Grade INT\n);\n\n-- Insert sample data here\n\n-- Write your SELECT query below",
    "expectedOutput": "StudentName | Grade\n------------|-------\nAlice       | 80\nBob         | 85\nEve         | 90",
    "concepts": [
      "CREATE TABLE",
      "INSERT INTO",
      "SELECT",
      "WHERE clause",
      "ORDER BY clause"
    ],
    "estimatedTime": "10 minutes",
    "isFeatured": false
  },
  {
    "slug": "refactor-sql-query-for-optimized-employee-sales-report",
    "title": "Refactor SQL Query for Optimized Employee Sales Report",
    "language": "sql",
    "difficulty": "intermediate",
    "category": "optimization",
    "description": "Improve the given SQL query for generating a monthly sales report by employee to increase readability and performance without changing the output.",
    "prompt": "You are provided with a SQL query that generates a monthly sales summary report showing each employee's total sales amount, the number of sales, and average sale value. The query works correctly but includes redundant JOINs and repetitive subqueries making it inefficient and harder to maintain. Refactor this query to optimize performance and improve readability while keeping the exact output identical.",
    "guidance": [
      "Identify and eliminate redundant JOINs or repeated calculations.",
      "Use more efficient aggregate functions and grouping.",
      "Consider using Common Table Expressions (CTEs) if it improves clarity."
    ],
    "hints": [
      "Check if any tables are joined multiple times unnecessarily.",
      "Avoid recalculating aggregates inside SELECT when possible."
    ],
    "starterCode": "SELECT e.employee_id, e.employee_name, COUNT(s.sale_id) AS total_sales, SUM(s.amount) AS total_amount, AVG(s.amount) AS average_sale\nFROM employees e\nJOIN sales s ON e.employee_id = s.employee_id\nJOIN departments d ON d.department_id = e.department_id\nJOIN sales s2 ON s2.employee_id = e.employee_id\nWHERE EXTRACT(MONTH FROM s.sale_date) = 3\nGROUP BY e.employee_id, e.employee_name, d.department_name\nORDER BY total_amount DESC;",
    "expectedOutput": "A table with columns employee_id, employee_name, total_sales, total_amount, and average_sale displaying monthly sales summary for March, sorted by total sales amount descending.",
    "concepts": [
      "SQL joins",
      "Aggregate functions",
      "Query optimization",
      "Query refactoring"
    ],
    "estimatedTime": "10 minutes",
    "isFeatured": true
  },
  {
    "slug": "predict-the-output-of-complex-pointer-and-reference-manipulations-in-c",
    "title": "Predict the Output of Complex Pointer and Reference Manipulations in C++",
    "language": "cpp",
    "difficulty": "advanced",
    "category": "logic",
    "description": "Analyze the given C++ code involving multiple levels of pointers, references, and pre/post-increment operators. Predict the exact output after all manipulations, demonstrating deep understanding of pointer arithmetic, reference binding, and operator precedence.",
    "prompt": "Given the code below, predict the exact output printed to the console without running the program. Pay close attention to the order of operations and how pointers and references are manipulated throughout the code.",
    "guidance": [
      "Carefully track the values of variables, pointers, and references after each operation.",
      "Recall the difference between pre-increment (++i) and post-increment (i++) when used in complex expressions.",
      "Understand how references to pointers behave and how modifying one affects the other."
    ],
    "hints": [
      "Draw a timeline or table showing the value changes step-by-step.",
      "Remember that the expression *++ptr increments the pointer before dereferencing, while (*ptr)++ increments the pointed value after accessing it."
    ],
    "starterCode": "#include <iostream>\n\nint main() {\n    int arr[] = {1, 2, 3, 4, 5};\n    int* ptr = arr;\n    int*& refPtr = ptr;\n\n    std::cout << *ptr << \" \";      // 1\n    std::cout << *ptr++ << \" \";    // 1\n    std::cout << *ptr << \" \";      // 2\n\n    std::cout << *++ptr << \" \";    // 3\n    std::cout << (*ptr)++ << \" \";  // 3\n    std::cout << *ptr << \" \";      // 4 (what about the increment?)\n\n    refPtr++;\n    std::cout << *refPtr << \" \";  // ?\n    \n    return 0;\n}",
    "expectedOutput": "1 1 2 3 3 4 5",
    "concepts": [
      "pointer arithmetic",
      "reference to pointer",
      "pre-increment vs post-increment",
      "operator precedence"
    ],
    "estimatedTime": "10 minutes",
    "isFeatured": true
  },
  {
    "slug": "fix-the-recursive-sales-totals-query-for-hierarchical-employees",
    "title": "Fix the Recursive Sales Totals Query for Hierarchical Employees",
    "language": "sql",
    "difficulty": "advanced",
    "category": "debugging",
    "description": "You are given a broken SQL query intended to calculate total sales made by each employee and their subordinates in a hierarchical company structure. The query uses a recursive CTE but produces incorrect or incomplete totals. Your task is to identify and fix the bugs so that the query accurately computes cumulative sales totals including all levels of subordinates.",
    "prompt": "The database contains two tables: Employees and Sales. Employees has columns (EmployeeID, ManagerID) representing a hierarchy where each employee may have a manager. Sales has columns (SaleID, EmployeeID, Amount). The goal is to compute, for each employee, the total sales made by that employee and all their direct and indirect subordinates.\n\nA recursive CTE is written but returns incorrect totals or misses some employees. Fix the query so it returns correct cumulative sales amounts per employee.\n\nTables example:\nEmployees:\nEmployeeID | ManagerID\n1          | NULL\n2          | 1\n3          | 1\n4          | 2\n5          | 2\n\nSales:\nSaleID | EmployeeID | Amount\n100    | 1          | 1000\n101    | 2          | 500\n102    | 3          | 700\n103    | 4          | 300\n104    | 5          | 200\n\nYour output should calculate totals like:\nEmployeeID | TotalSales\n1          | 2700 (1000 + 500 + 700 + 300 + 200)\n2          | 1000 (500 + 300 + 200)\n3          | 700\n4          | 300\n5          | 200\n\nFix the SQL query so it computes such totals correctly.",
    "guidance": [
      "Carefully check how the recursive CTE joins Employees to its subordinates each iteration.",
      "Make sure sales amounts are aggregated correctly after establishing the full hierarchy.",
      "Verify that the base and recursive parts of the CTE generate the correct set of rows with proper columns."
    ],
    "hints": [
      "Check whether the recursive CTE includes both the employee and their subordinates at each recursion level.",
      "Confirm that joining Sales is done after constructing the entire hierarchy, not during it.",
      "Make sure GROUP BY clauses are consistent with selected columns."
    ],
    "starterCode": "WITH RECURSIVE EmpHierarchy AS (\n  SELECT EmployeeID, ManagerID\n  FROM Employees\n  WHERE ManagerID IS NULL\n  UNION ALL\n  SELECT e.EmployeeID, e.ManagerID\n  FROM Employees e\n  JOIN EmpHierarchy eh ON e.ManagerID = eh.EmployeeID\n)\nSELECT eh.EmployeeID, SUM(s.Amount) AS TotalSales\nFROM EmpHierarchy eh\nJOIN Sales s ON s.EmployeeID = eh.EmployeeID\nGROUP BY eh.EmployeeID;",
    "expectedOutput": "EmployeeID | TotalSales\n1          | 2700\n2          | 1000\n3          | 700\n4          | 300\n5          | 200",
    "concepts": [
      "recursive CTE",
      "hierarchical queries",
      "aggregation",
      "debugging recursion"
    ],
    "estimatedTime": "15 minutes",
    "isFeatured": true
  },
  {
    "slug": "create-a-function-to-convert-celsius-to-fahrenheit",
    "title": "Create a Function to Convert Celsius to Fahrenheit",
    "language": "javascript",
    "difficulty": "beginner",
    "category": "functions",
    "description": "Write a JavaScript function that converts a temperature from Celsius to Fahrenheit.",
    "prompt": "Build a function named `celsiusToFahrenheit` that accepts one parameter: a number representing a temperature in degrees Celsius. Return the temperature converted to degrees Fahrenheit using the formula F = C * 9/5 + 32.",
    "guidance": [
      "Recall that the function should take exactly one input parameter representing Celsius temperature.",
      "Use the formula F = C * 9/5 + 32 to convert Celsius to Fahrenheit.",
      "Ensure the function returns the converted temperature."
    ],
    "hints": [
      "Remember to multiply the Celsius value by 9/5 before adding 32.",
      "Make sure to return the result from the function instead of just printing it.",
      "Test your function with known values like 0°C should return 32°F."
    ],
    "starterCode": "function celsiusToFahrenheit(celsius) {\n  // Your code here\n}",
    "expectedOutput": "celsiusToFahrenheit(0) // 32\ncelsiusToFahrenheit(100) // 212\ncelsiusToFahrenheit(-40) // -40",
    "concepts": [
      "functions",
      "arithmetic operators",
      "return statement"
    ],
    "estimatedTime": "10 minutes",
    "isFeatured": true
  },
  {
    "slug": "design-and-query-an-employee-project-assignment-schema",
    "title": "Design and Query an Employee-Project Assignment Schema",
    "language": "sql",
    "difficulty": "intermediate",
    "category": "data-modeling",
    "description": "Create a normalized database schema to manage employees, projects, and their assignments. Write SQL queries to retrieve project involvement and employee workloads.",
    "prompt": "You are tasked with designing a simple relational schema to represent employees, projects, and the assignments of employees to projects. Your mini project consists of two parts:\n\n1. Design a normalized schema with three tables: Employees, Projects, and Assignments. The Employees table should store employee ID and name. The Projects table should store project ID and project name. The Assignments table should link employees to projects and include the number of hours an employee is assigned to that project.\n\n2. Write a SQL query to list all employees along with the total number of hours assigned across all their projects. Include employees with zero assignments.\n\n3. Write a SQL query to show each project and the count of employees assigned to it.\n\nAssume employee_id and project_id are integers and primary keys for their respective tables.",
    "guidance": [
      "Create tables with appropriate primary and foreign keys to maintain data integrity.",
      "Use aggregate functions with proper GROUP BY clauses to calculate total hours and count employees.",
      "Use LEFT JOIN where necessary to include employees or projects without assignments."
    ],
    "hints": [
      "The Assignments table needs foreign keys referencing Employees and Projects.",
      "To include employees with no assignments, consider using LEFT JOIN from Employees to Assignments.",
      "Use COALESCE to replace NULLs in total hours with zero."
    ],
    "starterCode": "CREATE TABLE Employees (\n  employee_id INT PRIMARY KEY,\n  employee_name VARCHAR(100)\n);\n\nCREATE TABLE Projects (\n  project_id INT PRIMARY KEY,\n  project_name VARCHAR(100)\n);\n\nCREATE TABLE Assignments (\n  assignment_id INT PRIMARY KEY,\n  employee_id INT,\n  project_id INT,\n  hours_assigned INT,\n  FOREIGN KEY (employee_id) REFERENCES Employees(employee_id),\n  FOREIGN KEY (project_id) REFERENCES Projects(project_id)\n);\n\n-- Query 1: Total hours per employee\n-- Query 2: Employee count per project\n",
    "expectedOutput": "Query 1 result example:\nemployee_id | employee_name | total_hours\n1           | Alice         | 35\n2           | Bob           | 0\n3           | Charlie       | 20\n\nQuery 2 result example:\nproject_id | project_name | employee_count\n101        | Project X    | 2\n102        | Project Y    | 1\n103        | Project Z    | 0",
    "concepts": [
      "database normalization",
      "joins (LEFT JOIN)",
      "aggregate functions (SUM, COUNT)",
      "foreign keys"
    ],
    "estimatedTime": "15 minutes",
    "isFeatured": true
  },
  {
    "slug": "build-a-function-to-perform-multi-level-memoized-matrix-chain-multiplication",
    "title": "Build a Function to Perform Multi-level Memoized Matrix Chain Multiplication",
    "language": "cpp",
    "difficulty": "advanced",
    "category": "functions",
    "description": "Implement an optimized function to compute the minimum number of scalar multiplications needed to multiply a given chain of matrices using memoization to achieve efficient performance.",
    "prompt": "Given an array 'dims' of length n+1 representing the dimensions of n matrices (the i-th matrix has dimensions dims[i-1] x dims[i]), implement a function 'matrixChainOrder' in C++ that returns the minimum scalar multiplication cost to multiply the chain of matrices from 1 to n. Use dynamic programming with memoization to optimize the recursive solution. Your function signature should be: int matrixChainOrder(const std::vector<int>& dims);.",
    "guidance": [
      "Use a helper recursive function with memoization that calculates the minimum cost for multiplying matrices from index i to j.",
      "Store and reuse previously computed results in a 2D memo table to avoid redundant calculations.",
      "Carefully handle base cases where the chain length is 1 (no multiplication needed)."
    ],
    "hints": [
      "Think about the optimal substructure: the cost for matrices from i to j depends on the optimal split point k where i <= k < j.",
      "Your memo table should be a 2D vector initialized with a sentinel value (e.g., -1) to denote uncomputed states.",
      "Iterate through all possible splits k and select the one minimizing the cost of multiplying left and right subchains plus multiplication cost."
    ],
    "starterCode": "#include <vector>\n#include <iostream>\n#include <climits>\n\nint matrixChainOrder(const std::vector<int>& dims) {\n    // Implement your memoized solution here\n}\n\nint main() {\n    std::vector<int> dims = {40, 20, 30, 10, 30};\n    std::cout << matrixChainOrder(dims) << std::endl; // Expected output: 26000\n    return 0;\n}",
    "expectedOutput": "26000",
    "concepts": [
      "dynamic programming",
      "memoization",
      "recursion",
      "optimization",
      "matrix chain multiplication"
    ],
    "estimatedTime": "15 minutes",
    "isFeatured": false
  },
  {
    "slug": "build-a-function-to-calculate-the-running-median-of-an-integer-stream",
    "title": "Build a Function to Calculate the Running Median of an Integer Stream",
    "language": "cpp",
    "difficulty": "intermediate",
    "category": "functions",
    "description": "Write a function in C++ that processes a stream of integers and returns the median after each new number is added. The function should efficiently handle the insertion and calculation steps to provide medians dynamically.",
    "prompt": "Create a function named getRunningMedians that accepts a vector of integers representing a stream of incoming data. The function should return a vector of doubles representing the median of all the numbers seen so far after each insertion. Consider how to efficiently add new numbers and calculate medians when the data set is growing.",
    "guidance": [
      "Use two heaps (a max heap and a min heap) to balance the lower and upper halves of the stream for efficient median calculation.",
      "Balance the heaps after each insertion to ensure their sizes differ by at most one.",
      "Calculate the median based on the root elements of the heaps once balanced."
    ],
    "hints": [
      "Keep the max heap storing the smaller half of numbers and the min heap storing the larger half.",
      "If the heaps have equal size, the median is the average of the two root elements; otherwise, it's the root of the heap with more elements.",
      "Push new numbers first into the max heap, then move the largest from max heap to min heap if needed to maintain order."
    ],
    "starterCode": "#include <vector>\n#include <queue>\nusing namespace std;\n\nvector<double> getRunningMedians(const vector<int>& nums) {\n    // Implement your function here\n}",
    "expectedOutput": "[2, 1.5, 2, 2.5, 3]",
    "concepts": [
      "heaps",
      "priority_queue",
      "vector",
      "median calculation"
    ],
    "estimatedTime": "10 minutes",
    "isFeatured": false
  },
  {
    "slug": "build-a-dynamic-to-do-list-manager-in-javascript",
    "title": "Build a Dynamic To-Do List Manager in JavaScript",
    "language": "javascript",
    "difficulty": "intermediate",
    "category": "mini-projects",
    "description": "Create a small interactive to-do list manager that allows users to add, remove, edit, and toggle completion of tasks. This project will strengthen your skills with arrays, objects, DOM manipulation, and event handling in JavaScript.",
    "prompt": "Build a JavaScript function called todoManager that takes an array of task objects and a command object to update the list. Each task object has properties: id (unique number), text (string), and completed (boolean). The command object can be one of four types: add (with a text), remove (with task id), edit (with id and new text), or toggle (with id to mark as completed/uncompleted). Implement the logic to process the command and return the updated tasks array. Ensure task ids are unique and preserved. Your function should not modify the original array but return a new updated array.",
    "guidance": [
      "Use array methods like map, filter, and some to handle task updates immutably.",
      "Generate unique IDs for new tasks by finding the max existing id and adding 1.",
      "Carefully handle each command type distinctly and return a new updated array without mutating the original."
    ],
    "hints": [
      "For 'add', append a new task object with a unique id and completed set to false.",
      "For 'remove', filter out the task with the given id.",
      "For 'toggle' and 'edit', use map to update matching tasks without altering others."
    ],
    "starterCode": "function todoManager(tasks, command) {\n  // tasks: Array of {id, text, completed}\n  // command: {type, ...args}\n  // Implement your logic here\n}",
    "expectedOutput": "Example:\nconst tasks = [\n  {id: 1, text: 'Buy milk', completed: false},\n  {id: 2, text: 'Walk dog', completed: false}\n];\ntodoManager(tasks, {type: 'toggle', id: 2});\n// returns:\n// [\n//  {id: 1, text: 'Buy milk', completed: false},\n//  {id: 2, text: 'Walk dog', completed: true}\n// ]",
    "concepts": [
      "arrays",
      "objects",
      "immutability",
      "array methods",
      "JavaScript functions"
    ],
    "estimatedTime": "20 minutes",
    "isFeatured": false
  },
  {
    "slug": "refactor-complex-c-banking-system-for-maintainability-and-performance",
    "title": "Refactor Complex C++ Banking System for Maintainability and Performance",
    "language": "cpp",
    "difficulty": "advanced",
    "category": "code-quality",
    "description": "Refactor the provided C++ code of a banking system that handles multiple account types, transactions, and interest calculations. The goal is to improve code quality, maintainability, and performance without changing the system's behavior.",
    "prompt": "You are given a legacy C++ banking system that supports multiple account types (Savings, Checking) and processes deposits, withdrawals, and monthly interest calculations. The current code is monolithic, has duplicated logic, and lacks clear abstractions. Refactor the code to improve modularity, use appropriate object-oriented design patterns, remove code duplication, and optimize performance while preserving the behavior. Ensure your refactored code compiles and produces the same output as the original. Provide clear class and method structures and improve naming conventions for better readability.",
    "guidance": [
      "Identify duplicated code and consolidate it into reusable methods or base classes.",
      "Use inheritance and polymorphism to separate account-specific behaviors.",
      "Aim for clear separation of concerns: transaction handling, interest calculation, and account management.",
      "Ensure your refactoring maintains the same output and performance characteristics."
    ],
    "hints": [
      "Consider creating a base Account class and deriving SavingsAccount and CheckingAccount classes.",
      "Use virtual functions for interest calculation and transaction operations.",
      "Encapsulate transaction logic in a separate method to reduce code repetition."
    ],
    "starterCode": "#include <iostream>\n#include <vector>\nusing namespace std;\n\nclass BankingSystem {\npublic:\n    struct Account {\n        int id;\n        double balance;\n        string type; // \"checking\" or \"savings\"\n    };\n\n    vector<Account> accounts;\n\n    void deposit(int id, double amount) {\n        for (auto &acc : accounts) {\n            if (acc.id == id) {\n                if (acc.type == \"checking\") {\n                    acc.balance += amount;\n                } else if (acc.type == \"savings\") {\n                    acc.balance += amount;\n                }\n            }\n        }\n    }\n\n    void withdraw(int id, double amount) {\n        for (auto &acc : accounts) {\n            if (acc.id == id) {\n                if (acc.type == \"checking\") {\n                    if (acc.balance >= amount) {\n                        acc.balance -= amount;\n                    }\n                } else if (acc.type == \"savings\") {\n                    if (acc.balance >= amount) {\n                        acc.balance -= amount;\n                    }\n                }\n            }\n        }\n    }\n\n    void applyMonthlyInterest() {\n        for (auto &acc : accounts) {\n            if (acc.type == \"savings\") {\n                acc.balance *= 1.01; // 1% interest\n            } else if (acc.type == \"checking\") {\n                acc.balance *= 1.001; // 0.1% interest\n            }\n        }\n    }\n\n    void printBalances() {\n        for (const auto &acc : accounts) {\n            cout << \"Account \" << acc.id << \" (\" << acc.type << \"): $\" << acc.balance << endl;\n        }\n    }\n};\n\nint main() {\n    BankingSystem system;\n    system.accounts.push_back({1, 1000.0, \"checking\"});\n    system.accounts.push_back({2, 2000.0, \"savings\"});\n\n    system.deposit(1, 500);\n    system.withdraw(2, 100);\n    system.applyMonthlyInterest();\n    system.printBalances();\n\n    return 0;\n}",
    "expectedOutput": "Account 1 (checking): $1501.5\nAccount 2 (savings): $1919",
    "concepts": [
      "inheritance",
      "polymorphism",
      "code refactoring",
      "object-oriented design"
    ],
    "estimatedTime": "20 minutes",
    "isFeatured": true
  },
  {
    "slug": "predict-the-output-of-a-basic-for-loop-with-condition",
    "title": "Predict the Output of a Basic For Loop with Condition",
    "language": "javascript",
    "difficulty": "beginner",
    "category": "logic",
    "description": "Analyze the given JavaScript code snippet involving a for loop and conditional statements, then determine the output printed to the console.",
    "prompt": "Consider the following JavaScript code:\n\nfunction printNumbers() {\n  let result = '';\n  for (let i = 1; i <= 5; i++) {\n    if (i % 2 === 0) {\n      result += i + '-even ';\n    } else {\n      result += i + '-odd ';\n    }\n  }\n  console.log(result.trim());\n}\n\nWhat will be printed when printNumbers() is called?",
    "guidance": [
      "Pay attention to how the loop iterates from 1 to 5.",
      "Understand the condition checking if the number is even or odd.",
      "Note how the result string is built during each iteration."
    ],
    "hints": [
      "Remember the modulus operator (%) returns the remainder after division.",
      "Even numbers have a remainder of 0 when divided by 2.",
      "The trim() method removes trailing spaces from the result string."
    ],
    "starterCode": "function printNumbers() {\n  let result = '';\n  for (let i = 1; i <= 5; i++) {\n    if (i % 2 === 0) {\n      result += i + '-even ';\n    } else {\n      result += i + '-odd ';\n    }\n  }\n  console.log(result.trim());\n}\n\nprintNumbers();",
    "expectedOutput": "1-odd 2-even 3-odd 4-even 5-odd",
    "concepts": [
      "for loop",
      "conditionals",
      "string concatenation"
    ],
    "estimatedTime": "10 minutes",
    "isFeatured": true
  },
  {
    "slug": "build-a-real-time-collaborative-todo-list-with-conflict-resolution",
    "title": "Build a Real-Time Collaborative Todo List with Conflict Resolution",
    "language": "javascript",
    "difficulty": "advanced",
    "category": "mini-projects",
    "description": "Create an advanced real-time collaborative todo list application backend function that merges concurrent updates from multiple users while resolving conflicts using operational transformation or CRDT principles in JavaScript.",
    "prompt": "You are tasked with creating a JavaScript function that takes multiple concurrent change logs from different users editing the same todo list and merges them into a consistent, conflict-free document state. Each change log contains additions, deletions, and updates to todo items, identified by unique IDs. Your function must apply operational transformations (OT) or Conflict-free Replicated Data Types (CRDTs) principles to ensure all changes are integrated without overwriting others improperly, maintaining the final todo list consistency regardless of merge order.\n\nInput is an array of change log objects. Your function should return the merged todo list array reflecting all users' changes correctly integrated. Design your solution to handle:\n\n- Insertions of new todo items with unique IDs\n- Updates to todo item content or completion status\n- Deletions of todo items\n- Resolution of simultaneous conflicting updates on the same todo item\n\nProvide the implementation of the mergeTodos(changeLogs) function that returns the final todo list array.",
    "guidance": [
      "Represent each todo item with a unique ID and track timestamps or version counters to resolve conflicting updates.",
      "Implement a method to merge inserts, updates, and deletes that can occur concurrently, ensuring operation commutativity.",
      "Consider using simple CRDT data structures like a Last-Write-Wins (LWW) element set or similar operational transformation logic.",
      "Ensure your solution scales with multiple users and preserves all non-conflicting changes."
    ],
    "hints": [
      "Use timestamps or logical clocks to compare conflicting operations applying the latest one.",
      "Model deletions explicitly as tombstones or versioned flags rather than removing immediately to avoid losing updates.",
      "Focus on designing idempotent and commutative merge steps so the final state is consistent regardless of merge order."
    ],
    "starterCode": "function mergeTodos(changeLogs) {\n  // changeLogs is an array where each element is an array of todo item operations\n  // Each operation can be: { id, content, completed, opType: 'add'|'update'|'delete', timestamp }\n  // Implement your OT or CRDT logic here to merge all logs into one consistent todo list\n\n  // Example return format: [{ id, content, completed }]\n  return [];\n}",
    "expectedOutput": "[\n  { id: '1', content: 'Buy groceries', completed: false },\n  { id: '2', content: 'Fix bug in app', completed: true }\n]",
    "concepts": [
      "Operational Transformation",
      "CRDT",
      "Conflict Resolution",
      "Distributed Systems",
      "JavaScript Data Structures"
    ],
    "estimatedTime": "45 minutes",
    "isFeatured": false
  },
  {
    "slug": "build-a-function-to-group-and-summarize-sales-data-by-category",
    "title": "Build a Function to Group and Summarize Sales Data by Category",
    "language": "python",
    "difficulty": "intermediate",
    "category": "functions",
    "description": "Create a Python function that takes a list of sales records and returns a summary dictionary grouping total sales by product category.",
    "prompt": "Write a function named 'summarize_sales_by_category' that accepts a list of dictionaries. Each dictionary represents a sale with keys 'product', 'category', and 'amount'. The function should return a dictionary where each key is a category and the value is the sum of amounts for that category.",
    "guidance": [
      "Iterate over each sale record in the input list.",
      "Use a dictionary to accumulate the sum of amounts keyed by category.",
      "Ensure the function works efficiently for any number of sales records."
    ],
    "hints": [
      "Use the dict.get method to provide a default value when adding amounts.",
      "Remember to initialize the category sum to zero the first time you encounter it."
    ],
    "starterCode": "def summarize_sales_by_category(sales):\n    # Your code here\n    pass",
    "expectedOutput": "{'Electronics': 450, 'Clothing': 300, 'Books': 150}",
    "concepts": [
      "dictionary",
      "loops",
      "aggregation"
    ],
    "estimatedTime": "10 minutes",
    "isFeatured": false
  },
  {
    "slug": "fix-memory-leak-and-logic-bug-in-custom-linked-list-implementation",
    "title": "Fix Memory Leak and Logic Bug in Custom Linked List Implementation",
    "language": "cpp",
    "difficulty": "advanced",
    "category": "debugging",
    "description": "Identify and fix the memory management and logic bugs in a custom singly linked list class implemented in C++. The list supports insertion and search operations but has subtle issues causing memory leaks and incorrect behavior.",
    "prompt": "You are given a partial implementation of a singly linked list class in C++, which manages integer values. The class supports insertion at the head and a method to check whether a value exists in the list. However, the current implementation contains memory leaks and logical errors that prevent it from working correctly under some conditions. Your task is to identify and fix all such bugs, including but not limited to memory management, pointer handling, and method logic, to make the class robust and leak-free.",
    "guidance": [
      "Check the destructor and methods that allocate or deallocate memory to ensure no leaks occur.",
      "Verify that the search method correctly traverses the entire list and returns the expected result.",
      "Ensure all edge cases (e.g., empty list, single-node insertions) are handled properly."
    ],
    "hints": [
      "Remember to delete all nodes in the destructor to prevent memory leaks.",
      "Watch for missing return statements or infinite loops in your traversal method.",
      "Check if the inserted nodes correctly update the head pointer without losing access to existing nodes."
    ],
    "starterCode": "class LinkedList {\n    struct Node {\n        int data;\n        Node* next;\n        Node(int val) : data(val), next(nullptr) {}\n    };\n    Node* head;\npublic:\n    LinkedList() : head(nullptr) {}\n    ~LinkedList() {\n        // Intended to free all nodes\n        while (head != nullptr) {\n            head = head->next; // BUG: leaks memory!\n        }\n    }\n    void insert(int val) {\n        Node* n = new Node(val);\n        n->next = head;\n        head = n;\n    }\n    bool contains(int val) {\n        Node* current = head;\n        while (current != nullptr) {\n            if (current->data = val) {\n                return true;\n            }\n            current = current->next;\n        }\n        return false;\n    }\n};",
    "expectedOutput": "After fixing, inserting values and searching should produce correct results without memory leaks. For example:\nLinkedList list;\nlist.insert(10);\nlist.insert(20);\nlist.insert(30);\n\nsearching for 20 returns true\nsearching for 40 returns false\nOn destruction, no memory is leaked.",
    "concepts": [
      "Memory management",
      "Pointers and dynamic allocation",
      "Linked list traversal",
      "Destructor implementation"
    ],
    "estimatedTime": "15 minutes",
    "isFeatured": true
  },
  {
    "slug": "refactor-complex-sales-report-query-for-performance-optimization",
    "title": "Refactor Complex Sales Report Query for Performance Optimization",
    "language": "sql",
    "difficulty": "intermediate",
    "category": "optimization",
    "description": "Improve a verbose and inefficient SQL query that generates a monthly sales report by refactoring it into a cleaner, optimized form while maintaining its original behavior.",
    "prompt": "You are given a SQL query that produces a monthly sales report including total sales, number of orders, and average order value per customer. The current query uses multiple nested subqueries and repetitive calculations, making it hard to maintain and slow to execute. Your task is to refactor this query into a more readable and efficient form, using appropriate JOINs, common table expressions (CTEs), and aggregation techniques, without changing the output results.",
    "guidance": [
      "Identify and eliminate redundant calculations or repeated subqueries by consolidating them.",
      "Consider using CTEs to break down the query into logical parts for clarity and reusability."
    ],
    "hints": [
      "Look for opportunities to replace subqueries in SELECT statements with JOINs or window functions.",
      "Check if aggregations can be computed in a single pass rather than multiple separate steps."
    ],
    "starterCode": "SELECT\n  customer_id,\n  (SELECT COUNT(*) FROM orders WHERE customer_id = c.customer_id AND DATE_TRUNC('month', order_date) = DATE_TRUNC('month', CURRENT_DATE)) AS total_orders,\n  (SELECT SUM(amount) FROM orders WHERE customer_id = c.customer_id AND DATE_TRUNC('month', order_date) = DATE_TRUNC('month', CURRENT_DATE)) AS total_sales,\n  (SELECT AVG(amount) FROM orders WHERE customer_id = c.customer_id AND DATE_TRUNC('month', order_date) = DATE_TRUNC('month', CURRENT_DATE)) AS avg_order_value\nFROM customers c\nWHERE EXISTS (SELECT 1 FROM orders o WHERE o.customer_id = c.customer_id AND DATE_TRUNC('month', o.order_date) = DATE_TRUNC('month', CURRENT_DATE))\nORDER BY total_sales DESC;",
    "expectedOutput": "A result set with columns: customer_id, total_orders, total_sales, avg_order_value for all customers who placed orders in the current month, sorted by total_sales descending.",
    "concepts": [
      "SQL optimization",
      "Common Table Expressions (CTEs)",
      "Joins and aggregation"
    ],
    "estimatedTime": "10 minutes",
    "isFeatured": false
  },
  {
    "slug": "predict-output-complex-recursive-function-with-memoization-and-side-effects",
    "title": "Predict Output: Complex Recursive Function with Memoization and Side Effects",
    "language": "javascript",
    "difficulty": "advanced",
    "category": "logic",
    "description": "Analyze the given JavaScript code involving recursion, memoization, and side effects, and predict what the output will be when it is executed.",
    "prompt": "Examine the provided JavaScript function which computes a value recursively and uses memoization alongside side effects that mutate an external array. Determine exactly what will be printed to the console when the function is called with the argument 5.",
    "guidance": [
      "Trace the recursive calls carefully to understand the order in which results are computed.",
      "Consider how the memoization cache is updated and accessed during calls.",
      "Analyze the side effects on the external array and how they affect the final output."
    ],
    "hints": [
      "Pay close attention to when elements are pushed into the external array and how that corresponds to the recursive unwind.",
      "Remember that the function modifies state outside its local scope during execution, affecting console output.",
      "Think about the behavior of short-circuit evaluation with logical operators in JavaScript."
    ],
    "starterCode": "const cache = {};\nconst sideEffectArray = [];\n\nfunction complexFunc(n) {\n  if (cache[n] !== undefined) return cache[n];\n  if (n <= 1) {\n    sideEffectArray.push(n);\n    return n;\n  }\n  const result = complexFunc(n - 1) + complexFunc(n - 2);\n  sideEffectArray.push(result);\n  cache[n] = result;\n  return result;\n}\n\nconsole.log(complexFunc(5));\nconsole.log(sideEffectArray);",
    "expectedOutput": "5\n[1, 0, 1, 2, 3, 5]",
    "concepts": [
      "recursion",
      "memoization",
      "side effects",
      "JavaScript evaluation order"
    ],
    "estimatedTime": "10 minutes",
    "isFeatured": false
  },
  {
    "slug": "refactor-messy-code-to-calculate-the-sum-of-even-numbers",
    "title": "Refactor Messy Code to Calculate the Sum of Even Numbers",
    "language": "python",
    "difficulty": "beginner",
    "category": "code-quality",
    "description": "Improve the readability and quality of a Python function that calculates the sum of even numbers from a list, while keeping the output correct.",
    "prompt": "You are given a Python function that accepts a list of integers and returns the sum of all even numbers in the list. The code works correctly but is messy, hard to read, and uses unnecessary steps. Refactor this function to make it clearer, more readable, and more Pythonic while maintaining exactly the same behavior and output.",
    "guidance": [
      "Focus on improving variable names, simplifying loops or conditionals.",
      "Remove any redundant or unnecessary code.",
      "Use built-in Python features or idioms where appropriate.",
      "Make sure the function output remains exactly the same for all inputs."
    ],
    "hints": [
      "Consider using list comprehensions or generator expressions.",
      "Think about using built-in functions like sum() to reduce code lines.",
      "Avoid unnecessary temporary variables that don't add clarity."
    ],
    "starterCode": "def sum_even_numbers(numbers):\n    total = 0\n    for i in range(len(numbers)):\n        if numbers[i] % 2 == 0:\n            total = total + numbers[i]\n    return total\n\n# Example usage:\nprint(sum_even_numbers([1, 2, 3, 4, 5, 6]))",
    "expectedOutput": "12",
    "concepts": [
      "loops",
      "conditionals",
      "functions",
      "code readability",
      "list comprehensions"
    ],
    "estimatedTime": "10 minutes",
    "isFeatured": true
  },
  {
    "slug": "employee-performance-tracker",
    "title": "Employee Performance Tracker",
    "language": "cpp",
    "difficulty": "intermediate",
    "category": "mini-projects",
    "description": "Build a C++ program to manage and analyze employee performance data by storing, updating, and calculating key statistics from the data.",
    "prompt": "Create a C++ program that enables storing performance scores of multiple employees over several months. Your program should allow the user to input employee names, their monthly performance scores, and then calculate and display the average performance for each employee. Additionally, identify the employee with the highest average score.",
    "guidance": [
      "Use structs or classes to represent an employee with fields for name and a vector/array of performance scores.",
      "Provide functions to input employee data, calculate average scores, and find the top performer.",
      "Handle dynamic input sizes, meaning the number of employees and the number of months can vary based on user input."
    ],
    "hints": [
      "Consider using std::vector for flexibility in storing monthly scores.",
      "A loop can be used to sum up the scores before dividing by the number of months for the average.",
      "Keep track of the highest average score and corresponding employee as you calculate averages."
    ],
    "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n\nstruct Employee {\n    std::string name;\n    std::vector<int> monthlyScores;\n};\n\n// Function prototypes\nvoid inputEmployees(std::vector<Employee>& employees, int employeeCount, int months);\ndouble calculateAverage(const Employee& emp);\nint findTopPerformer(const std::vector<Employee>& employees);\n\nint main() {\n    int employeeCount, months;\n    std::cout << \"Enter number of employees: \";\n    std::cin >> employeeCount;\n    std::cout << \"Enter number of months: \";\n    std::cin >> months;\n\n    std::vector<Employee> employees(employeeCount);\n    inputEmployees(employees, employeeCount, months);\n\n    for (const auto& emp : employees) {\n        std::cout << emp.name << \"'s average score: \" << calculateAverage(emp) << \"\\n\";\n    }\n\n    int topIndex = findTopPerformer(employees);\n    std::cout << \"Top performer: \" << employees[topIndex].name << \" with average score \" << calculateAverage(employees[topIndex]) << \"\\n\";\n\n    return 0;\n}",
    "expectedOutput": "Enter number of employees: 2\nEnter number of months: 3\nEnter name for employee 1: Alice\nEnter 3 monthly scores for Alice: 80 85 90\nEnter name for employee 2: Bob\nEnter 3 monthly scores for Bob: 90 88 91\nAlice's average score: 85\nBob's average score: 89.6667\nTop performer: Bob with average score 89.6667",
    "concepts": [
      "structs",
      "vectors",
      "loops",
      "functions",
      "basic input/output"
    ],
    "estimatedTime": "15 minutes",
    "isFeatured": false
  },
  {
    "slug": "fix-the-logic-bug-in-the-array-frequency-counter",
    "title": "Fix the Logic Bug in the Array Frequency Counter",
    "language": "cpp",
    "difficulty": "intermediate",
    "category": "debugging",
    "description": "The given C++ function is intended to count the frequency of each integer in an input vector and return the result as a map. However, the current implementation produces incorrect frequency counts due to a logic bug. Your task is to identify and fix the bug so that the function returns accurate counts.",
    "prompt": "Given the broken C++ function that counts the frequency of integers in a vector, identify and fix the logic bug so the function works correctly. The function should take a vector<int> as input and return a map<int, int> where each key is a unique integer from the vector and its value is the frequency of that integer in the vector.",
    "guidance": [
      "Review how the frequency map is updated within the loop.",
      "Check whether the existing counts are being correctly incremented for repeated elements."
    ],
    "hints": [
      "Look at how the map is accessed and updated inside the loop; there might be an incorrect assignment instead of increment.",
      "Consider what happens when the element is already present in the map and the current implementation overwrites rather than increments the count."
    ],
    "starterCode": "#include <vector>\n#include <map>\n\nstd::map<int, int> countFrequencies(const std::vector<int>& nums) {\n    std::map<int, int> freq;\n    for (int num : nums) {\n        if (freq.find(num) != freq.end()) {\n            freq[num] = 1; // Bug here: resets count instead of incrementing\n        } else {\n            freq[num] = 1;\n        }\n    }\n    return freq;\n}",
    "expectedOutput": "For input vector {4, 2, 4, 3, 2, 4}, the function should return a map with counts: {4:3, 2:2, 3:1}",
    "concepts": [
      "map usage",
      "loops",
      "conditional logic",
      "frequency counting"
    ],
    "estimatedTime": "10 minutes",
    "isFeatured": true
  },
  {
    "slug": "refactor-complex-data-aggregation-and-filtering-in-javascript",
    "title": "Refactor Complex Data Aggregation and Filtering in JavaScript",
    "language": "javascript",
    "difficulty": "advanced",
    "category": "code-quality",
    "description": "Improve the quality and maintainability of a long, nested JavaScript function that processes and aggregates data from a complex array of objects while preserving its original behavior and performance.",
    "prompt": "You are given a function `processUserData` that takes an array of user activity objects and returns a summary report. The existing function works correctly but is difficult to read, deeply nested, and inefficient in places. Your challenge is to refactor this function to improve readability, maintainability, and efficiency without changing its output.\n\nRequirements:\n- Break down complex logic into smaller reusable functions.\n- Remove unnecessary nested loops and if statements.\n- Use modern ES6+ features where appropriate.\n- Ensure that the behavior and output remain exactly the same.\n\nAnalyze the provided code, refactor it, then test to verify the result matches the original output.",
    "guidance": [
      "Identify repeated patterns and extract helper functions for clarity.",
      "Use array methods like map, filter, reduce to simplify iteration and aggregation.",
      "Replace nested conditional statements with early returns or guard clauses.",
      "Consider using destructuring, default parameters, and meaningful variable names."
    ],
    "hints": [
      "Look for opportunities to use reduce instead of manual accumulators.",
      "Avoid mutating the input data for purity and side-effect prevention.",
      "Split one big function into multiple smaller functions with clear responsibilities."
    ],
    "starterCode": "function processUserData(users) {\n  const result = {};\n  for (let i = 0; i < users.length; i++) {\n    const user = users[i];\n    if (user && user.activities && user.activities.length > 0) {\n      for (let j = 0; j < user.activities.length; j++) {\n        const activity = user.activities[j];\n        if (activity.type) {\n          if (!result[activity.type]) {\n            result[activity.type] = { count: 0, users: new Set() };\n          }\n          result[activity.type].count++;\n          result[activity.type].users.add(user.id);\n        }\n      }\n    }\n  }\n  // Convert sets to counts\n  const summary = {};\n  for (const type in result) {\n    if (Object.prototype.hasOwnProperty.call(result, type)) {\n      summary[type] = {\n        totalActivities: result[type].count,\n        uniqueUsers: result[type].users.size\n      };\n    }\n  }\n  return summary;\n}",
    "expectedOutput": "{\"login\":{\"totalActivities\":7,\"uniqueUsers\":3},\"purchase\":{\"totalActivities\":3,\"uniqueUsers\":2},\"logout\":{\"totalActivities\":5,\"uniqueUsers\":3}}",
    "concepts": [
      "code refactoring",
      "ES6 array methods",
      "code readability",
      "functional programming"
    ],
    "estimatedTime": "15 minutes",
    "isFeatured": false
  },
  {
    "slug": "build-a-concurrent-task-scheduler-with-priority-queues",
    "title": "Build a Concurrent Task Scheduler with Priority Queues",
    "language": "python",
    "difficulty": "advanced",
    "category": "mini-projects",
    "description": "Create a Python mini-project that simulates a concurrent task scheduler managing tasks with different priorities. The scheduler should execute tasks in priority order and support concurrent execution with a fixed number of worker threads.",
    "prompt": "Design and implement a task scheduler in Python that handles multiple tasks assigned with different priority levels. The scheduler must execute tasks in order of highest priority first and support concurrent execution using a fixed pool of worker threads. Tasks are represented as functions with variable execution times. Your scheduler should allow adding new tasks dynamically and should output the start and finish times of each task. Ensure thread-safe access to the internal data and proper shutdown of workers once all tasks finish.",
    "guidance": [
      "Use Python's 'queue.PriorityQueue' to manage tasks based on priority.",
      "Utilize the 'threading' module to create a pool of worker threads.",
      "Ensure thread-safe operations when adding and removing tasks from the queue.",
      "Implement graceful shutdown for worker threads once all tasks are completed."
    ],
    "hints": [
      "Represent tasks as tuples (priority, task_id, task_function) to ensure reliable priority sorting.",
      "Use threading.Event or a sentinel value to signal workers to exit after processing all tasks.",
      "Consider using thread-safe print or logging to output start and finish times in real-time."
    ],
    "starterCode": "import threading\nimport queue\nimport time\n\ndef example_task(duration, task_name):\n    print(f\"Starting {task_name}\")\n    time.sleep(duration)\n    print(f\"Finished {task_name}\")\n\nclass TaskScheduler:\n    def __init__(self, num_workers):\n        self.task_queue = queue.PriorityQueue()\n        self.workers = []\n        self.num_workers = num_workers\n\n    def add_task(self, priority, task_id, task_func):\n        # Add a task to the priority queue\n        pass\n\n    def worker(self):\n        while True:\n            # Get the next task and execute\n            pass\n\n    def run(self):\n        # Start worker threads\n        pass\n\n    def wait_completion(self):\n        # Wait for all tasks to complete and shutdown workers\n        pass\n\n# Example usage:\nscheduler = TaskScheduler(num_workers=3)\nscheduler.add_task(2, 'task1', lambda: example_task(2, 'task1'))\nscheduler.add_task(1, 'task2', lambda: example_task(1, 'task2'))\nscheduler.add_task(3, 'task3', lambda: example_task(3, 'task3'))\nscheduler.run()\nscheduler.wait_completion()",
    "expectedOutput": "Starting task2\nFinished task2\nStarting task1\nFinished task1\nStarting task3\nFinished task3",
    "concepts": [
      "threading",
      "priority queue",
      "concurrency",
      "thread-safe programming"
    ],
    "estimatedTime": "45 minutes",
    "isFeatured": false
  },
  {
    "slug": "create-a-simple-employee-and-department-tables-with-basic-queries",
    "title": "Create a Simple Employee and Department Tables with Basic Queries",
    "language": "sql",
    "difficulty": "beginner",
    "category": "data-modeling",
    "description": "Build and query basic employee and department tables to practice simple SQL data modeling and retrieval.",
    "prompt": "You are tasked with creating two tables, Employees and Departments, for a small company database. The Employees table should store employee_id, name, and department_id. The Departments table should store department_id and department_name. After creating the tables and inserting sample data, write a query to list all employees along with the name of the department they belong to.",
    "guidance": [
      "Start by creating the Departments table with department_id as the primary key.",
      "Create the Employees table with a foreign key reference to Departments.",
      "Insert at least 3 departments and 5 employees distributed across these departments.",
      "Write a SELECT query using a JOIN to combine employee names with their department names."
    ],
    "hints": [
      "Use CREATE TABLE statements with appropriate data types (e.g., INT, VARCHAR).",
      "Remember to use INNER JOIN to combine Employees and Departments based on department_id.",
      "Use aliasing for readability, e.g., SELECT e.name, d.department_name FROM Employees e JOIN Departments d ON e.department_id = d.department_id."
    ],
    "starterCode": "CREATE TABLE Departments (department_id INT PRIMARY KEY, department_name VARCHAR(50));\n\nCREATE TABLE Employees (employee_id INT PRIMARY KEY, name VARCHAR(50), department_id INT);\n\n-- Insert sample data here\n\n-- Write your SELECT query here",
    "expectedOutput": "name     | department_name\n---------|----------------\nAlice    | Sales\nBob      | Marketing\nCharlie  | IT\nDiana    | IT\nEve      | Sales",
    "concepts": [
      "CREATE TABLE",
      "INSERT INTO",
      "INNER JOIN",
      "SELECT"
    ],
    "estimatedTime": "10 minutes",
    "isFeatured": true
  },
  {
    "slug": "expense-tracker-cli-application",
    "title": "Expense Tracker CLI Application",
    "language": "python",
    "difficulty": "intermediate",
    "category": "mini-projects",
    "description": "Build a command-line expense tracker application in Python that allows users to add, view, and categorize their expenses. The program should support adding multiple expenses, filtering expenses by category, and displaying the total amount spent.",
    "prompt": "Create a Python program that functions as an expense tracker. Your application should allow users to:\n\n1. Add expenses including amount, description, and category.\n2. View all added expenses in a readable format.\n3. Filter expenses by category to see only expenses related to that category.\n4. Calculate and show the total amount spent across all expenses.\n\nYour program should continue to accept commands until the user decides to exit.\n\nImplement this functionality using functions and a list to store expense data as dictionaries.",
    "guidance": [
      "Create a function to add an expense capturing amount, description, and category.",
      "Use a list to store all expense entries as dictionaries.",
      "Create functions to filter expenses by category and calculate the total amount spent.",
      "Implement a simple user interface loop to accept user commands until they choose to exit."
    ],
    "hints": [
      "Use dictionaries with keys like 'amount', 'description', and 'category' to represent each expense.",
      "Consider using a while loop with a menu system to prompt the user for actions.",
      "When filtering expenses, loop through the stored list and only print entries matching the category."
    ],
    "starterCode": "def add_expense(expenses):\n    # Implement adding an expense\n    pass\n\ndef view_expenses(expenses):\n    # Implement viewing all expenses\n    pass\n\ndef filter_expenses(expenses, category):\n    # Implement filtering expenses by category\n    pass\n\ndef total_expenses(expenses):\n    # Implement calculation of total amount spent\n    pass\n\ndef main():\n    expenses = []\n    while True:\n        print(\"\\n1. Add expense\\n2. View expenses\\n3. Filter expenses by category\\n4. Show total spent\\n5. Exit\")\n        choice = input(\"Choose an option: \")\n        if choice == '1':\n            add_expense(expenses)\n        elif choice == '2':\n            view_expenses(expenses)\n        elif choice == '3':\n            category = input(\"Enter category to filter: \")\n            filter_expenses(expenses, category)\n        elif choice == '4':\n            total = total_expenses(expenses)\n            print(f\"Total spent: ${total:.2f}\")\n        elif choice == '5':\n            print(\"Goodbye!\")\n            break\n        else:\n            print(\"Invalid choice, please try again.\")\n\nif __name__ == '__main__':\n    main()",
    "expectedOutput": "Example run (user inputs are shown after prompts):\n\n1. Add expense\n2. View expenses\n3. Filter expenses by category\n4. Show total spent\n5. Exit\nChoose an option: 1\nEnter amount: 25.5\nEnter description: Lunch\nEnter category: Food\n\n1. Add expense\n2. View expenses\n3. Filter expenses by category\n4. Show total spent\n5. Exit\nChoose an option: 2\nExpenses:\n- $25.50 | Lunch | Food\n\n1. Add expense\n2. View expenses\n3. Filter expenses by category\n4. Show total spent\n5. Exit\nChoose an option: 4\nTotal spent: $25.50\n\n1. Add expense\n2. View expenses\n3. Filter expenses by category\n4. Show total spent\n5. Exit\nChoose an option: 5\nGoodbye!",
    "concepts": [
      "functions",
      "lists",
      "dictionaries",
      "loops"
    ],
    "estimatedTime": "15 minutes",
    "isFeatured": false
  },
  {
    "slug": "predict-the-output-of-nested-generator-and-coroutine-logic-in-python",
    "title": "Predict the Output of Nested Generator and Coroutine Logic in Python",
    "language": "python",
    "difficulty": "advanced",
    "category": "logic",
    "description": "Analyze a complex Python function that uses nested generators, coroutines, and yield expressions to predict its output. This challenge tests your understanding of Python's generator mechanics and flow control.",
    "prompt": "Consider the following Python code snippet involving nested generators and the send() method on coroutines. Predict the exact sequence of printed output when the code is executed. Do not run the code; rely on logic and deep understanding of generator flow control and interaction. Explain your reasoning in comments.",
    "guidance": [
      "Focus on how send() affects the yield expressions and how values are passed between generators.",
      "Pay attention to the order of generator activation and suspension points.",
      "Remember that a generator's yield expression both outputs a value and receives a value via send()."
    ],
    "hints": [
      "Trace the code line-by-line, simulating the generator states manually.",
      "Keep track of what each yield expression returns and what values are sent back to them.",
      "Note when the control switches between gen1 and gen2 and how their outputs interleave."
    ],
    "starterCode": "def gen2():\n    val = yield 'Start gen2'\n    val2 = yield val + 5\n    yield val2 * 2\n\ndef gen1():\n    g = gen2()\n    x = yield next(g)\n    y = yield g.send(x + 1)\n    yield g.send(y + 2)\n\n\nrunner = gen1()\nprint(next(runner))       # prime gen1\nprint(runner.send(3))    # send 3 into gen1\nprint(runner.send(4))    # send 4 into gen1\nprint(next(runner))      # final output",
    "expectedOutput": "'Start gen2'\n9\n12\n12",
    "concepts": [
      "generators",
      "coroutines",
      "yield and send",
      "flow control"
    ],
    "estimatedTime": "10 minutes",
    "isFeatured": false
  },
  {
    "slug": "refactor-a-function-to-improve-array-filtering-and-mapping-logic",
    "title": "Refactor a Function to Improve Array Filtering and Mapping Logic",
    "language": "javascript",
    "difficulty": "intermediate",
    "category": "code-quality",
    "description": "Refactor the provided JavaScript function to improve readability, reduce complexity, and maintain the same output when filtering and mapping an array of user objects.",
    "prompt": "The function below filters an array of user objects to include only those users who are active and older than a certain age. It then maps the filtered users to a new array containing only the id and name properties. Refactor the code to make it cleaner and more readable while preserving the exact output behavior.",
    "guidance": [
      "Focus on improving the readability and maintainability of the code without changing its functionality.",
      "Consider breaking down complex expressions or chaining for clarity.",
      "Ensure the function returns the exact same output for the same input."
    ],
    "hints": [
      "Use descriptive variable names for intermediate results if necessary.",
      "Consider using array methods like filter and map separately rather than inline chaining.",
      "Avoid redundant checks or unnecessary comments."
    ],
    "starterCode": "function getActiveUserSummaries(users, minAge) {\n  return users.filter(function(user) {\n    return user.active === true && user.age > minAge;\n  }).map(function(user) {\n    return {id: user.id, name: user.name};\n  });\n}",
    "expectedOutput": "[\n  { id: 1, name: 'Alice' },\n  { id: 3, name: 'Charlie' }\n]",
    "concepts": [
      "array filtering",
      "array mapping",
      "code readability",
      "function refactoring"
    ],
    "estimatedTime": "10 minutes",
    "isFeatured": false
  },
  {
    "slug": "advanced-social-network-graph-analyzer-in-python",
    "title": "Advanced Social Network Graph Analyzer in Python",
    "language": "python",
    "difficulty": "advanced",
    "category": "mini-projects",
    "description": "Build a Python mini-project that processes and analyzes a social network graph to extract insights such as influential users, community detection, and shortest connection paths.",
    "prompt": "You are tasked to create a Python program that models a social network graph where users are nodes and friendships are edges. Your program should support the following functionalities: 1) Add users and friendships, 2) Detect communities using a clustering algorithm, 3) Identify the top 3 most influential users based on the number of connections and centrality, and 4) Find the shortest connection path between two given users. Implement efficient data structures and graph algorithms to handle these operations on potentially large datasets.",
    "guidance": [
      "Use adjacency lists or dictionaries to represent the graph for efficient relationship lookups.",
      "Consider algorithms like BFS or Dijkstra for shortest path calculations.",
      "Explore community detection algorithms such as Girvan-Newman or Louvain method for clustering.",
      "Develop a centrality metric (degree centrality or betweenness centrality) to rank user influence."
    ],
    "hints": [
      "Leverage collections like defaultdict for graph construction to simplify edge insertions.",
      "Caching intermediate results like shortest paths or clustering outputs can improve performance.",
      "Use Python libraries like networkx if allowed for prototyping; otherwise, implement core graph algorithms yourself."
    ],
    "starterCode": "class SocialNetworkGraph:\n    def __init__(self):\n        self.graph = {}\n\n    def add_user(self, user_id):\n        if user_id not in self.graph:\n            self.graph[user_id] = set()\n\n    def add_friendship(self, user1, user2):\n        self.add_user(user1)\n        self.add_user(user2)\n        self.graph[user1].add(user2)\n        self.graph[user2].add(user1)\n\n    def find_shortest_path(self, start_user, end_user):\n        # Implement BFS or other algorithm\n        pass\n\n    def detect_communities(self):\n        # Implement community detection algorithm\n        pass\n\n    def get_top_influential_users(self, top_n=3):\n        # Implement centrality measure and ranking\n        pass\n\n# Example usage:\n# sn = SocialNetworkGraph()\n# sn.add_friendship('Alice', 'Bob')\n# sn.add_friendship('Bob', 'Charlie')\n# print(sn.find_shortest_path('Alice', 'Charlie'))",
    "expectedOutput": "For the sample graph where Alice is connected to Bob and Bob to Charlie, the shortest path from Alice to Charlie should output ['Alice', 'Bob', 'Charlie']. Community detection may yield one community containing all three users. The top influential user would be Bob with 2 connections.",
    "concepts": [
      "Graph Data Structures",
      "Graph Algorithms",
      "Community Detection",
      "Centrality Measures"
    ],
    "estimatedTime": "60 minutes",
    "isFeatured": true
  },
  {
    "slug": "predict-the-output-of-a-recursive-memoization-with-mutable-default-argument",
    "title": "Predict the Output of a Recursive Memoization with Mutable Default Argument",
    "language": "python",
    "difficulty": "advanced",
    "category": "logic",
    "description": "Analyze a Python function that uses recursion combined with mutable default arguments and memoization, then predict the exact printed output when the function is called.",
    "prompt": "Consider the following Python function `complex_sequence`. It recursively computes values using memoization but also uses a list as a mutable default argument. Predict the exact printed output after the function call `complex_sequence(5)`.\n\nExplain the reasoning behind the output including the role of the mutable default argument and recursion steps.",
    "guidance": [
      "Examine how mutable default arguments behave in recursive function calls.",
      "Understand the memoization dictionary and how it stores intermediate results.",
      "Trace the recursion depth and values returned at each step carefully."
    ],
    "hints": [
      "Mutable default arguments retain changes across all recursive calls within the same invocation.",
      "Memoization dictionary keys correspond to specific input values for which results are cached.",
      "Focus on how the `history` list is updated and printed during recursion."
    ],
    "starterCode": "def complex_sequence(n, memo={}, history=[]):\n    if n in memo:\n        history.append(memo[n])\n        print(f'Using cached value for {n}: {memo[n]}, history: {history}')\n        return memo[n]\n    if n <= 1:\n        memo[n] = n\n        history.append(n)\n        print(f'Base case for {n}, history: {history}')\n        return n\n    result = complex_sequence(n - 1, memo, history) + 2 * complex_sequence(n - 2, memo, history)\n    memo[n] = result\n    history.append(result)\n    print(f'Computed value for {n}: {result}, history: {history}')\n    return result\n\ncomplex_sequence(5)",
    "expectedOutput": "Base case for 1, history: [1]\nBase case for 0, history: [1, 0]\nComputed value for 2: 1, history: [1, 0, 1]\nUsing cached value for 1: 1, history: [1, 0, 1, 1]\nComputed value for 3: 3, history: [1, 0, 1, 1, 3]\nUsing cached value for 2: 1, history: [1, 0, 1, 1, 3, 1]\nUsing cached value for 1: 1, history: [1, 0, 1, 1, 3, 1, 1]\nComputed value for 4: 5, history: [1, 0, 1, 1, 3, 1, 1, 5]\nUsing cached value for 3: 3, history: [1, 0, 1, 1, 3, 1, 1, 5, 3]\nComputed value for 5: 11, history: [1, 0, 1, 1, 3, 1, 1, 5, 3, 11]",
    "concepts": [
      "Recursion",
      "Memoization",
      "Mutable Default Arguments",
      "Function Call Stack"
    ],
    "estimatedTime": "10 minutes",
    "isFeatured": true
  },
  {
    "slug": "refactor-messy-c-code-for-calculating-statistics-on-an-integer-array",
    "title": "Refactor Messy C++ Code for Calculating Statistics on an Integer Array",
    "language": "cpp",
    "difficulty": "intermediate",
    "category": "code-quality",
    "description": "Improve and clean up a provided C++ function that calculates the minimum, maximum, and average of an integer array while maintaining the same behavior.",
    "prompt": "Given the provided C++ function messyStats, refactor the code to improve readability, efficiency, and maintainability without changing its output or behavior. The function takes a vector of integers and returns a tuple containing the minimum value, maximum value, and average (as a double) of the integers in the vector.\n\nKeep the same function signature and behavior, but improve variable naming, reduce redundancies, and structure the logic more cleanly.",
    "guidance": [
      "Focus on improving variable names and removing unnecessary variables or repeated computations.",
      "Consider early exits or handling edge cases more cleanly, such as empty input.",
      "Consolidate loops if possible to improve efficiency."
    ],
    "hints": [
      "Use descriptive variable names like minVal and maxVal instead of single letters.",
      "Calculate sum, min, and max in a single pass instead of multiple loops.",
      "Handle the empty vector case before processing to avoid undefined behavior."
    ],
    "starterCode": "#include <vector>\n#include <tuple>\n#include <limits>\n\nstd::tuple<int, int, double> messyStats(const std::vector<int>& nums) {\n    if (nums.size() == 0) {\n        return std::make_tuple(0, 0, 0.0);\n    }\n    int a = nums[0];\n    int b = nums[0];\n    int c = 0;\n    for (int i = 0; i < (int)nums.size(); i++) {\n        if (nums[i] > b) {\n            b = nums[i];\n        }\n    }\n    for (int i = 0; i < (int)nums.size(); i++) {\n        if (nums[i] < a) {\n            a = nums[i];\n        }\n    }\n    for (int j = 0; j < (int)nums.size(); j++) {\n        c += nums[j];\n    }\n    double d = (double)c / (double)nums.size();\n    return std::make_tuple(a, b, d);\n}\n",
    "expectedOutput": "For input {4, 8, 6, 3, 9}: (3, 9, 6.0)\nFor empty input {}: (0, 0, 0.0)",
    "concepts": [
      "Code Refactoring",
      "Loops",
      "Variable Naming",
      "Efficiency"
    ],
    "estimatedTime": "10 minutes",
    "isFeatured": true
  },
  {
    "slug": "create-a-function-to-get-employee-names-by-department",
    "title": "Create a Function to Get Employee Names by Department",
    "language": "sql",
    "difficulty": "beginner",
    "category": "queries",
    "description": "Write a SQL function that returns a list of employee names for a given department from an employees table.",
    "prompt": "Create a SQL function named get_employee_names_by_department that accepts a department name as an argument and returns all employee names working in that department. Assume there is a table named employees with columns id, name, and department.",
    "guidance": [
      "Use a SELECT statement within the function to filter employees by the department argument.",
      "Return the employee names as a set of rows or a table depending on your SQL dialect."
    ],
    "hints": [
      "Use the WHERE clause to filter rows based on the department column.",
      "If your SQL dialect supports RETURN TABLE functions, use that to list all matching employees."
    ],
    "starterCode": "CREATE FUNCTION get_employee_names_by_department(dept_name VARCHAR)\nRETURNS TABLE(name VARCHAR) AS $$\nBEGIN\n  -- Your code here\nEND;\n$$ LANGUAGE plpgsql;",
    "expectedOutput": "Calling get_employee_names_by_department('Sales') returns a list of names of employees in the Sales department.",
    "concepts": [
      "basic SQL SELECT",
      "functions",
      "WHERE clause"
    ],
    "estimatedTime": "10 minutes",
    "isFeatured": true
  },
  {
    "slug": "refactor-a-sql-query-to-use-simple-aggregation-instead-of-subqueries",
    "title": "Refactor a SQL Query to Use Simple Aggregation Instead of Subqueries",
    "language": "sql",
    "difficulty": "beginner",
    "category": "optimization",
    "description": "Improve the readability and performance of a SQL query that calculates total sales per customer by refactoring it from using multiple subqueries to a clean aggregation using GROUP BY.",
    "prompt": "You are given a query that calculates the total sales amount for each customer by using multiple correlated subqueries. Refactor this query to remove the subqueries and instead use a single GROUP BY clause with aggregation to achieve the same results more efficiently and clearly.",
    "guidance": [
      "Understand the current logic and identify the repeated subqueries.",
      "Replace the subqueries with a simple JOIN and GROUP BY on the sales table.",
      "Test the refactored query to ensure it produces the same output."
    ],
    "hints": [
      "Think about how SUM() and GROUP BY can aggregate values per customer.",
      "Joining the customers and sales tables first helps to aggregate sales per customer easily."
    ],
    "starterCode": "SELECT\n  c.customer_id,\n  c.customer_name,\n  (SELECT SUM(sale_amount) FROM sales s WHERE s.customer_id = c.customer_id) AS total_sales\nFROM customers c;",
    "expectedOutput": "A list of customers with their respective total sales summed up, matching the original query's output but achieved without subqueries.",
    "concepts": [
      "SQL aggregation",
      "GROUP BY clause",
      "JOIN operations",
      "query optimization"
    ],
    "estimatedTime": "10 minutes",
    "isFeatured": false
  },
  {
    "slug": "write-a-sql-function-to-calculate-the-average-salary-from-employee-table",
    "title": "Write a SQL Function to Calculate the Average Salary from Employee Table",
    "language": "sql",
    "difficulty": "beginner",
    "category": "queries",
    "description": "Create a SQL function that calculates the average salary of all employees in a given department using a simple SELECT and AVG aggregate function.",
    "prompt": "Write a SQL function named `GetAverageSalary` that accepts a department ID as input and returns the average salary of all employees in that department. Assume you have an `Employees` table with columns `EmployeeID`, `DepartmentID`, and `Salary`. Your function should handle the case where there are no employees in the department by returning NULL.",
    "guidance": [
      "Use the AVG() aggregate function to calculate the average salary.",
      "Filter rows by the given DepartmentID in the WHERE clause.",
      "Return the result from within the function."
    ],
    "hints": [
      "Recall that AVG function ignores NULL values automatically.",
      "Make sure your function uses correct syntax for creating scalar functions in your SQL dialect."
    ],
    "starterCode": "CREATE FUNCTION GetAverageSalary(@DeptID INT)\nRETURNS FLOAT\nAS\nBEGIN\n    -- Write your query here\n    RETURN NULL\nEND",
    "expectedOutput": "If Employees table has salaries (50000, 70000, 60000) in department 2, then GetAverageSalary(2) should return 60000.",
    "concepts": [
      "SQL functions",
      "Aggregate functions",
      "Filtering with WHERE clause"
    ],
    "estimatedTime": "10 minutes",
    "isFeatured": false
  },
  {
    "slug": "build-a-python-expense-tracker-with-categorization-and-summaries",
    "title": "Build a Python Expense Tracker with Categorization and Summaries",
    "language": "python",
    "difficulty": "intermediate",
    "category": "mini-projects",
    "description": "Create a Python mini-project to manage daily expenses, categorize them, and generate summary reports for monthly spending by category.",
    "prompt": "You need to build a simple expense tracker program in Python. Your program will allow adding daily expenses with an amount, a category (like Food, Transport, Utilities), and a date. It should store the expenses in an appropriate data structure. The program should then be able to generate a summary report that totals spending by category for a given month and year. Implement the following functions:\n\n1. add_expense(amount, category, date) - Adds an expense to the tracker.\n2. monthly_summary(year, month) - Returns a dictionary with categories as keys and total spendings as values for the specified month.\n\nMake sure your program can handle multiple expenses in the same category and different categories per month.",
    "guidance": [
      "Use a list to store expense entries as dictionaries or named tuples with fields for amount, category, and date.",
      "Parse and manipulate dates using the datetime module to filter expenses by month and year.",
      "Aggregate expenses by category using a dictionary within the summary function."
    ],
    "hints": [
      "To filter expenses by month and year, consider extracting year and month from the date object.",
      "Initialize your summary dictionary with zero values for unseen categories or use defaultdict from collections.",
      "Remember to convert input strings to appropriate types when adding expenses, if you extend the project."
    ],
    "starterCode": "from datetime import datetime\n\nexpenses = []\n\ndef add_expense(amount, category, date):\n    \"\"\"Add an expense: amount as float, category as string, date as datetime.date.\"\"\"\n    expenses.append({'amount': amount, 'category': category, 'date': date})\n\n\ndef monthly_summary(year, month):\n    \"\"\"Return a dict of total expenses by category for given year and month.\"\"\"\n    summary = {}\n    # Your code here\n    return summary",
    "expectedOutput": "{'Food': 150.0, 'Transport': 75.5, 'Utilities': 100.0}",
    "concepts": [
      "lists",
      "dictionaries",
      "datetime handling",
      "aggregation"
    ],
    "estimatedTime": "10 minutes",
    "isFeatured": true
  },
  {
    "slug": "fix-bug-in-parallel-fibonacci-computation-with-memoization",
    "title": "Fix Bug in Parallel Fibonacci Computation with Memoization",
    "language": "python",
    "difficulty": "advanced",
    "category": "debugging",
    "description": "Debug and fix the given Python code that aims to compute Fibonacci numbers efficiently using recursion with memoization and parallel execution. The current implementation has subtle bugs causing incorrect results and inefficient execution.",
    "prompt": "You are given a Python function designed to calculate a list of Fibonacci numbers for multiple input values concurrently using recursion, memoization, and multiprocessing. However, the code contains bugs that lead to wrong results and runtime errors. Your task is to identify and fix these bugs so that the function returns correct Fibonacci numbers for each input and utilizes multiprocessing properly without errors.",
    "guidance": [
      "Check the proper use and sharing of memoization cache among concurrent processes.",
      "Ensure the multiprocessing part initializes and collects results correctly.",
      "Review recursive Fibonacci logic for correctness under memoization."
    ],
    "hints": [
      "Memoization dictionary should not be shared across processes by passing it as a function argument.",
      "Python multiprocessing pools require careful handling of function arguments and return values.",
      "Check base cases of the Fibonacci function and how recursion results are combined."
    ],
    "starterCode": "import multiprocessing\n\nmemo = {0: 0, 1: 1}\n\ndef fib(n, memo=memo):\n    if n in memo:\n        return memo[n]\n    memo[n] = fib(n-1, memo) + fib(n-2, memo)\n    return memo[n]\n\ndef parallel_fib(numbers):\n    with multiprocessing.Pool() as pool:\n        results = pool.map(fib, numbers)\n    return results\n\ninputs = [35, 36, 37]\nprint(parallel_fib(inputs))",
    "expectedOutput": "[9227465, 14930352, 24157817]",
    "concepts": [
      "recursion",
      "memoization",
      "multiprocessing",
      "debugging"
    ],
    "estimatedTime": "15 minutes",
    "isFeatured": false
  },
  {
    "slug": "build-a-high-performance-memoized-fibonacci-function-using-c-templates",
    "title": "Build a High-Performance Memoized Fibonacci Function Using C++ Templates",
    "language": "cpp",
    "difficulty": "advanced",
    "category": "functions",
    "description": "Create an advanced C++ function that computes Fibonacci numbers efficiently using both memoization and template metaprogramming techniques to optimize compile-time and run-time performance.",
    "prompt": "Write a function `constexpr unsigned long long memoizedFibonacci(unsigned int n)` that calculates the nth Fibonacci number. The function should use memoization to cache previously computed results for run-time calls and also utilize template metaprogramming to enable compile-time computation for constant expressions where possible. You must ensure the function is safe for large inputs (up to 93) without integer overflow in unsigned long long. Avoid redundant calculations and optimize both compile-time and run-time efficiency.",
    "guidance": [
      "Design a helper structure using templates to compute Fibonacci numbers at compile-time for constant values of n.",
      "Implement memoization using a static cache or a suitable in-function mechanism to speed up run-time calls.",
      "Ensure your solution handles both compile-time (`constexpr`) contexts and run-time calls seamlessly.",
      "Consider using constexpr if and inline static variables for caching in C++17 and later."
    ],
    "hints": [
      "Use template specialization to define base cases for Fibonacci (e.g., for 0 and 1).",
      "Static arrays or maps can hold cached values for run-time memoization.",
      "Leveraging constexpr functions with inline variables allows cache sharing across calls."
    ],
    "starterCode": "constexpr unsigned long long compileTimeFib(unsigned int n) {\n    if (n == 0) return 0;\n    if (n == 1) return 1;\n    return compileTimeFib(n - 1) + compileTimeFib(n - 2);\n}\n\nunsigned long long memoizedFibonacci(unsigned int n) {\n    // TODO: Implement memoized Fibonacci function\n    return 0;\n}",
    "expectedOutput": "memoizedFibonacci(10) == 55\nmemoizedFibonacci(40) == 102334155\nconstexpr auto val = memoizedFibonacci(20); // val == 6765 (computed at compile-time if possible)",
    "concepts": [
      "memoization",
      "template metaprogramming",
      "constexpr functions",
      "optimization"
    ],
    "estimatedTime": "15 minutes",
    "isFeatured": true
  },
  {
    "slug": "advanced-expense-tracker-with-recurring-transactions-and-filters",
    "title": "Advanced Expense Tracker with Recurring Transactions and Filters",
    "language": "javascript",
    "difficulty": "advanced",
    "category": "mini-projects",
    "description": "Build a robust expense tracking function that manages one-time and recurring transactions, supports dynamic filtering by categories and date ranges, and returns detailed summaries with optimized performance.",
    "prompt": "Create a JavaScript function named `expenseTracker` that takes an array of transactions and an options object to generate a detailed expense summary. Transactions can be one-time or recurring. Each transaction object contains: `id` (string), `amount` (number), `date` (ISO string), `category` (string), and optional `recurrence` (object with `interval` in days and `endDate` as ISO string). Your function must: 1) Expand recurring transactions to all occurrences within their recurrence period. 2) Filter transactions by optional category array and date range (startDate, endDate) provided in the options. 3) Return an object with total spent, per-category spending, and filtered transaction list sorted by date ascending. 4) Handle large datasets efficiently, avoiding unnecessary computations. Ensure correct handling of edge cases such as overlapping filters and partial recurrence periods.",
    "guidance": [
      "Expand recurring transactions into individual occurrences up to the specified `endDate`, but only generate occurrences within the filter date range to optimize performance.",
      "Apply filters strictly: if categories or date range filters are provided, include only matching transactions in the result and summary calculations.",
      "Return results in the exact structure: { totalSpent: number, perCategory: object, transactions: array }, where `perCategory` maps category names to sums and `transactions` is sorted ascending by date."
    ],
    "hints": [
      "Use a generator or lazy evaluation approach to handle recurring transactions efficiently, especially if the total occurrence count is large.",
      "Convert date strings to Date objects once for comparisons to improve performance.",
      "Be cautious with time boundaries in filtering; include transactions on the startDate and endDate dates."
    ],
    "starterCode": "function expenseTracker(transactions, options = {}) {\n  // options = { categories: array of strings, startDate: ISO string, endDate: ISO string }\n\n  // Your code here\n}",
    "expectedOutput": "{\n  totalSpent: 350.50,\n  perCategory: {\n    food: 150.20,\n    utilities: 100.00,\n    entertainment: 100.30\n  },\n  transactions: [\n    /* expanded, filtered, and sorted transaction objects */\n  ]\n}",
    "concepts": [
      "recurring events expansion",
      "filtering with multiple criteria",
      "performance optimization",
      "date manipulation",
      "aggregation and sorting"
    ],
    "estimatedTime": "40 minutes",
    "isFeatured": false
  },
  {
    "slug": "fix-the-bug-in-celsius-to-fahrenheit-conversion-function",
    "title": "Fix the Bug in Celsius to Fahrenheit Conversion Function",
    "language": "cpp",
    "difficulty": "beginner",
    "category": "debugging",
    "description": "A simple function to convert a temperature from Celsius to Fahrenheit contains a bug. Fix the function so it returns the correct Fahrenheit value.",
    "prompt": "The function celsiusToFahrenheit is intended to convert a temperature from Celsius to Fahrenheit using the formula F = C * 9/5 + 32. However, it currently returns the wrong result. Identify and fix the bug so that the function correctly converts Celsius to Fahrenheit.",
    "guidance": [
      "Review the formula for Celsius to Fahrenheit conversion.",
      "Check the order of operations and make sure to use floating point division if needed."
    ],
    "hints": [
      "Integer division may be truncating your calculation result.",
      "Try using 9.0/5.0 instead of 9/5."
    ],
    "starterCode": "double celsiusToFahrenheit(int celsius) {\n    return celsius * 9 / 5 + 32;\n}",
    "expectedOutput": "celsiusToFahrenheit(0) => 32\ncelsiusToFahrenheit(100) => 212\ncelsiusToFahrenheit(-40) => -40",
    "concepts": [
      "basic arithmetic",
      "order of operations",
      "type conversion"
    ],
    "estimatedTime": "10 minutes",
    "isFeatured": false
  },
  {
    "slug": "fix-the-incorrect-join-condition-in-employee-salary-query",
    "title": "Fix the Incorrect JOIN Condition in Employee Salary Query",
    "language": "sql",
    "difficulty": "intermediate",
    "category": "debugging",
    "description": "Identify and fix the bug in the provided SQL query that calculates the total salary by department. The current query returns incorrect totals due to a faulty JOIN condition.",
    "prompt": "You have two tables: Employees(emp_id, emp_name, dept_id, salary) and Departments(dept_id, dept_name). The goal is to write a query that returns each department name along with the total salary of its employees. The provided query is intended to do this but returns incorrect results. Fix the bug in the query so it works correctly.",
    "guidance": [
      "Check the JOIN condition carefully to ensure employees are matched to their correct department.",
      "Verify that aggregations (SUM) are done correctly grouped by department.",
      "Test the query after fixing it to confirm results are as expected."
    ],
    "hints": [
      "The ON clause might be joining columns incorrectly or using wrong table aliases.",
      "Ensure the GROUP BY clause correctly references the grouped columns.",
      "Check for typos or misuse of columns in either SELECT or JOIN parts."
    ],
    "starterCode": "SELECT d.dept_name, SUM(e.salary) AS total_salary\nFROM Employees e\nJOIN Departments d ON e.emp_id = d.dept_id\nGROUP BY d.dept_name;",
    "expectedOutput": "A list of department names each with the sum of all employee salaries in that department, e.g.\n\n| dept_name   | total_salary |\n|-------------|--------------|\n| Sales       | 150000       |\n| Engineering | 250000       |\n| HR          | 90000        |",
    "concepts": [
      "SQL JOINs",
      "Aggregation (SUM, GROUP BY)",
      "Debugging SQL queries"
    ],
    "estimatedTime": "10 minutes",
    "isFeatured": true
  },
  {
    "slug": "implement-a-simple-task-manager-cli-in-c",
    "title": "Implement a Simple Task Manager CLI in C++",
    "language": "cpp",
    "difficulty": "intermediate",
    "category": "mini-projects",
    "description": "Create a command-line task manager application that allows users to add, list, complete, and remove tasks stored in memory during the program session.",
    "prompt": "Write a C++ program that manages tasks using a simple command-line interface. The program should support the following commands: add a new task with a description, list all tasks with their status (completed or pending), mark a task as completed by its ID, and remove a task by its ID. Tasks should be stored in an appropriate data structure in memory. The program should keep running until the user types \"exit\".",
    "guidance": [
      "Use a vector or list of structs/classes to store tasks with an ID, description, and completion status.",
      "Create a loop to continuously read user input and process commands.",
      "Implement functions for each command to keep code organized and modular."
    ],
    "hints": [
      "Consider using a struct or class named Task with fields like `id`, `description`, and `completed`.",
      "You can assign incremental IDs to new tasks starting from 1 for easier reference.",
      "Remember to check if the task ID exists before marking or removing to avoid errors."
    ],
    "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n\nstruct Task {\n    int id;\n    std::string description;\n    bool completed;\n};\n\nint main() {\n    std::vector<Task> tasks;\n    std::string command;\n    // Your code here\n    return 0;\n}",
    "expectedOutput": "Commands should be handled interactively. Example session:\n\n> add Buy groceries\nTask added with ID 1\n> add Finish homework\nTask added with ID 2\n> list\n1. [ ] Buy groceries\n2. [ ] Finish homework\n> complete 1\nTask 1 marked as completed.\n> list\n1. [x] Buy groceries\n2. [ ] Finish homework\n> remove 2\nTask 2 removed.\n> list\n1. [x] Buy groceries\n> exit\nProgram ends.",
    "concepts": [
      "structs and classes",
      "vectors",
      "command line input/output",
      "loops",
      "conditionals"
    ],
    "estimatedTime": "15 minutes",
    "isFeatured": false
  },
  {
    "slug": "refactor-complex-data-aggregation-for-readability-and-performance-in-python",
    "title": "Refactor Complex Data Aggregation for Readability and Performance in Python",
    "language": "python",
    "difficulty": "advanced",
    "category": "code-quality",
    "description": "You are given a Python function that processes a nested list of sales data to compute total sales per product category, but the code is messy, hard to read, and inefficient. Refactor the function to improve code quality without changing its behavior.",
    "prompt": "The provided function takes a list of sales records where each record is a dictionary containing 'category', 'product', and 'amount'. It calculates the total sales amount per category. The current implementation uses nested loops, redundant variables, and repeated conditional checks, resulting in unmaintainable and suboptimal code. Refactor this function to enhance readability, reduce complexity, and improve performance while preserving the exact output.",
    "guidance": [
      "Preserve the output structure: a dictionary mapping each category to its total sales amount.",
      "Use built-in Python features like collections.defaultdict or itertools to simplify aggregation.",
      "Avoid repeated lookups and redundant variables to reduce computational overhead."
    ],
    "hints": [
      "Consider using defaultdict from the collections module to remove the need for manual key checks.",
      "Replace nested loops with comprehensions or functions that process data in a single pass.",
      "Focus on writing clear, descriptive variable names and modular code."
    ],
    "starterCode": "def calculate_total_sales(sales_data):\n    result = {}\n    for record in sales_data:\n        category = record['category']\n        amount = record['amount']\n        if category not in result:\n            result[category] = 0\n        current_total = result[category]\n        for other_record in sales_data:\n            if other_record['category'] == category:\n                current_total += other_record['amount']\n        result[category] = current_total\n    return result",
    "expectedOutput": "{'electronics': 4500, 'furniture': 2700, 'clothing': 1200}",
    "concepts": [
      "code refactoring",
      "dictionary aggregation",
      "collections.defaultdict",
      "performance optimization"
    ],
    "estimatedTime": "15 minutes",
    "isFeatured": false
  },
  {
    "slug": "simple-console-budget-tracker-in-c",
    "title": "Simple Console Budget Tracker in C++",
    "language": "cpp",
    "difficulty": "beginner",
    "category": "mini-projects",
    "description": "Build a beginner-friendly console application that helps users track their daily expenses and remaining budget.",
    "prompt": "Create a C++ program that allows the user to enter their total budget for a day and then input multiple expenses one by one. After each expense, display the remaining budget. The user should be able to stop entering expenses by typing a sentinel value (e.g., 0). When the user finishes, display the total expenses and how much budget remains (or if they have overspent).",
    "guidance": [
      "Use a loop to continuously accept expense inputs until the user enters 0.",
      "Maintain variables to keep track of total expenses and remaining budget.",
      "Use simple input/output statements to interact with the user."
    ],
    "hints": [
      "Initialize total expenses to 0 before starting to take inputs.",
      "Subtract each expense from the remaining budget after input.",
      "Check if the input is the sentinel value (0) inside the loop to stop taking expenses."
    ],
    "starterCode": "#include <iostream>\nusing namespace std;\n\nint main() {\n    double budget, expense, totalExpenses = 0;\n\n    cout << \"Enter your total budget for the day: \";\n    cin >> budget;\n\n    cout << \"Enter your expenses one by one (enter 0 to finish):\\n\";\n    while (true) {\n        cin >> expense;\n        // Your code to process each expense goes here\n    }\n\n    // Output total expenses and remaining budget\n    \n    return 0;\n}",
    "expectedOutput": "Enter your total budget for the day: 100\nEnter your expenses one by one (enter 0 to finish):\n20\nRemaining budget: 80\n15.50\nRemaining budget: 64.5\n0\nTotal expenses: 35.5\nRemaining budget: 64.5",
    "concepts": [
      "variables",
      "loops",
      "conditionals",
      "basic I/O"
    ],
    "estimatedTime": "10 minutes",
    "isFeatured": false
  },
  {
    "slug": "refactor-nested-loops-to-improve-code-readability-and-efficiency",
    "title": "Refactor Nested Loops to Improve Code Readability and Efficiency",
    "language": "python",
    "difficulty": "intermediate",
    "category": "code-quality",
    "description": "Refactor the given Python function that uses nested loops to find common elements between two lists. Improve its readability and performance without changing its behavior.",
    "prompt": "You are given a function that finds all common elements between two lists by using nested loops. While this approach works, it is not efficient and the code is harder to read. Refactor the function to produce the same result but improve its readability and performance. Do not change the function signature or the output format.",
    "guidance": [
      "Aim to reduce the time complexity by avoiding nested loops where possible.",
      "Improve code readability by using meaningful variable names and simpler constructs.",
      "Keep the output in the same order as the original function."
    ],
    "hints": [
      "Consider using Python sets to eliminate the need for nested loops.",
      "Remember that converting lists to sets can improve lookup speed drastically."
    ],
    "starterCode": "def common_elements(list1, list2):\n    result = []\n    for i in list1:\n        for j in list2:\n            if i == j:\n                if i not in result:\n                    result.append(i)\n    return result",
    "expectedOutput": "[2, 4]",
    "concepts": [
      "refactoring",
      "performance optimization",
      "data structures (sets and lists)"
    ],
    "estimatedTime": "10 minutes",
    "isFeatured": true
  },
  {
    "slug": "refactor-to-optimize-a-basic-employee-salary-query",
    "title": "Refactor to Optimize a Basic Employee Salary Query",
    "language": "sql",
    "difficulty": "beginner",
    "category": "optimization",
    "description": "Improve the given SQL query that retrieves employee names and salaries, by refactoring it to be more efficient while keeping the result unchanged.",
    "prompt": "You have the following SQL query that selects employee names and their salaries from the Employees table, but it includes redundant operations that can be optimized. Refactor the query to produce the same output but with simplified and more efficient SQL syntax.",
    "guidance": [
      "Look for unnecessary subqueries or repeated table scans.",
      "Try to simplify logic like filtering or selecting columns directly."
    ],
    "hints": [
      "Avoid using a subquery if the same results can be achieved with a simpler SELECT.",
      "Check if filtering conditions can be applied directly without nested queries."
    ],
    "starterCode": "SELECT name, salary FROM (SELECT * FROM Employees) AS emp WHERE salary > 30000;",
    "expectedOutput": "A list of employee names and their salaries where salary is greater than 30000.",
    "concepts": [
      "SELECT",
      "WHERE clause",
      "subqueries",
      "query optimization"
    ],
    "estimatedTime": "10 minutes",
    "isFeatured": true
  },
  {
    "slug": "advanced-task-scheduler-with-dependency-resolution",
    "title": "Advanced Task Scheduler with Dependency Resolution",
    "language": "javascript",
    "difficulty": "advanced",
    "category": "mini-projects",
    "description": "Build a task scheduler function that accepts a list of asynchronous tasks with dependencies and executes them in the correct order. The scheduler must support concurrency for independent tasks and return results in dependency-resolved order.",
    "prompt": "You are asked to implement an advanced task scheduler in JavaScript. Each task is represented by an object with an `id`, an async `run` function, and an array of `dependencies` representing task ids that must complete before this task runs. Your scheduler function receives an array of these task objects and should execute tasks while respecting dependencies. Tasks with no dependencies can run immediately. Tasks can run concurrently where dependencies allow. The scheduler must return a Promise that resolves to an array of results ordered by the completion of each task (not input order). Tasks that fail should reject the entire scheduler promise immediately with the error. \n\nRequirements:\n- Detect circular dependencies and reject with an error.\n- Maximize concurrency without violating dependencies.\n- Collect results in order of completion.\n\nImplement this scheduler function and demonstrate its usage with several tasks having varied dependencies and async durations.",
    "guidance": [
      "Create a graph structure to track dependencies and the number of unresolved dependent tasks for each node.",
      "Use a queue or similar structure to manage tasks ready to run (those with zero unresolved dependencies).",
      "Run tasks concurrently but delay starting a task until all its dependencies have completed.",
      "Use Promises to handle async execution and collect results as tasks complete."
    ],
    "hints": [
      "Topological sorting algorithms like Kahn's algorithm handle dependency resolution and cycle detection.",
      "Use a Map to store task ids to task objects for quick lookup.",
      "Use Promise.allSettled or similar methods carefully to collect results but stop on first failure."
    ],
    "starterCode": "async function taskScheduler(tasks) {\n  // Your code here\n}",
    "expectedOutput": "An array of task results in the order tasks complete successfully, or a rejection error if a cycle is detected or any task fails.",
    "concepts": [
      "Asynchronous programming",
      "Graph theory (dependency graphs, topological sort)",
      "Concurrency and Promise management",
      "Error handling in async workflows"
    ],
    "estimatedTime": "45 minutes",
    "isFeatured": false
  },
  {
    "slug": "create-a-simple-library-database-schema-with-tables-and-queries",
    "title": "Create a Simple Library Database Schema with Tables and Queries",
    "language": "sql",
    "difficulty": "beginner",
    "category": "data-modeling",
    "description": "Build a basic SQL schema for a library system and write queries to retrieve information about books and authors.",
    "prompt": "Create two tables: 'Authors' and 'Books'. The 'Authors' table should include columns for 'AuthorID' (primary key) and 'AuthorName'. The 'Books' table should include columns for 'BookID' (primary key), 'Title', and 'AuthorID' (foreign key referencing 'Authors'). Then, write an SQL query that lists all book titles along with their author names.",
    "guidance": [
      "Define primary keys for each table appropriately.",
      "Ensure the foreign key relationship between 'Books' and 'Authors' is correct.",
      "Write a SELECT query joining both tables to display each book title with its corresponding author."
    ],
    "hints": [
      "Use 'CREATE TABLE' statements to define the tables with columns and data types.",
      "Use 'INNER JOIN' to connect the 'Books' table to the 'Authors' table on 'AuthorID'.",
      "Remember to use aliases for tables to make the SELECT query easier to read."
    ],
    "starterCode": "CREATE TABLE Authors (\n  AuthorID INT PRIMARY KEY,\n  AuthorName VARCHAR(100)\n);\n\nCREATE TABLE Books (\n  BookID INT PRIMARY KEY,\n  Title VARCHAR(200),\n  AuthorID INT,\n  FOREIGN KEY (AuthorID) REFERENCES Authors(AuthorID)\n);\n\n-- Write your query below\n",
    "expectedOutput": "Title           | AuthorName\n----------------|----------------\nHarry Potter    | J.K. Rowling\nThe Hobbit     | J.R.R. Tolkien\nTo Kill a Mockingbird | Harper Lee",
    "concepts": [
      "SQL CREATE TABLE",
      "Primary Key",
      "Foreign Key",
      "JOIN"
    ],
    "estimatedTime": "10 minutes",
    "isFeatured": false
  },
  {
    "slug": "build-a-task-management-app-with-javascript",
    "title": "Build a Task Management App with JavaScript",
    "language": "javascript",
    "difficulty": "intermediate",
    "category": "mini-projects",
    "description": "Create a simple task management mini-project where users can add, mark complete, and delete tasks dynamically using JavaScript arrays and DOM manipulation.",
    "prompt": "Build a task management app that allows users to: (1) add new tasks with a task description, (2) toggle completion status of any task, and (3) delete tasks. The app should maintain an array of task objects, each with a description and a completed status. Render the task list dynamically based on this array. Whenever a task is toggled or deleted, update the array and re-render the list to reflect the changes.",
    "guidance": [
      "Use an array of objects to store the tasks; each object should contain 'description' and 'completed' properties.",
      "Create functions to handle adding tasks, toggling the completed state, and deleting tasks.",
      "Use event delegation or attach event listeners dynamically to handle user interactions on task items.",
      "Each time the task list changes, re-render the task list in the DOM to keep it in sync with the array."
    ],
    "hints": [
      "Consider using the array methods like push, filter, and map to manipulate task data.",
      "Use `element.innerHTML` or DOM methods to generate the task list with appropriate CSS classes to show completed tasks.",
      "To toggle completion, invert the boolean value of the 'completed' property for the targeted task object."
    ],
    "starterCode": "function TaskManager() {\n  this.tasks = [];\n\n  this.addTask = function(description) {\n    // Add your code here\n  };\n\n  this.toggleTask = function(index) {\n    // Add your code here\n  };\n\n  this.deleteTask = function(index) {\n    // Add your code here\n  };\n\n  this.render = function() {\n    // Add your code here to dynamically update the displayed task list\n  };\n\n}\n\nconst taskManager = new TaskManager();\n\n// Example usage:\n// taskManager.addTask('Learn JavaScript');\n// taskManager.render();",
    "expectedOutput": "When tasks are added, toggled, or deleted, the rendered list updates dynamically. Completed tasks are visually distinct (for example, crossed out or greyed out). Deleting a task removes it from the list. Adding a task appends it to the bottom of the list.",
    "concepts": [
      "arrays",
      "DOM manipulation",
      "event handling",
      "object management"
    ],
    "estimatedTime": "15 minutes",
    "isFeatured": false
  },
  {
    "slug": "predict-the-output-of-complex-recursive-function-with-memoization-in-javascript",
    "title": "Predict the Output of Complex Recursive Function with Memoization in JavaScript",
    "language": "javascript",
    "difficulty": "advanced",
    "category": "logic",
    "description": "Analyze a recursive JavaScript function that uses memoization and array transformations. Predict the output when the function is called with a specific argument.",
    "prompt": "Given the following JavaScript code which defines a recursive function that calculates a custom sequence with memoization and array transformations, predict the exact output of calling computeSequence(5). Explain your reasoning step-by-step.",
    "guidance": [
      "Carefully trace the recursive calls and the memoization cache's population.",
      "Understand the use of array methods like map, reduce, and how they transform values at each recursion depth."
    ],
    "hints": [
      "Break down the function into smaller parts: focus first on the base case, then on the recursive case.",
      "Visualize or write down intermediate cache states after each call."
    ],
    "starterCode": "function computeSequence(n, memo = {}) {\n  if (n <= 1) return [n];\n  if (memo[n]) return memo[n];\n\n  const prev = computeSequence(n - 1, memo);\n  const transformed = prev.map(x => x * n);\n  const sum = transformed.reduce((acc, val) => acc + val, 0);\n\n  memo[n] = [...prev, sum];\n  return memo[n];\n}\n\nconsole.log(computeSequence(5));",
    "expectedOutput": "[0, 1, 3, 12, 60, 360]",
    "concepts": [
      "recursion",
      "memoization",
      "array transformation",
      "reduce method"
    ],
    "estimatedTime": "10 minutes",
    "isFeatured": false
  },
  {
    "slug": "fix-the-off-by-one-error-in-loop-summation",
    "title": "Fix the Off-By-One Error in Loop Summation",
    "language": "cpp",
    "difficulty": "beginner",
    "category": "debugging",
    "description": "Debug a simple function in C++ that aims to sum integers from 1 to n but produces incorrect results due to an off-by-one error in the loop.",
    "prompt": "The provided C++ function sumUpTo attempts to calculate the sum of all integers from 1 up to a given number n (inclusive). However, the function currently returns incorrect outputs. Identify and correct the bug in the loop to ensure the function returns the correct summation.",
    "guidance": [
      "Check the loop boundaries carefully — is the loop iterating the correct number of times?",
      "Remember that loops usually start at zero or one depending on the problem; verify that your loop aligns with the summation requirement.",
      "Test the function with small values of n such as 1, 2, and 3 to verify correctness."
    ],
    "hints": [
      "The existing loop stops one iteration too early, so adjust the loop condition.",
      "Consider whether the comparison operator '<' or '<=' is appropriate in the for loop condition."
    ],
    "starterCode": "int sumUpTo(int n) {\n    int sum = 0;\n    for (int i = 1; i < n; ++i) {\n        sum += i;\n    }\n    return sum;\n}",
    "expectedOutput": "sumUpTo(3) should return 6 (1 + 2 + 3 = 6)",
    "concepts": [
      "loops",
      "for loop",
      "off-by-one error",
      "basic arithmetic"
    ],
    "estimatedTime": "10 minutes",
    "isFeatured": true
  },
  {
    "slug": "predict-the-output-of-recursive-nested-dictionary-merge-with-side-effects",
    "title": "Predict the Output of Recursive Nested Dictionary Merge with Side Effects",
    "language": "python",
    "difficulty": "advanced",
    "category": "logic",
    "description": "Analyze the given Python function that performs a recursive merge of nested dictionaries with side effects on mutable inputs. Predict the exact output of the code including the final printed dictionaries.",
    "prompt": "Given the following Python code which merges two dictionaries recursively, with in-place modifications, predict the printed output after calling merge_dicts on two nested dictionaries with overlapping keys.",
    "guidance": [
      "Understand how recursion is used to merge dictionaries at nested levels.",
      "Pay close attention to in-place mutations versus copied values.",
      "Trace the dictionary references carefully to see which parts get modified."
    ],
    "hints": [
      "Remember that updating a dictionary in-place affects all references to that dictionary.",
      "Consider cases where values are dictionaries in both dicts vs. non-dictionary keys.",
      "Keep track of how new keys are added and how existing keys are overwritten."
    ],
    "starterCode": "def merge_dicts(d1, d2):\n    for k, v in d2.items():\n        if k in d1:\n            if isinstance(d1[k], dict) and isinstance(v, dict):\n                merge_dicts(d1[k], v)\n            else:\n                d1[k] = v\n        else:\n            d1[k] = v\n    return d1\n\n\na = {'x': 1, 'y': {'a': 10, 'b': 20}}\nb = {'y': {'b': 30, 'c': 40}, 'z': 3}\n\nresult = merge_dicts(a, b)\nprint('a:', a)\nprint('b:', b)\nprint('result:', result)",
    "expectedOutput": "a: {'x': 1, 'y': {'a': 10, 'b': 30, 'c': 40}, 'z': 3}\nb: {'y': {'b': 30, 'c': 40}, 'z': 3}\nresult: {'x': 1, 'y': {'a': 10, 'b': 30, 'c': 40}, 'z': 3}",
    "concepts": [
      "recursion",
      "dictionary mutation",
      "nested data structures"
    ],
    "estimatedTime": "10 minutes",
    "isFeatured": true
  },
  {
    "slug": "predict-the-output-array-transformation-and-loop-logic-in-c",
    "title": "Predict the Output: Array Transformation and Loop Logic in C++",
    "language": "cpp",
    "difficulty": "intermediate",
    "category": "logic",
    "description": "Analyze the given C++ code snippet that performs multiple array transformations and loop operations. Predict the final output printed by the program without running it.",
    "prompt": "Consider the following C++ code:\n\nint arr[] = {2, 4, 6, 8};\nint n = 4;\n\nfor (int i = 0; i < n; i++) {\n    arr[i] = arr[i] + i;\n}\n\nfor (int i = n - 1; i > 0; i--) {\n    arr[i] = arr[i] - arr[i - 1];\n}\n\nfor (int i = 0; i < n; i++) {\n    std::cout << arr[i] << \" \";\n}\n\nWhat is the output of this program when executed? Explain your reasoning.",
    "guidance": [
      "Step through each loop iteration carefully, tracking how the array elements change.",
      "Remember the effect of modifying array elements in place and how that influences subsequent calculations."
    ],
    "hints": [
      "After the first loop, the array elements are incremented by their index positions.",
      "In the second loop, each element is updated based on the difference with the previous element, starting from the end."
    ],
    "starterCode": "int arr[] = {2, 4, 6, 8};\nint n = 4;\n\nfor (int i = 0; i < n; i++) {\n    arr[i] = arr[i] + i;\n}\n\nfor (int i = n - 1; i > 0; i--) {\n    arr[i] = arr[i] - arr[i - 1];\n}\n\nfor (int i = 0; i < n; i++) {\n    std::cout << arr[i] << \" \";\n}\n",
    "expectedOutput": "2 2 0 2",
    "concepts": [
      "array manipulation",
      "for loops",
      "in-place modification",
      "basic arithmetic operations"
    ],
    "estimatedTime": "10 minutes",
    "isFeatured": true
  },
  {
    "slug": "refactor-a-complex-c-class-for-cleaner-design-and-performance",
    "title": "Refactor a Complex C++ Class for Cleaner Design and Performance",
    "language": "cpp",
    "difficulty": "advanced",
    "category": "code-quality",
    "description": "Refactor the given C++ class that manages a large dataset with inefficient and messy logic. Improve code readability, maintainability, and performance while preserving functionality.",
    "prompt": "You are given a C++ class 'DataProcessor' that processes a vector of integers. The current implementation has poor naming, redundant computations, and lacks proper encapsulation and const-correctness. Refactor the class to improve code quality without changing its external behavior or output.\n\nYour tasks:\n- Rename variables and methods for clarity.\n- Remove redundant or repeated computations.\n- Apply const correctness where applicable.\n- Encapsulate data members properly.\n- Simplify complex or nested logic.\n\nEnsure the public interface remains unchanged. Add comments if needed for complex logic.\n\nDo not modify the main function provided for testing; only refactor the class definition and implementation.",
    "guidance": [
      "Focus on improving variable and method names for self-documenting code.",
      "Identify repeated calculations and move them outside loops if possible.",
      "Use const on member functions that do not modify class state.",
      "Make private data members truly private and provide accessors if needed."
    ],
    "hints": [
      "Look for loops that recalculate the same values repeatedly and cache them.",
      "Consider the use of const references to avoid unnecessary copies.",
      "Avoid using public data members; use private members with public getter methods."
    ],
    "starterCode": "class DataProcessor {\npublic:\n    std::vector<int> data;\n\n    int processData() {\n        int result = 0;\n        for (int i = 0; i < data.size(); ++i) {\n            int val = data[i];\n            for (int j = 0; j < data.size(); ++j) {\n                if (j != i && data[j] % 2 == 0) {\n                    result += val + data[j];\n                }\n            }\n        }\n        return result;\n    }\n\n    void addData(int d) {\n        data.push_back(d);\n    }\n};\n\n#include <iostream>\n\nint main() {\n    DataProcessor dp;\n    dp.addData(1);\n    dp.addData(2);\n    dp.addData(3);\n    dp.addData(4);\n    std::cout << dp.processData() << std::endl;\n    return 0;\n}",
    "expectedOutput": "30",
    "concepts": [
      "code-refactoring",
      "const-correctness",
      "data-encapsulation",
      "performance-optimization"
    ],
    "estimatedTime": "15 minutes",
    "isFeatured": true
  },
  {
    "slug": "refactor-a-function-to-calculate-sum-of-array-elements",
    "title": "Refactor a Function to Calculate Sum of Array Elements",
    "language": "cpp",
    "difficulty": "beginner",
    "category": "code-quality",
    "description": "Improve the clarity and quality of a simple C++ function that sums elements in an integer array, while keeping its behavior unchanged.",
    "prompt": "You are given a C++ function that calculates the sum of the elements in an integer array. The function works correctly but the code style and structure can be improved to make it more readable and maintainable. Refactor the function without changing its output or functionality. Focus on simplifying the loop, improving variable naming, and removing any redundant code.",
    "guidance": [
      "Keep the function signature the same for compatibility.",
      "Focus on improving variable names and removing unnecessary parts.",
      "Make loops and code structure cleaner and easier to understand."
    ],
    "hints": [
      "Consider using descriptive variable names for better readability.",
      "Check the loop syntax and see if it can be simplified or modernized."
    ],
    "starterCode": "int sumArray(int arr[], int size) {\n    int s = 0;\n    for (int i = 0; i < size; i++) {\n        s = s + arr[i];\n    }\n    return s;\n}",
    "expectedOutput": "sumArray({1, 2, 3, 4, 5}, 5) should return 15",
    "concepts": [
      "loops",
      "functions",
      "variable naming"
    ],
    "estimatedTime": "10 minutes",
    "isFeatured": false
  },
  {
    "slug": "refactor-nested-loops-and-conditionals-into-cleaner-javascript-function",
    "title": "Refactor Nested Loops and Conditionals into Cleaner JavaScript Function",
    "language": "javascript",
    "difficulty": "intermediate",
    "category": "code-quality",
    "description": "Improve the readability and maintainability of a JavaScript function that processes an array of user objects by refactoring nested loops and conditionals without changing its behavior.",
    "prompt": "You are given a JavaScript function that takes an array of user objects and returns an array of usernames for users who are active and have purchased at least one item costing over $20. The original function uses nested loops and multiple conditionals making it hard to read and maintain.\n\nRefactor the function to improve code clarity, reduce nesting, and utilize modern JavaScript methods like filter, some, and map while preserving the original functionality.",
    "guidance": [
      "Use Array.prototype.filter() to reduce nested if conditions where appropriate.",
      "Replace inner loops that check purchases with Array.prototype.some() for better readability.",
      "Use meaningful variable names and simplify return statements."
    ],
    "hints": [
      "Instead of manually looping through purchases, consider if some purchase object meets the price criterion.",
      "Filtering users first and then mapping to extract usernames can clean up the logic."
    ],
    "starterCode": "function getEligibleUsernames(users) {\n  const result = [];\n  for (let i = 0; i < users.length; i++) {\n    if (users[i].isActive) {\n      let hasExpensivePurchase = false;\n      for (let j = 0; j < users[i].purchases.length; j++) {\n        if (users[i].purchases[j].price > 20) {\n          hasExpensivePurchase = true;\n          break;\n        }\n      }\n      if (hasExpensivePurchase) {\n        result.push(users[i].username);\n      }\n    }\n  }\n  return result;\n}",
    "expectedOutput": "For the input:\n[\n  { username: 'alice', isActive: true, purchases: [{price: 10}, {price: 30}] },\n  { username: 'bob', isActive: false, purchases: [{price: 50}] },\n  { username: 'charlie', isActive: true, purchases: [{price: 15}] }\n]\n\nThe output should be:\n['alice']",
    "concepts": [
      "Array filtering",
      "Array methods (some, map)",
      "Code readability",
      "Conditional simplification"
    ],
    "estimatedTime": "10 minutes",
    "isFeatured": false
  },
  {
    "slug": "refactor-messy-nested-loop-code-to-improve-readability-and-performance",
    "title": "Refactor Messy Nested Loop Code to Improve Readability and Performance",
    "language": "cpp",
    "difficulty": "intermediate",
    "category": "code-quality",
    "description": "You are given a C++ function that uses nested loops and multiple conditionals in a messy and repetitive way to find common elements between two integer vectors and sum them. Refactor the code to improve readability, reduce complexity, and maintain the same output.",
    "prompt": "Below is a C++ function that evaluates two integer vectors and sums up all common elements between them. The code works correctly but is hard to read and inefficient due to the nested loops and repeated conditions. Refactor this function to make it cleaner, easier to understand, and ideally more performant, without changing its behavior or output.",
    "guidance": [
      "Consider using appropriate STL containers or algorithms to simplify membership checks and iteration.",
      "Avoid nested loops where possible to reduce time complexity.",
      "Make the intent of your code clearer by using descriptive variable names and breaking down complex statements."
    ],
    "hints": [
      "Use an unordered_set for fast lookup of elements when checking for common values.",
      "Utilize standard library algorithms like std::accumulate or std::count_if for summation.",
      "Try separating logic into smaller functions or steps for clarity."
    ],
    "starterCode": "int sumCommonElements(const std::vector<int>& v1, const std::vector<int>& v2) {\n    int sum = 0;\n    for (int i = 0; i < v1.size(); ++i) {\n        for (int j = 0; j < v2.size(); ++j) {\n            if (v1[i] == v2[j]) {\n                sum += v1[i];\n                break;\n            }\n        }\n    }\n    return sum;\n}",
    "expectedOutput": "For input v1 = {1, 2, 3, 4}, v2 = {3, 4, 5, 6}, the function should return 7 since 3 + 4 = 7.",
    "concepts": [
      "refactoring",
      "STL containers",
      "algorithm optimization",
      "code readability"
    ],
    "estimatedTime": "10 minutes",
    "isFeatured": false
  },
  {
    "slug": "build-a-high-performance-memoized-fibonacci-function-with-custom-cache-size",
    "title": "Build a High-Performance Memoized Fibonacci Function with Custom Cache Size",
    "language": "python",
    "difficulty": "advanced",
    "category": "functions",
    "description": "Create an advanced Python function to compute Fibonacci numbers using memoization with a customizable cache size limit, evicting oldest cached values when the cache exceeds the limit. The function should be optimized for both speed and memory usage.",
    "prompt": "Build a function named `fib_memo` that computes the nth Fibonacci number efficiently using memoization. The function should accept two arguments: `n` (the index) and an optional `cache_size` which limits the size of the memoization cache. When the number of cached entries exceeds `cache_size`, your function should evict the oldest cached value before adding a new one to keep the cache size bounded. Default `cache_size` should be 100. Your solution must handle very large n efficiently and explicitly manage the cache as a fixed-size LRU (Least Recently Used) cache without using external libraries.",
    "guidance": [
      "Use a dictionary or OrderedDict to store cached Fibonacci values.",
      "Implement your own logic to track the order of cache usage to know which entry to evict when exceeding cache_size.",
      "Optimize recursive calls by checking the cache to avoid recalculations."
    ],
    "hints": [
      "Consider using collections.OrderedDict to maintain insertion order and facilitate LRU eviction.",
      "You can update the position of a cache entry every time it is accessed to reflect recent use.",
      "Be careful with the base cases for Fibonacci (0 and 1)."
    ],
    "starterCode": "def fib_memo(n, cache_size=100):\n    # Your implementation here\n    pass",
    "expectedOutput": "fib_memo(10) -> 55\nfib_memo(50) -> 12586269025\nfib_memo(100) -> 354224848179261915075",
    "concepts": [
      "memoization",
      "LRU cache",
      "recursion",
      "dictionary management",
      "algorithm optimization"
    ],
    "estimatedTime": "15 minutes",
    "isFeatured": false
  }
];