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
  },
  {
    "slug": "leveraging-proxy-objects-to-create-reactive-data-models-in-javascript",
    "title": "Leveraging Proxy Objects to Create Reactive Data Models in JavaScript",
    "language": "javascript",
    "type": "tutorials",
    "description": "Learn how to use JavaScript Proxy objects to create reactive data models that automatically respond to changes, opening the door to building dynamic and responsive applications.",
    "content": [
      {
        "type": "paragraph",
        "value": "In modern web development, reactivity is a powerful concept that allows your application to automatically respond to data changes. Frameworks like Vue.js and React use this concept heavily under the hood. But what if you want to create a simple reactive data model yourself using plain vanilla JavaScript? That's where the Proxy object comes in. Introduced in ES6, Proxy lets you intercept operations on objects, making it a perfect tool for building reactive models."
      },
      {
        "type": "paragraph",
        "value": "In this tutorial, we'll explore how to create a basic reactive data object using JavaScript Proxy. You will learn how to listen for changes and automatically trigger updates, which can be used to update your UI or trigger side effects."
      },
      {
        "type": "paragraph",
        "value": "Let's start by creating a reactive object that logs when any property changes."
      },
      {
        "type": "code",
        "value": "function reactive(target) {\n  return new Proxy(target, {\n    set(obj, prop, value) {\n      obj[prop] = value; // update the property\n      console.log(`Property \"${prop}\" changed to \"${value}\"`);\n      // Here you could trigger UI updates or other effects\n      return true; // indicate success\n    },\n    get(obj, prop) {\n      return obj[prop]; // simply return the property value\n    }\n  });\n}\n\nconst person = reactive({ name: 'Alice', age: 25 });\nperson.name = 'Bob'; // Console: Property \"name\" changed to \"Bob\"\nperson.age = 30;    // Console: Property \"age\" changed to \"30\""
      },
      {
        "type": "paragraph",
        "value": "In the code above, we created a function called `reactive` that takes an object and returns a Proxy wrapped version of it. Whenever a property is set, the Proxy's `set` handler is called. Here, we log the change to the console. You can replace this with any other logic, such as updating a DOM element."
      },
      {
        "type": "paragraph",
        "value": "Next, let's enhance this reactive system to allow registering callback functions that run when data updates happen."
      },
      {
        "type": "code",
        "value": "function reactiveWithEffect(target) {\n  const effects = new Set();\n\n  const proxy = new Proxy(target, {\n    set(obj, prop, value) {\n      obj[prop] = value;\n      effects.forEach(effect => effect());\n      return true;\n    },\n    get(obj, prop) {\n      return obj[prop];\n    }\n  });\n\n  proxy.onChange = function(effect) {\n    effects.add(effect);\n  };\n\n  return proxy;\n}\n\nconst state = reactiveWithEffect({ count: 0 });\n\nstate.onChange(() => {\n  console.log(`Count is now: ${state.count}`);\n});\n\nstate.count = 1; // Console: Count is now: 1\nstate.count = 2; // Console: Count is now: 2"
      },
      {
        "type": "paragraph",
        "value": "Here, we added an `onChange` method to our reactive object that allows multiple effects (callback functions) to be registered. Every time the data changes, all registered effects run, making it easy to keep UI or other parts of your application in sync with your data."
      },
      {
        "type": "paragraph",
        "value": "### Summary\n- The JavaScript Proxy object lets you intercept operations on an object (like setting or getting properties).\n- By using the `set` handler, we can detect when a property changes.\n- This lets us create simple reactive data models that automatically trigger effects or UI updates.\n- You can expand this basic pattern to build sophisticated reactive frameworks or applications."
      },
      {
        "type": "paragraph",
        "value": "Try experimenting with the code examples above. Create your own effects and see how easy it is to make your JavaScript objects reactive!"
      }
    ]
  },
  {
    "slug": "mastering-the-art-of-function-currying-for-cleaner-code",
    "title": "Mastering the Art of Function Currying for Cleaner Code",
    "language": "javascript",
    "type": "tutorials",
    "description": "Learn the basics of function currying in JavaScript and how it helps write cleaner, more reusable, and more readable code through simple examples.",
    "content": [
      {
        "type": "paragraph",
        "value": "If you've started exploring JavaScript beyond the basics, you might have heard about a powerful concept called function currying. It sounds like something from a cooking class, but in programming, currying is a tasty way to write cleaner, reusable functions."
      },
      {
        "type": "paragraph",
        "value": "So what exactly is currying? In simple terms, currying is a technique of transforming a function that takes multiple arguments into a sequence of functions, each taking a single argument. Instead of giving all arguments at once, you give them one at a time."
      },
      {
        "type": "paragraph",
        "value": "Let's see an example to understand this better."
      },
      {
        "type": "code",
        "value": "function add(a, b) {\n  return a + b;\n}\n\nconsole.log(add(2, 3)); // Output: 5"
      },
      {
        "type": "paragraph",
        "value": "Here, `add` takes two arguments `a` and `b` and returns their sum. Now, using currying, we can rewrite `add` so it takes one argument at a time:"
      },
      {
        "type": "code",
        "value": "function curriedAdd(a) {\n  return function(b) {\n    return a + b;\n  };\n}\n\nconst addTwo = curriedAdd(2);\nconsole.log(addTwo(3)); // Output: 5"
      },
      {
        "type": "paragraph",
        "value": "In this curried version, `curriedAdd` takes one argument `a` and returns a new function that takes another argument `b`. This lets us create specialized functions like `addTwo`, which adds 2 to any number."
      },
      {
        "type": "paragraph",
        "value": "Currying becomes very helpful when you want to create flexible and reusable functions, especially in functional programming or when working with higher-order functions."
      },
      {
        "type": "paragraph",
        "value": "Let's create a more generic currying helper function that can work with any function:"
      },
      {
        "type": "code",
        "value": "function curry(fn) {\n  return function curried(...args) {\n    if (args.length >= fn.length) {\n      return fn(...args);\n    } else {\n      return function(...nextArgs) {\n        return curried(...args.concat(nextArgs));\n      };\n    }\n  };\n}"
      },
      {
        "type": "paragraph",
        "value": "Here’s how to use it with a simple multiply function:"
      },
      {
        "type": "code",
        "value": "function multiply(a, b, c) {\n  return a * b * c;\n}\n\nconst curriedMultiply = curry(multiply);\n\nconsole.log(curriedMultiply(2)(3)(4)); // Output: 24\nconsole.log(curriedMultiply(2, 3)(4)); // Output: 24\nconsole.log(curriedMultiply(2)(3, 4)); // Output: 24"
      },
      {
        "type": "paragraph",
        "value": "Notice how our `curriedMultiply` function can be called with arguments one by one or partially applied with multiple arguments at once until all arguments are provided."
      },
      {
        "type": "paragraph",
        "value": "### Why use currying?\n- It makes your functions more flexible and composable.\n- It supports partial application, where you can fix some arguments and reuse functions easily.\n- It helps build cleaner, more readable code especially when working with complex function chains."
      },
      {
        "type": "paragraph",
        "value": "### Summary\nCurrying transforms multi-argument functions into nested single-argument functions. By mastering currying, you can write code that’s modular, reusable, and easier to maintain. Practice by trying to curry your own functions, and you’ll soon see the benefits in your JavaScript projects!"
      }
    ]
  },
  {
    "slug": "using-web-workers-to-offload-heavy-computations-in-javascript",
    "title": "Using Web Workers to Offload Heavy Computations in JavaScript",
    "language": "javascript",
    "type": "tutorials",
    "description": "Learn how to use Web Workers in JavaScript to run heavy computations in the background, keeping your web app responsive.",
    "content": [
      {
        "type": "paragraph",
        "value": "When building web applications, running heavy tasks like complex calculations can freeze the user interface, making the app feel slow or unresponsive. Web Workers allow us to run such tasks in the background, off the main thread, so the UI stays smooth."
      },
      {
        "type": "paragraph",
        "value": "In this tutorial, you'll learn how to create a simple Web Worker that calculates a large Fibonacci number without blocking the main UI thread."
      },
      {
        "type": "paragraph",
        "value": "### What are Web Workers?\nWeb Workers are a way to run JavaScript in background threads. They do not have access to the DOM but can communicate with the main script via messages."
      },
      {
        "type": "paragraph",
        "value": "### Step 1: Create a Worker Script\nCreate a separate JavaScript file called `worker.js`. This file will contain the code that runs inside the worker."
      },
      {
        "type": "code",
        "value": "self.onmessage = function(event) {\n  const n = event.data;\n\n  function fibonacci(num) {\n    if (num <= 1) return num;\n    return fibonacci(num - 1) + fibonacci(num - 2);\n  }\n\n  const result = fibonacci(n);\n\n  // Post the result back to main thread\n  self.postMessage(result);\n};"
      },
      {
        "type": "paragraph",
        "value": "### Step 2: Using the Worker in Your Main Script\nNow, let's create the main script file (e.g. `main.js`) where you start the worker and listen for messages from it."
      },
      {
        "type": "code",
        "value": "const worker = new Worker('worker.js');\n\n// Send data to the worker\nworker.postMessage(40);  // Calculate the 40th Fibonacci number\n\n// Listen for messages from the worker\nworker.onmessage = function(event) {\n  console.log('Fibonacci result:', event.data);\n  alert('Fibonacci result: ' + event.data);\n};\n\n// Optional: handle worker errors\nworker.onerror = function(error) {\n  console.error('Worker error:', error.message);\n};"
      },
      {
        "type": "paragraph",
        "value": "### Step 3: Putting It All Together in HTML\nFinally, you can create a simple HTML page to test this setup."
      },
      {
        "type": "code",
        "value": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\" />\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n  <title>Web Worker Demo</title>\n</head>\n<body>\n  <h1>Web Worker Fibonacci Calculator</h1>\n  <button id=\"startBtn\">Start Calculation</button>\n\n  <script src=\"main.js\"></script>\n  <script>\n    const startBtn = document.getElementById('startBtn');\n    const worker = new Worker('worker.js');\n\n    worker.onmessage = function(event) {\n      alert('Fibonacci result: ' + event.data);\n      startBtn.disabled = false;\n    };\n\n    worker.onerror = function(error) {\n      console.error('Worker error:', error.message);\n      startBtn.disabled = false;\n    };\n\n    startBtn.addEventListener('click', () => {\n      startBtn.disabled = true;\n      // Calculate 40th Fibonacci number\n      worker.postMessage(40);\n    });\n  </script>\n</body>\n</html>"
      },
      {
        "type": "paragraph",
        "value": "### Summary\nYou have learned how to use Web Workers to run heavy computing tasks without freezing your web page. This technique makes your applications feel faster and more responsive. Try adapting Web Workers for other long-running tasks like image processing or data parsing!"
      }
    ]
  },
  {
    "slug": "comparing-async-await-and-generators-for-managing-asynchronous-code",
    "title": "Comparing Async/Await and Generators for Managing Asynchronous Code in JavaScript",
    "language": "javascript",
    "type": "tutorials",
    "description": "A beginner-friendly tutorial exploring how Async/Await and Generators handle asynchronous code in JavaScript, with explanations and code examples.",
    "content": [
      {
        "type": "paragraph",
        "value": "When writing JavaScript code that deals with async operations like fetching data or reading files, managing the flow of asynchronous code can sometimes feel tricky. Two popular methods to handle this are Async/Await and Generators. In this tutorial, we'll explore both approaches, understand how they work, and see simple examples to help you decide which suits you best."
      },
      {
        "type": "paragraph",
        "value": "### What is Async/Await?"
      },
      {
        "type": "paragraph",
        "value": "Async/Await is a modern, built-in feature in JavaScript designed to make asynchronous code look and behave more like synchronous code. It is built on top of Promises and allows you to write cleaner and more readable async functions."
      },
      {
        "type": "paragraph",
        "value": "Here’s a simple example using Async/Await:"
      },
      {
        "type": "code",
        "value": "function wait(ms) {\n  return new Promise(resolve => setTimeout(resolve, ms));\n}\n\nasync function asyncExample() {\n  console.log('Start');\n  await wait(1000); // wait for 1 second\n  console.log('1 second later');\n}\n\nasyncExample();"
      },
      {
        "type": "paragraph",
        "value": "In this example, `asyncExample` is an async function that pauses at the `await` keyword until the `wait` promise resolves after 1 second, then continues."
      },
      {
        "type": "paragraph",
        "value": "### What are Generators?"
      },
      {
        "type": "paragraph",
        "value": "Generators are special functions you can pause and resume. They are declared with a `*` and use the `yield` keyword to pause the execution. They are not specifically designed for async code but can be used to manage async operations in older JavaScript environments before Async/Await existed."
      },
      {
        "type": "paragraph",
        "value": "A basic generator example looks like this:"
      },
      {
        "type": "code",
        "value": "function* simpleGenerator() {\n  console.log('Start');\n  yield; // pause here\n  console.log('Resumed');\n}\n\nconst gen = simpleGenerator();\ngen.next(); // logs 'Start'\ngen.next(); // logs 'Resumed'"
      },
      {
        "type": "paragraph",
        "value": "### Using Generators to Handle Async Code"
      },
      {
        "type": "paragraph",
        "value": "To use Generators for async code, you usually combine them with helper functions that automatically advance the generator when asynchronous operations complete."
      },
      {
        "type": "paragraph",
        "value": "Here’s an example emulating Async/Await using Generators and Promises:"
      },
      {
        "type": "code",
        "value": "function wait(ms) {\n  return new Promise(resolve => setTimeout(resolve, ms));\n}\n\nfunction runGenerator(genFn) {\n  const gen = genFn();\n\n  function step(value) {\n    const result = gen.next(value);\n    if (!result.done) {\n      result.value.then(step);\n    }\n  }\n\n  step();\n}\n\n// Generator-based async function\nfunction* genExample() {\n  console.log('Start');\n  yield wait(1000);\n  console.log('1 second later');\n}\n\nrunGenerator(genExample);"
      },
      {
        "type": "paragraph",
        "value": "In this `runGenerator` function, the generator pauses at each `yield` keyword (which yields a promise), and only continues once the promise resolves."
      },
      {
        "type": "paragraph",
        "value": "### Comparing Async/Await and Generators"
      },
      {
        "type": "paragraph",
        "value": "- **Syntax:** Async/Await is simpler and more readable, resembling synchronous code. Generators require more boilerplate to work with async flows.\n- **Error Handling:** Async/Await uses standard try/catch blocks, making error handling straightforward. Generator-based async code requires careful error propagation.\n- **Browser Support:** Async/Await is supported in modern environments. Generators are older and supported in many environments but need helpers for async operations.\n- **Use Case:** Async/Await is recommended for new projects. Generators are mainly useful in legacy code or when you want fine control over function execution."
      },
      {
        "type": "paragraph",
        "value": "### Summary"
      },
      {
        "type": "paragraph",
        "value": "Async/Await is the modern, cleaner way to handle asynchronous code in JavaScript, improving readability and simplifying error handling. Generators can manage async workflows but require additional code and are now mostly historical interest or for advanced use cases."
      },
      {
        "type": "paragraph",
        "value": "Try to use Async/Await in your projects for easier-to-read asynchronous code, but understanding Generators can give you deeper insight into JavaScript’s asynchronous capabilities."
      }
    ]
  },
  {
    "slug": "dynamic-module-loading-optimize-performance-js-imports",
    "title": "Dynamic Module Loading: How to Optimize Performance with JavaScript Imports",
    "language": "javascript",
    "type": "tutorials",
    "description": "Learn how to use dynamic imports in JavaScript to load modules only when needed, improving your web app's performance.",
    "content": [
      {
        "type": "paragraph",
        "value": "When building web applications, loading all your JavaScript code upfront can slow down the initial loading time. Dynamic module loading allows you to load parts of your code only when they are needed, making your app faster and more efficient. In this tutorial, we'll explore how to use JavaScript's dynamic import() function to achieve this."
      },
      {
        "type": "paragraph",
        "value": "## What is Dynamic Module Loading?"
      },
      {
        "type": "paragraph",
        "value": "Dynamic module loading means you load JavaScript modules during runtime instead of at the start. This way, the browser downloads only the essential code first and fetches other modules later, based on user actions or other conditions."
      },
      {
        "type": "paragraph",
        "value": "## Static vs Dynamic Imports"
      },
      {
        "type": "paragraph",
        "value": "Typically, we use static imports like this:"
      },
      {
        "type": "code",
        "value": "import { greet } from './greet.js';\ngreet();"
      },
      {
        "type": "paragraph",
        "value": "Static imports load modules before the code runs, which can increase the startup time if the module is large or unused initially."
      },
      {
        "type": "paragraph",
        "value": "With dynamic imports, you can load the module only when you need it:"
      },
      {
        "type": "code",
        "value": "button.addEventListener('click', () => {\n  import('./greet.js')\n    .then(module => {\n      module.greet();\n    })\n    .catch(err => {\n      console.error('Failed to load module', err);\n    });\n});"
      },
      {
        "type": "paragraph",
        "value": "In this example, the greet module is loaded only when the user clicks a button."
      },
      {
        "type": "paragraph",
        "value": "## Example: Dynamic Import in Action"
      },
      {
        "type": "paragraph",
        "value": "Let's say you have a simple app where you want to show a greeting only when the user decides to see it."
      },
      {
        "type": "code",
        "value": "// greet.js\nexport function greet() {\n  alert('Hello! Welcome to dynamic imports!');\n}\n\n// main.js\nconst button = document.createElement('button');\nbutton.textContent = 'Load Greeting';\ndocument.body.appendChild(button);\n\nbutton.addEventListener('click', () => {\n  import('./greet.js')\n    .then(module => {\n      module.greet();\n    })\n    .catch(err => {\n      console.error('Error loading the greeting module:', err);\n    });\n});"
      },
      {
        "type": "paragraph",
        "value": "When the user clicks the \"Load Greeting\" button, only then does the greet.js module load, saving resources when the greeting is not needed immediately."
      },
      {
        "type": "paragraph",
        "value": "## Benefits of Dynamic Imports"
      },
      {
        "type": "paragraph",
        "value": "- **Improved performance:** Load only what you need, when you need it.\n- **Better user experience:** Faster initial load times.\n- **Code splitting:** Break your code into smaller chunks automatically.\n- **Lazy loading:** Useful for rarely used parts of your app or large libraries."
      },
      {
        "type": "paragraph",
        "value": "## Key Points to Remember"
      },
      {
        "type": "paragraph",
        "value": "- Dynamic import() returns a promise.\n- You can use async/await to handle imports more neatly.\n- Errors can occur if the module path is wrong, so always catch errors.\n- Browser support is good in modern browsers but check if you need polyfills or bundler configurations."
      },
      {
        "type": "paragraph",
        "value": "## Conclusion"
      },
      {
        "type": "paragraph",
        "value": "Dynamic module loading with JavaScript imports is a powerful way to make your web applications faster and more efficient. By loading code only when needed, you reduce the initial load time and improve the overall user experience. Try incorporating dynamic imports in your next project to see the benefits firsthand!"
      }
    ]
  },
  {
    "slug": "creating-custom-iterators-and-generators-for-efficient-data-processing",
    "title": "Creating Custom Iterators and Generators for Efficient Data Processing",
    "language": "javascript",
    "type": "tutorials",
    "description": "Learn how to create custom iterators and generators in JavaScript to efficiently handle and process data step-by-step.",
    "content": [
      {
        "type": "paragraph",
        "value": "When working with large or complex data sets, sometimes you need to process data one piece at a time instead of loading everything at once. JavaScript offers powerful tools to do this efficiently: custom iterators and generators. They allow you to create sequences of values that you can iterate over, making your code more memory-efficient and easier to manage."
      },
      {
        "type": "paragraph",
        "value": "In this tutorial, we'll learn how to create a custom iterator and a generator function. Both provide ways to generate data on the fly but are used in slightly different ways."
      },
      {
        "type": "paragraph",
        "value": "### What is an Iterator?"
      },
      {
        "type": "paragraph",
        "value": "An iterator is an object with a `next()` method that returns the next value in a sequence along with a `done` property that tells whether the iteration is complete."
      },
      {
        "type": "paragraph",
        "value": "Let's create a simple iterator that counts from 1 to 5."
      },
      {
        "type": "code",
        "value": "function createCounter() {\n  let count = 1;\n  return {\n    next() {\n      if (count <= 5) {\n        return { value: count++, done: false };\n      } else {\n        return { done: true };\n      }\n    }\n  };\n}\n\nconst counter = createCounter();\nconsole.log(counter.next()); // { value: 1, done: false }\nconsole.log(counter.next()); // { value: 2, done: false }\n// Keep calling next() till done is true"
      },
      {
        "type": "paragraph",
        "value": "### Using Iterators with `for...of`"
      },
      {
        "type": "paragraph",
        "value": "To use an object with the `for...of` loop, it needs to be iterable. That means it must have a `[Symbol.iterator]()` method that returns an iterator. Let's update our counter to be iterable."
      },
      {
        "type": "code",
        "value": "const iterableCounter = {\n  count: 1,\n  [Symbol.iterator]() {\n    return {\n      count: this.count,\n      next() {\n        if (this.count <= 5) {\n          return { value: this.count++, done: false };\n        } else {\n          return { done: true };\n        }\n      }\n    };\n  }\n};\n\nfor (const num of iterableCounter) {\n  console.log(num); // 1 2 3 4 5\n}"
      },
      {
        "type": "paragraph",
        "value": "### What is a Generator?"
      },
      {
        "type": "paragraph",
        "value": "Generators offer a simpler way to create iterators. They are functions that can pause their execution by using the `yield` keyword and resume later, producing values one at a time."
      },
      {
        "type": "paragraph",
        "value": "Let's write the same counter using a generator function."
      },
      {
        "type": "code",
        "value": "function* counterGenerator() {\n  for (let i = 1; i <= 5; i++) {\n    yield i;\n  }\n}\n\nconst gen = counterGenerator();\nconsole.log(gen.next()); // { value: 1, done: false }\nconsole.log(gen.next()); // { value: 2, done: false }\n\n// Use in for...of\nfor (const num of counterGenerator()) {\n  console.log(num); // 1 2 3 4 5\n}"
      },
      {
        "type": "paragraph",
        "value": "### Why Use Generators or Custom Iterators?"
      },
      {
        "type": "paragraph",
        "value": "Generators and iterators are great when dealing with large data sets or streams of data. Instead of loading everything into memory at once, you can process items one by one. For example, reading lines from a large file or generating an infinite sequence of numbers."
      },
      {
        "type": "paragraph",
        "value": "### Real-World Example: Processing Data in Chunks"
      },
      {
        "type": "paragraph",
        "value": "Imagine you have a large array, and you want to process it chunk-by-chunk."
      },
      {
        "type": "code",
        "value": "function* chunkGenerator(array, chunkSize) {\n  for (let i = 0; i < array.length; i += chunkSize) {\n    yield array.slice(i, i + chunkSize);\n  }\n}\n\nconst data = [1, 2, 3, 4, 5, 6, 7, 8, 9];\n\nfor (const chunk of chunkGenerator(data, 3)) {\n  console.log(chunk); // [1,2,3] then [4,5,6] then [7,8,9]\n}"
      },
      {
        "type": "paragraph",
        "value": "### Summary"
      },
      {
        "type": "paragraph",
        "value": "Custom iterators give you control over how data is returned step-by-step, and generators provide a clean and easy syntax to build iterators. Learning to use these features will help you write more efficient and readable JavaScript when dealing with sequences or streams of data."
      }
    ]
  },
  {
    "slug": "how-to-build-a-minimalistic-state-management-system-from-scratch",
    "title": "How to Build a Minimalistic State Management System from Scratch",
    "language": "javascript",
    "type": "tutorials",
    "description": "Learn how to create a simple and minimalistic state management system in JavaScript from scratch. This tutorial is perfect for beginners who want to understand the fundamentals of state management without any external libraries.",
    "content": [
      {
        "type": "paragraph",
        "value": "State management is an essential concept in modern web development. It helps you keep track of your application's data and how it changes over time. Popular libraries like Redux or MobX manage state for you, but understanding how they work under the hood is crucial for becoming a better developer. In this tutorial, we'll build a minimalistic state management system from scratch using plain JavaScript."
      },
      {
        "type": "paragraph",
        "value": "Our system will have three main features:\n1. A state object to store data.\n2. A way to update the state.\n3. A subscription system to notify when state changes."
      },
      {
        "type": "paragraph",
        "value": "Let's get started!"
      },
      {
        "type": "code",
        "value": "function createStore(initialState) {\n  let state = initialState;\n  const listeners = [];\n\n  // Get the current state\n  function getState() {\n    return state;\n  }\n\n  // Update the state and notify listeners\n  function setState(update) {\n    state = { ...state, ...update };\n    listeners.forEach((listener) => listener());\n  }\n\n  // Subscribe to state changes\n  function subscribe(listener) {\n    listeners.push(listener);\n    // Return an unsubscribe function\n    return () => {\n      const index = listeners.indexOf(listener);\n      if (index > -1) {\n        listeners.splice(index, 1);\n      }\n    };\n  }\n\n  return { getState, setState, subscribe };\n}"
      },
      {
        "type": "paragraph",
        "value": "Here's a breakdown of this code:\n\n- `createStore` takes an initial state object.\n- `getState` returns the current state.\n- `setState` merges the new updates into the existing state and calls all subscribed listeners.\n- `subscribe` lets other parts of your app listen for changes in the state and returns an unsubscribe function to stop listening."
      },
      {
        "type": "paragraph",
        "value": "Let's see how to use this store:"
      },
      {
        "type": "code",
        "value": "// Create a store with an initial state\nconst store = createStore({ count: 0 });\n\n// Create a listener function to respond to state changes\nfunction render() {\n  console.log(\"Count:\", store.getState().count);\n}\n\n// Subscribe the listener\nconst unsubscribe = store.subscribe(render);\n\n// Initial render\nrender();\n\n// Update the state - this will trigger the listener\nstore.setState({ count: store.getState().count + 1 }); // Count: 1\nstore.setState({ count: store.getState().count + 1 }); // Count: 2\n\n// Stop listening to changes\nunsubscribe();\n\n// This update will not trigger the listener\nstore.setState({ count: store.getState().count + 1 });"
      },
      {
        "type": "paragraph",
        "value": "This simple system shows the core concepts of state management: you create a store, read from it, update it, and react when it changes. You can extend this system by adding features like middleware, action creators, or more complex state updates, but this minimalistic setup is a great starting point."
      },
      {
        "type": "paragraph",
        "value": "Congratulations! You’ve just built your own minimalistic state management system."
      }
    ]
  },
  {
    "slug": "advanced-event-delegation-techniques-for-high-performance-web-apps",
    "title": "Advanced Event Delegation Techniques for High-Performance Web Apps",
    "language": "javascript",
    "type": "tutorials",
    "description": "Learn how to optimize your web app's event handling with advanced event delegation techniques in JavaScript. Boost performance and scalability by managing events more efficiently.",
    "content": [
      {
        "type": "paragraph",
        "value": "Event delegation is a powerful technique in JavaScript that allows you to handle events efficiently by attaching a single event listener to a parent element instead of multiple listeners to individual child elements. This technique works because of event bubbling, where events triggered on child elements propagate up to their parent nodes."
      },
      {
        "type": "paragraph",
        "value": "In this tutorial, we'll explore advanced event delegation techniques that help you build high-performance web applications. Even if you're a beginner, you'll find these patterns useful as your projects grow and require scalable event handling."
      },
      {
        "type": "paragraph",
        "value": "### Why Use Event Delegation?\n- Improves performance by reducing the number of event listeners.\n- Makes dynamic content easier to manage since new elements can automatically be handled.\n- Simplifies cleanup when removing large components or containers."
      },
      {
        "type": "paragraph",
        "value": "### Basic Event Delegation Setup"
      },
      {
        "type": "code",
        "value": "const list = document.getElementById('myList');\n\nlist.addEventListener('click', function(event) {\n  const clickedItem = event.target;\n  if (clickedItem.tagName === 'LI') {\n    console.log('List item clicked:', clickedItem.textContent);\n  }\n});"
      },
      {
        "type": "paragraph",
        "value": "Here, a single click listener on the parent `<ul>` handles clicks on all child `<li>` elements. But as apps grow, you might want to handle many event types or use more complex delegation logic."
      },
      {
        "type": "paragraph",
        "value": "### Advanced Techniques"
      },
      {
        "type": "paragraph",
        "value": "1. **Delegating Multiple Event Types:** Instead of adding separate listeners for each event, create a reusable function that delegates based on event type."
      },
      {
        "type": "code",
        "value": "function delegateEvent(parentSelector, eventType, selector, handler) {\n  const parent = document.querySelector(parentSelector);\n  parent.addEventListener(eventType, function(event) {\n    let targetElement = event.target;\n    while (targetElement && targetElement !== parent) {\n      if (targetElement.matches(selector)) {\n        handler.call(targetElement, event);\n        break;\n      }\n      targetElement = targetElement.parentElement;\n    }\n  });\n}\n\n// Usage example\n// Handles click on all buttons with class 'btn' inside #container\ndelegateEvent('#container', 'click', '.btn', function(e) {\n  console.log('Button clicked:', this.textContent);\n});"
      },
      {
        "type": "paragraph",
        "value": "This `delegateEvent` function improves flexibility by allowing delegation on any parent element, event type, and selector."
      },
      {
        "type": "paragraph",
        "value": "2. **Using Event Capturing for Early Handling:** By default, event listeners fire during the bubbling phase, but you can listen during the capturing phase to intercept events earlier. This can be useful for certain UI patterns."
      },
      {
        "type": "code",
        "value": "document.getElementById('parent').addEventListener('click', function(event) {\n  console.log('Capturing phase listener');\n}, true);  // third argument 'true' enables capturing"
      },
      {
        "type": "paragraph",
        "value": "3. **Managing Delegated Event Performance:** When you have many event listeners, consider throttling or debouncing your handlers to prevent performance bottlenecks, especially on `scroll`, `resize`, or `mousemove` events."
      },
      {
        "type": "paragraph",
        "value": "Example of debouncing a delegated event handler:"
      },
      {
        "type": "code",
        "value": "function debounce(func, delay) {\n  let timeoutId;\n  return function(...args) {\n    clearTimeout(timeoutId);\n    timeoutId = setTimeout(() => func.apply(this, args), delay);\n  };\n}\n\ndelegateEvent('#container', 'scroll', '.scrollable', debounce(function(e) {\n  console.log('Scroll event debounced fired on:', this);\n}, 200));"
      },
      {
        "type": "paragraph",
        "value": "### Summary"
      },
      {
        "type": "paragraph",
        "value": "Advanced event delegation can greatly improve your web app's performance and maintainability. Use reusable delegation functions, take advantage of event capturing when necessary, and optimize event handler execution by throttling or debouncing. Practice these techniques to build scalable and efficient interactive apps."
      },
      {
        "type": "paragraph",
        "value": "Happy coding!"
      }
    ]
  }
];
