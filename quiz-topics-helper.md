# 2026 Fresher Online Assessment (OA) Topic Matrix - MCQ Edition

## 1. Aptitude & Cognitive Abilities
### 1.1 Gamified Cognitive & Executive Function Tests (Trending in 2026)
- **Grid & Path Finding:** Finding optimal routes, memorizing obstacle patterns, and spatial reasoning tasks.
- **Memory Recall:** Remembering sequences of shapes, numbers, or rules under time pressure, N-back tests.
- **Fast-Math Challenges:** Rapid arithmetic evaluations, matching equations to equivalent results.
- **Situational Judgment:** Identifying the most logical next step in a workplace or operational scenario.
- **Question Helper Data:** Generate interactive visual logic puzzles, matching pairs, or grid-traversal constraint problems.

### 1.2 Quantitative Aptitude
- **Time, Speed, & Distance:** Relative speed, trains crossing platforms, boats and streams, circular track races.
- **Work & Time:** Efficiency ratios, pipes and cisterns, alternating work days, calculating man-hours.
- **Percentages & Profit/Loss:** Successive discounts, faulty weight dealer problems, simple vs. compound interest.
- **Permutation, Combination & Probability:** Card draws, dice sums, arranging letters with constraints (e.g., vowels together, no two consonants adjacent).
- **Ratios & Mixtures:** Alligation methods, replacing fractions of a liquid mixture.
- **Question Helper Data:** Generate quantitative word problems with numerical distractors based on common calculation errors.

### 1.3 Logical Reasoning
- **Syllogisms:** Deductive reasoning with multiple statements and conclusions (e.g., "All A are B. Some B are C.").
- **Coding-Decoding:** Alphanumeric shifts, substitution ciphers, pattern-based letter coding, matrix coding.
- **Blood Relations:** Coded family trees (e.g., "A % B means A is the father of B") and pointing to a photograph problems.
- **Direction Sense:** Shadow-based direction problems, Pythagoras theorem applied to cardinal directions.
- **Seating Arrangements:** Circular vs. linear seating with complex constraints (inward/outward facing, alternating genders).
- **Data Sufficiency:** Determining if Statement 1, Statement 2, or both are required to answer a mathematical/logical question.

---

## 2. Core CS Fundamentals
### 2.1 Object-Oriented Programming (OOPs)
- **Polymorphism:** Compile-time (Method Overloading, Operator Overloading) vs. Run-time (Method Overriding), Virtual functions, vtables.
- **Inheritance:** Single, Multiple, Multilevel, Hierarchical. Handling the "Diamond Problem" (ambiguity resolution in multiple inheritance).
- **Encapsulation & Abstraction:** Access specifiers (Private, Protected, Public), abstract classes, interfaces, pure virtual functions.
- **Constructors & Destructors:** Default, Parameterized, and Copy constructors, deep copy vs. shallow copy, constructor chaining.
- **Question Helper Data:** Conceptual MCQs asking which OOP principle is demonstrated by a specific real-world analogy or identifying why a specific downcast fails.

### 2.2 Operating Systems (OS)
- **Process Management:** CPU Scheduling algorithms (SJF, FCFS, Round Robin time-slicing, Multilevel Queue), context switching, starvation vs. deadlock.
- **Concurrency & Synchronization:** Mutex vs. Semaphores (binary vs. counting), critical section problem, deadlock conditions (Mutual Exclusion, Hold and Wait, No Preemption, Circular Wait), Banker's Algorithm.
- **Memory Management:** Paging, segmentation, internal vs. external fragmentation, Virtual Memory, TLB (Translation Lookaside Buffer).
- **Page Replacement Algorithms:** LRU, FIFO, Optimal, Belady’s Anomaly.
- **Question Helper Data:** Given a reference string of pages and a frame limit, calculate the number of page faults using LRU vs. FIFO.

### 2.3 Database Management Systems (DBMS) & SQL
- **Normalization:** 1NF, 2NF, 3NF, and BCNF definitions, partial dependency, transitive dependency, anomaly removal.
- **ACID Properties:** Atomicity, Consistency, Isolation (Read Uncommitted, Read Committed, Repeatable Read, Serializable), Durability.
- **SQL Joins:** Inner, Left, Right, Full Outer Joins, Cross Joins (Cartesian products), Self Joins.
- **Advanced SQL Queries:** Correlated vs. Non-correlated Subqueries, `GROUP BY` with `HAVING`, Window functions (`ROW_NUMBER()`, `RANK()`), `UNION` vs `UNION ALL`.
- **Indexing & Storage:** B-Trees vs B+ Trees, clustered vs. non-clustered indexes, hashing.
- **Question Helper Data:** Given two tables and a `LEFT JOIN` SQL query, predict the exact number of rows returned, accounting for duplicate keys.

### 2.4 Computer Networks
- **OSI & TCP/IP Models:** Identifying functions and protocols per layer (e.g., Router at Network Layer, Switch at Data Link Layer).
- **IP Addressing & Subnetting:** IPv4 vs IPv6, calculating subnet masks, network IDs, broadcast addresses, Classless Inter-Domain Routing (CIDR).
- **Routing & Protocols:** TCP (connection-oriented, 3-way handshake) vs. UDP (connectionless), HTTP/HTTPS, DNS resolution process, ARP/RARP.
- **Question Helper Data:** Determine the usable range of host IP addresses given an IP address and a `/28` subnet mask.

### 2.5 Artificial Intelligence & Machine Learning
- **Machine Learning Paradigms:** Supervised (Classification/Regression) vs. Unsupervised (Clustering/K-Means) vs. Reinforcement Learning.
- **Evaluation Metrics:** Understanding Accuracy, Precision, Recall, F1-Score, and Confusion Matrix metrics (True Positives, False Negatives, etc.).
- **Model Tuning & Preprocessing:** Overfitting/Underfitting, L1 (Lasso) vs L2 (Ridge) Regularization, Feature scaling (Normalization/Standardization), One-Hot Encoding.
- **Neural Networks & Architecture:** Basic roles of CNNs (images/spatial data) vs RNNs (sequential data/time-series), Activation functions (ReLU, Sigmoid, Softmax, Tanh).
- **Generative AI & Modern Tech:** High-level concepts of LLMs, Prompt Engineering, Transformers (self-attention), and RAG (Retrieval-Augmented Generation).
- **Search Algorithms (Classic AI):** Breadth-First Search (BFS), Depth-First Search (DFS), A* Search heuristic principles.
- **Question Helper Data:** Provide a scenario (e.g., "Filtering spam emails") and ask whether Precision or Recall is the more critical metric to optimize.

---

## 3. Coding-Based MCQs (Syntax, Snippets & DSA Theory)
### 3.1 Output Prediction (Pseudo-code & Language Specifics)
- **Loops & Conditionals:** Nested `for/while` loops, tracking variable state through `break/continue`, nested ternary operators.
- **Increment/Decrement Traps:** Pre-increment (`++i`) vs. Post-increment (`i++`) evaluated inside array indices or complex arithmetic expressions.
- **Bitwise Operations:** Bitwise XOR (`^`) properties (e.g., $x \oplus x = 0$), AND (`&`), OR (`|`), Left/Right Shifts (`<<`, `>>`) for fast multiplication/division.
- **Pointer Arithmetic (C/C++):** Dereferencing pointers (`*p`), arrays decaying to pointers, double pointers (`**p`), pointer addition.
- **Question Helper Data:** Provide a 5-10 line snippet involving a bitwise XOR swap or a pointer array traversal and provide 4 exact output options.

### 3.2 Error Identification & Debugging
- **Compilation/Syntax Errors:** Missing semicolons, scope resolution errors, uninitialized constants, type mismatch, invalid variable names.
- **Runtime/Execution Errors:** Array index out of bounds, Null Pointer Exceptions, division by zero, stack overflow via missing recursive base case.
- **Logical Errors:** Incorrect loop termination conditions (`<=` instead of `<`), using assignment (`=`) instead of comparison (`==`) in conditionals.
- **Question Helper Data:** "Which specific line in the following code snippet will cause a runtime exception, and what is the exception?"

### 3.3 Snippet Selection (Fill in the Blanks)
- **Algorithm Completion:** Filling in the missing base case for a recursive function (e.g., Factorial, Fibonacci, Binary Search).
- **Logic Correction:** Choosing the correct swap logic, pointer reassignment in a Linked List reversal, or calculating `mid` safely: `mid = low + (high - low) / 2`.
- **Question Helper Data:** Present a functional requirement and a code block with one missing crucial line; provide 4 logically similar options to fill the gap.

### 3.4 DSA Theoretical Concepts
- **Asymptotic Notation:** Big-O (upper bound), Big-Theta (tight bound), Big-Omega (lower bound) definitions.
- **Time & Space Complexity:** Identifying the time complexity of nested loops where the inner loop's limit depends on the outer loop (e.g., $O(N^2)$ vs $O(N \log N)$), analyzing recursive trees.
- **Sorting Algorithm Mechanics:** Stable vs. Unstable sorts, In-place vs. Out-of-place, choosing the best sort for nearly sorted data (Insertion Sort) vs. average general use (Merge/Quick Sort), worst-case scenario for Quick Sort.
- **Data Structure Trade-offs:** Array vs. Linked List (Contiguous vs. Non-contiguous memory, O(1) access vs O(1) insertion), when to use a Hash Map vs. a Tree Map (ordered vs unordered).

### 3.5 DSA Execution & Traversal Mechanics
- **Tree Traversals:** Given a diagram or array representation of a Binary Tree, determine the exact sequence for Inorder, Preorder, or Postorder traversals.
- **Stack & Queue Operations:** Predicting the top element of a stack or front of a queue after a specific series of `push`, `pop`, `enqueue`, and `dequeue` commands.
- **Hash Collisions:** Theoretical understanding of collision resolution techniques: chaining (linked lists) and open addressing (Linear/Quadratic probing).
- **Graph Algorithms:** Identifying whether a given sequence of nodes could be a valid BFS or DFS traversal, characteristics of Dijkstra’s shortest path algorithm.

---

## 4. Python Programming
### 4.1 Python Core Mechanics
- **Mutability vs. Immutability:** Differences between `list`, `dict`, `set`, `bytearray` (mutable) and `tuple`, `str`, `int`, `frozenset` (immutable). Default argument mutability traps (e.g., `def func(lst=[])`).
- **Identity vs. Equality:** Usage of `==` (value comparison testing `__eq__`) vs. `is` (memory identity comparison). Integer and string interning in CPython.
- **Scope Resolution (LEGB):** Local, Enclosing, Global, and Built-in scope; proper usage of `global` and `nonlocal` keywords.
- **Slicing & Indexing:** Negative indexing, reversing iterables using `[::-1]`, multi-dimensional slicing syntax.

### 4.2 Python Advanced & Functional Features
- **Comprehensions:** List, Dictionary, and Set comprehensions. Nested comprehensions and conditional filtering inside comprehensions.
- **Functional Programming Elements:** Usage of `lambda` (anonymous functions), `map()`, `filter()`, and `functools.reduce()`.
- **Generators & Iterators:** Use of the `yield` keyword, understanding the `__iter__()` and `__next__()` dunder methods, memory efficiency of generators (lazy evaluation) vs. lists.
- **Decorators & Context Managers:** Understanding wrapper functions (`@decorator`), `*args` and `**kwargs` unpacking, and the `with` statement (`__enter__` and `__exit__`).
- **Memory & Concurrency:** High-level understanding of the Global Interpreter Lock (GIL), true multithreading limitations in Python vs. multiprocessing.
- **Question Helper Data:** Output MCQs predicting the result of a list comprehension containing nested `if-else` logic, or predicting variable states after passing mutable vs. immutable objects to functions.

---

## 5. Data Science (Freshers Level)
### 5.1 Data Manipulation (Pandas & NumPy)
- **Pandas DataFrames & Series:** `groupby` operations, aggregation functions, handling missing data (`dropna`, `fillna`), merging/joining datasets, boolean indexing/filtering with multiple conditions.
- **NumPy Matrix Operations:** Broadcasting rules, array reshaping (`.reshape()`), dot products, vectorization vs. for-loops (performance comparisons).
- **Question Helper Data:** Provide a 3x3 NumPy array snippet and ask for the exact output of a specific slicing operation like `arr[1:, :2]`, or the resulting shape after a `.reshape(3, -1)` call.

### 5.2 Data Visualization & Exploratory Data Analysis (EDA)
- **EDA Concepts:** Purpose of EDA, identifying outliers, understanding data distributions, handling skewed data.
- **Visualization Tools (Matplotlib/Seaborn):** Choosing the correct chart: Histograms/KDE plots (distributions), Scatter plots (relationships/correlations), Box plots (outliers/quartiles), Heatmaps (correlation matrices).
- **Question Helper Data:** Conceptual MCQs like "Which visualization technique is best suited to identify the correlation coefficient between 5 distinct numerical variables?".

### 5.3 Statistics & Probability Fundamentals
- **Descriptive Statistics:** Calculating and interpreting Mean, Median, Mode, Variance, and Standard Deviation. Sensitivity of the mean to outliers vs. the median.
- **Inferential Statistics:** Basics of p-values, hypothesis testing (Null vs. Alternate hypothesis), interpreting confidence intervals.
- **Distributions & Probability:** Normal distribution characteristics (68-95-99.7 rule), Skewness (Left/Right skew), Bayes' Theorem basics, Conditional probability.
- **Question Helper Data:** Given a dataset with a massive outlier, ask the student which measure of central tendency (Mean or Median) will shift the most.