const blogPosts = [
  {
    title: "How to Start Your Coding Journey: A Beginner's Guide",
    date: "20 September 2025",
    excerpt: "Welcome to the exciting world of coding! Learn how to start your coding journey, choose a language, set up your environment, and build projects with confidence.",
    content: `
<h2>Why Learn to Code? The Big Picture</h2>
<p>Coding isn't just for software engineers; it sharpens problem-solving skills, opens doors to high-demand jobs, and lets you create things from scratch. Even in other roles, coding can automate tasks and boost productivity.</p>

<h2>Step 1: Adopt the Right Mindset</h2>
<p>Coding is like learning a language or instrument. Embrace a growth mindset, set realistic goals, be patient, and celebrate small wins.</p>

<h2>Step 2: Choose Your First Programming Language</h2>
<p>Python is beginner-friendly, readable, versatile, and has a huge support community. Alternatives: JavaScript for web development, HTML/CSS for design basics.</p>

<h2>Step 3: Set Up Your Coding Environment</h2>
<p>Install a code editor like VS Code, get the interpreter (e.g., Python), and test it by running a simple "Hello, World!" program. Online platforms like Replit are great too.</p>

<h2>Step 4: Learn the Fundamentals</h2>
<p>Focus on variables, loops, conditionals, functions, and algorithms. Use free resources like Codecademy, freeCodeCamp, YouTube tutorials, and books like "Automate the Boring Stuff with Python."</p>

<h2>Step 5: Practice, Practice, Practice</h2>
<p>Work on coding challenges on LeetCode, HackerRank, or Codewars. Build small projects: calculators, to-do apps, web scrapers. Learn Git and contribute to open-source when ready.</p>

<h2>Step 6: Join Communities and Seek Feedback</h2>
<p>Connect on Reddit, Discord, Stack Overflow, or meetups. Share your code and get mentorship to accelerate growth.</p>

<h2>Step 7: Stay Consistent and Level Up</h2>
<p>Consistency beats intensity. Explore frameworks like Flask or React, build a portfolio, and consider bootcamps or certifications if career-focused.</p>

<h2>Common Pitfalls to Avoid</h2>
<p>Avoid tutorial hell, overwhelm, imposter syndrome, and neglecting breaks. Use techniques like Pomodoro to prevent burnout.</p>

<h2>Final Thoughts</h2>
<p>Take the first step today: install Python, run a simple script, and keep learning. Coding is a gateway to innovation and empowerment.</p>
    `,
    link: "#" // This can be used to dynamically show the full post
  },

  // You can add more blog posts here
];


// Select the container
const blogContainer = document.getElementById("blog-posts");

// Loop through posts and display them
blogPosts.forEach(post => {
  const postDiv = document.createElement("div");
  postDiv.className = "bg-gray-800 p-6 rounded-2xl shadow-lg";

  postDiv.innerHTML = `
    <h2 class="text-2xl font-semibold mb-2">${post.title}</h2>
    <p class="text-gray-300 mb-2">${post.date}</p>
    <p class="text-gray-300 mb-4">${post.excerpt}</p>
    <a href="${post.link}" class="text-blue-400 hover:text-blue-600 font-bold">Read More →</a>
  `;

  blogContainer.appendChild(postDiv);
});

