# LRU Cache Visualizer

A simple React application that demonstrates the working of an **LRU (Least Recently Used) Cache**. Users can perform PUT and GET operations, view the current cache state, and observe how the cache updates based on recent usage.

---

## Features

- Add key-value pairs using **PUT**
- Retrieve values using **GET**
- Updates cache order based on recent usage
- Automatically removes the least recently used item when capacity is reached
- Displays cache contents in real time
- Shows operation logs
- Simple and interactive UI

---

## DSA Technique Used

### Least Recently Used (LRU) Cache

This project implements the **LRU Cache Replacement Algorithm**, which removes the least recently accessed item when the cache reaches its maximum capacity.

### Data Structures Used

#### 1. Hash Map (JavaScript Map)

- Stores key-value pairs efficiently
- Provides fast insertion, deletion, and lookup
- Average Time Complexity: **O(1)**

#### 2. Recency Tracking

- JavaScript `Map` maintains insertion order
- When a key is accessed or updated:
  - The key is removed
  - Reinserted as the most recently used item
- The first item in the Map becomes the least recently used entry

### LRU Eviction Strategy

When the cache is full:

1. Identify the least recently used item
2. Remove it from the cache
3. Insert the new item

---

## Time Complexity

| Operation | Complexity |
|-----------|------------|
| PUT       | O(1) |
| GET       | O(1) |
| Eviction  | O(1) |

---

## Technologies Used

- React
- JavaScript (ES6)
- CSS
- Vite

---

## Project Structure

```text
src/
├── App.jsx
├── LRUCache.js
└── App.css
```

---

## How to Run

### 1. Clone the Repository

```bash
git clone <repository-url>
```

### 2. Navigate to the Project Folder

```bash
cd lru-cache-visualizer
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Development Server

```bash
npm run dev
```

---

## Cache Capacity

The cache capacity is currently set to **3**.

```javascript
const cacheRef = useRef(new LRUCache(3));
```

---

## Example Execution

### Operations

```text
Put(1, A)
Put(2, B)
Get(1)
Put(3, C)
Put(4, D)
```

### Cache State

```text
After Put(1,A)
[1:A]

After Put(2,B)
[2:B] [1:A]

After Get(1)
[1:A] [2:B]

After Put(3,C)
[3:C] [1:A] [2:B]

After Put(4,D)
[4:D] [3:C] [1:A]
```

Item `2:B` is removed because it is the least recently used entry.

---

## Applications of LRU Cache

- Browser caching
- Operating system page replacement
- Database query caching
- API response caching
- Memory management systems
- Content delivery networks (CDNs)

---

## Learning Outcomes

Through this project, I learned:

- LRU Cache implementation
- Cache replacement algorithms
- JavaScript Map data structure
- React Hooks (`useState`, `useRef`)
- State management in React
- Data structure visualization

---

## Interview Explanation

> "I built an LRU Cache Visualizer using React and JavaScript. The project demonstrates the Least Recently Used cache replacement algorithm. I used JavaScript's Map data structure to achieve efficient key lookup and maintain insertion order. Whenever a key is accessed or updated, it becomes the most recently used item. When the cache reaches its capacity, the least recently used item is automatically removed. This concept is commonly used in browsers, operating systems, and caching systems."

---

## Author

Mahesh Akula
