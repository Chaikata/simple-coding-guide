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
  }
];