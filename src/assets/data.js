export const frontendInterviewQuestions = [
    {
      question: "What does CSS stand for?",
      options: ["Cascading Style Sheets", "Creative Style Sheets", "Computer Style Sheets", "Colorful Style Sheets"],
      answer: "Cascading Style Sheets"
    },
    {
      question: "Which of the following is NOT a valid JavaScript data type?",
      options: ["String", "Boolean", "Undefined", "Float"],
      answer: "Float"
    },
    {
      question: "What is the correct way to comment in JavaScript?",
      options: ["// This is a comment", "/* This is a comment */", "# This is a comment", "<!-- This is a comment -->"],
      answer: "// This is a comment"
    },
    {
      question: "Which HTML tag is used to define a hyperlink?",
      options: ["<a>", "<link>", "<href>", "<hyperlink>"],
      answer: "<a>"
    },
    {
      question: "What does the 'this' keyword refer to in JavaScript?",
      options: ["The current function", "The parent function", "The global object", "The calling object"],
      answer: "The calling object"
    },
    {
      question: "Which CSS property is used to control the size of text?",
      options: ["font-size", "text-style", "text-size", "font-style"],
      answer: "font-size"
    },
    {
      question: "What is the purpose of the HTML <canvas> element?",
      options: ["To display images", "To draw graphics", "To play audio", "To create forms"],
      answer: "To draw graphics"
    },
    {
      question: "What is the purpose of the JavaScript function parseInt()?",
      options: ["To parse strings into integers", "To convert integers to strings", "To round floating-point numbers", "To get the length of a string"],
      answer: "To parse strings into integers"
    },
    {
      question: "Which of the following is NOT a valid way to declare a JavaScript variable?",
      options: ["var", "let", "const", "int"],
      answer: "int"
    },
    {
      question: "What does AJAX stand for?",
      options: ["Asynchronous JavaScript and XML", "Advanced JavaScript and XML", "Asynchronous JavaScript and XHTML", "Advanced JavaScript and XHTML"],
      answer: "Asynchronous JavaScript and XML"
    }
  ];

export const backendInterviewQuestions = [
    {
      question: "What does SQL stand for?",
      options: ["Structured Query Language", "Sequential Query Language", "Standard Query Language", "Structured Question Language"],
      answer: "Structured Query Language"
    },
    {
      question: "What is the primary function of a web server?",
      options: ["Store website data", "Execute client-side scripts", "Handle HTTP requests", "Manage databases"],
      answer: "Handle HTTP requests"
    },
    {
      question: "Which of the following is NOT a HTTP request method?",
      options: ["GET", "POST", "PUSH", "DELETE"],
      answer: "PUSH"
    },
    {
      question: "What is the purpose of a database index?",
      options: ["To store data", "To improve query performance", "To secure data", "To backup data"],
      answer: "To improve query performance"
    },
    {
      question: "What is a RESTful API?",
      options: ["An API that uses XML for communication", "An API that follows the principles of REST architecture", "An API that only allows GET requests", "An API that requires authentication for all requests"],
      answer: "An API that follows the principles of REST architecture"
    },
    {
      question: "Which of the following is NOT a NoSQL database?",
      options: ["MongoDB", "MySQL", "Cassandra", "Redis"],
      answer: "MySQL"
    },
    {
      question: "What is the purpose of middleware in Express.js?",
      options: ["To render HTML", "To handle routing", "To manage sessions", "To process HTTP requests"],
      answer: "To process HTTP requests"
    },
    {
      question: "What is the purpose of an ORM?",
      options: ["To authenticate users", "To optimize database queries", "To interact with databases using an object-oriented approach", "To handle HTTP requests"],
      answer: "To interact with databases using an object-oriented approach"
    },
    {
      question: "Which HTTP status code is returned when a resource is successfully created?",
      options: ["200", "201", "404", "500"],
      answer: "201"
    },
    {
      question: "What is the purpose of hashing passwords?",
      options: ["To encrypt passwords", "To compress passwords", "To generate random passwords", "To securely store passwords"],
      answer: "To securely store passwords"
    },
    {
      question: "Which database model is best suited for hierarchical data?",
      options: ["Relational model", "Document model", "Graph model", "Key-value model"],
      answer: "Graph model"
    },
    {
      question: "What is the purpose of CSRF protection?",
      options: ["To prevent cross-site scripting attacks", "To prevent SQL injection attacks", "To prevent clickjacking attacks", "To prevent cross-site request forgery attacks"],
      answer: "To prevent cross-site request forgery attacks"
    },
    {
      question: "What is the purpose of connection pooling?",
      options: ["To improve database performance", "To restrict access to the database", "To encrypt database connections", "To backup database connections"],
      answer: "To improve database performance"
    },
    {
      question: "Which of the following is NOT a valid authentication method?",
      options: ["Basic Authentication", "OAuth", "JWT", "XML-RPC"],
      answer: "XML-RPC"
    },
    {
      question: "What is the purpose of SQL injection?",
      options: ["To insert malicious code into SQL statements", "To extract sensitive information from the database", "To delete database records", "To bypass authentication"],
      answer: "To insert malicious code into SQL statements"
    },
    {
      question: "What is the purpose of load balancing?",
      options: ["To improve server performance", "To encrypt network traffic", "To restrict access to the server", "To manage database connections"],
      answer: "To improve server performance"
    },
    {
      question: "Which of the following is NOT a valid HTTP header?",
      options: ["Content-Type", "Authorization", "Request-Method", "Accept"],
      answer: "Request-Method"
    },
    {
      question: "What is the purpose of a reverse proxy?",
      options: ["To route incoming requests to multiple servers", "To cache static content", "To authenticate users", "To encrypt network traffic"],
      answer: "To route incoming requests to multiple servers"
    },
    {
      question: "What is the primary purpose of a CDN (Content Delivery Network)?",
      options: ["To store website data", "To optimize database queries", "To distribute content to multiple servers", "To manage database connections"],
      answer: "To distribute content to multiple servers"
    },
    {
      question: "Which of the following is NOT a valid HTTP response status code?",
      options: ["300", "400", "500", "600"],
      answer: "600"
    }
  ];

export const cybersecurityInterviewQuestions = [
    {
      question: "What does CIA stand for in cybersecurity?",
      options: ["Central Intelligence Agency", "Confidentiality, Integrity, Availability", "Certified Information Analyst", "Cybersecurity Investigation Agency"],
      answer: "Confidentiality, Integrity, Availability"
    },
    {
      question: "Which of the following is a common authentication factor?",
      options: ["Something you know", "Something you breathe", "Something you taste", "Something you hear"],
      answer: "Something you know"
    },
    {
      question: "What is the purpose of a firewall?",
      options: ["To encrypt data", "To analyze network traffic", "To store passwords", "To manage email accounts"],
      answer: "To analyze network traffic"
    },
    {
      question: "What is the primary goal of a DDoS attack?",
      options: ["To steal sensitive information", "To slow down or crash a website", "To bypass firewalls", "To spread malware"],
      answer: "To slow down or crash a website"
    },
    {
      question: "What is the difference between a virus and a worm?",
      options: ["A virus spreads over the network, while a worm infects individual files", "A virus requires user interaction to spread, while a worm self-propagates", "A virus encrypts files, while a worm deletes files", "A virus targets mobile devices, while a worm targets computers"],
      answer: "A virus requires user interaction to spread, while a worm self-propagates"
    },
    {
      question: "What is a zero-day vulnerability?",
      options: ["A vulnerability that has been known for zero days", "A vulnerability that has been exploited for zero days", "A vulnerability that has been patched for zero days", "A vulnerability that is unknown to the software vendor"],
      answer: "A vulnerability that is unknown to the software vendor"
    },
    {
      question: "What is the purpose of encryption?",
      options: ["To hide network traffic", "To compress data", "To speed up internet connection", "To secure data by converting it into unreadable format"],
      answer: "To secure data by converting it into unreadable format"
    },
    {
      question: "What is a phishing attack?",
      options: ["A physical attack on network infrastructure", "An attack that manipulates network protocols", "An attack that steals sensitive information by impersonating a trusted entity", "An attack that targets network routers"],
      answer: "An attack that steals sensitive information by impersonating a trusted entity"
    },
    {
      question: "Which of the following is NOT a type of malware?",
      options: ["Spyware", "Ransomware", "Fireware", "Trojan"],
      answer: "Fireware"
    },
    {
      question: "What is multi-factor authentication (MFA)?",
      options: ["An authentication method that requires multiple passwords", "An authentication method that combines multiple authentication factors", "An authentication method that uses biometric data", "An authentication method that requires a single password"],
      answer: "An authentication method that combines multiple authentication factors"
    },
    {
      question: "What is the purpose of a VPN (Virtual Private Network)?",
      options: ["To create a secure connection between two private networks over the internet", "To increase network speed", "To detect and prevent network intrusions", "To store encrypted passwords"],
      answer: "To create a secure connection between two private networks over the internet"
    },
    {
      question: "What is the difference between symmetric and asymmetric encryption?",
      options: ["Symmetric encryption uses two different keys for encryption and decryption, while asymmetric encryption uses the same key", "Symmetric encryption is faster than asymmetric encryption", "Asymmetric encryption is only used for emails", "Asymmetric encryption is more prone to security vulnerabilities"],
      answer: "Symmetric encryption is faster than asymmetric encryption"
    },
    {
      question: "What is the purpose of a vulnerability assessment?",
      options: ["To identify and prioritize security vulnerabilities", "To encrypt network traffic", "To bypass firewalls", "To analyze network traffic"],
      answer: "To identify and prioritize security vulnerabilities"
    },
    {
      question: "What is a social engineering attack?",
      options: ["An attack that targets network infrastructure", "An attack that manipulates network protocols", "An attack that exploits human psychology to trick individuals into divulging confidential information", "An attack that steals sensitive information by impersonating a trusted entity"],
      answer: "An attack that exploits human psychology to trick individuals into divulging confidential information"
    },
    {
      question: "What is a brute force attack?",
      options: ["An attack that exploits vulnerabilities in software", "An attack that tries every possible combination of characters to guess passwords or encryption keys", "An attack that targets network routers", "An attack that encrypts files and demands ransom"],
      answer: "An attack that tries every possible combination of characters to guess passwords or encryption keys"
    },
    {
      question: "What is a honeypot?",
      options: ["A type of encryption algorithm", "A decoy system designed to lure attackers and gather information about their tactics", "A type of phishing attack", "A type of firewall"],
      answer: "A decoy system designed to lure attackers and gather information about their tactics"
    },
    {
      question: "What is the purpose of a SIEM (Security Information and Event Management) system?",
      options: ["To manage software development projects", "To monitor, detect, and respond to cybersecurity threats", "To manage network infrastructure", "To store encrypted passwords"],
      answer: "To monitor, detect, and respond to cybersecurity threats"
    },
    {
      question: "What is the difference between black hat, white hat, and gray hat hackers?",
      options: ["Their location", "Their preferred color of clothing", "Their ethical stance towards hacking", "Their level of expertise"],
      answer: "Their ethical stance towards hacking"
    },
    {
      question: "What is the OWASP Top 10?",
      options: ["A list of the top 10 cybersecurity companies", "A list of the top 10 cybersecurity threats published by the Open Web Application Security Project", "A list of the top 10 programming languages for cybersecurity", "A list of the top 10 encryption algorithms"],
      answer: "A list of the top 10 cybersecurity threats published by the Open Web Application Security Project"
    },
    {
      question: "What is the purpose of penetration testing?",
      options: ["To encrypt data", "To slow down or crash a website", "To simulate cyber attacks to identify security vulnerabilities", "To store passwords"],
      answer: "To simulate cyber attacks to identify security vulnerabilities"
    }
  ];

export const aiMachineLearningInterviewQuestions = [
    {
      question: "What is machine learning?",
      options: ["A branch of artificial intelligence", "A branch of computer networking", "A branch of cybersecurity", "A branch of web development"],
      answer: "A branch of artificial intelligence"
    },
    {
      question: "What is supervised learning?",
      options: ["Learning from labeled data", "Learning from unlabeled data", "Learning without any data", "Learning from reinforcement"],
      answer: "Learning from labeled data"
    },
    {
      question: "Which algorithm is commonly used for classification problems?",
      options: ["Linear Regression", "K-Nearest Neighbors", "Gradient Descent", "SVM (Support Vector Machine)"],
      answer: "SVM (Support Vector Machine)"
    },
    {
      question: "What is overfitting in machine learning?",
      options: ["When the model performs well on training data but poorly on unseen data", "When the model performs poorly on both training and unseen data", "When the model memorizes the training data instead of learning from it", "When the model converges too quickly"],
      answer: "When the model performs well on training data but poorly on unseen data"
    },
    {
      question: "What is dimensionality reduction?",
      options: ["Reducing the size of the training data", "Reducing the number of features in the data", "Increasing the complexity of the model", "Increasing the accuracy of the model"],
      answer: "Reducing the number of features in the data"
    },
    {
      question: "What is the purpose of regularization in machine learning?",
      options: ["To penalize large model weights", "To increase model complexity", "To reduce model accuracy", "To reduce computational complexity"],
      answer: "To penalize large model weights"
    },
    {
      question: "What is unsupervised learning?",
      options: ["Learning from labeled data", "Learning from unlabeled data", "Learning without any data", "Learning from reinforcement"],
      answer: "Learning from unlabeled data"
    },
    {
      question: "Which algorithm is commonly used for clustering?",
      options: ["Logistic Regression", "Decision Tree", "K-Means", "Naive Bayes"],
      answer: "K-Means"
    },
    {
      question: "What is cross-validation?",
      options: ["A technique for selecting the best machine learning algorithm", "A technique for evaluating model performance using multiple train-test splits", "A technique for generating synthetic data", "A technique for reducing model complexity"],
      answer: "A technique for evaluating model performance using multiple train-test splits"
    },
    {
      question: "What is the purpose of feature scaling?",
      options: ["To increase the number of features in the data", "To reduce the number of features in the data", "To standardize the range of features", "To remove outliers from the data"],
      answer: "To standardize the range of features"
    },
    {
      question: "What is deep learning?",
      options: ["A type of machine learning that uses shallow neural networks", "A type of machine learning that uses decision trees", "A type of machine learning that uses reinforcement learning", "A type of machine learning that uses deep neural networks"],
      answer: "A type of machine learning that uses deep neural networks"
    },
    {
      question: "Which activation function is commonly used in deep learning for binary classification?",
      options: ["Sigmoid", "ReLU (Rectified Linear Unit)", "Softmax", "Tanh"],
      answer: "Sigmoid"
    },
    {
      question: "What is backpropagation?",
      options: ["A technique for training neural networks by adjusting the weights using gradient descent", "A technique for generating synthetic data", "A technique for reducing model complexity", "A technique for evaluating model performance"],
      answer: "A technique for training neural networks by adjusting the weights using gradient descent"
    },
    {
      question: "What is the purpose of dropout in neural networks?",
      options: ["To increase model complexity", "To reduce model accuracy", "To remove outliers from the data", "To prevent overfitting by randomly dropping neurons during training"],
      answer: "To prevent overfitting by randomly dropping neurons during training"
    },
    {
      question: "What is reinforcement learning?",
      options: ["Learning from labeled data", "Learning from unlabeled data", "Learning from rewards and punishments", "Learning without any data"],
      answer: "Learning from rewards and punishments"
    },
    {
      question: "Which algorithm is commonly used for reinforcement learning?",
      options: ["K-Nearest Neighbors", "Linear Regression", "Q-Learning", "SVM (Support Vector Machine)"],
      answer: "Q-Learning"
    },
    {
      question: "What is the exploration-exploitation tradeoff in reinforcement learning?",
      options: ["The balance between exploring new actions and exploiting known actions", "The balance between training and testing data", "The balance between model complexity and model accuracy", "The balance between feature scaling and feature selection"],
      answer: "The balance between exploring new actions and exploiting known actions"
    },
    {
      question: "What is transfer learning?",
      options: ["A technique for transferring data between different environments", "A technique for transferring knowledge from one task to another", "A technique for transferring model parameters", "A technique for transferring data between different machine learning algorithms"],
      answer: "A technique for transferring knowledge from one task to another"
    },
    {
      question: "What is a convolutional neural network (CNN) commonly used for?",
      options: ["Image classification", "Speech recognition", "Natural language processing", "Recommender systems"],
      answer: "Image classification"
    },
    {
      question: "What is a recurrent neural network (RNN) commonly used for?",
      options: ["Image classification", "Speech recognition", "Natural language processing", "Recommender systems"],
      answer: "Natural language processing"
    },
    {
      question: "What is GAN (Generative Adversarial Network)?",
      options: ["A type of neural network used for classification", "A type of neural network used for reinforcement learning", "A type of neural network used for unsupervised learning", "A type of neural network used for generating synthetic data"],
      answer: "A type of neural network used for generating synthetic data"
    }
  ];

export const blockchainDevelopmentInterviewQuestions = [
    {
      question: "What is a blockchain?",
      options: ["A type of cryptocurrency", "A distributed ledger technology", "A type of database", "An encryption algorithm"],
      answer: "A distributed ledger technology"
    },
    {
      question: "What is the purpose of consensus mechanisms in blockchain?",
      options: ["To reach agreement on the state of the blockchain", "To encrypt blockchain data", "To store transactions in blocks", "To authenticate users"],
      answer: "To reach agreement on the state of the blockchain"
    },
    {
      question: "Which consensus mechanism does Bitcoin use?",
      options: ["Proof of Work (PoW)", "Proof of Stake (PoS)", "Delegated Proof of Stake (DPoS)", "Byzantine Fault Tolerance (BFT)"],
      answer: "Proof of Work (PoW)"
    },
    {
      question: "What is a smart contract?",
      options: ["A legally binding contract", "A self-executing contract with the terms of the agreement directly written into code", "An escrow service for blockchain transactions", "An oracle for blockchain data"],
      answer: "A self-executing contract with the terms of the agreement directly written into code"
    },
    {
      question: "What is the purpose of gas in Ethereum?",
      options: ["To fuel mining operations", "To regulate the supply of Ether", "To pay for computational resources on the Ethereum network", "To incentivize nodes to join the network"],
      answer: "To pay for computational resources on the Ethereum network"
    },
    {
      question: "What is a token in the context of blockchain?",
      options: ["A cryptographic key used for encryption", "A digital representation of an asset or utility", "A mining reward in a blockchain network", "A consensus algorithm"],
      answer: "A digital representation of an asset or utility"
    },
    {
      question: "What is the difference between a public blockchain and a private blockchain?",
      options: ["Public blockchains are open to anyone, while private blockchains are restricted to certain participants", "Public blockchains are faster than private blockchains", "Public blockchains have better security than private blockchains", "Public blockchains require permission to join, while private blockchains are open to anyone"],
      answer: "Public blockchains are open to anyone, while private blockchains are restricted to certain participants"
    },
    {
      question: "What is a Merkle tree?",
      options: ["A type of cryptocurrency", "A data structure used to efficiently verify the integrity of large sets of data", "A consensus mechanism", "An encryption algorithm"],
      answer: "A data structure used to efficiently verify the integrity of large sets of data"
    },
    {
      question: "What is the role of miners in a blockchain network?",
      options: ["To validate transactions and add them to the blockchain", "To create new tokens", "To secure the network from attacks", "To execute smart contracts"],
      answer: "To validate transactions and add them to the blockchain"
    },
    {
      question: "What is the purpose of a nonce in Proof of Work (PoW) consensus?",
      options: ["To link blocks together in the blockchain", "To regulate the supply of tokens", "To encrypt transactions", "To find a valid hash for a block"],
      answer: "To find a valid hash for a block"
    },
    {
      question: "What is a hard fork?",
      options: ["A software upgrade that introduces backward-compatible changes", "A software upgrade that introduces non-backward-compatible changes", "A consensus mechanism", "A type of token"],
      answer: "A software upgrade that introduces non-backward-compatible changes"
    },
    {
      question: "What is the role of a node in a blockchain network?",
      options: ["To execute smart contracts", "To validate transactions and maintain a copy of the blockchain", "To regulate the supply of tokens", "To mine new blocks"],
      answer: "To validate transactions and maintain a copy of the blockchain"
    },
    {
      question: "What is a 51% attack?",
      options: ["An attack where an attacker controls more than 51% of the network's mining power", "An attack where an attacker steals 51% of the tokens from a wallet", "An attack where an attacker steals private keys from 51% of the network's nodes", "An attack where an attacker exploits a vulnerability in the consensus algorithm"],
      answer: "An attack where an attacker controls more than 51% of the network's mining power"
    },
    {
      question: "What is a private key in blockchain?",
      options: ["A secret key used to sign transactions", "A public key used to encrypt transactions", "A cryptographic hash of a transaction", "An identifier for a blockchain wallet"],
      answer: "A secret key used to sign transactions"
    },
    {
      question: "What is the role of a blockchain wallet?",
      options: ["To store private keys and manage transactions", "To mine new blocks", "To execute smart contracts", "To validate transactions and maintain a copy of the blockchain"],
      answer: "To store private keys and manage transactions"
    },
    {
      question: "What is a permissioned blockchain?",
      options: ["A blockchain that requires permission to join", "A blockchain that is open to anyone", "A blockchain that uses a different consensus mechanism", "A blockchain that has faster transaction speeds"],
      answer: "A blockchain that requires permission to join"
    },
    {
      question: "What is a distributed ledger?",
      options: ["A type of consensus mechanism", "A cryptographic key used for encryption", "A database that is replicated and synchronized across multiple locations", "A type of smart contract"],
      answer: "A database that is replicated and synchronized across multiple locations"
    },
    {
      question: "What is the purpose of a hash function in blockchain?",
      options: ["To encrypt transactions", "To generate digital signatures", "To link blocks together in the blockchain", "To regulate the supply of tokens"],
      answer: "To link blocks together in the blockchain"
    },
    {
      question: "What is the role of a timestamp in blockchain?",
      options: ["To record the current time", "To encrypt transactions", "To generate digital signatures", "To link blocks together in the blockchain"],
      answer: "To link blocks together in the blockchain"
    },
    {
      question: "What is the difference between a soft fork and a hard fork?",
      options: ["A soft fork introduces non-backward-compatible changes, while a hard fork introduces backward-compatible changes", "A soft fork requires a majority consensus, while a hard fork does not", "A soft fork is reversible, while a hard fork is not", "A soft fork requires permission to join, while a hard fork is open to anyone"],
      answer: "A soft fork introduces non-backward-compatible changes, while a hard fork introduces backward-compatible changes"
    }
];

export const cloudEngineeringInterviewQuestions = [
    {
      question: "What is cloud computing?",
      options: ["Hosting applications on local servers", "Accessing computing resources over the internet on-demand", "Setting up virtual machines on personal computers", "Using physical servers for data storage"],
      answer: "Accessing computing resources over the internet on-demand"
    },
    {
      question: "What is the difference between IaaS, PaaS, and SaaS?",
      options: ["Different programming languages", "Different cloud service providers", "Different deployment models", "Different service models"],
      answer: "Different service models"
    },
    {
      question: "Which cloud service model provides virtualized computing resources over the internet?",
      options: ["IaaS (Infrastructure as a Service)", "PaaS (Platform as a Service)", "SaaS (Software as a Service)", "DaaS (Data as a Service)"],
      answer: "IaaS (Infrastructure as a Service)"
    },
    {
      question: "What is auto-scaling in cloud computing?",
      options: ["Manually adjusting server capacity", "Automatically adjusting server capacity based on demand", "Securing cloud resources", "Deploying applications on multiple clouds"],
      answer: "Automatically adjusting server capacity based on demand"
    },
    {
      question: "What is the purpose of a virtual private cloud (VPC)?",
      options: ["To share computing resources with other users", "To isolate resources and provide network security", "To host public-facing applications", "To manage cloud storage"],
      answer: "To isolate resources and provide network security"
    },
    {
      question: "What is a container in cloud computing?",
      options: ["A physical storage device", "A virtual machine", "A lightweight, portable unit of software", "A database service"],
      answer: "A lightweight, portable unit of software"
    },
    {
      question: "What is the role of a hypervisor in virtualization?",
      options: ["To manage cloud networking", "To manage containers", "To provide virtualization capabilities", "To deploy applications"],
      answer: "To provide virtualization capabilities"
    },
    {
      question: "Which cloud deployment model provides dedicated resources for a single organization?",
      options: ["Public cloud", "Private cloud", "Hybrid cloud", "Community cloud"],
      answer: "Private cloud"
    },
    {
      question: "What is infrastructure as code (IaC) in cloud engineering?",
      options: ["Manually configuring infrastructure", "Automating infrastructure management using code", "Managing infrastructure using graphical user interfaces", "Storing infrastructure data in the cloud"],
      answer: "Automating infrastructure management using code"
    },
    {
      question: "What is a serverless architecture?",
      options: ["A architecture without servers", "A architecture with physical servers", "An architecture where cloud providers manage server infrastructure", "An architecture with dedicated servers"],
      answer: "An architecture where cloud providers manage server infrastructure"
    },
    {
      question: "What is cloud orchestration?",
      options: ["Automating and coordinating cloud resources", "Deploying applications manually", "Managing cloud security", "Scaling cloud infrastructure"],
      answer: "Automating and coordinating cloud resources"
    },
    {
      question: "What is cloud migration?",
      options: ["Moving data and applications to the cloud", "Hosting applications on local servers", "Creating virtual machines", "Configuring network settings"],
      answer: "Moving data and applications to the cloud"
    },
    {
      question: "What is a CDN (Content Delivery Network)?",
      options: ["A cloud computing service", "A distributed network of servers that deliver content to users based on their geographic location", "A network for managing databases", "A cloud storage service"],
      answer: "A distributed network of servers that deliver content to users based on their geographic location"
    },
    {
      question: "What is cloud security?",
      options: ["Protecting data and applications hosted in the cloud", "Monitoring network traffic", "Managing virtual machines", "Scaling cloud infrastructure"],
      answer: "Protecting data and applications hosted in the cloud"
    },
    {
      question: "What is the difference between horizontal and vertical scaling?",
      options: ["Different cloud providers", "Different cloud service models", "Scaling out vs. scaling up", "Scaling up vs. scaling down"],
      answer: "Scaling out vs. scaling up"
    },
    {
      question: "What is a load balancer in cloud computing?",
      options: ["A tool for managing cloud storage", "A tool for managing containers", "A tool for distributing incoming network traffic across multiple servers", "A tool for deploying applications"],
      answer: "A tool for distributing incoming network traffic across multiple servers"
    },
    {
      question: "What is a cloud-native application?",
      options: ["An application hosted on local servers", "An application designed specifically for cloud environments", "An application with a large user base", "An application with complex networking requirements"],
      answer: "An application designed specifically for cloud environments"
    },
    {
      question: "What is a multi-cloud strategy?",
      options: ["Using multiple cloud providers for different services", "Using a single cloud provider for all services", "Using multiple clouds for backup purposes", "Using a single cloud provider for multiple regions"],
      answer: "Using multiple cloud providers for different services"
    },
    {
      question: "What is serverless computing?",
      options: ["A computing model without servers", "A computing model with physical servers", "A computing model where cloud providers manage server infrastructure", "A computing model with dedicated servers"],
      answer: "A computing model where cloud providers manage server infrastructure"
    },
    {
      question: "What is the purpose of DevOps in cloud engineering?",
      options: ["To automate software development and IT operations", "To manage cloud storage", "To secure cloud resources", "To deploy applications"],
      answer: "To automate software development and IT operations"
    }
  ];


export const dataScienceInterviewQuestions = [
    {
      question: "What is data science?",
      options: ["The study of computer science", "The study of data structures", "The study of extracting insights from data", "The study of networking"],
      answer: "The study of extracting insights from data"
    },
    {
      question: "What is the difference between supervised and unsupervised learning?",
      options: ["The presence of a teacher", "The presence of labels in the training data", "The absence of labels in the training data", "The size of the dataset"],
      answer: "The presence of labels in the training data"
    },
    {
      question: "What is regression analysis?",
      options: ["A method for clustering data points", "A method for classifying data points", "A method for predicting continuous outcomes", "A method for visualizing data"],
      answer: "A method for predicting continuous outcomes"
    },
    {
      question: "Which algorithm is commonly used for classification problems?",
      options: ["Linear Regression", "K-Means", "Decision Trees", "Association Rules"],
      answer: "Decision Trees"
    },
    {
      question: "What is overfitting?",
      options: ["When the model performs well on training data but poorly on unseen data", "When the model performs poorly on both training and unseen data", "When the model memorizes the training data instead of learning from it", "When the model converges too quickly"],
      answer: "When the model performs well on training data but poorly on unseen data"
    },
    {
      question: "What is cross-validation?",
      options: ["A technique for selecting the best machine learning algorithm", "A technique for evaluating model performance using multiple train-test splits", "A technique for generating synthetic data", "A technique for reducing model complexity"],
      answer: "A technique for evaluating model performance using multiple train-test splits"
    },
    {
      question: "What is the purpose of feature engineering?",
      options: ["To increase the number of features in the dataset", "To reduce the number of features in the dataset", "To select the most relevant features for modeling", "To generate synthetic data"],
      answer: "To select the most relevant features for modeling"
    },
    {
      question: "What is clustering?",
      options: ["A method for predicting continuous outcomes", "A method for classifying data points", "A method for grouping similar data points together", "A method for visualizing data"],
      answer: "A method for grouping similar data points together"
    },
    {
      question: "What is the purpose of dimensionality reduction?",
      options: ["To increase the size of the dataset", "To reduce the number of features in the dataset", "To increase the complexity of the model", "To increase the accuracy of the model"],
      answer: "To reduce the number of features in the dataset"
    },
    {
      question: "What is the difference between precision and recall?",
      options: ["The number of true positives and false positives", "The number of true positives and true negatives", "The number of true positives and false negatives", "The number of false positives and false negatives"],
      answer: "The number of true positives and false negatives"
    },
    {
      question: "What is the purpose of regularization in machine learning?",
      options: ["To increase model complexity", "To reduce model accuracy", "To penalize large model weights", "To reduce computational complexity"],
      answer: "To penalize large model weights"
    },
    {
      question: "What is natural language processing (NLP)?",
      options: ["A method for predicting continuous outcomes", "A method for classifying data points", "A method for understanding and generating human language", "A method for visualizing data"],
      answer: "A method for understanding and generating human language"
    },
    {
      question: "What is the curse of dimensionality?",
      options: ["The phenomenon where algorithms perform worse as the number of features increases", "The phenomenon where algorithms perform better as the number of features increases", "The phenomenon where algorithms are unable to converge", "The phenomenon where algorithms overfit the data"],
      answer: "The phenomenon where algorithms perform worse as the number of features increases"
    },
    {
      question: "What is a confusion matrix?",
      options: ["A matrix used for encrypting data", "A matrix used for reducing model complexity", "A matrix used for evaluating the performance of a classification model", "A matrix used for clustering data points"],
      answer: "A matrix used for evaluating the performance of a classification model"
    },
    {
      question: "What is feature scaling?",
      options: ["A technique for increasing the size of the dataset", "A technique for reducing the number of features in the dataset", "A technique for standardizing the range of features", "A technique for increasing model accuracy"],
      answer: "A technique for standardizing the range of features"
    },
    {
      question: "What is ensemble learning?",
      options: ["A method for training multiple models independently", "A method for training multiple models simultaneously", "A method for combining the predictions of multiple models", "A method for selecting the best features for modeling"],
      answer: "A method for combining the predictions of multiple models"
    },
    {
      question: "What is bias-variance tradeoff?",
      options: ["The tradeoff between model bias and model variance", "The tradeoff between model accuracy and model complexity", "The tradeoff between training time and model performance", "The tradeoff between feature engineering and model selection"],
      answer: "The tradeoff between model bias and model variance"
    },
    {
      question: "What is A/B testing?",
      options: ["A method for clustering data points", "A method for comparing two versions of a product or service", "A method for reducing model complexity", "A method for selecting the best machine learning algorithm"],
      answer: "A method for comparing two versions of a product or service"
    },
    {
      question: "What is the purpose of data cleaning?",
      options: ["To increase the size of the dataset", "To remove noise and inconsistencies from the data", "To reduce the number of features in the dataset", "To increase model accuracy"],
      answer: "To remove noise and inconsistencies from the data"
    },
    {
      question: "What is the difference between correlation and causation?",
      options: ["The relationship between variables and outcomes", "The presence of a causal relationship between variables", "The presence of a statistical relationship between variables", "The presence of a spurious relationship between variables"],
      answer: "The presence of a causal relationship between variables"
    }
  ];


export const embeddedSystemsInterviewQuestions = [
    {
      question: "What is an embedded system?",
      options: ["A system that runs on embedded batteries", "A system that runs on a limited set of hardware and software", "A system that connects to external peripherals", "A system that runs only on cloud servers"],
      answer: "A system that runs on a limited set of hardware and software"
    },
    {
      question: "What is the main difference between a microcontroller and a microprocessor?",
      options: ["Microcontrollers have higher clock speeds than microprocessors", "Microprocessors have built-in memory and I/O peripherals", "Microcontrollers are used in high-performance applications", "Microcontrollers are standalone devices with CPU, memory, and I/O peripherals on a single chip"],
      answer: "Microcontrollers are standalone devices with CPU, memory, and I/O peripherals on a single chip"
    },
    {
      question: "What is real-time operating system (RTOS)?",
      options: ["An operating system used for gaming consoles", "An operating system used in real-world applications where timing constraints must be met", "An operating system used for desktop computers", "An operating system used for cloud computing"],
      answer: "An operating system used in real-world applications where timing constraints must be met"
    },
    {
      question: "What is firmware?",
      options: ["Software that controls hardware devices", "Hardware components of embedded systems", "Networking protocols used in embedded systems", "Cloud-based storage for embedded systems"],
      answer: "Software that controls hardware devices"
    },
    {
      question: "What is Interrupt in embedded systems?",
      options: ["A software bug", "An event that temporarily halts the CPU to handle a specific condition", "A hardware failure", "A communication protocol"],
      answer: "An event that temporarily halts the CPU to handle a specific condition"
    },
    {
      question: "What is EEPROM?",
      options: ["A type of RAM", "A type of ROM", "A type of flash memory", "A type of volatile memory"],
      answer: "A type of non-volatile memory"
    },
    {
      question: "What is the purpose of watchdog timer?",
      options: ["To keep track of time", "To monitor system operations and reset the system in case of failures", "To synchronize system clocks", "To improve system performance"],
      answer: "To monitor system operations and reset the system in case of failures"
    },
    {
      question: "What is Bit-Banding in ARM architecture?",
      options: ["A technique to convert floating-point numbers to binary", "A technique for fast and atomic manipulation of single bits in memory", "A data encoding scheme", "A compression algorithm"],
      answer: "A technique for fast and atomic manipulation of single bits in memory"
    },
    {
      question: "What is CAN bus?",
      options: ["A type of CPU architecture", "A communication protocol used in automotive and industrial applications", "A programming language", "A computer peripheral"],
      answer: "A communication protocol used in automotive and industrial applications"
    },
    {
      question: "What is GPIO?",
      options: ["A programming language", "A type of memory", "A communication protocol", "General Purpose Input/Output pins for interfacing with external devices"],
      answer: "General Purpose Input/Output pins for interfacing with external devices"
    },
    {
      question: "What is DMA?",
      options: ["Direct Memory Access, a technique for transferring data between memory and I/O devices without involving the CPU", "A type of ROM", "A programming language", "A CPU architecture"],
      answer: "Direct Memory Access, a technique for transferring data between memory and I/O devices without involving the CPU"
    },
    {
      question: "What is UART?",
      options: ["A programming language", "A communication protocol", "A type of microcontroller", "A type of memory"],
      answer: "A communication protocol"
    },
    {
      question: "What is SPI?",
      options: ["Serial Peripheral Interface, a synchronous serial communication protocol", "A programming language", "A type of microcontroller", "A type of memory"],
      answer: "Serial Peripheral Interface, a synchronous serial communication protocol"
    },
    {
      question: "What is I2C?",
      options: ["Inter-Integrated Circuit, a synchronous serial communication protocol", "A programming language", "A type of microcontroller", "A type of memory"],
      answer: "Inter-Integrated Circuit, a synchronous serial communication protocol"
    },
    {
      question: "What is bootloader?",
      options: ["A type of microcontroller", "A software program that initializes the hardware and loads the main operating system", "A communication protocol", "A type of memory"],
      answer: "A software program that initializes the hardware and loads the main operating system"
    },
    {
      question: "What is JTAG?",
      options: ["Joint Test Action Group, a debugging interface used to test and debug embedded systems", "A programming language", "A type of microcontroller", "A type of memory"],
      answer: "Joint Test Action Group, a debugging interface used to test and debug embedded systems"
    },
    {
      question: "What is CANopen?",
      options: ["An open-source operating system", "An open-source programming language", "A communication protocol based on CAN bus", "A type of microcontroller"],
      answer: "A communication protocol based on CAN bus"
    },
    {
      question: "What is ARM Cortex-M?",
      options: ["A type of microcontroller architecture commonly used in embedded systems", "A programming language", "A communication protocol", "A type of memory"],
      answer: "A type of microcontroller architecture commonly used in embedded systems"
    },
    {
      question: "What is Flash memory?",
      options: ["A type of non-volatile memory", "A type of volatile memory", "A communication protocol", "A type of microcontroller"],
      answer: "A type of non-volatile memory"
    },
    {
      question: "What is SRAM?",
      options: ["Static Random Access Memory, a type of volatile memory", "A type of non-volatile memory", "A communication protocol", "A type of microcontroller"],
      answer: "Static Random Access Memory, a type of volatile memory"
    }
  ];

export const mobileAppDevelopmentInterviewQuestions = [
    {
      question: "What is a mobile application?",
      options: ["A website optimized for mobile devices", "A software application designed to run on mobile devices", "A desktop application", "A game console application"],
      answer: "A software application designed to run on mobile devices"
    },
    {
      question: "What is the difference between native and hybrid mobile apps?",
      options: ["Native apps are built with web technologies, while hybrid apps are built with native languages", "Native apps are platform-independent, while hybrid apps are platform-specific", "Native apps are built using platform-specific languages and SDKs, while hybrid apps use web technologies wrapped in a native container", "Native apps are easier to develop than hybrid apps"],
      answer: "Native apps are built using platform-specific languages and SDKs, while hybrid apps use web technologies wrapped in a native container"
    },
    {
      question: "What is the purpose of the Android Manifest file?",
      options: ["To store user preferences", "To define the structure and metadata of the Android application", "To manage networking operations", "To handle user authentication"],
      answer: "To define the structure and metadata of the Android application"
    },
    {
      question: "What is an Activity in Android?",
      options: ["A user interface component that represents a single screen with a user interface", "A background process that performs a long-running operation", "A service that handles background tasks", "A data storage component"],
      answer: "A user interface component that represents a single screen with a user interface"
    },
    {
      question: "What is the purpose of Intent in Android?",
      options: ["To handle database operations", "To perform network operations", "To transfer data between activities or trigger actions", "To manage user authentication"],
      answer: "To transfer data between activities or trigger actions"
    },
    {
      question: "What is iOS?",
      options: ["A programming language", "An operating system developed by Google", "An operating system developed by Apple for iPhones and iPads", "A mobile application development framework"],
      answer: "An operating system developed by Apple for iPhones and iPads"
    },
    {
      question: "What is the difference between UIViewController and UIView in iOS development?",
      options: ["UIViewController is used for managing navigation and view hierarchy, while UIView is a user interface element", "UIViewController is a user interface element, while UIView is used for managing navigation", "UIViewController is used for handling touch events, while UIView is used for displaying content", "UIViewController is used for storing data, while UIView is used for handling user input"],
      answer: "UIViewController is used for managing navigation and view hierarchy, while UIView is a user interface element"
    },
    {
      question: "What is Cocoa Touch in iOS development?",
      options: ["A programming language", "A user interface framework", "A networking library", "A data storage component"],
      answer: "A user interface framework"
    },
    {
      question: "What is Xcode?",
      options: ["A programming language", "An integrated development environment (IDE) for iOS app development", "A mobile operating system", "A cloud computing platform"],
      answer: "An integrated development environment (IDE) for iOS app development"
    },
    {
      question: "What is the purpose of Interface Builder in Xcode?",
      options: ["To write code for iOS apps", "To design user interfaces visually", "To manage database operations", "To handle network requests"],
      answer: "To design user interfaces visually"
    },
    {
      question: "What is Flutter?",
      options: ["An operating system", "A programming language", "A mobile application development framework by Google", "A version control system"],
      answer: "A mobile application development framework by Google"
    },
    {
      question: "What is Dart?",
      options: ["A bird", "A programming language used for building Flutter apps", "A design pattern", "A mobile operating system"],
      answer: "A programming language used for building Flutter apps"
    },
    {
      question: "What is the purpose of MaterialApp in Flutter?",
      options: ["To define the structure of the app", "To manage navigation", "To handle user input", "To create responsive layouts"],
      answer: "To define the structure of the app"
    },
    {
      question: "What is the difference between setState and initState in Flutter?",
      options: ["setState is used for initializing state variables, while initState is used for updating state variables", "setState is used for updating state variables, while initState is used for initializing state variables", "setState is used for handling user input, while initState is used for managing navigation", "setState is used for managing navigation, while initState is used for handling user input"],
      answer: "setState is used for updating state variables, while initState is used for initializing state variables"
    },
    {
      question: "What is React Native?",
      options: ["A web development framework", "A mobile application development framework by Facebook", "A programming language", "A version control system"],
      answer: "A mobile application development framework by Facebook"
    },
    {
      question: "What is the purpose of JSX in React Native?",
      options: ["To define the structure of the app", "To manage navigation", "To handle user input", "To describe UI components using a syntax similar to HTML"],
      answer: "To describe UI components using a syntax similar to HTML"
    },
    {
      question: "What is the role of AsyncStorage in React Native?",
      options: ["To manage navigation", "To handle user authentication", "To store data persistently on the device", "To perform network requests"],
      answer: "To store data persistently on the device"
    },
    {
      question: "What is the purpose of Expo in React Native development?",
      options: ["To handle user input", "To manage navigation", "To simplify the development process by providing tools and services", "To perform network requests"],
      answer: "To simplify the development process by providing tools and services"
    },
    {
      question: "What is the role of Gradle in Android development?",
      options: ["To define the structure of the app", "To manage dependencies and build tasks", "To handle user input", "To create responsive layouts"],
      answer: "To manage dependencies and build tasks"
    },
    {
      question: "What is ProGuard in Android development?",
      options: ["A programming language", "A version control system", "A tool for code obfuscation and optimization", "A cloud computing platform"],
      answer: "A tool for code obfuscation and optimization"
    }
  ];

export const productDesignInterviewQuestions = [
    {
      question: "What is product design?",
      options: ["The process of manufacturing a product", "The process of conceptualizing and creating a product that solves a user's problem", "The process of marketing a product", "The process of selling a product"],
      answer: "The process of conceptualizing and creating a product that solves a user's problem"
    },
    {
      question: "What is the difference between UI and UX design?",
      options: ["UI design focuses on the visual elements, while UX design focuses on the overall user experience", "UI design focuses on the overall user experience, while UX design focuses on the visual elements", "UI design is about creating wireframes, while UX design is about creating mockups", "UI design is about conducting user research, while UX design is about creating prototypes"],
      answer: "UI design focuses on the visual elements, while UX design focuses on the overall user experience"
    },
    {
      question: "What is a persona in product design?",
      options: ["A fictional character representing a user segment", "A document outlining product specifications", "A visualization of the user interface", "A presentation of the product concept"],
      answer: "A fictional character representing a user segment"
    },
    {
      question: "What is a wireframe?",
      options: ["A high-fidelity prototype", "A detailed visual representation of the product", "A low-fidelity representation of the product's layout and functionality", "A document outlining product specifications"],
      answer: "A low-fidelity representation of the product's layout and functionality"
    },
    {
      question: "What is usability testing?",
      options: ["Testing the durability of a product", "Testing the market demand for a product", "Testing the product's ease of use with real users", "Testing the product's visual design"],
      answer: "Testing the product's ease of use with real users"
    },
    {
      question: "What is A/B testing?",
      options: ["Testing two versions of a product to see which one performs better", "Testing the product's accessibility", "Testing the product's user interface", "Testing the product's functionality"],
      answer: "Testing two versions of a product to see which one performs better"
    },
    {
      question: "What is the purpose of a design sprint?",
      options: ["To finalize the product design", "To rapidly prototype and validate product ideas", "To conduct user interviews", "To gather feedback from stakeholders"],
      answer: "To rapidly prototype and validate product ideas"
    },
    {
      question: "What is the difference between qualitative and quantitative research?",
      options: ["Qualitative research focuses on numbers and statistics, while quantitative research focuses on insights and observations", "Qualitative research focuses on insights and observations, while quantitative research focuses on numbers and statistics", "Qualitative research is conducted with a large sample size, while quantitative research is conducted with a small sample size", "Qualitative research is conducted in a laboratory setting, while quantitative research is conducted in a real-world environment"],
      answer: "Qualitative research focuses on insights and observations, while quantitative research focuses on numbers and statistics"
    },
    {
      question: "What is the user journey?",
      options: ["The path users take to purchase a product", "The process of onboarding new users", "The series of interactions users have with a product to achieve their goals", "The process of gathering user feedback"],
      answer: "The series of interactions users have with a product to achieve their goals"
    },
    {
      question: "What is the purpose of a design system?",
      options: ["To create consistency and efficiency in design and development", "To document user requirements", "To manage project timelines", "To conduct usability testing"],
      answer: "To create consistency and efficiency in design and development"
    },
    {
      question: "What is rapid prototyping?",
      options: ["A process of manufacturing physical prototypes quickly", "A process of creating digital prototypes quickly", "A process of testing prototypes with real users quickly", "A process of documenting product specifications quickly"],
      answer: "A process of creating digital prototypes quickly"
    },
    {
      question: "What is design thinking?",
      options: ["A methodology for solving complex problems through creativity and empathy", "A design philosophy focused on aesthetics", "A design process that emphasizes technical specifications", "A design approach that prioritizes market research"],
      answer: "A methodology for solving complex problems through creativity and empathy"
    },
    {
      question: "What is the difference between a feature and a user story?",
      options: ["A feature is a product requirement, while a user story is a design element", "A feature describes what needs to be built, while a user story describes how a user interacts with a feature", "A feature is a design element, while a user story is a product requirement", "A feature describes how a user interacts with a product, while a user story describes what needs to be built"],
      answer: "A feature describes what needs to be built, while a user story describes how a user interacts with a feature"
    },
    {
      question: "What is product-market fit?",
      options: ["The process of testing a product in the market", "The alignment between a product and the needs of the market", "The process of marketing a product to different market segments", "The process of scaling a product to new markets"],
      answer: "The alignment between a product and the needs of the market"
    },
    {
      question: "What is the purpose of a design review?",
      options: ["To finalize the product design", "To gather feedback from stakeholders and ensure the design meets requirements", "To conduct usability testing", "To present the product concept to potential users"],
      answer: "To gather feedback from stakeholders and ensure the design meets requirements"
    },
    {
      question: "What is the role of empathy in product design?",
      options: ["To understand the technical aspects of product development", "To understand the needs and emotions of users", "To manage project timelines", "To create visual designs"],
      answer: "To understand the needs and emotions of users"
    },
    {
      question: "What is the difference between information architecture and interaction design?",
      options: ["Information architecture is about organizing and structuring content, while interaction design is about designing user interactions", "Information architecture is about designing user interactions, while interaction design is about organizing and structuring content", "Information architecture is about visual design, while interaction design is about usability", "Information architecture is about usability, while interaction design is about visual design"],
      answer: "Information architecture is about organizing and structuring content, while interaction design is about designing user interactions"
    },
    {
      question: "What is the role of a product manager in the design process?",
      options: ["To create visual designs", "To conduct user research", "To define product requirements and priorities", "To manage project timelines"],
      answer: "To define product requirements and priorities"
    },
    {
      question: "What is the purpose of a design critique?",
      options: ["To finalize the product design", "To gather feedback from team members and improve the design", "To conduct usability testing", "To present the product concept to stakeholders"],
      answer: "To gather feedback from team members and improve the design"
    },
    {
      question: "What is the difference between user-centered design and market-driven design?",
      options: ["User-centered design focuses on user needs and preferences, while market-driven design focuses on market trends and competition", "User-centered design focuses on market trends and competition, while market-driven design focuses on user needs and preferences", "User-centered design is about technical specifications, while market-driven design is about aesthetics", "User-centered design is about aesthetics, while market-driven design is about technical specifications"],
      answer: "User-centered design focuses on user needs and preferences, while market-driven design focuses on market trends and competition"
    }
  ];

export const graphicsDesignInterviewQuestions = [
    {
      question: "What is graphics design?",
      options: ["The process of creating visual content for digital and print media", "The process of coding websites and applications", "The process of analyzing data visually", "The process of designing hardware components"],
      answer: "The process of creating visual content for digital and print media"
    },
    {
      question: "What is the purpose of typography in graphic design?",
      options: ["To add color to a design", "To create layout compositions", "To communicate information through text", "To add images to a design"],
      answer: "To communicate information through text"
    },
    {
      question: "What is the difference between raster and vector graphics?",
      options: ["Raster graphics use mathematical equations to represent images, while vector graphics use pixels", "Raster graphics are resolution-independent, while vector graphics are resolution-dependent", "Raster graphics use pixels to represent images, while vector graphics use mathematical equations", "Raster graphics are best for logos and illustrations, while vector graphics are best for photographs"],
      answer: "Raster graphics use pixels to represent images, while vector graphics use mathematical equations"
    },
    {
      question: "What is the purpose of color theory in graphic design?",
      options: ["To create visually appealing designs", "To organize information visually", "To optimize websites for search engines", "To enhance user experience"],
      answer: "To create visually appealing designs"
    },
    {
      question: "What is the difference between RGB and CMYK color models?",
      options: ["RGB is used for print media, while CMYK is used for digital media", "RGB is additive, while CMYK is subtractive", "RGB has a wider color gamut than CMYK", "RGB is used for digital media, while CMYK is used for print media"],
      answer: "RGB is used for digital media, while CMYK is used for print media"
    },
    {
      question: "What is the purpose of white space (negative space) in graphic design?",
      options: ["To add texture to a design", "To fill empty areas of a design", "To create balance and harmony", "To add color to a design"],
      answer: "To create balance and harmony"
    },
    {
      question: "What is a grid system in graphic design?",
      options: ["A system for organizing information visually", "A system for managing color palettes", "A system for creating digital illustrations", "A system for aligning elements on a page"],
      answer: "A system for aligning elements on a page"
    },
    {
      question: "What is a mood board?",
      options: ["A board for displaying typography samples", "A board for organizing design assets", "A board for presenting design concepts and inspirations", "A board for managing project timelines"],
      answer: "A board for presenting design concepts and inspirations"
    },
    {
      question: "What is the purpose of contrast in graphic design?",
      options: ["To add depth to a design", "To organize information visually", "To highlight important elements", "To create harmony in a design"],
      answer: "To highlight important elements"
    },
    {
      question: "What is the role of branding in graphic design?",
      options: ["To optimize websites for search engines", "To create visual identities for businesses and products", "To analyze data visually", "To add color to a design"],
      answer: "To create visual identities for businesses and products"
    },
    {
      question: "What is the difference between serif and sans-serif fonts?",
      options: ["Serif fonts have decorative strokes, while sans-serif fonts do not", "Sans-serif fonts are best for body text, while serif fonts are best for headlines", "Serif fonts are more modern than sans-serif fonts", "Serif fonts are easier to read on screens than sans-serif fonts"],
      answer: "Serif fonts have decorative strokes, while sans-serif fonts do not"
    },
    {
      question: "What is kerning in typography?",
      options: ["The process of adjusting the space between characters", "The process of adjusting the space between lines of text", "The process of adjusting the size of characters", "The process of selecting appropriate fonts"],
      answer: "The process of adjusting the space between characters"
    },
    {
      question: "What is the purpose of visual hierarchy in graphic design?",
      options: ["To organize information visually", "To create visually appealing designs", "To optimize websites for search engines", "To enhance user experience"],
      answer: "To organize information visually"
    },
    {
      question: "What is the rule of thirds?",
      options: ["A rule for organizing information visually", "A rule for creating balanced compositions", "A rule for selecting color palettes", "A rule for managing project timelines"],
      answer: "A rule for creating balanced compositions"
    },
    {
      question: "What is the golden ratio?",
      options: ["A mathematical ratio used in design to create aesthetically pleasing compositions", "A color model used in print media", "A technique for selecting appropriate fonts", "A tool for managing project timelines"],
      answer: "A mathematical ratio used in design to create aesthetically pleasing compositions"
    },
    {
      question: "What is the purpose of image compression?",
      options: ["To reduce the size of image files", "To increase the resolution of images", "To add visual effects to images", "To organize images in a design"],
      answer: "To reduce the size of image files"
    },
    {
      question: "What is the role of mockups in graphic design?",
      options: ["To present design concepts to clients", "To finalize the product design", "To analyze data visually", "To manage project timelines"],
      answer: "To present design concepts to clients"
    },
    {
      question: "What is a style guide?",
      options: ["A document outlining design specifications and standards", "A tool for managing project timelines", "A document for analyzing data visually", "A technique for selecting appropriate fonts"],
      answer: "A document outlining design specifications and standards"
    },
    {
      question: "What is the purpose of responsive design?",
      options: ["To optimize websites for search engines", "To create visually appealing designs", "To enhance user experience across different devices and screen sizes", "To analyze data visually"],
      answer: "To enhance user experience across different devices and screen sizes"
    },
    {
      question: "What is the difference between RGB and HEX color codes?",
      options: ["RGB codes are used in print media, while HEX codes are used in digital media", "RGB codes represent colors using hexadecimal notation, while HEX codes represent colors using decimal notation", "RGB codes are used for digital media, while HEX codes are used for print media", "RGB codes are used for text, while HEX codes are used for images"],
      answer: "RGB codes represent colors using hexadecimal notation, while HEX codes represent colors using decimal notation"
    }
  ];