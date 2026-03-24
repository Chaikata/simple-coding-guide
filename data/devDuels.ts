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
  }
];