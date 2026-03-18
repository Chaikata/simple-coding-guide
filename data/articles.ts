export type ContentBlock =
  | string
  | {
      type: "paragraph" | "code";
      value: string;
    };

export type Article = {
  slug: string;
  title: string;
  language: string;
  type: string;
  description: string;
  videoUrl?: string;
  content: ContentBlock[];
};

export const articles: Article[] = [
  {
    "slug": "comparing-event-loop-implementations-in-javascript-engines-v8-vs-spidermonkey",
    "title": "Comparing Event Loop Implementations in JavaScript Engines: V8 vs SpiderMonkey",
    "language": "javascript",
    "type": "tutorials",
    "description": "A beginner-friendly guide that explains how event loops work in JavaScript and compares how two popular JavaScript engines, V8 and SpiderMonkey, implement the event loop.",
    "content": [
      {
        "type": "paragraph",
        "value": "JavaScript is famous for being single-threaded and event-driven. This means it uses a mechanism called the \"event loop\" to handle tasks like user interactions, timers, and I/O operations without freezing your application. Two popular JavaScript engines, V8 (used in Chrome and Node.js) and SpiderMonkey (used in Firefox), implement the event loop in slightly different ways. In this tutorial, you'll learn the basics of the event loop and how these two engines compare."
      },
      {
        "type": "paragraph",
        "value": "### What is the Event Loop?"
      },
      {
        "type": "paragraph",
        "value": "The event loop is a loop that waits for messages or events and processes them one by one. It allows JavaScript to perform non-blocking operations despite being single-threaded. When you schedule tasks like setTimeout or handle promises, these get placed in queues that the event loop processes."
      },
      {
        "type": "paragraph",
        "value": "### V8's Event Loop (Chrome & Node.js)"
      },
      {
        "type": "paragraph",
        "value": "V8 uses the libuv library in Node.js to handle the event loop. It manages multiple phases like timers, pending callbacks, idle, poll, check, and close callbacks. In the browser (Chrome), the event loop is integrated into the browser's task scheduling, split mainly into macrotasks (like setTimeout) and microtasks (like promises)."
      },
      {
        "type": "paragraph",
        "value": "Here's an example that demonstrates how microtasks (promises) are executed before macrotasks (setTimeout) in V8:"
      },
      {
        "type": "code",
        "value": "console.log('Start');\n\nsetTimeout(() => {\n  console.log('setTimeout');\n}, 0);\n\nPromise.resolve().then(() => {\n  console.log('Promise');\n});\n\nconsole.log('End');"
      },
      {
        "type": "paragraph",
        "value": "Output in V8:\n\nStart\nEnd\nPromise\nsetTimeout\n"
      },
      {
        "type": "paragraph",
        "value": "### SpiderMonkey's Event Loop (Firefox)"
      },
      {
        "type": "paragraph",
        "value": "SpiderMonkey is Firefox's JavaScript engine. Its event loop is integrated with the Gecko engine, which controls the browser. SpiderMonkey follows the HTML5 specification for task queues and microtasks, just like V8 in browsers. The main difference lies in internal optimizations and the way the browser schedules rendering and style updates."
      },
      {
        "type": "paragraph",
        "value": "If you run the same code in Firefox's console, you’ll get the same output:"
      },
      {
        "type": "code",
        "value": "console.log('Start');\n\nsetTimeout(() => {\n  console.log('setTimeout');\n}, 0);\n\nPromise.resolve().then(() => {\n  console.log('Promise');\n});\n\nconsole.log('End');"
      },
      {
        "type": "paragraph",
        "value": "Output in SpiderMonkey (Firefox):\n\nStart\nEnd\nPromise\nsetTimeout\n"
      },
      {
        "type": "paragraph",
        "value": "### Key Takeaways"
      },
      {
        "type": "paragraph",
        "value": "- Both V8 and SpiderMonkey follow the HTML5 event loop specification closely, especially in browsers.\n- Microtasks (promises) are executed before macrotasks (setTimeout).\n- Node.js's V8 implementation uses libuv, which has additional event loop phases.\n- Differences appear mostly in internal optimizations, integration with browser rendering, and Node.js-specific APIs.\n\n### Why Should You Care?"
      },
      {
        "type": "paragraph",
        "value": "Understanding the event loop helps you write better asynchronous JavaScript code. Knowing that promises run before timers can avoid bugs and improve performance."
      },
      {
        "type": "paragraph",
        "value": "Try running the example code snippets in both Chrome and Firefox to see how they behave similarly."
      }
    ]
  },
  {
    "slug": "optimizing-async-await-patterns-for-better-javascript-performance",
    "title": "Optimizing Async/Await Patterns for Better JavaScript Performance",
    "language": "javascript",
    "type": "errors",
    "description": "A beginner-friendly guide to understanding common mistakes with async/await in JavaScript and how to optimize your code for better performance.",
    "content": [
      {
        "type": "paragraph",
        "value": "Async/await is a powerful feature in JavaScript that makes working with asynchronous code easier to read and write. However, beginners often run into common mistakes that can cause performance issues. This article will cover those errors and show you how to write more efficient async/await patterns."
      },
      {
        "type": "paragraph",
        "value": "One common mistake is running async operations sequentially when they can run in parallel. For example:"
      },
      {
        "type": "code",
        "value": "async function fetchDataSequential() {\n  const data1 = await fetch('https://api.example.com/data1');\n  const json1 = await data1.json();\n  const data2 = await fetch('https://api.example.com/data2');\n  const json2 = await data2.json();\n  return [json1, json2];\n}"
      },
      {
        "type": "paragraph",
        "value": "In this example, the second fetch starts only after the first one finishes. This increases the total waiting time unnecessarily."
      },
      {
        "type": "paragraph",
        "value": "To optimize, start both fetches at the same time and wait for both promises together using Promise.all():"
      },
      {
        "type": "code",
        "value": "async function fetchDataParallel() {\n  const promise1 = fetch('https://api.example.com/data1');\n  const promise2 = fetch('https://api.example.com/data2');\n\n  const [data1, data2] = await Promise.all([promise1, promise2]);\n  const json1 = await data1.json();\n  const json2 = await data2.json();\n\n  return [json1, json2];\n}"
      },
      {
        "type": "paragraph",
        "value": "By running the fetches in parallel, you reduce the total waiting time. This pattern can be used whenever multiple independent async operations need to happen."
      },
      {
        "type": "paragraph",
        "value": "Another mistake is forgetting to handle errors properly in async functions, which can cause uncaught exceptions and break your app. Always use try/catch blocks around await statements:"
      },
      {
        "type": "code",
        "value": "async function fetchWithErrorHandling() {\n  try {\n    const response = await fetch('https://api.example.com/data');\n    if (!response.ok) {\n      throw new Error('Network response was not ok');\n    }\n    const data = await response.json();\n    return data;\n  } catch (error) {\n    console.error('Failed to fetch data:', error);\n    return null;\n  }\n}"
      },
      {
        "type": "paragraph",
        "value": "This ensures your program can handle failures gracefully without crashing."
      },
      {
        "type": "paragraph",
        "value": "Summary tips for optimizing async/await performance:"
      },
      {
        "type": "paragraph",
        "value": "1. Run independent async operations in parallel with Promise.all() instead of awaiting each one sequentially.\n2. Use try/catch blocks to handle errors and prevent unhandled promise rejections.\n3. Avoid mixing async/await with then/catch unnecessarily, as it can make code confusing.\n4. Remember that 'await' pauses code execution, so minimize unnecessary awaits."
      },
      {
        "type": "paragraph",
        "value": "Following these simple guidelines will help you write cleaner, more efficient asynchronous JavaScript code."
      }
    ]
  },
  {
    "slug": "building-scalable-event-driven-architecture-with-typescript-and-kafka",
    "title": "Building a Scalable Event-Driven Architecture with TypeScript and Kafka",
    "language": "typescript",
    "type": "tutorials",
    "description": "Learn how to build a scalable event-driven architecture using TypeScript and Apache Kafka. This beginner-friendly tutorial covers the basics of event-driven design, setting up Kafka, and writing simple producers and consumers with TypeScript.",
    "content": [
      {
        "type": "paragraph",
        "value": "Event-driven architectures allow applications to react to events and scale seamlessly. Apache Kafka, a popular distributed event streaming platform, fits perfectly for this pattern. In this tutorial, we'll build a simple scalable event-driven system using TypeScript and Kafka."
      },
      {
        "type": "paragraph",
        "value": "### What You Will Learn\n- What is event-driven architecture?\n- Basics of Apache Kafka\n- Writing Kafka producers and consumers in TypeScript\n- Running a simple scalable event-driven system"
      },
      {
        "type": "paragraph",
        "value": "### Prerequisites\n- Basic knowledge of TypeScript and Node.js\n- Kafka installed locally or access to a Kafka environment\n- Node.js and npm installed"
      },
      {
        "type": "paragraph",
        "value": "### Step 1: Setup your project\nFirst, create a new Node.js project and install the KafkaJS library — a popular Kafka client for Node.js that works great with TypeScript."
      },
      {
        "type": "code",
        "value": "mkdir event-driven-ts\ncd event-driven-ts\nnpm init -y\nnpm install kafkajs @types/node typescript ts-node --save"
      },
      {
        "type": "paragraph",
        "value": "Create a `tsconfig.json` file to configure TypeScript:"
      },
      {
        "type": "code",
        "value": "{\n  \"compilerOptions\": {\n    \"target\": \"ES2019\",\n    \"module\": \"commonjs\",\n    \"outDir\": \"dist\",\n    \"strict\": true,\n    \"esModuleInterop\": true\n  },\n  \"include\": [\"src/**/*\"]\n}"
      },
      {
        "type": "paragraph",
        "value": "### Step 2: Create a Kafka producer\nLet's create a Kafka producer that sends messages to a topic called `test-topic`."
      },
      {
        "type": "code",
        "value": "import { Kafka } from 'kafkajs';\n\nasync function createProducer() {\n  const kafka = new Kafka({\n    clientId: 'my-producer',\n    brokers: ['localhost:9092']\n  });\n\n  const producer = kafka.producer();\n  await producer.connect();\n\n  const message = { value: 'Hello Kafka from TypeScript!' };\n\n  await producer.send({\n    topic: 'test-topic',\n    messages: [message],\n  });\n\n  console.log('Message sent');\n  await producer.disconnect();\n}\n\ncreateProducer().catch(console.error);"
      },
      {
        "type": "paragraph",
        "value": "### Step 3: Create a Kafka consumer\nNow, let's build a simple consumer that listens to the `test-topic` and prints out any received messages."
      },
      {
        "type": "code",
        "value": "import { Kafka } from 'kafkajs';\n\nasync function createConsumer() {\n  const kafka = new Kafka({\n    clientId: 'my-consumer',\n    brokers: ['localhost:9092']\n  });\n\n  const consumer = kafka.consumer({ groupId: 'test-group' });\n  await consumer.connect();\n  await consumer.subscribe({ topic: 'test-topic', fromBeginning: true });\n\n  await consumer.run({\n    eachMessage: async ({ topic, partition, message }) => {\n      const receivedValue = message.value?.toString();\n      console.log(`Received message: ${receivedValue}`);\n    }\n  });\n}\n\ncreateConsumer().catch(console.error);"
      },
      {
        "type": "paragraph",
        "value": "### Step 4: Running the system\nMake sure your Kafka broker is running locally on port 9092 (default). Then run the consumer in one terminal window and the producer in another:"
      },
      {
        "type": "code",
        "value": "npx ts-node src/consumer.ts\nnpx ts-node src/producer.ts"
      },
      {
        "type": "paragraph",
        "value": "You should see the consumer print the message sent by the producer.\n\n### Why is this scalable?\n- Producers and consumers work independently.\n- Kafka handles message durability and ordering.\n- You can add more consumer instances to scale consumption.\n\n### Next Steps\n- Experiment with multiple topics.\n- Handle message serialization with Avro or JSON Schema.\n- Implement error handling and retries.\n- Deploy Kafka and your services in production environments.\n\nThis simple example demonstrates the power of combining TypeScript and Kafka to create scalable event-driven systems. Happy coding!"
      }
    ]
  },
  {
    "slug": "deep-dive-into-typescripts-type-inference-failures-and-how-to-analyze-them",
    "title": "Deep Dive into TypeScript's Type Inference Failures and How to Analyze Them",
    "language": "typescript",
    "type": "errors",
    "description": "Explore common situations where TypeScript's type inference can fail, and learn practical strategies to diagnose and fix those issues.",
    "content": [
      {
        "type": "paragraph",
        "value": "TypeScript is amazing at inferring types automatically, which helps you write less code and catch many errors early. However, sometimes TypeScript's type inference can fail or behave unexpectedly, leading to confusing errors or overly broad types. Understanding why these inference failures happen and how to analyze them will help you become a more confident TypeScript developer."
      },
      {
        "type": "paragraph",
        "value": "In this article, we'll cover some common scenarios where type inference trips up and how to explicitly help TypeScript with your types."
      },
      {
        "type": "paragraph",
        "value": "### 1. Inference Failure with Empty Arrays"
      },
      {
        "type": "paragraph",
        "value": "When you initialize an empty array, TypeScript cannot know what type of elements it will hold, so it often infers it as `never[]` which results in errors when you try to push other types later."
      },
      {
        "type": "code",
        "value": "const values = [];\nvalues.push(42); // Error: Argument of type 'number' is not assignable to parameter of type 'never'."
      },
      {
        "type": "paragraph",
        "value": "To fix this, explicitly declare the array type to let TypeScript know what to expect:"
      },
      {
        "type": "code",
        "value": "const values: number[] = [];\nvalues.push(42); // No error"
      },
      {
        "type": "paragraph",
        "value": "### 2. Functions with Multiple Return Types"
      },
      {
        "type": "paragraph",
        "value": "If a function returns different types in different branches, TypeScript will infer a union type. While this is generally good, sometimes the inferred type becomes too complex or too broad."
      },
      {
        "type": "code",
        "value": "function getValue(flag: boolean) {\n  if (flag) {\n    return 42;\n  } else {\n    return 'hello';\n  }\n}\n\nconst result = getValue(true); // inferred as string | number"
      },
      {
        "type": "paragraph",
        "value": "If you want to narrow down the return type intentionally, consider using function overloads or adding explicit return type annotations."
      },
      {
        "type": "code",
        "value": "function getValue(flag: true): number;\nfunction getValue(flag: false): string;\nfunction getValue(flag: boolean): number | string {\n  if (flag) {\n    return 42;\n  } else {\n    return 'hello';\n  }\n}"
      },
      {
        "type": "paragraph",
        "value": "### 3. Complex Object Literals and Excess Property Checks"
      },
      {
        "type": "paragraph",
        "value": "Sometimes when assigning an object literal to a typed variable, TypeScript can throw errors about excess properties if there are unexpected properties."
      },
      {
        "type": "code",
        "value": "interface User {\n  name: string;\n  age: number;\n}\n\nconst user: User = {\n  name: 'Alice',\n  age: 30,\n  location: 'Earth' // Error: Object literal may only specify known properties\n};"
      },
      {
        "type": "paragraph",
        "value": "This happens because TypeScript performs a strict check on object literals. To fix this, you can either remove the extra property or use a type assertion if you're sure the extra properties are acceptable."
      },
      {
        "type": "code",
        "value": "const user = {\n  name: 'Alice',\n  age: 30,\n  location: 'Earth'\n} as User;"
      },
      {
        "type": "paragraph",
        "value": "### 4. Improper Generics Usage"
      },
      {
        "type": "paragraph",
        "value": "TypeScript often infers generic types automatically, but in some cases inference fails because of complex relationships or async functions."
      },
      {
        "type": "code",
        "value": "async function fetchData<T>(url: string): Promise<T> {\n  const response = await fetch(url);\n  return response.json();\n}\n\nconst data = await fetchData('/api/data'); // 'data' is of inferred type 'unknown'"
      },
      {
        "type": "paragraph",
        "value": "Here, since TypeScript has no info about what T should be, it defaults to 'unknown'. To fix this, specify the expected type whenever you call the function."
      },
      {
        "type": "code",
        "value": "interface ApiResponse {\n  id: number;\n  message: string;\n}\n\nconst data = await fetchData<ApiResponse>('/api/data');"
      },
      {
        "type": "paragraph",
        "value": "### How to Analyze Inference Failures"
      },
      {
        "type": "paragraph",
        "value": "When you encounter inference errors, here are some tips to analyze them:"
      },
      {
        "type": "paragraph",
        "value": "- **Hover your variables in your IDE:** Most editors show inferred types on hover.\n- **Add explicit type annotations:** This helps you understand what TypeScript expects vs. what it inferred.\n- **Simplify complex expressions:** Break down complicated expressions into smaller variables with explicit types.\n- **Use the `--noImplicitAny` and `--strict` flags:** These compiler options help reveal hidden inference problems.\n- **Leverage `as const` for literals:** This narrows types of literals from general types like `string` to exact values."
      },
      {
        "type": "paragraph",
        "value": "### Conclusion"
      },
      {
        "type": "paragraph",
        "value": "TypeScript's type inference makes coding easier and safer, but sometimes it gets confused or infers overly broad or narrow types. When this happens, giving TypeScript more hints with explicit types, overloads, or assertions can help. Use your IDE tooling and break complex code into simpler parts to better understand how inference works. With practice, analyzing inference failures becomes second nature."
      }
    ]
  },
  {
    "slug": "building-your-first-web-scraper-with-python-step-by-step",
    "title": "Building Your First Web Scraper with Python: A Step-by-Step Tutorial",
    "language": "python",
    "type": "tutorials",
    "description": "Learn how to create a simple web scraper using Python. This beginner-friendly tutorial guides you through the basics of retrieving and parsing web data using popular libraries like requests and BeautifulSoup.",
    "content": [
      {
        "type": "paragraph",
        "value": "Welcome to this tutorial on building your first web scraper with Python! Web scraping is a technique used to extract data from websites, which can be useful for data analysis, research, and automating repetitive tasks. In this tutorial, we'll learn how to download a web page and pull out useful information using Python."
      },
      {
        "type": "paragraph",
        "value": "We'll be using two popular Python libraries: `requests` to fetch the webpage content, and `BeautifulSoup` from the `bs4` package to parse the HTML and extract information. Let's get started!"
      },
      {
        "type": "paragraph",
        "value": "### Step 1: Install Required Libraries\nFirst, make sure you have the necessary packages installed. Open your terminal or command prompt and run the following commands:"
      },
      {
        "type": "code",
        "value": "pip install requests beautifulsoup4"
      },
      {
        "type": "paragraph",
        "value": "### Step 2: Fetch a Webpage with Requests\nLet's write Python code to download a webpage. For this example, we'll scrape quotes from http://quotes.toscrape.com, a site built specifically for web scraping practice."
      },
      {
        "type": "code",
        "value": "import requests\n\nurl = 'http://quotes.toscrape.com'\nresponse = requests.get(url)\n\nif response.status_code == 200:\n    print(\"Page downloaded successfully!\")\nelse:\n    print(\"Failed to retrieve the page\")"
      },
      {
        "type": "paragraph",
        "value": "If you run this script, it should print \"Page downloaded successfully!\" if the website is reachable."
      },
      {
        "type": "paragraph",
        "value": "### Step 3: Parse the HTML with BeautifulSoup\nNow that we have the page content, let's parse the HTML and extract the quotes."
      },
      {
        "type": "code",
        "value": "from bs4 import BeautifulSoup\n\nsoup = BeautifulSoup(response.text, 'html.parser')\n\n# Find all quote containers on the page\ndiv_quotes = soup.find_all('div', class_='quote')\n\nprint(f\"Found {len(div_quotes)} quotes on the page.\")"
      },
      {
        "type": "paragraph",
        "value": "### Step 4: Extract Text from the Quotes\nEach quote container has a quote text and the author's name. Let's loop through the results and print them."
      },
      {
        "type": "code",
        "value": "for quote in div_quotes:\n    text = quote.find('span', class_='text').get_text()\n    author = quote.find('small', class_='author').get_text()\n    print(f'{text} — {author}')"
      },
      {
        "type": "paragraph",
        "value": "### Full Working Script\nHere's the complete script put together."
      },
      {
        "type": "code",
        "value": "import requests\nfrom bs4 import BeautifulSoup\n\nurl = 'http://quotes.toscrape.com'\nresponse = requests.get(url)\n\nif response.status_code == 200:\n    soup = BeautifulSoup(response.text, 'html.parser')\n    quotes = soup.find_all('div', class_='quote')\n    for quote in quotes:\n        text = quote.find('span', class_='text').get_text()\n        author = quote.find('small', class_='author').get_text()\n        print(f'{text} — {author}')\nelse:\n    print(\"Failed to retrieve the page\")"
      },
      {
        "type": "paragraph",
        "value": "### Next Steps\nYou can extend your scraper to navigate multiple pages, save data to a file, or extract other types of information. Always remember to respect the website's terms of use and robots.txt files, and avoid overloading their servers with too many requests."
      },
      {
        "type": "paragraph",
        "value": "Congratulations! You've just built your first web scraper using Python! Keep exploring and happy coding."
      }
    ]
  },
  {
    "slug": "designing-resilient-python-systems-handling-memory-leak-errors-effectively",
    "title": "Designing Resilient Python Systems: Handling Memory Leak Errors Effectively",
    "language": "python",
    "type": "errors",
    "description": "Learn how to identify, prevent, and handle memory leak errors in Python to build more resilient and efficient systems.",
    "content": [
      {
        "type": "paragraph",
        "value": "Memory leaks can cause Python applications to consume increasing amounts of memory over time, eventually leading to crashes or slow performance. This article introduces beginners to the concept of memory leaks, how to detect them, and best practices for preventing and handling these errors effectively in Python."
      },
      {
        "type": "paragraph",
        "value": "What is a memory leak? Simply put, it's when a program keeps consuming memory without releasing it back to the system, causing memory usage to grow unnecessarily. Python has automatic memory management, but memory leaks can still happen through reference cycles or holding onto resources longer than needed."
      },
      {
        "type": "paragraph",
        "value": "### Detecting Memory Leaks\nOne useful tool to detect memory leaks is the `tracemalloc` module that comes with Python. It helps track memory allocations and spot where leaks occur."
      },
      {
        "type": "code",
        "value": "import tracemalloc\n\ntracemalloc.start()\n\n# Your Python code here\n\nsnapshot1 = tracemalloc.take_snapshot()\n\n# Simulate some code that may leak memory\nleaky_list = []\nfor i in range(10000):\n    leaky_list.append(str(i) * 1000)\n\nsnapshot2 = tracemalloc.take_snapshot()\n\nstats = snapshot2.compare_to(snapshot1, 'lineno')\nfor stat in stats[:5]:\n    print(stat)"
      },
      {
        "type": "paragraph",
        "value": "### Common Causes of Memory Leaks\n- **Reference cycles:** Objects that reference each other, preventing garbage collection.\n- **Global variables:** Holding large data longer than necessary.\n- **Unclosed resources:** Files, network connections, or database cursors not properly closed."
      },
      {
        "type": "paragraph",
        "value": "### Preventing Memory Leaks\n1. Use context managers (`with` statements) to ensure resources are closed properly.\n2. Avoid unnecessary global variables.\n3. Break reference cycles by using weak references (`weakref` module) when appropriate.\n4. Regularly test and profile memory usage, especially after changes."
      },
      {
        "type": "code",
        "value": "# Example of using a context manager to prevent leaking file descriptors\nwith open('data.txt', 'r') as file:\n    data = file.read()\n# file is automatically closed here"
      },
      {
        "type": "paragraph",
        "value": "### Handling Memory Errors Gracefully\nSometimes, despite precautions, your program may run out of memory. Python raises a `MemoryError`. You can catch this error and handle it gracefully to avoid a crash."
      },
      {
        "type": "code",
        "value": "try:\n    big_list = [x for x in range(10**9)]  # Intentionally large\nexcept MemoryError:\n    print('MemoryError caught! Cleaning up resources...')\n    # Add cleanup or fallback code here"
      },
      {
        "type": "paragraph",
        "value": "### Summary\n- Monitor your program’s memory use with tools like `tracemalloc`.\n- Use best practices such as context managers and weak references to avoid leaks.\n- Prepare to catch `MemoryError` to prevent crashes.\nFollowing these tips helps you build Python systems that are more resilient and reliable over time."
      }
    ]
  },
  {
    "slug": "designing-scalable-multi-tenant-databases-with-sql",
    "title": "Designing Scalable Multi-Tenant Databases with SQL: A Beginner's Guide",
    "language": "sql",
    "type": "tutorials",
    "description": "Learn the basics of designing scalable multi-tenant databases using SQL. Understand multi-tenancy models and get started with example schemas to build efficient, maintainable, and scalable applications.",
    "content": [
      {
        "type": "paragraph",
        "value": "Multi-tenancy is a software architecture where a single instance of a software application serves multiple customers, called tenants. Each tenant's data is isolated and secure, even though they share the same database infrastructure. Designing your database properly is crucial for scalability and maintainability."
      },
      {
        "type": "paragraph",
        "value": "There are three common approaches to multi-tenant database design:\n1. Separate Database per Tenant\n2. Shared Database, Separate Schema\n3. Shared Database, Shared Schema"
      },
      {
        "type": "paragraph",
        "value": "In this tutorial, we will focus on the third model - Shared Database, Shared Schema - which is popular for SaaS applications because it balances resource efficiency and ease of management."
      },
      {
        "type": "paragraph",
        "value": "### Step 1: Add a Tenant Identifier Column\nTo distinguish each tenant's data in shared tables, add a `tenant_id` column to your tables."
      },
      {
        "type": "code",
        "value": "-- Example: Creating a users table with tenant_id\nCREATE TABLE users (\n    user_id SERIAL PRIMARY KEY,\n    tenant_id INT NOT NULL,\n    username VARCHAR(50) NOT NULL,\n    email VARCHAR(100) NOT NULL,\n    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,\n    UNIQUE (tenant_id, username) -- ensure usernames are unique within each tenant\n);"
      },
      {
        "type": "paragraph",
        "value": "### Step 2: Query Data Filtering by Tenant\nWhen querying data, always filter by the tenant_id to ensure tenants only access their own data."
      },
      {
        "type": "code",
        "value": "-- Example: Get users for a specific tenant\nSELECT * FROM users WHERE tenant_id = 1;"
      },
      {
        "type": "paragraph",
        "value": "### Step 3: Index Tenant Columns\nFor performance, create indexes on the tenant_id column, especially when it’s used in WHERE clauses."
      },
      {
        "type": "code",
        "value": "-- Example: Index on tenant_id and username for faster lookups\nCREATE INDEX idx_users_tenant_username ON users (tenant_id, username);"
      },
      {
        "type": "paragraph",
        "value": "### Step 4: Handle Tenant Joins Carefully\nWhen working with multiple tables, always join on tenant_id to avoid cross-tenant data leaks."
      },
      {
        "type": "code",
        "value": "-- Example: Joining orders with users by tenant\nSELECT o.order_id, o.amount, u.username\nFROM orders o\nJOIN users u ON o.user_id = u.user_id AND o.tenant_id = u.tenant_id\nWHERE o.tenant_id = 1;"
      },
      {
        "type": "paragraph",
        "value": "### Step 5: Enforce Data Integrity\nUse constraints that include tenant_id to keep data isolated."
      },
      {
        "type": "code",
        "value": "-- Example: Ensure orders have a valid tenant and user\nCREATE TABLE orders (\n    order_id SERIAL PRIMARY KEY,\n    tenant_id INT NOT NULL,\n    user_id INT NOT NULL,\n    amount DECIMAL(10,2) NOT NULL,\n    order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,\n    FOREIGN KEY (user_id, tenant_id) REFERENCES users(user_id, tenant_id)\n);"
      },
      {
        "type": "paragraph",
        "value": "### Summary\nDesigning multi-tenant databases with shared schema involves careful design around the tenant_id columns. This enables you to efficiently serve multiple tenants while maintaining data isolation and optimizing performance with indexes and constraints."
      },
      {
        "type": "paragraph",
        "value": "With these basics, you can start building scalable multi-tenant applications using SQL!"
      }
    ]
  },
  {
    "slug": "optimizing-sql-query-performance-in-large-scale-ecommerce-databases",
    "title": "Optimizing SQL Query Performance in Large-Scale E-Commerce Databases",
    "language": "sql",
    "type": "errors",
    "description": "Learn how to spot and fix common SQL query errors that slow down performance in large-scale e-commerce databases.",
    "content": [
      {
        "type": "paragraph",
        "value": "In large-scale e-commerce platforms, databases often contain millions of records. Slow SQL queries can cause delays in displaying products, processing orders, or generating reports. Beginners frequently make common mistakes that degrade query performance. This article will help you identify and fix these errors to optimize your SQL queries effectively."
      },
      {
        "type": "paragraph",
        "value": "One typical error is using SELECT * instead of selecting only the columns you need. Retrieving unnecessary data increases I/O and slows the query."
      },
      {
        "type": "code",
        "value": "SELECT * FROM orders WHERE customer_id = 12345;"
      },
      {
        "type": "paragraph",
        "value": "This can be optimized by selecting only the required columns, for example:"
      },
      {
        "type": "code",
        "value": "SELECT order_id, order_date, total_amount FROM orders WHERE customer_id = 12345;"
      },
      {
        "type": "paragraph",
        "value": "Another common problem is missing indexes on columns used in WHERE, JOIN, or ORDER BY clauses. Without indexes, the database must scan the entire table, which is very slow for large datasets."
      },
      {
        "type": "code",
        "value": "CREATE INDEX idx_customer_id ON orders(customer_id);"
      },
      {
        "type": "paragraph",
        "value": "Improper use of functions in WHERE clauses can also prevent index usage. For example, this query will be slow if order_date is indexed:"
      },
      {
        "type": "code",
        "value": "SELECT * FROM orders WHERE YEAR(order_date) = 2023;"
      },
      {
        "type": "paragraph",
        "value": "Instead, rewrite it to allow the index to be used:"
      },
      {
        "type": "code",
        "value": "SELECT * FROM orders WHERE order_date >= '2023-01-01' AND order_date < '2024-01-01';"
      },
      {
        "type": "paragraph",
        "value": "Finally, avoid using NOT IN or NOT EXISTS on large datasets without considering alternatives, as they can cause slow subqueries."
      },
      {
        "type": "code",
        "value": "SELECT product_id FROM products WHERE product_id NOT IN (SELECT product_id FROM orders);"
      },
      {
        "type": "paragraph",
        "value": "Use LEFT JOIN with IS NULL instead for better performance:"
      },
      {
        "type": "code",
        "value": "SELECT p.product_id FROM products p LEFT JOIN orders o ON p.product_id = o.product_id WHERE o.product_id IS NULL;"
      },
      {
        "type": "paragraph",
        "value": "By avoiding SELECT *, adding proper indexes, rewriting functions in WHERE clauses, and replacing NOT IN with LEFT JOINs, you can dramatically improve SQL query performance in your large-scale e-commerce database."
      }
    ]
  }
];
