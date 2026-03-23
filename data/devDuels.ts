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
  }
];